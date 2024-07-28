import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ReviewInitalInfo } from "./Components/ReviewInitalInfo";
import { ShowingReviews } from "./Components/ShowingReviews";
import { Review } from "./Components/Review";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  // Function to get URL parameters
  function getURLParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramsObject = Object.fromEntries(urlParams.entries());

    return paramsObject;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { product_id, title, description } = getURLParams();

        setLoading(true);

        const response = await axios.post(
          "https://ai-review-server.onrender.com/get",
          {
            product_id,
            title,
            description,
          }
        );

        // Check response data

        // Assuming the response data is an object with product details
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : data ? (
        <section className="review-container">
          <div className="review-wrapper">
            <ReviewInitalInfo data={data} />
            <div className="hide-mobile">
              <ShowingReviews data={data} />
            </div>
            <Review data={data} />
          </div>
        </section>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default App;
