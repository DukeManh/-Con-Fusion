import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const RenderCard = ({ item }) => {
    return (
        <div>
            <Card>
                <CardImg src={item.image} alt={item.name}></CardImg>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designaton ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default function Home(props) {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem active> Home</BreadcrumbItem>
            </Breadcrumb>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish}></RenderCard>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion}></RenderCard>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader}></RenderCard>
                    </div>
                </div>
            </div>
        </>
    )
}

