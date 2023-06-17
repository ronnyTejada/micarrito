import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { blue } from "../../constants/colors";

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    width: 30,
    position: "absolute",
    top: 45,
    left:30,
  },
});

const BackButton = () => {
  const navigation = useNavigation()
  const handleBack = () => {
    navigation.goBack()
  };
  return (
    <TouchableOpacity onPress={handleBack} style={styles.icon}>
      <Icon name="chevron-left" type="font-awesome" color={blue} size={30} />
    </TouchableOpacity>
  );
};

export default BackButton;
