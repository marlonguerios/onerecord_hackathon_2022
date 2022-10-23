import React, { Component } from "react";

class DataList extends Component {

    datalistId = "TheDatabase"

    state = {
        loading: true,
        data: []
    }

    componentDidMount() {

    }

    render() {
        return this.props.children(this.state);
    }

}