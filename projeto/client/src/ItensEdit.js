import React from "react";

const ItensEdit = (props) => {
    return ( 
        
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
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </article>

    );
};

export default ItensEdit;