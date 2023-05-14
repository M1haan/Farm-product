import React from "react";
import Copyright from "../../UI/copyright/copyright";
import Logo from "../../UI/logo/logo";
import { StyledFooter } from "./styles";

const Footer = () => (
  <StyledFooter className="footer">
    <Logo />
    <Copyright />
  </StyledFooter>
);

export default Footer;
