import React, { Component } from "react";

class DataList extends Component {

    datalistId = "TheDatabase"

    state = {
        loading: true,
        data: []
    }

    componentDidMount() {
        let datalist = localStorage.getItem(this.datalistId);
        
    }

    render() {
        return this.props.children(this.state);
    }

}