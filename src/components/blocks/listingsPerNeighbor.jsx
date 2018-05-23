import React from 'react';
import Display from '../../actions/displayActions';
//COMPONENTS
import Neighborhood from './ListingsNeighborhood'



export default class ListingsPerNeighbor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let secondaryNH = ''
        let newSecondaryNH = ''
        let city = ''
        let newCity = ''
        let renderListings = []
        let neighborExport = []
        let title = ''
        let cityID = '0'
        let cityChange = false
        let num = this.props.listings.length - 1
        
        let thelistRender = listings => listings.map((listing, index) => {
                
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
                var contentRender = <Neighborhood {...this.props} listings={renderListings} title={title} />
                renderListings = []; 
                
                // Update neighborhood
                secondaryNH = newSecondaryNH
                newSecondaryNH = Display.displayNeighborhood(secondaryNH)
                title = newSecondaryNH

                //Add listing to next batch
                renderListings.push(listing)

                //Add last neighborhood to the current City
                neighborExport.push(contentRender)

                if (newCity !== city ){

                    city = newCity
                    cityChange = true

                    // Create the last city
                    var cityRender = neighborExport.length > 0 && <div key={index} id={cityID} className="city">{neighborExport}</div>
                    neighborExport = []

                    if (num == index){//If this is the last listing, we need to include it in the export
                        //Add last neighborhood to the current City
                        neighborExport = <div key={index} id={cityID} className="city"><Neighborhood {...this.props} listings={renderListings} title={title}/></div>
        
                        cityRender = [cityRender] //Make cityRender a table so we can add a second <div>
                        cityRender.push(neighborExport)

                        return cityRender
                    }

                    // Export the last city
                    if (index !== 1){
                        return cityRender
                    }
                }
            } else {
                renderListings.push(listing)

                if (num == index){

                    var contentRender = <Neighborhood {...this.props} listings={renderListings} title={title} />
    
                    //Add last neighborhood to the current City
                    neighborExport.push(contentRender)
    
                    var cityRender = neighborExport.length > 0 && <div key={index} id={cityID} className="city">{neighborExport}</div>
                    return cityRender
                }
            }

        })

        return ( 
            <div>
                {thelistRender(this.props.listings)}
            </div>
        )
    }
}