import React, {useState, useEffect} from "react";
import Axios from 'axios';
import variables from './variables.json';
import Itens from './Itens';
import ItensEdit from "./ItensEdit";

const Menu = ({isMenu}) => {

    const [showItems, setShowItems] = useState();

    useEffect(() => {
      Axios.get(variables.URL + "all").then((response) => {
        setShowItems(response.data);
      }, [showItems]);
    });

    return (
        <div className="section-center">

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