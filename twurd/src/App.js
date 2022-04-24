import {Header} from './components/header'
import {Map} from './components/map'
import {useState, useEffect} from 'react'
import {DataSection} from './components/dataSection'
function App() {
  const [state, setState] = useState("");
  const [stateSelected, setStateSelected] = useState(false)
  const [json, setJson] = useState({});
  const [value, setValue] = useState(0);
  
  const stateChangeListener = (name) =>{
    fetch("/frequencies/" + name).then(
      res => res.json()
    ).then(
      data => {
        console.log(data)
        setJson(data)
        setStateSelected(true)
        setState(name)
        setValue(0)
        
    } 
    )
  }

  const increment=()=>{
    setValue(prevValue => prevValue+3)
  }

  const decrement=()=>{
    setValue(prevValue=>prevValue-3)
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
            {json && <div className = "stateHeader">Top words for {state}</div>}
            <hr/>
          <DataSection num={1+value} Primarycolor={'0'} progress = {json.freqs[0+value] * 100} word = {json.words[0+value]} numTweeted={json.freqs[0+value] * 100}/>
          <DataSection num={2+value} Primarycolor={'1'} progress = {json.freqs[1+value] * 100} word = {json.words[1+value] }numTweeted={json.freqs[1+value] * 100}/>
          <DataSection num={3+value} Primarycolor={'2'} progress = {json.freqs[2 +value] * 100} word = {json.words[2+value]} numTweeted={json.freqs[2+value] * 100}/>
          <div className="button">
          {
            (value === 3 || value === 6) &&  <button onClick={decrement}>{'<'}</button>
          }
          
          {
            (value === 3 || value === 0) && <button onClick={increment}>{'>'}</button>
          }

          </div>
          
          
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
