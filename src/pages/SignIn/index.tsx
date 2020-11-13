import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title } from './styles';

import swlogo from '../../assets/swlogo.png';

const SignIn: React.FC = () => {
  const [inputName, setInputName] = useState('');

  const navigation = useNavigation();

  const handleChange = (e: any) => {
    const title = e.nativeEvent.text;
    setInputName(title);
    console.log(title);
  };

  const handleSubmit = () => {
    console.log(inputName);
    navigation.navigate('Films', { inputName} );
    console.log(inputName);
  };

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={swlogo} style={{ width: 300, height: 200 }} />
          <Title>Que a força esteja com você</Title>

          <Input
            name="text"
            onChange={handleChange}
            placeholder="Digite seu nome Jedi"
          />
          <Button onPress={handleSubmit}>Entrar</Button>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignIn;
