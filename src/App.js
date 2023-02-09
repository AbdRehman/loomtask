import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import MachineDisplay from './components/MachineDisplay';
import HomePage from './components/HomePage';
import AddMachine from './components/AddMachine';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import AddRecords from './components/AddRecords';

function App() {

  const [main, setMain] = useState([{title:"",inputFeilds:[],records:[]}]);
  return (
    <>
      <div className="App">
        {/* <Router>
          <Routes>
            <Route path></Route>
          </Routes>
        </Router> */}
        <SideBar main={main} />
        <NavBar />
        <HomePage />
        <MachineDisplay />
        <AddRecords main={main}/>
        <AddMachine main={main} setMain={setMain} />
      </div>
    </>

  );
}

export default App;
