import React, { Component } from "react";

class Dashboard extends Component {

    datalistId = "TheDatabase";

    constructor(props) {
        super(props);
        this.state = {
            bookings: this.props.data
        }
        this.handleThis = this.handleThis.bind(this);
        this.handleThat = this.handleThat.bind(this);
    }

    saveToStore(bookings) {
        localStorage.setItem(this.datalistId, JSON.stringify(bookings));
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

    handleThis(e) {
        const clickedAwb = e.target.dataset.awb;
        let bookings = JSON.parse(JSON.stringify(this.state.bookings))
        let awbToUpdate = bookings.filter((awb) => clickedAwb == awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        awbToUpdate[0]["iata:bookingOption:bookingStatus"] = "QU" 
        this.saveToStore(bookings)

        this.setState({
            bookings: bookings 
        })
    }

    handleThat(e) {
        const clickedAwb = e.target.dataset.awb;
        let bookings = JSON.parse(JSON.stringify(this.state.bookings))
        let awbToUpdate = bookings.filter((awb) => clickedAwb == awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        awbToUpdate[0]["iata:bookingOption:bookingStatus"] = "KK"
        this.saveToStore(bookings)
        this.setState({
            bookings: bookings
        })
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