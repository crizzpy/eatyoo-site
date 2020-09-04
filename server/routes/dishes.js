const express = require('express')
const router = express.Router();
const Dish = require('../models/Dish.js');
const List = require('../models/List.js')

router.post('/test', async (req, res, next) => {
    res.send("hello");
})

router.patch("/edit", async (req, res) => {
    const {
        dishId,
        dishTitle, 
        dishDesc,
        dishImgUrl,
        dishTags,
        dishMemeUrl,
        dishAssociated
    } = req.body
    Dish.updateOne(req.body, err =>{
        if(err) return res.status(500).send("Server error!");
        return res.status(200).send("Admin status changed!");
    });

    // const newData = 
    // try {
    //     // Get the subscription for this customer
    //     const dish = await Dish.updateOne();
    //     // Update the subscription with the given plan
    //     const updated = await dish.update(plan);
    //     return res.send({subscription: updated});
    // } catch (e) {
    //     return next(new Error(e));
    // }
})

router.post("/add", async (req, res) => {
    // console.log(req.body, 'test dish')
    // console.log(req)20040d
    // console.log(req.body)


    const { 
        dishTitle, 
        dishDesc,
        dishImgUrl,
        dishTags,
        dishMemeUrl,
        dishAssociated
    } = req.body

    console.log(dishTitle, dishDesc, dishImgUrl)
    // console.log(JSON.stringify(dishTitle))
    const newDish = new Dish({
        dishTitle, 
        dishDesc,
        dishImgUrl,
        dishTags,
        dishMemeUrl,
        dishAssociated
    })
    
    try {
        const savedDish = await newDish.save()
        res.json(savedDish)
    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
    
})



router.get('/retrieve', async (req, res, next) => {
    Dish.find()
    .then(dishes => {
        console.log('dishes found')
        res.send(dishes);        
    })
    .catch(err => console.log(err))
})

module.exports = router