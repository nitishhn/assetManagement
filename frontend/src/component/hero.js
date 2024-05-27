/* import Carousel from "react-bootstrap/Carousel";

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <style>
        {`
          .hero-block {
            padding: 20px;
          }
          .carousel-container {
            max-width: 80%;
     
            margin: 0 auto; 
          
        `}
      </style>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.device42.com/blog/wp-content/uploads/2013/12/asset_management.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cityscape-intelligence.com/sites/cityscape-intelligence.com/files/Asset.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://2wtech.com/wp-content/uploads/2019/02/ITASSETMGMT.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}


*/
import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <style>
        {`
          .hero-block {
            padding: 20px;
          }
          .carousel-container {
            max-width: 85%;
            margin: 0 auto;
          }
        `}
      </style>
      <div className="carousel-container">
        <Carousel interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.device42.com/blog/wp-content/uploads/2013/12/asset_management.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cityscape-intelligence.com/sites/cityscape-intelligence.com/files/Asset.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://2wtech.com/wp-content/uploads/2019/02/ITASSETMGMT.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
