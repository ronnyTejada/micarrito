import styled from 'styled-components/native';
import { blue } from '../../constants/colors';


export const ButtonWrapper =  styled.TouchableOpacity `
    background-color: ${blue};
    height: 50px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

`

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;

`