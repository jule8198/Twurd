import React, {useState} from 'react';
import USAMap from "react-usa-map";
 
export function Map({stateChangeListener}) {
    // pass in use state setter for state from App.js
    const mapHandler = (event) => {
        const name = event.target.querySelector('title').textContent
        stateChangeListener(name)
      };


    return ( 
            <div className="Map">
              <USAMap  onClick={mapHandler} defaultFill="#FFFFFF" />
            </div>
    )
}
 