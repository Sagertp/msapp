import React from 'react';

class Social extends React.Component {
  render(){
    return(
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
	<h3 className="secondary_color">REDES SOCIALES</h3>
	<div className="social2">
	  <a href="https://www.instagram.com/msintegraciones/?hl=es-la" target="blank"><img src="img/instagram-social-outlined-logo.png" alt="instagram"/></a>
	</div>
	<div className="contacto">
	  <span className="secondary_color"><img src="img/instagram-social-outlined-logo.png" alt=""/></span>
	  <span className=" secondary_color"><img src="img/facebook-logo-outline.png" alt=""/></span>
	  <span className="secondary_color"><img src="img/twitter-social-outlined-logo.png" alt=""/></span>
	  <span className="secondary_color"><img src="img/linkedin-social-outline-logotype.png" alt=""/></span>
	</div>
      </div>
    )
  }
}

export default Social;
