import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

// Lazily loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const Product = React.lazy(() => import("./Pages/Product"));

function App() {
  return (
    <>

    <BrowserRouter>
      {/* Define routes using the Routes component */}
      <Routes>
        {/* Route for the Home page */}
        <Route
          index  path="/"  element={<><Header />
          
               <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }} >

                {/* Use React.Suspense for lazy loading the Home component */}
                <Suspense
                  fallback={
                    // Fallback UI while Home component is being loaded
                    <>
                      <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  }
                >
                  {/* Render the Home component */}
                  <Home />
                </Suspense>
              </div>
              {/* Footer component for the Home page */}
              <Footer />
            </>
          }
        ></Route>
        {/* Route for the Product page */}
        <Route
          path="/product"
          // Element to be rendered for the Product route
          element={
            <>
              {/* Header component for the Product page */}
              <Header />
              {/* Container to center content vertically and horizontally */}
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}
              >
                {/* Use React.Suspense for lazy loading the Product component */}
                <Suspense
                  fallback={
                    // Fallback UI while Product component is being loaded
                    <>
                      <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  }
                >
                 
                  <Product />
                </Suspense>
              </div>
         
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
