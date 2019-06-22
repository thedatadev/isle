import React from 'react'

import './Catalog.css'

function CarouselItem(props) {

    return (

        <div className="carousel-item">
            <div className="carousel-item-thumbnail"></div>
            <div className="carousel-item-label">{ props.name }</div>
        </div>

    );

}

function Carousel() {

    return (

        <div className="carousel">

            <CarouselItem name="bedroom" />
            <CarouselItem name="park" />
            <CarouselItem name="restaurant" />
            <CarouselItem name="classroom" />

        </div>

    );

}


function Catalog(props) {

    return (

        <div className="catalog">

            <div className="catalog-title">{props.title}</div>

            <Carousel />

        </div>

    );

}

export default Catalog;
