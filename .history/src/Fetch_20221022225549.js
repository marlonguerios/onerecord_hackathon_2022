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
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC398",
                "iata:movementTimes:movementTimestamp": "2022-10-29T20:40:00.064Z",
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
                "iata:waybill:waybillNumber": "01421855865"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC429",
                "iata:movementTimes:movementTimestamp": "2022-11-01T12:26:17.624Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01419462004"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
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
                "iata:bookingSegment:preferredTransportId": "AC141",
                "iata:movementTimes:movementTimestamp": "2022-11-13T05:12:17.246Z",
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
                "iata:waybill:waybillNumber": "0146364851"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
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
                "iata:bookingSegment:preferredTransportId": "AC454",
                "iata:movementTimes:movementTimestamp": "2022-11-13T09:58:06.328Z",
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
                "iata:waybill:waybillNumber": "01410652507"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC307",
                "iata:movementTimes:movementTimestamp": "2022-11-04T17:47:32.575Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0144892906"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
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
                "iata:bookingSegment:preferredTransportId": "AC208",
                "iata:movementTimes:movementTimestamp": "2022-11-20T06:19:12.011Z",
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
                "iata:waybill:waybillNumber": "0149734048"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC813",
                "iata:movementTimes:movementTimestamp": "2022-11-22T08:17:33.095Z",
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
                "iata:waybill:waybillNumber": "01412690967"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC141",
                "iata:movementTimes:movementTimestamp": "2022-11-03T18:31:30.411Z",
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
                "iata:waybill:waybillNumber": "01410050501"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC683",
                "iata:movementTimes:movementTimestamp": "2022-11-02T05:42:10.700Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0146796661"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC422",
                "iata:movementTimes:movementTimestamp": "2022-11-04T14:54:01.998Z",
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
                "iata:waybill:waybillNumber": "0142001858"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC249",
                "iata:movementTimes:movementTimestamp": "2022-11-24T15:24:12.263Z",
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
                "iata:waybill:waybillNumber": "0145936296"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC851",
                "iata:movementTimes:movementTimestamp": "2022-11-14T04:49:35.427Z",
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
                "iata:waybill:waybillNumber": "01420725575"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC305",
                "iata:movementTimes:movementTimestamp": "2022-10-25T20:44:26.540Z",
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
                "iata:waybill:waybillNumber": "01415820417"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC436",
                "iata:movementTimes:movementTimestamp": "2022-11-13T13:15:30.115Z",
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
                "iata:waybill:waybillNumber": "01415971089"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC325",
                "iata:movementTimes:movementTimestamp": "2022-11-23T05:10:49.459Z",
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
                "iata:waybill:waybillNumber": "0147817101"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC344",
                "iata:movementTimes:movementTimestamp": "2022-11-01T17:56:39.272Z",
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
                "iata:waybill:waybillNumber": "01418934704"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC301",
                "iata:movementTimes:movementTimestamp": "2022-11-23T09:12:47.855Z",
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
                "iata:waybill:waybillNumber": "01412698464"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC527",
                "iata:movementTimes:movementTimestamp": "2022-11-05T18:27:54.388Z",
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
                "iata:waybill:waybillNumber": "0149112107"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC778",
                "iata:movementTimes:movementTimestamp": "2022-11-10T18:12:11.914Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0141593726"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC117",
                "iata:movementTimes:movementTimestamp": "2022-11-14T23:24:29.221Z",
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
                "iata:waybill:waybillNumber": "0145592552"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
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
                "iata:bookingSegment:preferredTransportId": "AC505",
                "iata:movementTimes:movementTimestamp": "2022-11-09T22:51:12.759Z",
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
                "iata:waybill:waybillNumber": "01420371043"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC427",
                "iata:movementTimes:movementTimestamp": "2022-11-19T20:38:54.973Z",
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
                "iata:waybill:waybillNumber": "0148601809"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
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
                "iata:bookingSegment:preferredTransportId": "AC759",
                "iata:movementTimes:movementTimestamp": "2022-11-23T14:43:42.981Z",
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
                "iata:waybill:waybillNumber": "0149563437"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC852",
                "iata:movementTimes:movementTimestamp": "2022-11-05T13:20:28.701Z",
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
                "iata:waybill:waybillNumber": "0149722357"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC93",
                "iata:movementTimes:movementTimestamp": "2022-11-07T23:16:53.711Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "CDG",
                  "iata:country:countryCode": "FR"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YVR",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01414194177"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC361",
                "iata:movementTimes:movementTimestamp": "2022-11-24T14:06:06.026Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01412301857"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC751",
                "iata:movementTimes:movementTimestamp": "2022-11-10T14:04:46.356Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01417863681"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC196",
                "iata:movementTimes:movementTimestamp": "2022-10-25T09:29:07.514Z",
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
                "iata:waybill:waybillNumber": "01420264810"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC861",
                "iata:movementTimes:movementTimestamp": "2022-11-06T01:04:54.729Z",
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
                "iata:waybill:waybillNumber": "01421030304"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC463",
                "iata:movementTimes:movementTimestamp": "2022-11-07T22:47:27.504Z",
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
                "iata:waybill:waybillNumber": "0142429327"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC339",
                "iata:movementTimes:movementTimestamp": "2022-11-01T14:02:16.298Z",
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
                "iata:waybill:waybillNumber": "01416748213"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC253",
                "iata:movementTimes:movementTimestamp": "2022-11-15T21:30:46.972Z",
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
                "iata:waybill:waybillNumber": "01413571588"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:movementTimes:movementTimestamp": "2022-11-14T15:35:37.222Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01420243146"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC454",
                "iata:movementTimes:movementTimestamp": "2022-11-08T16:30:28.835Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01420711397"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC651",
                "iata:movementTimes:movementTimestamp": "2022-11-07T09:47:22.647Z",
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
                "iata:waybill:waybillNumber": "0148020018"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC410",
                "iata:movementTimes:movementTimestamp": "2022-11-22T19:01:42.050Z",
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
                "iata:waybill:waybillNumber": "01421680195"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC268",
                "iata:movementTimes:movementTimestamp": "2022-11-06T22:23:17.146Z",
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
                "iata:waybill:waybillNumber": "01422313837"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC792",
                "iata:movementTimes:movementTimestamp": "2022-11-10T23:07:52.754Z",
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
                "iata:waybill:waybillNumber": "014771522"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC885",
                "iata:movementTimes:movementTimestamp": "2022-11-10T10:50:06.612Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BCN",
                  "iata:country:countryCode": "ES"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "0144329199"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC643",
                "iata:movementTimes:movementTimestamp": "2022-11-07T02:18:43.504Z",
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
                "iata:waybill:waybillNumber": "01421105116"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC864",
                "iata:movementTimes:movementTimestamp": "2022-11-21T20:06:34.131Z",
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
                "iata:waybill:waybillNumber": "01413968596"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC536",
                "iata:movementTimes:movementTimestamp": "2022-11-14T06:26:51.106Z",
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
                "iata:waybill:waybillNumber": "0142838668"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:movementTimes:movementTimestamp": "2022-11-12T08:24:53.260Z",
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
                "iata:waybill:waybillNumber": "01420282326"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC435",
                "iata:movementTimes:movementTimestamp": "2022-11-22T13:04:48.376Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01415157928"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC595",
                "iata:movementTimes:movementTimestamp": "2022-11-07T12:36:42.078Z",
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
                "iata:waybill:waybillNumber": "01419063573"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Screened",
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
                "iata:bookingSegment:preferredTransportId": "AC919",
                "iata:movementTimes:movementTimestamp": "2022-11-24T22:15:45.584Z",
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
                "iata:waybill:waybillNumber": "01418524118"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC685",
                "iata:movementTimes:movementTimestamp": "2022-11-10T23:12:43.864Z",
                "iata:transportMovement:arrivalLocation": {
                  "iata:location:code": "BRU",
                  "iata:country:countryCode": "BE"
                },
                "iata:transportMovement:departureLocation": {
                  "iata:location:code": "YEG",
                  "iata:country:countryCode": "CA"
                }
              },
              "iata:booking:waybillNumber": {
                "iata:waybill:waybillNumber": "01419470433"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "New Booking",
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
                "iata:bookingSegment:preferredTransportId": "AC969",
                "iata:movementTimes:movementTimestamp": "2022-11-20T02:24:36.056Z",
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
                "iata:waybill:waybillNumber": "01417802957"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
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
                "iata:bookingSegment:preferredTransportId": "AC150",
                "iata:movementTimes:movementTimestamp": "2022-11-23T14:42:45.127Z",
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
                "iata:waybill:waybillNumber": "01414803853"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "UU",
              "iata:bookingOption:shipmentSecurityStatus": "Sealed",
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
                "iata:bookingSegment:preferredTransportId": "AC845",
                "iata:movementTimes:movementTimestamp": "2022-11-20T11:51:58.996Z",
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
                "iata:waybill:waybillNumber": "01416237116"
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