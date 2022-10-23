import React, { Component } from "react";
import './Customs.css';
import CustomsHeader from "./CustomsHeader";
import CustomsContent from "./CustomsContent";

class CustomsDashboard extends Component {

    datalistId = "TheDatabase";
    constructor(props) { 
        super(props) 
        // console.log(this.props.data);
        // this.localStorageUpdated = this.localStorageUpdated.bind(this)  
        this.state = {
            bookings: this.props.data 
        }
    }

    componentDidMount() {  
        // window.addEventListener('storage', this.localStorageUpdated) 
    }

    // localStorageUpdated() { 
    //     let datalist = localStorage.getItem(this.datalistId);
    //     let bookings =  JSON.parse(datalist);
    //     setTimeout(function () { 
    //         this.setState({ bookings: bookings })
    //       }.bind(this), 1000)
    // }

    render() {
        return <div className="customs-page"> 
            <CustomsHeader />
            <CustomsContent bookings={ this.state.bookings } />
            <footer id="customs-footer">&copy; 2022 YourTypicalGovernmentContractor Inc - OneRecord</footer>
        </div>
    }

}

export default CustomsDashboard