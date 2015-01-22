module.exports = function(lib, node){
	var attributes = node.attrs[0].name +'="'+ node.attrs[0].val.substr(1,node.attrs[0].val.length-2)+ '"';
	
	if (node.children) {
	var contents = lib.render(node)
	return '<a '+ attributes +'>' + contents + '</a>';
	} else {
	return '<a '+ attributes +'>' + node.text + '</a>';
	}
}
