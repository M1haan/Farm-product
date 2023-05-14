import React from "react";
import { Panel } from "/src/components/UI/panel/panel";
import { TitleSize } from "/src/components/UI/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";
import Tabs from "/src/components/UI/tabs/tabs";
import OptionsList from "/src/components/UI/options-list/options-list";

function ProductItem({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];
  return (
    <Panel>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductItem;
