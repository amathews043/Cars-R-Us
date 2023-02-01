import { getOrders, getInteriors, getPaints, getWheels, getTechnologies } from "./database.js";

const orders = getOrders() 

const buildOrderListItem = (order) => {
    const interiors = getInteriors()
    const paints = getPaints()
    const technologies = getTechnologies()
    const wheels = getWheels()

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )

    const foundWheel  = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const totalCost = foundInterior.price + foundTech.price + foundWheel.price + foundPaint.price
    let finalCost = ""

    if(order.typeId === 1 ){
        finalCost = totalCost
    } else if (order.typeId === 2){
        finalCost = totalCost * 1.5
    } else if (order.typeId === 3){
        finalCost = totalCost * 2.25
    } else {
        finalCost = "please select car type"
    }
    const costString = finalCost.toLocaleString("en-US", {
        style: "currency", 
        currency: "USD"
    })

    return `<li> 
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) 
    html += listItems.join("")
    html += "</ul>"

    return html
}


