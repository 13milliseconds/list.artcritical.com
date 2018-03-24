 import React from 'react';

export default class DeleteModal extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            deletevisible: this.props.deleteView
        }
    }

  render() {
    let deleteModal = this.state.deletevisible ?
        <Modal isOpen={this.state.deletevisible} toggle={this.toggleDelete}>
                      <ModalHeader toggle={this.toggleDelete}>Delete Listing</ModalHeader>
                      <ModalBody>
                       {!this.props.deleteitem && !this.props.error.general ? "Press Confirm to DELETE this listing. Press Cancel to go back" : null}

                        
                        {this.props.deleteitem && 
                            <div className='success'>Deleted!</div>
                        }
                        {this.props.error.general && 
                            <div className='error'>Sorry, there was an error! Please try again!</div>
                        }
                      </ModalBody>
                      <ModalFooter>
                        {!this.props.deleteitem ? 
                            <div>
                                <Button color="primary" onClick={this.props.handleDelete}>Confirm</Button>{' '}
                                <Button color="primary" onClick={this.toggleDelete}>Cancel</Button>
                            </div>
                        :
                            <Button color="success" onClick={this.toggleDelete}>Close</Button>
                        }
                        
                      </ModalFooter>
        </Modal> 
    :
        null
  }
 
return (
  <div>{deleteModal}</div>)
}
