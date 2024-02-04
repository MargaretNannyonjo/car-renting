import React, { useState, useEffect } from "react";
import whiteCar from "../images/whiteCar.webp";
import redCar from "../images/redCar.jpg";
import blueCar from "../images/blueCar.jpg";

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [whiteCar, redCar, blueCar];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="home">
        <h1>VroomVista.com</h1>
      </div>

      <div className="about">
        <h2>ABOUT VroomVista</h2>

        <p>
          Welcome to VroomVista, where your journey becomes our priority. At
          VroomVista, we are more than just a car rental service - we are your
          trusted travel companion, dedicated to providing you with a seamless
          and memorable experience on the road.
        </p>
        <h3>Our Journey</h3>
        <p>
          Founded in 2001, VroomVista emerged from a shared passion for travel
          and a commitment to redefine the car rental industry. Over the years,
          we have grown into a reputable and customer-centric car rental
          service, connecting people to the joy of hassle-free travel.
        </p>
      </div>

      <div className="home-section">
        <div className="home-section1">
          <h2>Join Us on the Road</h2>
          <p>
            Discover the joy of hassle-free car rentals with VroomVista.com,
            <br /> Whether it's a business trip, family vacation, or weekend
            getaway, we're here to make your travel experience exceptional.
            <br />
            Welcome to a new era of car rentals — welcome to VroomVista.com
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Extensive Fleet:
            </span>
            <br />
            Explore our diverse range of vehicles, from sleek sedans to spacious
            SUVs. We take pride in offering options that suit every preference
            and occasion.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Transparent Pricing:
            </span>
            <br />
            At VroomVista, transparency is key. Our pricing is straightforward,
            with no hidden fees. What you see is what you get, allowing you to
            plan your budget with confidence.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Instant Confirmation:
            </span>
            <br />
            Say goodbye to uncertainty. Receive an instant confirmation email
            with all the details of your reservation, providing peace of mind
            and eliminating any guesswork.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              24/7 Customer Support:
            </span>
            <br />
            Need assistance? Our dedicated customer support team is available
            24/7 to address any inquiries or concerns you may have. We're here
            to ensure your journey is smooth from start to finish.
          </p>
        </div>

        <div className="home-section2">
          <img src={images[currentImage]} alt={`Car ${currentImage + 1}`} />
        </div>
      </div>

      <div className="footer">
        <div className="contact">
          <h3>Reach out to our team</h3>
          <div className="socials">
            <i className="fa-solid fa-envelope" id="media"></i>
            <i className="fa-brands fa-linkedin" id="media"></i>
            <i className="fa-brands fa-twitter" id="media"></i>
            <i className="fa-brands fa-facebook" id="media"></i>
            <p>Contact: +00-000-000</p>
            <p>Email: vroom@vista.com</p>
          </div>
        </div>

        <div className="faq">
          <p>Frequently Asked Questions</p>
          <p>Customer Support</p>
          <p>Quick Links</p>
        </div>

        <div className="letter">
          <p>Subscribe to Our NewsLetter</p>
          <input
            type="text"
            placeholder="Email address:"
            style={{ height: "30px", width: "12rem" }}
          />
          <button>Subscribe</button>

          <p style={{ paddingTop: "10px" }}>
            Thank you for choosing VroomVista
          </p>

          <p style={{ paddingTop: "10px", fontSize: ".8rem" }}>
            All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};
