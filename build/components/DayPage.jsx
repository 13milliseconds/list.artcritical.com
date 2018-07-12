import React from "react"
import moment from "moment"
//COMPONENTS
import VenueList from "./blocks/VenueList"
import Event from "./blocks/Event"
import Loading from "./blocks/loading"
import FeatureBlock from "./blocks/featureBlock"

export default class DayPage extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() { 

        let events = []
		let openings = []
        let closings = []

        this.props.glanceListings.events && this.props.glanceListings.events.map((event) => {
            if(moment(event.date).isSame(this.props.date, 'day')){
                if (event.type === 'reception'){
                    var listing = event.list
                    listing.venue = event.venue
                    listing.artists = event.artists
                    listing.relatedEvents = null
                    listing.description = event.description
                    openings.push(listing)
                } else {
                    events.push(event)
                }
            }
        })
		
		this.props.glanceListings.listings && this.props.glanceListings.listings.map((listing) => {
            //Check if it ends on this day
            if (moment(listing.end).isSame(this.props.date, 'day')) {
                closings.push(listing)  
            } 
        })

        //Sorting all openings by neighborhood
        function compareNeighborhood(a,b) {
            if (a.venue.neighborhood < b.venue.neighborhood)
              return -1;
            if (a.venue.neighborhood > b.venue.neighborhood)
              return 1;
            return 0;
          }
          
          openings.sort(compareNeighborhood);

        let totalListings = closings.length + events.length + openings.length

        var displayEvents = events.map(event => {
                return <Event event={event} key={event._id} user={this.props.user}/>
            })
        
        return (
            <div className="day">
                <div className="featuredSection">
                    {this.props.feature.list && <FeatureBlock feature={this.props.feature} user={this.props.user}/>}
                </div>   
                {!this.props.loading.glance
                ? <div className={this.props.view + " listingsWrap"}>

                        { openings.length > 0 && <div className="openingWrap">
                                <h2>Openings</h2>
                                <VenueList listings={openings} user={this.props.user} dateView="current"/>
                            </div>
                        }

                        { events.length > 0 && <div className="eventsWrap">
                                <h2>Events</h2> 
                                {displayEvents}
                            </div>
                        }

                        { closings.length > 0 && <div className="closingWrap">
                                <h2>Last Chance</h2>
                                <VenueList listings={closings} user={this.props.user} dateView="nodate"/>
                            </div>
                        }
                        
                        { totalListings == 0 && <h4>Nothing happening today.</h4> }
                        </div>
                    : <Loading /> }
            </div>
        )
    }
}