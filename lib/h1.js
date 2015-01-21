module.exports = function(lib, node){
	var attributes = node.attrs
	var contents = node.text
	return '<h1 ' + attributes + '>' + contents + '</h1>'
}