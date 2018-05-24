import React, { Component } from 'react';
import NavBar from './navBar';
import Footer from './footer';
import AboutUs from './aboutUs';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="pictures"> 
          <div className="pics">
              <img src="https://i.pinimg.com/736x/f9/42/7f/f9427fba692a540049867c5bae37314b.jpg"  height="75%"/>
          </div>

          <div className="pics">
              <img src="https://annicasdesignercakes.files.wordpress.com/2015/04/the-story.jpg?"  height="75%"/>
          </div>

          <div className="pics">
              <img src="https://static1.squarespace.com/static/5a985b857e3c3afba26f7a36/5a9878d824a6949f39e7dde1/5aac0b0c70a6adfaa1cd16f9/1521318506967/Stanley_Cup_Cake.jpg?"  height="75%"/>
          </div>

          <div className="pics">
              <img src="https://i0.wp.com/viscawedding.com/wp-content/uploads/2017/10/Horror-Halloween-Wedding-Cakes-Ideas-for-Your-Special-Moment-9.jpg?"  height="75%"/>
          </div>

          <div className="pics">
              <img src="https://i.pinimg.com/736x/05/51/b1/0551b1a7bdcec691463a9a7741be4748--sugar-skull-cakes-sugar-skulls.jpg"  height="75%"/>
          </div>  
        </div>
        <Footer/>
      </div>
    );
  }
}
