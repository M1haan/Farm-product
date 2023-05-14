import React from "react";
//import MainPage from "../../pages/main-page/main-page";
import BuyPage from "../../pages/buy-page/buy-page";
import Header from "../header/header";
import Footer from "../footer/footer";
import { StyledPageWrapper } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper({ advantages, products }) {
  return (
    <>
      <Header />
      <StyledPageWrapper>
        <Outlet />
      </StyledPageWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
