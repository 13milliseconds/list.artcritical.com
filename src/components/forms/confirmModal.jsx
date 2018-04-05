import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class UpdateModal extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            modalVisible: this.props.modalVisible
        }

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modalVisible: !this.state.modalVisible
        });
    }

	render() {
        return (
            <Modal isOpen={this.state.modalVisible}>
                <ModalHeader>{this.props.textTitle}</ModalHeader>
                <ModalBody>
                    {!this.props.loading && !this.props.success && !this.props.error ? "Press Confirm to " + this.props.textAction + ". Press Cancel to go back." : null}

                    {this.props.loading && 
                    <div className='loading'>loading</div>
                    }
                    {this.props.success && 
                        <div className='success'>{this.props.textConfirm}</div>
                    }
                    {this.props.error && 
                        <div className='error'>Please Try Again</div>
                    }
                </ModalBody>
                <ModalFooter>
                    {!this.props.success ? 
                        <div>
                            <Button color="primary" onClick={this.props.handleSubmit}>Confirm</Button>
                            <Button color="primary" onClick={this.toggle}>Cancel</Button>
                        </div>
                    :
                        <Button color="success" onClick={this.toggle}>Close</Button>
                    }
                </ModalFooter>
            </Modal> 
        	
        )
	}
}