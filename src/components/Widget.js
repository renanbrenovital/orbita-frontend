import React from 'react';
import styled from 'styled-components';

export default function components({
  loading,
  data,
  label,
  backgroundColor1,
  backgroundColor2,
  gradientDirection,
}) {
  return (
    <Widget
      data-testid="widget"
      bg1={backgroundColor1}
      bg2={backgroundColor2}
      deg={gradientDirection}
    >
      {loading ? (
        <Title>Carregando...</Title>
      ) : (
        <>
          <Title>{label.title}</Title>
          <Info>
            <small>{label.subtitle1}</small>
            <p>{data.info1}</p>
          </Info>
          <Info>
            <small>{label.subtitle2}</small>
            <p>{data.info2}</p>
          </Info>
        </>
      )}
    </Widget>
  );
}

const Widget = styled.div`
  color: #fff;
  width: 90%;
  max-width: 380px;
  height: 230px;
  margin: 3% auto;
  background-image: linear-gradient(
    ${props => props.deg},
    ${props => props.bg1},
    ${props => props.bg2}
  );
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  -webkit-animation: scaleUp 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scaleUp 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes scaleUp {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scaleUp {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  small {
    font-size: 22px;
    font-weight: bold;
  }

  p {
    text-transform: uppercase;
    font-size: 20px;

    span + span {
      margin-left: 10px;
    }
  }
`;
