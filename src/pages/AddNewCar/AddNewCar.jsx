import { Breadcrumb } from 'antd';
import './addNewCar.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPost } from '../../redux/action/postAction';
import { useForm } from 'react-hook-form';

function AddNewCar() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { isLoading, data: post } = useSelector((state) => state.post);
  const navigate = useNavigate();

  const onSubmit = async (payload) => {
    const formData = new FormData();
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
    formData.append('image', payload.image[0]);
    dispatch(createPost(formData));
  };

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                          <label htmlFor="name" class="col-form-label">
                            Nama
                          </label>
                          <label for="wajib" style={{ color: 'red' }}>
                            *
                          </label>
                        </div>
                        <div class="col-lg-9">
                          <input type="text" id="name" {...register('name')} class="form-control" placeholder="Nama" />
                          <small id="namaHelp" class="form-text text-muted"></small>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3">
                          <label htmlFor="price" class="col-form-label">
                            Harga
                          </label>
                          <label for="wajib" style={{ color: 'red' }}>
                            *
                          </label>
                        </div>
                        <div class="col-lg-9">
                          <input type="text" id="price" {...register('price')} class="form-control" placeholder="Harga" />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3">
                          <label htmlFor="photo" class="col-form-label">
                            Foto
                          </label>
                          <label for="wajib" style={{ color: 'red' }}>
                            *
                          </label>
                        </div>
                        <div class="col-lg-9">
                          <input class="form-control" id="photo" type="file" onChange={onSubmit} {...register('image')} />
                          <small htmlFor="description" class="form-text text-muted" style={{ marginLeft: '1px' }}>
                            File size max. 2 MB
                          </small>
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
              <button type="submit" class="btn-custom-save">
                Save
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default AddNewCar;
