var ClozeCard = function(text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "....");
	// this.clozeOccur = function() {
	// 	var occur = text.indexOf(cloze);
	//  	if(occur===-1){
	//  		console.log("Cloze does not appear in text");
	//  	}
	//  	console.log("'" + this.partial + "'");
	//  };
};

ClozeCard.prototype.displayPartial = function(){
 	var occur = this.fullText.indexOf(this.cloze);
	 if(occur===-1){
	  console.log("Cloze does not appear in text");
	 }
	 else{console.log("'" + this.partial + "'");};
 };


var questionOne = new ClozeCard(
	"Indians is the name of the MLB team in Cleveland.", "Indians");
var questionThree = new ClozeCard(
 "Thome holds the Indians record for most homeruns.", "edwin");

//console.log(questionOne.partial);

//questionOne.clozeOccur();

questionOne.displayPartial();

questionThree.displayPartial();

module.exports = ClozeCard;