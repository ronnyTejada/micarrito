import React from "react";
import { ButtonWrapper, ButtonText } from "./buttonStyle";

const Button = ({text,onPress}) => {
  return (
    <ButtonWrapper onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
