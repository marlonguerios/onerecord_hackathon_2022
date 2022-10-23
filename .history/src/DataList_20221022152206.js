import React, { Component } from "react";

class DataList extends Component {

    datalistId = "TheDatabase"

    state = {
        loading: true,
        data: []
    }

    componentDidMount() {
        let datalist = localStorage.getItem(this.datalistId);
        let bookings = (lsItem == null) ? new Array() : JSON.parse(datalist);
    }

    render() {
        return this.props.children(this.state);
    }

}