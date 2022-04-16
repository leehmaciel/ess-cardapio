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

const Add = (props) => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (values) => {
      debugger
    Axios.post(variables.URL + "add", {
      name: values.name,
      price: values.price,
      description: values.description, 
    }).then((response) => {
        console.log(response);
        handleClose();
    });
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (

    <div>
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        helperText="Please enter the item name"
                        {...register("name")}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Price"
                        helperText="Please enter the item price"
                        {...register("price")}
                        />

                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        helperText="Please enter a description for the item"
                        {...register("description")}
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

export default Add;