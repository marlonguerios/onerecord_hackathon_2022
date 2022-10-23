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
            <Router>
              <Route key="dashboard" exact path={['/', '/homepage']}>
                <Dashboard data={data}></Dashboard>
              </Route>
              <Route key="customs" exact path="/customs">
                <CustomsDashboard data={data}></CustomsDashboard>
              </Route>
            </Router>
          </BrowserRouter>
        </>
      )}
    </Fetch>
  );
}

export default App;
