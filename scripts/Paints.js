import { getPaints, setPaint } from "./database.js";

const paints = getPaints()

export const paintsHTML = () => {
    let html = `<h2> Paints </h2>
    <select id="paint"> 
    <option value="0"> Select Paint </option>`

    const listItems = paints.map(paint => {
        return `<option value = ${paint.id}> ${paint.name} </option>` 
    } )
    html += listItems.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change", 
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = parseInt(changeEvent.target.value)
            setPaint(chosenOption)
        }
    }
)