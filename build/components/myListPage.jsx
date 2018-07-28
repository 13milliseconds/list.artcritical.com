import React from 'react';
import MyList from './mylist/myList';
import LogInForm from './login/LogInForm';
//COMPONENTS
import Helmet from './blocks/Helmet'

export default class MyListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myListRender = this.props.user.isLoggedIn ?
                            <MyList {...this.props} />
                            :
                            <div className="SignIn">
                                <div>
                                    <h2>Sign In</h2>
                                    <p>Sign in to start adding shows to your list.</p>
                                    <LogInForm 
                                        loading={this.props.loading.login} 
                                        error={this.props.error} />
                                </div>
                            </div>
        return ( 
                <div className="myListwrap">
                    <Helmet
                        title="My List"
                        link="https://list.artcritical.com/mylist"
                    />
                    {myListRender}
                </div>
        );
    }
}