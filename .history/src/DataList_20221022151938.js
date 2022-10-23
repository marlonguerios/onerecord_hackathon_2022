import React, { Component } from "react";

class DataList extends Component {
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