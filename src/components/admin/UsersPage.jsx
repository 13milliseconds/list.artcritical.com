import React from 'react'
import AuthActions from '../../actions/AuthActions'
// Components
import Loading from '../blocks/loading'
import UserCard from '../blocks/UserCard'
import UserFullInfo from '../blocks/UserFullInfo'



export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);
    }
	
	componentWillMount(){
		AuthActions.getAllUsers()
	}

    render() {
        
        let usersRender = users => users.map((user, index) => {
            return <UserCard key={index} 
                            index={index} 
                            user={user} 
                            error={this.props.error}
                            success={this.props.success}/>
        });
        
        return ( 
            <div className = "usersWrap">
                <h2>Users</h2>

				<div className="allUsers">
				{this.props.loading.allUsers && <Loading />}
                {usersRender(this.props.allUsers)}
				</div>
				<div className="allInfo">
					{Object.keys(this.props.currentUser).length > 0 && <UserFullInfo userCard={this.props.user} />}
				</div>
            </div>
        );
    }
}