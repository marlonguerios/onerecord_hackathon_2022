import React, { Component } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    fontFamily: 'monospace',
    fontSize: 233,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(230,230,230)', '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.20),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    fontSize: 10,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

class Warehouse extends Component {
    datalistId = "TheDatabase";

    a = 1;
    status_codes = ['CLR', 'DNL', 'RFI', 'RFS', 'WTG'];
    status_colors = {
        'CLR': alpha('rgb(48,192,58)', this.a),
        'DNL': alpha('rgb(240,20,40)', this.a),
        'RFI': alpha('rgb(255,165,0)', this.a),
        'RFS': alpha('rgb(255,165,0)', this.a),
        'WTG': alpha('rgb(7,98,235)', this.a),
    };

    constructor(props) {
        super(props);
        this.localStorageUpdated = this.localStorageUpdated.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.updateBooking = this.updateBooking.bind(this)
        this.state = {

            openModal: false,

            bookings: this.props.data,
            gridRows: [],
            gridColumns: [
                {
                    field: "id", headerName: "AWB #", width: 200,
                    renderCell: (record) => {
                        return (
                            <>
                                <div className="table__cell--pilot">
                                    {record.row.id}
                                </div>
                            </>
                        )
                    }
                },
                {
                    field: "col1", headerName: "Customs Status", width: 200,
                    renderCell: (record) => {
                        return (
                            <>
                                <div>{record.row.col1 == "NEW" ? "Pending" : record.row.col1}</div>
                                <div>
                                    <small>&nbsp; {record.row.customsNote}</small>
                                </div>
                            </>
                        )
                    }
                },
                { field: "col2", headerName: "Flight #", width: 150 },
                { field: "col3", headerName: "Departure Time", width: 250 },
                { field: "col4", headerName: "O & D", width: 135 },
                {
                    field: "actions", headerName: "Actions", width: 120,
                    renderCell: (record) => {
                        return (
                            <>
                                <select onChange={this.updateBooking} data-awb={record.row.id} value={record.row.stage} >
                                    <option></option>
                                    <option value="Received" >Received</option>
                                    <option value="Screened"  >Screened</option>
                                    <option value="Info Provided" >Info Provided</option>
                                    <option value="Ready to load" >Ready</option>
                                </select>
                            </>
                        )
                    }
                }
            ]
        }
    }

    handleOpen(e) {
        console.log(e)
        this.setState({
            openModal: true
        })
    }

    handleClose(e) {
        this.setState({
            openModal: false
        })

    }

    updateBooking(e) {
        console.log(e)
        const clickedAwb = e.target.dataset.awb;
        let bookings = JSON.parse(JSON.stringify(this.state.bookings))
        let awbToUpdate = bookings.filter((awb) => clickedAwb == awb["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"]);
        awbToUpdate[0]["iata:bookingOption:shipmentSecurityStatus"] = e.target.value;
        awbToUpdate[0]["iata:customsInfo:customsClearanceStatus"] = "NEW"
        this.saveToStore(bookings);
        this.reloadGridRows(bookings);
    }

    saveToStore(bookings) {
        localStorage.setItem(this.datalistId, JSON.stringify(bookings));
    }

    componentDidMount() {
        window.addEventListener('storage', this.localStorageUpdated)
        this.reloadGridRows(this.state.bookings)
    }

    reloadGridRows(bookings) {
        this.setState({
            bookings: bookings,
            gridRows: bookings.map((record) => {
                const tp = record["iata:booking:transportMovement"]
                const arrival = "iata:transportMovement:arrivalLocation"
                const departure = "iata:transportMovement:departureLocation"
                const code = "iata:location:code"
                return {
                    id: record["iata:booking:waybillNumber"]["iata:waybill:waybillNumber"],
                    col1: record["iata:customsInfo:customsClearanceStatus"],
                    col2: tp["iata:bookingSegment:preferredTransportId"],
                    col3: tp["iata:movementTimes:movementTimestamp"],
                    col4: tp[departure][code] + "???" + tp[arrival][code],
                    customsNote: record["iata:customsInfo:customsInfoNote"],
                    stage: record["iata:bookingOption:shipmentSecurityStatus"]
                }
            })
        })
    }

    localStorageUpdated() {
        let datalist = localStorage.getItem(this.datalistId);
        let bookings = JSON.parse(datalist);
        setTimeout(function () {
            this.reloadGridRows(bookings)
        }.bind(this), 1000)
    }

    randomIntFromInterval(max) {
        return Math.floor(Math.random() * max)
    }

    render() {
        return <>
            <AppBar sx={{ bgcolor: "white" }} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            &#60;/&#62;BORDERLESS
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"

                                color="inherit"
                            >
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        </Box>

                        {/* <Button onClick={handleOpenBooking} variant="outlined" sx={{ p: 1, backgroundColor: 'rgb(240,240,240)', color: 'black', border: 'none' }}>
                            Create Booking
                        </Button> */}

                        {/* <Modal
                            open={Booking}
                            onClose={handleCloseBooking}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            BackdropProps={{ style: { opacity: 0.5 } }}
                        >
                            <Box component="form"
                                noValidate
                                autoComplete="off"
                                sx={styleModal}>
                                <Typography align="center" id="modal-modal-title" variant="h5" component="h2">
                                    Create a Booking
                                </Typography>
                                <div>
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Origin"
                                        label="Origin"
                                    //defaultValue="YUL"
                                    //helperText="Shipping origine"
                                    />
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Destination"
                                        label="Destination"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                </div>

                                <div>
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Flight"
                                        label="Flight #"
                                    //defaultValue="YUL"
                                    //helperText="Shipping origine"
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DesktopDatePicker
                                            label="Flight Date"
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} sx={{ width: '41.5%', margin: 2 }} />}
                                        />
                                    </LocalizationProvider>
                                </div>

                                <div>
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Weight"
                                        label="Weight (KG)"
                                    //defaultValue="YUL"
                                    //helperText="Shipping origine"
                                    />
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Volume"
                                        label="Volume (CM)"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                </div>

                                <div>
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="# of pieces"
                                        label="# of pieces"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Cargo Desc"
                                        label="Cargo Desc"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                </div>

                                <div>
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Shipper1"
                                        label="Shipper Name"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                    <TextField sx={{ margin: 2 }}
                                        color="info"
                                        id="Shipper2"
                                        label="Shipper Address"
                                    //defaultValue="FRA"
                                    //helperText="Shipping destination"
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center' }} >
                                    <Button onClick={handleCloseBooking} variant="outlined" color="info" sx={{ fontSize: 15, p: 1, backgroundColor: 'White', color: 'blue' }}>
                                        Book
                                    </Button>
                                </div>
                            </Box>
                        </Modal> */}

                        <Search sx={{ fontSize: 10 }}>
                            <SearchIconWrapper >
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="AWB Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>


                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {this.status_codes.map((status) => (
                    <Button
                        key={status}
                        variant="outlined"
                        sx={{ backgroundColor: this.status_colors[status], fontSize: 15, my: 2, color: 'white', display: 'flex', marginLeft: 2, marginRight: 2, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}
                    >
                        {status + " - " + this.randomIntFromInterval(9)}
                    </Button>
                ))}
            </Box>
            <div style={{ backgroundColor: "white", height: "100%", padding: "2rem 10rem 0rem 10rem" }} >
                <div style={{ height: 700, width: "1200px" }}>
                    <DataGrid sx={{ marginTop: 0 }} rows={this.state.gridRows} columns={this.state.gridColumns} />
                </div>
            </div>
        </>
    }
}

export default Warehouse;