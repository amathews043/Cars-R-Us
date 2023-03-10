import { getWheels, setWheels } from "./dataAccess.js"

const wheels = getWheels()

export const wheelsHTML = () => {
    let html = `<h2> Wheels </h2>
    <select id="wheels"> 
    <option value="0"> Select Wheels </option>`

    const listItems = wheels.map(wheel => {
        return `<option value = ${wheel.id}> ${wheel.name} </option>` 
    } )
    html += listItems.join("")
    html += `</select>`

    return html
}

document.addEventListener(
    "change", 
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = parseInt(changeEvent.target.value)
            setWheels(chosenOption)
        }
    }
)