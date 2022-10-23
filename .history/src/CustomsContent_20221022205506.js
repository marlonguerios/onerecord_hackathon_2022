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
                        {awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                    </div>
                })}
            </div>
        </div>
    }
}

export default CustomsContent;