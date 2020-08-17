const express = require('express')
const router = express.Router();
const Dish = require('../models/Dish.js');
const List = require('../models/List.js')

router.post('/test', async (req, res, next) => {
    res.send("hello");
})

router.post("/add", async (req, res) => {
    console.log(req.body, 'test')
    // const { title, description, imgUrl} = req.body
    // console.log(title, description, imgUrl)
    // const newList = new Post({
    //     dish1,
    //     dish2,
    //     dish3, 
    //     dish4,
    //     dish5,
    //     dish6,
    //     dish7,
    //     dish8,
    //     dish9,
    //     dish10, 
    //     id,
    //     title,
    //     desc,
    //     imgLink  
    // })
    
    // try {
    //     const savedPost = await newPost.save()
    //     res.json(savedPost)
    // } catch (err) {
    //     console.log(err)
    //     res.json({ msg: err })
    // }
    
})



router.get('/lists', async (req, res, next) => {
    
})

module.exports = router