import alt from '../alt';
import "isomorphic-fetch"
import ListActions from './ListActions';

class AuthActions {
    constructor() {
        this.generateActions(
            'sessionCheckFailure', 
            'sessionCheckSuccess',
            'addToMyListSuccess',
            'addToMyListFailure',
        );
    }
    
    loginAttempt () {
        return true;
    }
    
    loginFailure (error){
        return error;
    }
    
    loginSuccess (action){
        return action;
    }
    
    async attemptLogIn(userData) {
        
        this.loginAttempt();

        // contact login API
        await fetch(
          // where to contact
          '/auth/login',
          // what to send
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
    
    async checkSession() {
        // contact the API
        await fetch(
          '/auth/checksession',
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
          if (json.local.username) {
            this.sessionCheckSuccess(json);
          } else {
            this.sessionCheckFailure(error);
          }
        })
        .catch((error) => {
          this.sessionCheckFailure(error);
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
        })
        .catch((error) => {
          this.addToMyListFailure(error);
        });
    }

}

export default alt.createActions(AuthActions);