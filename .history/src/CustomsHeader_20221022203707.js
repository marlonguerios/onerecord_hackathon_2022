import React, { Component } from "react";
import customsStyles from './Customs.css';

class CustomsHeader extends Component {
    render() {
        return <div id={customsStyles.customsHeader}>
            <h3 className="customs-header-text">A3C - Advance Cargo Customs Clearance </h3>
        </div>
    }
}

export default CustomsHeader;