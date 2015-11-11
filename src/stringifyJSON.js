// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var current = '';
  var first = true;
  if(obj === undefined && typeof obj === 'function'){
    return ;
  }
  if(obj === null){
    return 'null';
  } else if(typeof obj === 'string'){
    return '"' + obj.toString() + '"'
  } else if(obj.constructor === Array){
     var result = '[';
     for(var i=0;i<obj.length;i++){
      if(typeof obj[i] !== 'function' && obj[i] !== undefined){
      result += stringifyJSON(obj[i]);
      if(i<obj.length-1){
       result+=',';
      }
    }
     }
     result+= ']';
     return result;
  } 
  else if(typeof obj !== 'object'){
    return obj.toString();
  } else {
  for(var prop in obj){    
    if(typeof obj[prop] !== 'function' && obj[prop] !== undefined){
    if(!first){
      current += ','
    }
    if(typeof obj[prop] !== 'object' && obj[prop] === null){
      current+= '"' + prop + '"' +':'+ stringifyJSON(obj[prop]);
    } else {    
      current += '"' + prop + '"' + ':' + stringifyJSON(obj[prop]);
    }

      first = false;
    }
  }

  }
  return  '{' + current + '}';
};