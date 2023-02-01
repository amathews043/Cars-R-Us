import { getTypes, setType } from "./database.js";

const types = getTypes()

export const typesHTML = () => {
    let html = `<article class="types">`
    
    let list = types.map((type) => {
        return `<input type="radio" name="type" value="${type.id}"> ${type.name}`
    })

    html += list.join("")
    html += "</article>"

    return html
}

document.addEventListener("change", 
(event) => {
    if (event.target.name === "type"){
        setType(parseInt(event.target.value))
    }
}
)