import React, {useState} from "react";
import sss from "./Paginator.module.css"

let Paginator = ({totalUserCount,lengthOfPagination,currentPage,onPageChanged}) => {
    let pageCount = Math.ceil(totalUserCount / lengthOfPagination);

    console.log (totalUserCount)

    let [currentPaginationNumber, setCurrentPaginationNumber ] = useState(100);

     let pages = [];
    for (let i=currentPaginationNumber ; i<(currentPaginationNumber+lengthOfPagination); i++) {
        pages.push(i)
    };



    return (
        <div>
           <div>

                   {currentPaginationNumber>1 &&
                                <button onClick={()=>setCurrentPaginationNumber(currentPaginationNumber-lengthOfPagination)}> pevios</button>}

                        { pages.map(p => {
                                return <span className={currentPage === p && sss.selectedPage}
                                             onClick={(e) => {
                                                 onPageChanged(p)
                                             }}> {p} </span>

                            })}
               {currentPaginationNumber<totalUserCount && <button onClick={()=>setCurrentPaginationNumber(currentPaginationNumber+lengthOfPagination)}>next</button>}
                </div>
             </div>
            )
};

export default Paginator;

