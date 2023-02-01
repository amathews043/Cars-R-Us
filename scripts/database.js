const database = {
    paintColors: [
        {
            id: 1,
            name: "Silver", 
            price: 100,
        }, 
        {
            id: 2, 
            name: "Midnight Blue", 
            price: 500, 

        }, 
        {
            id: 3, 
            name: "Firebrick Red", 
            price: 150, 
        }, 
        {
            id: 4, 
            name: "Spring Green", 
            price: 200,
        },
    ], 
    interiors: [
        {
            id: 1, 
            name: "Beige Fabric", 
            price: 50, 
        }, 
        {
            id: 2, 
            name: "Charcoal Fabric", 
            price: 60, 
        }, 
        {
            id: 3, 
            name: "White Leather",
            price: 100, 

        }, 
        {
            id: 4, 
            name: "Black Leather", 
            price: 120, 
        
        }, 
    ], 
     technologies: [ 
        {
            id: 1, 
            name: "Basic Package (basic sound system)",
            price: 100,
        }, 
        {
            id: 2, 
            name: "Navigation Package (includes integrated navigation controls)",
            price: 250, 
        }, 
        {
            id: 3, 
            name: "Visibility Package (includes side and reat cameras)", 
            price: 350, 
        }, 
        {
            id: 4, 
            name: "Ultra Package (includes navigation and visibility packages)", 
            price: 500,
        },
    ],
    wheels: [
        {
            id: 1, 
            name: "17-inch Pair Radial", 
            price: 50, 
        }, 
        {
            id: 2, 
            name: "17-inch Pair Radial Black", 
            price: 55,
        }, 
        {
            id: 3, 
            name: "18-inch Pair Spoke Silver", 
            price: 75, 
        }, 
        {
            id: 4, 
            name: "18-inch Pair Spoke Black", 
            price: 100, 
        },
    ], 
    types: [
    {
        id: 1, 
        name: "Car", 
    }, 
    {
        id: 2, 
        name: "SUV", 
    }, 
    {
        id: 3, 
        name: "Truck"
    },
    ],
    orders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 4,
            technologyId:3,
            wheelsId: 2,
            typeId: 2,
            timestamp: 1233, 
        },
    ],
    orderBuilder: {

    }, 
}

export const getPaints = () => {
    return database.paintColors.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({... wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const getTypes = () => {
    return database.types.map(type => ({...type}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setType = (id) => {
    database.orderBuilder.typeId = id
}


export const addOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}