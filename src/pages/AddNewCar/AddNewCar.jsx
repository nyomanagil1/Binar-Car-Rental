import { Breadcrumb, Button, Upload } from 'antd';
import './addNewCar.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPost } from '../../redux/action/postAction';
import { UploadOutlined } from '@ant-design/icons';

function AddNewCar() {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, data: post } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const [addCar, setAddCar] = useState({
    name: '',
    price: '',
    image: [],
    category: 'small',
    status: true,
  });

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('name', addCar.name);
    formData.append('price', addCar.price);
    formData.append('category', addCar.category);
    formData.append('status', addCar.status);
    formData.append('image', addCar.image);
    setUploading(true);

    dispatch(createPost(formData));
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  // const handleSubmit = async (payload) => {
  //   const formData = new FormData();
  //   formData.append('name', addCar.name);
  //   formData.append('price', addCar.price);
  //   formData.append('image', addCar.image[0]);
  //   dispatch(createPost(formData));
  //   // console.log(formData);
  //   // dispatch(createPost(addCar));
  //   // console.log(addCar);
  // };

  return (
    <>
      <section id="addcar">
        <div class="container pt-4">
          <div class="row">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div class="col-12">
                <Breadcrumb className="pb-3 separator=">
                  <Breadcrumb.Item>Cars</Breadcrumb.Item>
                  <Breadcrumb.Item>List Car</Breadcrumb.Item>
                  <Breadcrumb.Item href="/add-car">Add New Car</Breadcrumb.Item>
                </Breadcrumb>
                <h2>Add New Car</h2>
                <div class="form-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputName" class="col-form-label">
                          Nama
                        </label>
                        <label for="wajib" style={{ color: 'red' }}>
                          *
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <input
                          type="text"
                          value={addCar.name}
                          onChange={(e) =>
                            setAddCar({
                              ...addCar,
                              name: e.target.value,
                            })
                          }
                          class="form-control"
                          placeholder="Nama"
                        />
                        <small id="namaHelp" class="form-text text-muted"></small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputPassword6" class="col-form-label">
                          Harga
                        </label>
                        <label for="wajib" style={{ color: 'red' }}>
                          *
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <input
                          type="text"
                          value={addCar.price}
                          onChange={(e) =>
                            setAddCar({
                              ...addCar,
                              price: e.target.value,
                            })
                          }
                          class="form-control"
                          placeholder="Harga"
                        />
                        <small id="hargaHelp" class="form-text text-muted"></small>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputFoto6" class="col-form-label">
                          Foto
                        </label>
                        <label for="wajib" style={{ color: 'red' }}>
                          *
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <Upload {...props}>
                          <Button
                            onChange={(e) =>
                              setAddCar({
                                ...addCar,
                                image: e.target.image[0],
                              })
                            }
                            icon={<UploadOutlined />}
                          >
                            Select File
                          </Button>
                        </Upload>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputStartRent6" class="col-form-label">
                          Start Rent
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <span> - </span>
                        <span class="error-notif"></span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputFinishRent6" class="col-form-label">
                          Finish Rent
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <span> - </span>
                        <span class="error-notif"></span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputCreatedRent6" class="col-form-label">
                          Created Rent
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <span> - </span>
                        <span class="error-notif"></span>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3">
                        <label for="inputUpdatedRent6" class="col-form-label">
                          Updated Rent
                        </label>
                      </div>
                      <div class="col-lg-9">
                        <span> - </span>
                        <span class="error-notif"></span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="btn-add-car">
            <button onClick={() => navigate('/list-car')} type="button" class="btn-custom">
              Cancel
            </button>
            <Button
              onClick={() => {
                // handleSubmit();
                handleUpload();
              }}
              loading={uploading}
              type="button"
              class="btn-custom-save"
            >
              Save
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddNewCar;
