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

class Warehouse extends Component {
    datalistId = "TheDatabase";


    const styleModal = {
        position: 'absolute' as 'absolute',
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

    constructor(props) {
        super(props);
        this.localStorageUpdated = this.localStorageUpdated.bind(this)
        this.state = {
            bookings: this.props.data
        }
    }

    saveToStore(bookings) {
        localStorage.setItem(this.datalistId, JSON.stringify(bookings));
    }

    componentDidMount() {
        window.addEventListener('storage', this.localStorageUpdated)
    }

    localStorageUpdated() {
        let datalist = localStorage.getItem(this.datalistId);
        let bookings = JSON.parse(datalist);
        setTimeout(function () {
            this.setState({ bookings: bookings })
        }.bind(this), 1000)
    }

    render() {
        return <div>
            hey
        </div>
    }

}

export default Warehouse;