;(function(){
	'use strict'
	/**
 	* repository: https://github.com/yarrem/stringFormat.js 
	* Formats string in c#-like way.
	* Example: '{0} {1}'.format('Hello', 'world')
	* @this {String}
	* @param {any} Arguments that string will be replaced with. Each {n} will be raplaced with n-th argument
	* @return {string} Formated string.
	*/
	String.prototype.format = function(){
		var str = this.valueOf()
			, cons = console && console.warn; // for IE8
		if(!arguments.length){
			if(cons){
				console.warn(str + '.format(args[]) was invoked without any arguments');
			}
			return str;
		}
		var tokens = str.match(/{\d+}/gi)
			, i = 0
			, l = tokens.length;
		for(;i<l;i++){
			var token = tokens[i]
				, index = token.match(/\d+/);
			if(index>=arguments.length){
				if(cons){
					console.warn('"' + this.valueOf()
					 + '".format(args[]): there is no argument for token: '
					 + token + '. You may missed it');
				}
				continue;
			}
			str = str.replace(token, arguments[index]);
		}
		return str;
	}
})()
;
