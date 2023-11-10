
/*
	Update:
		index.htm
		miseaniveau.htm
		optimise.htm

	Version: 3.2 (browser.js?v=32)	
*/

var FIREFOX_VERSION = 119;
var EDGE_VERSION = 119;
var OPERA_VERSION = 104;
var CHROME_VERSION = 119;
var IE_VERSION = 7;
var SAFARI_VERSION = '?';


function get_browser() {

	var agent = navigator.userAgent;

	// Firefox
	// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0
	var firefox = agent.match(/(firefox(?=\/))\/?\s*(\d+(\.\d+)+)/i);
	if(firefox) {
		return {
			name:firefox[1],
			version:firefox[2]
		};
	}				

	// Edge
	// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62
	var edge = agent.match(/(edg(?=\/))\/?\s*(\d+(\.\d+)+)/i);
	if(edge) {
		return {
			name:"Edge",
			version:edge[2]
		};
	}

	// Opera
	// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 OPR/82.0.4227.43
	var opera = agent.match(/(opr(?=\/))\/?\s*(\d+(\.\d+)+)/i);
	if(opera) {
		return {
			name:"Opera",
			version:opera[2]
		};
	}

	// Chrome
	// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36
	var chrome = agent.match(/(chrome(?=\/))\/?\s*(\d+(\.\d+)+)/i);
	if(chrome) {
		return {
			name:chrome[1],
			version:chrome[2]
		};
	}

	// IE
	// Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; McAfee)
	var ie = agent.match(/(trident(?=\/))\/?\s*(\d+(\.\d+)+)/i);
	if(ie) {
		return {
			name:"IE",
			version:ie[2]
		};
	}

	// Safari
	// TODO

		
	return {
		name:"N/A",
		version:"N/A"
	};
}

function browser_valid() {
	
	var browser=get_browser();

	var version = parseInt( browser.version );
	//alert( version );
	
	// Firefox
	if( browser.name == "Firefox" && version < FIREFOX_VERSION ) {
		return 0;
	}

	// Edge
	if( browser.name == "Edge" && version < EDGE_VERSION ) {
		return 0;
	}

	// Opera
	if( browser.name == "Opera" && version < OPERA_VERSION ) {
		return 0;
	}

	// Chrome
	if( browser.name == "Chrome" && version < CHROME_VERSION ) {
		return 0;
	}

	// IE
	if( browser.name == "IE" && version < IE_VERSION ) {
		return 0;
	}

	// Safari
	// TODO
	
	return 1;
}
