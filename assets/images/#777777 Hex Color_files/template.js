
	//menu

jQuery(function($){

	$('.logo').bind('mouseover', function(){
		$('.nav>li>ul').hide();
		$('.nav>li:first>ul').show();
		});

	$('.nav>li>ul').hide();
  
	//$('.nav>li:first>ul').show();

	$currentnode = $('.nav li.active');
	if ($currentnode.length){
		if ($currentnode.find('ul').length){
			$currentnode.find('ul').show();
		}
		else if (!$currentnode.parent().is('.nav')){
			$currentnode.parent().show();
		}
	} 
	 

	// code to handle expanding on mouseover
	$('.nav>li').bind('mouseover', function(){
		$('.nav>li:first>ul').hide();
		if ($('.nav ul:animated').length==0) {
			$heading = $(this);
			$expandedSiblings = $heading.siblings().find('ul:visible');
			if ($expandedSiblings.length!=0) {
				$expandedSiblings.hide(0, function(){
					$heading.find('ul').show();
			});
		} else {
			$heading.find('ul').show();
		}
	}
  });
});  


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
 


  WebFontConfig = {
    google: { families: [ 'Raleway:400,100,200,300,500,600,700,800,900:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 



  WebFontConfig = {
    google: { families: [ 'Open+Sans:400,600:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
  

