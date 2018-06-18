import React from 'react';
//COMPONENTS
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas'

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          sidebarOpen: this.props.open
        }
    
        this.onToggle = this.onToggle.bind(this);
      }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            sidebarOpen: nextProps.open
        })
    }
    
    onToggle(open) {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }
    
    render() {
    
        return (
            <OffCanvas width={300} transitionDuration={300} isMenuOpened={this.state.sidebarOpen} position={"left"}>
                <OffCanvasBody className={"my-body-class"} style={{fontSize: '18px'}}>
                This is the canvas body.
                </OffCanvasBody>
                <OffCanvasMenu className={"my-menu-class"} style={{fontWeight: 'bold'}}>
                This is the canvas menu.
                <a onClick={this.onToggle}>Toggle Menu</a>
                </OffCanvasMenu>
            </OffCanvas>
        );
    }
      
}