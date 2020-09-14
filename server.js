'use strict';
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/pizza', (req, res) => {
    res.json({
        pizzas: [{
                id: 0,
                name: 'Пепперони Фреш с перцем',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 803,
                category: 0,
                rating: 4
            },
            {
                id: 1,
                name: 'Сырная',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
                types: [0],
                sizes: [26, 40],
                price: 245,
                category: 1,
                rating: 6
            },
            {
                id: 2,
                name: 'Цыпленок барбекю',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
                types: [0],
                sizes: [26, 40],
                price: 295,
                category: 1,
                rating: 4
            },
            {
                id: 3,
                name: 'Кисло-сладкий цыпленок',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
                types: [0],
                sizes: [26, 40],
                price: 295,
                category: 1,
                rating: 4
            },
            {
                id: 4,
                name: 'Чизбургер-пицца',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 415,
                category: 3,
                rating: 8
            },
            {
                id: 5,
                name: 'Крэйзи пепперони',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
                types: [0],
                sizes: [30, 40],
                price: 580,
                category: 2,
                rating: 2
            },
            {
                id: 6,
                name: 'Пепперони',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 675,
                category: 1,
                rating: 9
            },
            {
                id: 7,
                name: 'Маргарита',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 450,
                category: 4,
                rating: 10
            },
            {
                id: 8,
                name: 'Четыре сезона',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 395,
                category: 5,
                rating: 10
            },
            {
                id: 9,
                name: 'Овощи и грибы',
                imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
                types: [0, 1],
                sizes: [26, 30, 40],
                price: 285,
                category: 5,
                rating: 7
            }
        ]
    })
})

app.listen(port)