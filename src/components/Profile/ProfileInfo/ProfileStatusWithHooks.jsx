import React, {useEffect, useState} from 'react';
import sss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


const ProfileStatusWithHooks = (props) => {


    let [editMode,setEditMode]= useState(false);
    let [status,setStatus]= useState(props.status);

    useEffect(()=> {
       setStatus(props.status);
    }, [props.status]);  // зависимость - без не заходит в хук постоянно, а сней один раз

    const activateEditMode = () => {
          setEditMode(true);
    }

   let deActivateEditMode = () => {
           setEditMode(false)
       props.updateStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
          }


    return (
        <div>
            {!editMode &&
                            <div>
                                <span onDoubleClick={activateEditMode}>{props.status || "-----"} </span>
                            </div>
            }
            {editMode &&
                        <div>
                            <input onChange={onStatusChange}
                                   autoFocus={true}
                                   value={status}
                                   onBlur={deActivateEditMode} />
                        </div>
            }
        </div>

    )

}


export default ProfileStatusWithHooks;