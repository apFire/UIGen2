/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("UIGen2").service('DataInterop', function() {
	var data = null;
    return {
	    getJson:function(){
	    	debugger;
	    	return data;
	    },
	    setJson:function(value){
	    	debugger;
	    	data = value;
	    }
    }
});
