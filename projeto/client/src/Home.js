import React, {useState, useEffect} from 'react';
import {useNavigate, Outlet} from "react-router-dom";
import Axios from 'axios';

import Button from '@mui/material/Button';

import logo from "./brigadeiro.png";

import variables from './variables.json';

const Home = () => {

    let navigate = useNavigate ();

    const [showItems, setShowItems] = useState();

    useEffect(() => {
        Axios.get(variables.URL + "all").then((response) => {
          setShowItems(response.data);
        }, [showItems]);
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
                    <Button variant="contained" onClick={() => {navigate("/share");}}>Share</Button>
                </div>
            
            </div>
            <Outlet />
        </div>
    );

};

export default Home;