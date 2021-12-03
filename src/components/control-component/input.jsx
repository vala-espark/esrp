import React  from 'react';

const Input = (props) => {

    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }


    return <div className="input-item">
        <input  type={props.type} name={props.name} id={props.id} onFocus={handleFocus} onBlur={handleBlur} />
        <label htmlFor={props.id}>{props.lable}</label>
    </div>
}

export default Input;