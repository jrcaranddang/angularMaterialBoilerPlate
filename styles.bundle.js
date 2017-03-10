webpackJsonp([1,3],{

/***/ 169:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(758);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(812)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(169)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n:root {\n    --primary-color: #03FE9A;\n    --accent-color: #03e5fe;\n    -webkit-font-smoothing: antialiased;\n    color: #fff;\n}\n\nbody {\n    font-family: \"Raleway\", sans-serif;\n    /*background: #222;*/\n    background-image: -webkit-radial-gradient(50% 90%, ellipse cover, #444 10%, #333 75%);\n    background-image: radial-gradient(50% 90%, ellipse cover, #444 10%, #333 75%);\n    margin: 0;\n}\n\np {\n    font-weight: 400;\n    text-transform: none;\n    line-height: 20px;\n}\n\nspan {\n    display: block;\n}\n\n#top-right {\n    font-size: 15px;\n    line-height: 24px;\n    margin: 0;\n    position: absolute;\n    right: 0px;\n    top: 150px;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    z-index: 99;\n}\n\n#top-right p {\n    margin: 0;\n}\n\n#logo {\n    position: fixed;\n    top: 57px;\n    left: 50px;\n    z-index: 99;\n}\n\n#logo a {\n    color: inherit;\n    cursor: pointer;\n    display: block;\n    text-decoration: none;\n}\n\n#scroll-down {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    bottom: 5%;\n    cursor: pointer;\n    position: absolute;\n    z-index: 99;\n}\n\n#scroll-down a {\n    color: inherit;\n}\n\n#fab {\n    position: fixed;\n    bottom: 5%;\n    right: 3%;\n    z-index: 99;\n}\n\n/********************common********************/\n.flex-center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.full-section {\n    height: 100vh;\n    min-height: 700px;\n    position: relative;\n}\n\n.flex-100 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 100%;\n            flex: 1 100%; \n}\n\n.flex-auto {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto; \n}\n\n.d-flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.p-20 {\n    padding: 20px;\n}\n\n.p-t-50 {\n    padding-top: 50px;\n}\n\n.m-20 {\n    margin: 20px;\n}\n\n.m-t-30 {\n    margin-top: 30px;\n}\n\n.font-12 {\n    font-size: 12px;\n}\n\n/*\n * box shadows\n */\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n\n.card-1:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\n}\n\n\n\n/********************nav section********************/\n#top {\n    /*background: linear-gradient(10deg, var(--primary-color), var(--accent-color));*/\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 97;\n    padding: 60px 0 80px;\n}\n\nmd-toolbar ul {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 100%;\n            flex: 1 100%;\n    -webkit-margin-before: 0;\n    -webkit-margin-after: 0;\n    -webkit-padding-start: 0;\n    margin: 0;\n    margin-left: 2em;\n    width: 100%;\n}\n\n.nav-link {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto;\n    font-size: 15px;\n    list-style-type: none;\n}\n\n.nav-item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 auto;\n            flex: 1 auto;\n    color: inherit;\n    padding: 20px;\n    text-decoration: none;\n}\n\n/********************hero section********************/\n#hero {\n    background: url(" + __webpack_require__(814) + ") no-repeat center center;\n    background-size: cover;\n}\n\n.hero-desc {\n    background-image: -webkit-radial-gradient(50% 75%, ellipse cover, transparent, rgba(34,34,34,0.75) 75%);\n    background-image: radial-gradient(50% 75%, ellipse cover, transparent, rgba(34,34,34,0.75) 75%);\n    /*background: radial-gradient(rgba(34,34,34,0.75), #222 75%);*/\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n/********************about section********************/\n.about {\n    background: #444;\n    min-height: 500px;\n    height: 50vh;\n}\n\n/********************projects section********************/\n.projects {\n    height: 100%;\n}\n\n/********************contact section********************/\n.contact {\n}\n\nmd-grid-list .form-container {\n    /*margin: 5%;*/\n    /*width: 100vw;*/\n}\n\n.form-container textarea {\n    font-family: inherit;\n    height: 100%;\n    line-height: 1;\n}\n\n.form-container button, .form-container button:hover {\n    color: inherit;\n    cursor: pointer;\n    background: none;\n    border: 2px solid;\n}\n\n.form-container button:hover {\n    background: #fff;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    color: #333;\n    border-color: #333;\n}", ""]);

// exports


/***/ }),

/***/ 812:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fishing.jpg";

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(459);


/***/ })

},[820]);
//# sourceMappingURL=styles.bundle.js.map