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
              <Route key="dashboard" exact path={['/', '/dashboard']}  element={ <Dashboard data={data}></Dashboard> }>
                
              </Route>
              <Route key="customs" exact path="/customs">
                <CustomsDashboard data={data}></CustomsDashboard>
              </Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </Fetch>
  );
}

export default App;
