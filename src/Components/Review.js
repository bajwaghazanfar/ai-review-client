import React from "react";
import moment from "moment"; // Correct import for moment.js

export const Review = ({ data }) => {
  // Function to format the date string
  function formatDateString(dateString) {
    // Parse the date string and format it
    return moment(dateString).format("MMM DD YYYY");
  }

  return (
    <div className="all-reviews-container">
      {data.reviews.map((review) => (
        <div key={review.id} className="review-wrapper">
          <div className="review-meta">
            <div className="stars hide-mobile">
              {Array.from({ length: review.rating }, (_, index) => (
                <svg
                  key={index} // Add key to each svg element
                  width="16"
                  height="16"
                  viewBox="0 0 48 45"
                >
                  <path
                    d="M24.0001 1.18711L30.5912 15.3802L30.7099 15.636L30.9903 15.6667L46.828 17.3993L35.0668 27.8809L34.8506 28.0737L34.9102 28.3572L38.1178 43.6029L24.2426 35.9044L24 35.7698L23.7574 35.9044L9.88218 43.6029L13.0898 28.3572L13.1494 28.0737L12.9332 27.8809L1.17202 17.3993L17.0097 15.6667L17.2901 15.636L17.4088 15.3802L24.0001 1.18711Z"
                    fill="#E0AA1D"
                  ></path>
                </svg>
              ))}
            </div>
            <div className="meta-meta">
              <h5>{review.author}</h5>
              <p>{formatDateString(review.review_date)}</p>
            </div>
          </div>
          <div className="review-main">
            <div className="stars show-mobile">
              {Array.from({ length: review.rating }, (_, index) => (
                <svg
                  key={index} // Add key to each svg element
                  width="16"
                  height="16"
                  viewBox="0 0 48 45"
                >
                  <path
                    d="M24.0001 1.18711L30.5912 15.3802L30.7099 15.636L30.9903 15.6667L46.828 17.3993L35.0668 27.8809L34.8506 28.0737L34.9102 28.3572L38.1178 43.6029L24.2426 35.9044L24 35.7698L23.7574 35.9044L9.88218 43.6029L13.0898 28.3572L13.1494 28.0737L12.9332 27.8809L1.17202 17.3993L17.0097 15.6667L17.2901 15.636L17.4088 15.3802L24.0001 1.18711Z"
                    fill="#E0AA1D"
                  ></path>
                </svg>
              ))}
            </div>
            <h4>{review.review_title}</h4>
            <p>{review.review_description}</p>
            {/* {review.review_image && (
              <img
                src={review.review_image}
                alt={review.review_title}
                className="review-image" // Optional: Add class for styling
              />
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};
