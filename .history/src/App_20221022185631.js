import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';
import Dashboard from './Dashboard';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
        <>
          <Router>
            <Dashboard data={data}></Dashboard>
          </Router>
        </>
      )}
    </Fetch>
  );
}

export default App;
