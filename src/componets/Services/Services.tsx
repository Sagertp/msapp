import React from "react";

const Services = () => {
  return (
    <div className="parallax">
      <div className="row">
        <div className="container">
          <div className="wrapper">
            <div className="iconos-parallax">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <img
                  className="headline"
                  src="img/surveillance-camera.png"
                  style={{ width: "60px", height: "60px" }}
                />
                <h2 className="secondary_color">CONSULTORIA</h2>
                <hr style={{ width: "100px" }} />
                <p className="secondary_color">
                  Nos dedicamos a asesorarle en su proyecto de Circuito
                  <br />
                  Cerrado de Televisón CCTV y si lo requiere contamos
                  <br /> con equipo capacitado para realizar la instalación.
                </p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <img
                  className="headline"
                  src="img/surveillance-system-alert-by-cellphone.png"
                  style={{ width: "60px", height: "60px" }}
                />
                <h2 className="secondary_color">SOPORTE</h2>
                <hr style={{ width: "100px" }} />
                <p className="secondary_color">
                  Podrá contar con la garantía adecuada de los <br /> productos
                  y servicios que adquiera con nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
