import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';


const layoutStyle = {
  margin: 0,
  padding: 20,
  border: '1px solid #DDD',
  minHeight: '100vh',
  boxSizing: 'border-box',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
const ContentWrapper = styled('div')`
  min-height: 300px;
  width: 100%;
  max-width: 700px;
  box-shadow: 2px 2px 5px gray;
  border-radius: 4px;
  padding: 20px;
  margin: 0 auto 0 auto;
`;

const withAppLayout = (ComposedComponent) => {
  class AppLayout extends Component {
    render() {
      return (
        <Fragment>
          <style jsx global>{`
            body {
              margin: 0;
              color: #333;
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
          <section style={layoutStyle}>
            <Header />
            <ContentWrapper>
              <ComposedComponent {...this.props} />
            </ContentWrapper>
            <Footer />
          </section>
        </Fragment>
      );
    }
  }

  return AppLayout;
};

export default withAppLayout;
