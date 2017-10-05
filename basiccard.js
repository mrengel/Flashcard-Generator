var inquirer = require("inquirer");

var BasicCard = function(front, back){
	this.front= front;
	this.back = back;
	this.trivia = function(){
		inquirer.prompt([
		{
			name: "front",
			message: this.front

		},
			]).then(function(answers){
				if(answers.name===this.back){
					console.log(answers.name + "\n---------");
				}

			});

	}
}






module.exports = BasicCard;