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
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC512",
                "iata:movementTimes:movementTimestamp": "2022-11-23T00:13:11.334Z",
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
                "iata:waybill:waybillNumber": "01421876446"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Kuehne + Nagel"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:movementTimes:movementTimestamp": "2022-11-10T19:23:33.926Z",
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
                "iata:waybill:waybillNumber": "01422392279"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC194",
                "iata:movementTimes:movementTimestamp": "2022-11-06T08:38:53.787Z",
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
                "iata:waybill:waybillNumber": "01422130287"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:bookingSegment:preferredTransportId": "AC245",
                "iata:movementTimes:movementTimestamp": "2022-10-31T14:23:42.099Z",
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
                "iata:waybill:waybillNumber": "01421811929"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC14",
                "iata:movementTimes:movementTimestamp": "2022-11-16T07:49:24.602Z",
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
                "iata:waybill:waybillNumber": "01422734664"
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
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC309",
                "iata:movementTimes:movementTimestamp": "2022-11-19T01:28:52.001Z",
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
                "iata:waybill:waybillNumber": "01422607704"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC570",
                "iata:movementTimes:movementTimestamp": "2022-11-15T12:20:58.319Z",
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
                "iata:waybill:waybillNumber": "01422418747"
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:movementTimes:movementTimestamp": "2022-11-12T15:40:31.254Z",
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
                "iata:waybill:waybillNumber": "01422709361"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC152",
                "iata:movementTimes:movementTimestamp": "2022-11-11T16:30:25.501Z",
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
                "iata:waybill:waybillNumber": "01421928689"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Ceva Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC788",
                "iata:movementTimes:movementTimestamp": "2022-11-07T14:56:55.854Z",
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
                "iata:waybill:waybillNumber": "01422176667"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:bookingSegment:preferredTransportId": "AC920",
                "iata:movementTimes:movementTimestamp": "2022-11-22T14:47:21.699Z",
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
                "iata:waybill:waybillNumber": "01422716665"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Kuehne + Nagel"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC834",
                "iata:movementTimes:movementTimestamp": "2022-11-05T01:19:05.985Z",
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
                "iata:waybill:waybillNumber": "01422745788"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Sinotrans Ltd."
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Dangerous Goods",
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
                "iata:bookingSegment:preferredTransportId": "AC916",
                "iata:movementTimes:movementTimestamp": "2022-11-09T01:59:21.981Z",
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
                "iata:waybill:waybillNumber": "01422148666"
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
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Dangerous Goods",
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
                "iata:bookingSegment:preferredTransportId": "AC876",
                "iata:movementTimes:movementTimestamp": "2022-11-19T03:30:56.946Z",
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
                "iata:waybill:waybillNumber": "01421835127"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:movementTimes:movementTimestamp": "2022-11-11T03:40:27.925Z",
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
                "iata:waybill:waybillNumber": "01422043998"
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:bookingSegment:preferredTransportId": "AC811",
                "iata:movementTimes:movementTimestamp": "2022-11-14T13:08:08.126Z",
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
                "iata:waybill:waybillNumber": "01422337765"
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC516",
                "iata:movementTimes:movementTimestamp": "2022-11-16T05:15:59.627Z",
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
                "iata:waybill:waybillNumber": "01422147964"
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
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC622",
                "iata:movementTimes:movementTimestamp": "2022-11-15T06:50:24.731Z",
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
                "iata:waybill:waybillNumber": "01422342250"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC11",
                "iata:movementTimes:movementTimestamp": "2022-11-08T14:44:38.079Z",
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
                "iata:waybill:waybillNumber": "01421944003"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:movementTimes:movementTimestamp": "2022-11-04T22:51:48.992Z",
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
                "iata:waybill:waybillNumber": "01422433766"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:bookingSegment:preferredTransportId": "AC146",
                "iata:movementTimes:movementTimestamp": "2022-11-18T07:41:05.292Z",
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
                "iata:waybill:waybillNumber": "01421869510"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "DHL Supply Chaing and Global Forwarding"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC453",
                "iata:movementTimes:movementTimestamp": "2022-10-26T13:28:03.752Z",
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
                "iata:waybill:waybillNumber": "01422485835"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:bookingSegment:preferredTransportId": "AC312",
                "iata:movementTimes:movementTimestamp": "2022-11-12T02:26:54.478Z",
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
                "iata:waybill:waybillNumber": "01422524568"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC110",
                "iata:movementTimes:movementTimestamp": "2022-11-09T18:21:06.894Z",
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
                "iata:waybill:waybillNumber": "01421838625"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "Hellmann Worldwide logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:bookingSegment:preferredTransportId": "AC79",
                "iata:movementTimes:movementTimestamp": "2022-11-24T00:04:09.692Z",
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
                "iata:waybill:waybillNumber": "01422606926"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Hellmann Worldwide logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:movementTimes:movementTimestamp": "2022-11-15T07:41:00.930Z",
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
                "iata:waybill:waybillNumber": "01422177163"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC348",
                "iata:movementTimes:movementTimestamp": "2022-11-08T05:57:43.067Z",
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
                "iata:waybill:waybillNumber": "01422555930"
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC337",
                "iata:movementTimes:movementTimestamp": "2022-11-21T17:25:55.516Z",
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
                "iata:waybill:waybillNumber": "01421837836"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "Ceva Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC530",
                "iata:movementTimes:movementTimestamp": "2022-11-18T07:21:14.739Z",
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
                "iata:waybill:waybillNumber": "01421923350"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC224",
                "iata:movementTimes:movementTimestamp": "2022-11-23T17:08:26.876Z",
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
                "iata:waybill:waybillNumber": "01422563227"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC334",
                "iata:movementTimes:movementTimestamp": "2022-10-30T05:04:21.226Z",
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
                "iata:waybill:waybillNumber": "01422254953"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC927",
                "iata:movementTimes:movementTimestamp": "2022-11-20T15:54:15.824Z",
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
                "iata:waybill:waybillNumber": "01422632787"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Ceva Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Dangerous Goods",
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
                "iata:bookingSegment:preferredTransportId": "AC67",
                "iata:movementTimes:movementTimestamp": "2022-11-24T18:42:24.618Z",
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
                "iata:waybill:waybillNumber": "01422571101"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC596",
                "iata:movementTimes:movementTimestamp": "2022-11-18T05:43:15.135Z",
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
                "iata:waybill:waybillNumber": "01422428878"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "Hellmann Worldwide logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC681",
                "iata:movementTimes:movementTimestamp": "2022-11-10T04:48:04.999Z",
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
                "iata:waybill:waybillNumber": "01422040090"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC57",
                "iata:movementTimes:movementTimestamp": "2022-11-19T13:49:33.560Z",
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
                "iata:waybill:waybillNumber": "01422314174"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Ceva Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC50",
                "iata:movementTimes:movementTimestamp": "2022-11-03T18:38:47.205Z",
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
                "iata:waybill:waybillNumber": "01422509953"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Frozen food",
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
                "iata:bookingSegment:preferredTransportId": "AC732",
                "iata:movementTimes:movementTimestamp": "2022-11-23T13:28:53.751Z",
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
                "iata:waybill:waybillNumber": "01422727008"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:bookingSegment:preferredTransportId": "AC225",
                "iata:movementTimes:movementTimestamp": "2022-11-23T14:28:41.436Z",
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
                "iata:waybill:waybillNumber": "01422674829"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC309",
                "iata:movementTimes:movementTimestamp": "2022-11-05T22:48:16.445Z",
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
                "iata:waybill:waybillNumber": "01422165731"
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC756",
                "iata:movementTimes:movementTimestamp": "2022-11-03T00:17:01.261Z",
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
                "iata:waybill:waybillNumber": "01422088913"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "FC",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC310",
                "iata:movementTimes:movementTimestamp": "2022-11-13T18:25:12.473Z",
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
                "iata:waybill:waybillNumber": "01421852401"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "Ceva Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Dangerous Goods",
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
                "iata:bookingSegment:preferredTransportId": "AC370",
                "iata:movementTimes:movementTimestamp": "2022-11-07T00:45:55.983Z",
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
                "iata:waybill:waybillNumber": "01422052105"
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
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC207",
                "iata:movementTimes:movementTimestamp": "2022-11-19T23:21:26.279Z",
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
                "iata:waybill:waybillNumber": "01422703036"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Hellmann Worldwide logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC53",
                "iata:movementTimes:movementTimestamp": "2022-11-14T03:51:09.326Z",
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
                "iata:waybill:waybillNumber": "01422759101"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "Sinotrans Ltd."
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Dangerous Goods",
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
                "iata:bookingSegment:preferredTransportId": "AC485",
                "iata:movementTimes:movementTimestamp": "2022-11-19T18:53:45.330Z",
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
                "iata:waybill:waybillNumber": "01422227271"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "KK",
              "iata:bookingOption:shipmentSecurityStatus": "Ready to load",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Clothing",
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
                "iata:bookingSegment:preferredTransportId": "AC300",
                "iata:movementTimes:movementTimestamp": "2022-11-04T10:24:00.517Z",
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
                "iata:waybill:waybillNumber": "01422003867"
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC669",
                "iata:movementTimes:movementTimestamp": "2022-11-16T21:31:39.157Z",
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
                "iata:waybill:waybillNumber": "01421930354"
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
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC418",
                "iata:movementTimes:movementTimestamp": "2022-11-13T02:06:21.116Z",
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
                "iata:waybill:waybillNumber": "01422553869"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Josh Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC58",
                "iata:movementTimes:movementTimestamp": "2022-11-04T19:24:10.253Z",
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
                "iata:waybill:waybillNumber": "01422679032"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "DNL",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:bookingSegment:preferredTransportId": "AC126",
                "iata:movementTimes:movementTimestamp": "2022-11-08T06:54:41.661Z",
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
                "iata:waybill:waybillNumber": "01422616681"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Kuehne + Nagel"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC472",
                "iata:movementTimes:movementTimestamp": "2022-11-19T07:16:06.652Z",
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
                "iata:waybill:waybillNumber": "01421819981"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC677",
                "iata:movementTimes:movementTimestamp": "2022-11-04T15:23:17.147Z",
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
                "iata:waybill:waybillNumber": "01422665110"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Clothing",
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
                "iata:bookingSegment:preferredTransportId": "AC409",
                "iata:movementTimes:movementTimestamp": "2022-11-09T01:38:44.195Z",
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
                "iata:waybill:waybillNumber": "01422299636"
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
                "iata:company:companyName": "DB Schenker"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC251",
                "iata:movementTimes:movementTimestamp": "2022-11-02T04:41:30.753Z",
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
                "iata:waybill:waybillNumber": "01422245440"
              }
            },
            {
              "@context": {
                "iata": "https://onerecord.iata.org/"
              },
              "@type": "iata:Booking",
              "iata:bookingOption:bookingStatus": "QU",
              "iata:bookingOption:shipmentSecurityStatus": "Received",
              "iata:customsInfo:customsInfoNote": "",
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "Hellmann Worldwide logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC184",
                "iata:movementTimes:movementTimestamp": "2022-11-24T14:01:57.462Z",
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
                "iata:waybill:waybillNumber": "01422466454"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DHL Supply Chaing and Global Forwarding"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Furniture",
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
                "iata:bookingSegment:preferredTransportId": "AC627",
                "iata:movementTimes:movementTimestamp": "2022-11-10T23:29:46.848Z",
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
                "iata:waybill:waybillNumber": "01422442125"
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
              "iata:customsInfo:customsClearanceStatus": "RFS",
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
                "iata:company:companyName": "C.H. Robinson Worldwide"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Pharma",
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
                "iata:bookingSegment:preferredTransportId": "AC990",
                "iata:movementTimes:movementTimestamp": "2022-11-09T07:03:49.427Z",
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
                "iata:waybill:waybillNumber": "01422079132"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "DHL Supply Chaing and Global Forwarding"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:bookingSegment:preferredTransportId": "AC765",
                "iata:movementTimes:movementTimestamp": "2022-11-18T15:19:36.987Z",
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
                "iata:waybill:waybillNumber": "01421838699"
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
              "iata:customsInfo:customsClearanceStatus": "RFI",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "HUMAN BLOOD SAMPLES",
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
                "iata:bookingSegment:preferredTransportId": "AC574",
                "iata:movementTimes:movementTimestamp": "2022-11-05T07:15:50.087Z",
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
                "iata:waybill:waybillNumber": "01421952749"
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
              "iata:customsInfo:customsClearanceStatus": "WTG",
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
                "iata:company:companyName": "DSV Panalpina"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Chemicals",
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
                "iata:bookingSegment:preferredTransportId": "AC146",
                "iata:movementTimes:movementTimestamp": "2022-11-04T20:02:47.807Z",
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
                "iata:waybill:waybillNumber": "01422096930"
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
              "iata:customsInfo:customsClearanceStatus": "CLR",
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
                "iata:company:companyName": "Kerry Logistics"
              },
              "iata:booking:price": {
                "iata:price:grandTotal": 551
              },
              "iata:booking:shipmentDetails": {
                "iata:piece:goodsDescription": "Fresh Atlantic Salmon",
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
                "iata:movementTimes:movementTimestamp": "2022-11-08T06:30:55.127Z",
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
                "iata:waybill:waybillNumber": "01422425503"
              }
            }
          ]
        localStorage.setItem(this.datalistId, JSON.stringify(dataToStore));
        console.log("data stored!");
    }

    componentWillMount() {
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
        this.setState({ data: bookings })
    }

    render() {
        return this.props.children(this.state);
    }

}

export default Fetch;