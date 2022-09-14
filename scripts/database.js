/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Betty Rae",
            food: "crustaceans",
            size: 3,
            type: "Tuna",
            location: "New Zealand",
            color: "blue",
            image: "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2021/01/shutterstock_117425023-1-scaled.jpg"
            
        },
        {
            name: "Regina",
            food: "fish flakes",
            size: 4,
            type: "Goldfish", 
            location: "Your Mom's Basement",
            color: "gold",
            image: "https://www.mysis.com/hobbyist/wp-content/uploads/sites/2/2018/09/Goldfish-Image.jpg"
        },
        {
            name: "Cardi B",
            food: "pizza",
            size: 1,
            type: "Shark",
            location: "Pacific Ocean",
            color: "green",
            image: "https://www.billboard.com/wp-content/uploads/2022/03/Sharki-B-Cardi-B-Baby-Sharks-Big-Show-Nickelodeon-2022-billboard-1548.jpg"
        },
        {
            name: "Dracula",
            food: "blood",
            size: 8,
            type: "Salmon",
            location: "Gibson Co. Lake",
            color: "pink",
            image: "https://strikeandcatch.com/wp-content/uploads/2021/08/brendon-sager-min-2.jpg"
        },
        {
            name: "Earl",
            food: "cats",
            size: 9,
            type: "Catfish",
            location: "Meow Meow Bay",
            color: "purple",
            image: "https://www.thepetsandlove.com/wp-content/uploads/2019/09/shutterstock_255289990-730x487.jpg"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}