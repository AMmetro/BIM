import React from "react";
import sss from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";




const DialogItems = (props) => {

     let path = "/dialogs/" + props.id;

     return (
        <div className={sss.dialogs + ' ' + sss.active}>
           <NavLink to={path}> {props.name} </NavLink>
        </div>
     )


}


export default DialogItems;