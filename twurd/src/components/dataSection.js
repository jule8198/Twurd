import React, { PureComponent } from 'react'
import {Bar} from './bar'
//https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/
export const DataSection = ({Primarycolor, progress, word, numTweeted, num}) =>{
    return (
        <div>
            <div className="dataSectionHeader">
                <div className="word">
                {num}. {word}
                </div>
                <div>
                     TF-IDF Score: {numTweeted.toFixed(2)}
                </div>
            </div>
            <Bar Primarycolor={Primarycolor} progress={progress}/>
        </div>
    )

}