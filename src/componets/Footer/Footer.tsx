import React from 'react';
import Contact from './Contact/Contact';
import Us from './Us/Us';
import Social from './Social/Social';
import Copy from './Copy/Copy';

class Footer extends React.Component {
  render(){
    return(
      <div className="dark_secondary_color" id="contacto">
	<div className="containern">
	  <div className="footer">
	    <div className="row">
	      <Us/>
	      <Contact/>
	      <Social/>
	    </div>
      	  </div>
	</div>
	  <Copy/>
	</div>
    )
  }
}

export default Footer;

