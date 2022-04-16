import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Add from "./Add";
import Menu from "./Menu";
import Categories from "./Categories";
import './App.css';
import items from "./data";
import logo from "./logo.svg";
import Axios from 'axios';
import variables from './variables.json';
import Button from '@mui/material/Button';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = ({isMenu}) => {

    let navigate = useNavigate ();

    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);
    const [open, setOpen] = useState(false);
    const [showItems, setShowItems] = useState();

    useEffect(() => {
      Axios.get(variables.URL + "all").then((response) => {
        setShowItems(response.data);
      }, [showItems]);
    });
    
    const filterItems = (category) => {
      setActiveCategory (category);
      if (category === "all") {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };

    return (
        <div className="container">
            <div className="section"> 
                <div className="title">
                    <img src={logo} className="logo" />
                    <h2> Menu List </h2>
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
                    <Button variant="contained" onClick={() => {navigate("/edit");}}>Edit</Button>
                </div>
            
                <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} /> 
            </div>
            
            <div className="containerBody">
                <Menu isMenu={isMenu} showItems={showItems} setShowItems={setShowItems} />
            </div>
        </div>
  );
};

export default Home;
