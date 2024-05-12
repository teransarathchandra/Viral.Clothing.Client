import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "@components/common/Navbar/Navbar";
import { privateRoutes, publicRoutes } from "@routes/routes";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "@components/common/Spinner/Spinner";
import Footer from "@components/common/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {publicRoutes.concat(privateRoutes).map((route) => {
            const Component = route.component;
            const routeElement = (
              <Suspense fallback={<Spinner loading={true} />}>
                <Component />
              </Suspense>
            );

            return (
              <Route
                element={routeElement}
                key={route.path}
                path={route.path}
              />
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
