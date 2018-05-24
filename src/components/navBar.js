import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <h1>Let Them Eat Cake</h1>
        </div>
        <div className="links">
          <a>Home</a>
          <a>Gallery</a>
          <a>Customization</a>
          <a>About Us</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
