import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'





function Cards (props) {
    return (
       <div class = 'col-md-2 card '>
           <div className = {'Discount'}>{props.disc}</div>
           <img src = {props.src} alt='cardimage' className = {'cardImage'} >
                
            </img>
            <div class="card-body">
                <h6 class="card-text">{props.name}</h6>
                <p className = {'Pcs'}>{props.itemno}</p>
                <h6 className = {'oldPrice'}>{props.oldprice}</h6>
                <h5 className = {'currentPrice'}>{props.currentprice} <FaShoppingCart color = 'green' size = '1rem' className = 'cart'/></h5>
            </div>
       </div>         
    )

}


export default Cards