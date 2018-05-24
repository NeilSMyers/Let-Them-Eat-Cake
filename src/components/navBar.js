import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <h1>Let Them Eat Cake</h1>
        </div>
        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/customization">Customization</Link>
          <Link to="/about-us">About Us</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default NavBar;
