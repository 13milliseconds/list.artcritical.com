import React from 'react';


export default class VenuePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const venue = this.props.venue
        
        return ( 
            <div className="infoWrap">
                    <h2>{venue.name}</h2>
                    <section>
                        {venue.address}<br/>
                        {venue.city}
                    </section>
                    <section>
                        {venue.phone && <div className="phone">{venue.phone}</div>}
                        {venue.website && <a className="website" target="_blank" href={venue.website}>{venue.website}</a>}
                    </section>
                    <section>
                        Represent this gallery? Contact us at <a href="mailto:hello@artcritical.com">hello@artcritical.com</a> to get access to this page.
                    </section>
            </div>
        );
    }
}