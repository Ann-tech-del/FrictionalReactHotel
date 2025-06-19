import { IoFastFoodOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { IoPizzaOutline } from "react-icons/io5";
import { LuSalad } from "react-icons/lu";
import { LiaPepperHotSolid } from "react-icons/lia";
import { GiCupcake } from "react-icons/gi";



function Header(){
  return(
        <header className="header">
            <ol className="head-nav-list">
                <li className="header-nav-list-item"> <IoFastFoodOutline /> All</li>
                <li className="header-nav-list-item"> <BiDrink /> Drinks</li>
                <li className="header-nav-list-item"> <IoPizzaOutline /> Pizza</li>
                <li className="header-nav-list-item"> <LuSalad /> Salad</li>
                <li className="header-nav-list-item"> <LiaPepperHotSolid /> Spicy</li>
                <li className="header-nav-list-item"> <GiCupcake /> Sweets</li>
                </ol> 
                <ViewAllButton/>
            </header>
    )
}

function ViewAllButton(){
                return(
                    <div> 
                    <p className="CTA-button"> View All</p>
                </div>
                )
}


export default Header;