import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <h1>Let Them Eat Cake</h1>
        </div>
        <div className="links">
          <a className="link">Home</a>
          <a className="link">Gallery</a>
          <a className="link">Customization</a>
          <a className="link">About Us</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
