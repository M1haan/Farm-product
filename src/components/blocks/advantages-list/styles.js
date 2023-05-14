import styled from "styled-components";
import { Section, Li, Ul } from "/src/components/styled";

export const StyledAdvantages = styled(Section)`
  padding-bottom: 80px;
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const StyledUl = styled(Ul)`
  width: ${(props) => props.theme.pageWidth};
  flex-wrap: wrap;
  display: flex;
  margin-top: 44px;
  margin-bottom: 44px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const StyledLi = styled(Li)`
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 27px;
  text-align: left;
  overflow: hidden;
`;
