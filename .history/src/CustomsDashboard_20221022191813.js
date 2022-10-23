import React, { Component } from "react";

class CustomsDashboard extends Component {

    datalistId = "TheDatabase";
    constructor(props) {
        super(props) 
        this.localStorageUpdated = this.localStorageUpdated.bind(this) 
        this.state = {
            bookings: this.props.data
        }
    }

    componentDidMount() {
        window.addEventListener('storage', this.localStorageUpdated)
    }

    localStorageUpdated() {
        let datalist = localStorage.getItem(this.datalistId);
        let bookings =  JSON.parse(JSON.stringify(datalist));
        console.log(bookings)
        this.setState({ data: bookings })
    }

    render() {
        return <div className="App">
            <h3>YourTypicalGovernmentSystem.com</h3>
            <div>
                <ul>
                    {this.state.bookings.map((awb) => {
                        return <li key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>
                            {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                            &nbsp;{awb["iata:bookingOption:bookingStatus"]}
                            &nbsp;<button onClick={this.handleThis} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>This</button>
                            &nbsp;<button onClick={this.handleThat} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>That</button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }

}

export default CustomsDashboard