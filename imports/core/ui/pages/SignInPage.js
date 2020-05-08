import React, { useState } from 'react';
import { Button, FormGroup } from 'reactstrap';
import styled from 'styled-components';

import { Users } from '/imports/user';
import { HomeRoute } from '/imports/core/api/routes';

import { InputCol, Toastr } from '/imports/core/ui/atoms';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = () => {
    Users.login(email, password).then(() => {
      HomeRoute.go();
    }).catch(() => {
      Toastr.error('Wrong email or password');
    });
  };


  return (
    <>
      <Sidenav>
        <SidenavText>
          <h2>Quick KVS<br /> Sign in Page</h2>
          <p>Sign in from here to access.</p>
        </SidenavText>
      </Sidenav>
      <Main>
        <LoginForm>
          <InputCol
            type={'email'}
            id={'email'}
            name={'email'}
            value={email}
            onChange={(data) => setEmail(data.email)}
            label={'Email'}
            placeholder={'Email'}
          />
          <InputCol
            type={'password'}
            id={'password'}
            name={'password'}
            value={password}
            onChange={(data) => setPassword(data.password)}
            label={'Password'}
            placeholder={'Password'}
          />
          <FormGroup>
            <Button color={'primary'} onClick={onSubmit}> Sign in</Button>
          </FormGroup>
        </LoginForm>
      </Main>
    </>
  );
};

export default SignInPage;

export const Sidenav = styled.div`
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
  width: 40%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

export const SidenavText = styled.div`
  margin-top: 20%;
  padding: 60px;
  color: #fff;
`;

export const Main = styled.div`
  margin-left: 40%; 
  padding: 0 10px;
`;

export const LoginForm = styled.div`
  margin-top: 80%;
  width: 400px;
`;
