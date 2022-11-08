import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.SearchQuery(this.state.input);
    this.resetForm();
  };

  resetForm() {
    this.setState({ input: '' });
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  SearchQuery: PropTypes.func.isRequired,
};
