import React from 'react';
import {EditorState } from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import {createEditorStateWithText } from 'draft-js-plugins-editor';
//Components
import ConfirmModal from './confirmModal'
import ThumbnailInput from './ThumbnailInput';
import MyEditor from './MyEditor';
import { Button, Form, FormGroup, Label, Alert } from 'reactstrap';


export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            updatevisible: false,
            deletevisible: false,
            editorState: createEditorStateWithText('Test')
        }

        this.onEditorChange = this.onEditorChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
      }
    

    componentDidUpdate(){
        if (this.props.text !== this.state.text) {
            var description = this.props.text ? this.props.text : ''
            this.setState({
                text: this.props.text,
                editorState: EditorState.createWithContent(stateFromHTML(description))
            })
        }
    }

    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
    }

    onEditorChange(editorState){
        this.props.onTextChange(stateToHTML(editorState.getCurrentContent()))
        this.setState({
          editorState
        })
      }

    onUpdate(e){
        e.preventDefault();
        this.setState({ 
            updatevisible: true
        })
    }
    onDelete(e){
        e.preventDefault();
        this.setState({ 
            deletevisible: true
        })
    }
    
    render() {

        let image = this.props.list
            ? this.props.list.image
            : this.props.event 
                ? this.props.event.image
                : ''

        return ( 
            <div className="featuredForm">
                { this.props.type === 'event' && <Alert color="secondary">This an event.</Alert>}
                <Form>
                    <FormGroup check>
                        <Label>Thumbnail</Label>
                        <ThumbnailInput image={image} number={this.props.number} /> 
                    </FormGroup>
                    
                    <FormGroup check>
                        <Label>Blurb</Label>
                        <div className="formSection">
                            <MyEditor
                                name="text"
                                editorState={this.state.editorState}
                                onEditorChange={this.onEditorChange}/>
                        </div> 
                    </FormGroup>
                </Form>
                
                <Button onClick={this.onUpdate}>Submit</Button>
                {this.props._id && <Button onClick={this.onDelete}>Delete</Button>}

                {this.state.updatevisible && <ConfirmModal 
                                                name="updatevisible"
                                                toggle={this.toggleModal}
                                                handleSubmit={this.props.handleSubmit}
                                                textTitle="Save"
                                                textAction="save this Feature"
                                                textConfirm="Saved!"
                                                error={this.props.error.updateFeature}
                                                success={this.props.success.updateFeature}/>}
                {this.state.deletevisible && <ConfirmModal 
                                                name="deletevisible"
                                                toggle={this.toggleModal}
                                                handleSubmit={this.props.handleDelete}
                                                textTitle="Delete"
                                                textAction="delete this Feature"
                                                textConfirm="Deleted!"
                                                error={this.props.error.deleteFeature}
                                                success={this.props.success.deleteFeature}/>}
            </div>
        )
    }
}