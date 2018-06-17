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
                {this.props.ogType && <meta property="og:type" content={this.props.ogType} />}
                {this.props.ogUrl && <meta property="og:url" content={this.props.ogUrl} />}
                {this.props.ogTitle && <meta property="og:title" content={this.props.ogTitle} />}
                {this.props.ogDescription && <meta property="og:description" content={this.props.ogDescription} />}
                {this.props.ogImage && <meta property="og:image" content={this.props.ogImage} />}
            </Helmet>
        )
    }
}