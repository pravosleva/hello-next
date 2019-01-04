import React, { Fragment } from 'react';
import {withRouter} from 'next/router';
import ReactHtmlParser from 'react-html-parser';

import withAppLayout from '../components/withAppLayout';


class Page extends React.Component {
  state = { show: null }

  static getInitialProps = async function (id, cb) {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    if (cb) {
      cb(show);
    }

    return show;
  }

  componentDidMount() {
    // const id = this.props.router.query.id;
    // const params = new URLSearchParams(this.props.router.asPath.slice(1));
    const id = this.props.router.asPath.slice(1).split('/')[1]; // 2nd element

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
            {/* <p>{show.summary.replace(/<[/]?p>/g, '')}</p> */}
            {ReactHtmlParser(show.summary)}
            <img src={show.image.medium} />
          </div>
          : <em>show is {String(show)}</em>
        }
      </div>
    )
  }
};

export default withRouter(withAppLayout(Page));
