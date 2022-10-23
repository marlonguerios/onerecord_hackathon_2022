import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';
import Dashboard from './Dashboard';

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
      <>
        <Dashboard data={data}></Dashboard>
      </>
      )}
    </Fetch>
  );
}

export default App;
