import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import withAppLayout from '../components/AppLayout';


const Page = withAppLayout((props) => (
  <Fragment>
    <h1>{props.router.query.title || 'No testParam'}</h1>
    <p>With <code>testParam = {props.router.query.testParam || 'nothing'}</code></p>
  </Fragment>
));

export default withRouter(Page);
