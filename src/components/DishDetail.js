import React from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

export default function DishDetail({ dish }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} ></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 mt-1">
                    <h4>Comments</h4>
                    <p>Lorem ipsum is placeholder text commonly used</p>
                    <p>Excepteur sint occaecat cupidatat non proident ipsum is placeholder text commonly used</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
}
