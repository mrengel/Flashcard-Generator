var fs = require("fs");
var BasicCard = require("./basiccard.js");
var ClozeCard = require("./clozecard.js");

var questionOne = new BasicCard(
	"What is the name of the MLB team in Cleveland", "Indians");

var questionTwo = new BasicCard(
	"Which pitcher holds the Indians record for most wins", "Feller");

var questionThree = new BasicCard(
	"Which hitter holds the Indians record for most homeruns", "Thome");

var questionFour = new BasicCard(
	"The Indians have won how many World Series Championships?", "Two");

var questionFive = new BasicCard(
	"The Indians are members of which league?", "American");

questionOne.trivia();
