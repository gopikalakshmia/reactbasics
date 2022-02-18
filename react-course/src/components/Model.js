function Model(props){
return(
    <div className="modal">
        <p>Are you surw want to delete</p>
        <button className="btn --alt" onClick={props.onCancel}>cancel</button>
        <button className="btn" onClick={props.onCancel}>confirm</button>
    </div>
);
}
export default Model;