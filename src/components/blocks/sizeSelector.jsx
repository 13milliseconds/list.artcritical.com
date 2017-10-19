import React from 'react';
import ListActions from '../../actions/ListActions';

export default class SelectorBlock extends React.Component {
    
    constructor(props){
        super(props)
        this.viewChange = this.viewChange.bind(this)
        this.componentWillMount = this.componentWillMount.bind(this)
    }
    
    componentWillMount(){
        this.props.view
    }
    
    viewChange(e){
        const size = $(e.target).data('size')
        ListActions.sizeChange(size);
    }

  render() {
    return (
        <div className="selectorBlock">
            <i  className={this.props.view == 'small' ? 'active fa fa-bars': 'fa fa-bars'} 
                data-size="small" 
                aria-hidden="true" 
                onClick={this.viewChange}></i>
            <i  className={this.props.view == 'medium' ? 'active fa fa-list': 'fa fa-list'} 
                data-size="medium" 
                aria-hidden="true" 
                onClick={this.viewChange}></i>
            <i  className={this.props.view == 'large' ? 'active fa fa-th': 'fa fa-th'} 
                data-size="large" 
                aria-hidden="true" 
                onClick={this.viewChange}></i>
        </div>
    );
  }
}