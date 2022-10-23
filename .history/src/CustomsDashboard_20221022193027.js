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
        let bookings =  JSON.parse(datalist);
        setTimeout(function () { 
            this.setState({ bookings: bookings })
          }.bind(this), 1000)
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
                        </li>
                    })}
                </ul>
            </div>
        </div>
    }

}

export default CustomsDashboard