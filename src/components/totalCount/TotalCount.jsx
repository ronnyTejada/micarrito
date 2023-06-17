import React, { useEffect, useState } from "react";
import Checkout from "../checkoutModal/Checkout";
import {
  TotalWrapper,
  TotalText,
  CheckoutBtn,
  CheckoutTxt,
  TextWrapper,
} from "./totalStyles";
import { getDollarPrices } from "venecodollar";

const TotalCount = ({ products }) => {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);

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

  
  const getTotal = (price, quantity, unidad, currency) => {
    console.log(currency === "bs");
    if (unidad === "Grm" && currency !== "bs") {
      let gramos = quantity / 1000;
      let subtotal = parseFloat(price) * parseFloat(gramos);
      setTotal((prev) => (prev += subtotal));
      return;
    } else if (currency === "bs" && unidad === "Grm") {
      let gramos = quantity / 1000;
      let subtotal = parseFloat(price) / parseFloat(bcvTasa);
      let total_ = subtotal * gramos;
      let aux = total_
      setTotal((prev) => (prev += aux));

      return;
    }
    if (currency === "bs" && unidad !=='Grm') {
      let subtotal = parseFloat(price) / parseFloat(bcvTasa);
      let total_ = subtotal*quantity
      let aux = total_
      console.log(aux)

      setTotal((prev) => (prev += aux));
      return;
    }

    let subtotal = parseFloat(price) * parseFloat(quantity);
    setTotal((prev) => (prev += subtotal));
  };

  useEffect(() => {
    setTotal(0);
    getDollar();
    console.log("dwd");

    if (products.length > 0) {
      products.map((item) => {
        getTotal(item.price, item.quantity, item.unidad, item.currency);
      });
    }
  }, [products,bcvTasa]);

  return (
    <TotalWrapper>
      <TextWrapper>
        <TotalText>Total Usd: {parseFloat(total).toFixed(2)}$</TotalText>
        <TotalText>
          Total Bs: {parseFloat(total).toFixed(1) * bcvTasa}bs
        </TotalText>
      </TextWrapper>

      <CheckoutBtn onPress={() => setShow((prev) => !prev)}>
        <CheckoutTxt>Procesar</CheckoutTxt>
      </CheckoutBtn>

      <Checkout
        show={show}
        setShow={setShow}
        total={total}
        products={products}
      />
    </TotalWrapper>
  );
};

export default TotalCount;
