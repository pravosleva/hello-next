import React from 'react';
import Link from 'next/link'


const linkStyle = {
  marginRight: 15
};

class Header extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: '10px' }}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/fetchDataTest">
          <a style={linkStyle}>fetchDataTest</a>
        </Link>
      </div>
    );
  }
}

export default Header;
