import React from 'react'
import { Link } from 'react-router-dom'

import './Rooms.css'


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


function NewRoom() {

    return (

        <Link id="new-room" to="/editor">

            <span>Create room</span>

            <i className="fas fa-plus-circle"></i>

        </Link>

    );

}


function Rooms() {

    return (

        <div id="rooms">

            <NewRoom />

            <Catalog title="Recent rooms" />

            <div className="divider"></div>

            {/* Categorised rooms */}
            <Catalog title="Health" />
            <Catalog title="Culture" />
            <Catalog title="Sport" />


        </div>

    );

}

export default Rooms;