import propTypes from 'prop-types';

const ReviewsMarkup = ({ author, content }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

ReviewsMarkup.propTypes = {
  author: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default ReviewsMarkup;
