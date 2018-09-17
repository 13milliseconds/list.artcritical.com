import React from 'react'
import AuthActions from '../../actions/AuthActions'
// Components
import Loading from '../blocks/loading'
import UserCard from '../blocks/UserCard'
import UserFullInfo from '../blocks/UserFullInfo'



export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            editing: false,
            editingUser: 0
        }

        this._userFullInfoReveal = this._userFullInfoReveal.bind(this)
    }
	
	componentWillMount(){
		AuthActions.getAllUsers()
    }
    
    _userFullInfoReveal(index){
        this.setState({
            editing: true,
            editingUser: index
        })
    }

    render() {
        
        let usersRender = users => users.map((user, index) => {
            return <UserCard key={index} 
                            index={index} 
                            user={user} 
                            infoReveal={this._userFullInfoReveal}
                            error={this.props.error}
                            success={this.props.success}/>
        });
        
        return ( 
            <div className = "usersWrap">
                <h2>Users</h2>
                <h6>There are {this.props.allUsers ? this.props.allUsers.length : 0} registered users.</h6>

				<div className="allUsers">
				{this.props.loading.allUsers && <Loading />}
                {usersRender(this.props.allUsers)}
				</div>
				<div className="allInfo">
					{this.state.editing && <UserFullInfo {...this.props} user={this.props.allUsers[this.state.editingUser]} index={this.state.editingUser}/>}
				</div>
            </div>
        );
    }
}