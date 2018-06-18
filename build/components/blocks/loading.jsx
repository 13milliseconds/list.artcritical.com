import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Loading extends React.Component {

  render() {
    return (
      <div className="loading">
        <FontAwesomeIcon icon={['fal', 'spinner-third']} spin />
      </div>
    );
  }
}