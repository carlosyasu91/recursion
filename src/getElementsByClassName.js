// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
	
	var result = [];
	//create a default value for the node
	node = node || document.body;
	//create a variable to store the results
	var parts = node.className.split(' ');
	if(parts.indexOf(className) >= 0){
		result.push(node);
	}
	for(var i=0; i<node.children.length;i++){
		//for each child, search for elements with the target classname
		var childResults = getElementsByClassName(className, node.children[i]);
		result  = result.concat(childResults);
	}
	return result;
};
