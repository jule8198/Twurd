import {Header} from './components/header'
import {Map} from './components/map'
import {useState} from 'react'
import {Bar} from './components/bar'
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
            <Bar Primarycolor='0' progress='30'></Bar>
          </div>
      </div>
    </div>
  );
}

export default App;
