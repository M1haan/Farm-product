import React, { useState } from "react";
import { Panel } from "/src/components/UI/panel/panel";
import Title, { TitleSize } from "../../UI/title/title";
import CheckboxList from "../../UI/checkbox-list/checkbox-list";
import Button from "/src/components/UI/button/button";
import ProductItem from "/src/components/UI/product-item/product-item";
import {
  LeftColumn,
  StyledBuyPage,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [address, setAddress] = useState("");

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <StyledBuyPage>
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Panel>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Сделать заказ
          </Title>
          <AddressInput
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
            placeholder="Введите адрес доставки"
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledBuyPage>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default BuyPage;
