import React from 'react'
import {Helmet} from 'react-helmet'

export default class HelmetBlock extends React.Component{
    constructor(props){
        super(props)
    }

    render () {
        return(
            <Helmet>
                {this.props.title && <title>{this.props.title} - artcritical</title>}
                {this.props.link && <link rel="canonical" href={this.props.link} />}
            </Helmet>
        )
    }
}