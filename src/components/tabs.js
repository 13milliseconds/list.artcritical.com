import React from 'react';
import {IntlProvider, FormattedDate} from 'react-intl';
import PropTypes from 'prop-types';

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
        });
      }
    
    _renderTitles() {
        
        function labels(child, index) {
            let activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                  <a href="#" 
                    className={activeClass}
                    onClick={this.handleClick.bind(this, index)}>
                      <IntlProvider locale="en"><FormattedDate value={child.props.label} weekday="long" day="numeric" month="short" /></IntlProvider>
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

    _renderContent() {
        return ( 
            <div className = "tabs__content" > {this.props.children[this.state.selected]} </div>
        );
    }

    render() {

        return ( 
            <div className = "tabs" > 
                {this._renderTitles()}
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
