import React from 'react';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }));
  }

  render() {
    /* * * * Conditional rendering * * * */
    let page;
    let coloring;
    const { liked } = this.state;
    if (liked === false) {
      page = '🖤 Like';
      coloring = 'black';
    }
    if (liked === true) {
      page = '🧡 Liked';
      coloring = '#f50';
    }
    /* * * * * * Styling * * * * * */
    const styling = {
      // TODO: Hover options
      position: 'absolute',
      width: 75,
      height: 25,
      bottom: 8,
      left: 4,
      color: coloring,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid lightgrey',
      borderRadius: '3px',
    };
    return (
      <div>
        <button type="button" style={styling} onClick={this.handleClick}>{page}</button>
      </div>
    );
  }
}

export default Likes;
