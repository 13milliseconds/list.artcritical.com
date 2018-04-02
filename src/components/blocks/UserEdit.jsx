import React from 'react'
import ListActions from '../../actions/ListActions';
import AuthActions from '../../actions/AuthActions';

export default class UserEdit extends React.Component {

	constructor (props){
        super(props);

    }

    render() {
    	let user = this.props.user;
    	console.log(user)
    	return (
    		<p>{`${user['firstname']} ${user['lastname']}`}</p>
    	)
    }
}