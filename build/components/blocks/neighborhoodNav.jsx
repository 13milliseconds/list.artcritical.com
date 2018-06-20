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
          <li><a href="#city10">Tribeca</a></li>
              <li><a href="#city20">Lower East Side</a></li>
              <li><a href="#city30">Soho & Noho & East Village</a></li>
              <li><a href="#city60">West Village & Chelsea</a></li>
              <li><a href="#city170">Midtown & Uptown & Harlem</a></li>
              <li><a href="#city220">Brooklyn</a></li>
              <li><a href="#city270">Queens & Bronx & Staten Island</a></li>
              <li><a href="#city300">Long Island</a></li>
              <li><a href="#city310">Upstate New York</a></li>
              <li><a href="#city320">New Jersey</a></li>
              <li><a href="#city330">Philadelphia</a></li>
      </ul>
      <Input type="select" name="select" onChange={this.scrollTo}>
          <option value="city10">Tribeca</option>
          <option value="city20">Lower East Side</option>
          <option value="city30">Soho & Noho & East Village</option>
          <option value="city60">West Village & Chelsea</option>
          <option value="city170">Midtown & Uptown & Harlem</option>
          <option value="city220">Brooklyn</option>
          <option value="city270">Queens & Bronx & Staten Island</option>
          <option value="city300">Long Island</option>
          <option value="city310">Upstate New York</option>
          <option value="city320">New Jersey</option>
          <option value="city330">Philadelphia</option>
      </Input>
    </div>
    );
  }
}
