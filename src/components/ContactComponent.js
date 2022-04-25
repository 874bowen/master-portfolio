import React from 'react';


function Contact(props){
    return(
        <section id="contact">
        <div className="container">
            <div className="row row-content">
            <div className="col-12">
                <h3>Location Information</h3>
            </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Address</h5>
                        <address>
                        30100, Eldoret<br/>
                        Eldoret, Kenya<br/>
                        30100<br/>
                        <i className="fa fa-phone"></i>: +254 791 440-095<br/>
                        <i className="fa fa-fax"></i>: +254 791 440-095<br/>
                        <i className="fa fa-envelope"></i>:
                            <a href="mailto:bowenivan16@gmail.com">bowenivan16@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of my Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                <div className="btn-group" role="group">
                    <a role="button" className="btn btn-primary" href="tel:+254791440095"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info" href="tel:+254791440095"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" className="btn btn-success" href="mailto:bowenivan16@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}
export default Contact;