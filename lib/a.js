module.exports = function(lib, node){
	var attributes = node.attrs[0].name +'="'+ node.attrs[0].val.substring(1, node.attrs[0].val.length -1) + '"'
	var contents = node.text
	return '<a ' + attributes + '>' + contents + '</a>'
}