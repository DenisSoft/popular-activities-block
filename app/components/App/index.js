import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import Content from 'components/Content';

const Root = styled.div`
  font-family: 'Montserrat',Helvetica,Arial,Lucida,sans-serif;
`;

export default class App extends PureComponent {
  render() {
    return (
      <Root>
        <Header />
        <Content />
      </Root>
    );
  }
}
