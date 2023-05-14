import React from "react";
import Logo from "/src/components/UI/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledHeader } from "./styles";

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

export default Header;
