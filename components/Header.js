import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const linkStyle = {
  marginRight: 15,
};
const Wrapper = styled('div')`
  border: none;
  display: flex;
  padding: 10px;
`;

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="/fetchDataTest">
            <a style={linkStyle}>fetchDataTest</a>
          </Link>
        </Wrapper>
      </Fragment>
    );
  }
}

export default Header;
