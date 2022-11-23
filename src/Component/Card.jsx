import React from 'react'
import { NavLink } from 'react-router-dom';

function Card(mj) {
    return (
        <>
            <div className="col-11 col-md-4 mx-auto">
                <div className="card">
                    <img src={mj.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{mj.title}</h5>
                        <p className="card-text">{mj.desc}</p>
                        <h5 className="card-title">{mj.price}</h5>
                        <NavLink to="#" className="btn btn-primary">Buy now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;