import React from 'react'
import ReactDOM from 'react-dom'
import GoogleMapReact from 'google-map-react'
import ListActions from '../../actions/ListActions'
//COMPONENT
import SingleMarker from './singleMarker'
import ReactMapGL, {Marker} from 'react-map-gl'

export default class MapBlock extends React.Component {
    
    constructor(props) {
        super(props);   
        
        this.state = {
            viewport: {
                zoom: 12,
                mapboxApiAccessToken: process.env.MapboxAccessToken,
                bearing: 0,
                pitch: 0,
                width: 500,
                height: 500
              }
        }
        
        this.updateViewport = this.updateViewport.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount(){
        // Create variable to change property
        let newViewport = this.state.viewport
        newViewport.width = ReactDOM.findDOMNode(this).offsetWidth
        //Update state
        this.setState({
              viewport: newViewport
          })
    }
    
    updateViewport(v) {
        this.setState({
            viewport: v
        })
    }

  render() {
    return (
        <div className="mapWrap">
			{this.props.coordinates &&
            <ReactMapGL
                {...this.state.viewport}
				latitude={this.props.coordinates.lat ? this.props.coordinates.lat : 40.7263098}
                longitude={this.props.coordinates.long ? this.props.coordinates.long : -73.9940454}
                onViewportChange={this.updateViewport}
              >
				{this.props.coordinates.lat &&
                <Marker 
                        latitude={this.props.coordinates.lat}
                        longitude={this.props.coordinates.long}
                        anchor="bottom"
                                  >
                        <SingleMarker />
                </Marker>
				}
            </ReactMapGL>
				}
        </div>
            
    );
  }
}
