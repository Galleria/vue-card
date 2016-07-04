var paging = new Vue({
	  el: '#vuePaging',
	  data: {
		  select : 0,
		  page : page,
		  start : 0,
		  end : page
	  },
	  template: 
		  		'<div class="row" style="text-align:center">' 
		  		+'<div class="col s12 m12 l12">'
		  		+'<ul class="pagination">' 
		  		+'<li :class="start >= this.select ? \'disabled\' : \'waves-effect\'" @click="previousPage" >'
		  		+	'<a href="#!{{select+1}}"><i class="material-icons">chevron_left</i></a>'
		  		+'</li>'
		  		+'<template v-for="l in page">'
		  		+'<li :class="l == this.select ? \'active disabled\' : \'waves-effect\'" @click="changePage(l)" value="{{l}}" >'
		  		+	'<a href="#!{{l+1}}" >{{l+1}}</a>'
		  		+'</li>'
	  			+'</template>'
	  			+'<li :class="(end-1) <= this.select ? \'disabled\' : \'waves-effect\'" @click="nextPage">'
	  			+	'<a href="#!{{select+1}}"><i class="material-icons">chevron_right</i></a>'
	  			+'</li>'
	  			+'</ul>'
	  			+'</div>'
	  			+'</div>'
	  ,
	  methods:{
		  changePage: function(idx){
			  this.select =idx;
			  console.log( 'changePage::this.select '+this.select );
		  },
		  nextPage:function(){
			  if( this.select < this.end-1 ){
				  console.log( 'nextPage::this.select '+this.select );
				  ++this.select;
			  }
		  },
		  previousPage:function(){
			  if( this.select > this.start ){
				  console.log( 'previousPage::this.select '+this.select );
				  --this.select;
			  }
		  }
	  }
	})

paging.$watch('select',function(){
	 card.refresh(this.select);
})