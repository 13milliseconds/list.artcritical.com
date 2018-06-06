import React from 'react';
import ListActions from '../../actions/ListActions';
//Components
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class SizeSelector extends React.Component {
    
    constructor(props){
        super(props)
        this.viewChange = this.viewChange.bind(this)
    }
    
    viewChange(e){
        const size = $(e.target).data('size')
        console.log(e.target, size)
        ListActions.sizeChange(size);
    }

  render() {
    return (
        <div className="SizeSelector">
            <span   onClick={this.viewChange}
                    className={this.props.view == 'condensed' && 'active'} 
                    data-size="condensed" >
                <FontAwesomeIcon icon={['fal', 'bars']} /></span>
            <span   onClick={this.viewChange}
                    data-size="medium" 
                    className={this.props.view == 'medium' && 'active'} >
                <FontAwesomeIcon icon={['fal', 'bars']}  /></span>
            <span   onClick={this.viewChange}
                    data-size="large" 
                    className={this.props.view == 'large' && 'active'} >
                <FontAwesomeIcon icon={['fal', 'th']} /></span>
        </div>
    );
  }
}