import './App.css';
import Fetch from './Fetch.js';
import Dashboard from './Dashboard';
import CustomsDashboard from './CustomsDashboard';
import Warehouse from './Warehouse'
import {
  BrowserRouter,
  Routes, 
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
              <Route key="dashboard" path="/"  element={ <Dashboard data={data} /> } /> 
              <Route key="customs" path="/customs" element={ <CustomsDashboard data={data} />}  /> 
              <Route key="borderless" path="/borderless"  element={ <Warehouse data={data} /> } /> 
            </Routes>
          </BrowserRouter>
        </>
      )}
    </Fetch>
  );
}

export default App;
