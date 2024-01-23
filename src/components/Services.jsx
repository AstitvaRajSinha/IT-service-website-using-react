import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/services1.jpg";
import img2 from "../assets/services2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/services.scss";
import { AiFillHtml5, AiFillCar, AiFillDatabase } from "react-icons/ai";
const Services = () => {
  return (
    <div className="serv">
      <div className="services">
        <h1>
          <b>Our Services </b>{" "}
        </h1>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={3000}
          showThumbs={false}
          showIndicators={false}
        >
          <div className="containr">
            <img className="image" src={img1} alt="" />
          </div>
          <div className="containr">
            <img src={img2} alt="" />
          </div>
        </Carousel>

        <div className="services2">
          <article>
            <div>
              <div>
                <AiFillHtml5 />
              </div>

              <h1>Mobile Development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae nihil sequi nesciunt accusamus impedit voluptas
                explicabo eius eveniet provident. Quasi!
              </p>
              <h2>More</h2>
            </div>
          </article>
          <article>
            <div>
              <div>
                <AiFillCar />
              </div>

              <h1>Mobile Development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae nihil sequi nesciunt accusamus impedit voluptas
                explicabo eius eveniet provident. Quasi!
              </p>
              <h2>More</h2>
            </div>
          </article>
          <article>
            <div>
              <div>
                <AiFillDatabase />
              </div>

              <h1>Mobile Development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae nihil sequi nesciunt accusamus impedit voluptas
                explicabo eius eveniet provident. Quasi!
              </p>
              <h2>More</h2>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Services;
