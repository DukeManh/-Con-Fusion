import React, { Component } from 'react';
import {
    Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, Jumbotron, NavItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        }
    }

    toggleNav = () => {
        var isNavOpen = !this.state.isNavOpen;
        this.setState({ isNavOpen });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }
    handleLogin = (e) => {
        this.toggleModal();
        alert('Username:' + this.username.value + " Password: " + this.password.value);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand href="#" className="mr-auto">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="Ristorante Con Fusion"></img>
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar >
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span classname="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorance Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique experience.Our lipsmacking creations will tickle your culinary sense.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup >
                                <Label for="username">User name</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    innerRef={(input) => this.password = input}
                                    name="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check >
                                    <Input type="checkbox" name="rememberme"
                                        innerRef={(input) => this.remember = input}
                                    />Remember Me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Col md={12} className="text-center ">
                                    <Button type="submit" value="Submit" color="primary" className="ml-auto">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
