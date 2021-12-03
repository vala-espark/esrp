import { removeClass } from 'dom-helpers';
import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';


const Select = () => {

    useEffect(() => {
        // document.getElementById('input').remove("hasFocus");
    }, [])

    const handleFocus = (e) => {
        e.target.classList.add("hasFocus");

    }

    const handleBlur = (e) => {
        if (e.target.value === "") {
            e.target.classList.remove("hasFocus");
        }
    }

    const dropdown = (e) => {
        const perentItemDiv = e.target.parentNode;
        perentItemDiv.lastChild.classList.add('show')
    }

    const selectClass = (e) => {
        // console.log(e.target.parentNode.classList.contains('show'))
        if (e.target.parentNode.parentNode.classList.contains('show')) {
            e.target.parentNode.parentNode.classList.remove('show')
        }
    }

    return <>
        <div className="input-item d-none">
            {/* <select onFocus={handleFocus} onBlur={handleBlur} style={{backgroundImage:'url(assets/images/select-arrow.svg)'}}> */}
            {/* <select onFocus={handleFocus} onBlur={handleBlur}>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                            <option value="">Option 3</option>
                                        </select> */}
            <input type="text hasFocus" onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} />
            <label htmlFor="">Select MSA</label>


        </div>
        <div className="input-item">
            <div className="custom-select">
                <div className="select-trigger" onClick={(e) => dropdown(e)}>Select</div>
                <div className="select-items-wrapper">
                    <ul className="select-items-wrap">
                        <li onClick={(e) => selectClass(e)}>Large</li>
                        <li onClick={(e) => selectClass(e)}>Small</li>
                        <li onClick={(e) => selectClass(e)}>Medium</li>
                        <li onClick={(e) => selectClass(e)}>X - Large</li>
                    </ul>
                </div>
            </div>
        </div>
    </>

}

export default Select;