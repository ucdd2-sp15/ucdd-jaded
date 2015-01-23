module.exports = function(lib, node){
	var attributes = node.attrs[0].name+"=\""+node.attrs[0].val.replace(/\'/g,"")+"\""
	var contents = node.text
	return '<a ' + attributes + '>' + contents + '</a>'
}