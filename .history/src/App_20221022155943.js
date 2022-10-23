import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch.js';

const datasetId = "TheBackend"

function App() {
  return (
    <Fetch>
      {({ data }) => (
      <>
        <div className="App">
          <h3>Hackathon Booking System</h3>
          <div>
            { data.map( (awb) => {
              
            })}
          </div>
        </div>
      </>
      )}
    </Fetch>
  );
}

export default App;
