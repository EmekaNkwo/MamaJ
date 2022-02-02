import React from "react";
import "./Home.css";
import Salad from "./images/salad.jpg";
import Pancake from "./images/pancake.jpg";
import Frenchtoast from "./images/french-toast.jpg";
import Logo from "./images/logo.png";
import OurStory from "./images/our-story.jpg";
import View from "./images/view.jpg";
import { MdAccessTime } from "react-icons/md";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <section>
        <div className="home-container">
          <div className="header" id="home">
            <div class="nav-bar">
              <nav class="nav-nav">
                <ul class="nav-list" id="MenuItems">
                  <li className="nav-mobile">
                    <a href="#about">ABOUT US</a>
                  </li>
                  <li className="nav-mobile">
                    <a href="#menu">OUR MENU</a>
                  </li>
                  <li>
                    <a href="/">
                      <img className="nav-image" src={Logo} alt="Mamaj-logo" />
                    </a>
                  </li>

                  <li className="nav-mobile">
                    <a href="#location">LOCATION</a>
                  </li>
                  <li className="nav-mobile">
                    <a href="#contact">CONTACT </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="home">
            <h1>Good Food, Great Vibes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              aspernatur, neque sunt quos perspiciatis accusamus ducimus.
            </p>
            <div>
              <a
                href="mailto:emekankwo49@gmail.com?subject=Table Reservation from Website"
                className="home-button"
              >
                Book a Table
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-container">
          <div className="about-left">
            <img src={OurStory} alt="chef-img" className="about-img" />
          </div>
          <div className="about-right">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quae
              eaque nulla, voluptatibus ad aliquid repellendus rerum aperiam
              animi soluta libero harum, necessitatibus accusantium error
              laboriosam amet esse, repellat odit.Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Quo quae eaque nulla, voluptatibus
              ad aliquid repellendus rerum aperiam animi soluta libero harum,
              necessitatibus accusantium error laboriosam amet esse, repellat
              odit.
            </p>
            <div className="about-socials">
              <div className="social-links">
                <a href="/">
                  <SiFacebook />
                </a>
              </div>
              <div className="social-links">
                <a href="/">
                  <SiInstagram />
                </a>
              </div>
              <div className="social-links">
                <a href="/">
                  <SiTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="menu-container">
          <h1 className="menu-title">Today's Special</h1>
          <p className="menu-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            laudantium sapiente neque
          </p>

          <div className="menu-list">
            <div className="menu-item">
              <img src={Pancake} alt="pancake-img" />
              <div className="item-desc">
                <p className="food-title">Pancake</p>
                <div className="menu-item-time">
                  <MdAccessTime className="menu-icon" />
                  <p>20mins</p>
                </div>
                <a href="/" className="menu-link">
                  Order Now
                </a>
                <div className="menu-line"></div>
              </div>
            </div>
            <div className="menu-item">
              <img src={Frenchtoast} alt="french-toast-img" />
              <div className="item-desc">
                <p className="food-title">French Toast </p>
                <div className="menu-item-time">
                  <MdAccessTime className="menu-icon" />
                  <p>20mins</p>
                </div>
                <a href="/" className="menu-link">
                  Order Now
                </a>
                <div className="menu-line"></div>
              </div>
            </div>
            <div className="menu-item">
              <img src={Salad} alt="salad-img" />
              <div className="item-desc">
                <p className="food-title">Dietary Salad</p>
                <div className="menu-item-time">
                  <MdAccessTime className="menu-icon" />
                  <p>20mins</p>
                </div>
                <a href="/" className="menu-link">
                  Order Now
                </a>
                <div className="menu-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="view">
        <div className="view-contianer">
          <div className="view-left">
            <h1>Uncover the True Meaning of Taste</h1>

            <h2>Opening Hours</h2>
            <h3>Weekdays</h3>
            <p>8am - 8pm</p>
            <h3>Sundays</h3>
            <div className="view-bottom">
              <p>8am - 5pm</p>
              <p>location: 36 Lorem Ipsum close, off Ipsum Avenue </p>
              <p>Phone: +234 812 568 989</p>
            </div>
            <a
              href="mailto:emekankwo49@gmail.com?subject=Table Reservation from Website"
              className="view-link"
            >
              Book a Table
            </a>
          </div>
          <div className="view-right">
            <img src={View} alt="view-img" />
          </div>
        </div>
      </section>

      <section id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-form">
            <h1>Get in touch</h1>
            <div className="footer-line"></div>
            <p>For all enquiries regarding feedbacks and general questions.</p>

            <a href="mailto:emekankwo49@gmail.com?subject=Mail from the Website">
              Send Email
            </a>
          </div>
        </div>
      </section>

      <div className="my-rights">
        <p>&copy; 2022 Mama J Kitchen</p>
      </div>
    </div>
  );
}
