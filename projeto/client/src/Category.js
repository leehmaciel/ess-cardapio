import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import Axios from "axios";

import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import variables from './variables.json';

const Category = ({isMenu, isOpen, setOpen}) => {

    let navigate = useNavigate ();

    const [showCategories, setShowCategories] = useState();
    
    return ( 
        <div className="categories_body">

            <div className="categories-menu navigation">
                <AddCategory
                    open={open}
                    setOpen={setOpen}
                    showCategories={showCategories} 
                    setShowCategories={setShowCategories}
                />
                <Button variant="contained" size="small" onClick={() => {navigate("/edit");}}>Back</Button>
                <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={() => setOpen(true)}>Add</Button>
            </div>
            {/*
            <List>
                {typeof showCategories !== "undefined" && showCategories.map((category) => {
                    <ListItem
                        secondaryAction={
                            <IconButton 
                                edge="end" 
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                    >                        
                        <ListItemText
                            primary="Teste"
                        />
                    </ListItem>
                })}
                
            </List>
            */}
        </div>

    );
};

export default Category;