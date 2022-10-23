import logo from './logo.svg';
import './App.css';
import DataList from './DataList.js';

const datasetId = "TheBackend"

function App() {
  return (
    <DataList>
      {({ data }) => (
      <>
        <div className="App">
        </div>
      </>
      )}
    </DataList>
  );
}

export default App;
