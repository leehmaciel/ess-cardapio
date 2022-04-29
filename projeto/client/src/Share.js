import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import variables from './variables.json';

const Share = () => {

    let navigate = useNavigate ();

    const {register, handleSubmit} = useForm();
    const handleClose = () => {
        navigate("/");
    };

    const onSubmit = (values) => {
        Axios.post(variables.URL + "add", {
            name: values.name,
            price: values.price,
            description: values.description, 
        }).then((response) => {
                console.log(response);
                handleClose();
            });
    }

    return (

        <div>
            <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Share</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>

                        <h1> Share Icon here </h1>

                    </DialogContent>
    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" type="submit">Share</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default Share;