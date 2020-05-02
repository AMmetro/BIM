import React from "react";
import sss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

        <nav className={sss.nav}>
            <div className={sss.item}>

                {/*     <a href="/profile"> Profile </a>*/}

                <NavLink to="/Profile" activeClassName={sss.activeLink}> Profile </NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Dialogs" activeClassName={sss.activeLink}> Dialogs </NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Users" activeClassName={sss.activeLink}> Users </NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/News" activeClassName={sss.activeLink}>News</NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Music" activeClassName={sss.activeLink}>Music</NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Settings" activeClassName={sss.activeLink}>Setting</NavLink>
            </div>

            <div className={sss.item}>
                <NavLink to="/Login" activeClassName={sss.activeLink}>Login</NavLink>
            </div>


        </nav>
    )
}

export default Navbar;