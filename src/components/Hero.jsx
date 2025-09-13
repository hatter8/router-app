import React from "react"


import './css/hero.css'


export default function Hero(props) {

        return (
            <>
                <div>
                    <h1 className="header" data-testid="header-1">{props.title}</h1>
                    <h2>Another title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, saepe.</p>
                    <button>Learn more</button>


                </div>
            </>
        )
}
