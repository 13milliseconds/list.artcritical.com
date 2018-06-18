import React from 'react';
import ToggleButton from 'react-toggle-button';
import ListActions from '../../actions/ListActions';
import {EditorState } from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import {createEditorStateWithText } from 'draft-js-plugins-editor';
//Components
import ConfirmModal from './confirmModal'
import ThumbnailInput from './ThumbnailInput';
import MyEditor from './MyEditor';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class ListingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            updatevisible: false,
            editorState: createEditorStateWithText('Test')
        }

        this.onEditorChange = this.onEditorChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
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

    toggleModal() {
        this.setState({
            updatevisible: false
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
    
    render() {
        return ( 
            <div className="featuredForm">
                <Form>
                    <FormGroup check>
                        <Label>Thumbnail</Label>
                        <ThumbnailInput image={this.props.list && this.props.list.image} number={this.props.number} /> 
                    </FormGroup>
                    
                    <FormGroup check>
                        <Label>Description</Label>
                        <div className="formSection">
                            <MyEditor
                                name="text"
                                editorState={this.state.editorState}
                                onEditorChange={this.onEditorChange}/>
                        </div> 
                    </FormGroup>
                </Form>
                
                <Button onClick={this.onUpdate}>Submit</Button>

                {this.state.updatevisible && <ConfirmModal 
                                                toggle={this.toggleModal}
                                                handleSubmit={this.props.handleSubmit}
                                                textTitle="Save"
                                                textAction="save this Feature"
                                                textConfirm="Saved!"
                                                error={this.props.error}
                                                success={this.props.success}/>}
            </div>
        )
    }
}