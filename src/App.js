import React, {Component} from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from "./components/Users/UsersContainer";
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import News from "./components/News/News";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import MyNews from './components/News/MyNews';

const DialogsContainer = React.lazy ( ()=> import ("./components/Dialogs/DialogsContainer"));
const MyNews = React.lazy ( ()=> import ('./components/News/MyNews') );


class App extends Component {

    catchALLUnhandledErrors = () => {
        alert ("promiseRejectionEvent")
    };


    // c 60 minut

       componentDidMount() {
         this.props.initializedApp();
         window.addEventListener("unhandledrejection", this.catchALLUnhandledErrors)
             //handle error here for example log
           };

    componentWillUnmount (){
        window.removeEventListener("unhandledrejection", this.catchALLUnhandledErrors)
        //handle error here for example log

};



    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>


                    <Switch>  {/*  with "switch" show only first routing with name match, without show all match */}

                    <Route exact path='/' render={() => <ProfileContainer store={this.props.store}/>}/>

                    <Route exact path='//' render={() => <Redirect to={"/Music"}/>}/>

                    <Route path='/Profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>

                    <Route path='/Dialogs' render={() => {
                             return <React.Suspense fallback={<div>Loading....</div>}>
                                <DialogsContainer store={this.props.store}/>
                                    </React.Suspense>    }}/>

                    <Route path='/News' render={() => {
                             return <React.Suspense fallback={<div>Loading....</div>}>
                                 <MyNews/>
                             </React.Suspense>    }}/>

                    <Route path='/Users' render={() => <UsersContainer/>}/>


                    <Route exact path='/Music' render={()=> <Music/>  }/>

                    <Route exact path='/Settings' component={Settings}/>     {/*//exact not render component if name include "Settings" but different */}

                    <Route path='/Login' component={Login}/>

                    <Route path='*' render={()=> <div> 404 Page with this name not found </div> } />

                    </Switch>



                </div>

                <Footer/>


            </div>


        )
    }
}

const MapStateToProps =  (state) => ({
    initialized: state.App.initialized
})


export default compose (
    withRouter,
    connect(MapStateToProps,{initializedApp})) (App);        //withRouter что бы не глючило - это типа баг




