const express = require('express');
const index = express();
const port = 3000;

index.get("/", function(req, res){
  res.send("Hi there");
});

index.get("/bye", function(req, res){
  res.send("goodbye bruh");
});

index.get("/dog", function(req, res){
  res.send("Where my dogs at?");
});

index.get("/happy", function(req, res){
  res.send("Clap along if you feel like a room without a roof");
});

index.get("/a/:examples", function(req, res){
  var examples = req.params.examples;
  res.send("Welcome to the " + examples.toUpperCase() + " page!")
});

index.get("/a/:examples/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("Welcome to the party Pop Smoke");
});

index.get("*", function(req, res){
  res.send("this page didn't exist ever");
});


index.listen(port, function(){
  console.log('Server listening on port 3000');
});


//this code was written by github: @andrewlopezcodes