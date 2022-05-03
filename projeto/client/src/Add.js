import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Axios from "axios";

import Button from '@mui/material/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import variables from './variables.json';

const Add = (props) => {

    const {register, handleSubmit, reset} = useForm();
    const [category, setCategory] = useState("");
        
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const onSubmit = (values) => {
        Axios.post(variables.URL + "add", {
            name: values.name,
            price: values.price,
            category: values.category, 
            description: values.description,
        }).then((response) => {
                console.log(response);
                handleClose();
                reset();
            });
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
                            required
                            id="outlined-select-currency"
                            select
                            label="Category"
                            margin="dense"
                            onChange={handleChange}
                            {...register("category")}
                        >
                            {props.showCategories.map((option) => (
                                <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        
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