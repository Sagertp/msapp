import React from "react";
import Idvr from "../../libs/interfaces/dvr";

const Product = (prop) => {
  return (
    <>
      <div className="col-item">
        <div className="photo">
          <img
            src={prop.image}
            className="img-responsive"
            alt="Product in action"
          />
          <hr />
        </div>
        <div className="info">
          <div className="row">
            <div className="">
              <div className="price col-md-12">
                <h5>{prop.name}</h5>
                <p>{prop.description}</p>
              </div>
              <div className="price col-md-12">
                <h5 className="price-text-color">{prop.price} $ </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={"#"+prop.id}
                >
                  Ver más detalles
                </button>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {/* Modal Section*/}
      <div
        className="modal fade"
        id={prop.id}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Detalles del producto</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="col-item">
                    <div className="photo">
                      <img
                        src={prop.image}
                        className="img-responsive"
                        alt="Product in action"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="detalles">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        {" "}
                        <h2>{prop.name}</h2>{" "}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <h3>{prop.manufacturer}</h3>{" "}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <p>Compresion: {prop.compression}</p>{" "}
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <p>Disco duro: {prop.capacity}</p>
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <p>Resolucion: {prop.resolution}</p>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
