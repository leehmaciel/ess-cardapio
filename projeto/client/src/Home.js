import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

import Add from "./Add";
import Menu from "./Menu"

import Button from '@mui/material/Button';

import logo from "./brigadeiro.png";

import variables from './variables.json';

const Home = () => {

    let navigate = useNavigate ();

    const [open, setOpen] = useState(false);
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
                    <Add
                        open={open}
                        setOpen={setOpen}
                        showItems={showItems} 
                        setShowItems={setShowItems}
                    />
                    <Button variant="contained" onClick={() => {navigate("/");}}>Home</Button>
                    <Button variant="contained" onClick={() => setOpen(true)}>Add</Button>
                </div>
            
            </div>

            <div className="containerBody">
                <Menu showItems={showItems} setShowItems={setShowItems} />
            </div>


        </div>
    );

};

export default Home;