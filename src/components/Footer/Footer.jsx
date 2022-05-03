import React from 'react';
import './footer.css';
import logo from '../../pages/Landing/img/logo.svg';
import fb from './img/fb.png';
import ig from './img/ig.png';
import mail from './img/mail.png';
import twitch from './img/twitch.png';
import twitter from './img/twitter.png';

function Footer() {
  return (
    <section id="section-footer">
      <div class="container pt-5">
        <div class="row me-lg-5 ms-lg-5 ps-lg-5 pb-lg-4 my-lg-3">
          <div class="col-lg-3 col-md-6 contact-footer">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div class="col-lg-3 col-md-6 link-footer">
            <a href="/">Our Services</a>
            <a href="/">Why Us</a>
            <a href="/">Testimonial</a>
            <a href="/">FAQ</a>
          </div>
          <div class="col-lg-3 col-md-6 sosmed-footer">
            <p>Connect with us</p>
            <div class="sosmed-img-footer">
              <a href="/">
                <img src={fb} alt="" />
              </a>
              <a href="/">
                <img src={ig} alt="" />
              </a>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
              <a href="/">
                <img src={mail} alt="" />
              </a>
              <a href="/">
                <img src={twitch} alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 ps-md-5 copyright-footer">
            <p>Copyright Binar 2022</p>
            <div class="logo-footer">
              <a href="/">
                <img src={logo} alt="" style={{ height: '50px', width: '100px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
