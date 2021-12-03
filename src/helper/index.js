export const handleFocus = (e) => {
    e.target.classList.add("hasFocus");
}

export const handleBlur = (e) => {
    if (e.target.value === "") {
        e.target.classList.remove("hasFocus");
    }
}