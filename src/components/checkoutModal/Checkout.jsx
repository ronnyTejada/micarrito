import moment from "moment";
import React, { useState } from "react";
import { Modal, ModalContent } from "react-native-modals";
import Button from "../button/Button";
import InputAuth from "../Inputs/Inputs";
import { Text, Total, Wrapper, WrapperBtn } from "./checkoutStyle";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import {
  cleanStorage,
  getDataJson,
  storeDataJson,
} from "../../helpers/helpers";
import { getDollarPrices } from "venecodollar";
import { useEffect } from "react";

const Checkout = ({ show, setShow, total, products }) => {
  const [nota, setNota] = useState("");
  let arr = [];
  const [bcvTasa, setBcvTasa] = useState(0);

  async function getDollar() {
    try {
      const response = await getDollarPrices();
      setBcvTasa(response[0].dollar);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDollar();
  }, []);

  const handleCheckout = async () => {
    let data = await getDataJson("orders");
    let orden = {
      id: uuid(),
      nota: nota,
      totalUsd: parseFloat(total).toFixed(2),
      totalBs: parseFloat(total).toFixed(2) * bcvTasa,
      products: products,
      date: moment().format("L"),
    };
    if (data !== null) {
      arr = data;
    }

    arr.push(orden);

    storeDataJson(arr, "orders");
    setShow((prev) => prev=!prev);
    cleanStorage("products");
  };

  const handleText = (text) => {
    setNota(text);
  };

  return (
    <Modal
      visible={show}
      onTouchOutside={() => {
        setShow((prev) => !prev);
      }}
    >
      <ModalContent>
        <Wrapper>
          <Text>Total</Text>
          <Total>{parseFloat(total).toFixed(2)}$</Total>
          <Text>{parseFloat(total).toFixed(2) * bcvTasa}bs</Text>
          <Text>Procesando Pago...</Text>
          <WrapperBtn>
            <InputAuth
              type="text"
              onChange={handleText}
              placeholder={"Nota"}
              width="100%"
            />
            <Button text={"Procesar"} onPress={handleCheckout} />
          </WrapperBtn>
        </Wrapper>
      </ModalContent>
    </Modal>
  );
};

export default Checkout;
