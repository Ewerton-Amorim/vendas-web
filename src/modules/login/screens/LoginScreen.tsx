import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassord] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    console.log(setUsername);
  };

  const handlePassord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassord(event.target.value);
  };

  const handleLogin = () => {
    alert(`username${username} password${password}`);
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">
            Login
          </TitleLogin>
          <Input title="Usuário" margin="32px 0px 0px" onChange={handleUsername} value={username} />
          <Input
            type="password"
            title="Senha"
            margin="32px 0px 0px"
            onChange={handlePassord}
            value={password}
          />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
