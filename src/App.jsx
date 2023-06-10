import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Spinner from "./components/Spinner/Spinner";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="tab_secations">
            <Spinner />
          </div>
        }
      >
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
