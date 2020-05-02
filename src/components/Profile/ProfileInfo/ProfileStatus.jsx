import React from 'react';
import sss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


class ProfileStatus extends React.Component {

    // statusInputRef = React.createRef();

    state= {editMode: false,
            status:this.props.status}



    activateEditMode(){
        this.setState({editMode:true})
        // this.forceUpdate()
    }

    deActivateEditMode(){
        this.setState({editMode:false})
        // this.forceUpdate()
    this.props.updateStatus(this.state.status);
    }

  onStatusChange = (e) => {
       this.setState({status: e.currentTarget.value})
  }

  componentDidUpdate(prevProps, prevState) {             // компонента !!!! если поставить setState без условия то она зациклится
   if (prevProps.status !==this.props.status) {
          this.setState({status: this.props.status})
}
      let a=this.state;
      let b=this.props;
     }


    render () {

     // {if (!this.props.profile) {return <Preloader/>  }   }         // почему зацикливается постоянно??

             return (
            <div className={sss.ProfileStatus}>
              {  !this.state.editMode==true &&  <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>}
                { this.state.editMode==true &&  <input onChange={ (e)=>this.onStatusChange(e)}  value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)}></input>    }
            </div>
        )
    }
}



export default ProfileStatus;








