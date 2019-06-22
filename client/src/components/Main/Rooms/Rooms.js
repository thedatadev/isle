import React from 'react'


import Catalog from '../../Shared/Catalog/Catalog'




function Rooms() {

    return (

        <div id="rooms">

            {/* Recent rooms */}
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