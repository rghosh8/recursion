// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null){
  	return '' + null + '';
  }
   if(typeof obj === 'boolean'){
    return '' + obj + '';
  }
  if(typeof obj === undefined){
  	return 'undefined';
  }
  if(typeof obj == 'number'){
  	return '' + obj;
  }
  if(typeof obj == 'string'){
  	return '"' + obj + '"';
  }
  if(Array.isArray(obj) && obj.length === 0){
   	return "[]";
  }
  if(Array.isArray(obj)){
    var output = "[";
    for (var i = 0; i < obj.length; i++){
      output += stringifyJSON(obj[i]) + ',';
    } 
    return output.slice(0, output.length-1) + "]";
   }
   if(Object.keys(obj).length===0){
   	return '{}';
   }
   if(Object.keys(obj).length!==0){
    var output = "{";
    for (var key in obj){
        if(typeof obj[key]!=="undefined" && typeof obj[key]!=="function"){
          output += stringifyJSON(key)  + ':' + stringifyJSON(obj[key]) + ',';
        } 
    }
    if(output === "{"){
      return '{}';
    }
    return output.slice(0, output.length-1) + "}";
   }
};
