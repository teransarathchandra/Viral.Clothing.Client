import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@components/common/Navbar/Navbar";
import { privateRoutes, publicRoutes } from "@routes/routes";
import { Suspense } from "react";
import Spinner from "@components/common/Spinner/Spinner";
import Footer from "@components/common/Footer/Footer";

function App() {
  const renderRoutes = () => {
    return publicRoutes.concat(privateRoutes).map((route) => {
      const Component = route.component;
      const routeElement = (
        <Suspense fallback={<Spinner loading={true} />}>
          <Component />
        </Suspense>
      );

      return <Route element={routeElement} key={route.path} path={route.path} />;
    });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{renderRoutes()}</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
