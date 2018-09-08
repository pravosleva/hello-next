import React, { Fragment } from 'react';
import withAppLayout from '../components/AppLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Home extends React.Component {
  state = { shows: [] }
  static getInitialProps = async function(cb) {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);
    if (cb) {
      cb(data);
    }

    return {
      shows: data,
    }
  }

  componentDidMount() {
    Home.getInitialProps((shows) => this.setState({ shows }));
  }

  render() {
    const { shows }  = this.state;
    // console.log(this.props);

    return (
      <div>
        <h1>fetchDataTest {shows.lenght}</h1>
        {
          shows
          ? (
            <ul>
              {
                shows.map(({ show }) => (
                  <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                      <a>{show.name}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          ) : <p>No data yet...</p>
        }
      </div>
    )
  }
};
Home.propTypes = {
  shows: PropTypes.array,
};
Home.defaultProps = {
  shows: [],
};

export default withAppLayout(Home);
