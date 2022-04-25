import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import Axios from "axios";

import AddCategory from "./AddCategory";

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import variables from './variables.json';

const Category = () => {

    let navigate = useNavigate ();

    const [showCategories, setShowCategories] = useState();
    const [openAdd, setOpenAdd] = useState(false);

    const handleDeleteItem = (id) => {
        Axios.delete(variables.URL + "deleteCategory/" + id).then(() => {
            setShowCategories([]);
        });
    };

    useEffect(() => {
        Axios.get(variables.URL + "allCategory").then((response) => {
            setShowCategories(response.data);
        }, [showCategories]);
    });


    return ( 
        <div className="category_body">

            <AddCategory
                openAdd={openAdd}
                setOpenAdd={setOpenAdd}
                showCategories={showCategories} 
                setShowCategories={setShowCategories}
            />

            <div className="category-menu navigation">
                <Button variant="contained" size="small" onClick={() => {navigate("/edit");}}>Back</Button>
            </div>
            
            <div className="category-header">
                <Typography variant="button" display="block" gutterBottom>
                    Categories
                </Typography>

                <IconButton color="primary" aria-label="add new category" onClick={() => setOpenAdd(true)}>
                    <AddIcon />
                </IconButton>
            </div>
            
            <List>
                {typeof showCategories !== "undefined" && showCategories.map((category) => {
                    return(
                    <div>
                        <ListItem
                            secondaryAction={
                                <IconButton 
                                    edge="end" 
                                    aria-label="delete"
                                    onClick={() => handleDeleteItem(category.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >                        
                            <ListItemText
                                primary={category.name}
                            />
                        </ListItem>
                    </div>
                    );
                })}
            </List>
            
        </div>

    );
};

export default Category;