import React, { Component } from "react";
import './Customs.css';

class CustomsContent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            bookings: this.props.data
        }
    }
    render() {
        return <div className="customs-content">
                <ul>
                    {this.state.bookings.map((awb) => {
                        return <li key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>
                            {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                            &nbsp;{awb["iata:bookingOption:bookingStatus"]}
                        </li>
                    })}
                </ul>
        </div>
    }
}

export default CustomsContent;