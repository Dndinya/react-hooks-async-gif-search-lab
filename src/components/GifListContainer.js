import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "cats") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR_API_KEY&limit=3`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ gifs: data.map(gif => ({ id: gif.id, url: gif.images.original.url })) });
      })
      .catch(error => console.error('Error fetching gifs:', error));
  };

  handleSearchSubmit = searchTerm => {
    this.fetchGifs(searchTerm);
  };

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;