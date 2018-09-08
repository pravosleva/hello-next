import {withRouter} from 'next/router';
import withAppLayout from '../components/AppLayout';


const Page = withRouter((props) => (
  <div>
    <h1>{props.router.query.title || 'No testParam'}</h1>
    <p>With <code>testParam = {props.router.query.testParam || 'nothing'}</code></p>
  </div>
));

export default withAppLayout(Page);
