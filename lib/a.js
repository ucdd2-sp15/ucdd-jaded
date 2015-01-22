module.exports = function(lib, node){
	var attributesHtml ='';
	var attributes = node.attrs;
	for(index in attributes)
		attributesHtml += " " +  attributes[index].name + "="  + attributes[index].val;

	if(node.children)
		var contents = lib.render(node)
	else
		var contents = node.text

	return '<a' + attributesHtml + '>' + contents + '</a>'
}