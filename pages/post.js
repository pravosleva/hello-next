import React, { Fragment } from 'react';
import {withRouter} from 'next/router';
import withAppLayout from '../components/AppLayout';


class Page extends React.Component {
  state = { show: null }

  componentDidMount() {
    const id = this.props.router.query.id;
    // const id = this.props.url
    // console.log(this.props.url.pathname);
    Page.getInitialProps(id, (show) => this.setState({ show }));
  }

  render() {
    const { show } = this.state;
    console.log(this.state);

    return (
      <div>
        {
          show ?
          <div>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
          </div>
          : <code>show is {typeof show}</code>
        }
      </div>
    )
  }
};

Page.getInitialProps = async function (id, cb) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  if (cb) {
    cb(show);
  }

  return show;
}

export default withRouter(withAppLayout(Page));
