import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class UpdateModal extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            updatevisible: this.props.updateView
        }
    }

     render() {
         let updateModal = this.state.updatevisible ? 
                    <Modal isOpen={this.state.updatevisible} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>Update Listing</ModalHeader>
                                  <ModalBody toggle={this.toggle}>
                                    {!this.props.loading && !this.props.success && !this.props.error.general ? "Press Confirm to UPDATE this Listing. Press Cancel to go back" : null}

                                    {this.props.loading && 
                                    <div className='loading'>loading</div>
                                    }
                                    {this.props.success && 
                                        <div className='success'>Saved!</div>
                                    }
                                    {this.props.error.general && 
                                        <div className='error'>{this.props.error.savelisting.general}</div>
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
                : 
                    null
     }

     return (
        <div>
            {updateModal}
        </div>
        )
    }
