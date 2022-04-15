import React, {useState, useEffect} from "react";
import Axios from 'axios';
import variables from './variables.json';
import Itens from './Itens';
import ItensEdit from "./ItensEdit";

const Menu = ({isMenu}) => {

    const [showItens, setShowItens] = useState();

    useEffect(() => {
      Axios.get(variables.URL + "all").then((response) => {
        setShowItens(response.data);
      });
    });

    return (
        <div className="section-center">

            {typeof showItens !== "undefined" && showItens.map((item) => {
                if (isMenu){
                    return(
                        <Itens 
                        key={item.id} 
                        showItem={showItens} 
                        setShowItem={setShowItens}
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
                    showItem={showItens} 
                    setShowItem={setShowItens}
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