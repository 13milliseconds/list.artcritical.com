import React from 'react';
import { Input } from 'reactstrap'

export default class HoodNav extends React.Component {
  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this)
  }

  scrollTo(e){
    document.getElementById(e.target.value).scrollIntoView() 
  }

  render() {
    return (
      <div className="hoodNav">
      <h3>Jump to a neighborhood</h3>
        <ul>
          <li><a href="#10">Tribeca</a></li>
              <li><a href="#20">Lower East Side</a></li>
              <li><a href="#30">Soho & Noho & East Village</a></li>
              <li><a href="#60">West Village & Chelsea</a></li>
              <li><a href="#170">Midtown & Uptown & Harlem</a></li>
              <li><a href="#220">Brooklyn</a></li>
              <li><a href="#270">Queens & Bronx & Staten Island</a></li>
              <li><a href="#300">Long Island</a></li>
              <li><a href="#310">Upstate New York</a></li>
              <li><a href="#320">New Jersey</a></li>
        <li><a href="#330">Philadelphia</a></li>
      </ul>
      <Input type="select" name="select" onChange={this.scrollTo}>
          <option value="20">Lower East Side</option>
          <option value="30">Soho & Noho & East Village</option>
          <option value="60">West Village & Chelsea</option>
          <option value="170">Midtown & Uptown & Harlem</option>
          <option value="220">Brooklyn</option>
          <option value="270">Queens & Bronx & Staten Island</option>
          <option value="300">Long Island</option>
          <option value="310">Upstate New York</option>
          <option value="320">New Jersey</option>
      </Input>
    </div>
    );
  }
}
