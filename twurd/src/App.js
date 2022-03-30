import {Header} from './components/header'
import {Map} from './components/map'
function App() {
  return (
    <div className= "row">
      <div className="colMap">
        <Header/>
        <Map/>
      </div>
      <div className="colInfo">
      </div>
    </div>
  );
}

export default App;
