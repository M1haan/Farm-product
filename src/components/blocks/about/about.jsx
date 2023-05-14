import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import { StyledSection, Description, Wrapper } from "./styles";

const About = () => (
  <StyledSection>
    <Wrapper>
      <Title size={TitleSize.BIG}>
        {" "}
        Магазин фермерских продуктов с доставкой
      </Title>
      <Description>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Description>
    </Wrapper>
  </StyledSection>
);

export default About;
