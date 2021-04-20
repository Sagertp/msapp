import React from 'react';

class Contact extends React.Component {
  render(){
    return(
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	<h3 className="secondary_color">CONTÁCTANOS</h3>
	<div className="contacto">
	  <br/>
	  <span className=" secondary_color">
	    <img src="img/placeholder.png" alt=""></img>
	    &nbsp;<strong>Direccion:</strong> La Candelaria Caracas 
	  </span>
	  <br/><br/>
	  <span className="secondary_color">
	    <img src="img/smartphone.png" alt=""></img>
	    &nbsp;<strong>Telefono:</strong> 0212-564-51-98
	  </span>
	  <br/><br/>
	  <span className="secondary_color">
	    <img src="img/mail.png" alt=""></img>
	    &nbsp;<strong>Email:</strong> msintegraciones@gmail.com
	  </span>
	</div>
      </div>

    )
  }
}

export default Contact;
