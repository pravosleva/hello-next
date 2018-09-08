// import Layout from '../components/MyLayout';
import React from 'react';
import withAppLayout from '../components/AppLayout';


const About = () => (
  <div>
    <h1>About</h1>
    <p>Next.js experience</p>
  </div>
);

export default withAppLayout(About);
