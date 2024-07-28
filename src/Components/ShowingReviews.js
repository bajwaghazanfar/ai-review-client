export const ShowingReviews = ({ data }) => {
  return (
    <div className="showing-reviews-container">
      <div className="showing-reviews-wrapper">
        <h4>
          Showing <span>{data.reviews.length}</span> reviews.
        </h4>
      </div>
    </div>
  );
};
