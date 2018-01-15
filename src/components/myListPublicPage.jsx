import React from 'react';
import AuthActions from '../actions/AuthActions';
//COMPONENTS
import MyList from './mylist/myList';
import LogInForm from './login/LogInForm';

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount(){
        AuthActions.getUserMylist(this.props.params.slug);
    }

    render() {
        let myListRender = this.props.currentUser.mylist ?
                            <MyList {...this.props} user={this.props.currentUser}/>
                            :
                            <div>No such user.</div>
        return ( 
                <div className="myListwrap">
                    {myListRender}
                </div>
        );
    }
}