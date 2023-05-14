import React from "react";
import About from "../../blocks/about/about";
import AdvantagesList from "../../blocks/advantages-list/advantages-list";

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <AdvantagesList advantages={advantages} />
    </>
  );
}

export default MainPage;
