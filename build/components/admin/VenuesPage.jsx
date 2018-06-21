import React from 'react';
import ListActions from '../../actions/ListActions';
// Components
import VenueItem from '../venues/VenueItem';
import NeighborhoodSelect from '../forms/NeighborhoodSelect';
import Loading from '../blocks/loading';

export default class VenuesPage extends React.Component {
    constructor(props) {
        super(props);
		
		this.state = {
			venueAdminNeighborhood: '',
		}
		
		this.onSelectChange = this.onSelectChange.bind(this)
    }
	
	componentWillUnmount(){
		ListActions.adminReset()
	}
    
	onSelectChange(event){
		this.setState({
			venueAdminNeighborhood: event.target.value
		})
		
		ListActions.getVenuesAdmin(event.target.value);
	}

    render() {
        
        let theVenuesRender = venues => venues.map((venue, index) => {
            
            return <VenueItem key={venue._id} {...venue} />
                
        });
        
        return ( 
            <div className = "overviewWrap">
                <h2>Overview</h2>
                <p>Check on all venues listed on artcritical by neighborhood.</p>
                <p>Legend:
                    <span className="legend current"></span> Up to date
                    <span className="legend future"></span> Event coming up
                    <span className="legend nothing"></span> Need update
                    <span className="legend dormant"></span> Dormant
                </p>
				<NeighborhoodSelect 
					selected={this.state.venueAdminNeighborhood}
					onChange={this.onSelectChange}
					/>
				<div className="allVenues">
				{this.props.loading.allVenues && <Loading />}
                {theVenuesRender(this.props.allVenues)}
				</div>
            </div>
        );
    }
}