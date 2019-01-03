// import Layout from '../components/MyLayout';
import React, { Fragment } from 'react';

import withAppLayout from '../components/withAppLayout';


const About = () => (
  <Fragment>
    <h1>About</h1>
    <p>Next.js experience</p>
  </Fragment>
);

export default withAppLayout(About);
