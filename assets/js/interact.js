$(document).ready(function(){
	$("#closenav").hide();
	$(".viewpopup").hide();
	
	var closenav =$("#closenav"),
		navbtn =$("#navbtn"),
		navigation =$(".fullnavigation"),
		navigationbtns =$(".fullnavigation ul li a")
		imgdisplay=$(".imgdisplay"),
		contentbox =$(".contentbox"),
	
	navbtn.click(function() {
		navigation.animate({right:'0px'}, 1000, 'easeOutBack');
		navbtn.fadeOut("500");
		closenav.delay(1000).fadeIn("100");
	});
	
	closenav.click(function() {
		navigation.animate({right:'-200px'}, 1000);
		navbtn.delay(1000).fadeIn("200");
		closenav.fadeOut("800");
	});	
	
	navigationbtns.click(function() {
		navigation.animate({right:'-200px'}, 1000);
		navbtn.delay(1000).fadeIn("200");
		closenav.fadeOut("800");
	});
	
	contentbox.mouseenter(function() {
		$(this).children().first().next().find("p").removeClass("animated fadeOutDown");
		$(this).children().first().next().find("p").addClass("animated fadeInDown");
	});
	
	contentbox.mouseleave(function() {
		$(this).children().first().next().find("p").removeClass("animated fadeInDown");
		$(this).children().first().next().find("p").addClass("animated fadeOutDown");
	});
	

	console.log($(".main"));
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
	   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
	
});


$(window).load(function(){
	//Fade in Different Text
	var textlist = new Array("Reggae Music", "Skimboarding","The Beach", "Simple Design");
	var timer;
	
	function textFade (index){
		$("#update").hide().html(textlist[index])
		.fadeIn(800);
		
		index++;
		timer = setTimeout(function(){
			textFade(index % textlist.length);
			}, 2000);
		}
$(document).ready(function(){
		textFade(0);
	});
});



$(function() {

    function scroll(direction) {

        var scroll, i,
                positions = [],
                here = $(window).scrollTop(),
                collection = $('.section');

        collection.each(function() {
            positions.push(parseInt($(this).offset()['top'],10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); break; }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); break; }
        }

        if (scroll) {
            $.scrollTo(scroll, {
                duration: 1000       
            });
        }

        return false;
    }

    $("#next,#prev").click(function() {        
        return scroll($(this).attr('id'));        
    });

// Added code
// Register keypress events for the current page
$(document).keypress(function(e) {
	switch(e.keyCode) { 
		// User pressed "up" arrow
      	case 38:
    		return scroll("prev");
     	break;
   		// User pressed "down" arrow
     	case 40:
       		return scroll("next");
    	break;
	}
});

// End added code

    $(".scrolltoanchor").click(function() {
        $.scrollTo($($(this).attr("href")), {
            duration: 2000
        });
        return false;
    });

});


    
