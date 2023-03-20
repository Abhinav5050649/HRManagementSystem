const connectToMongo = require(`./db`)
const express = require(`express`)
const cors = require(`cors`)
const app = express()
const port = 5000
const bodyParser = require("body-parser")
connectToMongo()

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Add routes definition
app.use("/api/auth",require("./routes/auth"))
app.use("/api/admin",require("./routes/admin"))
app.use("/api/userpath",require("./routes/userpath"))

app.get("/", (req, res) => {
    res.send(`Testing`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})