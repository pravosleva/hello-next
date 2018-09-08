import React, { Component } from 'react';
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

const withAppLayout = (ComposedComponent) => {
  class AppLayout extends Component {
    render() {
      return (
        <div>
          <style jsx global>{`
            body {
              margin: 0;
            }
          `}</style>
          <section style={layoutStyle}>
            <Header />
            <div style={{ minHeight: '300px', boxShadow: '2px 2px 5px gray', padding: '10px' }}>
              <ComposedComponent {...this.props} />
            </div>
            <Footer />
          </section>
        </div>
      );
    }
  }

  return AppLayout;
};

export default withAppLayout;
