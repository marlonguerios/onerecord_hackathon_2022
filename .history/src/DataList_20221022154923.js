import React, { Component } from "react";

class DataList extends Component {

    datalistId = "TheDatabase";
    datalist = null;

    state = {
        loading: true,
        data: []
    }

    storeInitialList() {
        console.log("storing initial list");

        const dataToStore = [
            {
                "@context": {
                    "iata": "https://onerecord.iata.org/"
                },
                "@type": "iata:Booking",
                "iata:bookingOption:bookingStatus": "KK",
                "iata:bookingOption:shipmentSecurityStatus": "SCR",
                "iata:customsInfo:customsInfoNote": "",
                "iata:customsInfo:customsClearanceStatus": "NEW",
                "iata:booking:carrier": {
                    "iata:carrier:airlineCode": "014",
                    "iata:carrier:airlinePrefix": "AC"
                },
                "iata:booking:carrierProductInfo": {
                    "iata:carrierProduct:productCode": "AFR",
                    "iata:carrierProduct:productDescription": "General"
                },
                "iata:booking:consignee": {
                    "iata:country:countryCode": "GB",
                    "iata:address:cityName": "London",
                    "iata:address:postalCode": "TW14 8EO",
                    "iata:address:street": "Logistics Rd.",
                    "iata:company:companyName": "London Logistics Inc",
                },
                "iata:booking:freightForwarder": {
                    "iata:country:countryCode": "CA",
                    "iata:address:cityName": "CALGARY",
                    "iata:address:postalCode": "E1E 4F4",
                    "iata:address:street": "Main St",
                    "iata:company:companyName": "Calgary Logistics Inc",
                },
                "iata:booking:shipper": {
                    "iata:country:countryCode": "CA",
                    "iata:address:cityName": "CALGARY",
                    "iata:address:postalCode": "E1E 4F4",
                    "iata:address:street": "Main St",
                    "iata:company:companyName": "Calgary Logistics Inc",
                },
                "iata:booking:price": {
                    "iata:price:grandTotal": 551.0
                },
                "iata:booking:shipmentDetails": {
                    "iata:piece:goodsDescription": "Hackathon Jackets",
                    "iata:volumetricWeight:chargeableWeight": {
                        "iata:value:unit": "KG",
                        "iata:value:value": 210.0
                    },
                    "iata:shipment:totalGrossWeight": {
                        "iata:value:unit": "KG",
                        "iata:value:value": 210.0
                    },
                    "iata:shipment:totalPieceCount": "1"
                },
                "iata:booking:transportMovement": {
                    "iata:bookingSegment:preferredTransportId": "AC851",
                    "iata:movementTimes:movementTimestamp": "2022-10-22 20:15:00",
                    "iata:transportMovement:arrivalLocation": {
                        "iata:location:code": "LHR",
                        "iata:country:countryCode": "GB",
                    },
                    "iata:transportMovement:departureLocation": {
                        "iata:location:code": "YYC",
                        "iata:country:countryCode": "CA",
                    }
                },
                "iata:booking:waybillNumber": {
                    "iata:waybill:waybillNumber": "01465614382"
                }
            },
            {
                "@context": {
                    "iata": "https://onerecord.iata.org/"
                },
                "@type": "iata:Booking",
                "iata:bookingOption:bookingStatus": "KK",
                "iata:bookingOption:shipmentSecurityStatus": "SCR",
                "iata:customsInfo:customsInfoNote": "",
                "iata:customsInfo:customsClearanceStatus": "NEW",
                "iata:booking:carrier": {
                    "iata:carrier:airlineCode": "014",
                    "iata:carrier:airlinePrefix": "AC"
                },
                "iata:booking:carrierProductInfo": {
                    "iata:carrierProduct:productCode": "AFR",
                    "iata:carrierProduct:productDescription": "General"
                },
                "iata:booking:consignee": {
                    "iata:country:countryCode": "DE",
                    "iata:address:cityName": "Frankfurt",
                    "iata:address:postalCode": "78748",
                    "iata:address:street": "Logisticstrasse 89",
                    "iata:company:companyName": "Fra Logistics GmbH",
                },
                "iata:booking:freightForwarder": {
                    "iata:country:countryCode": "CA",
                    "iata:address:cityName": "Toronto",
                    "iata:address:postalCode": "E1E 4F4",
                    "iata:address:street": "Main St",
                    "iata:company:companyName": "Toronto Logistics Inc",
                },
                "iata:booking:shipper": {
                    "iata:country:countryCode": "CA",
                    "iata:address:cityName": "Toronto",
                    "iata:address:postalCode": "E1E 4F4",
                    "iata:address:street": "Main St",
                    "iata:company:companyName": "Toronto Logistics Inc",
                },
                "iata:booking:price": {
                    "iata:price:grandTotal": 819.0
                },
                "iata:booking:shipmentDetails": {
                    "iata:piece:goodsDescription": "Hackathon Props",
                    "iata:volumetricWeight:chargeableWeight": {
                        "iata:value:unit": "KG",
                        "iata:value:value": 320.0
                    },
                    "iata:shipment:totalGrossWeight": {
                        "iata:value:unit": "KG",
                        "iata:value:value": 280.0
                    },
                    "iata:shipment:totalPieceCount": "1"
                },
                "iata:booking:transportMovement": {
                    "iata:bookingSegment:preferredTransportId": "AC863",
                    "iata:movementTimes:movementTimestamp": "2022-10-22 20:15:00",
                    "iata:transportMovement:arrivalLocation": {
                        "iata:location:code": "FRA",
                        "iata:country:countryCode": "DE",
                    },
                    "iata:transportMovement:departureLocation": {
                        "iata:location:code": "YYZ",
                        "iata:country:countryCode": "CA",
                    }
                },
                "iata:booking:waybillNumber": {
                    "iata:waybill:waybillNumber": "01465938082"
                }
            }
        ]




    }

    componentDidMount() {
        datalist = localStorage.getItem(this.datalistId);
        if (datalist == null) {
            // save initial list
            this.storeInitialList();
        }
        // let bookings = (lsItem == null) ? new Array() : JSON.parse(datalist);
        // this.setState({ loading: false, data: bookings })
    }

    render() {
        return this.props.children(this.state);
    }

}

export default DataList;