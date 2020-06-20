import React from 'react';
import Cards from './Card-components'
import Smooth from './smooth-duffle.png'
import Hduffle from './hand-duffle.png'
import Bluduffle from './blue duffle.png'
import Greyduffle from './blackgrey-duffle.png'
import Nikeduffle from './nike-duffle.png'
import Lbduffle from './lightbrown-duffle.png'
import Scarduf from './scarlet-duffle.png'
import Style from './stylish-duffle.png'


function Main () {
    return (
        <div class = 'col-md-10 main '>
            <div class = 'row'>
                <Cards src = {Smooth} name='Brown Duffle Bag' itemno='10 pcs' oldprice='$200' currentprice='$150' disc='20%'/>
                <Cards src = {Hduffle} name='Hand Duffle bag' itemno='3 pcs' oldprice='$100' currentprice='$70' disc='15%'/>
                <Cards src = {Bluduffle} name ='Blue duffle bag' itemno='2 pcs'oldprice='$120' currentprice='$90' disc='5%'/>
                <Cards src = {Greyduffle} name ='Grey duffle bag' itemno='20 pcs' oldprice='$170' currentprice='$120' disc='10%'/>
                

            </div>
            <div class = 'row'>
                <Cards src= {Nikeduffle} name = 'Nike Bag' itemno = '1 pcs' oldprice = '$200' currentprice= '$200' disc='0%'/>
                <Cards src ={Lbduffle} name ='Brown Leather Bag' itemno='3 pcs' oldprice='$100' currentprice='$70'disc='15%'/>
                <Cards src = {Scarduf} name ='Scarlet Bag' itemno='13 pcs' oldprice='$300' currentprice='$270' disc='15%'/>
                <Cards src = {Style} name ='Stylish Bag' itemno='5 pcs' oldprice='$300' currentprice='$70' disc='15%'/>
                

            </div>
            
           
        </div>
            


        
    )
    
}



export default Main;
