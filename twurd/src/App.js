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
        !stateSelected && <div>select a state</div>
      }
          {stateSelected &&
            <div className="infoSection">
            {json && <div className = "stateHeader">Top words for state: {json.state}</div>}
            <hr/>
          <DataSection Primarycolor={'0'} progress = {70} word = {json.words[0]} numTweeted={70}/>
          <DataSection Primarycolor={'1'} progress = {30} word = {json.words[1] }numTweeted={30}/>
          <DataSection Primarycolor={'2'} progress = {50} word = {json.words[2]} numTweeted={50}/>
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
