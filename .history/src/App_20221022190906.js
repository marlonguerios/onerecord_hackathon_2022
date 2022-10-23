import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';
import Dashboard from './Dashboard';
import CustomsDashboard from './CustomsDashboard';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
        <>
          <BrowserRouter>
            <Routes>
              <Route key="dashboard" path="/"}  element={ <Dashboard data={data} /> } /> 
              <Route key="customs" path="/customs" element={ <CustomsDashboard data={data} />}  /> 
            </Routes>
          </BrowserRouter>
        </>
      )}
    </Fetch>
  );
}

export default App;
