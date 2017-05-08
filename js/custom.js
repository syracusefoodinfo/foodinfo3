jQuery(document).ready(function() {

	
		jQuery("nav ul li").hover(function() {
		jQuery(this).addClass("hovering");
	}, function () {
		jQuery(this).removeClass("hovering");
	}); //hover method end
	
		  
		jQuery("ul.showcase-thumbnails li").hover(function() {
		jQuery(this).addClass("active");
	}, function () {
		jQuery(this).removeClass("active");
	}); //hover method end
	
	
	var showcaseToggle = false;
	jQuery(".showcase").hover(function() {
		showcaseToggle = true;

	}, function() {
		showcaseToggle = false;

	}); //hover method end
	
	var count = 0;
	jQuery("ul.showcase-slides li:eq(0)").show();
	
	var totalSlides = jQuery("ul.showcase-slides li").size();

	

	function changeSlides() {
		
		if (showcaseToggle == false) {
		
		//prevent the count from going too far
			if (count >= totalSlides-1) {
				count = 0;
			} else {
				count++;
			} //conditional end
			
			//reset and hide regardless of count
			jQuery("ul.showcase-slides li").hide();
			
			//show the correct slide
			jQuery("ul.showcase-slides li:eq(" + count + ")").show();
		
		} else {
			//do nothing
		} //conditional end
	} // changeSlides end
	
	setInterval(changeSlides, 2000);

	
	$("ul li.dino, ul li.gang, ul li.appe, ul li.cal").hover(function() {
    $(this).css('cursor','pointer');
	}, function() {
		$(this).css('cursor','auto');
	});

	jQuery("ul li.dino").click(function(){
	
	jQuery(".gangnamstyle").hide();
	jQuery(".appethaizing").hide();
	jQuery(".calios").hide();
	jQuery(".dinosaur").show();
	
	});

	jQuery("ul li.gang").click(function(){

	jQuery(".dinosaur").hide();
	jQuery(".appethaizing").hide();
	jQuery(".calios").hide();
	jQuery(".gangnamstyle").show();
	
	});
	
	jQuery("ul li.appe").click(function(){

	jQuery(".dinosaur").hide();
	jQuery(".gangnamstyle").hide();
	jQuery(".calios").hide();
	jQuery(".appethaizing").show();
	
	});
	
	jQuery("ul li.cal").click(function(){

	jQuery(".dinosaur").hide();
	jQuery(".gangnamstyle").hide();
	jQuery(".appethaizing").hide();
	jQuery(".calios").show();
	
	});

	
}); // ready method end

