import React from "react";
import sss from './Music.module.css';
import Muson from "./Muson";


class Music extends React.Component {

    state= {
        music: [
            {id: 0, title: "Класика", selected: false },
            {id: 1, title: "Поп", selected: true },
            {id: 2, title: "Рок", selected: false},
            {id: 3, title: "Джаз", selected: false}
        ]
    }



    changeState = (musId) => {
        let newSt = this.state.music.map(stEl => {
            if (stEl.id != musId) {
                return {...stEl, selected: false}
            } else {
                return {...stEl, selected: true}
            }
        });

        this.setState({music: newSt});
    };



    render = () => {

        let musStyleList = this.state.music.map( elem=>
               //  что за странный обект создается в консоли ??  console.log(musStyleList);
            <option title={elem.title} selected={elem.selected} value={elem.id} >{elem.title}</option>
            // по умолчанию Value это между тэгами, иначе что яво явно указано в "value="
       );

        return (
            <div className={sss.Music}>



                {/*<button className="test">test</button>*/}


               <button>Add song</button>

                <Muson musStyleList={musStyleList} selectDropList={this.selectDropList} changeState={this.changeState} />

                <div className={sss.popUpArea}>
                {this.state.music[0].selected && <span> здесь окно для "РОК" </span>}
                {this.state.music[1].selected && <span> здесь окно для "ПОП" </span>}
                {this.state.music[2].selected && <span> здесь окно для "КЛАСИКА" </span>}
                {this.state.music[3].selected && <span> здесь окно для "ДЖАЗ" </span>}
                </div>

           </div>


        )
    }
}

export default Music;



// // var element = document.getElementById("musStyleList");*/
// /*//var selectedOption = element.options[element.selectedIndex];*/
// /*var selectedOptions = element.selectedOptions;*/
// /*for (var i = 0; i < 3; i++) {*/
// /*alert(selectedOptions[i].value);*/
// /*}


