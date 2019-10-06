import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';
import { logout, isAuthenticated } from '../services/auth';

export default function components() {
  return (
    <Navigation>
      <img src={logo} alt="Logo" width="180" />
      {isAuthenticated() && (
        <>
          <ul>
            <li className="active">Meu consumo</li>
            <li>Minha área</li>
            <li>Perfil</li>
            <li>Dados pessoais</li>

            <li
              onClick={() => {
                logout();
                window.location.href = '/';
              }}
            >
              Sair
            </li>
          </ul>
          <MenuHamburger>
            <span className="hamburguer"></span>
          </MenuHamburger>
        </>
      )}
    </Navigation>
  );
}

const MenuHamburger = styled.span`
  @media (min-width: 1000px) {
    display: none;
  }

  background: #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;

  .hamburguer {
    position: relative;
    display: block;
    background: #fff;
    width: 30px;
    height: 2px;
    top: 20px;
    left: 5px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: #fff;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -7px;
  }

  .hamburguer:after {
    bottom: -7px;
  }
`;

const Navigation = styled.div`
  width: 100%;
  padding: 0 5%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  ul {
    @media (max-width: 1000px) {
      display: none;
    }
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  ul li {
    color: #5c5c76;
    opacity: 0.5;
    margin-left: 60px;
    font-weight: bold;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

  li.active {
    opacity: 0.9;
  }
`;
