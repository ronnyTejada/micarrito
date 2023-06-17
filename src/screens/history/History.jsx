import React, { useEffect, useState } from "react";
import HistoryCard from "../../components/historyCard/HistoryCard";
import { Images } from "../../constants/images";
import { Logo, Wrapper } from "../../globalStyle";
import BackButton from "../../components/goBack/GoBack";
import { Container, TextVoid } from "./historyStyle";
import { getDataJson } from "../../helpers/helpers";

const History = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    let data = await getDataJson("orders");
    if(data!==null){
      setOrders(data);

    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Container>
      <Wrapper>
        <BackButton />
        <Logo source={Images.Logo} />
        {orders.map((item) => {
          return <HistoryCard nota={item.nota} date={item.date} totalUsd={item.totalUsd} totalBs={item.totalBs}/>;
        })} 
        

      </Wrapper>
    </Container>
  );
};

export default History;
