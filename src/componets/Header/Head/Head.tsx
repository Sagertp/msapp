import React from 'react';
import Cctv from '../../../img/CCTV.png';

class Head extends React.Component {
  render(){
    return(
      <div className="caption">
	<div className="container">
	  <div className="row">
	    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
	      <span className="animated fadeInLeftBig delay-1s">Equipos, consultoría y garantía</span><br/>
	      <h2 className="animated fadeInLeftBig delay-1s">Circuito Cerrado de Televisión CCTV</h2>
	    </div>
	    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
	      <img className="animated fadeInRight delay-1s hidden-xs" src={Cctv} alt=""></img>
	    </div>
	  </div>
	</div>
      </div>
    )
  }
}


export default Head;
