import React from 'react';
import { View, Text,Image } from 'react-native';
import Button from '../../components/button/Button';
import InputAuth from '../../components/Inputs/Inputs';
import { Images } from '../../constants/images';
import { loginTitle } from '../../data/loginData';
import { Wrapper,Logo, Title } from '../../globalStyle';
import { Form, Link, LinkText } from './loginStyle';


const Login = () => {
    return ( 
        <Wrapper>
            <Logo source={Images.Logo} />
            <Title mt='30px' size={26}>
                {loginTitle}
            </Title>

            <Form>
                <InputAuth type={'email'} name={'email'} onChange={''} placeholder={'Correo'}/>
                <InputAuth type={'email'} name={'email'} onChange={''} placeholder={'Contraseña'}/>
                <Button/>
            </Form>

            <Link>
                <LinkText>
                    Crear Cuenta
                </LinkText>
            </Link>
        </Wrapper>
     );
}
 
export default Login;