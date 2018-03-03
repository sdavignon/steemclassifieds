var user = "";

function listingForm(){
    localStorage.setItem('tags','');
    localStorage.setItem('current', 'listingTypeForm');
    $(".waiting").show();
  	localStorage.setItem('transfer', '');
  	user = $(".Topnav__user__username")[0].innerText;
  
	  $('.Listing').load( '/listingTypeForm.html', function() {
       $('input[type=radio][name=id]').each(function () {
       $(this).change(function () {
              CheckItemClick(this);
          });
      });
      $(".waiting").hide();
      $("#next").click(nextForm);
      $("#back").click(lastForm);
    });
}

window.onload = listingForm();
/*
$(document).ready(function() {	
setTimeout(function(){
	listingForm();
  	
  
 }, 1000);
});
*/

function CheckItemClick(e){
 
    var tags = localStorage.getItem('tags');

    if(tags){tags = tags+' ' + $(e).val();}else{tags = $(e).val();}
    localStorage.setItem('tags',tags);

    $("#back").data('last',  localStorage.getItem('current'));
    $("#next").data('next', $(e).data('next'));

    $('#next').attr("disabled", false);  
    localStorage.setItem('current', $(e).data('next'));
}	

function nextForm() { 
  $('#next').attr("disabled", true);
  $('#next').innerText = "Hold On!!";
  $('#back').show();
  $('.waiting').show();
  
  $('.Listing').load('/'+ $("#next").data('next')+'.html', function(){$('input[type=radio][name=id]').each(function(){$(this).change(function () {CheckItemClick(this);});});

  $('#next').innerText = "Next";
  $('#next').attr("disabled", false); 
  $(".waiting").hide();
  $('#back').show();
 });
 }
function lastForm() { 
  $('#back').attr("disabled", true);
  $('#back').innerText = "Hold On!!";
  $('#next').show();
  $('.waiting').show();
  
  $('.Listing').load('/'+ $("#back").data('last')+'.html', function(){$('input[type=radio][name=id]').each(function(){$(this).change(function () {CheckItemClick(this);});});

  $('#back').innerText = "Next";
  $('#back').attr("disabled", false); 
  $(".waiting").hide();
  $('#next').show();
 });
 }

function finishStory() { 
 $('.Action').attr("disabled", "disabled");
  $('.Action').innerText = "Hold On!!";
  $('.waiting').show();
  location.href = "/editor";
 }



