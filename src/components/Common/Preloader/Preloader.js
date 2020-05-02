
import React from "react";
import preload from "../../../assets/images/Preloader.gif"

let Preloader= (props) => {

    return    <div >
                    <img src={preload} style={ {backgroundColor: "white"}} />
              </div>

}

export default Preloader