import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import { rhythm } from '../utils/typography';

export default class Index extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />


        <p style={{
          color: 'rebeccapuple',
          textDecoration: 'none',

        }}>Test</p>

      </div>
    );
  }
}
