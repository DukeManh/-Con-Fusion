import React from 'react';
import { CardImgOverlay } from 'reactstrap';
import {
    Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';


export default function Menu({ dishes, isLoading, errMess }) {

    function RenderMenuItem({ dish, onClick }) {
        return (
            <Card tag="li">
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} ></CardImg>
                    <CardImgOverlay className="ml-5">
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        )
    }
    const menu = dishes.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}></RenderMenuItem>
            </div>
        );
    });
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading></Loading>
                </div>
            </div>
        )
    }
    else if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem> <Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }

}

