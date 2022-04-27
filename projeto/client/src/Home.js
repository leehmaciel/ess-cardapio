import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

import Menu from "./Menu"

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import logo from "./brigadeiro.png";

import variables from './variables.json';

const Home = ({isMenu}) => {

    let navigate = useNavigate ();

    const [alert, setAlert] = useState(false);
    const [alertWarn, setAlertWarning] = useState('');
    const [alertContent, setAlertContent] = useState('');
    const [open, setOpen] = useState(false);
    const [showItems, setShowItems] = useState();

    useEffect(() => {
        Axios.get(variables.URL + "all").then((response) => {
          setShowItems(response.data);
        }, [showItems]);
    });

    return (
        <div className="container">
            <Collapse in={alert}>
                <Alert onClose={() => {setAlert(false)}} severity={alertWarn} variant="outlined">{alertContent}</Alert> 
            </Collapse>

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
                    open={open} 
                    setAlert={setAlert}
                    setAlertContent={setAlertContent}
                    setAlertWarning={setAlertWarning}
                    setOpen={setOpen}
                    showItems={showItems} 
                    setShowItems={setShowItems} 
                />
            </div>


        </div>
    );

};

export default Home;