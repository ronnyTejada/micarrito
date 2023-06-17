import React from "react";
import { Images } from "../../constants/images";
import { Logo, Wrapper } from "../../globalStyle";
import { Box, BoxWrapper, Text } from "./dashboardStyle";
import { Icon } from "@rneui/themed";
import 'expo-dev-client'

import { useNavigation } from "@react-navigation/native";
// import {
//   BannerAd,
//   BannerAdSize,
//   TestIds,
// } from "react-native-google-mobile-ads";
// const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-7727476561890859~8804153050"

const Dashboard = ({ navigation }) => {
  const navigate = useNavigation();

  const goToNuevaCompra = () => {
    navigation.navigate("NuevaCompra");
  };
  const goToHistory = () => {
    navigation.navigate("History");
  };

  return (
    <Wrapper>
      <Logo source={Images.Logo} />

      <BoxWrapper>
        <Box onPress={goToNuevaCompra}>
          <Icon
            name="shopping-cart"
            type="font-awesome"
            color="white"
            size={100}
          />
          <Text>Nueva Compra</Text>
        </Box>
        <Box onPress={goToHistory}>
          <Icon name="history" type="font-awesome" color={"white"} size={100} />
          <Text>Tus Compras</Text>
        </Box>
      </BoxWrapper>
      {/* <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizeAdsOnly: true,
        }}
      /> */}
    </Wrapper>
  );
};

export default Dashboard;
