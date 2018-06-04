import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Hamburger extends React.Component {

    constructor(props) {
        super(props);
    }

    _toggleMenu(){
        ListActions.toggleMenu()
    }

    render() {
      
    return (
        <div className="hamburger">
            <FontAwesomeIcon icon={this.props.active ? ['fal', 'times'] : ['fal', 'bars']} onClick={this._toggleMenu} />
        </div>
    );
  }
}