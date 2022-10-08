import React from 'react';

export default function Card({id, front, back}) {

    return (
       <div className="card-holder">
            <div className="card">
                <div className="front">
                    <p>{id}</p>
                    <p>{front}</p>
                </div>
                <div className="back">
                    <p>{back}</p>
                </div>
            </div>
       </div>
    )
}
