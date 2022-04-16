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
            <DialogTitle id="form-dialog-title">Add</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="outlined-required"
                        label="Name"
                        margin="dense"
                        type="text"
                        {...register("name")}
                        
                    />

                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="outlined-required"
                        label="Price"
                        {...register("price")}
                     />

                    <TextField
                        autoFocus
                        fullWidth
                        multiline
                        id="outlined-multiline-static"
                        label="Description"
                        margin="dense"
                        rows={4}
                        type="text"
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