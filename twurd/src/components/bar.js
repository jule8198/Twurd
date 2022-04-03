import React, { PureComponent } from 'react'

//https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/
export const Bar = ({Primarycolor, progress}) =>{
    var Color = ["#6473FA","#FA647F","#57E590"];
    const PDiv = {
        height: 40,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,    
    }

    const CDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: Color[Primarycolor],
       borderRadius:40,
        textAlign: 'right'
    }

    return (
        <div style= {PDiv}>
            <div style = {CDiv}>
            </div>
        </div>
    )

}