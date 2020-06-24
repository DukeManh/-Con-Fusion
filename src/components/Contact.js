import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            agree: false,
            contactType: 'Tel',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                agree: false,
                contactType: false,
                message: false,
            }
        }
    }
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.check : target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        console.log("current State is: " + JSON.stringify(this.state));
        e.preventDefault();
    }
    handleBlur = (field) => (e) => {
        this.setState({ touched: { ...this.state.touched, [field]: true } });
    }
    validate = (firstname, lastname, telnum, email) => {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };
        if (this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = 'First name should contain more than 3 characters';
        }
        else if (this.state.touched.firstname && firstname.length > 16) {
            errors.firstname = 'First name should not contain more than 16 characters';
        }
        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = 'Last name should contain more than 3 characters';
        }
        else if (this.state.touched.lastname && lastname.length > 16) {
            errors.lastname = 'Last name should not contain more than 16 characters';
        }
        const reg = /^[1-9]{1}[0-9]{9}$/;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = 'Telephone number should contain 10 digits';
        }
        const companies = ['gmail.com', 'icloud.com', 'yahoo.com'];
        if (this.state.touched.email && (!email.split('').filter(c => c === 'a').length >= 1 || !companies.includes(email.slice(email.lastIndexOf('@') + 1).toLowerCase()))) {
            console.log(email.slice(email.lastIndexOf('@')).toLowerCase());
            errors.email = 'We only accept Gmail, Icloud and Yahoo email';
        }
        return errors;
    }
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}>First name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('firstname')}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                    ></Input>
                                </Col>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" md={2}>Last name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}></Input>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="telnum" md={2}>Contact number</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="contact number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}></Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}></Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="feedback" md={2}>Your feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea"
                                        rows="12"
                                        name="message"
                                        placeholder="Message"
                                        value={this.state.message}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Send</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );

    }
}

