module.exports = function(lib, node){
	var attributes = ''
	if('attrs' in node){
	  for (var i = 0; i < node.attrs.length; i++) {
	    attributes = ' ' + node.attrs[i].name + '=' + node.attrs[i].val
	    attributes = attributes.replace("\'", "\"")
	    attributes = attributes.replace("\'", "\"")
	  }
	}
	if (node.children){
	  var contents = lib.render(node)
	}
	else{
	  var contents = node.text
	}
	return '<h1' + attributes +'>' + contents + '</h1>'
}