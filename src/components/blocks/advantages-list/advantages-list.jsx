import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import Button from "/src/components/UI/button/button";
import Card from "../../UI/advantages-item/advantages-item";
import { StyledAdvantages, StyledUl, StyledLi } from "./styles";
import { AppRoute } from "/src/const";

function AdvantagesList({ advantages }) {
  return advantages && advantages.length ? (
    <StyledAdvantages>
      <Title size={TitleSize.MEDIUM}> Почему фермерские продукты лучше?</Title>
      <StyledUl>
        {advantages.map((advantage) => (
          <StyledLi key={advantage.id}>
            <Card {...advantage} />
          </StyledLi>
        ))}
      </StyledUl>
      <Button minWidth={260} link={AppRoute.BUY}>
        Купить
      </Button>
    </StyledAdvantages>
  ) : null;
}

export default AdvantagesList;
