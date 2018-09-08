import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Wrapper = styled('div')`
  padding-top: 20px;
  text-align: center;
  color: #666;
`;

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        Footer
      </Wrapper>
    )
  }
};

export default Footer;
