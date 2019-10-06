import React from 'react';

import Navigation from '../../components/Navigation';
import Wrapper from '../../components/Wrapper';
import WrapperContainer from '../../components/WrapperContainer';

const NotFound = () => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <WrapperContainer>
          <h1>Página não encontrada</h1>
        </WrapperContainer>
      </Wrapper>
    </>
  );
};

export default NotFound;
