import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import EditBox from "./EditBox";
import variables from './variables.json';

const ItensEdit = (props) => {

    const [open, setOpen] = useState(false);

    const handleDeleteItem = (props) => {
        Axios.delete(variables.URL + "delete/" + props.id).then(() => {
            props.setShowItems([]);
        });
    };

    return (
        <div>
            <EditBox 
                open={open}
                setOpen={setOpen}
                showItems={props.showItems} 
                setShowItems={props.setShowItems}
                id={props.id}
                name={props.name}
                price={props.price}
                description={props.description}
            />
            <article key={props.id} className="menu-item">
                <img src="/" alt={props.name} className="photo" />
                <div className="item-info">
                    <header>
                        <h4>{props.name}</h4>
                        <h4 className="price">R${props.price}</h4>
                    </header>
                    <p className="item-text">{props.description}</p>
                </div>
                <div>
                    <Button onClick={() => setOpen(true)}>Edit</Button>
                    <Button onClick={() => handleDeleteItem(props)}>Delete</Button>
                </div>
            </article>
        </div>
    );
};

export default ItensEdit;