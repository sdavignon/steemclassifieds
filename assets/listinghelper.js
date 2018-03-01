var user = "";
function listingForm(){
$(".wait").show();
   		Cookies.set('transfer', '');
  	var user = $(".Topnav__user__username")[0].innerText;
	$('.Listing').load( "/listingTypeForm.html", function() {
    $('input[type=radio][name=id]').change(CheckItemClick());
    $(".wait").hide();
});
 

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


function finishStory() { 
 $('.Action').attr("disabled", "disabled");
  $('.Action').innerText = "Hold On!!";
  $('.waiting').show();
  location.href = "/editor";
 }



