import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className="Button" onClick={onLoadMore}>Load More</button>
  );
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
