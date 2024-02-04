import React from "react";
import travel from "../images/t-tips.jpg";
import beach from "../images/beach.jpg";
import sunset from "../images/sunset.avif";
import mount from "../images/mount.jpg";
import waterfall from "../images/waterfall.webp";
import camp from "../images/camping.jpg";
import hawai from "../images/hawai.jpg";
import hill from "../images/hill.jpg";
import tour from "../images/tour.webp";

export const Blog = () => {
  return (
    <>
      <div className="blog">
        <h1>Welcome to VroomVista Blog</h1>
        <h2>Why VroomVista?</h2>
        <p>
          At VroomVista, we believe that the journey is just as important as the
          destination. Our blog is crafted with you in mind, offering insights,
          inspiration, and practical advice for every step of your travel
          experience.
        </p>

        <p>
          Ready to fuel your wanderlust and enhance your car rental journey?
          Let's hit the road together!
        </p>
      </div>

      <div className="blog-section">
        <div className="blog-section1">
          <img src={travel} alt="" />
        </div>

        <div className="blog-section2">
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "peru",
              }}
            >
              Pack Smart:
            </span>
            <br />
            Create a packing list to ensure you don't forget essentials. <br />
            Pack versatile clothing items that can be mixed and matched.
            <br /> Roll clothes to save space and minimize wrinkles.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Essentials in Carry-On:
            </span>
            <br />
            Keep important documents, medications, and a change of clothes in
            your carry-on.
            <br />
            Pack a travel-sized toiletry kit to freshen up during long flights
            or road trips.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Secure Your Home:
            </span>
            <br />
            Lock all doors and windows before leaving.
            <br />
            Set alarms and ask a trusted neighbor to collect mail/packages.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Safety First:
            </span>
            <br />
            Be aware of your surroundings, especially in unfamiliar areas.
            <br />
            Use reputable transportation services, and avoid poorly lit or
            deserted areas at night.
          </p>

          <p>
            <span style={{ fontWeight: "bold", color: "peru" }}>
              Emergency Contacts:
            </span>
            <br />
            Save local emergency numbers in your phone.
            <br />
            Keep a list of important contacts, including your embassy's
            information.
          </p>
        </div>
      </div>

      <div className="carCare">
        <div className="carCareTips">
          <h3>Car Care Tips</h3>
          <p>Regular Oil Changing</p>
          <p>Check tire Pressure</p>
          <p>Rotate and Balance tires</p>
          <p>Inspect brakes</p>
          <p>Exhaust System Inspection</p>
        </div>

        <div className="road">
          <h3>Road Safety Tips</h3>
          <p>Observe Traffic Signs</p>
          <p> Maintain a safe Following Speed</p>
          <p>Use Turn Signals</p>
          <p>Avoid Distractions</p>
          <p>Obey Speed Limits</p>
        </div>

        <div className="promotion">
          <h3>❗❗❗PROMOTION❗❗❗</h3>
          <p>Refer a friend, get 10% off your next rental🚗</p>
        </div>
      </div>

      <div className="road">
        <h2>THE ROAD AWAITS</h2>
        <p>
          At VroomVista.com, we believe in capturing the essence of travel—the
          excitement of the open road, the breathtaking landscapes, and the joy
          of exploration. Our curated collection of travel images is more than
          just a visual feast; it's an invitation to embark on unforgettable
          journeys.
        </p>
        <p>
          Each image tells a story of freedom, adventure, and the thrill of
          discovery. From cityscapes to scenic routes, our gallery showcases the
          diverse landscapes waiting to be explored. Whether you're dreaming of
          a coastal drive, a mountain retreat, or an urban escapade, let our
          images inspire your next travel adventure.
        </p>
      </div>

      <div className="images">
        <div className="card-image">
          <img src={camp} alt="" />
        </div>

        <div className="card-image">
          <img src={mount} alt="" />
        </div>

        <div className="card-image">
          <img src={sunset} alt="" />
        </div>

        <div className="card-image">
          <img src={waterfall} alt="" />
        </div>

        <div className="card-image">
          <img src={beach} alt="" />
        </div>

        <div className="card-image">
          <img src={hawai} alt="" />
        </div>

        <div className="card-image">
          <img src={hill} alt="" />
        </div>

        <div className="card-image">
          <img src={tour} alt="" />
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
