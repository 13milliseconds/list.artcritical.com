import React from 'react';
import AuthActions from '../../actions/AuthActions';
// Components
import Loading from '../blocks/loading';

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount(){
		AuthActions.getAllUsers()
	}

    render() {
        
        let usersRender = users => users.map((user, index) => {
            
        });
        
        return ( 
            <div className = "usersWrap">
                <h2>Users</h2>
				<div className="allUsers">
				{this.props.loading.allUsers && <Loading />}
                {usersRender(this.props.allUsers)}
				</div>
            </div>
        );
    }
}