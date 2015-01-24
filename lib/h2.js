module.exports = function(lib, node){
	var attributesHtml ='';
	var attributes = node.attrs;
	for(index in attributes)
		attributesHtml += " " +  attributes[index].name + "="  + attributes[index].val;

	var contents = node.text

	return '<h2' + attributesHtml + '>' + node.text + '</h2>'
}
