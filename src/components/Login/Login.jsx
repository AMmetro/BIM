import React from "react";
import sss from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControl/FormControls";
import {required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={sss.header}>
                <div className={sss.divholder}>
                </div>
                <div>
                    <div><Field placeholder={"email"}
                                name={"email"}
                                component={Input}
                                validate={[required]}/></div>
                    <div><Field placeholder={"Password"}
                                type={"password"}
                                name={"password"}
                                component={Input}
                                validate={[required]}/></div>
                    <div><Field type={"checkbox"}
                                name={"rememberMe"}
                                component={Input}
                                // validate={[required]}   // Валидация отключена
                                     />
                     remember me</div>

                    { props.captchaUrl && <img src={ props.captchaUrl} />}

                    { props.captchaUrl && createField ("Symbols from image", "captcha", [required], Input, {}) }


                    {/*   { props.captchaUrl && <Field placeholder={"Symbols from image"} name ={"captcha"} validate={[required]} component={Input}/> }   // эквивалентно верхней ?
                                                */}


                    { props.error &&
                        <div className={sss.formSummaryError}>  {props.error} </div>
                    }
                    <div>
                        <button>login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm ({form:"login" }) (LoginForm);

    const Login = (props) => {

        const onSubmit=(formData)=> {
            props.login(formData.email,formData.password,formData.rememberMe, formData.captcha )
               };

        if (props.isAuth) {
            return <Redirect to="/Profile"/> }

        return ( <div>
            <h1 className={sss.divholder}>Login </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        )
    }



const mapStateToProps = (state)=> ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect (mapStateToProps, {login}) (Login);