import React from 'react';
import PropTypes from 'prop-types';
//COMPONENTS
import {Input} from 'reactstrap'

export default class Tabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selected: props.selected
          };
    }
    
    handleClick(index, event) {
        event.preventDefault();
        this.setState({
          selected: index
        })
      }

      handleSelectChange(event){
          console.log(event)
        this.setState({
            selected: event.target.value
          })
      }
    
    _renderTitles() {
        
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                  <a href="#" 
                    className={activeClass}
                    onClick={this.handleClick.bind(this, index)}>
                      {child.props.label}
                  </a>
                </li>
            );
        }
        
        return (
          <ul className="tabs__labels">
            {this.props.children.map(labels.bind(this))}
          </ul>
        );
    }

    _renderSelect() {
        
        function labels(child, index) {
            return (
                <option key={index}
                    selected={this.state.selected === index}
                    value={index}>
                      {child.props.label}
                </option>
            );
        }
        
        return (
            <div className="tabs__select">
          <Input type="select" 
            onChange={this.handleSelectChange.bind(this)}>
            {this.props.children.map(labels.bind(this))}
          </Input>
          </div>
        );
    }

    _renderContent() {
        return ( 
            <div className = "tabs__content" > {this.props.children[this.state.selected]} </div>
        );
    }

    render() {

        return ( 
            <div className = "tabs" > 
                {this._renderTitles()}
                {this._renderSelect()}
                {this._renderContent()} 
            </div>
        );
    }
}

Tabs.defaultProps = {
    selected: 0
};

Tabs.propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element
      ])
};
