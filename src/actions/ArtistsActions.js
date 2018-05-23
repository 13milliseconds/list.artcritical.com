import alt from '../alt';

class ArtistsActions {
    constructor() {
        this.generateActions(
            'getAllArtistsSuggestionsAttempt', 
            'getAllArtistsSuggestionsSuccess', 
            'getAllArtistsSuggestionsFailure' 
        )
    }

    async getAllArtistsSuggestions () {
        
        this.getAllArtistsSuggestionsAttempt.defer()
        
        await fetch(
          process.env.BASE_URI + '/artist/allartists',
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
            this.getAllArtistsSuggestionsSuccess(data)
        })
        .catch((error) => {
            this.getAllArtistsSuggestionsFailure(error)
        });
    }
}

export default alt.createActions(ArtistsActions);