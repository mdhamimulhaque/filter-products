import React from 'react';

const MenuItems = ({menuItems}) => {
    const { img,title,price,category,desc } = menuItems;

    return (
        <>
         <div className="items-box">
            <img src={img} alt="img"/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="price-box">
              <h4>{price}$</h4>
              <button>Order Now</button>
            </div>
         </div>
        </>
    );
};

export default MenuItems;