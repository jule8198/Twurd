import {Header} from './components/header'
import {Map} from './components/map'
import {useState, useEffect} from 'react'
import {DataSection} from './components/dataSection'
function App() {
  const [state, setState] = useState("");
  const [stateSelected, setStateSelected] = useState(false)
  const [json, setJson] = useState({});
  
  const stateChangeListener = (name) =>{
    fetch("/frequencies/" + name).then(
      res => res.json()
    ).then(
      data => {
        console.log("HELLO")
        console.log(data)
        setJson(data)
        setStateSelected(true)
        setState(name)
        
    } 
    )
  }

  return (
    <div className= "row">
      <div className="colMap">
        <Header/>
        <Map stateChangeListener={stateChangeListener}/>
      </div>
      <div className="colInfo">
      {
        !stateSelected && <div className = "selectHeader">Select a state to begin</div>
      }
          {stateSelected &&
            <div className="infoSection">
            {json && <div className = "stateHeader">Top words for state: {json.state}</div>}
            <hr/>
          <DataSection Primarycolor={'0'} progress = {json.freq[0] * 100} word = {json.words[0]} numTweeted={json.freq[0] * 100}/>
          <DataSection Primarycolor={'1'} progress = {json.freq[1] * 100} word = {json.words[1] }numTweeted={json.freq[1] * 100}/>
          <DataSection Primarycolor={'2'} progress = {json.freq[2] * 100} word = {json.words[2]} numTweeted={json.freq[2] * 100}/>
          </div>}
          <div>
          </div>
          <div>
          </div>
      </div>
    </div>
  );
}

export default App;
