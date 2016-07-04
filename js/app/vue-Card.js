var card = new Vue({
	  el: '#vueCard',
	  data:{
		  select : 0,
		  page : page,
		  cards : cardBoard
	  },
	  template: '<div class="row">' 
		  		+'<template v-for="idx in cards.length-(page*(select)) >= page ? page : cards.length-(page*(select))">'
		  		+ 	'<div class="col s12 m4 l3">'
	  			+		'<div class="card small hoverable">'
	  		    +			'<div class="card-image waves-effect waves-block waves-light">'
	  		    +				'<img class="activator" src="{{cards[idx+(page*(select))].img}}">'
	  		    +			'</div>'
	  		    +		'<div class="card-content">'
	  		    +			'<span class="card-title activator grey-text text-darken-4">{{cards[idx+(page*(select))].title}}<i class="material-icons right">more_vert</i></span>'
	  		    +			'<p><a href="#">This is a link</a></p>'
	  		    +		'</div>'
		  		+		'<div class="card-reveal">'
		  		+			'<span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>'
		  		+			'<p >Here is some more information about this product that is only revealed once clicked on.</p>'
		  		+		'</div>'
	  		    +	'</div>'
	  			+	'</div>'
	  			+'</template>'
	  			+'</div>',
	  	methods:{
	  		refresh:function(select){
	  			this.select = select;
	  		}
	  	}

	})