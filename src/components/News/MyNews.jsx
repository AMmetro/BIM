import React from "react";
import sss from './MyNews.module.css';
import News from "./News";




const MyNews= ()=>{

    return (
    <div className={sss.MyNews}>

        <div className={sss.item}> News </div>

        <textarea> </textarea>
        <button>Add post</button>
        <News />
        <News />
        <News />
        <News />
        <News />

    </div>

    )
}

export default MyNews;


