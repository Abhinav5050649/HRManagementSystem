const express = require(`express`)
const User = require(`../models/user`)
const {body, validationResult} = require(`express-validator`)
const router = express.Router()
const fetchUser = require(`../middleware/fetchuser`)

router.get("/getuserdets", fetchUser, async(req, res) => {
    
    try{
        const data = User.findOne({email: req.body.email})
        res.json(data)
    } catch (error) {
        res.status(500).send("Internal Server Error!");
    }
});