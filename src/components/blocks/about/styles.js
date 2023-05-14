import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  min-height: 600px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
  align-items: center;
  z-index: 1;
  flex-direction: column;
  padding-left: 90px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    bottom: -20px;
    left: 830px;
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
  }

  &::before {
    position: absolute;
    content: "";
    width: 446px;
    height: 447px;
    background-color: #c4e2ff;
    border-radius: 50%;
    top: 80px;
    left: 750px;
    z-index: -1;
  }
`;

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 538px;
`;
