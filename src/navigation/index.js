import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../screens/dashboard/Dashboard";
import History from "../screens/history/History";
import NuevaCompra from "../screens/nuevaCompra/NuevaCompra";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          //presentation: 'modal'
        }}
        initialRouteName="InitialScreen"
      >
        {/* <Stack.Screen
          name="Login"
          component={Login}
          //options={{title: 'Welcome'}}
        /> */}
        <Stack.Screen
          name="Login"
          component={Dashboard}
          //options={{title: 'Welcome'}}
        />
         <Stack.Screen
          name="NuevaCompra"
          component={NuevaCompra}
          //options={{title: 'Welcome'}}
        />
          <Stack.Screen
          name="History"
          component={History}
          //options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
