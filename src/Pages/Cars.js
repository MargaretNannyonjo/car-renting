import React from "react";
import ferrari from "../images/Ferrari.webp";
import truck from "../images/big-truck.webp";
import audi from "../images/audi.jpeg";
import bmw from "../images/BMW.webp";
import porshe from "../images/porshe.jpg";
import suv from "../images/SUV.jpg";
import pickup from "../images/pickup.webp";
import mercedes from "../images/mercedes-Benz.webp";
import harrier from "../images/tata-harrier.jpeg";
import electric from "../images/electric.webp";
import mini from "../images/min-van.jpeg";
import offroad from "../images/off-road.webp";
import redcar from "../images/redCar.jpg";
import bluecar from "../images/blueCar.jpg";
import whitecar from "../images/whiteCar.webp";
import hybrid from "../images/hybrid.jpg";

export const Cars = () => {
  return (
    <>
      <div className="cars">
        <h1>Let's Get You on the Road</h1>
      </div>
      <div className="container">
        <div className="card">
          <img src={ferrari} alt="" />
          <p>Ferrari</p>
          <p>$700 per hour</p>
        </div>

        <div className="card">
          <img src={truck} alt="" />
          <p>Heavy Trucks</p>
          <p>$500 per hour</p>
        </div>

        <div className="card">
          <img src={audi} alt="" />
          <p>Audi</p>
          <p>$900 per hour</p>
        </div>

        <div className="card">
          <img src={bluecar} alt="" />
          <p>Mini vehicles</p>
          <p>$400 per hour</p>
        </div>

        <div className="card">
          <img src={bmw} alt="" />
          <p>BMW</p>
          <p>$400 per hour</p>
        </div>

        <div className="card">
          <img src={porshe} alt="" />
          <p>Porshe</p>
          <p>$500 per hour</p>
        </div>

        <div className="card">
          <img src={harrier} alt="" />
          <p>Tata Harriers</p>
          <p>$800 per hour</p>
        </div>

        <div className="card">
          <img src={suv} alt="" />
          <p>SUV</p>
          <p>$400 per hour</p>
        </div>

        <div className="card">
          <img src={whitecar} alt="" />
          <p>Cross Overs</p>
          <p>$500 per hour</p>
        </div>

        <div className="card">
          <img src={pickup} alt="" />
          <p>Pickup Trucks</p>
          <p>$800 per hour</p>
        </div>

        <div className="card">
          <img src={mercedes} alt="" />
          <p>Mercedes Benz</p>
          <p>$700 per hour</p>
        </div>

        <div className="card">
          <img src={electric} alt="" />
          <p>Electric Cars</p>
          <p>$900 per hour</p>
        </div>

        <div className="card">
          <img src={redcar} alt="" />
          <p> SUVs</p>
          <p>$700 per hour</p>
        </div>

        <div className="card">
          <img src={mini} alt="" />
          <p>Mini Vans</p>
          <p>$700 per hour</p>
        </div>

        <div className="card">
          <img src={offroad} alt="" />
          <p>Off raod Vehicles</p>
          <p>$700 per hour</p>
        </div>

        <div className="card">
          <img src={hybrid} alt="" />
          <p>Hybrid Vehicles</p>
          <p>$400 per hour</p>
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
