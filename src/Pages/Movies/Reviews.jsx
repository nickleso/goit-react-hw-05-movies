import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilmsReviews from 'MoviesAPI/fetchFilmsReviews';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const filmReview = await fetchFilmsReviews(id);

        setReviews(filmReview.results);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [id, setReviews]);

  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.length < 1 && <p>We don’t have any reviews for this movie.</p>}
      <ul
        style={{
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author || 'no info'}</h3>
              <p>{content || 'no info'}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
