import React from "react";
import sss from "./Users.module.css"



let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    let showNextPages = ()=> {
        alert("gggggg")
        let i=0;
    }

    let pages = [];
    for (i ; i <=10; i++) {
        pages.push(i)
    };



    return (
        <div>
           <div>
               <span> ...pevios</span>
                {
                   pages.map(p => {
                        return <span className={props.currentPage === p && sss.selectedPage}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }}> {p} </span>

                    })}
               <span onClick={showNextPages}>...>>next</span>
                </div>
             </div>
            )
};

export default Paginator;

