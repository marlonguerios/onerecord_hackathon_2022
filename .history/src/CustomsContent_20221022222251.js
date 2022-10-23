import React, { Component } from "react";
import './Customs.css';

class CustomsContent extends Component {
    datalistId = "TheDatabase";
    constructor(props) {
        super(props)
        this.clearBooking = this.clearBooking.bind(this);
        this.dnlBooking = this.dnlBooking.bind(this);
        this.rfiBooking = this.rfiBooking.bind(this);
        this.rfsBooking = this.rfsBooking.bind(this);
        this.state = {
            bookings: this.props.bookings
        }
    }

    getClickedAwb(e) {
        const clickedAwb = e.target.dataset.awb;
        let bookings = JSON.parse(JSON.stringify(this.state.bookings))
        let awbToUpdate = bookings.filter((awb) => clickedAwb == awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        return {
            awb: awbToUpdate[0],
            bookings: bookings
        }
    }

    saveToStore(bookings) {
        localStorage.setItem(this.datalistId, JSON.stringify(bookings));
    }

    clearBooking(e) {
        let awbBookings = this.getClickedAwb(e);
        awbBookings.awb["iata:customsInfo:customsClearanceStatus"] = "OK";
        this.update(awbBookings)
    }

    dnlBooking(e) {
        let awbBookings = this.getClickedAwb(e);
        awbBookings.awb["iata:customsInfo:customsClearanceStatus"] = "DNL";
        this.update(awbBookings)
    }

    rfiBooking(e) {
        let awbBookings = this.getClickedAwb(e);
        this.showReasonComponents(awbBookings.awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        awbBookings.awb["iata:customsInfo:customsClearanceStatus"] = "RFI";
        // this.update(awbBookings)
    }

    rfsBooking(e) {
        let awbBookings = this.getClickedAwb(e);
        awbBookings.awb["iata:customsInfo:customsClearanceStatus"] = "RFS";
        this.update(awbBookings)
    }

    update(awbBookings) {
        this.saveToStore(awbBookings.bookings)
        this.setState({
            bookings: awbBookings.bookings 
        })
    }

    showReasonComponents(awb) {
        document.getElementById(`card-reason-${awb}`).style.display = "initial";
        document.getElementById(`card-reason-button-${awb}`).style.display = "initial";
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
                            <button onClick={this.clearBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>OK</button>
                            <button onClick={this.dnlBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>DNL</button>
                            <button onClick={this.rfiBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>RFI</button>
                            <button onClick={this.rfsBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>RFS</button>
                        </div>
                        <div className="customs-awb-card-stage">{awb["iata:bookingOption:shipmentSecurityStatus"]}</div>
                        <div className="customs-awb-card-reason">
                            <input placeholder="Type your comments" type="text" id={ "card-reason-" + awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}></input>
                            <button id={"card-reason-button-" + awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>Send</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default CustomsContent;