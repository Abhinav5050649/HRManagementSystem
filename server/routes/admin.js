const express = require(`express`)
const User = require(`../models/user`)
const {body, validationResult} = require(`express-validator`)
const router = express.Router()
const fetchUser = require(`../middleware/fetchuser`)

router.get("/getuser", fetchUser, async(req, res) => {
    if (req.body.status === "A") 
    {
        try{
            const userData = User.findOne({email: req.body.email})
            if (!userData)  res.status(404).send("Not Found")
            else res.send(userData)
        }   catch(error) {
            res.status(500).send("Internal Server Error!")
        }
    }else{
        res.status(403).send("Forbidden!")
    }
})

router.put("/updateuserdets", fetchUser, async(req, res) => {
    if (req.body.status === "A") 
    {
        try{
            const userData = User.findOne({email: req.body.email})
            if (!userData)  res.status(404).send("Not Found")
            else 
            {
                var {name, dob, salary, address, position, startDate, dateOfHiring, employeeStatus} = req.body
                const newData = {}
                if (name) newData["name"] = name 
                if (dob) newData["dob"] = dob
                if (salary) newData["salary"] = salary
                if (address)    newData["address"] = address
                if  (position)  newData["position"] = position
                if (startDate)  newData["startDate"] = startDate
                if (dateOfHiring)   newData["dateOfHiring"] = dateOfHiring
                if (employeeStatus) newData["employeeOrNot"] = employeeStatus
                
                const Sser = User.findOneAndUpdate(
                    {_id: userData._id},
                    {$set : newData},
                    {new: true}
                )

                if (Sser)   res.status(200).send({"success": true})
                else    res.status(500).send("Internal Server Error")
            }

        }   catch(error) {
            res.status(500).send("Internal Server Error!")
        }
    }else{
        res.status(403).send("Forbidden!")
    }
})

router.delete("/deleteuser", fetchUser, async(req, res) => {
    if (req.body.status === "A") 
    {
        try{
            const userData = User.findOne({email: req.body.email})
            if (!userData)  res.status(404).send("Not Found")
            else 
            {
                const Sser = User.findOneAndDelete(
                    {_id: userData._id}
                )

                if (Sser)   res.status(200).send({"success": true})
                else    res.status(500).send("Internal Server Error")
            }
        }   catch(error) {
            res.status(500).send("Internal Server Error!")
        }
    }else{
        res.status(403).send("Forbidden!")
    }
})

module.exports = router;