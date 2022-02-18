import {useState} from 'react'
import Backdrop from "./Backdrop";
import Model from "./Model";
function Todo(props){
    const [modelIsOpen,setModelOpen]=useState(false);

    function deletefn(){
        setModelOpen(true);
    }
    function cancelfn(){
        setModelOpen(false);
    }
    return(
        <div className="card">
          <h2>{props.text}</h2>
          <div className="actions">
          <button className="btn" onClick={deletefn}>DELETE</button>
          </div>
          {modelIsOpen&&<Model onCancel={cancelfn} />}
          {modelIsOpen &&<Backdrop onCancel={cancelfn}/>}
         
        </div>
      );

}
export default Todo;