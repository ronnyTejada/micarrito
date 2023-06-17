import styled from "styled-components/native";
import { blue } from "../../constants/colors";

export const Tablet = styled.ScrollView`
  width: 100%;
  max-height: 550px;
`;

export const TabletHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
`;

export const TabletRow = styled.TouchableOpacity`
  background-color: ${(props) => props.color ?? ""};
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
`;
export const TabletTitle = styled.Text``;
export const View = styled.View`
 align-self: center;
 width: 90px;
`
export const TabletInput = styled.TextInput`
  margin: 6px;
  max-width:50px;
  font-weight: 900;
  text-align: left;
  color: black;
`;

export const Text = styled.Text`
  margin: 6px;
  font-weight: 900;
  color: black;
  text-align: center;
`
export const TextVoid = styled.Text`
  margin: 6px;
  font-weight: 900;
  color: black;
  text-align: center;
  top: 15px;

`

export const AddBtn = styled.TouchableOpacity`
  background-color: ${blue};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  position: absolute;
  bottom: 90px;
  right: 10px;
  justify-content: center;
`


export const DeleteBtn = styled.TouchableOpacity`
  background-color: red;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  position: absolute;
  bottom: 145px;
  right: 10px;
  justify-content: center;
`

export const EditBtn = styled.TouchableOpacity`
  background-color: gray;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  position: absolute;
  bottom: 200px;
  right: 10px;
  justify-content: center;
`

export const Options = styled.View`
`