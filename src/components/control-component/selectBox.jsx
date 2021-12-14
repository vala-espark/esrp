import React, { useEffect, useState, useRef } from 'react';

const Select = (props) => {

    const [toggle, setToggle] = useState(false);

    const toggleRef = useRef();
    toggleRef.current = toggle

    useEffect(() => {
        if (props.selectItem) {
            document.getElementsByClassName('select-trigger-wrap')[0].classList.add("hasFocus")
        }
    }, [props.selectItem])

    useEffect(() => {


        document.body.addEventListener('click', (e) => {
            if (e.target.classList !== 'select-trigger') {
                const classData = document.getElementsByClassName('select-items-wrapper')
                if (classData.length > 0) {
                    for (let item of classData) {
                        if (item.parentNode.classList.contains('show')) {
                            setToggle(false)
                        }
                        if (item.parentNode.children[0].classList.contains('hasFocus') && item.parentNode.children[0].innerText.length === 0 && !e.target.classList.contains('select-item')) {
                            setToggle(!toggleRef.current)
                        }
                    }
                }
            }
            // input-item
        }, true);

    }, [])


    const dropdown = (e) => {

        if (props.selectItem) {
            setToggle(true)
        } else {
            setToggle(!toggle)
        }
    }

    const selectClass = (e) => {
        setToggle(false)
        if (e.target.innerText) {
            props.setSelectedItem(e.target.innerText)
        }
    }

    // select-trigger-wrap hasFocus
    return <>
        <div className="input-item">
            <div className={`${props.selectIcon ? 'hasSelectIcon' : ''} custom-select ${toggle ? 'show' : ''}`}>

                <div className={`select-trigger-wrap ${toggle || props.selectItem ? 'hasFocus' : ''}`} onClick={(e) => dropdown(e)}>
                    {props.selectIcon && <span className="select-icon">{props.selectIcon}</span>}
                    <span className="select-trigger">
                        {/* {props.selectItem && props.optionsIcon && props.optionsIcon.hasOwnProperty(`${props.selectItem}`)? props.optionsIcon[`${props.selectItem}`] : null} */}
                        {props.selectItem ? props.selectItem : null}
                    </span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7L7 0.999999L1 7" stroke="#175086" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <label className="">{props.lableName}</label>
                <div className={`select-items-wrapper ${toggle ? 'show' : ''}`}>
                    <ul className="select-items-wrap">
                        {props.options.map(item => <li className='select-item' key={item} onClick={(e) => selectClass(e)}>
                            {/* {props.optionsIcon && props.optionsIcon[`${item}`]} */}
                            {item}
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </>

}

export default Select;