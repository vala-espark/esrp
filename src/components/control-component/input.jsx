import React,{useEffect}  from 'react';

const Input = (props) => {

    useEffect(()=>{
        
        if(props.id==="email" || props.id==="password" && document.getElementById(props.id))
        {            
            document.getElementById(props.id).click()        
        } 
    },[])
    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }




    return <div className="input-item">
        <input  type={props.type} name={props.name} id={props.id} onFocus={handleFocus} onBlur={handleBlur} onClick={handleFocus}/>
        <label htmlFor={props.id}>{props.lable}</label>
    </div>
}

export default Input;