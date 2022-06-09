import React, { useEffect } from 'react';
import './carsCustomer.css';
import logo from '../Landing/img/logo.svg';
import peopleImage from './img/carpeople.png';
import calendarImage from './img/carcalendar.png';
import typeImage from './img/cartype.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Image, Spin } from 'antd';
import Search from '../../components/Search/Search';
import { LoadingOutlined } from '@ant-design/icons';
import { getPostCustomer } from '../../redux/action/postAction';
import { useDispatch, useSelector } from 'react-redux';

function CarsCustomer() {
  function handleLogout() {
    localStorage.clear();
    navigate('/login', { replace: true });
  }
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, data: post } = useSelector((state) => state.post);

  const handleDetail = (event) => {
    const id = event.target.value;
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    dispatch(getPostCustomer());
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
      <Search />
      {isLoading && (
        <div class="d-flex justify-content-center mt-5">
          <Spin indicator={antIcon} />
        </div>
      )}
      <div className="container pt-3">
        <div className="row">
          {post?.map((item) => {
            return (
              <div class="col-lg-4 my-2">
                <div class="card card-mobil h-100 p-1" key={item.id}>
                  <div class="card-body p-4 h-100">
                    <div className="d-flex justify-content-center">
                      <Image className="customer-car-image" src={item.image} width={500} />
                    </div>
                    <p class="car-name">{item.name}</p>
                    <p class="car-price ">Rp. {new Intl.NumberFormat('id-ID').format(item.price)} / hari</p>
                    <p class="car-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p class="car-passenger">
                      <img style={{ width: '20px', height: '20px' }} src={peopleImage} alt="" />4 Orang
                    </p>
                    <p class="car-type">
                      <img style={{ width: '20px', height: '20px' }} src={typeImage} alt="" />
                      Manual
                    </p>
                    <p class="car-year">
                      <img style={{ width: '20px', height: '20px' }} src={calendarImage} alt="" />
                      Tahun 2020
                    </p>
                  </div>
                  <div className="card-mobil-footer">
                    <button onClick={handleDetail} value={item.id} class="choose-btn">
                      Pilih Mobil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarsCustomer;
