import React from 'react'
import CardList from "../Card-List/CardList.component";
import  "./CardDashboard.styles.css";
function CardDashboard(props) {
    return (
        <div className="card-dashboard">
            <CardList props={props}/>
            <CardList props={props}/>
            <CardList props={props}/>
        </div>
    )
}

export default CardDashboard
