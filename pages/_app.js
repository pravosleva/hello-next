import App, { Container } from 'next/app';
import React from 'react';
// import io from 'socket.io-client';
// import swal from 'sweetalert2';

// import '../css/main.css';
// import '../css/sweetalert2.css';


class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  // state = {
  //   socket: null,
  //   sessionName: null,
  // }

  // changeSessionName = (sessionName) => this.setState({ sessionName })

  // connect to WS server and listen event
  // componentDidMount () {
  //   const socket = io();
  //   this.setState({ socket });
  // }

  // close socket connection
  // componentWillUnmount () {
  //   this.state.socket.close();
  // }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component
          {...pageProps}
          // socket={this.state.socket}
          // sessionName={this.state.sessionName}
          // changeSessionName={this.changeSessionName}
        />
      </Container>
    )
  }
}

export default MyApp
