import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class UpdateModal extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            updatevisible: this.props.updatevisible
        }

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            updatevisible: !this.state.updatevisible
        });
    }

	render() {
        return (
            <Modal isOpen={this.state.updatevisible}>
                <ModalHeader>Update Listing</ModalHeader>
                <ModalBody>
                    {!this.props.loading && !this.props.success && !this.props.error ? "Press Confirm to UPDATE this Listing. Press Cancel to go back" : null}

                    {this.props.loading && 
                    <div className='loading'>loading</div>
                    }
                    {this.props.success && 
                        <div className='success'>Saved!</div>
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