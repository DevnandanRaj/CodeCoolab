import './App.css';

import { Repo } from './Pages/Repo';
import { Dashboard } from './Pages/Dashboard';
import { Allroutes } from './Componet/Allroutes';

function App() {
  return (
    <div className="App">

     <Allroutes/>
     <h1>Intial commit</h1>
     <Repo/>
     {/* <Dashboard/> */}
    </div>
  );
}

export default App;
