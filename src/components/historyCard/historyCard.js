import styled from 'styled-components/native';
import { blue, gray } from '../../constants/colors';


export const Card = styled.View`
 width: 90%;
 height: 170px;
 border-radius: 10px;
 background-color: ${gray};
 padding-top: 20px;
 padding-left: 25px;
 padding-bottom: 20px;
 padding-right: 20px;
 justify-content: space-between;
 margin-top: 20px;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
`
export const Text = styled.Text`
  color: ${({ color }) => (color ? color : "")};
`

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

export const BtnCard = styled.TouchableOpacity`
    background-color: ${blue};
    width: 90px;
    height: 25px;
    border-radius: 10px;
    justify-content:center;
    align-items: center;
    align-self: flex-end;

    
`