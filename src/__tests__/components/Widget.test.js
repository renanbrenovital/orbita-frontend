import React from 'react';
import { render } from '@testing-library/react';

import Widget from '../../components/Widget';

describe('Widget component', () => {
  it('should be able to show title when loading is true', () => {
    const { getByTestId, getByText } = render(
      <Widget
        loading={true}
        data={{ info1: 'CA (CALIFORNIA)', info2: '99999' }}
        label={{
          title: 'Instalações',
          subtitle1: 'Estado',
          subtitle2: 'Total',
        }}
        backgroundColor1="hsl(301,98%,81%) 0%"
        backgroundColor2="hsl(37,99%,73%) 100%"
        gradientDirection="215deg"
      />
    );

    expect(getByTestId('widget')).toContainElement(getByText('Carregando...'));
  });

  it('should be able to show label and data when loading is false', () => {
    const { getByTestId, getByText, debug } = render(
      <Widget
        loading={false}
        data={{ info1: 'CA (CALIFORNIA)', info2: '99999' }}
        label={{
          title: 'Instalações',
          subtitle1: 'Estado',
          subtitle2: 'Total',
        }}
        backgroundColor1="hsl(301,98%,81%) 0%"
        backgroundColor2="hsl(37,99%,73%) 100%"
        gradientDirection="215deg"
      />
    );

    expect(getByTestId('widget')).toContainElement(
      getByText('CA (CALIFORNIA)') &&
        getByText('99999') &&
        getByText('Instalações') &&
        getByText('Estado') &&
        getByText('Total')
    );
  });
});
