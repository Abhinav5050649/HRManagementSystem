const express = require(`express`)
const User = require(`../models/user`)
const {body, validationResult} = require(`express-validator`)
const router = express.Router()
const fetchUser = require(`../middleware/fetchuser`)