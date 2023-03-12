const connectToMongo = require(`./db`)
const express = require(`express`)
const cors = require(`cors`)
const app = express()
const PORT = 5000
connectToMongo()

app.use(express.json())
app.use(cors())

//Add routes definition

app.get(`/`, (req, res) => {
    res.send(`Testing`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})