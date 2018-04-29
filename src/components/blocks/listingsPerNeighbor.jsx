import React from 'react';
import Display from '../../actions/displayActions';
//COMPONENTS
import Listing from '../listing.jsx';


export default class ListingsPerNeighbor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let secondaryNH = ''
        let newSecondaryNH = ''
        let city = ''
        let newCity = ''
        let renderExport = []
        let neighborExport = []
        let title = ''
        let cityID = '0'
        let cityChange = false
        let num = this.props.listings.length - 1
        
        let thelistRender = listings => listings.map((listing, index) => {
            
            let result = <Listing listing={listing} user={this.props.user} dateView="current"/>
                
            newSecondaryNH = listing.venue.neighborhood
            newCity = Display.displayCity(listing.venue.neighborhood)

            //Define the new city ID
            if (cityChange){
                cityID =  Display.displayCityNum(secondaryNH)
                cityChange = false
            }
            
            //If the new neighborhood is different
            if ( newSecondaryNH !== secondaryNH) {
                
                //Add the result to the next export and reset the render
                var contentRender = <div className="neighborhood">{title}{renderExport}</div>
                renderExport = []; 
                
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                title = <h2>{newSecondaryNH}</h2>

                //Add listing to next batch
                renderExport.push(result)

                //Add last neighborhood to the current City
                neighborExport.push(contentRender)

                if (newCity !== city ){

                    city = newCity
                    cityChange = true

                    // Create the last city
                    var cityRender = neighborExport.length > 0 && <div key={index} id={cityID} className="city">{neighborExport}</div>
                    neighborExport = []

                    if (num == index){
                        //If this is the last listing, we need to include it in the export
        
                        //Add last neighborhood to the current City
                        neighborExport = <div key={index+1} id={cityID} className="city"><div className="neighborhood">{title}{renderExport}</div></div>
        
                        cityRender = [cityRender] //Make cityRender a table so we can add a second <div>
                        cityRender.push(neighborExport)

                        return cityRender
                    }

                    // Export the last city
                    return cityRender
                }
            } else {
                renderExport.push(result)

                if (num == index){

                    var contentRender = <div className="neighborhood">{title}{renderExport}</div>
    
                    //Add last neighborhood to the current City
                    neighborExport.push(contentRender)
    
                    var cityRender = neighborExport.length > 0 && <div key={index} id={cityID} className="city">{neighborExport}</div>
                    return cityRender
                }
            }
            return true;
        });

        return ( 
            <div>
                {thelistRender(this.props.listings)}
            </div>
        );
    }
}