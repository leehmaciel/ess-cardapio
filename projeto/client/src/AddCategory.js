import React from "react";
import {useForm} from "react-hook-form";
import Axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import variables from './variables.json';

const AddCategory = ({openAdd, setOpenAdd, showCategories, setShowCategories}) => {

    const {register, handleSubmit} = useForm();
    
    const handleClose = () => {
        setOpenAdd(false);
    };

    const onSubmit = (values) => {
        console.log(values.name);
        Axios.post(variables.URL + "addCategory", {
            name: values.name, 
        }).then((response) => {
                console.log(response);
                handleClose();
            });
    }

    return (

        <div>
            <Dialog open={openAdd} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>

                        <TextField
                            autoFocus
                            fullWidth
                            required
                            id="outlined-required"
                            label="Category name"
                            margin="dense"
                            type="text"
                            {...register("name")}
                        />

                    </DialogContent>
    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default AddCategory;