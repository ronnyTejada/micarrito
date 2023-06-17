import styled from 'styled-components/native';
import { green } from '../../constants/colors';


export const TotalWrapper = styled.View`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    border-width: 3px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TextWrapper = styled.View``

export const CheckoutBtn = styled.TouchableOpacity`
    background-color: ${green};
    width: 100px;
    height: 30px;
    border-radius: 10px;
    justify-content:center;
    align-items: center;

`

export const CheckoutTxt = styled.Text`
    color: white;
    font-weight: bold;

`

export const TotalText = styled.Text`
    font-weight: bold;

`