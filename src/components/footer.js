import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="social">
        <span>Follow Us:</span>
        <a href><i class="fab fa-facebook"></i></a>
        <a href><i class="fab fa-twitter"></i></a>
        <a href><i class="fab fa-instagram"></i></a>
        <a href><i class="fab fa-youtube"></i></a>
      </div>
    );
  }
}

export default Footer;
