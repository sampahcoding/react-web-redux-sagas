import React, { Component } from 'react';

class PageTwo extends Component {
  render() {
    return (
      <div>
        page number: {this.props.match.params.number}
      </div>
    );
  }
}

export default PageTwo;
