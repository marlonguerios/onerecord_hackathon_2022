import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';
import Dashboard from './Dashboard';
import CustomsDashboard from './CustomsDashboard';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
        <>
          <Router>
            <Switch>
              <Route key="dashboard">
                <Dashboard data={data}></Dashboard>
              </Route>
              <Route key="customs">
                <CustomsDashboard data={data}></CustomsDashboard>
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </Fetch>
  );
}

export default App;
