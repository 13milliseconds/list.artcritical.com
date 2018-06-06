import React from 'react'
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest';
import ArtistsActions from '../../actions/ArtistsActions'

export default class ArtistTags extends React.Component {
    constructor(props) {
        super(props)

        this.autoSuggestRenderInput = this.autoSuggestRenderInput.bind(this)
      }

      componentDidMount(){
        console.log('in ArtistTags')
        ArtistsActions.getAllArtistsSuggestions();
      }

      autoSuggestRenderInput({addTag, ...props}) {
        const handleOnChange = (e, {newValue, method}) => {
          if (method === 'enter') {
            e.preventDefault()
          } else {
            props.onChange(e)
          }
        }
       
        const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
        const inputLength = inputValue.length

        let suggestions = this.props.allArtists 
              ? this.props.allArtists.filter((artist) => {
                  return artist.name.toLowerCase().slice(0, inputLength) === inputValue
                })
              : []
       
        return (
          <Autosuggest
            ref={props.ref}
            suggestions={suggestions}
            shouldRenderSuggestions={(value) => value && value.trim().length > 0}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
            inputProps={{...props, onChange: handleOnChange}}
            onSuggestionSelected={(e, {suggestion}) => {
              addTag(suggestion)
            }}
            onSuggestionsClearRequested={() => {}}
            onSuggestionsFetchRequested={() => {}}
          />
        )
      }


      render() {

        return <TagsInput 
                    value={this.props.value} 
                    onChange={this.props.onChange}
                    tagDisplayProp={"name"}
                    placeholder={'Add an artist'}
                    renderInput={this.autoSuggestRenderInput}
         />
      }
}