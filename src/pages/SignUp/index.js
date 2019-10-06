import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { toast } from 'react-toastify';

import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import WrapperContainer from '../../components/WrapperContainer';

import Form from '../../components/Form';
import Box from '../../components/Box';
import SubmitButton from '../../components/SubmitButton';

import states from '../../utils/states';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async e => {
    e.preventDefault();
    if (!name || !email || !state || !password) {
      toast.warn('Todos os campos são obrigados para criar uma conta');
    } else {
      try {
        await api.post('/users', {
          name,
          email,
          state,
          password,
        });
        toast.success('Cadastro realizado com sucesso!');
        setTimeout(() => (window.location.href = '/'), 4000);
      } catch (e) {
        if (e.response) toast.warn(`${e.response.data.error}`);
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
                <FaUser /> Sing Up
              </span>
              <small>
                Have an account?
                <br />
                <Link to="/">Login</Link>
              </small>
            </h1>
            <Form onSubmit={e => handleSignUp(e)}>
              <input
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
              <select onChange={e => setState(e.target.value)}>
                <option value="">State</option>
                {states.map(state => (
                  <option key={state.key} value={state.key}>
                    {state.key} ({state.value})
                  </option>
                ))}
              </select>
              <SubmitButton>Create account</SubmitButton>
            </Form>
          </Box>
        </WrapperContainer>
      </Wrapper>
    </>
  );
};

export default SignUp;
