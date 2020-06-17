import React from 'react';
import { CardImgOverlay } from 'reactstrap';
import {
    Card, CardImg, CardTitle,
} from 'reactstrap';

export default function Menu({ dishes, onClick }) {

    const menu = dishes.map(dish => {
        return (
            <>
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card tag="li" onClick={() => onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} ></CardImg>
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            </>
        );
    });
    return (
        <div className="row">
            {menu}
        </div>
    )


}
