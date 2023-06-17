import styled from 'styled-components/native';
import { blue } from '../../constants/colors';

export const Wrapper = styled.View`
    width: 350px;
    height: 280px;
    align-items: center;
    padding-top: 30px;

`

export const Total = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${blue};
`

export const Text = styled.Text`
    font-weight: bold;
`
export const WrapperBtn = styled.View`
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: 0;
`