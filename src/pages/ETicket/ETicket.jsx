import React from 'react';
import './ETicket.css';
import logo from '../Landing/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { ArrowLeftOutlined, CheckCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { Breadcrumb, Button } from 'antd';
import check from './img/check.svg';
import lastcheck from './img/lastcheck.svg';
import success from './img/success.svg';
import Invoice from '../../components/Invoice/Invoice';

function ETicket() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate('login', { replace: true });
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light pb-4" style={{ backgroundColor: '#f1f3ff' }}>
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
                <a class="nav-link" href="#ourservices">
                  Our Services
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#section-cta">
                  Why Us
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#car-chart">
                  Chart
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="#section-faq">
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
      <section id="ticket">
        <div className="container">
          <div className="row">
            <div className="d-flex">
              <h5>
                <ArrowLeftOutlined onClick={() => window.history.go(-1)} style={{ marginRight: 20 }} />
              </h5>
              <div className="order-id pt-1">
                <h5>Tiket</h5>
                <p>Order ID: xxxxxxx</p>
              </div>
              <div className="ms-auto pt-3 pe-2 order-breadcrumb">
                <Breadcrumb separator="-----">
                  <Breadcrumb.Item href="">
                    <span>
                      <img style={{ height: '14px', width: '14px' }} src={check} alt="" /> Pilih Metode
                    </span>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="">
                    <span>
                      <img style={{ height: '14px', width: '14px' }} src={check} alt="" /> Bayar
                    </span>
                  </Breadcrumb.Item>
                  <span>
                    <img style={{ height: '14px', width: '14px' }} src={lastcheck} alt="" /> Tiket
                  </span>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="invoice">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center pt-5">
              <div className="pb-3">
                <img style={{ width: '48px', height: '48px' }} src={success} alt="" />
              </div>
              <div>
                <h1>Pembayaran Berhasil!</h1>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                <div className="pt-4">
                  <div class="card card-invoice h-100 p-1 mx-auto">
                    <div class="card-body p-4">
                      <div className="card-content d-flex">
                        <div className="card-invoice-title ps-5">
                          <h1>Invoice</h1>
                          <p>XXXXXXXXX</p>
                        </div>
                        <div className="card-invoice-btn ms-auto pt-2 pe-5">
                          <Button style={{ display: 'flex', alignItems: 'center', width: '97px', height: '36px', borderColor: '#0D28A6', color: '#0D28A6', fontWeight: 'bold' }}>
                            <DownloadOutlined />
                            Unduh
                          </Button>
                        </div>
                      </div>
                      <div className="card-invoice d-flex flex-column justify-content-center align-items-center">
                        <Invoice />
                      </div>
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

export default ETicket;
