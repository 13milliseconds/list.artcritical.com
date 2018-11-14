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
            'updateUserAttempt',
            'deleteUserSuccess',
            'deleteUserFailure',
            'deleteUserAttempt',
            'reorderMyListSuccess',
            'reorderMyListFailure',
            'clearMyListAttempt',
            'clearMyListSuccess',
            'clearMyListFailure',
            'getUserMylistSuccess',
            'getUserMylistFailure',
            'getAllUserAttempt',
            'getAllUserSuccess',
            'getAllUserFailure',
            'forgotPasswordAttempt',
            'forgotPasswordSuccess',
            'forgotPasswordFailure',
            'resetPasswordAttempt',
            'resetPasswordSuccess',
            'resetPasswordFailure',
            'certifyPasswordAttempt',
            'certifyPasswordSuccess',
            'certifyPasswordFailure'
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

        await fetch(
          '/auth/signup',
          {
            method: 'POST',
            body: JSON.stringify(registerData),
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
            this.registerSuccess(json);
          } else {
            this.registerFailure(new Error('Registration Failed'));
          }
        })
        .catch((error) => {
          this.registerFailure(new Error(error));
        });
  }
	
	async getUserMylist(user_slug) {
        await fetch(
          '/auth/getusermylist/' + user_slug,
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
        .then((data) => {
            if (data) {
                this.getUserMylistSuccess(data)
                return true;
            } 
            this.getUserMylistFailure(data.error);
            return true;
        })
        .catch((error) => {
            this.getUserMylistFailure(error)
            return true;
        });
    }
    
    async checkSession() {
        console.log('Check Session');
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
            if (json._id) {
              console.log(json)
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

      let newListing = listing
      delete newListing.zoomLevels
        
        //Upload the ID to the user profile
        await fetch(
          '/auth/addtolist',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(listing),
            headers: {
              'Content-Type': 'application/json',
            }
          },
        ).then((response) => {
          console.log(response)
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
    
    async reorderMyList(newList) {
        
        this.reorderMyListAttempt(newList);
        
        await fetch(
          '/auth/updatemylist',
          {
            body: JSON.stringify(newList),
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
            this.reorderMyListSuccess(json);
            return true;
        })
        .catch((error) => {
            this.reorderMyListFailure(error);
            return true;
        });
    }

    reorderMyListAttempt(newList){
        return newList;
    }

    async clearMyList(newList) {
        
      this.clearMyListAttempt.defer();
      
      await fetch(
        '/auth/clearmylist',
        {
          body: JSON.stringify(newList),
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
          this.clearMyListSuccess(json);
          return true;
      })
      .catch((error) => {
          this.clearMyListFailure(error);
          return true;
      });
  }
    
    async updateUser(newUserInfo) {

        console.log('Updating ', newUserInfo)

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
          console.log(json)
            this.updateUserSuccess(json);
            return true;
        })
        .catch((error) => {
            this.updateUserFailure(error);
            return true;
        });

    }

    async deleteUser(user) {

      this.deleteUserAttempt();
      
      await fetch(
        '/auth/deleteuser',
        {
          body: JSON.stringify(user),
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
          this.deleteUserSuccess(json);
          return true;
      })
      .catch((error) => {
          this.deleteUserFailure(error);
          return true;
      });

  }
	
	async getAllUsers() {
		
		console.log("Getting all Users");

        this.getAllUserAttempt.defer()
        
        await fetch(
          '/auth/getallusers',
          {
            method: 'GET',
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
            this.getAllUserSuccess(json);
            return true;
        })
        .catch((error) => {
            this.getAllUserFailure(error);
            return true;
        });
    }

    async forgotPassword(email) {
		
      console.log("Sending an email");
  
          this.forgotPasswordAttempt.defer()
          
          await fetch(
            '/auth/forgot',
            {
              method: 'POST',
              body: JSON.stringify({email: email}),
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
              this.forgotPasswordSuccess(json);
              return true;
          })
          .catch((error) => {
              this.forgotPasswordFailure(error);
              return true;
          });
      }

      async certifyReset(token) {
		
        console.log("Checking the token");
    
            this.certifyPasswordAttempt()
            
            await fetch(
              '/auth/resettoken',
              {
                method: 'POST',
                body: JSON.stringify({token: token}),
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
                json 
                  ? this.certifyPasswordSuccess(json)
                  : this.certifyPasswordFailure()
                return true;
            })
            .catch((error) => {
                this.certifyPasswordFailure();
                return true;
            });
        }

        async resetPassword(password, token) {
		
          console.log("Resetting the password");
      
              this.resetPasswordAttempt()
              
              await fetch(
                '/auth/reset',
                {
                  method: 'POST',
                  body: JSON.stringify({password: password, token: token}),
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
                  json 
                    ? this.resetPasswordSuccess(json)
                    : this.resetPasswordFailure()
                  return true;
              })
              .catch((error) => {
                  this.resetPasswordFailure();
                  return true;
              });
          }
    
    // When a user type new info in the account page
    userInfoChange(event, index){
        return {event, index};
    }

}

export default alt.createActions(AuthActions);