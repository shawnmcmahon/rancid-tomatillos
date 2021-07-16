import React from 'react';
import './Search.css'

class Search extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        searchQuery: '',
        searchResults: this.props.data
      }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ searchQuery: ''})
    const { value } = event.target
    this.setState({ searchQuery: value })
  }

  search = () => {
    let results = this.props.data.filter(movie => movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    this.setState({searchResults: results})
    this.props.updateMovies(results)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.search();
  }

  // <label htmlFor="search">Search for movies
  //
  // </label>
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Search for movies"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button type="submit" className="search" onClick={this.search}>Search</button>
      </form>
    )
  }
}


export default Search;
