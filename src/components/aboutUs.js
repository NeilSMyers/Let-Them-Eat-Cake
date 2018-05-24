import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div>
              <div className="space">
              </div>
              <div className="about-us">
                  <h1>About Us</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  <h3>Testimonials</h3>
                  <div className="testimonials">
                    <p className="testimonial">Here at "Let Them Eat Cake" In its oldest forms, cakes were modifications of breads, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.<br/>-From Carol</p>
                    <p className="testimonial">Typical cake ingredients are flour, sugar, eggs, butter or oil or margarine, (like pastry cream), iced with buttercream or other icings, and decorated with marzipan, piped borders, or candied fruit.<br/>-From Jimmy</p>
                    <p className="testimonial">Cake is served as a celebratory dish on baking equipment and directions have been simplified so that even the most amateur cook may bake a cake. <br/>-From Pearl</p>
                  </div>
              </div>
            </div>
        );
    }
}

export default AboutUs;