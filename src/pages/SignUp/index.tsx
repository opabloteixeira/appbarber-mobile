import React from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  ImageSignUp,
} from './styled';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <ImageSignUp source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input placeholder="Nome" icon="user" name="name" />
            <Input placeholder="E-mail" icon="mail" name="email" />
            <Input placeholder="Senha" icon="lock" name="password" />

            <Button onPress={() => console.log('foi')}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para Logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
