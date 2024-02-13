import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    searchTerm: ''
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange}
            placeholder="Enter search term..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;