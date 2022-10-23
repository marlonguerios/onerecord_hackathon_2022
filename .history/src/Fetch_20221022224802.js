import React, { Component } from "react";

class Fetch extends Component {

    datalistId = "TheDatabase";

    state = {
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
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC103",
                "iata:movementTimes:movementTimestamp": "2022-11-05T19:43:29.194Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01412642298"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC841",
                "iata:movementTimes:movementTimestamp": "2022-11-03T07:16:45.535Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01411313525"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC61",
                "iata:movementTimes:movementTimestamp": "2022-11-07T01:46:50.366Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01410406471"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC100",
                "iata:movementTimes:movementTimestamp": "2022-11-11T04:27:22.501Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0146038502"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC470",
                "iata:movementTimes:movementTimestamp": "2022-11-11T23:38:14.716Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0146138246"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC743",
                "iata:movementTimes:movementTimestamp": "2022-11-21T00:19:10.571Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01415799268"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC375",
                "iata:movementTimes:movementTimestamp": "2022-10-27T10:24:24.228Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01411036908"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC303",
                "iata:movementTimes:movementTimestamp": "2022-11-01T12:17:31.703Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0149557484"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC247",
                "iata:movementTimes:movementTimestamp": "2022-10-23T22:36:43.036Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01421130033"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC985",
                "iata:movementTimes:movementTimestamp": "2022-11-11T08:09:40.359Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01411808565"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC116",
                "iata:movementTimes:movementTimestamp": "2022-10-30T15:50:37.408Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0143953989"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC802",
                "iata:movementTimes:movementTimestamp": "2022-11-21T05:49:29.381Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01414905727"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC476",
                "iata:movementTimes:movementTimestamp": "2022-11-07T21:03:35.625Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01415372130"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC157",
                "iata:movementTimes:movementTimestamp": "2022-11-07T07:07:34.853Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01416901177"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC159",
                "iata:movementTimes:movementTimestamp": "2022-11-14T13:08:23.080Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0149202878"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC799",
                "iata:movementTimes:movementTimestamp": "2022-11-23T23:56:44.690Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0149314325"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC35",
                "iata:movementTimes:movementTimestamp": "2022-11-01T14:31:17.196Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "014324731"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC521",
                "iata:movementTimes:movementTimestamp": "2022-11-11T07:17:31.124Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01422715526"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC295",
                "iata:movementTimes:movementTimestamp": "2022-11-20T18:37:43.250Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01421074091"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC376",
                "iata:movementTimes:movementTimestamp": "2022-11-02T16:20:01.815Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01415934936"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC192",
                "iata:movementTimes:movementTimestamp": "2022-10-30T22:12:41.558Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0147407196"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC402",
                "iata:movementTimes:movementTimestamp": "2022-11-18T12:00:01.619Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0141716601"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC257",
                "iata:movementTimes:movementTimestamp": "2022-10-27T04:41:51.154Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01414710733"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC705",
                "iata:movementTimes:movementTimestamp": "2022-11-22T12:52:01.530Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01420595003"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC407",
                "iata:movementTimes:movementTimestamp": "2022-11-04T12:49:55.302Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01419253672"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC185",
                "iata:movementTimes:movementTimestamp": "2022-11-04T10:29:27.491Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01421217730"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC401",
                "iata:movementTimes:movementTimestamp": "2022-11-15T20:29:00.086Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01414229124"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC21",
                "iata:movementTimes:movementTimestamp": "2022-11-24T04:18:58.690Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01418570742"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC86",
                "iata:movementTimes:movementTimestamp": "2022-11-07T22:35:37.893Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01417488365"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC954",
                "iata:movementTimes:movementTimestamp": "2022-11-09T13:44:35.711Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0143927185"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC824",
                "iata:movementTimes:movementTimestamp": "2022-11-22T11:29:42.857Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01418500613"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC147",
                "iata:movementTimes:movementTimestamp": "2022-11-23T10:37:25.138Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01418115768"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC283",
                "iata:movementTimes:movementTimestamp": "2022-11-07T03:39:21.265Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0149541937"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC985",
                "iata:movementTimes:movementTimestamp": "2022-11-09T15:48:42.003Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01419115614"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC487",
                "iata:movementTimes:movementTimestamp": "2022-11-06T16:53:15.649Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0143162847"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC132",
                "iata:movementTimes:movementTimestamp": "2022-11-12T22:07:36.270Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01414098891"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC959",
                "iata:movementTimes:movementTimestamp": "2022-11-06T17:31:05.857Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01422180140"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC439",
                "iata:movementTimes:movementTimestamp": "2022-11-17T15:50:29.403Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0148416168"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC566",
                "iata:movementTimes:movementTimestamp": "2022-11-24T12:56:55.236Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0146791313"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC828",
                "iata:movementTimes:movementTimestamp": "2022-11-16T13:45:42.961Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01413646254"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC971",
                "iata:movementTimes:movementTimestamp": "2022-11-21T03:34:46.587Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01422326907"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC9",
                "iata:movementTimes:movementTimestamp": "2022-11-01T07:20:10.400Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0142736566"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC687",
                "iata:movementTimes:movementTimestamp": "2022-11-23T19:26:37.737Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0141556023"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC10",
                "iata:movementTimes:movementTimestamp": "2022-11-20T10:46:33.366Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "014726791"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC160",
                "iata:movementTimes:movementTimestamp": "2022-10-25T00:11:10.047Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "LHR",
                  "iata:country:countryCode": "GB"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01422241729"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC779",
                "iata:movementTimes:movementTimestamp": "2022-11-22T10:43:14.465Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYZ",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0145629018"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC522",
                "iata:movementTimes:movementTimestamp": "2022-11-18T19:25:27.180Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "014698808"
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
                "iata:country:countryCode": "GB",
                "iata:address:cityName": "London",
                "iata:address:postalCode": "TW14 8EO",
                "iata:address:street": "Logistics Rd.",
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC745",
                "iata:movementTimes:movementTimestamp": "2022-10-31T11:39:57.434Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YYC",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01421021861"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "NCR",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC460",
                "iata:movementTimes:movementTimestamp": "2022-11-08T22:53:54.420Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "FRA",
                  "iata:country:countryCode": "DE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01419623033"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "London Logistics Inc"
              },
              "iata:booking:freightForwarder": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:shipper": {
                "iata:country:countryCode": "CA",
                "iata:address:cityName": "CALGARY",
                "iata:address:postalCode": "E1E 4F4",
                "iata:address:street": "Main St",
                "iata:company:companyName": "Calgary Logistics Inc"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "NOT A BOMB",
                "iata:volumetricWeight:chargeableWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalGrossWeight": {
                  "iata:value:unit": "KG",
                  "iata:value:value": 210
                },
                "iata:shipment:totalPieceCount": "1"
              },
              "iata:booking:transportMovement": {
                "iata:bookingSegment:preferredTransportId": "AC625",
                "iata:movementTimes:movementTimestamp": "2022-10-30T01:22:57.439Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YUL",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0142204300"
              }
            }
          ]
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