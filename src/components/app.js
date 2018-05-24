import React, { Component } from 'react';
import NavBar from './navBar';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}
