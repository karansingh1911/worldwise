// routing and context logic
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CityProvider from "./contexts/CityContext";
import RouteProtection from "./pages/RouteProtection";
import FakeAuthenticationProvider from "./contexts/FakeAuthenticationContext";

//components
import Form from "./components/Form";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import { lazy, Suspense } from "react";
import FullPageSpinner from "./components/FullPageSpinner";
// pages
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import PageNotFound from "./pages/PageNotFound";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

// lazy loading pages to reduce bundle size
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

const App = () => {
  //we need the data from fake json-server at 3 diff places like cityList, countryList and even on Map marked with flags!

  return (
    <BrowserRouter>
      <FakeAuthenticationProvider>
        <CityProvider>
          <Suspense fallback={<FullPageSpinner />}>
            <Routes>
              <Route index element={<HomePage />}></Route>
              <Route path="/products" element={<Product />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/login" element={<Login />}></Route>

              <Route
                path="/app"
                element={
                  <RouteProtection>
                    <AppLayout />
                  </RouteProtection>
                }
              >
                <Route index element={<Navigate to="cities" replace />}></Route>
                <Route path="cities" element={<CityList />}></Route>
                <Route path="cities/:id" element={<City />}></Route>
                <Route path="countries" element={<CountryList />}></Route>
                <Route path="form" element={<Form />}></Route>
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </CityProvider>
      </FakeAuthenticationProvider>
    </BrowserRouter>
  );
};
export default App;
