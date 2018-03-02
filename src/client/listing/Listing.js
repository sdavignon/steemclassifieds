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
     const { authenticatedUserName } = this.props;
    return (
      <div className="shifted">
        <Helmet>
          <title>{intl.formatMessage({ id: 'listing', defaultMessage: 'Create a New Listing' })} - SteemClassifieds</title>
        </Helmet>
        <div className="settings-layout container">
          <div className="waiting"><img src="/wait1.gif" /><h2>Please wait, ${authenticatedUserName}</h2></div>
            <div className="Listing">
       
            </div>
            <div class="Editor__bottom__right"><div class="ant-row ant-form-item Editor__bottom__cancel"><div class="ant-form-item-control-wrapper"><div class="ant-form-item-control "></div></div></div><div class="ant-row ant-form-item Editor__bottom__submit"><div class="ant-form-item-control-wrapper"><div class="ant-form-item-control "><button class="Action ant-btn-lg" type="">Next</button></div></div></div></div>
        </div>
      </div>
    );
  }
}

