import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title } from './styled';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Title>Faça seu logon</Title>

    <Input placeholder="E-mail" icon="mail" name="email" />
    <Input placeholder="Senha" icon="lock" name="password" />

    <Button onPress={() => console.log('foi')}>Entrar</Button>
  </Container>
);

export default SignIn;
