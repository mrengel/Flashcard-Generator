var ClozeCard = function(text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "....");	
};

ClozeCard.prototype.displayPartial = function(){
 	var occur = this.fullText.indexOf(this.cloze);
	 if(occur===-1){
	  console.log("Cloze does not appear in text");
	 }
	 else{console.log("'" + this.partial + "'");};
 };




module.exports = ClozeCard;