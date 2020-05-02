import React from "react";
import sss from './Header.module.css';
import HeaderLogo from './img/desk.jpg'
import {NavLink} from "react-router-dom";


const Header = (props) => {



    return <div className={sss.header}>


                    <div className={sss.divholder}>
                        <div className={sss.slogan} props={props}> DIV 1</div>
                        <div className={sss.slogan}> DIV 2</div>
                    </div>
                       <img src={HeaderLogo} className={sss.imgHeaderLogo}/>

                        <div className={sss.loginBlock}>

                            {props.isAuth
                                ?<div>You are {props.login} <button onClick={props.logout}>Logout</button></div>
                                : <NavLink to={"/login"}> SignIn </NavLink> }
                            {/*{props.state}*/}

                        </div>
           </div>
                    }


export default Header;