import React from 'react'; 
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        searchQuery: '', 
        searchResults: []
      }
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value})
    this.search()
  }

  search = () => {
    // filter the rawData by using the searchQuery to make our condition 
    // event.preventDefault();
      const results = this.props.rawData.filter(currentMovie => currentMovie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
      if (results) {
        this.setState( { searchResults: results} );
      }
  }



  render() {
    return (
      <> 
        <label for="search"></label>
        <input 
          type="text" 
          name="search" 
          value={this.state.searchQuery} 
          onChange={(event) => this.handleChange(event)}
        />
      </> 
    )
  }
}


export default Search; 