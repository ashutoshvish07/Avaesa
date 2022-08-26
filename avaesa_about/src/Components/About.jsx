import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="container ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white nav_style  fixed-top">
          <a className="navbar-brand" href="#">
            <img
              className="logo1"
              src="https://www.avaesa.com/img/logo.jpg"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <div className="mx-auto"></div>
            <ul className=" navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    About Avaesa
                  </a>
                  <a className="dropdown-item" href="#">
                    Press
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Info
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Crystal World
                  </a>
                  <a className="dropdown-item" href="#">
                    cleansing and Chargin Crystal
                  </a>
                  <a className="dropdown-item" href="#">
                    Programming Crystals
                  </a>
                  <a className="dropdown-item" href="#">
                    Chakras
                  </a>
                  <a className="dropdown-item" href="#">
                    Sound Healing
                  </a>
                  <a className="dropdown-item" href="#">
                    Colour Therapy
                  </a>
                  <a className="dropdown-item" href="#">
                    Aroma therapy
                  </a>
                  <a className="dropdown-item" href="#">
                    FAQ
                  </a>
                  <a className="dropdown-item" href="#">
                    Videos
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Crystals
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container- ">
        <img src="https://www.avaesa.com/img/header.jpg" width="100%" alt="" />
      </div>

      <section className=" about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">About Us</h2>
              <hr className="hr_tag" />
              <p className="para_sec" style={{}}>
                Avaesa is for everyone, right from the curious seeker, the
                healer, an art lover, a beauty admirer and just about anyone. We
                believe if we strip off labels, statuses, position – we are all
                essentially one and looking for the same things. We wish to be
                an empowering, nurturing space where you pause, reflect,
                question, learn, heal and awaken your transformative powers.
                Meditation, Crystals, Gem jewellery, Workshops are all some of
                the tools to begin with. We aim to build a community and help
                each other grow by learning, sharing ideas & stories and inspire
                each other continually. We wish to rediscover together our
                life’s deeper meaning and we believe Avaesa can be an instrument
                to realise your highest quality of life, which you owe it to
                yourself. In the private kingdom of our hearts, we all are eager
                to enjoy this sweet little ride called – ‘life’, learn, grow,
                fail and rise again all while having fun! So let’s get started!
                We'd be privileged to make this journey with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="constainer-  logo_2">
          <div className="caontainer- ">
            <img src="https://www.avaesa.com/img/avaesa22.png" alt="" />
          </div>
        </div>
      </section>

      {/* hexa-section Start*/}

      <section className="info">
        <div className="container ">
          <div className="col">
            <div className="col-md-auto">
              <h2 className=" info ">Info</h2>
              <hr className="hr_tag" />

              <ul id="hexGrid">
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/crystals.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/chakras.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/sacred-geometry.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/sound-healing.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/colour-therapy.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/aroma-therapy.jpg"
                      alt=""
                    />
                  </a>
                </li>
                <li class="hex">
                  <a class="hexIn" href="">
                    <img
                      src="https://www.avaesa.com/img/hexagons/faq.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* hexa section ends */}
    </div>
  );
};

export default About;
