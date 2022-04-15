import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Menu from "./Menu";
import Edit from "./Edit";
import Categories from "./Categories";
import './App.css';
import items from "./data";
import logo from "./logo.svg";
import Axios from 'axios';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = ({isMenu}) => {

    let navigate = useNavigate ();

    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);
    
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
    <main>
      <section className="menu section"> 

        <div className="title">
          <img src={logo} className="logo" />
          <h2> Menu List </h2>
          <div className="underline"></div>
        </div>

        <div className="navigation">
          <button onClick={() => {navigate("/add");}}>Add</button>
          <button onClick={() => {navigate("/edit");}}>Edit</button>
        </div>
      
        <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} /> 

      </section>
      
      {isMenu ? <Menu /> : <Edit />}
      
      
        
      
    </main>
  );
};

export default Home;
