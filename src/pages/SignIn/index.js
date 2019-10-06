import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { login, isAuthenticated } from '../../services/auth';

import { FaSignInAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import WrapperContainer from '../../components/WrapperContainer';

import Form from '../../components/Form';
import Box from '../../components/Box';
import SubmitButton from '../../components/SubmitButton';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated()) window.location.href = '/';
  }, []);

  const handleSignIn = async event => {
    event.preventDefault();

    if (!email || !password) {
      toast.warn('Email e senha são obrigatórios');
    } else {
      try {
        const response = await api.post('/sessions', { email, password });
        setTimeout(() => (window.location.href = '/'), 3000);
        toast.success('Login realizado com sucesso!');
        login(response.data.token);
      } catch (e) {
        if (e.response) toast.error(`${e.response.data.error}`);
        else {
          toast.error('Erro interno, tente mais tarde.');
        }
      }
    }
  };
  return (
    <>
      <Navigation />
      <Wrapper>
        <WrapperContainer>
          <Box>
            <h1>
              <span>
                <FaSignInAlt /> Sign In
              </span>
              <small>
                Don't have an account?
                <br />
                <Link to="/signup">Create one</Link>
              </small>
            </h1>
            <Form onSubmit={handleSignIn}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <SubmitButton>Login account</SubmitButton>
            </Form>
          </Box>
        </WrapperContainer>
      </Wrapper>
    </>
  );
};

export default SignIn;
