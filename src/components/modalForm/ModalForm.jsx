import React, { useState } from "react";
import { Modal, ModalContent } from "react-native-modals";
import { Text, StyleSheet } from "react-native";
import InputAuth from "../../components/Inputs/Inputs";
import Button from "../../components/button/Button";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { storeDataJson } from "../../helpers/helpers";
import { useEffect } from "react";
import Checkbox from "expo-checkbox";
import { View } from "react-native";
import { PrecioWrapper, CheckWrapper } from "./modalFormStyles";
import { green } from "../../constants/colors";
import { Title } from "../../globalStyle";

const ModalForm = ({
  show,
  setShow,
  setProducts,
  edit,
  itemSelected,
  products,
  setItemSelected,
}) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    currency: "",
    quantity: 0,
    id: uuid(),
    unidad: "",
  });
  const [kilos, setKilos] = useState(false);
  const [gramos, setGramos] = useState(false);
  const [unidad, setUnidad] = useState(false);
  const [usd, setUsd] = useState(false);
  const [bs, setBs] = useState(false);
  const tasa = 27;

  const handleOnchange = (value, target) => {
    if (!edit) {
      setProduct((prev) => ({
        ...prev,
        [target]: value,
      }));
    } else {
      setItemSelected((prev) => ({
        ...prev,
        [target]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    if (!edit) {
      setProducts((prev) => [...prev, product]);
      setShow((prev) => !prev);
      setProduct({
        name: "",
        price: 0,
        quantity: 0,
        id: uuid(),
        unidad: "",
        currency: "",
      });
    } else {
      let result = products.map((item) => {
        if (item.id === itemSelected.id) {
          item = itemSelected;
        }

        return item;
      });

      setProducts(result);

      setShow((prev) => !prev);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      storeDataJson(products, "products");
      setKilos(false);
      setGramos(false);
      setUnidad(false);
      setBs(false);
      setUsd(false);
    }
  }, [products]);

  const handleCheck = (type, value) => {
    if (type === "kg") {
      setKilos(value);
      setGramos(false);
      setUnidad(false);
      handleOnchange("Kg", "unidad");
    } else if (type === "grm") {
      setKilos(false);
      setGramos(value);
      setUnidad(false);
      handleOnchange("Grm", "unidad");
    } else if (type === "uni") {
      setKilos(false);
      setGramos(false);
      setUnidad(value);
      handleOnchange("Uni", "unidad");
    } else if (type === "bs") {
      setBs(value);
      setUsd(false);
      handleOnchange("bs", "currency");
    } else if (type === "usd") {
      setBs(false);
      setUsd(value);
      handleOnchange("$", "currency");
    }
  };

  return (
    <Modal
      visible={show}
      onTouchOutside={() => {
        setShow((prev) => !prev);
      }}
    >
      <ModalContent>
      <Title mt="0px" size={"20px"} ml="10px">
        Nuevo Producto
      </Title>

        <InputAuth
          value={!edit ? product.name : itemSelected.name}
          onChange={handleOnchange}
          name="name"
          placeholder="Nombre"
          type="text"
        />

        <InputAuth
          value={!edit ? product.price : itemSelected.price}
          onChange={handleOnchange}
          name="price"
          placeholder="Precio"
          type="number"
        />
        <PrecioWrapper>
          <CheckWrapper onPress={() => handleCheck("usd", !usd)}>
            <Text>Dolares:</Text>

            <Checkbox
              style={styles.checkbox}
              value={usd}
              onValueChange={(newValue) => handleCheck("usd", newValue)}
              color={usd ? green : undefined}
            />
          </CheckWrapper>

          <CheckWrapper onPress={() => handleCheck("bs", !bs)}>
            <Text>Bolivares:</Text>

            <Checkbox
              style={styles.checkbox}
              value={bs}
              onValueChange={(newValue) => handleCheck("bs", newValue)}
              color={bs ? green : undefined}
            />
          </CheckWrapper>
        </PrecioWrapper>

        <InputAuth
          value={!edit ? product.quantity : itemSelected.quantity}
          onChange={handleOnchange}
          name="quantity"
          placeholder="Cantidad"
          type="number"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "space-around",
          }}
        >
          <CheckWrapper onPress={() => handleCheck("kg", !kilos)}>
            <Text>Kilos:</Text>

            <Checkbox
              style={styles.checkbox}
              value={kilos}
              onValueChange={(newValue) => handleCheck("kg", newValue)}
              color={kilos ? green : undefined}
            />
          </CheckWrapper>

          <CheckWrapper onPress={() => handleCheck("grm", !gramos)}>
            <Text>Gramos:</Text>
            <Checkbox
              style={styles.checkbox}
              
              value={gramos}
              onValueChange={(newValue) => handleCheck("grm", newValue)}
              color={gramos ? green : undefined}
            />
          </CheckWrapper>
          <CheckWrapper onPress={() => handleCheck("uni", !unidad)}>
            <Text>Unidad:</Text>
            <Checkbox
              style={styles.checkbox}
              disabled={false}
              value={unidad}
              onValueChange={(newValue) => handleCheck("uni", newValue)}
              color={unidad ? green : undefined}
            />
          </CheckWrapper>
        </View>

        <Button text={!edit ? "Agregar" : "Editar"} onPress={handleSubmit} />
      </ModalContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default ModalForm;
