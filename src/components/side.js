import React from 'react';
import {FaBriefcase} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';
import {FaSuitcase} from 'react-icons/fa';
import {FaShoppingBasket} from 'react-icons/fa';

function Sidebar () {
    return (
        <div class = 'col-md-2 sideBar '>
            <div class = 'row ICONS'>
                <div class = 'col-md-3'>
                    <FaBriefcase size = '1.5rem' color = 'rgb(199, 38, 199)'/> 
                </div>
                <div class = 'col-md-9'>
                    Briefcases
                </div>
            </div>

            <div class = 'row ICONS'>
                <div class = 'col-md-3'>
                    <FaShoppingBag size = '1.5rem' color = 'rgb(199, 38, 199)'/>
                </div>
                <div class = 'col-md-9'>
                    Bags
                </div>
            </div>

            <div class = 'row ICONS'>
                <div class = 'col-md-3'>
                    <FaSuitcase size = '1.5rem' color = 'rgb(199, 38, 199)'/>
                </div>
                <div class = 'col-md-9'>
                    Suitcases
                </div>
            </div>

            <div class = 'row ICONS'>
                <div class = 'col-md-3'>
                    <FaShoppingBasket size = '1.5rem' color = 'rgb(199, 38, 199)'/>
                </div>
                <div class = 'col-md-9'>
                    Shopping Basket
                </div>
            </div>

        </div>

        
    )
    
}



export default Sidebar;
