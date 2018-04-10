import React, { Component } from 'react';

export default class AuthSuccess extends Component {
  componentDidMount() {
    const url = '/mylist';
    window.opener.open(url, '_self');
    window.opener.focus();
    window.close();
  }

  render() {
    return (
      <div>
        AUTH SUCCESS!
      </div>
    );
  }
}