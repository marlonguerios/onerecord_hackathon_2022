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
        this.setStatusWithReason = this.setStatusWithReason.bind(this);
        this.setFilterByStage = this.setFilterByStage.bind(this);
        this.state = {
            bookings: this.props.bookings,
            filterByStage: null
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
        awbBookings.awb["iata:customsInfo:customsClearanceStatus"] = "RFI";
        this.showReasonComponents(awbBookings);
        this.setState({
            bookings: awbBookings.bookings
        })
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

    showReasonComponents(awbBookings) {
        let awbNumber = awbBookings.awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]
        document.getElementById(`card-reason-${awbNumber}`).style.display = "initial";
        document.getElementById(`card-reason-button-${awbNumber}`).style.display = "initial";
        document.getElementById(`card-reason-${awbNumber}`).focus()
    }

    setStatusWithReason(e) {
        let awbBookings = this.getClickedAwb(e)
        let awbNumber = awbBookings.awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]
        awbBookings.awb["iata:customsInfo:customsInfoNote"] = document.getElementById(`card-reason-${awbNumber}`).value
        this.update(awbBookings)
    }

    shouldInclude(awb) {
        return (this.state.filterByStage == null ||  awb["iata:bookingOption:shipmentSecurityStatus"] == this.state.filterByStage) && awb["iata:customsInfo:customsClearanceStatus"] == "NEW"
            || (awb["iata:customsInfo:customsClearanceStatus"] == "RFI" &&
                awb["iata:customsInfo:customsInfoNote"] == "")
    }

    setFilterByStage(e) {
        let stage = e.target.dataset.stage;
        console.log(stage);
    }

    countByStage(stage) {
        return this.state.bookings.filter((awb) => awb["iata:bookingOption:shipmentSecurityStatus"] == stage).length;
    }

    render() {
        return <div id="customs-content">
            <div className="customs-content-stats">
                <div className="customs-content-stats-card customs-content-stats-card--newbooking" onClick={this.setFilterByStage} data-stage="New Booking">{this.countByStage("New Booking")}<br />New Booking</div>
                <div className="customs-content-stats-card customs-content-stats-card--received"  onClick={this.setFilterByStage} data-stage="Received">{this.countByStage("Received")}<br />Received at Warehouse</div>
                <div className="customs-content-stats-card customs-content-stats-card--screened">{this.countByStage("Screened")}<br />Screened</div>
                <div className="customs-content-stats-card customs-content-stats-card--sealed">
                {this.countByStage("Sealed")}<br />
                    Sealed
                </div>
                <div className="customs-content-stats-card customs-content-stats-card--readytoload">
                {this.countByStage("Ready to load")}<br />
                    Ready to Load
                </div>
            </div>
            <div className="customs-content-table">
                {this.state.bookings.filter((awb) => this.shouldInclude(awb))
                    .map((awb) => {
                        return <div key={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}
                            className="customs-awb-card">
                            <div className="customs-awb-card-awb">{awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}</div>
                            <div className="customs-awb-card-route">
                                {awb["iata:booking:transportMovement"]["iata:transportMovement:departureLocation"]["iata:location:code"]}
                                →
                                {awb["iata:booking:transportMovement"]["iata:transportMovement:arrivalLocation"]["iata:location:code"]}
                            </div>
                            <div className="customs-awb-card-flight">✈ {awb["iata:booking:transportMovement"]["iata:bookingSegment:preferredTransportId"]}</div>
                            <div className="customs-awb-card-datetime">
                                🗓️ {awb["iata:booking:transportMovement"]["iata:movementTimes:movementTimestamp"]}</div>
                            <div className="customs-awb-card-buttons">
                                <button onClick={this.clearBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>OK</button>
                                <button onClick={this.dnlBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>DNL</button>
                                <button onClick={this.rfiBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>RFI</button>
                                <button onClick={this.rfsBooking} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>RFS</button>
                            </div>
                            <div className="customs-awb-card-stage">{awb["iata:bookingOption:shipmentSecurityStatus"]}</div>
                            <div className="customs-awb-card-description">
                                📦 {awb["iata:booking:shipmentDetails"]["iata:piece:goodsDescription"]}</div>
                            <div className="customs-awb-card-shipper">
                                S: {awb["iata:booking:shipper"]["iata:company:companyName"]}</div>
                            <div className="customs-awb-card-reason">
                                <input placeholder="Type your comments" type="text" id={"card-reason-" + awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}></input>
                                <button onClick={this.setStatusWithReason} data-awb={awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]} id={"card-reason-button-" + awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]}>Send</button>
                            </div>
                        </div>
                    })}
            </div>
        </div>
    }
}

export default CustomsContent;