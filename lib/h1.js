module.exports = function(lib, node){
	var attributes = ''
	for (i in node.attrs){
		attributes += " " + node.attrs[i].name + "=" + node.attrs[i].val
	}
	var contents = node.text
	attributes = attributes.replace(/\'/g, "\"")
	return '<h1' + attributes + '>' + node.text + '</h1>'
}
