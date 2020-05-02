import React from "react";
import sss from './../Dialogs.module.css';


const Message = (props) => {
          return (<div className={sss.dialogs}>{props.message}</div>
          )
}



export default Message;