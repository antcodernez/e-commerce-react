import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
const Navbar = () => {
  const context = useContext(ShoppingCartContext);   
  const activeStyle = "underline underline-offset-4"
  
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
            <NavLink 
                to="/"
                className="text-purple-700"
            >
                Shopi🐔
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                All
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/clothes"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Clothes
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/electronics"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/furnitures"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Furnitures
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/toys"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Toys
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/gallos"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Gallos
            </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-purple-900">
            yisus@correo.com
        </li>
        <li>
            <NavLink 
                to="/my-orders"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                My Orders
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/my-account"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                My account
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/sing-in"
                className={({isActive}) => {
                    return isActive ? activeStyle : undefined
                }}
            >
                Sing In
            </NavLink>
        </li>
        
        <li className="flex items-center">
            <box-icon name='shopping-bag' color="#7e22ce"></box-icon>
            <p className="font-semibold">
                {context.count}
            </p>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
