import React  from 'react';

const Textarea = (props) => {

    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");
    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }


    return <div className="input-item">
        <textarea name={props.name} id={props.id} onFocus={handleFocus} onBlur={handleBlur} ></textarea>
        <label htmlFor={props.id}>{props.lable}</label>
    </div>
}

export default Textarea;