module.exports = function(lib, node){
	var attributesHtml ='';
	var attributes = node.attrs;
	if(attributes)
		attributesHtml += " " +  attributes[0]['name'] + "="  + attributes[0]['val'];
	var contents = node.text
	return '<h1' + attributesHtml + '>' + node.text + '</h1>'
}