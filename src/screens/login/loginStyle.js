import styled from 'styled-components/native';
import { blue } from '../../constants/colors';


export const Form = styled.View`
    width: 90%;
    align-items: center;
    margin-top: 100px;

`

export const Link = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;

`

export const LinkText = styled.Text`
    color: ${blue};
`
