module.exports = function(lib, node){
	var attributes = ''
	if('attrs' in node){
	  for (var i = 0; i < node.attrs.length; i++) {
	    attributes += " "  + node.attrs[i].name + '=' + node.attrs[i].val
	    
	  }
	}
	if (node.children){
	  var contents = lib.render(node)
	}
	else{
	  var contents = node.text
	}
	return '<h2' + attributes +'>' + contents + '</h2>'
}
