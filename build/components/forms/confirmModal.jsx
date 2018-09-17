import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class ConfirmModal extends React.Component {
	constructor(props) {
        super(props)

        this.state = {
            newSuccess: false
        }

        this.componentDidUpdate = this.componentDidUpdate.bind(this)
    }

    componentDidUpdate(){
       if (this.props.success && !this.state.newSuccess) {
           //Make sure it's the first time it updates
           this.setState({
               newSuccess: true
           })
           let that = this
            setTimeout(function(){
                console.log('Update and Success')
                this.props.toggle(this.props.name)
                that.setState({
                    newSuccess: false
                })
            }.bind(this), 1000)
       }
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
                    {this.props.error && console.log(this.props.error)}
                    {this.props.error && 
                        <div className='error'>Technical problem. Please Try Again.</div>
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