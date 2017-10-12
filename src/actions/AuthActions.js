import alt from '../alt';
import "isomorphic-fetch"

class AuthActions {
    constructor() {
        this.generateActions(
            'sessionCheckFailure', 
            'sessionCheckSuccess',
            'addToMyListSuccess',
            'addToMyListFailure',
            'loginAttempt',
            'loginFailure',
            'loginSuccess',
            'logoutSuccess',
            'logoutFailure',
            'registerAttempt',
            'registerSuccess',
            'registerFailure',
            'updateUserSuccess',
            'updateUserFailure',
            'updateUserAttempt'
        );
    }
    
    async attemptLogIn(userData) {
        
        this.loginAttempt();

        await fetch(
          '/auth/login',
          {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
          },
        ).then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json) => {
          if (json) {
            this.loginSuccess(json);
          } else {
            this.loginFailure(new Error('Authentication Failed'));
          }
        })
        .catch((error) => {
          this.loginFailure(new Error(error));
        });
  }
    
    async attemptLogOut() {

        await fetch(
          '/auth/logout',
          {
            method: 'GET',
            credentials: 'same-origin',
          },
        )
        .then((response) => {
          if (response.status === 200) {
            return this.logoutSuccess();
              return true;
          }
          return this.logoutFailure('Error: ${response.status}');
            return true;
        })
        .catch((error) => {
          this.logoutFailure(error);
            return true;
        });

    }
    
    facebookLogin(user){
        return(user);
    }
    
    async attemptRegister(registerData) {
        
        this.registerAttempt();
        
        console.log('Register attempt');

        await fetch(
          '/auth/signup',
          {
            method: 'POST',
            body: JSON.stringify(registerData),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        ).then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json) => {
          if (json) {
            this.registerSuccess(json);
          } else {
            this.registerFailure(new Error('Registration Failed'));
          }
        })
        .catch((error) => {
          this.registerFailure(new Error(error));
        });
  }
    
    async checkSession() {
        await fetch(
          'http://localhost:5000/auth/checksession',
          {
            method: 'GET',
            credentials: 'same-origin',
          },
        )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return null;
        })
        .then((json) => {
            if (json._id) {
            this.sessionCheckSuccess(json);
              return true;
            } 
            this.sessionCheckFailure(json.error);
            return true;
        })
        .catch((error) => {
          this.sessionCheckFailure(error);
            return true;
        });
      }
    
    async addToUserList(listing) {
        
        const listData = { listingID: listing._id };
        
        //Upload the ID to the user profile
        await fetch(
          '/auth/addtolist',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(listData),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        ).then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.addToMyListSuccess(json);
            return true;
        })
        .catch((error) => {
          this.addToMyListFailure(error);
            return true;
        });
    }
    
    async updateUser(newUserInfo) {

        this.updateUserAttempt();
        
        await fetch(
          '/auth/updateuser',
          {
            body: JSON.stringify(newUserInfo),
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          },
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
            return null;
        })
        .then((json) => {
            this.updateUserSuccess(json);
            return true;
        })
        .catch((error) => {
            this.updateUserFailure(error);
            return true;
        });

    }
    
    // When a user type new info in the account page
    userInfoChange(event){
        return event;
    }

}

export default alt.createActions(AuthActions);