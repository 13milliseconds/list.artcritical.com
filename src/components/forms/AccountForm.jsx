import React from 'react'
import AuthActions from '../../actions/AuthActions'
//Components
import Avatar from '../admin/avatar'
import {Input, FormText, Button} from 'reactstrap'
import {EditorState } from 'draft-js'
import {createEditorStateWithText } from 'draft-js-plugins-editor';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import MyEditor from './MyEditor'

export default class AccountForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            text: '',
            updatevisible: false,
            editorState: createEditorStateWithText(this.props.user.bio)
        }
        
        //Function Binding
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this)
    }
    

    onEditorChange(editorState){
        this.setState({
            editorState
        })
      }

    componentDidUpdate(){
        if (this.props.user.bio !== this.state.text) {
            this.setState({
                text: this.props.user.bio,
                editorState: EditorState.createWithContent(stateFromHTML(this.props.user.bio))
            })
        }
    }
    
    //Update values of inputs
    handleChange (event) {
        AuthActions.userInfoChange(event);
    }
    
    saveChanges(event){
        event.preventDefault();
        let newUser = this.props.user
        newUser.bio = stateToHTML(this.state.editorState.getCurrentContent())
        AuthActions.updateUser(this.props.user)
    }

    render() {
        
        return ( 
            <div className = "accountform">
                <form onSubmit={this.saveChanges}>

                    <div className="avatarWrap">
                        <Avatar {...this.props.user}/>
                    </div>
                    <div className="infoWrap">
                        <Input name="firstname" placeholder="First Name" type="text" value={this.props.user.firstname} onChange={this.handleChange} />
                        <Input name="lastname" placeholder="Last Name" type="text" value={this.props.user.lastname} onChange={this.handleChange} />
                        <Input name="email" placeholder="Email" type="email" value={this.props.user.local.username} onChange={this.handleChange} />
                        <label>Bio</label>
                        <FormText color="muted">This text will appear on your <a href={location.protocol + '//' + location.host + '/mylist/' + this.props.user.slug} target="_blank">public page</a>.</FormText>
                        <MyEditor
                        name="bio"
                        editorState={this.state.editorState}
                        onEditorChange={this.onEditorChange}/>
                        <Input name="website" placeholder="Website" type="website" value={this.props.user.website} onChange={this.handleChange} />  
                        <Button type="submit">Save</Button>
                    </div>
                 </form>
            </div>

        );
    }
}