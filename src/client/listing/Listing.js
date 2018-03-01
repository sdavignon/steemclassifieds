import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Input } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Affix from '../components/Utils/Affix';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import requiresLogin from '../auth/requiresLogin';
import { getAuthenticatedUserName } from '../reducers';
import FacebookShare from '../components/Button/FacebookShare';
import TwitterShare from '../components/Button/TwitterShare';
import EmailShare from '../components/Button/EmailShare';
import './Listing.less';

@requiresLogin
@injectIntl
@connect(state => ({
  authenticatedUserName: getAuthenticatedUserName(state),
}))
export default class Listing extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    authenticatedUserName: PropTypes.string,
  };

  static defaultProps = {
    authenticatedUserName: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      copied: false,
      inputForm: 'ListingType',
      id: '',
	  next: '',
	  title: '',
	  body: '',
	  topics: '',
    };

    this.handleCopyClick = this.handleCopyClick.bind(this);
  }

  componentDidMount() {
    this.createInviteURL();
  }

 createInviteURL() {
    const { authenticatedUserName } = this.props;
    if (typeof window !== 'undefined') {
      const inviteURL = `${window.location.protocol}//${
        window.location.host
      }/i/@${authenticatedUserName}`;
      this.setState({ inviteURL });
    }
  }

  handleCopyClick() {
    this.setState({ copied: true });
  }



  render() {
    const { intl } = this.props;
    return (
      <div className="shifted">
        <Helmet>
          <title>{intl.formatMessage({ id: 'listing', defaultMessage: 'Create a New Listing' })} - SteemClassifieds</title>
        </Helmet>
        <div className="settings-layout container">
          
            <div className="Listing">
              <ListingForm />
            </div>
        
        </div>
      </div>
    );
  }
}


ListingForm = React.createClass({
    getInitialState: function() {
        return { inputForm: 'ListingType' };
    },
    onClick: function() {
      
        this.setState({ inputForm: '' });
    },
    render: function() {
        return (
            <div>
                { this.state.ListingType == 'ListingType' ? <ListingType /> : null }
                <input type="submit" value="Continue" onClick={this.onClick} />
            </div>
        );
    }
});

ListingType = React.createClass({
    render: function() {
        return (
           <div id="listingtype" class="ant-row ant-form-item">
<h2What type of posting do you have?</h2>
<h4>To Avoid Being Seen As Spam Limit Each Posting to a Single Category, Once per 7 Days</h4>

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
</div>
        );
    }
});
