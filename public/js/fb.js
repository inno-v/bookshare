define("fb",[],function(){
  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));	
    var FBProxy = {
    	_queue:[],
    	_init:false,
    	init: function(){
    		this._init = true;
    		for(var i = 0 ; i < this._queue.length;++i){
    			this._queue[i](FB);
    		}
    		this._queue = [];
    	},
    	after:function(fn){
    		if(!this._init){
    			this._queue.push(fn);
    		}else{
    			fn(FB);
    		}
    	}
    };  
  	window.fbAsyncInit = function() {
    	FB.init({
	      appId      : '462586273786023', // App ID
	      xfbml      : true  // parse XFBML
    	});
      setTimeout(function(){
        FBProxy.init()
      },800);
    	
    };
    return FBProxy;
});