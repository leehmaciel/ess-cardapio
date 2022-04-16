import React, {useState, useEffect} from "react";
import Itens from './Itens';
import ItensEdit from "./ItensEdit";

const Menu = ({isMenu, showItems, setShowItems}) => {

    return (
        <div className="MenuItems">

            {typeof showItems !== "undefined" && showItems.map((item) => {
                if (isMenu){
                    return(
                        <Itens 
                        key={item.id} 
                        showItems={showItems} 
                        setShowItems={setShowItems}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        />
                    );
                }
                else{
                   return(
                    <ItensEdit 
                    key={item.id} 
                    showItems={showItems} 
                    setShowItems={setShowItems}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    />
                   )
                }

            })}

        </div>
    );
};

export default Menu;