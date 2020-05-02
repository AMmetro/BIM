import React from 'react';
import sss from './FormsControls.module.css'
import {Field} from "redux-form";


export const Textarea = ({input, meta,...props}) => {     // достаем из пропсов деструкторизацией....

const hasError=meta.touched && meta.error;


     return (
        <div className={sss.formControl + " " + (hasError ? sss.error:"")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};





export const Input = ({input, meta,...props}) => {

    const hasError=meta.touched && meta.error;
    return (
        <div className={sss.formControl + " " + (hasError ? sss.error:"")}>
            <div>
                <input {...input} {...props}/>
            </div>
              {hasError && <span>{meta.error}</span>}
        </div>
    )
};