import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Axios from "axios";

import Add from "./Add";
import Category from "./Category";
import Item from './Item';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import variables from './variables.json';

const Menu = ({isMenu, isSettings, open, setOpen, showCategories, setShowCategories, showItems, setShowItems}) => {
    
    let navigate = useNavigate ();
    
    const [toDelete, setToDelete] = useState([]);

    const handleDeleteAll = () => {
        toDelete.map((item) => {
            Axios.delete(variables.URL + "delete/" + item).then(() => {
                setShowItems([]);
            });
        });
    }

    return (
        <div className="MenuItems">
            <Add
                open={open}
                setOpen={setOpen}
                showCategories={showCategories}
                showItems={showItems} 
                setShowItems={setShowItems}
            />

            {!isMenu && !isSettings
                ?
                    <div className="navigation"> 
                        <Button variant="contained" size="small" startIcon={<AddIcon />} onClick={() => setOpen(true)}>Add</Button>
                        <Button variant="contained" size="small" startIcon={<DeleteIcon />} onClick={() => handleDeleteAll()}>Delete</Button>
                        <Button variant="contained" size="small" startIcon={<SettingsIcon />} onClick={() => {navigate("/edit/settings");}}>Settings</Button>
                    </div>
                : null
            }

            {!isSettings 
                ?
                    typeof showItems !== "undefined" && showItems.map((item) => {
                        return(
                            <Item
                                isMenu={isMenu}
                                id={item.id}
                                category={item.category}
                                description={item.description}
                                name={item.name}
                                price={item.price}
                                showCategories={showCategories} 
                                setShowCategories={setShowCategories}
                                showItems={showItems} 
                                setShowItems={setShowItems}
                                toDelete={toDelete}
                                setToDelete={setToDelete}
                            />
                        );
                    })
                : <Category showCategories={showCategories} setShowCategories={setShowCategories}/>
            }

        </div>
    );

}

export default Menu;