import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class UpdateModal extends React.Component {
	constructor(props) {
        super(props)

        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    componentDidUpdate(){
        this.props.success && setTimeout(function(){
            this.props.toggle(this.props.name)
        }.bind(this), 1000)
    }

	render() {
        return (
            <Modal isOpen={true} backdrop={true}>
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
                    {!this.props.success &&
                        <div>
                            <Button color="primary" onClick={this.props.handleSubmit}>Confirm</Button>
                            <Button color="primary" onClick={() => this.props.toggle(this.props.name)}>Cancel</Button>
                        </div>
                    }
                </ModalFooter>
            </Modal> 
        	
        )
	}
}