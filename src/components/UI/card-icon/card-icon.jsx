import React from "react";
import "./style.css";

export const ProductFeature = {
  FARM: "new",
  SHOP: "soft"
};

function CardIcon({ className = "", feature }) {
  let options;

  switch (feature) {
    case ProductFeature.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case ProductFeature.SHOP:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return options.text ? (
    <span
      className={`card__icon ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default CardIcon;
