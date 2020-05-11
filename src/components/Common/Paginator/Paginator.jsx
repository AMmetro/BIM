import React, {useState} from "react";
import sss from "./Paginator.module.css"

let Paginator = ({totalUserCount,pageSize,currentPage,onPageChanged,portionSize=15}) => {
    
    let pageCount = Math.ceil(totalUserCount /pageSize);     //  pageSize=10  из стэйта - кол-во изеров на странице
    //    384=                     3831   /    10
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    };

    let portionCount = Math.ceil(pageCount / portionSize); 
     //    26=                      384   /    15
    let [portionNumber, setPortionNumber]=useState(26);
    let leftPortionPageNumber = (portionNumber-1) * portionSize+1;
    let rightPortionPageNumber = portionNumber * portionSize;


    function cn(param, pageNumber) {
        return "";
    }

    return (
           <div className={sss.Paginator}>

           {portionNumber > 1 &&
           <button onClick={ ()=> setPortionNumber(portionNumber-1)}> prev </button>}
           



            {pages
                .filter(p =>  p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map ( ( p ) => {

                 return <span className = { cn ({
                     [sss.selectedPage] : currentPage === p
                 }, sss.pageNumber)}
                                 key = {p}
                                  onClick={(e) => {
                                  onPageChanged(p)
                                   }}> {p} </span>
                })}



                   {portionCount > portionNumber &&
                     <button onClick={ ()=> setPortionNumber(portionNumber+1) }> next </button>}

             </div>

    )
}


export default Paginator;