import React from 'react';

export default class NeighborhoodSelect extends React.Component {

    constructor(props) {
        super(props);
      }
    
    
    render() { 
        return (  
        <select name="neighborhood" 
            value={this.props.selected? this.props.selected : "no-value"} 
            onChange={this.props.onChange}>
			<option value= "no-value" disabled>Neighborhood</option>
            <option value="10">Tribeca and below</option>
            <option value="20">Lower East Side</option>
            <option value="30">Soho</option>
            <option value="40">Noho/East Village</option>
            <option value="60">West Village</option>
            <option value="70">19th St and below</option>
            <option value="80">20th St and nearby</option>
            <option value="90">21st St and nearby</option>
            <option value="100">22nd St and nearby</option>
            <option value="110">23rd St and nearby</option>
            <option value="120">24th St and nearby</option>
            <option value="130">25th St and nearby</option>
            <option value="140">26th St and nearby</option>
            <option value="150">27th St and above</option>
            <option value="160">Flatiron/Gramercy Park</option>
            <option value="170">Midtown</option>
            <option value="180">57th Street and nearby</option>
            <option value="190">Upper East Side</option>
            <option value="200">Upper West Side</option>
            <option value="210">Harlem</option>
            <option value="220">Brooklyn South</option>
            <option value="230">Dumbo/Downtown</option>
            <option value="235">Fort Greene</option>
            <option value="240">Bushwick/Bed-stuy</option>
            <option value="250">Williamsburg / Greenpoint</option>
            <option value="260">Brooklyn (Other)</option>
            <option value="270">Ridgewood</option>
            <option value="272">Long Island City/Astoria</option>
            <option value="274">Queens (Other)</option>
            <option value="280">The Bronx</option>
            <option value="290">Staten Island</option>
            <option value="300">Long Island</option>
            <option value="310">Upstate New York</option>
            <option value="320">New Jersey</option>
            <option value="330">Philadelphia</option>
            <option value="340">Old City</option>
            <option value="350">West Philadelphia</option>
            <option value="360">North Philadelphia</option>
            <option value="370">Other</option>
        </select>
            
        );
    }
}