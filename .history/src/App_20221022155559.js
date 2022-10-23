import logo from './logo.svg';
import './App.css';
import DataList from './Fetch.js';

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
      <>
        <div className="App">
          <h3>Hackathon Booking System</h3>
          <div>
            
          </div>
        </div>
      </>
      )}
    </DataList>
  );
}

export default App;
