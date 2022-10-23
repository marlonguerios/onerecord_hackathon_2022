import React, { Component } from "react";
import './Customs.css';

class CustomsContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: this.props.bookings
        }
    }
    render() {
        return <div id="customs-content">
            <div className="customs-content-table">
                {this.state.bookings.map((awb) => {
                    return <div key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                    className="customs-awb-card">
                        <div>{awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}</div>
                        <div>{awb["iata:bookingOption:shipmentSecurityStatus"]}</div>
                        <div>{awb["iata:booking:transportMovement"]["iata:transportMovement:departureLocation"]["iata:location:code"]}</div>
                        <div>{awb["iata:booking:transportMovement"]["iata:transportMovement:arrivalLocation"]["iata:location:code"]}</div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default CustomsContent;