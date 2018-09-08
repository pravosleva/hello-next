import React, { Fragment } from 'react';
import withAppLayout from '../components/AppLayout';
import Link from 'next/link';


const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li><Link href={`/queryParamsTest?testParam=theX&title=Hello%20queryParamsTest`}><a>Simple queryParamsTest</a></Link></li>
    </ul>
  </div>
);

export default withAppLayout(Home);
