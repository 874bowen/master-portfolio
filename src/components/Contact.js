// src/components/Contact.js

// src/components/Contact.js
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="text-white container">
        <div className="text-white row d-flex justify-content-around">
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
          <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
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