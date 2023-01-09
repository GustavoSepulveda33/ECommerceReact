

import express from "express"; 
import mysql from "mysql"; 
import cors from "cors";


// Creating app using an express function: 
const app = express(); 

// Creating database using createConnection method and mysql: 
const db = mysql.createConnection({

    host: "localhost", 
    user: 'root',
    password: "password",
    database: "testsubject1"

})

// MIDDLEWARE: 
app.use(express.json());
app.use(cors());


// Testing connection to backend on port 8000: 
app.get("/", (req, res) => {

    res.json("hello this is the backend");     

})


// First endpoint to pull information from MySQL database: 

// "/Products" directs app to MySQL table named "Products"
app.get("/Products", (req, res) => {


    const q = "SELECT * FROM Products"; 

    db.query(q, (err, data) => {

        if(err) return res.json(err)
        return res.json(data)

    })

})


// Endpoint to pull info from Cart table and display info in Cart Page: 
app.get("/Cart", (req, res) => {


    const q = "SELECT * FROM Cart"; 

    db.query(q, (err, data) => {

        if(err) return res.json(err)
        return res.json(data)

    })

})


//Endpoint to delete cart entries: 
app.delete("/CartDel/:cartIDs", (req, res) => {

    const deleteID = req.params.cartIDs

    const q = `DELETE FROM Cart WHERE cartID = ${deleteID}`

    db.query(q, (err, data) => {

        if(err) return res.json(err)
        return res.json("product successfully deleted.")

    })


})










// FILTER ENDPOINTS 

// price filter: 
app.get("/Products/:prices", (req, res) => {

    const price = req.params.prices ; 

    const q = `SELECT * FROM Products WHERE productPrice <= ${price}`

    


    db.query(q, (err, data) => {

        if (err) return res.json(err)
        return res.json(data); 
        
    })

})


// category filter: 
app.get("/Type/:categories", (req, res) => {

    const category = req.params.categories; 

    const q = `SELECT * FROM Products WHERE productCat = ${category}`




    db.query(q, (err, data) => {

        if (err) return res.json(err)
        return res.json(data); 
        
    })

})









// USE FOR ADDING PRODUCTS INTO CART

app.post("/Cart", (req, res) => {

    const q = "INSERT INTO Cart (`ID`, `addedProduct`, `addedPrice`) VALUES (?)"

    const values  = [
        req.body.ID,
        req.body.addedProduct,
        req.body.addedPrice
    ]

    db.query(q, [values], (err, data) => {

        if(err) return res.json(err)
        return res.json("product added to cart successfully.")

    } )

})






// APP PORT NUMBER FOR BACKEND SERVER: 
app.listen(8000, () => {

    console.log("Connected to backend");

})