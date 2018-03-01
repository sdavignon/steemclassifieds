
function listingForm(){
$(".wait").show();
   		Cookies.set('transfer', '');
	$('.Listing').append($('#listingtype'));
  
	var user = $(".Topnav__user__username")[0].innerText;

$(".wait").hide();
}


$(document).ready(function() {	
setTimeout(function(){
	listingForm();
 }, 500);
});


function CheckItemClick(e){
		Cookies.set($(e).name,$(e).val()); 
		$(e).addClass("glow");      //add the class to the clicked element
		localStorage.setItem($(e).name,$(e).val());
 $( "p" ).slideToggle( "slow" );
    $(".Action").data('next') = $(e).data('next'); 
}	

$(window).scroll(function() {
    var y = $(".waiting").offset().top;
    var scrollY = $(window).scrollTop();
    if (scrollY > y) {
        var padY = scrollY - y;
        $(".waiting").css("paddingTop", padY);
    }
});
function finishStory() { 
 $('.Action').attr("disabled", "disabled");
  $('.Action').innerText = "Hold On!!";
  $('.waiting').show();
  location.href = "/editor";
 }



