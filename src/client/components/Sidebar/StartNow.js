import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './SidebarBlock.less';

const StartNow = () => (
  <div className="SidebarBlock">
    <h3 className="SidebarBlock__title">
      <FormattedMessage id="never_written_post" defaultMessage="Never written a Classifed?" />
    </h3>
    <Link to="/listing">
      <button className="SidebarBlock__button">
        <FormattedMessage id="start_now" defaultMessage="Start now" />
      </button>
    </Link>
  </div>
);

export default StartNow;
