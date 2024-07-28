import { useEffect, useState } from "react";
import { ShowingReviews } from "./ShowingReviews";

export const ReviewInitalInfo = ({ data }) => {
  const [rating, setRating] = useState(0);
  const [groupedReviews, setGroupedReviews] = useState({});

  // Calculate average rating
  function getAverage(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i].rating;
    }
    return sum / array.length;
  }

  // Group reviews by rating
  const groupReviewsByRating = () => {
    const reviewCounts = data.reviews.reduce((acc, review) => {
      const roundedRating = Math.round(review.rating);
      if (acc[roundedRating]) {
        acc[roundedRating] += 1;
      } else {
        acc[roundedRating] = 1;
      }
      return acc;
    }, {});

    setGroupedReviews(reviewCounts);
  };

  useEffect(() => {
    setRating(getAverage(data.reviews));
    groupReviewsByRating();
  }, [groupReviewsByRating]);

  const flooredRating = Math.floor(rating);
  const remainderRating = Math.round(rating) - flooredRating;

  return (
    <div className="review-initial-info">
      <div className="overall-rating">
        <h4>{rating.toFixed(1)}/5 </h4>
        <div className="stars">
          {Array.from({ length: flooredRating }, (_, index) => (
            <svg
              key={`full-${index}`}
              width="32"
              height="32"
              viewBox="0 0 48 45"
              role="img"
              aria-label="Rating star"
            >
              <path
                d="M24.0001 1.18711L30.5912 15.3802L30.7099 15.636L30.9903 15.6667L46.828 17.3993L35.0668 27.8809L34.8506 28.0737L34.9102 28.3572L38.1178 43.6029L24.2426 35.9044L24 35.7698L23.7574 35.9044L9.88218 43.6029L13.0898 28.3572L13.1494 28.0737L12.9332 27.8809L1.17202 17.3993L17.0097 15.6667L17.2901 15.636L17.4088 15.3802L24.0001 1.18711Z"
                fill="#E0AA1D"
              ></path>
            </svg>
          ))}
          {Array.from({ length: remainderRating }, (_, index) => (
            <svg
              key={`half-${index}`}
              width="32"
              height="32"
              viewBox="0 0 48 45"
              role="img"
              aria-label="Rating half star"
            >
              <path
                d="M24.0001 1.18711L30.5912 15.3802L30.7099 15.636L30.9903 15.6667L46.828 17.3993L35.0668 27.8809L34.8506 28.0737L34.9102 28.3572L38.1178 43.6029L24.2426 35.9044L24 35.7698L23.7574 35.9044L9.88218 43.6029L13.0898 28.3572L13.1494 28.0737L12.9332 27.8809L1.17202 17.3993L17.0097 15.6667L17.2901 15.636L17.4088 15.3802L24.0001 1.18711Z"
                fill="#f8f8f8"
                stroke="#e6e6e6"
              ></path>
            </svg>
          ))}
        </div>
        <p>{data.reviews.length} reviews</p>
      </div>
      <div className="show-mobile">
        <ShowingReviews data={data} />
      </div>
      <div className="rating-by-star-container">
        <div className="rating-by-star-wrapper">
          {Object.entries(groupedReviews).map(([rating, count], index) => (
            <div className="rating" key={index}>
              <p>
                {rating}{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 48 45"
                  role="img"
                  aria-label="Rating: 1.0 out of 5 stars"
                >
                  <path
                    d="M24.0001 1.18711L30.5912 15.3802L30.7099 15.636L30.9903 15.6667L46.828 17.3993L35.0668 27.8809L34.8506 28.0737L34.9102 28.3572L38.1178 43.6029L24.2426 35.9044L24 35.7698L23.7574 35.9044L9.88218 43.6029L13.0898 28.3572L13.1494 28.0737L12.9332 27.8809L1.17202 17.3993L17.0097 15.6667L17.2901 15.636L17.4088 15.3802L24.0001 1.18711Z"
                    fill="#E0AA1D"
                  ></path>
                </svg>
              </p>
              <div className="line">
                <div
                  className="adjusted"
                  style={{
                    width: `${Math.round(
                      (count / data.reviews.length) * 100
                    )}%`,
                  }}
                ></div>
              </div>
              <p>{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
