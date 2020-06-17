import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetail'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        };
    };


    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="#">Coursera</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes}
                        onClick={(dishID) => this.ondishSelect(dishID)}></Menu>
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
                </div>
            </div>
        );
    }

    ondishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }

}

