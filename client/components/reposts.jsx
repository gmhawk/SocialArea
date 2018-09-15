import React from 'react';

class Reposts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposted: false,
      ask: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAsk = this.handleAsk.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      reposted: !prevState.reposted,
    }));
  }

  handleAsk() {
    this.setState(prevState => ({
      ask: !prevState.ask,
    }));
  }

  render() {
    /* * * * Conditional rendering * * * */
    let page;
    let coloring;
    let media;
    const { reposted, ask } = this.state;
    if (reposted === false) {
      page = 'Repost';
      coloring = 'black';
      media = null;
    }
    if (reposted === true && ask === true) {
      page = 'Reposted';
      coloring = '#f50';
      media = <SocialMedia handleClick={this.handleClick} handleAsk={this.handleAsk} />;
    } else if (reposted === true && ask === false) {
      page = 'Reposted';
      coloring = '#f50';
    }

    /* * * * * * Styling * * * * * */
    const styling = {
      position: 'absolute',
      width: 90,
      height: 25,
      bottom: 5,
      left: 95,
      color: coloring,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>
          {page}
        </button>
        {media}
      </div>
    );
  }
}

function SocialMedia(props) {
  const styling = {
    position: 'absolute',
    width: 325,
    height: 150,
    bottom: -150,
    left: 95,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderRadius: '4px',
    lineHeight: '35px',
  };
  const innerStyling = {
    marginTop: 8,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    textAlign: 'left',
    lineHeight: '20px',
  };
  const buttonStyling = {
    position: 'absolute',
    width: 50,
    height: 22,
    right: 15,
    bottom: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    lineHeight: '19px',
  };
  const checkboxStyling = {
    position: 'absolute',
    left: 20,
    bottom: 15,
  };
  const checkboxWordStyle = {
    position: 'absolute',
    left: 40,
    bottom: -5.5,
  };
  const twitter = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 25,
    bottom: 39,
  };
  const facebook = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 64,
    bottom: 39,
  };
  const tumblr = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 102.5,
    bottom: 39,
  };
  const google = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 141,
    bottom: 39,
  };
  const pinterest = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 180,
    bottom: 39,
  };
  const telegram = {
    position: 'absolute',
    height: 31,
    width: 32,
    left: 219,
    bottom: 39,
  };
  return (
    <div style={styling}>
      <div style={innerStyling}>
        This has been reposted to your SoundCloud profile.
        Would you like to share it with other friends as well?
      </div>
      <div id="social-icons">
        <input type="image" src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png" alt="twitter_share_icon" style={twitter} />
        <input type="image" src="http://files.softicons.com/download/social-media-icons/simple-icons-by-dan-leech/png/512x512/facebook.png" alt="facebook_share_icon" style={facebook} />
        <input type="image" src="https://vectors.pro/wp-content/uploads/2018/04/tumblr-icon-logo-vector-square.png" alt="tumblr_share_icon" style={tumblr} />
        <input type="image" src="https://pourron.com/wp-content/uploads/2015/09/nouveau-logo-google-plus-carre-petit.png" alt="google_share_icon" style={google} />
        <input type="image" src="https://uploads-ssl.webflow.com/5af3422365afd71a6f4ab395/5b1983503b6fc4cbfa5287c1_pinterest-p-500.png" alt="pinterest_share_icon" style={pinterest} />
        <input type="image" src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/telegram-512.png" alt="email_share_icon" style={telegram} />
      </div>
      <input type="checkbox" onClick={props.handleAsk} style={checkboxStyling} />
      <p style={checkboxWordStyle}>Don&apos;t ask me again</p>
      <button type="button" onClick={props.handleClick} style={buttonStyling}>Close</button>
    </div>
  );
}

export default Reposts;
