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

    handleThis(e) {
        const clickedAwb = e.target.dataset.awb
        let bookings = this.state.bookings
        let awbToUpdate = bookings.filter((awb) => clickedAwb == awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        console.log(awbToUpdate[0]);
        awbToUpdate["iata:bookingOption:bookingStatus"] = "QU"
        this.setState({
            bookings: JSON.parse(JSON.stringify(bookings))
        })
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

export default Dashboard;