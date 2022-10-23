import React, { Component } from "react";

class Fetch extends Component {

    datalistId = "TheDatabase";

    state = {
        data: []
    }

    storeInitialList() {
        console.log("storing initial list");
        const dataToStore = 
        localStorage.setItem(this.datalistId, JSON.stringify(dataToStore));
        console.log("data stored!");
    }

    componentDidMount() {
        let datalist = localStorage.getItem(this.datalistId);
        if (datalist == null) {
            // save initial list
            this.storeInitialList();
            datalist = localStorage.getItem(this.datalistId);
        } else {
            console.log("Loading pre-existing data");
        }
        let bookings = JSON.parse(datalist);
        // console.log(bookings);
        this.setState({ loading: false, data: bookings })
    }

    render() {
        return this.props.children(this.state);
    }

}

export default Fetch;