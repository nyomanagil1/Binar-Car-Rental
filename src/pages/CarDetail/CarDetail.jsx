import React, { useEffect } from 'react';
import './carDetail.css';
import calendarImage from '../CarsCustomer/img/carcalendar.png';
import peopleImage from '../CarsCustomer/img/carpeople.png';
import typeImage from '../CarsCustomer/img/cartype.png';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../Landing/img/logo.svg';
import Footer from '../../components/Footer/Footer';
import { Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getPostByIDCustomer } from '../../redux/action/postByIDAction';

function CarDetail() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate('/login', { replace: true });
  }

  const dispatch = useDispatch();
  let { id } = useParams();

  const { isLoading, data: post } = useSelector((state) => state.postByID);

  useEffect(() => {
    dispatch(getPostByIDCustomer(id));
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container pt-4">
          <div className="row d-flex">
            <div className="col-lg-8">
              <div className="card card-detail h-100">
                <div className="card-body">
                  <h5>Tentang Paket</h5>
                  <p>Include</p>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p>Exclude</p>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h5>Refund, Reschedule, Overtime</h5>
                  <ul>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li> Tidak termasuk akomodasi penginapan</li>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li> Tidak termasuk akomodasi penginapan </li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                    <li>Tidak termasuk akomodasi penginapan </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-detail-car h-100">
                <div className="card-body">
                  <div class="d-flex justify-content-center py-3 mb-3">
                    <Image className="customer-car-image" src={post.image} />
                  </div>
                  <h6 class="fw-bold">{post.name}</h6>
                  <div className="detailmobil d-flex pb-3">
                    <p>
                      <img className="me-1" src={peopleImage} alt="" style={{ width: '20px', height: '20px' }} /> 4 Orang
                    </p>
                    <p>
                      <img className="me-1 detail" src={typeImage} alt="" style={{ width: '20px', height: '20px' }} /> Manual
                    </p>
                    <p>
                      <img className="me-1 detail" src={calendarImage} alt="" style={{ width: '20px', height: '20px' }} /> Tahun 2020
                    </p>
                  </div>
                  <div className="detailtotal d-flex justify-content-between">
                    <p>Total</p>
                    <span>Rp. {new Intl.NumberFormat('id-ID').format(post.price)}</span>
                  </div>
                  <div>
                    <button onClick={() => navigate('/ticket')} type="submit" class="btncontinue mt-3" style={{ width: '100%' }}>
                      Lanjutkan Pembayaran
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CarDetail;
