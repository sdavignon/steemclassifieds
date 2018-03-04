var user = "";

function listingForm(){
    localStorage.setItem('tags','');
    localStorage.setItem('tag','');  	
    localStorage.setItem('transfer', '');
    localStorage.setItem('current', 'listingTypeForm');
    $(".waiting").show();
    $("#back").hide();
    $("#next").hide();

  	user = $("#username").val();
  
	  $('.Listing').load( '/listingTypeForm.html', function() {
      $(".waiting").hide();
       $("#next").show();

      $("#next").click(nextForm);
    });
}

//window.onload = listingForm();

$(document).ready(function() {	
  setTimeout(function(){
    listingForm();
 }, 1000);
 setTimeout(attachClick, 2000);

});

function processTags(tag, remove){
   if(tag === undefined) tag = "";
   if(remove === undefined) remove = false;
   tag = tag + " " + localStorage.getItem('tags');
   var tags = tag.split(" ");
 
   var uniquetags = [];
   if(remove){
    $.each(tags, function(i, el){
        if(el !== tag){
          if($.inArray(el, uniquetags) === -1) uniquetags.push(el);
        }
    });
   }else{
      $.each(tags, function(i, el){
        if($.inArray(el, uniquetags) === -1) uniquetags.push(el);
    });
   }
  tag = uniquetags.join(" ");
  localStorage.setItem('tags',tag);
  //return tag;     
} 


function checkItemClick(){
 
    //localStorage.setItem('tags',$(this).val());
     var next = $(e).data('next');
    if(!next){next = "listingLocation";}
    $("#back").data('last',  localStorage.getItem('current'));
    $("#next").data('next', next);

    $('#next').attr("disabled", false);  
    localStorage.setItem('current',next);
}	

function nextForm() { 
  var nextForm = $('input:radio').data('next');
  var tag = $('input:radio').val();

  $('.waiting').show();
  $('#next').attr("disabled", true);
  $('#next').innerText = "Hold On!!";
 
  $('.Listing').load('/'+ nextForm+'.html', function() {
    localStorage.setItem('tag', tag);
    processTags(tag);
    $("#back").data('back', nextForm);
    $("#back").data('tag', tag);
    $('#back').attr("disabled", false);  
    $('#next').innerText = "Next";
    $('#next').attr("disabled", false); 
    $(".waiting").hide();
    $('#back').show();
  });
}

function lastForm() { 
  var lastForm = $("#back").data('back');
  var tag = $("#back").data('tag'); 
  $('#back').attr("disabled", true);
  $('#back').innerText = "Hold On!!";
  $('.waiting').show();
  
  processTags(tag, true);
  localStorage.setItem('tag', '');
 
 
  $('.Listing').load('/'+ lastForm+'.html', function() {
 
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



