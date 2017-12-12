import React from 'react';

export default class HoodNav extends React.Component {

  render() {
    return (
        <ul className="hoodNav">
			<li><a href="#10">Tribeca</a></li>
            <li><a href="#20">Lower East Side</a></li>
            <li><a href="#30">Soho & Noho & East Village</a></li>
            <li><a href="#60">West Village & Chelsea</a></li>
            <li><a href="#160">Midtown & Uptown & Harlem</a></li>
            <li><a href="#220">Brooklyn</a></li>
            <li><a href="#270">Queens & Bronx & Staten Island</a></li>
            <li><a href="#300">Upstate New York</a></li>
            <li><a href="#320">New Jersey</a></li>
			<li><a href="#330">Philadelphia</a></li>
		</ul>
    );
  }
}
