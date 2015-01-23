module.exports = function(lib, node){
	if (node.children) {
		var attributes = node.attrs
        var contents = lib.render(node)
        var w = lib.render(contents)
        console.log(attributes)
        return '<div>' + contents + '</div>'
    }else{
    	return '<div></div>'
    }
}