jQuery( document ).ready( function( $ ) {
	$( document ).foundation();

	$('#menu').on("click", function(){
		$('#menu-dropdown').toggle("slide");
	});

	$("#menu-exit").on("click", function(){
	    $("#menu-dropdown").hide();
	}); 
	jQuery( function( $ ) {
		$('.js-slider').slick({
			dots: true,
			arrows: true,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			      	arrows: false
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false
			      }
			    }
		    ]
		});
	});
	
	$.ajax({
	    // The URL for the request
	    url: "offers-dtv.json",
	 
	    // The data to send (will be converted to a query string)
	    data: {
	        "offers": "data"
	    },
	 
	    // Whether this is a POST or GET request
	    type: "GET",
	 
	    // The type of data we expect back
	    dataType : "json",
	})
	// Code to run if the request succeeds (is done);
	// The response is passed to the function
	.done(function( json ) {
		console.log(json);

		var object = json.offers;
		console.log(object);
		// for loop to go through the objects in the json file and fill in dynamic data
    	for (var i = 0; i < object.length; i++) {
    	    var name = object[i].name;
    	    var channels = object[i].channels;
    	    var price = object[i].price;
    	    var legal = object[i].legal;

    	    $("#slide-"+ i).find('.slide__title').html( name );
    	    $("#slide-"+ i).find('.slide__text--channels').html( channels + " channels");
    		$("#slide-"+ i).find('.slide__price-amount').html( price );
    		$("#slide-"+ i).find('.slide__text--month').html( legal );

    		// change css for border colors
    		// var colors = ['#EFB300', '#00A383', '#4BACCB','#EFB300', '#00A383', '#4BACCB'];
    		// $("#slide-"+ i).css("border-top", "12px solid " + colors[i]);
    	}
	})

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	.fail(function( xhr, status, errorThrown ) {
		alert( "Sorry, there was a problem!" );
		console.log( "Error: " + errorThrown );
		console.log( "Status: " + status );
		console.dir( xhr );
	})
	// Code to run regardless of success or failure;
	.always(function( xhr, status ) {
		alert( "The request is complete!" );
	});
 });


