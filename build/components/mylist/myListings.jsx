import React from 'react'
// Components
import VenueBlock from '../blocks/VenueBlock'
import Reorder from 'react-reorder';

export default class MyListings extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        return ( 
                <Reorder
                    reorderId={this.props.user._id}
                    draggedClassName="dragged"
                    lock="horizontal"
                    holdTime={50}
                    disabled={false}
                    onReorder={this.props.onReorder.bind(this)}
                    >
                    { this.props.user.mylist.map((listing, index) => (
                        <div key={listing._id}
                            className={listing._id == this.props.listingHover && 'active'} 
                            >
                            <VenueBlock  
                                listings={[listing]} number={index + 1} 
                                user={this.props.user} mylisting={true}
                                mapMouseEnter={this.props.onHover.bind(this, listing)}
                                mapMouseLeave={this.props.onLeave.bind(this, listing)}
                                onMap={true}
                            />
                        </div>
                        ))}
                </Reorder>
        );
    }
}