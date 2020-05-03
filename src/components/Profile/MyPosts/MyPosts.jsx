import React, {PureComponent} from "react";
import sss from './MyPosts.module.css';
import Post from './Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormControls";

const maxLength500 = maxLengthCreator(500);

class AddNewPostForm extends React.Component {
    render() {

        return (<form onSubmit={this.props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                       validate={[required, maxLength500]} />
            </div>
            <div>
                <button onClick={this.props.onClick}> Add post</button>
            </div>
        </form>)
    }
}

let ReduxAddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

class MyPosts extends React.Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps!=this.props || nextState!=this.state;
    // }


    render() {

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
            values.newPostText=``
        };

           let deletePost = (postId) => {
               this.props.deletePost(postId)
        };

        let PostsElements = this.props.posts.map(postElem => <Post posts={postElem.posts}
                                                                   likesCount={postElem.likesCount}
                                                                   id={postElem.id}
                                                                   deletePost={deletePost}/>);

              return (
            <div className={sss.MyPosts}>
                <div className={sss.postsBlock}>
                    <h3> My posts </h3>
                </div>
                <ReduxAddNewPostForm onSubmit={onAddPost} />
                {PostsElements}
            </div>
        )
    }
}


export default MyPosts;


