import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input, { InputProps } from '../../components/Input';

import { Container, Title } from './styles';

import swlogo from '../../assets/swlogo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

   const handleChange = (name: InputProps) => {
    const nome =  name.value;
    console.log(nome);
    

  }

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={swlogo} style={{ width: 300, height: 200 }} />
          <Title>Que a força esteja com você</Title>

          <Input name="text" onChange={ (name)=>{handleChange}} placeholder="Digite seu nome Jedi"/>
          <Button onPress={() => navigation.navigate('Films')}>Entrar</Button>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignIn;
