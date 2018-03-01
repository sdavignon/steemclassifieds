
function listingForm(){
$(".wait").show();
   		Cookies.set('transfer', '');
	$('.Listing').html('<div id="listingtype" class="ant-row ant-form-item">
<h4>To Avoid Being Seen As Spam Limit Each Posting to a Single Category, Once per 7 Days</h4>

<h2What type of posting do you have?</h2>
    <ul class="selection-list">
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="job-offered">
		</span>
		<span class="right-side">
		    job offered
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="gig-offered">
		</span>
		<span class="right-side">
		    gig offered
			<h4>(I'm hiring for a short-term, small or odd job)</h4>
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="resume-job-wanted">
		</span>
		<span class="right-side">
		    resume / job wanted
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="housing-offered">
		</span>
		<span class="right-side">
		    housing offered
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="housing-wanted">
		</span>
		<span class="right-side">
		    housing wanted
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="for-sale-by-owner">
		</span>
		<span class="right-side">
		    for sale by owner
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="for-sale-by-dealer">
		</span>
		<span class="right-side">
		    for sale by dealer
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="wanted-by-owner">
		</span>
		<span class="right-side">
		    wanted by owner
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="wanted-by-dealer">
		</span>
		<span class="right-side">
		    wanted by dealer
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="service-offered">
		</span>
		<span class="right-side">
		    service offered
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="personal-romance">
		</span>
		<span class="right-side">
		    personal / romance
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="community">
		</span>
		<span class="right-side">
		    community
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="event-class">
		</span>
		<span class="right-side">
		    event / class
		</span>
	    </label>
	</li>
    </ul>
     <button type="submit" class="pickbutton" name="go" value="Continue">Continue</button>
</div>
  <div id="backgrounds" class="ant-row ant-form-item" class="height:200px;"></div>
  <div id="previewadventure" class="ant-row ant-form-item" class="height:450px;"></div>
  <div class="ant-row ant-form-item"></div>
  <div class="Editor__bottom"><div class="Editor__bottom__right">
  <div class="ant-row ant-form-item"><div class="ant-form-item-control-wrapper">
  <div class="ant-form-item-control "><button class="Action" type="" onclick="finishStory();">Finish Your Post</button></div></div></div></div></div>'); 
	
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



