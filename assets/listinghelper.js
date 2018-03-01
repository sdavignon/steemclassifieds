var user = "";
function listingForm(){
    $(".waiting").show();
  	localStorage.setItem('transfer', '');
  	var user = $(".Topnav__user__username")[0].innerText;
	  $('.Listing').load( '/listingTypeForm.html', function() {
      
      $('input[type=radio][name=id]').each(function () {

       $(this).change(function () {
              CheckItemClick(this);
          });
       });
 
    $(".waiting").hide();
    });

}


$(document).ready(function() {	
setTimeout(function(){
	listingForm();
 }, 500);
});


function CheckItemClick(e){
  $('input[type=radio][name=id]').each(function () {
      $(this).removeClass("glow");
     });
    $(e).addClass("glow");      //add the class to the clicked element
		localStorage.setItem('id',$(e).val());
   // $( "p" ).slideToggle( "slow" );
  //  $(".Action").data('next') = $(e).data('next'); 
}	


function finishStory() { 
 $('.Action').attr("disabled", "disabled");
  $('.Action').innerText = "Hold On!!";
  $('.waiting').show();
  location.href = "/editor";
 }



