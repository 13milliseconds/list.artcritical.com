import React from 'react';
import {Link} from 'react-router';
import Listing from './listing';
import ListStore from '../stores/ListStore';
import ListActions from '../actions/ListActions';
import Display from '../actions/displayActions';


export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ListStore.getState();
        this.onChange = this.onChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    componentDidMount() {
        ListStore.listen(this.onChange);
        ListActions.getAll();
    }

    componentWillUnmount() {
        ListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    
    //Function to add a listing to the personal list
    addToList(e, listing){
        //Select this listing
        var thislisting = $(e.target).closest('.listing');
        if (thislisting.hasClass('selected')){
            //Close the currently open tab
            $(thislisting).removeClass('selected');
        } else {
            //Open this listing
            $(thislisting).addClass('selected');
            
            this.setState({
                 mylist: this.state.mylist.concat(listing)
            })
        }
    }

    render() {

        let nh = ''
        let thelist = this.state.allListings.map((listing) => {
            let newNh = listing.neighborhood;
            if ( newNh !== nh) {
                nh = newNh
                newNh = Display.displayCity(nh)
                return (
                    <div>
                        <h2>{newNh}</h2>
                        <Listing {...listing} addToList={(e) => this.addToList(e, listing)}/>
                    </div>
                )
            } else {
                return (
                  <Listing {...listing} addToList={(e) => this.addToList(e, listing)}/>
              )   
            }
        });
        
        
        return ( 
            <div className = "home">
                <h2>Landing page</h2>
                <div className = "listingsWrap">
                    {thelist}
                </div>
                <div className="myList">
                    <h2>my list</h2>
                    <p>Items in your list: <strong>{this.state.mylist.length}</strong></p>
                    {
                        this.state.mylist.map((listing) => (
                            <Listing {...listing}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}