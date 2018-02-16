import React from 'react';
import { FormattedMessage } from 'react-intl';
import './PostListing.less';

const PostListing = () => (
  <div className="PostListing">
    <div className="container container-small">
      <h1 className="postlisting-message">
        <FormattedMessage
          id="postlisting"
          defaultMessage="Select Your Listing Type"
        />
      </h1>
      <div class="picker">
    <ul class="selection-list">
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="jo">
		</span>
		<span class="right-side">
		    job offered
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="go">
		</span>
		<span class="right-side">
		    gig offered
			<i>(I'm hiring for a short-term, small or odd job)</i>
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="jw">
		</span>
		<span class="right-side">
		    resume / job wanted
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="ho">
		</span>
		<span class="right-side">
		    housing offered
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="hw">
		</span>
		<span class="right-side">
		    housing wanted
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="fso">
		</span>
		<span class="right-side">
		    for sale by owner
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="fsd">
		</span>
		<span class="right-side">
		    for sale by dealer
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="iwo">
		</span>
		<span class="right-side">
		    wanted by owner
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="iwd">
		</span>
		<span class="right-side">
		    wanted by dealer
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="so">
		</span>
		<span class="right-side">
		    service offered
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="p">
		</span>
		<span class="right-side">
		    personal / romance
		</span>
	    </label>
	</li>
	   <li class="start-of-grouping">
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="c">
		</span>
		<span class="right-side">
		    community
		</span>
	    </label>
	</li>
	   <li>
	    <label>
		<span class="left-side">
		    <input type="radio" name="id" value="e">
		</span>
		<span class="right-side">
		    event / class
		</span>
	    </label>
	</li>
    </ul>
    <button type="submit" class="pickbutton" name="go" value="Continue">continue</button>
</div>
    </div>
  </div>
);

export default PostListing;
