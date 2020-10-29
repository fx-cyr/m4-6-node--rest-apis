'use strict';
const { clients } = require("./data/clients")
const { words } = require("./data/words")
const { v4: uuidv4 } = require('uuid')
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
console.log(uuidv4())
express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints that retrieves a list of all the clients. 
  .get("/customers", (req, res) => {
  const data = clients
return res.status(200).json({status: 200, data})
  })

  // endpoints that retrieves a specific customer by id. 
  .get("/customers/:id", (req, res) => {
    const data = clients.filter(client => client.id === req.params.id)

    if (data.length > 0) {
      return res.status(200).json({
        status: 200,
        data
      }) 
    }
  else {
    return res.status(404).json({
      status: 404,
      message: "Customer not found"
  })}
    })
  
    // endpoints that adds new customer
  .post("/customers", (req, res) => {
 const data = req.body
//  data.email = "dunlaphubbard@cedward.com"
 const existingCustomer = clients.filter((client) => {
   if (client.email === data.email) {
     return true
   }
 })

 if (existingCustomer.length > 0) {
   return res.status(400).json({
    status: 400,
    message: "Error - Existing customer associated with that email."
})
 }
 else {
   data.id = uuidv4()
   clients.push(data)
   return res.status(200).json({
    status: 200,
    message: "Success - new customer added!"
})
 }
      })


      // endpoints that deletes a specific customer by id. 
  .delete("/customers/:id", (req, res) => {
    const userId = req.params.id
    const updatedList = clients.filter((client) => {
      return client.id !== userId
    })

    if (updatedList.length === clients.length) {
      return res.status(400).json({
        status: 400,
        message: "Error - customer not found."
    })
    }
    else {
      return res.status(200).json({
        status: 200,
        message: "Customer successfully deleted!"
    })
    }
    })

      //endpoints that retrieves a random word    
  .get("/hangman/word", (req,res) => {
    let word = words[Math.floor(Math.random() * words.length)]
    let data = {id: word.id, letterCount: word.letterCount}
    return res.status(200).json({
      status: 200,
      data
    })
  })

  //endpoints that retrieves a random word    
  .get("/hangman/guess/:id/:letter", (req,res) => {
    const id = req.params.id;
    const letter = req.params.letter;
    const wordToGuess = words.filter((word) => id === word.id);
    const word = wordToGuess[0].word;
    const lettersArr = word.split("");
    let guessArr = [];
    lettersArr.forEach((guess) => {
      if (guess === letter) {
        guessArr.push(true);
      } else {
        guessArr.push(false);
      }
    });
    res.status(200).json({ status: 200, guessArr })
  })

    //endpoints that retrieves a specific word
    .get("/hangman/word/:id", (req, res) => {
      const data = words.filter(word => word.id === req.params.id)
  
      if (data.length > 0) {
        return res.status(200).json({
          status: 200,
          data
        }) 
      }
    else {
      return res.status(404).json({
        status: 404,
        message: "Word not found"
    })}
      })



  .get("*", (req, res) => {
    return res.status(200).json({status: 200, message: "This is not the page you're looking for!"})
      })




  .listen(8000, () => console.log(`Listening on port 8000`));
