import React, { useState } from 'react';
import carImage from './img/fi_car.png';
import clockImage from './img/fi_clock.png';
import keyImage from './img/fi_key.png';
import trashImage from './img/fi_trash-2.png';
import modalImage from './img/img-BeepBeep.png';
import plusImage from './img/fi_plus.png';
import './cars.css';
import { Breadcrumb, Button, Card } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

function Cars() {
  const { Title, Text } = Typography;
  const [size, setSize] = useState('large');
  return (
    <>
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
            <Button type="primary" icon={<PlusOutlined />} style={{ display: 'flex', alignItems: 'center' }}>
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
          <div class="row col-12 list-car">
            <Card
              className="car-card-content"
              hoverable
              style={{
                width: '400px',
                height: '500px',
              }}
              cover={<img style={{ marginTop: '10px', width: '100%', height: '100%' }} alt="car" src={carImage} />}
            >
              <Title level={4} style={{ margin: 0 }}>
                Nama/Tipe Mobil
              </Title>
              <Title level={3} style={{ marginTop: 10, marginBottom: 15 }}>
                Rp 430.000 / hari
              </Title>
              <div className="col-lg-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} lg={{ span: 24 }}>
                <Text strong style={{ marginBottom: '10px' }}>
                  <img src={keyImage} alt="" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
                  Start rent - Finish rent
                </Text>
                <Text strong>
                  <img src={clockImage} alt="" style={{ width: '16px', height: '16px', marginRight: '5px' }} /> Updated at 4 Apr 2022, 09.00
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
            <Card
              className="car-card-content"
              hoverable
              style={{
                width: '400px',
                height: '500px',
              }}
              cover={<img style={{ marginTop: '10px', width: '100%', height: '100%' }} alt="car" src={carImage} />}
            >
              <Title level={4} style={{ margin: 0 }}>
                Nama/Tipe Mobil
              </Title>
              <Title level={3} style={{ marginTop: 10, marginBottom: 15 }}>
                Rp 430.000 / hari
              </Title>
              <div className="col-lg-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} lg={{ span: 24 }}>
                <Text strong style={{ marginBottom: '10px' }}>
                  <img src={keyImage} alt="" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
                  Start rent - Finish rent
                </Text>
                <Text strong>
                  <img src={clockImage} alt="" style={{ width: '16px', height: '16px', marginRight: '5px' }} /> Updated at 4 Apr 2022, 09.00
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
            <Card
              className="car-card-content"
              hoverable
              style={{
                width: '400px',
                height: '500px',
              }}
              cover={<img style={{ marginTop: '10px', width: '100%', height: '100%' }} alt="car" src={carImage} />}
            >
              <Title level={4} style={{ margin: 0 }}>
                Nama/Tipe Mobil
              </Title>
              <Title level={3} style={{ marginTop: 10, marginBottom: 15 }}>
                Rp 430.000 / hari
              </Title>
              <div className="col-lg-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} lg={{ span: 24 }}>
                <Text strong style={{ marginBottom: '10px' }}>
                  <img src={keyImage} alt="" style={{ width: '16px', height: '16px', marginRight: '10px' }} />
                  Start rent - Finish rent
                </Text>
                <Text strong>
                  <img src={clockImage} alt="" style={{ width: '16px', height: '16px', marginRight: '5px' }} /> Updated at 4 Apr 2022, 09.00
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
        </div>
      </div>
    </>
  );
}

export default Cars;
