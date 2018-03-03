var user = "";

function listingForm(){
    localStorage.setItem('tags','');
    localStorage.setItem('tag','');
    localStorage.setItem('current', 'listingTypeForm');
    $(".waiting").show();
  	localStorage.setItem('transfer', '');
  //	user = $(".Topnav__user__username")[0].innerText;
  
	  $('.Listing').load( '/listingTypeForm.html', function() {
      $(".waiting").hide();
      $("#next").click(nextForm);
      $("#back").click(lastForm);
    });
}

window.onload = listingForm();

$(document).ready(function() {	
  setTimeout(function(){
    $('input[type=radio][name=id]').each(function () {
       $(this).change(function () {
              CheckItemClick(this);
          });
      });
 }, 1000);
});


function CheckItemClick(e){
 
    var tags = localStorage.getItem('tags');
    localStorage.setItem('tags',$(e).val());
    if(tags){tags = tags+' ' + $(e).val();}else{tags = $(e).val();}
    localStorage.setItem('tags',tags);
    var next = $(e).data('next');
    if(!next){next = "listingLocation";}
    $("#back").data('last',  localStorage.getItem('current'));
    $("#next").data('next', next);

    $('#next').attr("disabled", false);  
    localStorage.setItem('current',next);
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
  var tags = localStorage.getItem('tags');
  var tag = localStorage.getItem('tag');
  tags = tags.replace(tag, tags).trim();
  localStorage.setItem('tags',tags);
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



