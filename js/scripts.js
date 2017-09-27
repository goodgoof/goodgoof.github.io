	//twitter
	!function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0],
        p=/^http:/.test(d.location)?'http':'https';

        if(!d.getElementById(id)){
          js=d.createElement(s);
          js.id=id;
          js.src=p+'://platform.twitter.com/widgets.js';
          fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    //facebook
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));




  $(function(){
  	//smooth scrolling
  	var $root = $('html, body');
      $('.navbar-nav a').click(function() {
          var href = $.attr(this, 'href');
          $root.animate({
              scrollTop: $(href).offset().top
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
    });
		
		$('#message').css("background-color", "grey");
		$('#message').css("color", "white");
//tooltips
    $("#Skills").tooltip();
    $(".btn-default").tooltip();
    $("#Project_1").tooltip();

    $('[data-toggle="tooltip"]').tooltip();
    $('#submit').on('click', function() {
  		var comment = $('#message').val();
  			console.log(comment);
  			if(comment===""){
  				$("#message").css("border","2px solid red")
  			} else {
  				$('#visible-comment').html('Thank you. We have received your message.\n ' +  comment)
  			  $('#message').hide()
  			  $("#Email").hide()
  			  $('.form-inline').hide()
  			  $('.form-control').hide()
  			}
  			return false;
  });

    $('#message').on('keyup', function(){
  	 console.log('keyup happened');
  	 var charCount=$('#message').val().length ;
  	 console.log(charCount);
  	 $('#char-count').html(charCount);
     if(charCount > 50) {
  	 $('#char-count').css('color','red')
   } else {
  	 $('#char-count').css('color','green')
   }
  });
});
  
//work section
for(i=0; i< works.length; ++i){
	$('#work').append (' \
		<div class="col-xs-6 col-md-3 thumb">\
		  <a href=" ' + works[i].url + ' " class="work-img">\
            <img class="thumbnail img-responsive" alt="Responsive image" src=" ' + works[i].pic + ' ">\
          	<span class="info"><p class="proj-title">Title:</p>  ' + works[i].title + ' </span>\
          </a>\
        </div>\
      ' );
	var images=$("#work img");
	console.log(images[1]);
	if(i%2===0){
		$(images[i]).css("border","2px solid dodgerblue");
	}
	else {
		$(images[i]).css("border", "2px solid salmon");
	};
};
	
	$(".work-img").mouseenter(function(){
 	  $(".info",this).show();
	}).mouseleave(function(){
		$(".info", this).hide();
	});
//google maps

  var map;
   function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.722, lng: -74.037},
    zoom:8
  });
  var marker = new google.maps.Marker({
          position: {lat: 40.722, lng: -74.037},
          map: map
  });
}
