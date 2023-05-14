import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import products from "/src/mocks/product-list";
import advantagesList from "/src/mocks/advantages-list";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollTop from "../UI/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              exact
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
