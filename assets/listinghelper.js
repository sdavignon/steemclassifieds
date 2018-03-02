var user = "";
function listingForm(){
localStorage.setItem('id','');
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
       $(".Action").click(nextForm);

    });

}

window.onload = listingForm();
$(document).ready(function() {	
setTimeout(function(){
	listingForm();
  	
  
 }, 1000);
});


function CheckItemClick(e){
 // $('input[type=radio][name=id]').each(function () {
 //     $(this).parent.removeClass("glow");
 //    });
  //  $(e).parent.addClass("glow");      //add the class to the clicked element
    var tags = localStorage.getItem('id');
  if(tags){tags = tags+' ' + $(e).val();}
  else{tags = $(e).val();}
		localStorage.setItem('id',tags);
  $(".Action").data('next', $(e).data('next'));
 $('.Action').attr("disabled", false);  
}	
function nextForm() { 
 $('.Action').attr("disabled", true);
 $('.Action').innerText = "Hold On!!";
 $('.waiting').show();
 $('.Listing').load( '/'+ $(".Action").data('next')+'.html', function() {
      
      $('input[type=radio][name=id]').each(function () {

       $(this).change(function () {
              CheckItemClick(this);
          });
       });
    $('.Action').innerText = "Next";
    $('.Action').attr("disabled", false); 
    $(".waiting").hide();

 });


 }


function finishStory() { 
 $('.Action').attr("disabled", "disabled");
  $('.Action').innerText = "Hold On!!";
  $('.waiting').show();
  location.href = "/editor";
 }



