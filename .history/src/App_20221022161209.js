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
            test
            <ul>
            { data.map( (awb) => {
              return <li key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>
                {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                </li>
            })}
            </ul>
          </div>
        </div>
      </>
      )}
    </Fetch>
  );
}

export default App;
