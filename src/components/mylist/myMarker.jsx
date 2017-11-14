import React from 'react';

export default class Marker extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className="marker" data-id={this.props.listing._id}>
            {this.props.num}
        </div>
    );
  }
}