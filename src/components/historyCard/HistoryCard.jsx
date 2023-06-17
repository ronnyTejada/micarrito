import React from "react";
import { Card, Title, Text, Wrapper, BtnCard } from "./historyCard";

const HistoryCard = ({date,totalUsd,totalBs,nota}) => {
  return (
    <Card>
      <Title>{nota}</Title>

      <Wrapper>
        <Text>Fecha: </Text>
        <Title>{date}</Title>
      </Wrapper>
      <Wrapper>
        <Text>Total Usd: </Text>
        <Title>{parseFloat(totalUsd).toFixed(2)}$</Title>
      </Wrapper>
      <Wrapper>
        <Text>Total Bs: </Text>
        <Title>{parseFloat(totalBs).toFixed(2)}bs</Title>
      </Wrapper>

      <BtnCard>
        <Text color={'white'}>Ver Detalles</Text>
      </BtnCard>
    </Card>
  );
};

export default HistoryCard;
