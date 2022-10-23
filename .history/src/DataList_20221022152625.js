import React, { Component } from "react";

class DataList extends Component {

    datalistId = "TheDatabase"

    state = {
        loading: true,
        data: []
    }

    storeInitialList() {
        console.log("storing initial list");
    }

    componentDidMount() {
        let datalist = localStorage.getItem(this.datalistId);
        if (datalist == null) {
            // save initial list
        }
        // let bookings = (lsItem == null) ? new Array() : JSON.parse(datalist);
        // this.setState({ loading: false, data: bookings })
    }

    render() {
        return this.props.children(this.state);
    }

}