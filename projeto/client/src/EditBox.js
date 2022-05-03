import React, { useState } from "react";

import Axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from '@mui/material/MenuItem';
import TextField from "@material-ui/core/TextField";

import variables from './variables.json';

const EditBox = ({
    id,    
    category, 
    description, 
    name, 
    price,
    showCategories, setShowCategories,
    open, setOpen, 
    showItems, setShowItems}) => {

    const [newCategory, setNewCategory] = useState("");
    
    const [editValues, setEditValues] = useState({
        id: id,
        name: name,
        price: price,
        description: description,
    });

    const handleCategoryChange = (event) => {
        setNewCategory(event.target.value);
    };

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
        console.log(values);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditItem = () => {
        console.log(editValues);
        Axios.put(variables.URL + "edit", {
            id: editValues.id,
            category: newCategory,
            name: editValues.name,
            price: editValues.price,
            description: editValues.description,
      
          }).then(() => {
              setShowItems([]);
              handleClose();
          });
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                
                <DialogContent>

                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="name"
                        label="Name"
                        margin="dense"
                        type="text"
                        defaultValue={name}
                        onChange={handleChangeValues}
                    />

                    <TextField
                        autoFocus
                        fullWidth
                        required
                        id="price"
                        label="Price"
                        defaultValue={price}
                        onChange={handleChangeValues}
                    />

                    <TextField
                        fullWidth
                        required
                        id="category"
                        select
                        label="Category"
                        margin="dense"
                        defaultValue={category}
                        onChange={handleCategoryChange}
                    >
                        {showCategories.map((option) => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        autoFocus
                        fullWidth
                        multiline
                        id="description"
                        label="Description"
                        margin="dense"
                        minRows={4}
                        type="text"
                        defaultValue={description}
                        onChange={handleChangeValues}
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="primary" onClick={() => handleEditItem()}>Save</Button>
                </DialogActions>
        
            </Dialog>
        </div>
    );
}

export default EditBox;