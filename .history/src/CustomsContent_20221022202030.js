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
                    {this.state.bookings.map((awb) => {
                        return <div key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>
                            {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                            &nbsp;{awb["iata:bookingOption:bookingStatus"]}
                        </div>
                    })}
        </div>
    }
}

export default CustomsContent;