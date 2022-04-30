import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_USER_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Thank you for your feedback");
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    form.current.scrollIntoView({behavior: "smooth"});
  });
  return (
    <section id="contact" >
        <div className='container'>
            <div className="mb-3 row row-content">
            <div className="m-auto col-10">
            <h3 className='mb-3 mt-3 text-center'>Send us your Feedback</h3>
            </div>
            <div className="col-10 col-md-10 m-auto">
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3 form-group row">
                    <label htmlFor="firstname" className="col-md-2 col-form-label">First Name</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                    </div>
                </div>
                <div className="mb-3 form-group row">
                    <label htmlFor="lastname" className="col-md-2 col-form-label">Last Name</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="mb-3 form-group row">
                        <label htmlFor="telnum" className="col-12 col-md-2 col-form-label">Contact Tel.</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. number"/>
                        </div>
                    </div>
                    <div className="mb-3 form-group row">
                        <label htmlFor="email" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="mb-3 form-group row">
                        <div className="col-md-6 offset-md-2">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" name="agree" id="approve" value=""/>
                                <label className="form-check-label" htmlFor="approve">
                                    <strong>May I contact you?</strong>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            <select name='contactType' className="form-control">
                                <option>Tel.</option>
                                <option>Email</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                    <div className="col-md-10">
                        <textarea className="form-control" id="feedback" name="message" rows="12"></textarea>
                    </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-md-2 col-md-10">
                            <button type="submit" className="btn btn-primary">Send Feedback</button>
                        </div>
                    </div>
            </form>
            </div>
            <div className="col-12 col-md">
            </div>
            </div>
</div>
</section>
  );
};

export default Contact;