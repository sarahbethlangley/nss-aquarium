/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            type: "Tuna",
            location: "New Zealand",
            color: "blue",
            alive: true
            
        },
        {
            name: "Regina",
            food: "fish flakes",
            size: 4,
            type: "Goldfish", 
            location: "Your Mom's Basement",
            color: "gold",
            alive: false
        },
        {
            name: "Cardi B",
            food: "pizza",
            size: 1,
            type: "Mahi Mahi",
            location: "Pacific Ocean",
            color: "green",
            alive: true
        },
        {
            name: "Dracula",
            food: "blood",
            size: 8,
            type: "Salmon",
            location: "Gibson Co. Lake",
            color: "pink",
            alive: false
        },
        {
            name: "Bob",
            food: "cats",
            size: 9,
            type: "Catfish",
            location: "Meow Meow Bay",
            color: "purple",
            alive: true
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}