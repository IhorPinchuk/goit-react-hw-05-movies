import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from "services/api";
import ReviewsMarkup from './reviewsMarkup/ReviewsMarkup';

const Reviews = () => {
 const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
    fetchReviews(movieId)
      .then(response => setReviews(response))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

        return (
        <>
        {reviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      <ul>
        {reviews.map(({id, author, content}) => {
          return (
              <ReviewsMarkup key={id} author={author} content={content } />
          );
        })}
      </ul>
        </>
    )
}

export default Reviews;