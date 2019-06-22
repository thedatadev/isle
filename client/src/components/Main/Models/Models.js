import React from 'react'

import './Models.css'



function Search() {

    return (

        <div id="search">

            <input type="text" placeholder="Search 3D models..." />


        </div>


    );

}


function SearchResult(props) {

    return (

        <div className="search-result">
            <div className="search-result-thumbnail"></div>
            <div className="search-result-label">{props.name}</div>
        </div>

    );

}


function Results() {

    return (

        <div id="results">

            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />
            <SearchResult name="placeholder" />

        </div>
        
    );

}


function Models() {

    return (

        <div id="models">

            <Search />

            <Results />

        </div>

    );

}

export default Models;