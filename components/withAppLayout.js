import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import AbsoluteCopyright from './AbsoluteCopyright';


const layoutStyle = {
  minHeight: '100vh',
  boxSizing: 'border-box',
  overflowY: 'auto',
  position: 'relative',
};
const ContentWrapper = styled('div')`
  min-height: 300px;
  width: 100%;
  min-width: 100wh;
  box-shadow: 2px 2px 5px gray;
  padding: 10px;

  border: 1px dashed blue;
`;

const withAppLayout = (ComposedComponent) => {
  class AppLayout extends Component {
    render() {
      return (
        <section style={layoutStyle}>
          <Header />
          <ContentWrapper>
            <ComposedComponent {...this.props} />
          </ContentWrapper>
          <AbsoluteCopyright />
        </section>
      );
    }
  }

  return AppLayout;
};

export default withAppLayout;
