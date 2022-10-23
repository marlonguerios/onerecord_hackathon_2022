import React, { Component } from "react";
import './Customs.css';

class CustomsContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookings: this.props.bookings
        }
    }

    clearBooking() {
        
    }



    render() {
        return <div id="customs-content">
            <div className="customs-content-table">
                {this.state.bookings.map((awb) => {
                    return <div key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                    className="customs-awb-card">
                        <div className="customs-awb-card-awb">{awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}</div>
                        <div className="customs-awb-card-route">
                            {awb["iata:booking:transportMovement"]["iata:transportMovement:departureLocation"]["iata:location:code"]}
                            →
                            {awb["iata:booking:transportMovement"]["iata:transportMovement:arrivalLocation"]["iata:location:code"]}
                        </div>
                        <div className="customs-awb-card-flight">{awb["iata:booking:transportMovement"]["iata:bookingSegment:preferredTransportId"]}</div>
                        <div className="customs-awb-card-datetime">{awb["iata:booking:transportMovement"]["iata:movementTimes:movementTimestamp"]}</div>
                        <div className="customs-awb-card-buttons">
                            <button>OK</button>
                            <button>DNL</button>
                            <button>RFI</button>
                            <button>RFS</button>
                        </div>
                        <div className="customs-awb-card-stage">{awb["iata:bookingOption:shipmentSecurityStatus"]}</div>
                        <div className="customs-awb-card-reason">
                            <input type="text"></input>
                            <button>Send</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default CustomsContent;