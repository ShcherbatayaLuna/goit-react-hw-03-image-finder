import React, { Component } from 'react';
import Api from 'Api/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    //     btn: false,
  };

  componentDidUpdate(prevProps, PrevState) {
    const { page, query } = this.state;
    if (PrevState.query !== query || PrevState.page !== page) {
      this.setState({ isLoading: true });
      Api(query, page)
        .then(data =>
          this.setState(prevState => {
            return { images: [...prevState.images, ...data.data.hits] };
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  SearchQuery = query => {
    this.setState({
      page: 1,
      query,
      images: [],
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div className="App">
        <Searchbar SearchQuery={this.SearchQuery} />
        {error && <h1>{error.message}</h1>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {!!images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
