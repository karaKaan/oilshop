const express = require('express')
const app = express()
const cors = require('cors');
const pool = require('./config/dbConfig');
const crypto = require('bcrypt')
const saltRounds = 10

const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

// create a user by registering
app.post("/register", async(req, res) => {
    try {
        const {userFirstName} = req.body
        const {userName} = req.body
        
        const {address} = req.body
        
        const {city} = req.body
        const {postalCode} = req.body
        
        const {email} = req.body
        const {password} = req.body

        //Speichere den Kunden in die Database
        crypto.hash(password, saltRounds, async(err, hash) => {
            try {
                await pool.query('insert into kunde(vorname, nachname, email, password) values($1,$2,$3,$4)',[userFirstName, userName, email, hash])
                // Speichere die Adresse 
                await pool.query(`insert into adresse(straße, fk_kunde) values($1, (select KID from Kunde where email = '${email}'))`, [address])
                
                await pool.query(`insert into stadt(stadt, plz, fk_adresse) values($1,$2, 
                    (select AID from adresse where fk_kunde = (select kid from kunde where email = '${email}')))`, [city, postalCode])
                
            } catch (err) {
                console.log(err)
            }
            })
        res.json('user Inserted')
    } catch (err) {
        console.error(err.message)
    }
})

//Login User by login

//











app.listen(port, () => console.log(`Server runs on PORT ${port}`))
