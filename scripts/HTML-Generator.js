import { interiorsHTML } from "./Interiors.js"
import { paintsHTML } from "./Paints.js"
import { techHTML } from "./Tech.js"
import { wheelsHTML } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addOrder } from "./dataAccess.js"
import { typesHTML } from "./type.js"

export const HTML = () => {
    return `
    <h1> Cars 'R Us</h1>
    <article class = "choices"> 
        <article class="paintChoices">
            ${paintsHTML()} 
        </article> 

        <article class="wheelChoices"> 
        ${wheelsHTML()}
        </article>

        <article class="interiorChoices">
        ${interiorsHTML()}
        </article> 

        <article class="techChoices">
        ${techHTML()}
        </article>
    </article>

    ${typesHTML()}

    <article>
        <button id="orderButton">Place Car Order</button>
    </article>


<article class="customOrders">
<h2>Custom Orders </h2> 
${Orders()}
</article>
`
}

document.addEventListener(
    "click", 
    (clickEvent) => {
        if (clickEvent.target.id === "orderButton") {
            addOrder()
        }
    }
)