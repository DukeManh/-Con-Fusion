import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import DishDetail from './DishDetail';
import About from './About';
import { Switch, Route, Redirect, useParams, Link, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        commments: state.comments,
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter(promo => promo.featured)[0]}
                    leader={this.props.leaders.filter(leader => leader.featured)[0]} ></Home>

            )
        }
        const Detail = () => {
            let { id } = useParams();
            var dish = this.props.dishes.filter(dish => dish.id === parseInt(id, 10))[0];
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
                <About leaders={this.props.leaders}></About>
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
export default withRouter(connect(mapStateToProps)(Main));

