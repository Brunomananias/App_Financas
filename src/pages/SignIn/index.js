import React from 'react';
import {View, Text} from 'react-native'
import {Plataform} from 'react-native'
import { Backgroud,
         Container, 
         Logo,
        AreaInput, 
        Input, 
        SubmitButton, 
        SubmitText,
        Link,   
        LinkText } from './styles';
import { useNavigation } from '@react-navigation/native'

export default function SignIn(){
    const navigation = useNavigation();

    return(
       <Backgroud>
        <Container
            behavior={Plataform.OS === 'ios' ? 'padding' : ''}
            enabled
        
        />
            <Logo
                source={require('../../../assets/Logo.png')}
            />

        <AreaInput>
            <Input
             placeholder="E-mail"
            />
        </AreaInput>

        <AreaInput>
            <Input
             placeholder="Senha"
            />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
            <SubmitText>
                Acessar
            </SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta</LinkText>
        </Link>

        
       </Backgroud>
    )
}