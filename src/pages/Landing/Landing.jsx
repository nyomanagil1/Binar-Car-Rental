import React from 'react';
import './landing.css';
import mobil from './img/mobil.png';
import logo from './img/logo.svg';
import checklist from './img/checklist.png';
import service from './img/service.png';
import service1 from './img/service1.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function Landing() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate('login', { replace: true });
  }

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
      <section id="ourservices">
        <div class="container svc-container mb-5">
          <div class="row">
            <div class="col-lg-6 mt-5">
              <img class="svc-img ms-5 ps-5" src={service} alt="service" />
              <img class="svc-img-2" src={service1} alt="service mobile" />
            </div>
            <div class="col-lg-6 mt-5">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul class="ps-0">
                <li>
                  <img src={checklist} alt="check" className="checklist-img" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li>
                  <img src={checklist} alt="check" className="checklist-img" /> Sewa Mobil Lepas Kunci di Bali 24 Jam
                </li>
                <li>
                  <img src={checklist} alt="check" className="checklist-img" /> Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li>
                  <img src={checklist} alt="check" className="checklist-img" /> Gratis Antar - Jemput Mobil di Bandara
                </li>
                <li>
                  <img src={checklist} alt="check" className="checklist-img" /> Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="section-cta">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 pt-5 pb-5 text-center">
              <div class="cta-card p-5 my-auto mx-auto">
                <h1 class="mb-3 mt-3 cta-h1">Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p class="mx-auto mb-5 section-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="submit" class="sewabtn section-btn">
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-faq">
        <div class="container mt-5 pb-5">
          <div class="row">
            <div class="col-lg-6">
              <h1>Frequently Asked Question</h1>
              <p class="faq-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="col-lg-6">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header mb-0" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores officia quaerat delectus exercitationem fugit, eos vitae consequuntur harum ut illo nam libero iusto quis ipsum, facilis velit perferendis
                      repudiandae!
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header mb-0" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores officia quaerat delectus exercitationem fugit, eos vitae consequuntur harum ut illo nam libero iusto quis ipsum, facilis velit perferendis
                      repudiandae!
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header mb-0" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores officia quaerat delectus exercitationem fugit, eos vitae consequuntur harum ut illo nam libero iusto quis ipsum, facilis velit perferendis
                      repudiandae!
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header mb-0" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      Apakah Ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maiores sed perferendis quaerat, unde iste dolor earum deserunt dolore perspiciatis mollitia. Consectetur, autem! Consectetur dolorum eaque nihil rerum
                      a reprehenderit?
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-3">
                  <h2 class="accordion-header mb-0" id="flush-headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      Bagaimana jika terjadi kecelakaan
                    </button>
                  </h2>
                  <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nobis tempore similique quod harum, beatae libero animi blanditiis repudiandae cupiditate quasi consectetur nemo aut, sapiente velit id corporis error
                      laboriosam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
