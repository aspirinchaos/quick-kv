import React, { useState } from 'react';
import { Button, FormGroup } from 'reactstrap';

import { Users } from '/imports/user';
import { HomeRoute } from '/imports/core/api/routes';
import { useRouter } from '/imports/core';

import { InputCol, Toastr } from '/imports/core/ui/atoms';
import { Sidenav, SidenavText, LoginForm, Main } from './SignInPage';

const EnrollPage = () => {
  const token = useRouter('token');

  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');

  const onSubmit = () => {
    if (password.length < 6) {
      Toastr.error('6 character minimum password.');
      return;
    }
    if (password !== repeat) {
      Toastr.error('The password and confirmation password do not match.');
      return;
    }
    Users.reset(token, password).then(() => {
      HomeRoute.go();
    }).catch(() => {
      Toastr.error('Wrong token');
    });
  };

  return (
    <>
      <Sidenav>
        <SidenavText>
          <h2>Quick KVS<br /> Enroll Page</h2>
          <p>Set your password.</p>
        </SidenavText>
      </Sidenav>
      <Main>
        <LoginForm>
          <InputCol
            type={'password'}
            id={'password'}
            name={'password'}
            value={password}
            onChange={(data) => setPassword(data.password)}
            label={'Password'}
            placeholder={'Password'}
          />
          <InputCol
            type={'password'}
            id={'repeat'}
            name={'repeat'}
            value={repeat}
            onChange={(data) => setRepeat(data.repeat)}
            label={'Repeat Password'}
            placeholder={'Repeat Password'}
          />
          <FormGroup>
            <Button color={'success'} onClick={onSubmit}>Set my password</Button>
          </FormGroup>
        </LoginForm>
      </Main>
    </>
  );
};

export default EnrollPage;
