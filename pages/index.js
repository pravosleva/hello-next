import React, { Fragment } from 'react';
import Link from 'next/link';

import withAppLayout from '../components/withAppLayout';


const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li><Link href={`/queryParamsTest?testParam=theX&title=Hello%20queryParamsTest`}><a>Simple queryParamsTest</a></Link></li>
    </ul>
  </div>
);

export default withAppLayout(Home);
