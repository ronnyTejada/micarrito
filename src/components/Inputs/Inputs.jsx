import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { secondGray } from "../../constants/colors";
import { Input } from "./inputStyle";

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#01141d",
    borderRadius: 8,
    color: "white",
    marginBottom: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
  errorPassword: {
    color: "#E15241",
    position: "relative",
    marginLeft: 0,
    bottom: "5%",
  },
  label: {
    color: "white",
    fontWeight: "700",
    marginBottom: 5,
  },
});

const InputAuth = ({ placeholder, type, onChange, error, name, label, value, width }) => {
  return (
    <>
      {type === "password" && (
        <>
          <Input
            placeholderTextColor={secondGray}
            placeholder={placeholder}
            name={name}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(text) => onChange(text, name)}
          />
          {error && (
            <Text style={styles.errorPassword}>
              Al menos 8 caracteres, 1 mayuscula y 1 numero
            </Text>
          )}
        </>
      )}
      {type === "email" && (
        <>
          <Text style={styles.label}>{label}</Text>

          <Input
            name={name}
            placeholderTextColor={secondGray}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={(text) => onChange(text, name)}
          />
          {error && <Text style={styles.errorPassword}>Email invalido</Text>}
        </>
      )}
      {type === "text" && (
        <>
          <Text style={styles.label}>{label}</Text>
          <Input
            name={name}
            placeholderTextColor={secondGray}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={(text) => onChange(text, name)}
            value={value}
          />
        </>
      )}
      {type === "number" && (
        <>
          <Text style={styles.label}>{label}</Text>
          <Input
            name={name}
            placeholderTextColor={secondGray}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={(text) => onChange(text, name)}
            value={value}
            keyboardType='numeric'
            width={width}
          />
        </>
      )}
    </>
  );
};

export default InputAuth;
