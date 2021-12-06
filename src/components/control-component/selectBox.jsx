import React, { useEffect } from 'react';

const Select = (props) => {

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (e.target.classList !== 'select-trigger') {
                const classData = document.getElementsByClassName('select-items-wrapper')
                if (classData.length > 0) {
                    for (let item of classData) {
                        if (item.parentNode.classList.contains('show')) {
                            item.parentNode.classList.remove('show')
                            item.parentNode.parentNode.parentNode.classList.remove('show')
                        }
                        if (item.parentNode.children[0].classList.contains('hasFocus') && item.parentNode.children[0].innerText.length === 0 && !e.target.classList.contains('select-item')) {
                            item.parentNode.children[0].classList.remove('hasFocus')
                            item.parentNode.parentNode.parentNode.classList.remove('show')
                        }

                        if (item.classList.contains("show"))
                            item.classList.remove("show")
                    }
                }
            }
            // input-item
        }, true);

    }, [])

    const dropdown = (e) => {
        const perentItemDiv = e.target.parentNode;
        perentItemDiv.classList.add('show');
        perentItemDiv.lastChild.classList.add('show');
        if (!e.target.classList.contains('hasFocus')) {
            e.target.classList.add('hasFocus')
        }
    }

    const selectClass = (e) => {
        if (e.target.parentNode.parentNode.classList.contains('show')) {
            e.target.parentNode.parentNode.parentNode.classList.remove('show');
            e.target.parentNode.parentNode.classList.remove('show');
        }
        if (e.target.innerText) {
            props.setSelectedItem(e.target.innerText)
        }
    }

    return <>
        <div className="input-item">
            <div className={`${props.selectIcon ? 'hasSelectIcon' : ''} custom-select`}>

                <div className="select-trigger-wrap" onClick={(e) => dropdown(e)}>
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
                <div className="select-items-wrapper">
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