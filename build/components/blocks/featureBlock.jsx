import React from 'react';
import AuthActions from '../../actions/AuthActions';
//COMPONENTS
import {IntlProvider, FormattedDate} from 'react-intl';
import ImageBlock from './imageBlock';
import HtmlText from './HtmlText' 
import Helmet from './Helmet'
import ListingNameDisplay from './ListingNameDisplay'

export default class FeatureBlock extends React.Component {
    constructor(props) {
        super(props);
		
		this.state={
			inList: false
		}
        
        // Function binding
        this.addToList = this.addToList.bind(this);
		this.componentWillMount = this.componentWillMount.bind(this);
    }
	
	componentWillMount(){
		var self = this;
		if (this.props.feature.list){
			this.props.user.mylist.forEach(function(listing){
				if (listing._id == self.props.feature.list._id){
					self.setState({
						inList: true
					})		
				}
			})
		}
    }
    
    //Function to add a listing to the personal list
    addToList(e, listing){
        
        //Add or remove the listing to the user's list
        AuthActions.addToUserList(listing);
        //Toggle the className
        if (this.state.inList == false){
            this.setState({inList: true})
        } else {
            this.setState({inList: false})
        }
    }
	
    render() {
        const feature = this.props.feature

        const venue = feature.venue ? feature.venue : {}
        const listing = feature.list ? feature.list : {}
        const event = feature.event ? feature.event : {}
        const type = feature.type

        let image = type === 'event' ? event.image : listing.image 

        let title = type === 'event'
            ? event.name
            : listing.title ? listing.title : <ListingNameDisplay {...listing} />

        let description = type === 'event'
            ? event.description
            : listing.description
        
        let date = type === 'event' && event.date
                ?<IntlProvider locale="en">
                    <FormattedDate value={event.date} day="numeric" month="short" />
                </IntlProvider>
                : ''
        let start = type != 'event' && listing.start
            ? <IntlProvider locale="en">
                    <FormattedDate value={listing.start} day="numeric" month="short" />
                </IntlProvider>
            : ''
        let end = type != 'event' && listing.end
            ? <IntlProvider locale="en">
                    <FormattedDate value={listing.end} day="numeric" month="short" />
                </IntlProvider>
            : ''
        let StrippedDescription = feature.text && feature.text.replace(/(<([^>]+)>)/ig,"")
      
    return (
        <div className="feature-wrap">
        <h5>Featured</h5>

        <Helmet
            ogTitle={listing.name + " at " + venue.name}
            ogDescription={StrippedDescription}
            ogImage={"https://res.cloudinary.com/artcritical/image/upload/" + image + ".jpg"}
                />


            <div className="picture">
                {image ? <ImageBlock image={image} classes="feature" /> : ''}
            </div>
            <div className="info">
                <h3>{title} at <a className="venueName" href={"/venue/" + venue.slug}>{venue.name}</a></h3>
                <HtmlText content={feature.text} />
                {description && 
                    <div className="notes">
                        <h6>Notes</h6>
                        {description}
                    </div>
                }
                <div className="dates">{date}{start}{end? ' to ' : ''}{end}</div>
                <div className="address">{venue.address1} {venue.address2}, {venue.city}</div>
                {this.props.user._id  
                    ? this.state.inList
                        ?<a className='button inList' onClick={(e) => this.addToList(e, listing)}>Remove from your list</a>
                        :<a className='button' onClick={(e) => this.addToList(e, listing)}>Add to your list</a>
                    : ''
                }
                <div className="shareWrap">
                    <div className="fb-share-button" 
                        data-href="https://list.artcritical.com" 
                        data-layout="button_count">
                    </div>
                </div>
            </div>
        </div>
    );
  }
}