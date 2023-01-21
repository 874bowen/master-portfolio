// src/components/Contact.js

// Footer FooterComponent.js
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React, { useState } from "react";

export default function Footer() {
  const date = new Date();
  const year = useState(date.getFullYear());

  return (
    <section>
      <div className="text-white">
        <div className="mt-3 mb-2 text-white row">
          <div className="d-flex justify-content-center gap-5 m-auto">
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ivan-bowen/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/bowe_n_" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://github.com/874bowen" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
        </div>
        <div className="row d-flex text-center">
                    <p>© Copyright {year} Ivan Bowen</p>
        </div>
      </div>
    </section>
  );
}