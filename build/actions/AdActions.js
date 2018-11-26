import alt from '../alt';

class AdActions {
    constructor() {
        this.generateActions(
            'getAllAttempt',
            'getAllSuccess',
            'getAllFailure',
            'getAdsAttempt',
            'getAdsSuccess',
            'getAdsFailure',
            'saveAdAttempt',
            'saveAdSuccess',
            'saveAdFailure',
            'updateAdAttempt',
            'updateAdSuccess',
            'updateAdFailure',
            'deleteAdAttempt',
            'deleteAdSuccess',
            'deleteAdFailure'
        )
    }


    async getAll() {

        this.getAllAttempt.defer();

        await fetch(
            '/ads/getall/',
            {
              method: 'GET',
            },
          )
          .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return null;
          })
          .then((data) => {
              this.getAllSuccess(data)
          })
          .catch((error) => {
              this.getAllFailure(error)
          });
    }

    async getAds() {

        this.getAdsAttempt.defer();

        await fetch(
            '/ads/getads/',
            {
              method: 'GET',
            },
          )
          .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return null;
          })
          .then((data) => {
              this.getAdsSuccess(data)
          })
          .catch((error) => {
              this.getAdsFailure(error)
          });
    }

    // When you select an ad to edit
    editThisAd(info){
        return info;
    }
    adEditReset() {
        return true;
    }
    
    // When ad info is entered
    adInfoChange(info){
        return info;
    }
     // When new Ad info is entered
    duplicate(){
        return true;
    }
    
    async save(newAd) {
        
        this.saveAdAttempt.defer();

        await fetch(
          '/ads/add',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newAd),
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
                ? this.saveAdSuccess(json)
                : this.saveAdFailure()
            return true;
        })
        .catch((error) => {
            this.saveAdFailure(error);
        });
        
    }
    
    async delete(oldAd) {

        await fetch(
          '/ads/delete/' + oldAd,
			{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        )
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
          return null;
        })
        .then((json) => {
            this.deleteAdSuccess(json);
			//this.AdEditReset();
            return true;
        })
        .catch((error) => {
            this.deleteAdFailure(error);
        });
        
    }
    
    async update(newInfo) {
        
        this.updateAdAttempt();

        await fetch(
          '/ads/update',
          {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(newInfo),
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
                ? this.updateAdSuccess(json)
                : this.updateAdFailure()

            return true;
        })
        .catch((error) => {
            this.updateAdFailure(error);
        });
        
    }
    
}

export default alt.createActions(AdActions);