import React from 'react';
import Helmet from './blocks/Helmet'

export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return ( 
            <div className = "404">
            <Helmet
                    title="Error"
                />
                Error 404!
            </div>
        );
    }
}