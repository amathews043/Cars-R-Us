import { getTechnologies, setTech } from "./dataAccess.js"

const technologies = getTechnologies()

export const techHTML = () => {
    let html = `<h2> Technology </h2>
    <select id="tech"> 
    <option value="0"> Select Technology Package </option>`

    const listItems = technologies.map(technology => {
        return `<option value = ${technology.id}> ${technology.name} </option>` 
    } )
    html += listItems.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change", 
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = parseInt(changeEvent.target.value)
            setTech(chosenOption)
        }
    }
)