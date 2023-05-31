
const ReviewsMarkup = ({ author, content}) => {
    return (
    <li>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
)
}

export default ReviewsMarkup;