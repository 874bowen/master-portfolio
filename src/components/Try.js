import React, { Component } from 'react';
import {Button, Form, FormGroup, Col, Row, Label, Input, FormFeedback} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Try extends Component {
    constructor(props){
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleSubmit(values){

        console.log("Current State is: "+ JSON.stringify(values));
        alert("Feedback is: "+ JSON.stringify(values));
        
    }


    validate(firstname, lastname, telnum, email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        if (this.state.touched.firstname && firstname.length < 3){
            errors.firstname = 'First name should be greater than two characters';
        }
        else if (this.state.touched.firstname && firstname.length > 10){
            errors.firstname = 'First name should be less or equal to ten characters';
        }
        if (this.state.touched.firstname && lastname.length < 3){
            errors.lastname = 'Last name should be greater than two characters';
        }
        else if (this.state.touched.lastname && lastname.length > 10){
            errors.lastname = 'Last name should be less or equal to ten characters';
        }
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum = 'Tel. Number should contain digits only';
        }
        if (this.state.touched.telnum && telnum.length < 12){
            errors.telnum = 'Tel. Number should have more than 12 digits'
        }
        if (this.state.touched.email && email.length < 5){
            errors.eamil = 'Tel. Number should have more than 4 characters';
        }
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1){
            errors.email = 'Email should contain @ sign';
        }
        return errors;
    }



    render(){

        return(
            <section id="contact">
            <div className="container">
                <div className="row row-content">
                    <div className='mt-3 col-12'>
                        <h3 className='text-center'>Send Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9 mx-auto'>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" 
                                    placeholder="First Name" 
                                    className="form-control" 
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(12)
                                    }}/>
                                    <Errors className='text-danger' 
                                    model=".firstname" 
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" 
                                    placeholder="Last Name" 
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(12)
                                    }}/>
                                    <Errors className='text-danger' 
                                    model=".lastname" 
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" 
                                    name="telnum" 
                                    placeholder="Format : 2547XXXXXXXX" 
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(15), isNumber
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    className='form-control'
                                    validators={{
                                        required, validEmail
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:6, offset:2}}>
                                    <div className='form-group'>
                                        <Label check>
                                            <Control.checkbox model=".agree" name='agree' /> {' '}<strong>May I contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType"  name='contactType' className='form-control'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" type="textarea" id="message" name="message" rows="12" className='form-control'/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color="primary">Submit Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
            </section>
        );
    }
    
}
export default Try;