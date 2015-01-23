module.exports = function(lib, node){
	var attributes = node.attrs[0].name + '=' + node.attrs[0].val
	if (node.children) {
		var contents = lib.render(node)
	} else {
		var contents = node.text
	}
	return '<a ' + attributes + '>' + contents + '</a>'
}