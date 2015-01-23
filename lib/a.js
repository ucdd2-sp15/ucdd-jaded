module.exports = function(lib, node){
	var attributes = "";
	var contents = "";
	if (node.children) contents = lib.render(node);
    else contents = node.text;
	for (var j = 0; j < node.attrs.length; j++) {
		attributes += node.attrs[j].name + "=" + node.attrs[j].val.replace(/'/g, '"');
	}
	return '<a ' + attributes + '>' + contents + '</a>';
}
