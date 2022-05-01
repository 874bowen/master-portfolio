// src/components/Contact.js

// Footer FooterComponent.js
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React from "react";

export default function Footer() {
  return (
    <section className="relative">
      <div className="text-white container">
        <div className="mt-5 mb-2 text-white row d-flex justify-content-around">
          <div className="col-md-4">
          <iframe 
            width="100%"
            height="100%"
            title="map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36875.638023172236!2d35.21908953913437!3d0.5238093037850862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178100ffde90ef4d%3A0x21d83ce812e53d6b!2sPioneer%20Estate%20Eldoret!5e0!3m2!1sen!2ske!4v1650696858978!5m2!1sen!2ske" loading="lazy"/>
          {/* <iframe
            width="100%"
            height="100%"
            title="map"
            
            // frameBorder={0}
            // marginHeight={0}
            // marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          /> */}
          </div>
          <div className="col-auto">
          <h5> Address</h5>
                    <address>
		              30100, Eldoret<br />
		              Eldoret, Uasin Gishu<br />
		              Kenya<br />
		              <i className="fa fa-phone fa-lg"></i>: +254 791 440095<br />
		              <i className="fa fa-fax fa-lg"></i>: +254 791 440095<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:bowenivan16@gmail.com">
                  bowenivan16@gmail.com</a>
                    </address>
            
          </div>
          <div className="col-12 col-sm-4 col-md-3 align-self-center">
          <div className="text-center mb-3">
                        <a role="button" className="btn btn-primary" href="tel:+254791440095"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="tel:+254791440095"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:bowenivan16@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
          <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://instagram.com/_bowe_n" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ivan-bowen-7858421ba/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/ivan90434131" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://github.com/874bowen" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
            </div>
        </div>
        <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2022 Ivan Bowen</p>
                </div>
            </div>
      </div>
    </section>
  );
}