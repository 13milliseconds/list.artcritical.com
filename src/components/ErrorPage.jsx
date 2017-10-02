import React from 'react';


export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return ( 
            <div className = "404">
                Error 404!
            </div>
        );
    }
}