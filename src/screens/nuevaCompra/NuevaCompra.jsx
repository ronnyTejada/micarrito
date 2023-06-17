import React, { useState } from "react";
import TotalCount from "../../components/totalCount/TotalCount";
import { green, mainWhite } from "../../constants/colors";
import { Images } from "../../constants/images";
import { Icon } from "@rneui/themed";
import { nuevaCompraTitle } from "../../data/nuevaCompraData";
import { Logo, Title, Wrapper } from "../../globalStyle";
import {
  Tablet,
  TabletHeader,
  TabletRow,
  TabletTitle,
  AddBtn,
  Text,
  DeleteBtn,
  EditBtn,
  View,
  TextVoid,
} from "./nuevaCompraStyles";
import ModalForm from "../../components/modalForm/ModalForm";
import { Alert } from "react-native";
import BackButton from "../../components/goBack/GoBack";
import { getDataJson } from "../../helpers/helpers";
import { useEffect } from "react";
import {
  getDollarPrices,
  getDollarPricesWithAverage,
  calculateBsToDollar,
  calculateDollarToBs,
} from "venecodollar";
const NuevaCompra = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  const [edit, setEdit] = useState(false);
  const [bcvTasa, setBcvTasa] = useState(0);

  const isOdd = (num) => {
    return num % 2;
  };

  const getColor = (item) => {
    if (isOdd(item)) {
      return "#c0c0c0";
    } else {
      return mainWhite;
    }
  };

  const getTotal = (price, quantity, unidad) => {
    if (unidad === "Grm") {
      let gramos = quantity / 1000;
      let subtotal = parseFloat(price) * parseFloat(gramos);
      return subtotal;
    }
    let subtotal = parseFloat(price) * parseFloat(quantity);
    return subtotal.toFixed(1);
  };

  const handleSelect = (item) => {
    if (itemSelected !== null) {
      if (itemSelected.id === item.id) {
        setItemSelected(null);
        setEdit(false);
      } else {
        setItemSelected(item);
        setEdit(true);
      }
    } else {
      setItemSelected(item);
      setEdit(true);
    }
  };

  const handleEdit = () => {
    setEdit(true);
    setShowModal(true);
  };

  const deleteItem = () => {
    let result = products.filter((item) => item.id !== itemSelected.id);

    setProducts(result);
  };

  const handleDelete = () => {
    Alert.alert("Eliminar Producto!", `eliminar ${itemSelected.name}`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteItem() },
    ]);
    setEdit(false);
    setItemSelected(null);
  };

  const getProduct = async () => {
    let result = await getDataJson("products");

    if (result !== null) {
      setProducts(result);
    }
  };

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
    getProduct();
    getDollar();
  }, []);

  return (
    <Wrapper>
      <BackButton />
      <Logo source={Images.Logo} />

      <Title mt="30px" size={"20px"} ml="30px">
        {nuevaCompraTitle}
      </Title>

      <Tablet>
        <TabletHeader>
          <TabletTitle>NOMBRE</TabletTitle>
          <TabletTitle>PRECIO</TabletTitle>
          <TabletTitle>CANTIDAD</TabletTitle>
          <TabletTitle>TOTAL</TabletTitle>
        </TabletHeader>
      

        {products.map((item, i) => {
          return (
            <TabletRow
              key={item.id}
              color={() => (itemSelected?.id === item.id ? green : getColor(i))}
              onPress={() => handleSelect(item)}
            >
              <View>
                <Text>{item.name}</Text>
              </View>
              <View>
                <Text>{`${item.price}${item.currency}`}</Text>
              </View>
              <View>
                <Text>{item.quantity + "" + `(${item.unidad})`}</Text>
              </View>
              <View>
                <Text>{`${getTotal(item.price, item.quantity, item.unidad)}${
                  item.currency
                }`}</Text>
              </View>
            </TabletRow>
          );
        })}
      </Tablet>

      {itemSelected != null && (
        <>
          <DeleteBtn onPress={() => handleDelete()}>
            <Icon name="trash" type="font-awesome" color="white" size={20} />
          </DeleteBtn>
          <EditBtn onPress={() => handleEdit()}>
            <Icon name="pencil" type="font-awesome" color="white" size={20} />
          </EditBtn>
        </>
      )}
      <AddBtn onPress={() => setShowModal(true)}>
        <Icon name="plus" type="font-awesome" color="white" size={20} />
      </AddBtn>
      <TotalCount products={products} />

      <ModalForm
        show={showModal}
        setProducts={setProducts}
        setShow={setShowModal}
        edit={edit}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        products={products}
      />
    </Wrapper>
  );
};

export default NuevaCompra;
