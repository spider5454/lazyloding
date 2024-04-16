import React, { Suspense, useState } from "react";
import axios from "axios";
// Importing the ProductCard component lazily using React.lazy

const ProductCard = React.lazy(() => import("../Component/Productcard"));

function Product() {
     // State to hold the fetched photos and the fetch status
  const [photos, setPhotos] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  // Function to fetch photos from the JSONPlaceholder API
  const fetchPhotos = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setPhotos(res.data);
      setIsFetched(true);
    } catch (error) {
      console.error("Error fetching photos:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <>
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      {/* Check if photos are fetched, then display them, otherwise show a button to fetch */}
      {isFetched ? (
        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-5">
          {/* Use React.Suspense for lazy loading the ProductCard component */}
          <Suspense
            fallback={
              // Show a loading spinner while ProductCard is being loaded
              <>
                <button className="btn btn-info" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Fetching Photos ...
                </button>
              </>
            }
          >
            {/* Map through the fetched photos and render ProductCard for each */}
            {photos.map((item) => (
              <ProductCard key={item.id} title={item.title} url={item.url} />
            ))}
          </Suspense>
        </div>
      ) : (
        // Show a button to fetch photos if they haven't been fetched yet
        <button className="btn btn-info" onClick={fetchPhotos}>
          Fetch Photos
        </button>
      )}
    </div>
      
    </>
  )
}

export default Product
