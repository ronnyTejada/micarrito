import styled from 'styled-components/native';
import { blue } from '../../constants/colors';

export const Box = styled.TouchableOpacity`
    background-color: ${blue};
    width: 90%;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 25px;
`

export const BoxWrapper = styled.View`
    height: 100px;
    width: 100%;
    flex:1;
    padding-top: 100px;
    align-items: center;
`

export const Text = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold;
    


`