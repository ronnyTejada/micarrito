import styled from 'styled-components/native';
import { secondWhite } from '../../constants/colors';

export const Input = styled.TextInput`
    min-width:  ${({ width }) => (width ? width : "90%")};;
    height: 55px;
    background-color: ${secondWhite};
    border-color: black;
    border-width: 1px;
    border-radius: 10px;
    padding-left: 15px;
    

`