import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

export default class CreateModal extends React.Component {
 render() {
    let createModal = this.state.createvisible ? 
                <Modal isOpen={this.props.createView} toggle={this.toggleCreate}>
                            <ModalHeader toggle={this.toggleCreate}>Create Listing</ModalHeader>
                              <ModalBody toggle={this.toggleCreate}>
                                {!this.props.savelisting && !this.props.error.general ? "Press Confirm to CREATE this Listing. Press Cancel to go back" : null}
                                {this.props.savelisting && 
                                    <div className='success'>Created!</div>
                                }
                                {this.props.error.general && 
                                    <div className='error'>{this.props.error.savelisting.general}</div>
                                }
                              </ModalBody>
                              <ModalFooter>
                                {!this.props.savelisting ? 
                                    <div>
                                        <Button color="primary" onClick={this.props.handleSubmit}>Confirm</Button>
                                        <Button color="primary" onClick={this.toggleCreate}>Cancel</Button>
                                    </div>
                                :
                                    <Button color="success" onClick={this.toggleCreate}>Close</Button>
                                }
                                
                                
                              </ModalFooter>
                </Modal> 
            : 
                null
 }
}