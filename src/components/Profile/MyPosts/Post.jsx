import React from 'react';
import sss from './Post.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const Post = (props) => {



    return (
        <div className={sss.item}>
            <div>
                message {props.id}
                <button className={sss.btnDellPost} onClick={()=>props.deletePost(props.id)}>x</button>  <br/>
                {props.posts} <br/>
             </div>
            <span >like</span> {props.likesCount}  <br/><br/>
        </div>
    )
}

export default Post;







