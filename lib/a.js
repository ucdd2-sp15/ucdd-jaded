module.exports = function(lib, node){
	var attributes = 'attributes-not-yet-implemented'
	if(node.children)
		var contents = lib.render(node)
	else
		var contents = node.text
	return '<a ' + attributes + '>' + contents + '</a>'
}