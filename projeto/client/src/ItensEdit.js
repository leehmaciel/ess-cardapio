import React, {useState} from "react";
import Axios from "axios";
import EditBox from "./EditBox";
import variables from './variables.json';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

const ItensEdit = (props) => {

    const [open, setOpen] = useState(false);

    const handleDeleteItem = (props) => {
        Axios.delete(variables.URL + "delete/" + props.id).then(() => {
            props.setShowItems([]);
        });
    };

    return (
        <div className="Item">
            <EditBox 
                open={open}
                setOpen={setOpen}
                showItems={props.showItems} 
                setShowItems={props.setShowItems}
                id={props.id}
                name={props.name}
                price={props.price}
                description={props.description}
            />

            <Card sx={{ maxWidth: 345 }} key={props.id}>
                <CardMedia
                    component="img"
                    height="140"
                    image=" "
                    alt={props.name}
                />
                <CardContent>
                    <div className="ItemHeader">
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            R${props.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" startIcon={<Edit />} onClick={() => setOpen(true)}>Edit</Button>
                    <Button size="small" variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={() => handleDeleteItem(props)}>Delete</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ItensEdit;