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
import ConfirmModal from './confirmModal'

export default class AccountForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            text: '',
            updatevisible: false,
            editorState: createEditorStateWithText(''),
            updateModal: false,
            deleteModal: false
        }
        
        //Function Binding
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.onEditorChange = this.onEditorChange.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)
    }
    

    onEditorChange(editorState){
        this.setState({
            editorState
        })
      }

    componentDidUpdate(){
        if (this.props.user.bio !== this.state.text) {
            const bio = this.props.user.bio ? this.props.user.bio : ''
            this.setState({
                text: this.props.user.bio,
                editorState: EditorState.createWithContent(stateFromHTML(bio))
            })
        }
    }

     //Save alert
     onSave(event) {
        event.preventDefault();
        this.setState({ 
            updateModal: true
        })
    }
    //Delete alert
    onDelete(event) {
        event.preventDefault();
        this.setState({ 
            deleteModal: true
        })
    }

    //ToggleModal
    toggleModal(modalName) {
        this.setState({
            [modalName]: !this.state[modalName]
        })
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

    deleteAccount(){
        AuthActions.deleteUser({_id: this.props.user._id})
        window.location.reload()
    }

    render() {
        
        return ( 
            <div className = "accountform">
                <form>

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
                        { this.props.user.local.password && <div>
                            <label>Change your password</label>
                            <Input name="password1" placeholder="New Password" type="password" value={this.props.user.password1} onChange={this.handleChange} />
                            <Input name="password2" placeholder="Re-Type the new password" type="password" value={this.props.user.password2} onChange={this.handleChange} />
                        </div>}
                        <Button type="submit" onClick={this.onSave}>Save</Button>
                        <Button type="submit" outline color="danger" onClick={this.onDelete}>Delete your Account</Button>
                    </div>
                 </form>

                 {this.state.updateModal && <ConfirmModal 
                                                        toggle={this.toggleModal}
                                                        handleSubmit={this.saveChanges}
                                                        name="updateModal"
                                                        textTitle="Save"
                                                        textAction="save your account information"
                                                        textConfirm="Saved!"
                                                        error={this.props.error.general}
                                                        success={this.props.success.updateUser}/>}
                {this.state.deleteModal && <ConfirmModal 
                                                toggle={this.toggleModal}
                                                handleSubmit={this.deleteAccount}
                                                name="deleteModal"
                                                textTitle="Delete"
                                                textAction="delete your account"
                                                textConfirm="Deleted!"
                                                error={this.props.error.general}
                                                success={this.props.success.deleteUser}/>}
            </div>

        );
    }
}