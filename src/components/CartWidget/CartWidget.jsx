import React from 'react';

const CartWidget = () => {
    return (
      <>
        <ul className="navbar-nav me-auto">
             <li className="nav-link">
                <p>0</p>
                <button className="btn btn-dark">Carrito</button>
             </li>
        </ul>
      </>
    );
}

export default CartWidget;
