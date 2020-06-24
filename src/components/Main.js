import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import DishDetail from './DishDetail';
import About from './About';
import { Switch, Route, Redirect, useParams, Link } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
        };
    };

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter(promo => promo.featured)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured)[0]} ></Home>

            )
        }
        const Detail = () => {
            let { id } = useParams();
            var dish = this.state.dishes.filter(dish => dish.id === parseInt(id, 10))[0];
            return (
                <>
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <DishDetail dish={dish}></DishDetail>
                </>
            )
        }
        const AboutUs = () => {
            return (
                <About leaders={this.state.leaders}></About>
            );
        }
        return (
            <div className="App">
                <Header></Header>
                <Switch>
                    <div className="container">
                        <Route path="/home" component={HomePage}></Route>
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
                        <Route exact path="/contactus" component={Contact}></Route>
                        <Route path="/menu/:id" component={Detail}></Route>
                        <Route exact path="/about" component={AboutUs}></Route>
                        <Redirect to="/home"></Redirect>
                    </div>
                </Switch>
                <Footer></Footer>
            </div>
        );
    }

}

