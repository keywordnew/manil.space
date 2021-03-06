import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/keywordnew"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/keywordnew"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://toot.cafe/@manil"
          target="_blank"
          rel="noopener noreferrer"
        >
          mastodon
        </a>{' '}
        &bull; inspired by{' '}
        <a
          href="https://github.com/keywordnew/manil.space/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Overreacted
        </a>
      </footer>
    );
  }
}

export default Footer;
