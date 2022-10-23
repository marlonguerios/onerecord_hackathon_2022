import React, { Component } from "react";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings: this.props.data
        }
        this.handleThis = this.handleThis.bind(this);
        this.handleThat = this.handleThat.bind(this);
    }

    handleThis() {

    }

    handleThat() {

    }

    render() {
        return <div className="App">
            <h3>Hackathon Booking System</h3>
            <div>
                <ul>
                    {this.state.bookings.map((awb) => {
                        return <li key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>
                            {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                            &nbsp;<a onClick={this.handleThis}>This</a>
                            &nbsp;<a href="">That</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    }
}

export default Dashboard;