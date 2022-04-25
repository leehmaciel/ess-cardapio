import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

import Add from "./Add";
import Menu from "./Menu"

import Button from '@mui/material/Button';

import logo from "./brigadeiro.png";

import variables from './variables.json';

const Home = ({isMenu, isSettings}) => {

    let navigate = useNavigate ();

    const [open, setOpen] = useState(false);
    const [showItems, setShowItems] = useState();
    const [showCategories, setShowCategories] = useState([]);

    useEffect(() => {
        Axios.get(variables.URL + "all").then((response) => {
          setShowItems(response.data);
        }, [showItems]);
    });

    useEffect(() => {
        Axios.get(variables.URL + "allCategory").then((response) => {
            setShowCategories(response.data);
        }, [showCategories]);
    });

    return (
        <div className="container">
            <div className="section"> 
                <div className="title">
                    <img src={logo} className="logo" />
                    <h2> TortiLet Patisserie </h2>
                    <div className="underline"></div>
                </div>

                <div className="navigation">
                    <Button variant="contained" onClick={() => {navigate("/");}}>Home</Button>
                    <Button variant="contained" onClick={() => {navigate("/edit");}}>Edit</Button>
                </div>
            
            </div>

            <div className="containerBody">
                <Menu 
                    isMenu={isMenu} 
                    isSettings={isSettings}
                    open={open} 
                    setOpen={setOpen}
                    showCategories={showCategories} 
                    setShowCategories={setShowCategories}
                    showItems={showItems} 
                    setShowItems={setShowItems} 
                />
            </div>


        </div>
    );

};

export default Home;