import React from 'react';
import { TextInputProps } from 'react-native';

import iconr2d2 from '../../assets/iconr2d2.png';

import { Container, TextInput, Image } from './styles';

export interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      
      <Image
        source={iconr2d2}
        width={30}
        height={30}
        style={{ tintColor: '#bbbbbb' }}
      />
      <TextInput placeholderTextColor="#bbbbbb" {...rest} />
    </Container>
  );
};

export default Input;