import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import Modal, { ModalPortal } from "react-native-modals";
import 'expo-dev-client'
export default function App() {
  return (
    <>
      <Navigation />
      <ModalPortal />
    </>
  );
}

