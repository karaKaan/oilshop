const express = require('express')
const app = express()
const cors = require('cors');
const pool = require('./db');

const port = process.env.PORT || 3000

//middleware
app.use(cors())
app.use(express.json())

// create a user by registering
app.post("/api/login", async(req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message)
    }
})

//Login User by login

//











app.listen(port, () => console.log(`Server runs on PORT ${port}`))
