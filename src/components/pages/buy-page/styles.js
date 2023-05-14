import styled, { css } from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/UI/text-input/text-input";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/UI/price/price";

export const StyledBuyPage = styled(Section)`
  min-width: ${(props) => props.theme.pageWidth};
  padding: ${(props) => props.theme.pagePadding};
  display: flex;
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
`;

export const LeftColumn = styled.div`
  overflow-y: scroll;
  width: 353px;
  padding-right: ${(props) => props.theme.indent};
  max-height: 100%;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
