import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <h1>Let Them Eat Cake</h1>
        </div>
        <div className="links">
          <Link className="link" to="/home">Home</Link>
          <Link className="link" to="/gallery">Gallery</Link>
          <Link className="link" to="/customization">Customization</Link>
          <Link className="link" to="/about-us">About Us</Link>
        </div>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default NavBar;
