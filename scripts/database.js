export const database = {
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

