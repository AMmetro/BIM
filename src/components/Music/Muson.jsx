import React from "react";


const Muson = (props) => {


    let selectDropList = (e) => {
        props.changeState(e.target.value);
    };

    return <div>

        <select onChange={selectDropList}>
            {props.musStyleList}
        </select>

    </div>
};


export default Muson;







