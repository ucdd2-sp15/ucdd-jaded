module.exports = function(lib, node){
<<<<<<< HEAD
	var contents = node.text;

	if (node.attrs != null) {
	var attributes = node.attrs[0].name +'="'+ node.attrs[0].val.substr(1,node.attrs[0].val.length-2)+ '"';
	return '<h1 '+ attributes +'>' + contents + '</h1>';
	} else {
	return '<h1>' + contents + '</h1>';
	}
