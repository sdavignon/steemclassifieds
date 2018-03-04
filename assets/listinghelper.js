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

function nextForm() { 
   if($('input:radio:checked').val() === undefined){
    alert('Select a Classified Category');
    return;
  }
 
  var nextForm = $('input:radio:checked').data('next');
  var tag = $('input:radio:checked').val();

  $('.waiting').show();
  $('#next').attr("disabled", true);
  $('#next').innerText = "Hold On!!";
 
  $('.Listing').load('/'+ nextForm+'.html', function() {
    localStorage.setItem('tag', tag);
    processTags(tag); 
    $('#back').data("back", $('#next').data('next')); 
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
  
  
 
 
  $('.Listing').load('/'+ lastForm+'.html', function() {
    processTags(tag, true);
  localStorage.setItem('tag', '');
    $('#next').data("next", $('#back').data('back')); 
 
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



function checkItemClick(){
 
    //localStorage.setItem('tags',$(this).val());
     var next = $(e).data('next');
    if(!next){next = "listingLocation";}
    $("#back").data('last',  localStorage.getItem('current'));
    $("#next").data('next', next);

    $('#next').attr("disabled", false);  
    localStorage.setItem('current',next);
}	
