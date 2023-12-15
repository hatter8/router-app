import React from "react"



export default function Details(props) {
        return (
            <>
                <div className="details-cont dash">
                    <h2>Details Section</h2>
                    <h5>{props.name}</h5>
                    <p>{props.location}</p>
                </div>
            </>
        )
}
