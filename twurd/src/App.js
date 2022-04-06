import {Header} from './components/header'
import {Map} from './components/map'
import {useState} from 'react'
import {DataSection} from './components/dataSection'
function App() {
  const [state, setState] = useState("");

  const stateChangeListener = (name) =>{
    setState(name)
  }


  return (
    <div className= "row">
      <div className="colMap">
        <Header/>
        <Map stateChangeListener={stateChangeListener}/>
      </div>
      <div className="colInfo">
          <div className="infoSection">
            <div className = "stateHeader">Top words for state: {state}</div>
            <hr/>
          <DataSection Primarycolor={'0'} progress = {70} word = "hi" numTweeted={70}/>
          <DataSection Primarycolor={'1'} progress = {30} word = "bye" numTweeted={30}/>
          <DataSection Primarycolor={'2'} progress = {50} word = "hola" numTweeted={50}/>
          </div>
      </div>
    </div>
  );
}

export default App;
