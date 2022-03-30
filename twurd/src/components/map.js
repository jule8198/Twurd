import React, {useState} from 'react';
import USAMap from "react-usa-map";
 
export function Map() {
    // pass in use state setter for state from App.js
    const mapHandler = (event) => {
        alert(event.target.querySelector('title').textContent)
      };

    return ( 
            <div className="Map">
              <USAMap  onClick={mapHandler} defaultFill="#D3D3D3" />
            </div>
    )
}
 