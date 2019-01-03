import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Wrapper = styled('div')`
  text-align: center;
  color: #666;

  display: block;
  position: absolute;
  right: 0; bottom: 0;

  opacity:: 0.5;
`;

class AbsoluteCopyright extends React.Component {
  render() {
    return (
      <Wrapper>
        AbsoluteCopyright
      </Wrapper>
    )
  }
};

export default AbsoluteCopyright;
