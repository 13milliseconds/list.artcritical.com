import React from 'react'
// Components
import VenueBlock from '../blocks/VenueBlock'
import {Button} from 'reactstrap'
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable
} from 'react-reorder';

export default class MyListings extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        return ( 
            <div className={this.props.view + " listingsWrap"}>
                <Reorder
                    reorderId="my-list"
                    draggedClassName="dragged"
                    lock="horizontal"
                    holdTime={10}
                    disabled={false}
                    onReorder={this.props.onReorder.bind(this)}
                    >
                    { this.props.user.mylist.map((listing, index) => (
                        <div  
                            key={listing._id}
                            className={listing._id == this.props.listingHover && 'active'} 
                            onMouseEnter={this.props.onHover.bind(this, listing)}
                            onMouseLeave={this.props.onLeave.bind(this, listing)}
                            >
                            <VenueBlock  
                                listings={[listing]} number={index + 1} 
                                user={this.props.user} mylisting={true}/>
                        </div>
                        ))}
                </Reorder>
                <h6>Reorder your shows by neighborhood</h6>
                <Button onClick={this.props.onAutoReorder}>Reorder</Button>
            </div>
        );
    }
}