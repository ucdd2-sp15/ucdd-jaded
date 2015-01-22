module.exports = function(lib, node){

	var valClean = node.attrs[0].val.replace("\'", "\""); //Removing apostrophe at beginning of url
	var valClean = valClean.replace("\'", "\""); //Removing apostrophe at end of url
	var attributes = node.attrs[0].name + '=' + valClean; //setup link section

	//If there is a more complicated tree, then look for the link text within it
	//Otherwise, the link text is simply node.text
	var contents = '';
	if (node.children) {
		contents = lib.render(node);
	}
	else{
		contents = node.text;
	}

	return "<a " + attributes + ">" + contents + "</a>"
}