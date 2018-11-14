import React from 'react'
import moment from 'moment'

export default class Date extends React.Component {
        
    render() {
        
    return (
        <span>{moment(this.props.date).format('MMMM D')}</span>
    );
  }
} 