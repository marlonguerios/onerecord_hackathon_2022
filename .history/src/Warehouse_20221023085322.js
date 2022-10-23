import React, { Component } from "react";

class Warehouse extends Component {
    datalistId = "TheDatabase";

    constructor(props) {
        super(props);
        this.localStorageUpdated = this.localStorageUpdated.bind(this)
        this.state = {
            bookings: this.props.data
        }
    }

    saveToStore(bookings) {
        localStorage.setItem(this.datalistId, JSON.stringify(bookings));
    }

    componentDidMount() {
        window.addEventListener('storage', this.localStorageUpdated)
    }

    localStorageUpdated() {
        let datalist = localStorage.getItem(this.datalistId);
        let bookings = JSON.parse(datalist);
        setTimeout(function () {
            this.setState({ bookings: bookings })
        }.bind(this), 1000)
    }

    render() {
        return <div>
            hey
        </div>
    }

}

export default Warehouse;