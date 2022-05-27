import React, { useEffect, useState } from 'react';
import clockImage from './img/fi_clock.png';
import keyImage from './img/fi_key.png';
import './cars.css';
import { Breadcrumb, Button, Card, Image, Spin } from 'antd';
import { DeleteOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getPost } from '../../redux/action/postAction';
import { useDispatch, useSelector } from 'react-redux';
import dateFormat from 'dateformat';

function Cars() {
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
  const dispatch = useDispatch();
  const { isLoading, data: post } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const { Title, Text } = Typography;
  const [size, setSize] = useState('large');

  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <>
      {isLoading && (
        <div class="d-flex justify-content-center mt-5">
          <Spin indicator={antIcon} />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 breadcrumb">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Cars</Breadcrumb.Item>
              <Breadcrumb.Item href="/cars">List Car</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="col-lg-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
            <h1>List Car</h1>
            <Button onClick={() => navigate('/add-car')} type="primary" icon={<PlusOutlined />} style={{ display: 'flex', alignItems: 'center' }}>
              Add New Car
            </Button>
          </div>
          <div className="col-lg-12 btn-car-size" style={{ padding: 0 }}>
            <Button size={size}>All</Button>
            <Button size={size} disabled>
              Small
            </Button>
            <Button size={size} disabled>
              Medium
            </Button>
            <Button size={size} disabled>
              Large
            </Button>
          </div>
          <div className="row">
            {post?.map((item) => {
              return (
                <div class="col-lg-4 list-car">
                  <Card
                    className="car-card-content"
                    key={item.id}
                    hoverable
                    style={{
                      width: '400px',
                      height: '550px',
                    }}
                    cover={<Image src={item?.Car?.image} width={'100%'} height={250} />}
                  >
                    <Title level={4} style={{ margin: 0 }}>
                      {item?.Car?.name}
                    </Title>
                    <Title level={3} style={{ marginTop: 10, marginBottom: 15 }}>
                      Rp. {new Intl.NumberFormat('id-ID').format(item?.Car?.price)}
                    </Title>
                    <div className="col-lg-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} lg={{ span: 24 }}>
                      <Text strong style={{ marginBottom: '10px' }}>
                        <img src={keyImage} alt="" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
                        {dateFormat(item?.Car?.start_rent_at, 'dddd, mmmm dS, yyyy')} - {dateFormat(item?.Car?.finish_rent_at, 'dddd, mmmm dS, yyyy')}
                      </Text>
                      <Text strong>
                        <img src={clockImage} alt="" style={{ width: '16px', height: '16px', marginRight: '5px' }} /> {dateFormat(item.updatedAt, 'dddd, mmmm dS, yyyy')}
                      </Text>
                      <div class="btn-group" aria-label="Basic example">
                        <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '18px' }} lg={{ span: 24 }}>
                          <Button className="btn-delete" danger size={size} icon={<DeleteOutlined />} style={{ display: 'flex', alignItems: 'center' }}>
                            Delete
                          </Button>
                          <Button className="btn-edit" size={size} icon={<EditOutlined />} style={{ display: 'flex', alignItems: 'center' }}>
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;
