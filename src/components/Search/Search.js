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
    // let results = [...this.state.searchResults];
    let results = this.props.data.filter(movie => movie.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
    this.setState({searchResults: results})
    this.props.updateMovies(results)

  }

  reset = () => {
    this.setState({searchResults: this.props.data})
    this.props.updateMovies(this.state.searchResults)
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      console.log(event.keyCode)
      this.search();
    }
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
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
      <button type="submit" className="search" onClick={this.search}>Search</button>

      </form>
    )
  }
}


export default Search;
