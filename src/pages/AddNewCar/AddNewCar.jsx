import { Breadcrumb, Typography } from 'antd';
import './addNewCar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewCar() {
  const navigate = useNavigate();
  return (
    <>
      <section id="addcar">
        <div class="container pt-4">
          <div class="row">
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
                      <input type="text" id="inputNama6" class="form-control" placeholder="Nama" />
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
                      <input type="text" id="inputHarga6" class="form-control" placeholder="Harga" />
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
                      <div class="input-group">
                        <input class="form-control" type="file" id="formFile" style={{ display: 'none' }} onchange="getNameFile(this.value)" />
                        <label for="formFile" id="file-input" class="form-control icon text-secondary">
                          No file selected
                        </label>
                      </div>
                      <small id="fileHelp" class="form-text text-muted" style={{ marginLeft: '1px' }}>
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
          </div>
          <div className="btn-add-car">
            <button onClick={() => navigate('/list-car')} type="button" class="btn-custom">
              Cancel
            </button>
            <button type="button" class="btn-custom-save">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddNewCar;
