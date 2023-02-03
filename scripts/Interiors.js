import { getInteriors, setInterior } from "./dataAccess.js";

const interiors = getInteriors()

export const interiorsHTML = ()=> {
    let html = `<h2> Interiors </h2>
    <select id="interiors"> 
    <option value="0"> Select Interior </option>`

    const listItems = interiors.map(interior => {
        return `<option value = ${interior.id}> ${interior.name} </option>` 
    } )
    html += listItems.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change", 
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = parseInt(changeEvent.target.value)
            setInterior(chosenOption)
        }
    }
)