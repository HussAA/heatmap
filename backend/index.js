const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3000;
const pool = require('./database');


//middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/customers", async(req, res) =>{
    try{
        const allPostalCodes = await pool.query("SELECT postal_code FROM customers WHERE postal_code IS NOT NULL")
        res.json(allPostalCodes.rows)
    } catch (err) {
       console.error(err.message) 
    }
})


app.listen(port, () => {
    console.log(`server has started on port ${port}`)
});