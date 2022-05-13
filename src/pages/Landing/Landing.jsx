import React, { useEffect } from 'react';
import './landing.css';
import mobil from './img/mobil.png';
import logo from './img/logo.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { message } from 'antd';

function Landing() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate('login', { replace: true });
  }
  useEffect(() => {
    setTimeout(() => {
      message.success(`Welcome, ${localStorage.getItem('role')}`);
    }, 1000);
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light pb-5" style={{ backgroundColor: '#f1f3ff' }}>
        <div class="container">
          <a class="navbarBrand" href="/">
            <img src={logo} alt="logo" style={{ height: '50px', width: '100px' }} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a class="nav-link" href="/">
                  Our Services
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/">
                  Why Us
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/">
                  Testimonial
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/">
                  FAQ
                </a>
              </li>
              <li class="nav-item mx-2">
                <button type="submit" class="registerbtn" onClick={() => handleLogout()}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 my-auto pt-4">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <button type="submit" class="sewabtn">
                Mulai Sewa Mobil
              </button>
            </div>
            <div class="col-lg-6 position-relative" style={{ height: '400px' }}>
              <img src={mobil} alt="mobil" class="img-fluid img-hero" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
