import React from "react";

import hikvision from "../../assets/imgCorousel/camaras-de-seguirdad-hikvision.png";
import dahua from "../../assets/imgCorousel/camaras-de-seguirdad-dahua.png";
import axis from "../../assets/imgCorousel/camaras-de-seguirdad-axis.png";
import vivotek from "../../assets/imgCorousel/camaras-de-seguirdad-vivotek.png";
import pelco from "../../assets/imgCorousel/camaras-de-seguirdad-pelco.png";
import bosh from "../../assets/imgCorousel/camaras-de-seguirdad-bosch.png";

const Carousel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="carousel slide media-carousel" id="media">
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <div className="row">
                  <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                      <a className="img-responsive" href="#">
                        <img alt="" src={hikvision} />
                      </a>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                      <a className="img-responsive" href="#">
                        <img alt="" src={dahua} />
                      </a>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                      <a className="img-responsive" href="#">
                        <img alt="" src={axis} />
                      </a>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                      <a className="img-responsive" href="#">
                        <img alt="" src={vivotek} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3hidden-xs hidden-sm">
                    <a className="img-responsive" href="#">
                      <img alt="" src={pelco} />
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                    <a className="img-responsive" href="#">
                      <img alt="" src={bosh} />
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                    <a className="img-responsive" href="#">
                      <img alt="" src={axis} />
                    </a>
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 hidden-xs hidden-sm">
                    <a className="img-responsive" href="#">
                      <img alt="" src={bosh} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              data-slide="prev"
              href="#media"
              className="carousel-control-prev hidden-xs hidden-sm"
            >
              ‹
            </a>
            <a
              data-slide="next"
              href="#media"
              className="carousel-control-next hidden-xs hidden-sm"
            >
              ›
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
