module.exports = function(lib, node){
	var attributes = ""
	node.attrs.forEach(function(attr) {
		attributes += attr.name + '=' + attr.val
	})
	var contents = node.text
	return '<a ' + attributes + '>' + contents + '</a>'
}