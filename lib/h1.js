module.exports = function(lib, node){
	var attrs = node.attrs;
	var attributes;
	var contents = node.text
	if(attrs){
		var attrs_name = node.attrs[0].name;
		var attrs_val = node.attrs[0].val;
		var attrs_val2 = attrs_val.substring(1, attrs_val.length -1 );
		var attributes = attrs_name + "=" + "\"" + attrs_val2 + "\"";

		return "<h1 " + attributes + ">" + node.text + "</h1>"

		}else{
			return "<h1>" + node.text + "</h1>"

		}
	
	
	
	
}