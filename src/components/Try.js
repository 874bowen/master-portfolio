import React, { Component, createRef} from 'react';
import {Button, Form, FormGroup, Col, Label, Input, FormFeedback} from 'reactstrap';


class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.formRef = createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name= target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){

        console.log("Current State is: "+ JSON.stringify(this.state));
        alert("Feedback is: "+ JSON.stringify(this.state));
        event.preventDefault();//has to go to new page
        
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
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

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <section id="contact">
            <div className="container">
                <div className="row row-content">
                    <div className='mt-3 col-12'>
                        <h3 className='text-center'>Send Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9 mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" 
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    valid={errors.firstname === ''} 
                                    invalid={errors.firstname !== ''} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('firstname')}></Input>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.lastname} 
                                    valid={errors.lastname === ''} 
                                    invalid={errors.lastname !== ''} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('lastname')}></Input>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" 
                                    name="telnum" 
                                    placeholder="Format : 2547XXXXXXXX" 
                                    value={this.state.telnum} 
                                    valid={errors.telnum === ''} 
                                    invalid={errors.telnum !== ''} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('telnum')}></Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    valid={errors.email === ''} 
                                    invalid={errors.email !== ''} 
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('email')}></Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree' onChange={this.handleInputChange}/> {' '}<strong>May I contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' color="primary">Submit Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
            </section>
        );
    }
    
}
export default Contact;