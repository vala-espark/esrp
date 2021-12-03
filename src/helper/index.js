export const handleFocus = (e) => {
    e.target.classList.add("hasFocus");
}

export const handleBlur = (e) => {
    if (e.target.value === "") {
        e.target.classList.remove("hasFocus");
    }
}


// if(item.parentNode.children[0].classList.contains('hasFocus') && item.parentNode.children[0].innerText.length === 0)
//                             item.parentNode.children[0].classList.remove('hasFocus')
//                             item.parentNode.parentNode.parentNode.classList.remove('show')