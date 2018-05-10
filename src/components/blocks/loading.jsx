import React from 'react';
import { Alert } from 'reactstrap';

export default class Loading extends React.Component {

  render() {
    return (
      <Alert color="info">
        Loading...
      </Alert>
    );
  }
}