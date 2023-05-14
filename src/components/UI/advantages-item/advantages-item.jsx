import React from "react";
import Title, { TitleSize } from "/src/components/UI/title/title";
import { AdvantagesItem, Header, Image, Description, Owner } from "./styles";

const Card = ({ title, owner, about, isNegative, image }) => {
  return (
    <AdvantagesItem isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="H3" size={TitleSize.EXTRA_SMALL}>
            {" "}
            {title}
          </Title>
        </div>
      </Header>
      <Description dangerouslySetInnerHTML={{ __html: about }} />
    </AdvantagesItem>
  );
};
export default Card;
