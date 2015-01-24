module.exports = function(lib, node){
	var contents = node.text;

	if (node.attrs != null) {
	var attributes = node.attrs[0].name +'="'+ node.attrs[0].val.substr(1,node.attrs[0].val.length-2)+ '"';
	return '<h2 '+ attributes +'>' + contents + '</h2';
	} else {
	return '<h2>' + contents + '</h2>';
	}
}