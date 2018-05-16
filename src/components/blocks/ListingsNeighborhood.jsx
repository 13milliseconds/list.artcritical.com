import React from 'react';
//COMPONENTS
import VenueList from './VenueList'

export default class ListingsHood extends React.Component {
    constructor(props) {
        super(props);
    }

	
    render() {
      
    return (
        <div className="neighborhood">
            <h2>{this.props.title}</h2>
            <VenueList {...this.props}/>
        </div>
    );
  }
}