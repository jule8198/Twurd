import {Header} from './components/header'
import {Map} from './components/map'
import {useState} from 'react'
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
        <div>{state}</div>
      </div>
    </div>
  );
}

export default App;
