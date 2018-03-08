var user = "";

function listingForm(){
    localStorage.setItem('tags','');
    localStorage.setItem('tag','');  	
    localStorage.setItem('transfer', '');
    localStorage.setItem('current', 'listingTypeForm');
    $(".waiting").show();
 
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
  if(nextForm === undefined) nextForm = 'listingLocation';
  var tag = $('input:radio:checked').val();

  $('.waiting').show();
  $('#next').attr("disabled", true);
  $('#next').innerText = "Hold On!!";
 
  $('.Listing').load('/'+ nextForm+'.html?ie=' + (new Date()).getTime(), function() {
    localStorage.setItem('tag', tag);
    processTags(tag); 
  
    $('#next').innerText = "Next";
    $('#next').attr("disabled", false); 
    
    $(".waiting").hide();
    if(nextForm == 'listingLocation') {
googleMap();
    }
  });
}

function googleMap(){
 var map = new google.maps.Map(document.getElementById("map"), {
   center: new google.maps.LatLng(53.3478, -6.2597),
   zoom: 16,
   mapTypeId: google.maps.MapTypeId.ROADMAP
 });

 var infoWindow = new google.maps.InfoWindow({
   map: map
 });
 // Try HTML5 geolocation.
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
     var pos = {
       lat: position.coords.latitude,
       lng: position.coords.longitude
     };
     infoWindow.setPosition(pos);
     infoWindow.setContent('<b>You are here.</b>');
     map.setCenter(pos);
     var marker = new google.maps.Marker({
       position: pos,
       map: map,
       title: String(pos.lat) + ", " + String(pos.lng),
     });
   }, function() {
     handleLocationError(true, infoWindow, map.getCenter());
   });
 } else {
   // Browser doesn't support Geolocation
   handleLocationError(false, infoWindow, map.getCenter());
 }

}


function lastForm() { 
  
    $(".waiting").show();
 
    $("#next").hide();
  
	  $('.Listing').load( '/listingTypeForm.html', function() {
      $(".waiting").hide();
       $("#next").show();
        localStorage.setItem('tags','');
        localStorage.setItem('tag','');  	
        localStorage.setItem('transfer', '');
        localStorage.setItem('current', 'listingTypeForm');
     
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
