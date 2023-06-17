import styled from "styled-components/native";
import { mainWhite } from "./constants/colors";

export const Wrapper = styled.View`
  position: relative;
  top: 0;
  background-color: ${mainWhite};
  flex: 1;
  align-items: center;
  padding-top: 40px;
  text-align: center;
`;

export const Logo = styled.Image`
`;

export const Title = styled.Text`
  color: black;
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: bold;
  text-align: center;
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-left: ${({ ml }) => (ml ? ml : "")};
  align-self: flex-start;
  margin-bottom: 10px;
`;

//margin-top: ${({ mt }) => (mt ? mt : '30px')};
// margin-bottom: 100px;

//margin-bottom: ${({ mb }) => (mb ? mb : "")};
