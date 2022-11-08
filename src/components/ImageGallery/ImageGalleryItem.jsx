import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  toggleModal = event => {
    this.setState(() => ({ modal: !this.state.modal }));
  };
  //     toggleModal = e => {
  //     this.setState(({modal}) => ({
  //       modal: !modal,
  //     }))
  //   }

  render() {
    const { largeImageURL, webformatURL, alt } = this.props;

    return (
      <>
        <li className="ImageGalleryItem">
          <img
            src={webformatURL}
            alt={alt}
            onClick={() => {
              this.toggleModal();
            }}
          />
        </li>
        {this.state.modal && (
          <Modal
            // 					<Modal img={largeImageURL} alt={alt} onClose={this.toggleModal} />
            largeImageURL={largeImageURL}
            alt={alt}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
