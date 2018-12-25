// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var element = document.body; //
	//check if there is matching class
	//console.log(element.childNodes)
	var output = [];
	var helperFunction = function(node){
		if(node.classList.contains(className)){
			output.push(node);
		}
		for (var i = 0; i < node.childNodes.length; i++){
			if(node.childNodes[i].nodeName !== "#text"){
				helperFunction(node.childNodes[i]);
			}
		}
	}
	helperFunction(element);
	console.log("RAJAT_GHOSH")
	return output;	
};
