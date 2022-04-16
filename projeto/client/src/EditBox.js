import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import variables from './variables.json';

const EditBox = (props) => {

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    price: props.price,
    description: props.description,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditItem = () => {
    Axios.put(variables.URL + "edit", {
      id: editValues.id,
      name: editValues.name,
      price: editValues.price,
      description: editValues.description,

    }).then(() => {
        props.setShowItems([]);
        handleClose();
    });
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            fullWidth
            required
            id="outlined-required"
            label="Name"
            margin="dense"
            type="text"
            defaultValue={props.name}
            onChange={handleChangeValues}
          />

          <TextField
            autoFocus
            fullWidth
            required
            id="outlined-required"
            label="Price"
            defaultValue={props.price}
            onChange={handleChangeValues}
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
            defaultValue={props.description}
            onChange={handleChangeValues}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleEditItem()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditBox;

