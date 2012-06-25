/*Version:1.10*/
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);(function(){var e=Math,s=(/webkit/i).test(navigator.appVersion)?"webkit":(/firefox/i).test(navigator.userAgent)?"Moz":"opera" in window?"O":"",n="WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix(),k="ontouchstart" in window,c=s+"Transform" in document.documentElement.style,p=(/android/gi).test(navigator.appVersion),r=(/iphone|ipad/gi).test(navigator.appVersion),a=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(m){window.setTimeout(m,17)}})(),o="onorientationchange" in window?"orientationchange":"resize",g=k?"touchstart":"mousedown",f=k?"touchmove":"mousemove",h=k?"touchend":"mouseup",d=k?"touchcancel":"mouseup",q=s=="Moz"?"DOMMouseScroll":"mousewheel",b="translate"+(n?"3d(":"("),j=n?",0)":")",t=function(v,m){var w=this,x=document,u;w.wrapper=typeof v=="object"?v:x.getElementById(v);w.wrapper.style.overflow="hidden";w.scroller=w.wrapper.children[0];w.options={hScroll:true,vScroll:true,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:p,hideScrollbar:r,fadeScrollbar:r&&n,scrollbarClass:"",zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(y){y.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(u in m){w.options[u]=m[u]}w.options.useTransform=c?w.options.useTransform:false;w.options.hScrollbar=w.options.hScroll&&w.options.hScrollbar;w.options.vScrollbar=w.options.vScroll&&w.options.vScrollbar;w.options.zoom=w.options.useTransform&&w.options.zoom;w.scroller.style[s+"TransitionProperty"]=w.options.useTransform?"-"+s.toLowerCase()+"-transform":"top left";w.scroller.style[s+"TransitionDuration"]="0";w.scroller.style[s+"TransformOrigin"]="0 0";if(w.options.useTransform){w.scroller.style[s+"Transform"]=b+"0,0"+j}else{w.scroller.style.cssText+=";top:0;left:0"}w.refresh();w._bind(o,window);if(!k){w._bind("mouseout",w.wrapper)}w._bind(g);w._bind(q)};t.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],handleEvent:function(u){var m=this;switch(u.type){case g:m._start(u);break;case f:m._move(u);break;case h:case d:m._end(u);break;case o:m._resize();break;case q:m._wheel(u);break;case"mouseout":m._mouseout(u);break}},_scrollbar:function(m){var v=this,w=document,u;if(!v[m+"Scrollbar"]){if(v[m+"ScrollbarWrapper"]){if(c){v[m+"ScrollbarIndicator"].style[s+"Transform"]=""}v[m+"ScrollbarWrapper"].parentNode.removeChild(v[m+"ScrollbarWrapper"]);v[m+"ScrollbarWrapper"]=null;v[m+"ScrollbarIndicator"]=null}return}if(!v[m+"ScrollbarWrapper"]){u=w.createElement("div");if(v.options.scrollbarClass){u.className=v.options.scrollbarClass+m.toUpperCase()}else{u.style.cssText="position:absolute;z-index:100;"+(m=="h"?"height:7px;bottom:1px;left:2px;right:"+(v.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(v.hScrollbar?"7":"2")+"px;top:2px;right:1px")}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:opacity;-"+s+"-transition-duration:"+(v.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(v.options.hideScrollbar?"0":"1");v.wrapper.appendChild(u);v[m+"ScrollbarWrapper"]=u;u=w.createElement("div");if(!v.options.scrollbarClass){u.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+s+"-background-clip:padding-box;-"+s+"-box-sizing:border-box;"+(m=="h"?"height:100%":"width:100%")+";-"+s+"-border-radius:3px;border-radius:3px"}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:-"+s+"-transform;-"+s+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+s+"-transition-duration:0;-"+s+"-transform:"+b+"0,0"+j;v[m+"ScrollbarWrapper"].appendChild(u);v[m+"ScrollbarIndicator"]=u}if(m=="h"){v.hScrollbarSize=v.hScrollbarWrapper.clientWidth;v.hScrollbarIndicatorSize=e.max(e.round(v.hScrollbarSize*v.hScrollbarSize/v.scrollerW),8);v.hScrollbarIndicator.style.width=v.hScrollbarIndicatorSize+"px";v.hScrollbarMaxScroll=v.hScrollbarSize-v.hScrollbarIndicatorSize;v.hScrollbarProp=v.hScrollbarMaxScroll/v.maxScrollX}else{v.vScrollbarSize=v.vScrollbarWrapper.clientHeight;v.vScrollbarIndicatorSize=e.max(e.round(v.vScrollbarSize*v.vScrollbarSize/v.scrollerH),8);v.vScrollbarIndicator.style.height=v.vScrollbarIndicatorSize+"px";v.vScrollbarMaxScroll=v.vScrollbarSize-v.vScrollbarIndicatorSize;v.vScrollbarProp=v.vScrollbarMaxScroll/v.maxScrollY}v._scrollbarPos(m,true)},_resize:function(){this.refresh()},_pos:function(m,u){m=this.hScroll?m:0;u=this.vScroll?u:0;if(this.options.useTransform){this.scroller.style[s+"Transform"]=b+m+"px,"+u+"px"+j+" scale("+this.scale+")"}else{m=e.round(m);u=e.round(u);this.scroller.style.left=m+"px";this.scroller.style.top=u+"px"}this.x=m;this.y=u;this._scrollbarPos("h");this._scrollbarPos("v")},_scrollbarPos:function(m,w){var v=this,x=m=="h"?v.x:v.y,u;if(!v[m+"Scrollbar"]){return}x=v[m+"ScrollbarProp"]*x;if(x<0){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]+e.round(x*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px"}x=0}else{if(x>v[m+"ScrollbarMaxScroll"]){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]-e.round((x-v[m+"ScrollbarMaxScroll"])*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px";x=v[m+"ScrollbarMaxScroll"]+(v[m+"ScrollbarIndicatorSize"]-u)}else{x=v[m+"ScrollbarMaxScroll"]}}}v[m+"ScrollbarWrapper"].style[s+"TransitionDelay"]="0";v[m+"ScrollbarWrapper"].style.opacity=w&&v.options.hideScrollbar?"0":"1";v[m+"ScrollbarIndicator"].style[s+"Transform"]=b+(m=="h"?x+"px,0":"0,"+x+"px")+j},_start:function(B){var A=this,u=k?B.touches[0]:B,v,m,C,z,w;if(!A.enabled){return}if(A.options.onBeforeScrollStart){A.options.onBeforeScrollStart.call(A,B)}A.moved=false;A.animating=false;A.zoomed=false;A.distX=0;A.distY=0;A.absDistX=0;A.absDistY=0;A.dirX=0;A.dirY=0;if(A.options.zoom&&k&&B.touches.length>1){z=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);A.touchesDistStart=e.sqrt(z*z+w*w);A.originX=e.abs(B.touches[0].pageX+B.touches[1].pageX-A.wrapperOffsetLeft*2)/2-A.x;A.originY=e.abs(B.touches[0].pageY+B.touches[1].pageY-A.wrapperOffsetTop*2)/2-A.y}if(A.options.momentum){if(A.options.useTransform){v=getComputedStyle(A.scroller,null)[s+"Transform"].replace(/[^0-9-.,]/g,"").split(",");m=v[4]*1;C=v[5]*1}else{m=getComputedStyle(A.scroller,null).left.replace(/[^0-9-]/g,"")*1;C=getComputedStyle(A.scroller,null).top.replace(/[^0-9-]/g,"")*1}if(m!=A.x||C!=A.y){A.steps=[];A._pos(m,C)}}A.absStartX=A.x;A.absStartY=A.y;A.startX=A.x;A.startY=A.y;A.pointX=u.pageX;A.pointY=u.pageY;A.startTime=B.timeStamp||(new Date()).getTime();if(A.options.onScrollStart){A.options.onScrollStart.call(A,B)}A._bind(f);A._bind(h);A._bind(d)},_move:function(B){var z=this,C=k?B.touches[0]:B,x=C.pageX-z.pointX,v=C.pageY-z.pointY,m=z.x+x,D=z.y+v,y,w,u,A=B.timeStamp||(new Date()).getTime();if(z.options.onBeforeScrollMove){z.options.onBeforeScrollMove.call(z,B)}if(z.options.zoom&&k&&B.touches.length>1){y=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);z.touchesDist=e.sqrt(y*y+w*w);z.zoomed=true;u=1/z.touchesDistStart*z.touchesDist*this.scale;if(u<0.5){u=0.5}else{if(u>z.options.zoomMax){u=z.options.zoomMax}}z.lastScale=u/this.scale;m=this.originX-this.originX*z.lastScale+this.x,D=this.originY-this.originY*z.lastScale+this.y;this.scroller.style[s+"Transform"]=b+m+"px,"+D+"px"+j+" scale("+u+")";return}z.pointX=C.pageX;z.pointY=C.pageY;if(m>0||m<z.maxScrollX){m=z.options.bounce?z.x+(x/2):m>=0||z.maxScrollX>=0?0:z.maxScrollX}if(D>0||D<z.maxScrollY){D=z.options.bounce?z.y+(v/2):D>=0||z.maxScrollY>=0?0:z.maxScrollY}if(z.absDistX<6&&z.absDistY<6){z.distX+=x;z.distY+=v;z.absDistX=e.abs(z.distX);z.absDistY=e.abs(z.distY);return}if(z.options.lockDirection){if(z.absDistX>z.absDistY+5){D=z.y;v=0}else{if(z.absDistY>z.absDistX+5){m=z.x;x=0}}}z.moved=true;z._pos(m,D);z.dirX=x>0?-1:x<0?1:0;z.dirY=v>0?-1:v<0?1:0;if(A-z.startTime>300){z.startTime=A;z.startX=z.x;z.startY=z.y}if(z.options.onScrollMove){z.options.onScrollMove.call(z,B)}},_end:function(z){if(k&&z.touches.length!=0){return}var x=this,F=k?z.changedTouches[0]:z,A,E,v={dist:0,time:0},m={dist:0,time:0},w=(z.timeStamp||(new Date()).getTime())-x.startTime,B=x.x,y=x.y,D,C,u;x._unbind(f);x._unbind(h);x._unbind(d);if(x.options.onBeforeTouchEnd){x.options.onBeforeTouchEnd.call(x,z)}if(x.zoomed){x.scale=x.scale*x.lastScale;x.x=x.originX-x.originX*x.lastScale+x.x;x.y=x.originY-x.originY*x.lastScale+x.y;x.scroller.style.webkitTransform=b+x.x+"px,"+x.y+"px"+j+" scale("+x.scale+")";x.refresh();return}if(!x.moved){if(k){if(x.doubleTapTimer&&x.options.zoom){clearTimeout(x.doubleTapTimer);x.doubleTapTimer=null;x.zoom(x.pointX,x.pointY,x.scale==1?x.options.doubleTapZoom:1)}else{x.doubleTapTimer=setTimeout(function(){x.doubleTapTimer=null;A=F.target;while(A.nodeType!=1){A=A.parentNode}if(A.tagName!="SELECT"&&A.tagName!="INPUT"&&A.tagName!="TEXTAREA"){E=document.createEvent("MouseEvents");E.initMouseEvent("click",true,true,z.view,1,F.screenX,F.screenY,F.clientX,F.clientY,z.ctrlKey,z.altKey,z.shiftKey,z.metaKey,0,null);E._fake=true;A.dispatchEvent(E)}},x.options.zoom?250:0)}}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(w<300&&x.options.momentum){v=B?x._momentum(B-x.startX,w,-x.x,x.scrollerW-x.wrapperW+x.x,x.options.bounce?x.wrapperW:0):v;m=y?x._momentum(y-x.startY,w,-x.y,(x.maxScrollY<0?x.scrollerH-x.wrapperH+x.y:0),x.options.bounce?x.wrapperH:0):m;B=x.x+v.dist;y=x.y+m.dist;if((x.x>0&&B>0)||(x.x<x.maxScrollX&&B<x.maxScrollX)){v={dist:0,time:0}}if((x.y>0&&y>0)||(x.y<x.maxScrollY&&y<x.maxScrollY)){m={dist:0,time:0}}}if(v.dist||m.dist){u=e.max(e.max(v.time,m.time),10);if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(B,y);B=snap.x;y=snap.y;u=e.max(snap.time,u)}}x.scrollTo(B,y,u);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(x.x,x.y);if(snap.x!=x.x||snap.y!=x.y){x.scrollTo(snap.x,snap.y,snap.time)}}if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}},_resetPos:function(v){var m=this,w=m.x>=0?0:m.x<m.maxScrollX?m.maxScrollX:m.x,u=m.y>=0||m.maxScrollY>0?0:m.y<m.maxScrollY?m.maxScrollY:m.y;if(w==m.x&&u==m.y){if(m.moved){if(m.options.onScrollEnd){m.options.onScrollEnd.call(m)}m.moved=false}if(m.hScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.hScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.hScrollbarWrapper.style.opacity="0"}if(m.vScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.vScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.vScrollbarWrapper.style.opacity="0"}return}m.scrollTo(w,u,v||0)},_wheel:function(w){var v=this,u,m;if("wheelDeltaX" in w){u=v.x+w.wheelDeltaX/12,m=v.y+w.wheelDeltaY/12}else{if("detail" in w){u=v.x-w.detail*3,m=v.y-w.detail*3}else{u=v.x-w.wheelDelta,m=v.y-w.wheelDelta}}if(u>0){u=0}else{if(u<v.maxScrollX){u=v.maxScrollX}}if(m>0){m=0}else{if(m<v.maxScrollY){m=v.maxScrollY}}v.scrollTo(u,m,0)},_mouseout:function(u){var m=u.relatedTarget;if(!m){this._end(u);return}while(m=m.parentNode){if(m==this.wrapper){return}}this._end(u)},_startAni:function(){var z=this,u=z.x,m=z.y,x=(new Date).getTime(),y,w;if(z.animating){return}if(!z.steps.length){z._resetPos(200);return}y=z.steps.shift();if(y.x==u&&y.y==m){y.time=0}z.animating=true;z.moved=true;(function v(){var A=(new Date).getTime(),C,B;if(A>=x+y.time){z._pos(y.x,y.y);z.animating=false;if(z.options.onAnimationEnd){z.options.onAnimationEnd.call(z)}z._startAni();return}A=(A-x)/y.time-1;w=e.sqrt(1-A*A);C=(y.x-u)*w+u;B=(y.y-m)*w+m;z._pos(C,B);if(z.animating){a(v)}})()},_momentum:function(A,u,y,m,C){var z=0.0006,v=e.abs(A)/u,w=(v*v)/(2*z),B=0,x=0;if(A>0&&w>y){x=C/(6/(w/v*z));y=y+x;v=v*y/w;w=y}else{if(A<0&&w>m){x=C/(6/(w/v*z));m=m+x;v=v*m/w;w=m}}w=w*(A<0?-1:1);B=v/z;return{dist:w,time:e.round(B)}},_offset:function(m){var v=-m.offsetLeft,u=-m.offsetTop;while(m=m.offsetParent){v-=m.offsetLeft;u-=m.offsetTop}return{left:v,top:u}},_snap:function(D,C){var A=this,z,w,B,v,u,m;B=A.pagesX.length-1;for(z=0,w=A.pagesX.length;z<w;z++){if(D>=A.pagesX[z]){B=z;break}}if(B==A.currPageX&&B>0&&A.dirX<0){B--}D=A.pagesX[B];u=e.abs(D-A.pagesX[A.currPageX]);u=u?e.abs(A.x-D)/u*500:0;A.currPageX=B;B=A.pagesY.length-1;for(z=0;z<B;z++){if(C>=A.pagesY[z]){B=z;break}}if(B==A.currPageY&&B>0&&A.dirY<0){B--}C=A.pagesY[B];m=e.abs(C-A.pagesY[A.currPageY]);m=m?e.abs(A.y-C)/m*500:0;A.currPageY=B;v=e.round(e.max(u,m))||200;return{x:D,y:C,time:v}},_bind:function(v,u,m){(u||this.scroller).addEventListener(v,this,!!m)},_unbind:function(v,u,m){(u||this.scroller).removeEventListener(v,this,!!m)},destroy:function(){var m=this;m.scroller.style[s+"Transform"]="";m.hScrollbar=false;m.vScrollbar=false;m._scrollbar("h");m._scrollbar("v");m._unbind(o);m._unbind(g);m._unbind(f);m._unbind(h);m._unbind(d);m._unbind("mouseout",m.wrapper);m._unbind(q);if(m.options.onDestroy){m.options.onDestroy.call(m)}},refresh:function(){var m=this,v,w=0,u=0;if(m.scale<m.options.zoomMin){m.scale=m.options.zoomMin}m.wrapperW=m.wrapper.clientWidth;m.wrapperH=m.wrapper.clientHeight;if(!m.wrapperW||!m.wrapperH){m.disable();return}m.scrollerW=e.round(m.scroller.offsetWidth*m.scale);m.scrollerH=e.round(m.scroller.offsetHeight*m.scale);m.maxScrollX=m.wrapperW-m.scrollerW;m.maxScrollY=m.wrapperH-m.scrollerH;m.dirX=0;m.dirY=0;m.hScroll=m.options.hScroll&&m.maxScrollX<0;m.vScroll=m.options.vScroll&&(!m.options.bounceLock&&!m.hScroll||m.scrollerH>m.wrapperH);m.hScrollbar=m.hScroll&&m.options.hScrollbar;m.vScrollbar=m.vScroll&&m.options.vScrollbar&&m.scrollerH>m.wrapperH;v=m._offset(m.wrapper);m.wrapperOffsetLeft=-v.left;m.wrapperOffsetTop=-v.top;if(typeof m.options.snap=="string"){m.pagesX=[];m.pagesY=[];els=m.scroller.querySelectorAll(m.options.snap);for(i=0,l=els.length;i<l;i++){w=m._offset(els[i]);w.left+=m.wrapperOffsetLeft;w.top+=m.wrapperOffsetTop;m.pagesX[i]=w.left<m.maxScrollX?m.maxScrollX:w.left*m.scale;m.pagesY[i]=w.top<m.maxScrollY?m.maxScrollY:w.top*m.scale}}else{if(m.options.snap){m.pagesX=[];while(w>=m.maxScrollX){m.pagesX[u]=w;w=w-m.wrapperW;u++}if(m.maxScrollX%m.wrapperW){m.pagesX[m.pagesX.length]=m.maxScrollX-m.pagesX[m.pagesX.length-1]+m.pagesX[m.pagesX.length-1]}w=0;u=0;m.pagesY=[];while(w>=m.maxScrollY){m.pagesY[u]=w;w=w-m.wrapperH;u++}if(m.maxScrollY%m.wrapperH){m.pagesY[m.pagesY.length]=m.maxScrollY-m.pagesY[m.pagesY.length-1]+m.pagesY[m.pagesY.length-1]}}}m._scrollbar("h");m._scrollbar("v");m.scroller.style[s+"TransitionDuration"]="0";m._resetPos(200)},scrollTo:function(m,C,B,A){var z=this,w=m,v,u;if(!w.length){w=[{x:m,y:C,time:B,relative:A}]}for(v=0,u=w.length;v<u;v++){if(w[v].relative){w[v].x=z.x-w[v].x;w[v].y=z.y-w[v].y}z.steps.push({x:w[v].x,y:w[v].y,time:w[v].time||0})}z._startAni()},scrollToElement:function(m,v){var u=this,w;m=m.nodeType?m:u.scroller.querySelector(m);if(!m){return}w=u._offset(m);w.left+=u.wrapperOffsetLeft;w.top+=u.wrapperOffsetTop;w.left=w.left>0?0:w.left<u.maxScrollX?u.maxScrollX:w.left;w.top=w.top>0?0:w.top<u.maxScrollY?u.maxScrollY:w.top;v=v===undefined?e.max(e.abs(w.x)*2,e.abs(w.y)*2):v;u.scrollTo(w.left,w.top,v)},scrollToPage:function(v,u,z){var w=this,m,A;if(w.options.snap){v=v=="next"?w.currPageX+1:v=="prev"?w.currPageX-1:v;u=u=="next"?w.currPageY+1:u=="prev"?w.currPageY-1:u;v=v<0?0:v>w.pagesX.length-1?w.pagesX.length-1:v;u=u<0?0:u>w.pagesY.length-1?w.pagesY.length-1:u;w.currPageX=v;w.currPageY=u;m=w.pagesX[v];A=w.pagesY[u]}else{m=-w.wrapperW*v;A=-w.wrapperH*u;if(m<w.maxScrollX){m=w.maxScrollX}if(A<w.maxScrollY){A=w.maxScrollY}}w.scrollTo(m,A,z||400)},disable:function(){this.enabled=false;this._unbind(f);this._unbind(h);this._unbind(d)},enable:function(){this.enabled=true},stop:function(){this.steps=[];this.moved=false;this.animating=false;this._resetPos(200)},zoom:function(m,A,z,w){var u=this,v=z/u.scale;if(!u.options.useTransform){return}w=(w||200)+"ms";m=m-u.wrapperOffsetLeft-u.x;A=A-u.wrapperOffsetTop-u.y;u.x=m-m*v+u.x;u.y=A-A*v+u.y;u.scale=z;u.scroller.style[s+"TransitionDuration"]=w;u.scroller.style[s+"Transform"]=b+u.x+"px,"+u.y+"px"+j+" scale("+z+")";u.refresh()}};if(typeof exports!=="undefined"){exports.iScroll=t}else{window.iScroll=t}})();/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false, evil:true */

/*
 * Scrollbox turns a given element into a scrollable area. The scrollbox
 * element should have class="scrollbox"; it will grow to the height of 
 * its parent element minus the combined height of all siblings.
 */
function Scrollbox(elem, options) {
  var self = this;
  var point1;
  var point2;
  var y0 = 0;
  var y1 = 0;
  var deltaY = 0;
  var tensionY = 0;
  var tensionX = 0;
  var elementHeight = 0;
  var childHeight = 0;
  var x0 = 0;
  var x1 = 0;
  var deltaX = 0;
  var elementWidth = 0;
  var childWidth = 0;
  var child;
  var tension = 2.5;
  var mousing = false;
  var settings;
  var enabled = true;
  var defaults = {
    scrollDirection: "vertical"
  };
  
  var freeImages = function (elem) {
      var imgs = elem.querySelectorAll("img");
      for (var i = 0; i < imgs.length; i++) {
          imgs[i].src = "../img/blank.png";
      }
  };
  
  var boundY = function (y) {
    if( elementHeight === 0 || childHeight === 0 ) {
      elementHeight = elem.offsetHeight;
      childHeight = child.offsetHeight;
    }
    
    return Math.round(Math.min(0, Math.max(y, elementHeight - childHeight)));
  };
    
  var boundX = function (x) {
    if( elementWidth === 0 || childWidth === 0 ) {
      elementWidth = elem.offsetWidth;
      childWidth = child.offsetWidth;
    }
    return Math.round(Math.min(0, Math.max(x, elementWidth - childWidth)));
  };
    
  var init = function () {
    settings = $.extend( {}, defaults, options );
    ScrollUtil.init();

    elem.innerHTML = "<div class=\"flow\">" + elem.innerHTML + "</div>";

    child = elem.firstChild;

    elem.style.setProperty("height", ScrollUtil.getAvailableHeight(elem) + "px");

    var touchstart = function (touch) {
      if( !enabled ) {
        return;
      }
        
      ScrollUtil.transition(child, "0s linear");
        
      if(settings.scrollDirection === "vertical" ) {
        y0 = elem.getBoundingClientRect().top;
        deltaY = 0;
        elementHeight = elem.offsetHeight;
        childHeight = child.offsetHeight;
        point1 = new Point(touch.pageX, touch.pageY);
        y1 = child.getBoundingClientRect().top - y0;
        ScrollUtil.transform(child, "0", y1 + "px");
      } else {
        x0 = 0;
        dX = 0;
        elementWidth = elem.offsetWidth;
        ec = elem.offsetWidth;
        point1 = new Point(touch.pageX, touch.pageY);
        x1 = child.getBoundingClientRect().left;
        ScrollUtil.transform(child, x1, "0");
      }
      
      $( elem ).trigger( "scrollstart" );
    };

    var touchmove = function (touch) {
      if( !enabled ) {
        return;
      }
      point2 = new Point(touch.pageX, touch.pageY);
            
      if( settings.scrollDirection === "vertical" ) {
        deltaY = point2.distanceY(point1);
        tensionY = y1;

        if (Math.abs(deltaY) > 5) {
          tensionY += deltaY;
        }

        // tension up or down.
        if (tensionY > 0) {
          tensionY = tensionY / tension;
        } else if (tensionY < elementHeight - childHeight) {
          tensionY += (elementHeight - (Math.max(elementHeight, childHeight) + tensionY)) / tension;
        }

        ScrollUtil.transform(child, "0", tensionY + "px");
        y1 = Math.round(y1 + deltaY);
      } else {
        deltaX = point2.distanceX(point1);
        tensionX = x1;

        if (Math.abs(deltaX) > 5) {
          tensionX += deltaX;
        }

        // tension left or right
        if (tensionX > 0) {
          tensionX = tensionX  / tension;
        } else if (tensionX < elementWidth - childWidth) {
          tensionX += (elementWidth - (Math.max(elementWidth, childWidth) + tensionX)) / tension;
        }

        ScrollUtil.transform(child, tensionX + "px", "0");
          x1 = Math.round(x1 + deltaX);
      }
      point1 = point2;
    };

    var touchend = function () {
      if( !enabled ) {
        return;
      }
            
      if(settings.scrollDirection === "vertical" ) {
        self.scrollToY(y1 + (deltaY * Math.abs(deltaY) * 0.75));
      } else {
        self.scrollToX(x1 + (deltaX * Math.abs(deltaX) * 0.75));
      }
      $( elem ).trigger( "scrollend" );
    };

    if ( bc.utils.hasTouchSupport() ) {
      elem.addEventListener("touchstart", function (evt) {
        if (evt.touches) {
          touchstart(evt.touches[0]);
        }
      });

      elem.addEventListener("touchmove", function (evt) {
        if (evt.target.nodeName.match(/INPUT|TEXTAREA/)) {
            evt.preventDefault();
            return;
        }
        if (evt.touches) {
          touchmove(evt.touches[0]);
        }
      });

      elem.addEventListener("touchend", function (evt) {
        touchend();
      });
    } else {
      elem.addEventListener("mousedown", function (evt) {
        mousing = true;
        touchstart(evt);
      });

      elem.addEventListener("mousemove", function (evt) {
        if (mousing) {
          touchmove(evt);
        }
      });

      elem.addEventListener("mouseup", function (evt) {
        if (mousing) {
          mousing = false;
          touchend();
        }
      });
    }
        
    if (elem.id) {
      Scrollbox.all[elem.id] = self;
    }
        
    if( !bc.utils.hasTouchSupport() ) {
      $( document ).on( "mousedown", "img", function( evt ) {
        evt.preventDefault();
        evt.stopPropagation();
      });
    }
  };

  this.scrollToY = function (y, timing ) {
    timing = timing || "500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    y1 = boundY(y);
    ScrollUtil.transform(child, "0", y1 + "px");
    ScrollUtil.transition(child, timing );
    $( child ).one( "webkitTransitionEnd", function() {
      $( elem ).trigger( "scrollend" );
    });
  };
    
  this.scrollToX = function (x, timing) {
    timing = timing || "500ms cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    x1 = boundX(x);
    ScrollUtil.transform(child, x1 + "px", "0");
    ScrollUtil.transition(child, timing );
    $( child ).one( "webkitTransitionEnd", function() {
      $( elem ).trigger( "scrollend" );
    });
  };
    
  this.setScrollingDirection = function (direction) {
    //TODO - set jQuery child as a global object
    var $child = $( child );
    $child.width( $child.children().width() );
    elementWidth = elem.offsetWidth;
    childWidth = child.offsetWidth; 
    settings.scrollDirection = direction;
  };

  this.disable = function() {
    enabled = false;
  };
    
  this.enable = function() {
    enabled = true;
  };
    
  // resize to fit available height. do not call directly
  this.resize = function () {
    height = ScrollUtil.getAvailableHeight(elem);
    elem.style.setProperty("height", height + "px");
      
    //TODO - handle resize for landscape
    elementHeight = elem.offsetHeight;
    childHeight = child.offsetHeight;
    y1 = boundY(y1);

    ScrollUtil.transform(child, "0", y1 + "px");
    ScrollUtil.transition(child, "0ms linear");
  };

  // get the HTML content of this scrollbox
  this.getContent = function () {
    return child.innerHTML;
  };

  // update the HTML content of this scrollbox
  this.setContent = function (html) {
    freeImages(elem);

    child.innerHTML = html;
  };

  // snap to the top
  this.top = function () {
    y1 = 0;
    ScrollUtil.transform(child, "0", "0");
    ScrollUtil.transition(child, "0s linear");
  };

  this.clear = function () {
    freeImages(elem);

    this.setContent("");
    this.top();
  };

  init();
}

Scrollbox.all = {};

Scrollbox.get = function (elemId) {
  return Scrollbox.all[elemId];
};

// Point holds an arbitrary location measured from top left
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.distanceX = function (point) {
  return this.x - point.x;
};

Point.prototype.distanceY = function (point) {
  return this.y - point.y;
};

/*
 * Static helper and init functions used by Scrollbox
 */
var ScrollUtil = {};

// add listeners, add css rules
ScrollUtil.init = function () {
  // do just once
  if (ScrollUtil.inited) {
    return;
  }

  var orientation = bc.context.viewOrientation;

  document.body.addEventListener("touchmove", function (evt) {
    evt.preventDefault();
  });

  //window.addEventListener("resize", function (evt) {
  $( bc ).bind( "vieworientationchange", function() {
    //var o =window.innerWidth > window.innerHeight ? "L" : "P";
    if ( bc.context.viewOrientation === orientation) {
      return;
    }
    orientation = bc.context.viewOrientation;
    // resize scrollboxes
        
    for (var s in Scrollbox.all) {
      Scrollbox.all[s].resize();
    }
  });

  var css = {
    "html": [
      "width: 100%"
    ],
    ".scrollbox": [
      "overflow: hidden"
    ],
    ".scrollbox > .flow": [
      "-webkit-transform: translate3d(0, 0, 0)"
    ]
  };

  var sheet = document.styleSheets[0];

  for (var c in css) {
    sheet.addRule(c, css[c].join(";"));
  }

  ScrollUtil.inited = true;
};

// apply a 3D transform to an element
ScrollUtil.transform = function (elem, x, y) {
  elem.style.setProperty("-webkit-transform", "translate3d(" + x + ", " + y + ", 0)");
};

// apply a CSS transition to an element's transform
// value is expressed as "time curve", e.g. "500ms linear"
ScrollUtil.transition = function (elem, value) {
  elem.style.setProperty("-webkit-transition", "-webkit-transform " + value);
};

// get the available height for an element
ScrollUtil.getAvailableHeight = function (elem) {
  var parent = elem.parentElement;
  var sibs = parent.childNodes;
  var h = 0;

  var isStatic = function (style) {
    return ["static", "relative"].indexOf(style.position) > -1;
  };

  var isBlock = function (style) {
    return style.display !== "inline-block" && style.float === "none";
  };

  for (var i in sibs) {
    if (sibs[i] !== elem) {
      var style = window.getComputedStyle(sibs[i]);
      if (style && isStatic(style) && isBlock(style)) {
        h += sibs[i].offsetHeight || 0;
      }
    }
  }

  return parent.getBoundingClientRect().height - h;
};

// Get the available width for an element
ScrollUtil.getAvailableWidth = function (elem) {
  return elem.parentElement.offsetWidth;
};
/*
  Markup.js v1.5.8: http://github.com/adammark/Markup.js
  MIT License
  (c) 2011 Adam Mark
*/
var Mark={includes:{},globals:{},delimiter:">",compact:false,_copy:function(d,c){c=c||[];for(var e in d){c[e]=d[e]}return c},_size:function(b){return b instanceof Array?b.length:(b||0)},_iter:function(a,b){this.idx=a;this.size=b;this.length=b;this.sign="#";this.toString=function(){return this.idx+this.sign.length-1}},_pipe:function(h,d){var c=d.shift(),g,b,a;if(c){g=c.split(this.delimiter);b=g[0].trim();a=g.splice(1);try{h=this._pipe(Mark.pipes[b].apply(null,[h].concat(a)),d)}catch(f){}}return h},_eval:function(e,g,h){var a=this._pipe(e,g),b=a,d=-1,c,f;if(a instanceof Array){a="";c=b.length;while(++d<c){f={iter:new this._iter(d,c)};a+=h?Mark.up(h,b[d],f):b[d]}}return a},_test:function(a,f,d,b){var e=Mark.up(f,d,b).split(/\{\{\s*else\s*\}\}/),c=(a===false?e[1]:e[0]);return Mark.up(c||"",d,b)},_bridge:function(g,e){var f="{{\\s*"+e+"([^/}]+\\w*)?}}|{{/"+e+"\\s*}}",l=new RegExp(f,"g"),n=g.match(l),m,k=0,j=0,i=-1,h=0;for(m in n){i=g.indexOf(n[m],i+1);if(n[m].match("{{/")){j++}else{k++}if(k===j){break}}k=g.indexOf(n[0]);j=k+n[0].length;h=i+n[m].length;return[g.substring(k,h),g.substring(j,i)]}};Mark.up=function(s,b,e){b=b||{};e=e||{};var m=/\{\{\w*[^}]+\w*\}\}/g,l=s.match(m)||[],t,d,g,h=[],r,c,f,n,k,o,a,q=0,p=0;if(e.pipes){this._copy(e.pipes,this.pipes)}if(e.includes){this._copy(e.includes,this.includes)}if(e.globals){this._copy(e.globals,this.globals)}if(e.delimiter){this.delimiter=e.delimiter}if(e.compact!==undefined){this.compact=e.compact}while((t=l[q++])){k=undefined;f="";r=t.indexOf("/}}")>-1;d=t.substr(2,t.length-(r?5:4));d=d.replace(/`([^`]+)`/g,function(i,j){return Mark.up("{{"+j+"}}",b)});c=d.trim().indexOf("if ")===0;h=d.split("|").splice(1);d=d.replace(/^\s*if/,"").split("|").shift().trim();g=c?"if":d.split("|")[0];n=b[d];if(c&&!h.length){h=["notempty"]}if(!r&&s.indexOf("{{/"+g)>-1){k=this._bridge(s,g);t=k[0];f=k[1];q+=t.match(m).length-1}if(/^\{\{\s*else\s*\}\}$/.test(t)){continue}else{if((o=this.globals[d])!==undefined){k=this._eval(o,h,f)}else{if((a=this.includes[d])){if(a instanceof Function){a=a()}k=this._pipe(Mark.up(a,b),h)}else{if(d.match(/#{1,2}/)){e.iter.sign=d;k=this._pipe(e.iter,h)}else{if(d==="."){k=this._pipe(b,h)}else{if(d.match(/\./)){d=d.split(".");n=Mark.globals[d[0]];if(n){p=1}else{p=0;n=b}while(p<d.length){n=n[d[p++]]}k=this._eval(n,h,f)}else{if(c){k=this._pipe(n,h)}else{if(n instanceof Array){k=this._eval(n,h,f)}else{if(f){k=n?Mark.up(f,n):undefined}else{if(b.hasOwnProperty(d)){k=this._pipe(n,h)}}}}}}}}}}if(c){k=this._test(k,f,b,e)}s=s.replace(t,k===undefined?"???":k)}return this.compact?s.replace(/>\s+</g,"><"):s};Mark.pipes={empty:function(a){return !a||(a+"").trim().length===0?a:false},notempty:function(a){return a&&(a+"").trim().length?a:false},blank:function(b,a){return !!b||b===0?b:a},more:function(d,c){return Mark._size(d)>c?d:false},less:function(d,c){return Mark._size(d)<c?d:false},ormore:function(d,c){return Mark._size(d)>=c?d:false},orless:function(d,c){return Mark._size(d)<=c?d:false},between:function(e,d,f){e=Mark._size(e);return e>=d&&e<=f?e:false},equals:function(d,c){return d==c?d:false},notequals:function(d,c){return d!=c?d:false},like:function(b,a){return new RegExp(a,"i").test(b)?b:false},notlike:function(b,a){return !Mark.pipes.like(b,a)?b:false},upcase:function(a){return String(a).toUpperCase()},downcase:function(a){return String(a).toLowerCase()},capcase:function(a){return a.replace(/\b\w/g,function(b){return b.toUpperCase()})},chop:function(a,b){return a.length>b?a.substr(0,b)+"...":a},tease:function(c,d){var b=c.split(/\s+/);return b.slice(0,d).join(" ")+(b.length>d?"...":"")},trim:function(a){return a.trim()},pack:function(a){return a.trim().replace(/\s{2,}/g," ")},round:function(a){return Math.round(+a)},clean:function(a){return String(a).replace(/<\/?[^>]+>/gi,"")},size:function(a){return a.length},length:function(a){return a.length},reverse:function(a){return Mark._copy(a).reverse()},join:function(a,b){return a.join(b)},limit:function(b,c,a){return b.slice(+a||0,+c+(+a||0))},split:function(b,a){return b.split(a||",")},choose:function(b,c,a){return !!b?c:(a||"")},toggle:function(c,b,a,d){return a.split(",")[b.match(/\w+/g).indexOf(c+"")]||d},sort:function(a,c){var b=function(e,d){return e[c]>d[c]?1:-1};return Mark._copy(a).sort(c?b:undefined)},fix:function(a,b){return(+a).toFixed(b)},mod:function(a,b){return(+a)%(+b)},divisible:function(a,b){return a!==false&&a%b===0?a:false},even:function(a){return a!==false&&a%2===0?a:false},odd:function(a){return a!==false&&a%2===1?a:false},number:function(a){return parseFloat(a.replace(/[^\-\d\.]/g,""))},url:function(a){return encodeURI(a)},bool:function(a){return !!a},falsy:function(a){return !a},first:function(a){return a.idx===0},last:function(a){return a.idx===a.size-1},call:function(b,a){return b[a].apply(b,[].slice.call(arguments,2))},set:function(b,a){Mark.globals[a]=b;return""}};/*global bc:true, atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/


/**
 * bc is the namespace for all functions, properties, and events available through the Brightcove App Cloud SDK.
 * @namespace
 */
var bc = {};

/**
 * Brightcove core is responsible for communicating with the Brightcove App Cloud server, storing the responses from the server,
 * and messaging the appropriate events.
 * @namespace
 */
bc.core = {};

/**
 * Import required 3rd party libraries and namespace so as not to conflict with other versions
 */
bc.lib = {};

// namespace our version of jQuery and reset the global vars of $,jQuery back to what they were
( function() {
  bc.lib.jQuery = jQuery.noConflict(true);    
  if ( jQuery === undefined ) {
    jQuery = bc.lib.jQuery;
    $ = jQuery;    
  }
})();

( function( $, undefined ) {
  //tracks whether or not we have set ads yet.
  var _adsSet,
      _globalDataRequestPollCount = {},
      _markupLoaded = false,
      _localeResourceFileLoaded = false;
  
  /** @private The URL of the App Cloud Studio. */
  bc.SERVER_URL = ( "%SERVER_URL%".indexOf( "%" ) > -1 ) ? "http://read.appcloud.brightcove.com" : "%SERVER_URL%";
  
  /** @private The URL of the server we will send metrics to. */
  bc.METRICS_SERVER_URL = ( "%METRICS_SERVER_URL%".indexOf( "%" ) > -1 ) ? "http://metrics.brightcove.com" : "%METRICS_SERVER_URL%";
  
  /** This is a unique ID that is generated when the application is created in the Brightcove App Cloud Studio.  During development this will be undefined, since the application has not been created by the Studio yet. */
  bc.appID = null;
  
  /** This is a unique ID that generated for this specific "view" when the application is created in the App Cloud Studio.  During development this will be the URL of the view, since the URL is a unique string. */
  bc.viewID = null;
  
  /** This the unique ID that represents the App Cloud account that this application is part of.  During development this will be undefined. */
  bc.accountID = null;
  
  /** @private The SQLite database that we use to track our localStorage usage.  See bc.core.cache and pruneCache to see how this is used. */
  bc.db = null;
  
  /**
   * Context object that exposes information related to the current state of the application.  The following properties exist
   * on the context object:
   * <ul>
   *   <li>viewOrientation: A string that will match either <code>portrait</code> or <code>landscape</code>.  Represents the orientation of the view on the phone.  NOTE:
   *       this is different from device orientation.  For example, the phone might actually be held in landscape mode but the view does not autorotate,
   *       in which case the view would still be in <code>portrait</code> mode.</li>
   *   <li>os: A string that will match either <code>ios</code> or <code>android</code>. </li>
   *   <li>isNative: A boolean value indicating whether or not we are running inside a native container on a device.</li>
   *   <li>moreNavigationView: A boolean value indicating whether or not the current view falls under the "more" section.  (Specific to iOS)</li>
   *   <li>version: The version of the SDK.</li>
   * </ul>
   * @namespace
   */
  bc.context = { version: "1.10" };
  
  /**
   * If a developer uses the <a href="http://support.brightcove.com/en/docs/using-markup-templates">markup templating</a> system included in the SDK
   * then any layouts specified in the .txt file will be populated onto the bc.templates object.  For example if your markup.txt file has the following
   * layout: <br>
   <pre>===== example-tmpl
&lt;h1&gt;My Example&lt;/h1&gt;
&lt;p&gt;Example paragraph.  Really any HTML can go here&lt;/p&gt;
   </pre>
   <br>
   Then after the bc.init event is fired the bc.templates object will now have a property of "example-tmpl".  This can be referenced as bc.templates["example-tmpl"] and 
   passed into the Mark.up function. For example:
   <pre>var html = Mark.up( bc.templates["example-tmpl"] );
$( "body" ).html( html );</pre>
   Would set the body of the page to <pre>
&lt;h1&gt;My Example&lt;/h1&gt;
&lt;p&gt;Example paragraph.  Really any HTML can go here&lt;/p&gt;
  </pre>
   * @namespace
   */
  bc.templates = {};

  /** 
   * The different modes the application can be running in. One of the strings listed in <a href="../bc.core.mode.html">bc.core.mode</a>.
   * @namespace
   */
  bc.core.mode = {};

  /** An application is in development mode if it has not been ingested into the Brightcove App Cloud Studio. */
  bc.core.mode.DEVELOPMENT = "development";
  /** 
   * An application is in production mode once it has been created in the Brightcove App Cloud Studio, using
   *  a previously ingested template. */
  bc.core.mode.PRODUCTION = "production";
  /** An application is in preview mode if it is being previewed in the Brightcove App Cloud Studio.*/
  bc.core.mode.PREVIEW = "preview";
  /** The current mode that the application is running in. */
  bc.core.current_mode = bc.core.mode.DEVELOPMENT;
  /** App level configurations*/
  bc.currentGlobalConfigs = undefined;


  /***************************************************************************************
    * Private helper functions
    ***************************************************************************************/

   function findValueInObject( object, name ) {
     if( $.isPlainObject( object ) ) {
       return object;
     }

     for( var i = 0, len = object.length; i < len; i++ ) {
       if( object[i].name === name ) {
         return object[i];
       }
     }
     return {};
   }

   /* Calculates the URL to be used to make the request to the appcloud server.*/
   function getContentFeedURL( contentFeed ) {
     var url,
        feedValueFromManifest = bc.core.getManifestConfiguration( { "type": "data", "name": contentFeed } );

     if( bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
      contentFeed = ( feedValueFromManifest === null ) ? contentFeed : feedValueFromManifest;
      url = bc.SERVER_URL + "/content/" + contentFeed + "/fetch";
     } else {
      if( feedValueFromManifest === null ) {
        url = bc.SERVER_URL + "/content/" + contentFeed + "/fetch";
      } else {
        url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/data.json?content_feed_name=" + contentFeed;
      }
     }

     return url;
   }

   function storeGlobalConfigs( global ) {
     if( !bc.utils.isEqual( global, bc.currentGlobalConfigs ) ) {
       bc.core.cache( bc.appID + "_global_configs", global );
       bc.currentGlobalConfigs = global;
       return true;
     }

     return false;
   }

  function storeSettings( settings ) {
     if( !bc.utils.isEqual( settings, bc.core.cache( bc.viewID + "_settings" ) ) ) {
       bc.core.cache( bc.viewID + "_settings", settings );
       return true;
     }
     return false;
   }
  
  function storeStyles( styles ) {
    if( !bc.utils.isEqual( styles, bc.core.cache( bc.viewID + "_styles" ) ) ) {
      bc.core.cache( bc.viewID + "_styles", styles );
      return true;
    }
    return false;
  }

  function createTables() {
    if( !bc.db ) {
      return;
    }

    bc.db.transaction(  
      function (transaction) {  
        transaction.executeSql( "CREATE TABLE IF NOT EXISTS components(id INTEGER NOT NULL PRIMARY KEY, component_id TEXT NOT NULL, modified TIMESTAMP NOT NULL);" );         
      }  
    );  
  }

  function bcAppDB() {
    if( typeof( window.openDatabase ) !== "function") {
      return null;
    }

    try {
      bc.db = window.openDatabase(bc.appID, "1.0", "BC_" + bc.appID, 1024*1024);  
      createTables();
    } catch(e) {
      bc.utils.warn("THERE WAS AN ERROR OPENING THE DB");
      bc.db = null;
    }
  }

  function setGlobalIDValues() {
    bc.viewID = $( "body" ).data( "bc-view-id" ) || location.href;
    bc.appID = $( "body" ).data( "bc-app-id" );
    bc.accountID = $( "body" ).data( "bc-account-id" );

    if( bc.appID !== undefined) {
     if( bc.core.isPreview() ) {
       bc.core.current_mode = bc.core.mode.PREVIEW;
     } else {
       bc.core.current_mode = bc.core.mode.PRODUCTION;
     }
    }
    bcAppDB();
  }

  function pruneCache() {
    if( bc.db !== null ) {
     var ids_to_remove = "";
     bc.db.transaction(  
       function (transaction) {  
         transaction.executeSql( "SELECT component_id from components ORDER BY modified;", [], function( tx, results ) {
           for ( var i = 0, len = results.rows.length; i < len/2; i++ ) {
             var item = results.rows.item( i ).component_id;
             window.localStorage.removeItem( item );
             ids_to_remove += "component_id = '" + item + "' OR ";
           }

           //Once we have cleaned up the local storage we should now clean up the DB.
           ids_to_remove = ids_to_remove.substring( 0, ( ids_to_remove.length - 4 ) );
           bc.db.transaction(
             function (transaction) { 
               transaction.executeSql( "DELETE FROM components WHERE " + ids_to_remove + ";", [] );          
             }
           );
         });         
       }  
     );
    } else {
      //If there is no DB then we do not have a more intelligent way to prune other then to remove 
      window.localStorage.clear();
    }
  }

  function updateDB(component_id) {
    if(bc.db === null) {
     return;
    }

    bc.db.transaction(  
      function (transaction) {
        transaction.executeSql( "SELECT component_id FROM components WHERE component_id ='" + component_id +"';", [], function( tx, results ) {
          if(results.rows.length === 0) {
            bc.db.transaction(  
              function ( transaction ) {  
                transaction.executeSql( "INSERT INTO components (component_id, modified) VALUES ('" + component_id + "', '" + Date() + "');" );         
              }  
            );
          } else {
            bc.db.transaction(
              function ( transaction ) { 
                transaction.executeSql( "UPDATE components SET modified = '" + Date() + "' WHERE component_id ='" + component_id + "';" );          
              }
            );
          }
        });                  
      }  
    );
  }

  function storeAdConfigurations( adConfigsFromServer ) {
    var adConfigs,
        defaults = {
          "ad_code": undefined,
          "ad_position": "none",
          "ad_network": "admob"
        };

    adConfigs = $.extend( {}, defaults, adConfigsFromServer );

    adConfigs.should_show_ad = ( !!adConfigs.ad_code && !!adConfigs.ad_position && adConfigs.ad_position !== "none" );
    bc.core.cache( bc.viewID + "_ad_settings", adConfigs );
    setAdPolicy( adConfigs );
  }

  function setAdPolicy( adConfigs ) {
    adConfigs = adConfigs || bc.core.cache( bc.viewID + "_ad_settings");
    //If we have already set an ad policy we do not want to do again.
    if ( _adsSet !== undefined ) {
      return;
    }

    if( adConfigs && bc.device !== undefined && bc.device.setAdPolicy !== undefined ) {
      bc.device.setAdPolicy( adConfigs );
      _adsSet = true;
    }
  }

   /***************************************************************************************
    * End of private helper functions
    ***************************************************************************************/

  /**
   * Depending on whether one or two values are passed into the cache function, it will either read values from or write 
   * values to the localStorage.  Note that there is a limit of 5MB that can be stored in this cache 
   * at any given time.  If this cache fills up, then we remove half the items from the cache.  We use a 
   * LRU (least recently used) cache algorithm to select what should be removed.
   *
   * @param key The key for where the value is stored.
   * @param value The value that should be stored in the localStorage.
   * @return If only a key is passed in, then the value is returned. If no value is found, null is returned.
   * @example 
   //Note that the cache is persisted across startups.
   bc.core.cache( "whales" ); //returns null because it has never been set.  
   bc.core.cache( "whales", "a pod of whales" ); //sets the value of the key "whales"
   bc.core.cache( "whales" ); //returns "a pod of whales"
   */
  bc.core.cache = function( key, value ) {
    var ret;
    
    try {
      if( value !== undefined ){
        try {
          window.localStorage.setItem( key, JSON.stringify( value ) );
          updateDB( key );
          return value;
        } catch( e ) {
          bc.utils.warn( "ERROR: we are assuming that our local storage is full and will now remove half of the existing cache:" + e.toString() );
          pruneCache();
        }        
      } else {
        ret = JSON.parse( window.localStorage.getItem( key ) );
        if( ret !== null ) {
          try {
            updateDB( key );
          } catch ( e ) {
            bc.utils.warn( 'ERROR: we were unable to updated the DB with this cache hit' );
          }
        }
        return ret;
      }
    } catch( e ) {
      bc.utils.warn( "Error storing and/or receiving values in local storage: " + e.toString() );
      return null;
    } 
  };

  /**
   * Fetches the data for this contentFeed.  This can take in a contentFeed ID or the name of a feed defined for this view in the <code>manifest.json</code> file.
   *
   * @param contentFeed The ID of the contentFeed or the name of the feed, if configurations are defined in the <code>manifest.json</code> file.  The contentFeed ID can be found in the Content section of the App Cloud Studio.
   * @param successCallback The function to call once the data has been retrieved.
   * @param errorCallback The function to call if there is an error retrieving data.
   * @param options An object defining the options for this request. Possible values are:
        <ul>
          <li> parameterizedFeedValues: The query params to pass to the contentFeed as parameters.  See <a href="https://docs.brightcove.com/en/app-cloud-beta/using-parameters-in-content-feed-urls" >Using parameters in content feed URLs</a> for how parameterized feeds work.  Defaults to "".
          <li> requestTimeout:  Number of milliseconds before the request is timed out and the error callback is called.  By default it is 30000 ms.
        </ul>
   * @example 

    bc.core.getData( "xxxxxxxxxx", 
      successHandler, 
      errorHandler, 
      { "parameterizedFeedValues": 
        { "loc": "01950" } 
      }
    );
    
    function successHandler( data ) {
      //Do something with the data.
    }
    
    function errorHandler() {
      //Handle the error gracefully.
    }
   */
  bc.core.getData = function( contentFeed, successCallback, errorCallback, options ) {
    var settings,
        globalSessionStore,
        isGlobalRequest = bc.core.isGlobalRequest( contentFeed ),
        defaults = { 
          "parameterizedFeedValues": "",
          "requestTimeout": 30000
        };
    
    function success( results ) {
      if( results.status !== undefined ) {

        if( results.status === "ok" && results.data !== undefined ) {
          if ( successCallback ) successCallback( results.data );
        } else {
          if ( errorCallback ) errorCallback( results );
        }

      } else {
        //The /content/{id}/fetch does not return a status.
        if ( successCallback ) successCallback( results );
      }

      //Cache this response.
      if( ( !results.status || results.status === "ok" ) && isGlobalRequest ) {
        window.sessionStorage.setItem( bc.appID + "_data_" + contentFeed, JSON.stringify( results ) );
      }
    }

    function error( err ) {
      console.warn( "There was an error fetching content for contentFeed: " + contentFeed );
      if ( errorCallback ) errorCallback( err );
    }
    
    settings = $.extend( {}, defaults, options );
    globalSessionStore = window.sessionStorage.getItem( bc.appID + "_" + contentFeed );
    globalSessionStore = ( globalSessionStore === null ) ? globalSessionStore : JSON.parse( globalSessionStore );
    //If this a global data request then we should check to see if there was a request already being made.
    if( isGlobalRequest && globalSessionStore && bc.core.requestExists( globalSessionStore, settings ) ) {
      if( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) {
        success( JSON.parse( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) );
        return;
      } else {
        bc.core.pollForRequest( contentFeed, successCallback, errorCallback, options );
      }
    }
    
    $.ajax( 
      { 
        url: getContentFeedURL( contentFeed ),
        timeout: settings.requestTimeout,
        dataType: "jsonp",
        data: ( options && options.parameterizedFeedValues ) ? { "query_params": options.parameterizedFeedValues } : "",
        success: success,
        error: error
      }
    );
    
    if( isGlobalRequest ) {
      //Make this an array of settings, that I then compare?
      globalSessionStore = ( globalSessionStore ) ? globalSessionStore.push( settings ) : [ settings ];
      window.sessionStorage.setItem( bc.appID + "_" + contentFeed, JSON.stringify( globalSessionStore ) );
    }
  };
  
  /**
   * @private
   */
  bc.core.requestExists = function( globalSessionStore, settings ) {
    for( var i=0, len=globalSessionStore.length; i<len; i++ ) {
      if( bc.utils.isEqual( globalSessionStore[i], settings ) ) {
        return true;
      }
    }
    return false;
  };

  /**
   * @private
   */
  bc.core.isGlobalRequest = function( contentFeed ) {
    var configs = bc.configurations;
    
    if( !configs || !configs.data ) {
      return false;
    }
    
    for( var i=0, len = configs.data.length; i < len; i++ ) {
      if( configs.data[i].name === contentFeed ) {
        return !!configs.data[i].global;
      }
    }
    return false; 
  };
  
  /**
   * @private
   */
  bc.core.pollForRequest = function( contentFeed, successCallback, errorCallback, options ) {
    _globalDataRequestPollCount[ contentFeed ] = _globalDataRequestPollCount[ contentFeed ] || 0;
    if( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) {
      _globalDataRequestPollCount[ contentFeed ] = undefined;
      successCallback( JSON.parse( window.sessionStorage.getItem( bc.appID + "_data_" + contentFeed ) ) );
      return;
    } 
    
    //Poll for 30 seconds
    if( _globalDataRequestPollCount[ contentFeed ] < 60 ) {
      _globalDataRequestPollCount[ contentFeed ]++;
      setTimeout( function() {
        bc.core.pollForRequest( contentFeed, successCallback, errorCallback, options );
      }, 500 );
    } else {
      //The request has taken way too long so we are going to clear out the session flag to not make the request and let it hit the server.
      window.sessionStorage.setItem( bc.appID + "_" + contentFeed, null );
      _globalDataRequestPollCount[ contentFeed ] = undefined;
      bc.core.getData( contentFeed, successCallback, errorCallback, options );
    }
  };

  /**
   * Gets a configuration from the configurations defined in the <code>manifest.json</code> file.  All of the configurations for this view are 
   * available on the bc.configurations property.  Additionally, the entire <code>manifest.json</code> is available at the global variable of manifest.
   * @param options An object that specifies the configuration type to get and the property to find.  Possible values are:
     <ul>
      <li> type: The configuration type, which can be a data, styles, or settings. </li>
      <li> name: The name of the value to get for the configuration.</li>
    </ul>
    @return The corresponding value for the key inside the type that was passed in or null if no value was found.
    @private
   */
  bc.core.getManifestConfiguration = function( options ) {
    var data, getFeedValue;
    
    getFeedValue = function( obj ) {
      return ( obj.contentFeed ) ? obj.contentFeed : obj.contentConnector;
    };
    
    if( bc.configurations && options !== undefined && bc.configurations[options.type] !== undefined ) {
      data = bc.configurations[options.type];

      for( var i = 0, len = data.length; i < len; i++ ) {
        if( data[i].name === options.name ) {
          return ( data[i].value !== undefined ? data[i].value : getFeedValue( data[i] ) );
        }
      }
    }
    return null;
  };

  /**
   * Retrieves the styles from the cache for the current view.
   * 
   * @return It is expected that most developers will call <code>applyStyles</code>, which both gets the styles and also renders them to the page.
   * This function will return an object that contains the styles for this particular view or an empty object if no styles are found.
   * @example 
   // Styles is an object.
   var styles = bc.core.getStyles();
   */
  bc.core.getStyles = function() {
    var styles,
      viewStyles = bc.core.cache( bc.viewID + "_styles" ),
      globalStyles = bc.core.cache( bc.appID + "_global_configs" ) || {};
    
    styles = bc.utils.merge( globalStyles.styles, viewStyles );
    
    if( styles.length === 0 && bc.configurations && bc.configurations.styles ) {
      styles = bc.configurations.styles;
    }
    
    return styles || [];
  };
  
  /**
   * @private
   */
  bc.core.getStyleValueFromPreviousStylesByName = function( styleName ) {
    var prevStyles = bc.core.cache( bc.viewID + "_current_styles" );
    
    //This should never be null as the bootstrap file should always put files into the download state.
    if( prevStyles === null ) {
      console.warn( "getStyleValueFromPreviousStylesByName had no previous styles." );
      return "";
    }
    
    for( var i=0, len=prevStyles.length; i<len; i++ ) {
      if( prevStyles[i].name === styleName ) {
        return prevStyles[i].value;
      }
    }
    return "";
  };
  
  /**
   * @private
   */
  bc.core.normalizeStylesForBackgroundImages = function( styles ) {
    var max, 
        needToDownload;

    bc.device.getDownloadInfo( function( downloadInfoArray ) {
      max = downloadInfoArray.length;
      for( var i=0, len = styles.length; i<len; i++ ) {
        needToDownload = true;
        //If we have a background image that is not an empty string then we need to see if we have downlaoded it.
        if( styles[i].attribute === "background-image" && styles[i].value !== "" ) {
          for( var j=0; j<max; j++ ) {

            //When find the download that matches this background image we need to see its state and take the appropriate action.
            if( downloadInfoArray[j].resource === bc.SERVER_URL + styles[i].value ) {
              needToDownload = false;
              if( downloadInfoArray[j].state === "complete") {
                styles[i].value = "url(" + downloadInfoArray[j].fileURI + ")";
              } else if( downloadInfoArray[j].state === "errored" ) {
                bc.device.removeDownload( downloadInfoArray[j].downloadID );
                needToDownload = true;
              } else {
                //The file is not downloaded yet so we are going to previous value for this image.
                styles[i].value = bc.core.getStyleValueFromPreviousStylesByName( styles[i].name );
              }
            }
          }
        }
        
        if( needToDownload ) {
          bc.device.requestDownload( (bc.SERVER_URL + styles[i].value), (bc.SERVER_URL + styles[i].value), undefined, undefined, { returnURLOfResourceInWorkshop: true } );
          styles[i].value = bc.core.getStyleValueFromPreviousStylesByName( styles[i].name );
        }
      }
      bc.core.applyActualStyles( styles );
    });
  };
  
  /**
   * Applies the styles that are set in the Brightcove App Cloud Studio to the elements.
   *
   * @param styles A JSON object representing the styles for this view.  This object is passed as a data
   * parameter to the <code>newconfigurations</code> event fired on the bc object.
   *
   @example 
   $( bc ).on( newconfigurations, function( evt, data ) {
     bc.core.applyStyles( data.styles ); //The new styles, such as background colors, are now applied.
   });
   */
  bc.core.applyStyles = function( styles ) {
    var haveDownloadedImages = false;
    styles = styles || bc.core.getStyles();
    
    //Check to see if we have any downloaded background images
    if( bc.context.isNative ) {
      for( var i = 0, len = styles.length; i < len; i++ ) {
        if( styles[i].attribute === "background-image" && styles[i].value !== "" && styles[i].value.substring(0,6) === "/files" ) {
          haveDownloadedImages = true;
          break;
        }
      }
    }
    
    if( haveDownloadedImages ) {
      bc.core.normalizeStylesForBackgroundImages( styles );
    } else {
      bc.core.applyActualStyles( styles );
    }
      
  };
  
  /**
   * @private
   */
  bc.core.applyActualStyles = function( styles ) {
    var $styleElement,
        cssString = "";
    
    if( styles === null || styles === undefined ) {
      return;
    }
    
    for( i = 0, len = styles.length; i < len; i++ ) {
      if( styles[i].value !== "" ) {
        //We are setting the !important tag in order to override any specificity issues since we know this is the style we want.
        if( styles[i].attribute === "background-image" && styles[i].value.substring(0,4) !== "url(" ) {
          cssString += "." + styles[i].name + " { " + styles[i].attribute + ": url(" + styles[i].value + ") !important; } \n";
        } else {
          cssString += "." + styles[i].name + " { " + styles[i].attribute + ":" + styles[i].value + " !important; } \n";
        }
      }
    }
    
    //persist this file for next startup
    bc.core.cache( bc.viewID + "_current_styles", styles );
    
    //Remove any existing stylesheets we have injected
    $( ".injected-style" ).remove();

    $( "<style>" ).attr( "type", "text/css" )
                  .addClass("injected-style" )
                  .html( cssString )
                  .appendTo( "head" );
  };
  
  /**
   * Retrieves a specific style.  First looks to the cache to get the value, then to the manifest, and if not found in either of those
   * places, it will return an empty object.
   *
   *@param nameOfStyle The name of the style to retrieved.  (This name should correspond to the name in the manifest file.)
   *@return An object that has the CSS class name and the value.
   *@example
   var backgroundStyle = bc.core.getStyle( "background-page-color" ); //background-page-color is the name of the style defined in the manifest file.
   alert( backgroundStyle.cssClass ); //alerts "background-color"
   alert( backgroundStyle.value ); //alerts the value set by the server, for example "#FF00000" 
   */
  bc.core.getStyle = function( nameOfStyle) {
    return findValueInObject( bc.core.getStyles(), nameOfStyle );
  };

  /**
   * Retrieves the settings from the cache for the current view.
   * 
   * @return An object that contains the settings for this particular view or an empty object if no settings are found.
   * @example 
   // Settings is an object.
   var setting = bc.core.getSettings();
   if( bc.core.getSetting( "numberOfColumns" ) > 2 ) {
     //render grid layout.
   }
   */
  bc.core.getSettings = function() {
    var settings,
        viewSettings = bc.core.cache( bc.viewID + "_settings" ),
        globalSettings = bc.core.cache( bc.appID + "_global_configs" ) || {};
    
    settings = bc.utils.merge( globalSettings.settings, viewSettings );
    
    if( settings.length === 0 && bc.configurations && bc.configurations.settings ) {
      settings = bc.configurations.settings;
    }
    
    return settings || [];
  };
  
  /**
   * bc.core.getSetting is a helper function to get the value of a particular setting.  The reason this is
   * helpful is that the settings for a view are stored as an Array.
   * @param nameOfSetting The name of the setting to get the value for. This should correspond to the name provided in
   * the <code>manifest.json</code> file.
   * @example
   var title = bc.core.getSetting( "titleOfPage" );
   alert( "The title of the page that was defined in the manifest.json and set in the Studio: " + title );
   */
  bc.core.getSetting = function( nameOfSetting ) {
    return findValueInObject( bc.core.getSettings(), nameOfSetting ).value;
  };
  
  /**
   * <b>Deprecated:</b> use <code>getData</code> instead. <code>fetchContentFeed</code> makes a request to the App Cloud Studio to get the data for a given content feed.
   * @param id The ID of the content feed that was setup in the App Cloud Studio.
   * @param successCallback The function to be called once the data has been retrieved.  This callback will be passed a data object containing the results of the request.
   * @param errorCallback The function to be called if an error occurs retrieving the data.  (Timeout is set to 30 seconds.)
   * @param options If the content feed has dynamic values, they can be passed in via the options object.  
   */
  bc.core.fetchContentFeed = function( id, successCallback, errorCallback, options ) {
    var url = bc.SERVER_URL + "/content/" + id + "/fetch";
  
    $.ajax( { url: url,
              timeout: 30000,
              dataType: "jsonp",
              data: ( options ) ? { "query_params": options } : ""
            }
          ).success( successCallback )
           .error( errorCallback );
  }; 
  
  /** @private */
  bc.core.refreshConfigurationsForView = function() {
    //If we are in development mode we should not make this request, as we do not have valid IDs.
    if( bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
      return;
    }
    var url = bc.SERVER_URL + "/apps/" + bc.appID + "/views/" + bc.viewID + "/configurations.json";
    
    $.ajax( 
      { 
        url: url,
        dataType: "jsonp",
        data: { "os": bc.context.os }
      }
    ).success( bc.core.configurationsForViewSuccessHandler );
  };
  
  /**
   * @private
   */
  bc.core.configurationsForViewSuccessHandler = function( data ) {
    var newSettings,
        newStyles,
        newConfigurations,
        newGlobalConfigs,
        globalConfigs = data.global || {};
    
    newGlobalConfigs = storeGlobalConfigs( globalConfigs );
    newSettings = storeSettings( data.settings );
    newStyles = storeStyles( data.styles );
    
    if( newSettings || newStyles || newGlobalConfigs ) {
      newConfigurations = {
        "settings": {
          "isNew": ( newSettings || newGlobalConfigs ),
          "values": bc.utils.merge( globalConfigs.settings, data.settings )
        },
        "styles": {
          "isNew": ( newStyles || newGlobalConfigs ),
          "values": bc.utils.merge( globalConfigs.styles, data.styles )
        }
      };
      bc.core.applyStyles();
      $( bc ).trigger( "newconfigurations", newConfigurations );
      
      //If we are in preview mode then we want to refresh the page.
      if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
        bc.core.forceUpdate( newConfigurations );
      }
    } else {
      //Trigger an event to the studio so they know we are set.
      if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
        $( bc ).trigger( "preview:ready" );
      }
    }
    storeAdConfigurations( data.ads );
  };
  
  /**
   * @private
   */
  bc.core.forceUpdate = function( configs ) {
    if( configs.styles.isNew && !configs.settings.isNew ) {
      bc.core.applyStyles();
    } else {
      window.location.reload();
    }
  };
  
  /**
   * Checks to see whether or not we are in preview mode. (In the App Cloud Studio).
   *
   * @private
   * @return A boolean indicating whether or not we are in preview mode.    
   */
  bc.core.isPreview = function() {
    return ( window.location !== window.parent.location ) ? true : false;
  };
  


/**
 * Public Events
 */
/**
 * The <code>vieworientationchange</code> event is fired anytime that the view itself rotates on the device.  The
 * event will contain three properties: <code>orientation</code>, <code>width</code>, and <code>height</code>. The orientation corresponds to <code>landscape</code> or <code>portrait</code>,
 * and the <code>width</code> and <code>height</code> are the dimensions of the view in the new orientation.  This event is fired on the bc
 * object.
 *
 * @example
 * $( bc ).on( "vieworientationchange", function( evt, rslt ) {
 *   alert("I'm " + rslt.orientation); 
 * });
 *
 * @name vieworientationchange
 * @event
 * @memberOf bc
 * @param event (type of vieworientationchange)
 * @param result An object that contains three properties; <code>orientation</code>, <code>width</code>, and <code>height</code>.  The
 * orientation will be the new orientation of the view ['portrait' | 'landscape'].  The <code>width</code> and
 * <code>height</code> will be the width and height of the view (window) in pixels.
 */
  $( window ).on( "resize", function( evt, result ) {
    var newWidth = window.innerWidth,
        newHeight = window.innerHeight,
        orientation = ( newWidth > newHeight ) ? "landscape" : "portrait";

    if ( orientation !== bc.context.viewOrientation ) {
      bc.context.viewOrientation = orientation;
      $( bc ).trigger( "vieworientationchange", {
        "orientation": orientation,
        "width": newWidth,
        "height": newHeight
      });
    }
  });

  /**
   * The <code>init</code> event is triggered at the end of the initialization process.  When the init event is fired the following requirements have been satisfied.
   <ul>
   <li>The <code>bc.context</code> object has been initialized</li>
   <li>Any txt files specified in the markup property of the view in the manifest have been loaded, parsed and populated onto the bc.templates object</li>
   <li>Any txt files specified in locales property of the view in the manifest have been loaded and populated on the Mark.includes name space.</li>
   <li>The documentat has loaded</li>
   </ul>
   * @example
   * $( bc ).on( "init", function(evt) {
   *    alert("BC SDK is initialized.  Can access bc.context such as: "  + bc.context.vieworientation);
   * });
   * @name init
   * @event
   * @memberOf bc
   * @param event
   */
  function triggerInitEvent() {
    if( bc.context.initialized ) {
      return;
    }
    bc.context.initialized = true;
    bc.device.setViewIsReady();
    $( bc ).trigger( "init" );
    bc.core.triggerViewFocusInDevelopmentMode();
  }
  
  /**
   * If we are developing in the browser then we want the viewfocus event to fire.
   * @private
   */
   bc.core.triggerViewFocusInDevelopmentMode = function() {
     if( !bc.context.isNative && bc.core.current_mode === bc.core.mode.DEVELOPMENT ) {
       $( bc ).trigger( "viewfocus" );
     }
   };
  
  /**
   * The <code>viewfocus</code> event is triggered when a view gains focus.
   * 
   * @example
   * $( bc ).on( "viewfocus", function( evt ) {
   *    alert( "I am the view that is currently in focus.")
   * });
   * @name viewfocus
   * @event
   * @memberOf bc
   * @param event (type of viewfocus )
   */ 

   /**
    * The <code>viewblur</code> event is triggered when a view loses focus, meaning that the user has switched to a different view.  When the app is closed, it does trigger a <code>viewblur</code> event.
    * 
    * @example
    * $( bc ).on( "viewblur", function( evt ) {
    *    alert( "I am no longer in focus.")
    * });
    * @name viewblur
    * @event
    * @memberOf bc
    * @param event (type of viewblur)
    */
  
  /**
   * The <code>pushnotification</code> event is triggered on the bc object when a new push notification has been received for this application.  If the app is already running, no pop up notification is shown to the user and a pushnotification event is triggered on the currently
   * visible view with the "appLaunched" property set to false.  If the app is not running then a pop up notification is shown to the user; if the user interacts with the pop up, then the app is launched and an event is triggered on the first view with the "appLaunched" property
   * set to true.  If the app is running in the background then a pop up notification is shown to the user; if the user interacts with the pop up, then the app is launched and an event is triggered on the currently visible view with the "appLaunched" property set to true.  Note
   * that if the push notificaiton pop up is shown to the user and the user dismisses the notification the event is never fired within the app.
   * 
   * @example
   * $( bc ).on( "pushnotification", function( evt, data ) {
   *   alert( "Push Message: " + data.message );
   *   alert( "App Launched because of push notification: " + data.appLaunched );
   *   alert( "Key value pairs for this push notification: " + data.params );
   * });
   * @name pushnotification
   * @event
   * @memberOf bc
   * @param event (type of pushnotification)
   * @param data An object that has the properies of "message", "appLaunched" and "params".  Params is an object that contains the key/value pairs specified in the App Cloud studio for this push notification event.
   */
    
  /**
   * The <code>newconfigurations</code> event is triggered when a configuration (styles or settings), is retrieved from the server.
   * The App Cloud SDK checks the server for new configurations whenever the view gains focus.  If <code>newconfigurations</code> are found, 
   * then the event is triggered on the bc object and passed configurations as an object that has the values and a property indicating
   * whether or not those values are new.
   *
   * @example
   $( bc ).on( "newconfigurations ", handleNewConfigurations );

   //Possible values for data are:  {
   //   "settings": {
   //     "isNew": boolean,
   //     "values": data.settings
   //   },
   //   "styles": {
   //     "isNew": boolean,
   //     "values": data.styles
   //   }
   function handleNewConfigurations( evt, data ) {
      if( data.styles.isNew ) {
        bc.core.applyStyles();
      }
   }
   * @name newconfigurations
   * @event
   * @memberOf bc
   */
   
 /**
  * The <code>downloadprogress</code> is triggered on the bc object at the interval specified in the options passed to the <code>bc.device.requestDownload</code> API.
  * <b>Note</b> this only applies to iOS and by default no downloadprogress events will be fired.  Progress events should be used only for displaying progress to the 
  * user or other helpful messaging, and not for important business logic decisions in template source code.  The event object that is passed to any registered function
  * will have the following properties:
  <ul>
    <li>progress (number) The amount of bytes received.</li>
    <li>expected (number) The total bytes expected for this download.</li>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API.
  </ul>
  *
  * @example
  $( bc ).on( "downloadprogress", handleDownloadProgress );
  
  function handleDownloadProgress( evt, data ) {
    var percentComplete = data.progress / data.expected;
    
    //Get the percentage out of a hundered and make it a whole number.
    percentComplete = Math.floor( percentComplete * 100 ) + "%";
    
    //In this example I assume I have an element that represents a progress indicator, so I am going to set the width of that element.
    $( "#progress" ).css( "width", percentComplete )
    
  }
  * @name downloadprogress
  * @event
  * @memberOf bc
  */
  
  /**
   * The <code>downloadcomplete</code> event is dispatched by the container if the download finishes successfully, as the request 
   * moves into the "complete" state. The payload to this event is an object containing a single property, "info", whose
   * value is an object with the following properties:
   *
   <ul>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>state (String) The current state of the download request. For this event it will always be "complete".</li>
    <li>size (Number) The file size of the downloaded data in bytes</li>
    <li>fileURI (String) The path to the file on disk.</li>
  </ul>
  *
  * @example
  $( bc ).on( "downloadcomplete", handleDownloadComplete );
  
  function handleDownloadComplete( evt, data ) {
    var videoFile = data.fileURI;
    
    //Assume there is a video tag element already on the page with and ID of video.
    $( "video" ).attr( "src", videoFile );
  }
  *
  * @name downloadcomplete
  * @event
  * @memberOf bc
  */
  
  /**
   * The <code>downloaderror</code> event is dispatched by the container if there is an error downloading the requested resource.  The 
   * payload to this event is an object containing a single property, "info", whose value is an object with the following properties:
   <ul>
    <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
    <li>state (String) The current state of the download request. For this event it will always be "errored".</li>
   </ul>
   *
   * @example
   $( bc ).on( "downloaderror", handleDownloadError );
   
   function handleDownloadError( evt, error ) {
     console.error( "There was an error downloading " + error.resource );
   }
   
   * @name downloaderror
   * @event
   * @memberOf bc
   */
   
  /**
   * End Events
   */
   
   $( bc ).on( "sessionstart", function( evt ) {
     if( !bc.metrics ) {
       console.log( "bc.metrics is not defined" );
       return;
     }
     
     //If we are starting this session from a push notification we want to add that our metrics object.
     if( window.bc_notificationID ) {
       bc.metrics.addNotificationID( window.bc_notificationID );
     }
     bc.metrics.track( "session" );
   });
   
   $( bc ).on( "sessionend", function( evt ) {
     window.bc_notificationID = undefined;
     bc.metrics.removeNotificationID();
   });
  
  /*
   * Initialize the metrics object and triggers events for install and session start where appropriate.
   */
  $( bc ).on( "init", function() { 
    var initData;
    //If we are in the Studio, development mode or running in the workshop, we should not trigger events.
    if( bc.core.current_mode !== bc.core.mode.PRODUCTION || bc.utils.runningInWorkShop() ) {
      return;
    }
    //Initialize the metrics object
    if( bc.metrics !== undefined ) {
      initData = {
        "account": bc.accountID,
        "application": bc.appID,
        "view": bc.viewID,
        "os": bc.context.os
      };
      
      if( window.bc_notificationID ) {
        initData.message = window.bc_notificationID;
      }
      
      bc.metrics.init( {
          "domain": "appcloud",
          "uri": bc.METRICS_SERVER_URL,
          "interval": "5000",
          "pendingMetrics": bc.core.cache( bc.viewID + "_pendingEvents" )
        }, initData
      );
    }
    
    //Check for flag to send install event.
    if( window.bc_firstRun && bc.metrics ) {
      bc.metrics.track( "installation" );
    }
    
    //If the viewfocus event has already fired we need to now start tracking.
    if( window.bc_viewFocus && bc.metrics ) {
      bc.sessionEndCallback = bc.metrics.live( "view" );
    }
  });
  
  $( bc ).on( "viewfocus", function() {
    //Should get the most recent settings and styles for this view.
    bc.core.refreshConfigurationsForView();
    
    if( bc.metrics && bc.metrics.isInitialized() ) {
      if( window.bc_notificationID ) {
        bc.metrics.addNotificationID( window.bc_notificationID );
      } else {
        bc.metrics.removeNotificationID();
      }
      bc.sessionEndCallback = bc.metrics.live( "view" );
    } else {
      window.bc_viewFocus = true;
    }
  });
  
  $( bc ).on( "viewblur", function() {
    if( typeof( bc.sessionEndCallback ) === "function" ) {
      bc.sessionEndCallback();
    }
  });
  
  //Listen for the event to store pending events.
  $( bc ).on( "metrics:pendingevents", function( evt, data ) {
    bc.core.cache( bc.viewID + "_pendingEvents", data.events );
  });

  /**
   * Set up our context object with any values that can be bootstrapped.
   */
  function initContextObject() {
    bc.context.viewOrientation = ( window.innerWidth > window.innerHeight ) ? "landscape" : "portrait";
    bc.context.os = ( navigator.userAgent.indexOf( "Mac OS X" ) > -1 ) ? "ios" : "android";
    bc.context.onLine = navigator.onLine;
    bc.core.setMoreNavigationState();
    if( bc.device !== undefined ) {
      bc.device.setIsNative();
    }
    
    //If we are in preview mode, we set a flag so that the Studio knows that we will trigger a preview:ready event after we have finished refreshing the page.
    if( bc.core.current_mode === bc.core.mode.PREVIEW ) {
      bc.context.triggersPreviewReady = true;
    }
  }
  
  /** @private */
  bc.core.loadMarkUp = function() {
    if( !bc.configurations || !bc.configurations.markup ) {
      _markupLoaded = true;
      return;
    }
    
    function success( txt ) {
      bc.templates = bc.templates || {};
      //Parse the template and call triggerInit
      txt = txt.split("=====").splice(1);

      for (var t in txt) {
          var i = txt[t].indexOf("\n");
          var key = txt[t].substr(0, i).trim();
          var val = txt[t].substr(i).trim();
          bc.templates[key] = val;
      }
      _markupLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }
    
    function error() {
      console.error( "There was an error loading the markup text file from: " + bc.configurations.markup + " Continuing the loading of webview without markup." );
      _markupLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }
    
    $.ajax( {
      url: bc.configurations.markup,
      success: success,
      error: error
    });
  };
  
  /** @private */
  bc.core.loadLocales = function() {
    if( !bc.configurations || !bc.configurations.locales ) {
      _localeResourceFileLoaded = true;
      return;
    }
    
    function success( txt ) {
      var s, t;
      txt = txt.split("\n");
      for ( t in txt ) {
        s = txt[t].trim();
        if ( !s.length || s.charAt(0) === "#" ) {
          continue;
        }
        s = s.split("=");
        if( s.length > 1 ) {
          Mark.includes[s[0].trim()] = s[1].trim();
        }
      }
      _localeResourceFileLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }
    
    function error() {
      console.error( "There was an error loading the locale text file from: " + bc.configurations.locales + " Continuing the loading of webview without locales." );
      _localeResourceFileLoaded = true;
      if( _markupLoaded && _localeResourceFileLoaded ) {
        triggerInitEvent();
      }
    }
    
    $.ajax( {
      url: bc.configurations.locales,
      success: success,
      error: error
    });
  };
  
  /**
   * @private
   */
  bc.core.setMoreNavigationState = function() {
    var cachedValue = bc.core.cache( bc.viewID + "_moreNavigationView" );
    if( cachedValue === null ) {
      bc.context.moreNavigationView = window.bc_moreNavigationView === true;
      bc.core.cache( bc.viewID + "_moreNavigationView", bc.context.moreNavigationView );
    } else {
      bc.context.moreNavigationView = cachedValue;
    }
  };

  /**
   * @private
   */
  bc.core.loadConfigurationsFromManifest = function() {
    var $manifest;

    if( window.bc_configurations !== undefined && window.bc_configurations.views !== undefined) {
      bc.core.cache( bc.appID + "_configurations", window.bc_configurations );
      bc.core.setConfiguration( window.bc_configurations, true );
    } else {
     //check the cache to see if we have existing configurations.
     bc.configurations = bc.core.cache( bc.viewID + "_configurations" );
     bc.manifestURI = bc.core.cache( "manifest_uri" );
     if( bc.configurations === null ) {
       $manifest = $( '[name="bc-manifest"]' );
       if( $manifest.length > 0 ) {
         bc.core.loadManifestFromMetaTag( $manifest );
       } else {
         bc.core.loadManifestViaAjax( 0 );
       }
     }
    }
  };
  
  /**
   * @private
   */
  bc.core.loadManifestFromMetaTag = function( $elem ) {
    bc.manifestURI = $elem.attr( "content" );
    $.ajax( 
      {
        "url": bc.manifestURI,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function() 
      {
        console.error( "ERROR: Loading manifest.json from: " + uri );
      }
    );
  };
  
  /**
   * @private
   */
  bc.core.loadManifestViaAjax = function( index ) {
    var directories;
    
    index++;
    directories = location.href.split( "/" );
    
    if( index === ( directories.length - 1 ) ) {
      console.error( "ERROR: Did not find a manifest.json file." );
      return;
    }

    bc.manifestURI = directories.slice( 0, directories.length - index )
                      .join( "/" )
                      .concat( "/manifest.json" );
    $.ajax( 
      {
        "url": bc.manifestURI,
        "async": false
      }
    )
    .success( bc.core.setConfiguration )
    .error( function() 
      {
        bc.core.loadManifestViaAjax( index );
      }
    );
  };
  
  /**
   * @private
   */
  bc.core.setConfiguration = function( manifest, cache ) {
    var views, 
        globalConfigs = {},
        viewURI;
      
    bc.configurations = {};
      
    manifest = ( typeof manifest === "string" ) ? JSON.parse( manifest ) : manifest;
    cache = ( typeof cache === "boolean") ? cache : false;
    
    if( manifest.global ) {
      globalConfigs = manifest.global;
    }
    
    views = manifest.views;
    for( var i = 0, len = views.length; i < len; i++ ) {
      viewURI = ( views[i].uri.indexOf( "./" ) > -1 ) ? views[i].uri.split( "./" )[1] : views[i].uri;
      if( location.href.toLowerCase().indexOf( viewURI.toLowerCase() )  > -1 ) {
        //We load the locale and markup files from the HTML file so we need to know how many directories to go up to make the correct request.
        bc.configurations.styles = ( globalConfigs && globalConfigs.styles ) ? bc.utils.merge( globalConfigs.styles, views[i].styles ) : views[i].styles;
        bc.configurations.data = ( globalConfigs && globalConfigs.data ) ? bc.utils.merge( globalConfigs.data, views[i].data ) : views[i].data;
        bc.configurations.settings = ( globalConfigs && globalConfigs.settings ) ? bc.utils.merge( globalConfigs.settings, views[i].settings ) : views[i].settings;
        bc.configurations.markup = bc.core.setCorrectPathForResourceFile( viewURI, views[i].markup );
        bc.configurations.locales = bc.core.setCorrectPathForResourceFile( viewURI, views[i].locales );

        if( cache ) {
          bc.core.cache( bc.viewID + "_configurations", bc.configurations );
          bc.core.cache( "manifest_uri", bc.manifestURI );
        }
        return;
      }
    }

  };
  
  /** @private */
  bc.core.setCorrectPathForResourceFile = function( viewURI, path ) {
    var directoryDepth,
        dir = "";
    
    if( path === undefined ) {
      return "";
    }
    
    viewURI = ( viewURI.indexOf( "./" ) > -1 ) ? viewURI.split( "./" )[1] : viewURI;
    
    //Since the manifest.json file has to be at the root, if the files are located a directory up from here we assume the template author knows exactly where it is, so we return it untouched.
    if( path.indexOf( "../" ) > -1 ) {
      return path;
    }
    
    directoryDepth = viewURI.split( "/" ).length - 1;
    path = ( path.indexOf( "./" ) > -1 ) ? path.split( "./" )[1] : path;
    
    for( var i=0; i < directoryDepth; i++ ) {
      dir += "../";
    }
    return dir + path;
  };

  $( document ).ready( function() {
    setGlobalIDValues();
    initContextObject();
    bc.core.applyStyles();
    bc.core.loadConfigurationsFromManifest();
    setAdPolicy();
    bc.currentGlobalConfigs = bc.core.cache( bc.appID + "_global_configs" );
    bc.core.loadMarkUp();
    bc.core.loadLocales();
    if( _markupLoaded && _localeResourceFileLoaded ) {
      triggerInitEvent();
    }
  });
  
} )( bc.lib.jQuery );
/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
* Brightcove Utils is a collection of helper functions.
* @namespace
*/
bc.utils = {};

( function( $, undefined ) { 
  var _supportsTouch;
  
  /**
   * Set this property to either true or false to turn logging to the console on or off, defaults to true.
   */
  bc.utils.debug = true;
  
  /**
   * Detects whether or not this particular device supports touch events.  
   *
   * @return A boolean indicating whether or not touch events are currently supported.
   * @example  
    if ( bc.utils.hasTouchSupport() ) {
      alert("I support touch!");
    } else {
      alert("Touch is not supported.");
    }
   */
   bc.utils.hasTouchSupport = function() {
     
     if( _supportsTouch !== undefined ) {
       return _supportsTouch;
     }

     _supportsTouch = "ontouchend" in document;
     return _supportsTouch;
   };   
  
  /**
   * Returns a number from a string that is passed in.  If the string ends in 'px' (for pixels), then it is stripped off and that
   * number is returned.  If a number cannot be parsed out, 0 is returned.
   *
   * @param number The string representation of a number that can end with a 'px'.
   * @returns Returns the a number for the string that is passed in.
   @example
   $( ".page" ).css( "top", "50px" );
   var top = bc.utils.getNum( $( ".page" ).css( "top" ) ); //top is 50.
   */

  bc.utils.getNum = function( number ) {
    var ret;
    if( typeof( number ) === "number" ) {
      return number;
    }

    ret = ( number.indexOf( "px" ) > -1 ) ? parseInt( number.substring( 0, number.indexOf( "px" ) ), 10 ) : parseInt( number, 10 );
    return (ret) ? ret : 0;
  };

  /**
   * Converts a number from hex to RGB. 
   *
   * @param hex A number in a hexadecimal format.  For example #ffffff.  (Either ffffff or #ffffff can be passed in.)
   * @returns The RGB value for the hexadecimal value passed in.
   @example
   var rgb = bc.utils.hexToRGB( "#ffffff" ); //rbg is now { "red": 255, "green": 255, "blue": 255 }  
   */
  bc.utils.hexToRGB = function( hex ) {
    var red,
        green,
        blue;
    if( !hex ) {
      return;
    }

    if( hex.indexOf( "#" ) > -1 ) {
      hex = hex.replace( "#", "0x");
    }

    try {
      red = ( hex & 0xff0000 ) >> 16;
      green = ( hex & 0x00ff00 ) >> 8;
      blue = hex & 0x0000ff;

      return { "red": red, "green": green, "blue": blue };
    } catch (e) {
      bc.utils.warn( "Bad value passed into hexToRGB of: " + hex + ".  Threw error of: " + e.toString() );
    }
  };

  /**
   * Returns the WebKitCSSMatrix for this element or generates a new one if one does not exist.
   *
   * @private
   * @param node - The element to get or create the WebkitCSSMatrix from.
   * @return - A WebKitCSSMatrix for this element.
   */
  bc.utils.getMatrixFromNode = function( node ) {
    if( window.getComputedStyle( node ).webkitTransform === "none" ) {
      return new WebKitCSSMatrix(); 
    } else {
      return new WebKitCSSMatrix( window.getComputedStyle( node ).webkitTransform );
    }
  };
  
  /**
   * Returns the number of properties in a given object.
   *
   * @param obj The object to inspect.
   * @return The number of properties in the object.
   * @example
   var testObj = { "quiver": "cobras", "raft": "otters" };
   var length = bc.utils.numberOfProperties( testObj ); // length is equal to 2
   */
  bc.utils.numberOfProperties = function( obj ) {
    var count = 0;
    for( var prop in obj ) {
      if( obj.hasOwnProperty( prop ) ) {
        ++count;
      }
    }

    return count;
  };

  /**
   * Unescapes HTML from the given string.  This is handy if data returned to you that has escaped HTML in it that you now want
   * to render.
   * 
   * @param htmlString The string that contains escaped HTML.
   * @return A string with the HTML tags unescaped.
   @example
   var escapedHTML = "&amp;lt;h1&amp;gt;hello there avid reader&amp;lt;/h1&amp;gt;"
   var html = bc.util.unescapeHTML( escapedHTML ); //html is now &lt;h1&gt;hello there avid reader&lt;/h1&gt;
   */
  bc.utils.unescapeHTML = function( htmlString ) {
    return $( "<div>" ).html( htmlString ).text();
  };
  
  /**
   * Determines how many hours have passed since the date passed in and returns the results in as formatted string.
   * @private
   * @param pastDate - A JavaScript Date object representing the starting time that the calculation should be determined from.
   * @results - A String specifying how many hours, days, weeks or months have passed since the date passed in.
   */
  bc.utils.hoursAgoInWords = function( pastDate ){
    var now = new Date(),
        hoursAgo = Math.floor( ( ( now.getTime() - pastDate.getTime()) / 3600000) );
    if( hoursAgo === 0 ) {
      var minutesAgo = Math.floor( ( now.getTime() - pastDate.getTime() ) / 60000) ;
      return minutesAgo + " minute" + ( minutesAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 24 ) {
      return hoursAgo + " hour" + ( hoursAgo > 1 ? "s" : "" ) + " ago";
    } else if(hoursAgo < 168) {
      var daysAgo = Math.floor( hoursAgo / 24 );
      return daysAgo + " day" + ( daysAgo > 1 ? "s" : "") + " ago";
    } else if( hoursAgo < 744 ) {
      var weeksAgo = Math.floor( hoursAgo / 168 );
      return  weeksAgo + " week" + ( weeksAgo > 1 ? "s" : "" ) + " ago";
    } else {
      var monthsAgo = Math.floor( hoursAgo / 744 );
      return monthsAgo + " month" + ( monthsAgo > 1 ? "s" : "" ) + " ago";
    }
  };

  /**
   * Removes any tags from a given string. Useful for removing any HTML tags from a string.
   *
   * @param string A String that may include HTML tags that should be removed.
   * @return A string with its HTML tags removed.
   @example
   var htmlString = "&lt;h1&gt;hello there avid reader&lt;/h1&gt;";
   var cleanString = bc.utils.stripTags( htmlString ); //cleanString is "Hello there avid reader"
   */
  bc.utils.stripTags = function(string) {
    if( string === undefined || string === null ) {
      return "";
    }
    return string.replace( /<\/?[^>]+>/gi, "" );
  };
  
  /**
   * Generates a unique ID.
   *
   * @return A unique number.
   * @example 
   var unique = bc.utils.uniqueID(); //unique is...wait for it...yup, a unique number
   @private
   */
  bc.utils.uniqueID = function() {
    return Math.floor(new Date().getTime() * Math.random());
  };

  /**
   * Determines whether or not a string is a valid URL.  ( Regex borrowed from http://snippets.dzone.com/posts/show/452 )
   * @param url The string that should be checked to see whether or not it is valid.
   * @return A boolean indicating whether or not a string is a valid URL. True if valid.
   @example
   var valid = bc.utils.validURL( "http://www.brightcove.com" ); //valid is true.
   @private
   */
  bc.utils.validURL = function( url ) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test( url );
  };
  
  /**
   * @private
   */
  bc.utils.runningInWorkShop = function() {
    return ( bc.context.isNative && location.href.substring( 0, 4 ) === "http" );
  };
  
  /**
   * A wrapper for console.log  If debugging is turned off, then no console.log messages will logged.
   * @param message The string that is logged out.
   */
  bc.utils.log = function ( message ) {
    if( bc.utils.debug ) {
      console.log( message );
    }
  };
  
  /**
   * A wrapper for console.warn.  If debugging is turned off, then no console.warn messages will logged.
   * @param message The string that is logged out as a warning.
   */
  bc.utils.warn = function( message ) {
    if( bc.utils.debug ) {
      console.warn( message );
    }
  };
  
  /**
   * A wrapper for console.error.  If debugging is turned off, then no console.error messages will logged.
   * @param message The string that is logged out as an error.
   */
  bc.utils.error = function( message ) {
    if( bc.utils.debug ) {
      console.error( message );
    }
  };

  /**
   * Encode the supplied fragment according to the rules specified in RFC3986.  Specifically, the encoding
   * will follow:
   * fragment    = *( ALPHA / DIGIT / "-" / "." / "_" / "~" / "%" HEXDIG HEXDIG / "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "=" / ":" / "@" / "/" / "?" )
   *
   * @param message The string that is to be encoded
   */  
  bc.utils.encodeFragment = function( fragment ) {
    if ( fragment === undefined ) {
      return fragment;
    }

    return fragment.replace( /%/g, '%25').replace( /#/g, '%23').replace( /\[/g, '%5B').replace( /\]/g, '%5D');
  };

  /**
   * Decode the supplied fragment according to the rules specified in RFC3986.  This is expected to be used for values received from a hashchange event
   * on the window object.  Here is an example of a typical use:
   *
   * $( window ).bind( "hashchange", function( evt) {
   *   var decodedHash = bc.utils.decodeFragment( location.hash );
   * });
   *
   * @param message The string that is to be decoded.  Typically, this will be a string that has been previously encoded using bc.utils.encodeFragment().
   */  
  bc.utils.decodeFragment = function( fragment ) {
    if ( fragment === undefined ) {
      return fragment;
    }

    return fragment.replace( /%25/g, '%').replace( /%23/g, '#').replace( /%5B/g, '[').replace( /%5D/g, ']');
  };
  

  /**
   * @private
   */
  bc.utils.merge = function( globalArray, viewArray ) {
    viewArray = viewArray || [];
    var ret = viewArray,
        overriden;
    
    if( !globalArray ) {
      return ret;
    }
    
    for( var i=0, len=globalArray.length; i<len; i++ ) {
      overriden = false;
      
      for( var j=0, max=viewArray.length; j<max; j++ ) {
        if( globalArray[i].name === viewArray[j].name ) {
          overriden = true;
          break;
        }
      }
      
      if( !overriden ) {
        globalArray[i].global = true;
        ret.push( globalArray[i] );
      }
      
    }
    return ret;
  };
  
  /**
   * Compares two objects to see if they are equal.  The objects can be complex objects, meaning nested objects.
   * @param obj1 The first object to be compared.
   * @param obj2 The second object to be comapared to the first.
   * @example
   var oneObject = { "blessing": "unicorns" }
     , otherObject = { "blessing": "unicorns" };
    
   //returns true
   bc.utils.isEqual( oneObject, otherObject ); 
   
   //returns false
   bc.utils.isEqual( oneObject, { "army": "ants" } );
   
   //Returns false
   bc.utils.isEqual( oneObject, { 
     "yes": {
        "complex": "I am"
     }
   });
   */
  bc.utils.isEqual = function( obj1, obj2 ) {
    
    if( !obj1 || !obj2 ) {
      return false;
    }
    
    for( var prop in obj1 ) {
      if( typeof( obj2[prop] ) == 'undefined' ) {
        return false;
      }
    }

    for( prop in obj1 ) {
      if ( obj1[prop] ) {
        switch( typeof( obj1[prop] ) ) {
          case 'object':
            if ( !bc.utils.isEqual( obj1[prop], obj2[prop] ) ) { 
              return false; 
            } 
            break;
          case 'function':
            if ( typeof( obj2[prop] ) == "undefined" || (p != 'equals' && obj1[prop].toString() != obj2[prop].toString()) ) {
              return false;
            }
            break;
          default:
            if ( obj1[prop] != obj2[prop] ) { 
              return false; 
            }
        }
      } else {
        if ( obj2[prop] ) {
          return false;
        }
      }
    }

    for( prop in obj2 ) {
      if( typeof( obj1[prop]) == 'undefined' ) {
        return false;
      }
    }

    return true;
  };
  
})( bc.lib.jQuery );
/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false*/

/**
 * bc.device provides functions to interact with the native capabilities of a device.
 *
 * Note that all functions take an optional success and error handler. 
 * 
 * @namespace
 */
bc.device = {};

/**
 * <b>Note:</b> The functions on the b.device.externalscreen object are only available on iOS devices
 * at this time.
 *
 * <br/><br/>bc.device.externalscreen provides functions to interact with a connected screen.  Specifically,
 * this means a connected Apple TV screen.  These functions work if the source iOS device (iPhone, iPad)
 * have mirroring turned on for a specific Apple TV.
 *
 * These functions only work on iOS devices.
 *
 * Note that all functions take an optional success and error handler. 
 * 
 * @namespace
 */
bc.device.externalscreen = {};

( function( $ ) {
 
 /*****************************************
  * Universal callback methodology
  ****************************************/
  var _callbackFunctionMap = {},
      _callStack = [],
      _enqueueCommands = true;

  /**
   * Possible codes returned by the error callback functions.
   * 
   * @namespace
   */
  bc.device.codes = {};

  /** An error occurred. */
  bc.device.codes.GENERAL = 100;

  /** The user canceled this action. */
  bc.device.codes.USER_CANCEL = 101;
  
  /** The device is not running in a native container. */
  bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION = 102;
  
  /** The camera is not available on this device. */
  bc.device.codes.CAMERA_UNAVAILABLE = 103;
  
  /** Unable to fetch contents for URL via xhr request.  Possible cross domain issue? */
  bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER = 104;
  
  /** Missing required parameter */
  bc.device.codes.MISSING_REQUIRED_PARAMETER = 105;
  
  /** Invalid downloadID */
  bc.device.codes.INVALID_DOWNLOAD_ID = 106;


/**
 * Public Events
 */

/**
 * The <code>externalscreenvideoprogress</code> event is fired at a 1s interval.  This is fired during the playback of a video and stopped during pause/stop actions.
 *
 * @example
 * $( bc ).on( "externalscreenvideoprogress", function( evt, result ) {
 *    $("#currenttime").text( Math.floor(result.currenttime) ;
 *    $("#currenttime").text("% Complete: " + Math.floor((result.currenttime/result.totaltime)*100)); 
 * });
 *
 * @name externalscreenvideoprogress
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoplaying)
 * @param result The result parameter to the event handler contains two properties.  The first is <i>currenttime</i>.  This indicates the current timecode in the play of the video.  The
 * second property is the <i>totaltime</i> property.  This indicates the total duration of the video.  You can use these two numbers to determine the % of the video that has
 * been watched and the remaining amount.
 */

/**
 * The <code>externalscreenvideoend</code> event is fired when the video has completed playback.  This means that the video has reached
 * the full length of the stream and there is no more content to play.  In addition to an externalscreenvideoend event being
 * fired an externalscreenvideopaused event will also be fired.
 *
 * @example
 * $( bc ).on( "externalscreenvideoend", function( evt ) {
 *    // update to play next video automatically
 *    bc.device.externalscreen.playVideo("http://urltonext/video");
 * });
 *
 * @name externalscreenvideoend
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoend)
 */

/**
 * The <code>externalscreenvideoplaying</code> event is fired anytime that video playback begins on the external screen.  This is fired after the first frame
 * of the video has begun playing back.
 *
 * @example
 * $( bc ).on( "externalscreenvideoplaying", function( evt ) {
 *    bc.device.alert("Enjoy your video!", successHandler, errorHandler);
 * });
 *
 * @name externalscreenvideoplaying
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideoplaying) 
 */
    
/**
 * The <code>externalscreenvideostopped</code> event is fired anytime that video has stopped playback.  This occurs when the video has previously been playing and  the <i>bc.device.externalscreen.stopVideo</i>
 * is called.
 *
 * @example
 * $( bc ).on( "externalscreenvideostopped", function( evt ) {
 *    bc.device.alert("Your video has ended, watch another?", successHandler, errorHandler);
 * });
 *
 * @name externalscreenvideostopped
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideostopped)  
 */

/**
 * The <code>externalscreenvideopaused</code> event is fired anytime that video playback is paused as a result of the call to <i>bc.device.externalscreen.pauseVideo</i> or the stream completes playing back.
 *
 * @example
 * $( bc ).on( "externalscreenvideopaused", function( evt ) {
*     // update play icon to show a pause
 * });
 *
 * @name externalscreenvideopaused
 * @event
 * @memberOf bc
 * @param event (type of externalscreenvideopaused)   
 */

/**
 * The <code>externalscreenconnected</code> event is fired anytime that an externalscreen is connected as a result of the user turning on mirroring on their iOS device.  This typically means
 * that the user has paired their iPad/iPhone with an AppleTV and the AppleTV is mirroring what is on the iPad/iPhone.  This indicates that the 
 * the externalscreen can be interacted with.  For example, the commands under bc.device.externalscreen can now be called.
 *
 * @example
 * $( bc ).on( "externalscreenconnected", function( evt ) {
 *     // AppleTV connected so I can now send a separate video stream to the AppleTV
 *     bc.device.externalscreen.playVideo("http://someurl/somepath/video.m4v", successHandler, errorHandler);
 *     // Also have ability to now change UI on iPad/iPhone to take advantage of dual screen experience
 * });
 *
 * @name externalscreenconnected
 * @event
 * @memberOf bc
 * @param event (type of externalscreenconnected)   
 */

/**
 * The <code>externalscreendisconnected</code> event is fired anytime that a previously connected external screen becomes unavailable.  This may happen as a result of the user turning off
 * mirroring on their iOS device or going out of range of their Apple TV.  Once this event is fired, calls to the function under <i>bc.device.externalscreen</i> can no longer be made.
 *
 * @example
 * $( bc ).on( "externalscreendisconnected", function( evt ) {
 *    bc.device.alert("Oops, AppleTV no longer available", successHandler, errorHandler);
 * });
 *
 * @name externalscreendisconnected
 * @event
 * @memberOf bc
 * @param event (type of externalscreendisconnected)    
 */

/**
 * The <code>modalwebbrowserclosed</code> event is fired anytime the modal web browser window is closed.
 *
 * @example
 * $( bc ).on( "modalwebbrowserclosed", function( evt ) {
 *    bc.device.alert("The modal web browser was closed.", successHandler, errorHandler);
 * });
 *
 * @name modalwebbrowserclosed
 * @event
 * @memberOf bc
 * @param event (type of modalwebbrowserclosed)    
 */

  $( document ).ready( function() {
    //We need to inject an iFrame into the page in order to flag the container that we have commands to pull
    createIframeBridge();
  });

  /*****************************************
   * Utility functions
   ****************************************/
  
  function createIframeBridge() {
    return $( '<iframe id="bc-device-bridge" style="display: none;" height="0px" width="0px" frameborder="0"></iframe>' ).appendTo( "body" );
  }
   /**
    *@private
    */
  function createNativeCall( successCallback, errorCallback, command, parameters ) {
    var successCallbackID,
         errorCallbackID,
         jsonCommand;

     //If this is not the current view then do not enqueue the request.
     if( !_enqueueCommands ) {
       console.warn( "This view is not currently in focus.  Commands are enqueued for the currently active view." );
       return;
     }

     if( successCallback === undefined ) {
       bc.utils.warn( "no success handler passed into native API call." );
       successCallback = function() {/*noop*/};
     }

     if( errorCallback === undefined ) {
       errorCallback = function() {/*noop*/};
     }

     if( !bc.device.isNative() ) {
       return errorCallback( 
         { 
           "errorCode": bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, 
           "errorMessage": command + " is not available for non native applications"
         }
       );
     }

     successCallbackID = bc.utils.uniqueID();
     errorCallbackID = bc.utils.uniqueID();

     _callbackFunctionMap[successCallbackID] = { 
       "associatedCallbackID": errorCallbackID, 
       "callback": successCallback 
     };    

     _callbackFunctionMap[errorCallbackID] = { 
       "associatedCallbackID": successCallbackID,
       "callback": errorCallback 
     };

     jsonCommand = { 
       "command" : command, 
       "successCallbackID" : successCallbackID, 
       "errorCallbackID": errorCallbackID, 
       "parameters" : parameters 
     };

     bc.device.nativeCall( JSON.stringify( jsonCommand ) ); 
  }

  /*****************************************
   * Event registration
   ****************************************/
  
  $( bc ).on( "viewfocus", function() {
    _enqueueCommands = true;
  });
  
  $( bc ).on( "viewblur", function() {
    _enqueueCommands = false;
  });

  /*****************************************
   * Helper functions
   ****************************************/

  function callErrorCallback( errorCallback, errorCode, errorMessage ) {
    if( typeof errorCallback === "function" ) {
      errorCallback( { 
        "errorCode": errorCode,
        "errorMessage": errorMessage
      });
    }
    console.warn( errorMessage );
  }
  
  /**
   * @private
   */
   bc.device.callbackHandle = function( id, data ) {
     var associatedCallbackID,
         callbackData;
     
     if ( data ) {
       callbackData = JSON.parse( atob( data ) );
       callbackData = callbackData.result;
     }
    
     if( _callbackFunctionMap[id] ) {
       associatedCallbackID = _callbackFunctionMap[id].associatedCallbackID;
       _callbackFunctionMap[id].callback( callbackData ); 
       delete _callbackFunctionMap[id];
       if ( associatedCallbackID ) {
         delete _callbackFunctionMap[associatedCallbackID];   
       }
     } else {
       bc.utils.error( "The ID passed by the native container is not in the queue." );
     } 
   };
 
 /*****************************************
  * Native APIs
  ****************************************/

  /**
   * @private
   */
  bc.device.registerListeners = function() {
    var hrefNoHash = window.location.href;    

    $( window ).on( "hashchange", function() {
      if ( !bc.device.isNative() ) {
        return;
      }
      else {
        hrefNoHash = hrefNoHash.indexOf( "#" ) != -1 ? hrefNoHash.substring( 0, hrefNoHash.indexOf( "#" ) ) : hrefNoHash;

        bc.device.navigateToView( hrefNoHash,
                                  null, 
                                  null, 
                                  { fragmentID: window.location.hash } );
      }
    });
  };
  

 /**
  * Deprecated - Should use the bc.context.isNative property.  Determine whether we are running as a native application or as a web site.  If true, we are 
  * running as a native iPhone, Android  or other application.
  *
  * @return A boolean representing whether or not this is running as a native application.
  * @example
  *   if ( bc.device.isNative() ) {
         bc.device.takePhoto();
       } else {
         alert("No camera available when in a browser.");
       }
   }
   @private
  */
  bc.device.isNative = function() {
    if( bc.context !== undefined && bc.context.isNative !== undefined ) {
      return bc.context.isNative;
    } else {
      return bc.device.setIsNative();      
    }
  };
  
  /**
   * Tells the container that it is now safe to communicate with the view.
   * @private
   */
  bc.device.setViewIsReady = function() {
    createNativeCall( undefined, undefined, "SetViewIsReady", { version: bc.context.version } );
    bc.device.registerListeners();
  };
  
  /**
   * @private
   */
  bc.device.setIsNative = function() {
     var cachedValue = bc.core.cache( "isNative" );

     //Need to make sure that the context object is available.
     if( bc.context === undefined ) {
       bc.context = {};
     }
     //Our first time visiting this page.
     if( cachedValue === null ) {
       bc.context.isNative = window.bc_isNative === true;
       bc.core.cache( "isNative", bc.context.isNative );
     } else {
       bc.context.isNative = cachedValue;
     }
     return bc.context.isNative;
   };
   
  /**
   * @private
   */
  bc.device.playBCVideo = function( videoID, videoURL, successCallback, errorCallback ) {
    var query = "video_id=" + videoID + "&video_url=" + encodeURIComponent(videoURL);
    createNativeCall( successCallback, errorCallback, "PlayVideo", query );
  };
  
 /**
  * Gets the current location of the user and calls into the success handler with the results.  What is
  * returned to the success handler is an object that looks like:
  * <code>{"latitude":70.35, "longitude":40.34}</code>
  * If this API is called in a browser and the browser supports geolocation, then we will use the JavaScript API to get the user location.
  * @param successCallback A function to be called with the results of the location lookup.  This includes latitude and longitude properties, which have values that are of type float.
  * @param errorCallback An optional function that will be called if there is an error getting the location.  This callback is passed
  an object containing the property <code>errorCode</code>, which maps one of the values specified in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
  * @example
  
  bc.device.getLocation( function( locationInfo ) {
                          if ( locationInfo.latitude > 80 ) {
                            alert("Brrrrr...");
                          }
                        },
                        function( data ) {
                          bc.utils.warn( data.errorCode );
                        }
                      );
  */
  bc.device.getLocation = function( successCallback, errorCallback ) {
    if( !bc.context.isNative && navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( function( geolocation ) {
        successCallback( { "latitude": geolocation.coords.latitude, "longitude": geolocation.coords.longitude } );
      }, errorCallback );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetLocation" );
  };
 
 /**
  * Get an existing photo from the user's photo library.  When this function is called, the device will bring up the
  * photo gallery. After the user chooses an image, the success handler is called.  If you want the user to take a picture 
  * with the camera instead, use the <code>takePhoto</code> function instead.  If <code>getPhoto</code> is called from
  * the browser we will call the <code>errorCallback</code> with the <code>errorCode:
  * bc.device.codes.CAMERA_UNAVAILABLE</code>.
  *
  * <p>The success callback will be called with an object whose result value is a string pointing to the local path of the image.  Here is an
  * example of that object:<br/>
  * "/a/path/to/an/image.jpg"</p>
  * 
  * <b>Note:</b> When using the Workshop application, the returned path will actually be a data-uri.  
  * In either case, you can set the resulting string to be the source of an image.
  *
  * @param successCallback A function to be called with the URL to the image.
  * @param errorCallback An optional function that will be called if an error is encountered, the device does not support getPhoto, or the user cancels the action.  
    The <code>errorCallback</code> function is passed an object that contains a property of <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example  
  bc.device.getPhoto( function( data ) {
                        //data is the path to the image on the file system.
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
                    );
  *  
  */
  bc.device.getPhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetPhoto" );
  };
 
 /**
  * Opens the camera and allows the user to take a picture.  Once the picture has been taken, the success handler is called.
  * If you want to access an image from the photo gallery, use the <code>getPhoto</code> function instead.
  * Here is an example of what the return object will look like:<br/>
  * "/a/path/to/an/image.jpg"
  *
  * <p><b>Note:</b> When using the Workshop app, the returned path will actually be a data-uri.  
  * In either case, you can set the resulting string to be the source of an image.</p>
  *
  * <p><b>Note:</b> If <code>takePhoto</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.CAMERA_UNAVAILABLE</code>.</p>
  *
  * @param successCallback The function to be called with the URL to the image the user just took with their camera.
  * @param errorCallback The function that is called if an error is encountered, the device does not support taking a picture, or the user cancels the action.
   The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example  
    bc.device.takePhoto( function( data ) {
                          //my success handler
                         },
                         function( data ) {
                           if( data.errorCode === bc.device.codes.USER_CANCEL ) {
                             //Convince them not to cancel.
                           }
                          
                         }
                      );  
  */
  bc.device.takePhoto = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "TakePhoto" );
  };
 
 /**
  * Checks to see if this device has a camera available.  The
  * success handler will be called with an object that looks like:
  * 
  * true if the camera is available or false if it is not
  *
  * <b>Note</b>: If this is called from within a browser, we will call the success callback function and return false.
  *
  * @param successCallback The function to be called with a boolean specifying whether or not a camera is available.
  * @param errorCallback The function that is called if an error is encountered.  
    The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  * @example  
    bc.device.isCameraAvailable( function( data ) {
                                   alert( "Camera available? " + data );
                                   if( data ) {
                                     alert( "Camera is available!" );
                                   } else {
                                     alert( "No camera :( ");
                                   }
                                 },
                                 function( data ) {
                                   bc.utils.warn( data.errorCode );
                                 }
                              );
    
  */
  bc.device.isCameraAvailable = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      successCallback( false );
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsCameraAvailable" );
  };
  
  /**
   * Allows a developer to programmatically switch between views.  Just as in web development, the API allows a developer to navigate to a
   * URI and also provide a fragmentID to append to that URL.  (fragmentID is the technical term for a '#' in a URL.)  If you are using the fragmentID to pass contextual
   * data then you should simply register an event listener for the <code>hashchangeevent</code>.  An example use case would be if you had a photo on your home page, and when the
    * user clicks a photo, you open the photo view and navigate to that particular photo.
   * @param uri The URI of the view to navigate to.  This is the URI that was specified in the manifest.json file.
   * @param successCallback The callback function that is called if the view is successfully navigated to.
   * @param errorCallback The callback function that is called if the container is unable to navigate to the view.
   * @param options An options object.  We look for the fragmentID to see if the fragmentID of the URL should be set.
   *
   * @example
   //home.html
   bc.device.navigateToView( "photo.html", successCallback,
                    errorCallback, { "fragmentID": "id-of-photo" } );
   
   //photo.html
   $( window ).on( "hashchange", function( evt ) {
     var photoID = window.location.hash;
     //do something photoID.
   })
   */
  bc.device.navigateToView = function( uri, successCallback, errorCallback, options ) {
    if( !bc.context.isNative ) {
      if ( successCallback ) {
        successCallback();
      }
      if( bc.manifestURI ) {
        uri = bc.manifestURI.split( "manifest.json" )[0] + uri;
        window.open( uri + ( options && options.fragmentID ? "#" + bc.utils.encodeFragment( options.fragmentID ): "" ) );
      }
      return;
    } else {
      options = options || {};
      options.uri = uri;
      if( options.fragmentID ) {
        options.fragmentID = bc.utils.encodeFragment( options.fragmentID );
      }  
      createNativeCall( successCallback, errorCallback, "NavigateToView", options );
    }
  };
  
  /**
   * Changes the active view to the 'more' menu, which is the view that appears on iOS if there are more then 5 views in the template.  This command is most often used by views that
   * fall under the "more menu" list, so that user can navigate back to the list.
   * @param successCallback The function to be called once the 'more' menu has been navigated to.
   * @param errorCallback The function to be called if there is an error.
   *
   * @example
   //The back button on a static page, such as an about page in a more section.
   $( ".back-button" ).on( "tap", function() {

     //Make sure we are in a more navigation view
     if( bc.context.moreNavigationView ) {

       //Transition back the more menu.
       bc.device.navigateToMoreMenu();
     }
   });
   */
  bc.device.navigateToMoreMenu = function( successCallback, errorCallback ) {
    if( bc.context.os !== "ios" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "bc.device.navigateToMoreMenu called from a non iOS device." );
      return;
    }
    createNativeCall( successCallback, errorCallback, "NavigateToMoreMenu" );
  };
  
 /**
  * Retrieves the information about the device that the application is running on.
  *
  * @example  
  bc.device.getDeviceInfo( function( data ) {
                             //my success handler
                           },
                           function( data ) {
                             bc.utils.warn( data.errorCode );
                           }
                        );
   * @param successCallback The function that is called by the container once the device has been retrieved.
   * @param errorCallback The function that is called if there is an error retrieving the device info.
   The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
   * @private
  */
  bc.device.getDeviceInfo = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "GetDeviceInfo");
  };
 
 /**
  * Fetches the content of a given URL and returns the contents as a string. Making a call to any domain is allowed.
  *  This is useful if you need to make calls that would normally not be allowed via an AJAX
  * call because of cross-domain policy.  
  * Upon success, an object will be passed to the success handler that looks like: "URL contents"
  * <p>If <code>fetchContentsOfURL</code> is called from within the browser, we will use the browser XHR object to make the request. This means that the request is now subject to cross-domain restrictions.  To circumvent
  * this during development, you can use the Chrome browser and start with web security disabled.  The windows command for this is <code>chrome.exe --disable-web-security</code> while the OSX command is 
  * <code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security</code>.
  * @example  
    bc.device.fetchContentsOfURL( 
        'http://my.sweet.feed/blob.xml',
        function( data ) {
        //data is equal to the contents of http://my.sweet.feed/blob.xml as a string.
        },
        function( data ) {
            bc.utils.warn( data.errorCode );
        }
    );
   *

   *
   * @param url The URL that the request should be made to.
   * @param successCallback The function that is called once the contents of the URL have been fetched.  The callback is passed a string which is the contents of the URL.
   * @param errorCallback The function that is called if there is an error fetching the contents of the URL.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
     and a property named <code>errorMessage</code>, which provides additional information about this error.
  */
  bc.device.fetchContentsOfURL = function( url, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $.ajax( {
        url: url,
        success: successCallback,
        error: function( err ) {
                  callErrorCallback( errorCallback, bc.device.codes.ERROR_FETCHING_CONTENTS_OF_URL_VIA_BROWSER, "It appears you are trying to use the fetchContentsOfURL request from within a browser.  However, there was an error fetching the contents of the URL via the browser xhr request.  Most likely this is due to a limitation of cross domain policies.  It is recommended that you use the Chrome browser and start the browser from the command line with the following command, 'chrome.exe --disable-web-security',  to circumvent this limitation during your development process.  NOTE you should only do this during development." );
                }
      });
      return;
    }
    
    createNativeCall( successCallback, errorCallback, "FetchContentsOfURL", { "url": url } );
  };

  /**
   * Posts data to the given URL and returns the results of this web request to the success callback function if one is passed to the request.  This is useful if you need to make a POST request that would normally not be allowed via an AJAX request
   * because of cross-domain policy.  If <code>postDataToURL</code> is called from within the browser, we will attempt to use the browser XHR object to make the request.  This means that the request is now subject to cross-domain restrictions.
   * To circumvent this during development, you can use the Chrome browser and start with web security disabled.  The windows command for this is <code>chrome.exe --disable-web-security</code> while the OSX command is 
   * <code>/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security</code>.
   * @example
      var username = "test";
      var password = "password";
      var options = {
        data: {
          "username": username,
          "password": password
        }
      };
      
      bc.device.postDataToURL( "http://url/of/authentication/system", success, error, options );
      
      function success( results ) {
        if( results.status === "success" ) {
          //Handle code for logging the user in.
        } else {
          //There was an error logging the user in.
        }
      }
      
      function error( error ) {
        //There was an error making the request.
      }
   * 
   * @param url The URL that request should be made to.
   * @param successCallback The function that is called once the POST request has been successfully made and a result returned.  The results are passed into the success callback.
   * @param errorCallback The function that is called if there was an error making this request.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
    and a property named <code>errorMessage</code>, which provides additional information about this error.
   * 
   */
  bc.device.postDataToURL = function( url, successCallback, errorCallback, options ) {
    var params = {};
    
    options = options || {};
    
    if( url === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "Missing required parameter of URL." );
      return;
    }

    if ( !bc.context.isNative ) {
      $.ajax( {
        url: url,
        type: "POST",
        data: options.data,
        headers: ( options.headers || {} ),
        success: successCallback,
        error: function( err ) {
                  callErrorCallback( errorCallback, bc.device.codes.GENERAL, "It appears you are trying to use the postDataToURL request from within a browser.  However, there was an error making the requst via the browser xhr request.  Most likely this is due to a limitation of cross domain policies.  It is recommended that you use the Chrome browser and start the browser from the command line with the following command, 'chrome.exe --disable-web-security',  to circumvent this limitation during your development process.  NOTE you should only do this during development." );
                }
      });
      return;
    }
    
    params.url = url;
    
    if( options.headers ) {
      params.headers = options.headers;
    }
    
    if( options.data ) {
      params.data = options.data;
    }

    createNativeCall( successCallback, errorCallback, "PostDataToURL",  params );
  };
  
  /**
   * The isDownloadAvailable api allows the developer to know whether or not this device supports the ability to download files.  If the device does support file download the successCallback will be called with a boolean 
   * of true, if not false will be passed to the successCallback.  In general support for file download is universally available on iOS and any Android device running 2.3 or higher.
   * @param successCallback The callback function to be called with a boolean indicating whether or not this device supports file download.
   * @param errorCallback The callback function to be called if there is an error fetching this information from the device.
   * @example
   bc.device.isDownloadAvailable( showDownloadLinks );
   
   function showDownloadLinks( downloadSupported ) {
     if( !downloadSupported ) {
       console.log( "Downloads are not supported on this device.  Do not update UI to show download links." );
       return;
     }
     
     $( ".downloadLinks" ).addClass( "show" );
   }
   */
  bc.device.isDownloadAvailable = function( successCallback, errorCallback ) {
    if( bc.context.os === "ios" ) {
      successCallback( true );
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsDownloadAvailable" );
  };
  
  /**
   * Allows a developer to programmatically download a file to the device.  This storage is persisted until explicity removed using the <code>bc.device.removeDownload</code>
   * API.  This is very useful, but not limited, for downloading media files such as video, audio or image files.  The success callback function is immediatly called once the device has registered the request to
   * download the files, NOT after the file has downloaded.  You can register event listeners for the <code>downloadprogress</code>, <code>downloaderror</code> and <code>downloadcomplete</code> on the bc object. 
   * Below are the possible options that the requestDownload API takes.
   * <ul>
   *   <li>returnURLOfResourceInWorkshop - In the workshop we cannot access files stored on the file system, however, since the workshop cannot be run in offline mode and we realize that developers do not want to 
   litter their code if statements checking if they are in the workshop we simply return the URL to the resource file when we are in the workshop.  This allows developers to use the same file path returned in
   the downloadinfo object for both apps running in the workshop and apps running in published container.  This defaults to true.</li>
       <li>progressInterval - The interval at which progress events are fired.  For example if 5 is passed in then a progress event will be fired when 5%, 10%, 15%...100% of the file has been downloaded. If 0 or an invalid value such as 101 then no progress events will be fired.  Defaults to 0.  <b>Note:</b> This only applies to iOS</li>
       <li>showAndroidNativeProgress - A boolean specifing whether or not to show the progress indicator in the notification area on Android.  Defaults to true.</li>
       <li>downloadTitle - A title to show in the notification are on Anroid devices.</li>
    </ul>
   * @example
   var video = { 
    "id": 1234567,
    "FLVURL": "http://url/to/the/mp4/file.mp4"
   };
   
   //Success Handler for when the video has downloaded.
   function success( evt ) {
     //downloadinfo object.
     $( bc ).on( "downloadprogress", handleProgressEvent );
   }
   
   function error( error ) {
     //handle error 
   }
   
   function handleProgressEvent( info ) {
      //Draw progress indicator to screen.
   }
   
   bc.device.requestDownload( video.FLVURL, video.id.toString(), success, error, { progressInterval: 5 } );
   
   * @param resource The path the to the file that you would like to download, most likely a URL to the media file.
   * @param downloadID A unique ID for this particular download.  If you pass in an ID that already exists then the this file will be downloaded and will overwrite the current file with this ID.
   * @param successCallback The function that will be called once the download request has been registered by the device.
   * @param errorCallback The funciton that will be called if there is an error registering for the download.
   * @param options An object with overrides for the default options of "returnURLOfResourceInWorkshop", "progressInterval", "downloadTitle" and "showAndroidNativeProgress".
   */
  bc.device.requestDownload = function( resource, downloadID, successCallback, errorCallback, options ) {
    var settings = {
      returnURLOfResourceInWorkshop: true,
      progressInterval: 0,
      showAndroidNativeProgress: true
    };
    
    //Resource and uniqueID are required fields. If either are undefined we should call the error callback if exists and return.
    if( !resource || !downloadID ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "resource and downloadID are required fields for the bc.device.requestDownload API.  Not calling API as undefined was passed in for one of these values." );
      return;
    }
    
    if( typeof downloadID !== "string" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "downloadID must be of type string." );
      return;
    }
    
    $.extend( settings, options );
    
    settings.resource = resource;
    settings.downloadID = downloadID;
    createNativeCall( successCallback, errorCallback, "RequestDownload", settings );
  };
  
  /**
   * Allows a developer to retrieve information about any files that have been or are currently being downloaded to the device.  To retrieve information about a specific file or 
   * files then an array of download IDs can be passed as an option.  These IDs must correspond to the uniqueID that was passed into the <code>bc.device.requestDownload</code> API.  If no downloadIDs are passed
   * in via the options then all downloads will be returned to the success handler as an array of <code>DownloadInfo</code> objects.  If <b>any</b> of the downloadIDs are invalid then
   * the error callback function is called.  The options parameter only accepts one valid property of downloadIDs, which is an array of downloadIDs.
   * @example
   function success( downloadInfoArray ) {
     //Passes in an array of download info objects.
   }
   
   //Called if an error occurs or an invalid ID is passed in via the downloadIDs property.
   function error( error ) {
     //Handle error
   }
   
   var options = { downloadIDs: [ "1234567", "7654321" ] };
   
   //Retrieves the DownloadInfo for the downloads with the unique ids of "1234567" and "7654321".
   bc.device.getDownloadInfo( success, error, options );
   
   //Retrieves all DownloadInfo objects that this app has ever downloaded and not removed.
   bc.device.getDownloadInfo( success, error );
   
   * @param successCallback The function that will be called with an array of <code>DownloadInfo</code> objects, which as the following properties:
    <ul>
     <li>downloadID (String) The unique ID for this download that was passed into the <code>bc.device.requestDownload</code> API</li>
     <li>resource (String) The URL that was passed into the <code>bc.device.requestDownload</code> API</li>
     <li>state (String) The current state of the download request. The possible values for this are "enqueued", "downloading", "errored", and "complete".</li>
     <li>size (Number) The file size of the downloaded data in bytes</li>
     <li>fileURI (String) The path to the file on disk.</li>
   </ul>
   * @param errorCallback The function that will be called if an error occurs or any invalid ID is passed in via the downloadIDs option.
   * @param options An object that currently has one valid property of "downloadIDs" which takes a value of an array of downloadIDs.
   */
  bc.device.getDownloadInfo = function( successCallback, errorCallback, options ) {
    createNativeCall( successCallback, errorCallback, "GetDownloadInfo", options );
  };
  
  /**
   * Removes a previously downloaded file from the device.  If the download is currently in progress then it will cancel the download and remove any partially download of the file.  The downloadID is a required
   * parameter and must correspond to the uniqueID that was passed into the <code>bc.device.requestDownload</code>.  The successCallback will be called once the file has been successfully removed.  The errorCallback 
   * function will be called if there is no file that matches the provided downloadID or there is an error removing the file.
   * @example
   var video = { 
    "id": 1234567,
    "FLVURL": "http://url/to/the/mp4/file.mp4",
    "downloaded": true
   };
   
   function success( downloadID ) {
     //Success.  If I keep any state locally I will want to update this now.
     video.downloaded = false;
   }
   
   function error( error ) {
     //There was an error removing the file download.
     console.warn( "Error removing file download with ID: " + error.downloadID );
   }
   
   bc.device.removeDownload( video.id.toString(), success, error );
   
   * @param downloadID A uniqueID that represents this downloaded file.  A list of currently downloaded files can be fetched via the <code>bc.device.getDownloadInfo</code> API.
   * @param successCallback The function that will be called once the file has been successfully removed.  The downloadID of the file will be passed to this success callback function.
   * @param errorCallback The function that will be called if an error occurs trying to remove a downloaded file.  The error object will have a property of errorCode, errorMessage and downloadID.
   */
  bc.device.removeDownload = function( downloadID, successCallback, errorCallback ) {
    
    //Make sure a downloadID was passed in and if not log an error and call the errorCallback.
    if( downloadID === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "The downloadID is a required parameter for the removeDownload API." );
      return;
    }
    
    if( typeof downloadID !== "string" ) {
      callErrorCallback( errorCallback, bc.device.codes.GENERAL, "downloadID must be of type string." );
      return;
    }

    createNativeCall( successCallback, errorCallback, "RemoveDownload", { downloadID: downloadID } );
  };

 
  /**
   * Opens the URI in the native application of the device if it supports that URI.  For example a URI of http://www.google.com would switch to the safari
   * browser and an open up to http://www.google.com, where as a URI of mailto:john@example.com would open the native mail client.  By default App Cloud opens
   * any a href link in a modal window, however, if you would like to programmatically control the opening of a modal window you can do so by passing in a value of true
   * for the modalWebBrowser property.  The container will call the success callback once it successfully passes the URI to the device to handle or has opened the modal window, if modalWebBrowser is set to true.
   * The error callback if the native device is unable to do anything with the URI that is passed in.  For example <code>bc.device.openURI( "badrequest", success, error )</code> would call the error callback
   * because the device would not know how to handle a URI of "badrequest".
   *
   * @param uri Is a required parameter, which is the URI that should be opened.  This can be any URI that the device knows how to open, for example http://, https:// or mailto:
   * @param successCallback The function that will be called once the modal window is opened or the device has opened the URI in the native application, for example Safari on iOS.
   * @param errorCallback The function that will be called if there is an error opening the URI on the device.  The error object will have a property of errorCode and errorMessage.
   * @param options An object that currently supports one property of "modalWebBrowser" that expects a boolean value.  This defaults to false.
   * @example
   function success() {
     //Opened the URI successfully.
   }
   
   function error( error ) {
     console.log( "There was an error opening the URI with error code: " + error.errorCode + " and an error message of: " + error.errorMessage );
   }
   
   bc.device.openURI( "http://www.brightcove.com", success, error, { modalWebBrowser: false } );
   */
  bc.device.openURI = function( uri, successCallback, errorCallback, options ) {
    var settings = {
      modalWebBrowser: false
    };
    
    if( uri === undefined ) {
      callErrorCallback( errorCallback, bc.device.codes.MISSING_REQUIRED_PARAMETER, "The URI to open is a required parameter for the openURI API." );
      return;
    }
    
    if( !bc.context.isNative ) {
      window.open( uri );
      if( typeof successCallback === "function" ) {
        successCallback();
      }
      return;
    }
    
    $.extend( settings, options );
    settings.uri = uri;
    createNativeCall( successCallback, errorCallback, "OpenURI", settings);
  };
 
 /**
  * Vibrates the device if the current device supports it.
  *
  * @example  
    bc.device.vibrate( function( ) {
                         //my success handler
                       },
                       function( data ) {
                         bc.utils.warn( data.errorCode );
                       }
                     );
  *
  * @param successCallback The function to be called if the phone successfully vibrates.
  * @param errorCallback The function to be called if there is an error vibrating the phone.
    The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides
    additional information about this error.
  */
  bc.device.vibrate = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      $( "body" ).addClass( "vibrate" );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      setTimeout( function() {
        $( "body" ).removeClass( "vibrate" );
      }, 1000 );
      return;
    }
    createNativeCall( successCallback, errorCallback, "Vibrate" );
  };

  
 /**
  * Specify which directions the application can be rotated to.  <b>Note that all of the views in a given template should allow for the device to be rotated in the same directions.  In future releases this will be enforced by the App Cloud
  * containers.</b>  The directions should be passed in as an array and can take in five different values:
  * <ul>
  * <li> <code>bc.ui.orientation.PORTRAIT</code> </li>
  * <li> <code>bc.ui.orientation.LANDSCAPE_LEFT</code> </li>
  * <li> <code>bc.ui.orientation.LANDSCAPE_RIGHT</code> </li>
  * <li> <code>bc.ui.orientation.PORTRAIT_UPSIDEDOWN</code> </li>
  * <li> <code>all</code></li>
  * </ul>  
  *
  * @example  
   bc.device.setAutoRotateDirections ( 
            [bc.ui.orientation.PORTRAIT, bc.ui.orientation.LANDSCAPE_RIGHT],
            function() {
              //my success handler
            },
            function( data ) {
               bc.utils.warn( data.errorCode );
            }
        ); 
  
  * @param direction An array of directions that the device can rotate to.  Possible values are: <code>bc.ui.orientation.PORTRAIT</code>, <code>bc.ui.orientation.LANDSCAPE_LEFT</code>, <code>bc.ui.orientation.LANDSCAPE_RIGHT</code>, <code>bc.ui.orientation.PORTRAIT_UPSIDEDOWN</code> or simply <code>all</code>.
  * 
  * @param successCallback The function to be called if this registration successfully happens.
  * @param errorCallback The function to be called if there is an error.
        The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
        and a property named <code>errorMessage</code>, which provides additional information about this error.
  */
  bc.device.setAutoRotateDirections = function( directions, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "SetAutorotateOrientations", { "directions": directions.join(",") } );
  };

  /**
   * Make the application go full screen, hiding any other visible parts of the application except for the active view.  For example,
   * if running in the iOS container, this will hide the tab bar.
   * 
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called.
   *
   * @param successCallback The function to be called once the application goes into full screen.
   * @param errorCallback The function to be called if there is an error going into full screen.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @param options An object with a set of optional parameters that can be passed in to control behavior.
   * <ul>
   *   <li>hideStatusBar: A boolean indicating whether on iOS devices the status bar should be hidden when going full screen. This defaults
   *    to false.
   * </ul>
   * @example 
    bc.device.enterFullScreen( 
                          function() {
                            alert("I'm fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          },
                          {
                            "hideStatusBar":"true"
                          }
              );
   */
  bc.device.enterFullScreen = function( successCallback, errorCallback, options ) {
    var settings = {
      "hideStatusBar": false
    };
    
    
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    
    $.extend( settings, options );

    createNativeCall( successCallback, errorCallback, "EnterFullScreen", settings ); 
  };

  /**
   * Exit full screen of the application.
   *
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called.
   *
   * @param successCallback The function that is called once we have exited full screen.
   * @param errorCallback The function that is called if we hit an issue exiting full screen.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, and a 
     property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
    bc.device.exitFullScreen( function() {
                            alert("I'm not fullscreen!");
                          },
                          function( data ) {
                            bc.utils.warn( data.errorCode );
                          }
                        );   
   */
  bc.device.exitFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExitFullScreen" ); 
  };

  /**
   * Returns a boolean indicating whether or not the application is in full screen.  The returned
   * object is true if we are in full screen or false if not.
   *
   * <b>Note</b>: If called from the browser, the <code>successCallback</code> is called passing the value of true.
   *
   * @param successCallback The function to be called with data specifying whether or not the application is in full screen mode.
   * @param errorCallback The function to be called if there is an error.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example bc.device.isFullScreen( function( data ) {
                                        if( data ) {
                                          alert( "I am in fullscreen" );
                                        } else {
                                          alert( "I am NOT in fullscreen" )
                                        }
                                     },
                                     function( data ) {
                                       bc.utils.warn( data.errorCode );
                                     }
               );
   */
  bc.device.isFullScreen = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      if( typeof( successCallback ) === "function" ) {
        successCallback( true );
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "IsFullScreen" ); 
  };

  /**
   * Shows an alert in a native dialog.  This is useful to use instead of a JavaScript alert function
   * call, because the JavaScript alert will show the name of the page (for example, <code>videos.html</code>) which is
   * not always desirable.  The success handler will be called after the user has dismissed the 
   * alert.   
   *
   * <b>Note</b>: If called from the browser, then a default JavaScript alert will be used.  The <code>successCallback</code> is then called once the alert has been interacted with.
   *
   * @param message The message to show in the native alert dialog.
   * @param successCallback The function to be called after the dialog alert has been dismissed.
   * @param errorCallback The function to be called if an error occurs.
     The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the codes defined in <code>bc.device.codes</code>, 
     and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example 
    bc.device.alert( "Many turkeys are a rafter",
                      function() {
                        // my success handler
                      },
                      function( data ) {
                        bc.utils.warn( data.errorCode );
                      }
              });
   */
  bc.device.alert = function( message, successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      alert( message );
      if( typeof( successCallback ) === "function" ) {
        successCallback();
      }
      return;
    }
    createNativeCall( successCallback, errorCallback, "Alert", { "message": message } );
  };

  /**
   *@private
   */
  bc.device.isViewShowing = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "IsViewShowing" );
  };
  
  /**
   *@private
   */
  bc.device.setAdPolicy = function( ad_policy, successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "SetAdPolicy", ad_policy );
  };
  
  /**
   * Brings up a native QR scanner to read 2D QR codes.  On success, this will call the <code>successCallback</code>, passing to the function the string that is represented by
   * reflects the scanned QR code.
   *
   * <p><b>Note:</b> If <code>getQRCode</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.CAMERA_UNAVAILABLE</code>.</p>
   *
   * @param successCallback The function that is called once the QR code has been read.  The <code>successCallback</code> is passed a string that reflects the QR code.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   */
  bc.device.getQRCode = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.CAMERA_UNAVAILABLE, "There is no camera available to this device" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "GetQRCode" );
  };
  
  /**
   * @private
   */
  bc.device.goBack = function( successCallback, errorCallback ) {
    createNativeCall( successCallback, errorCallback, "GoBack" );
  };
  
   /**
    * Internal API for container to fire JavaScript event
    * @private
    */
   bc.device.trigger = function( eventType, eventData ) {
     if(eventData === undefined) {
       $( bc ).trigger( eventType );
     } else {
       $( bc ).trigger( eventType, [ JSON.parse( atob( eventData ) ).result ]);
     }
   };


 /*****************************************
  * External Screen APIs
  ****************************************/

  /**
   * Given a URL to a video (encoded to H.264 as progressive download or HLS) will play the video on an externally connected screen.
   * Typically this means playing the video on an Apple TV.  In this case, the phone/tablet will continue to show whatever view is
   * currently in focus and the video will be sent to the Apple TV (externally connected screen).  If this function is called
   * with the same URL as the one that is currently loaded into the external video player, the effect is that playback continues
   * from the current timecode.  This is most useful in the circumstance where the video is currently paused.  Calling the playVideo
   * video function with the same URL would resume playback.
   * 
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   * <p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>playVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param videoURL The URL to a video to playback.  The URL must be in a format that can playback on an iOS device.  It is strongly
   * recommended that this be an HLS encoded video.  This parameter is passed as a String.
   * @param successCallback The function that is called if the URL is successfully passed to the video player.  Note: this does not mean that playback has begun.
   * It only means that the URL has been registered with the video player.  You can listen for the "externalscreenvideoplaying" event to be fired on the bc object.
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example 
    $(bc).bind( "externalscreenconnected", function() {
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v", successHandler, errorHandler);
    });

    $(bc).bind( "externalscreenvideoplaying", function() {
      // update UI on iPad to give them controls to pause/stop video playing on Apple TV
    });

   */
  bc.device.externalscreen.playVideo = function( videoURL, successCallback, errorCallback ) {
    var params = {
      url: videoURL
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.playVideo is only available in native applications" );
      return;
    }
    createNativeCall( successCallback, errorCallback, "PlayVideoExternalScreen", params );
  };

  /**
   * This function will pause any currently playing video on a connected Apple TV where playback was initiated by calling the
   * the <i>bc.device.externalscreen.playVideo</i> function.  If no video is currently playing, calling this function has no
   * effect.  You can resume playback of a paused video by calling <i>bc.device.externalscreen.playVideo</i> and pass in the URL
   * to the video for the currently paused video.  Calling playVideo with the same URL will resume playback from the timecode that the video
   * was paused at.
   *  
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object. </p>
   *
   *<p><b>Note:</b>This API only works on iOS devices.</p>
   *
   * <p><b>Note:</b> If <code>pauseVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the video is successfully paused.  
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example 
    $(bc).bind( "externalscreenconnected", function() {
      // start playing back a video
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v" );
    });

    // register a tap handler for the user hitting the pause button.  Typically, this pause button would be displayed on the iOS device
    $("#pauseButton").bind( "tap", function() {
      bc.device.externalscreen.pauseVideo( pauseSuccessHandler );        
    });

    function pauseSuccessHandler() {
      // now that pause was called successfully we update the pause button control on the iPad to show the play action
    }     
   */
  bc.device.externalscreen.pauseVideo = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.pauseVideo is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "PauseVideoExternalScreen" );
  };

  /**
   * This function will stop any currently playing video on a connected Apple TV where playback was initiated by calling the
   * the <i>bc.device.externalscreen.playVideo</i> function.  When this function is called the timecode of the video is set
   * back to 0.  Calling playVideo would start the video over from the beginning.  If you only want to pause the video then call
   * <i>bc.device.externalscreen.pauseVideo</i>.  This function is most frequently used when you want to stop playback of a video
   * and let a user choose a new video to playback.
   * 
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>stopVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the video is successfully stopped.  
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example 
    $(bc).bind( "externalscreenconnected", function() {
      // start playing back a video
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v", successHandler, errorHandler);
    });

    // register a tap handler for the user hitting the stop button.  Typically, this stop button would be displayed on the iOS device
    $("#stopButton").bind( "tap", function() {
      bc.device.externalscreen.stopVideo( stopSuccessHandler, stopErrorHandler );        
    });

    function stopSuccessHandler() {
      // now that stop was called successfully we let the user pick from a new set of videos to playback
    }     
   */
  bc.device.externalscreen.stopVideo = function( successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.stopVideo is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "StopVideoExternalScreen" );
  };

  /**
   * This function will seek to the specified timecode for a video that is on the AppleTV.  The video must have been initiated on the 
   * AppleTV by calling <i>bc.device.externalscreen.playVideo</i> function.  This function will work if the video is either currently
   * playing or is paused.
   * 
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param timecode The timecode that you would like to seek to.  Could be forward or backward from the current timecode.  This
   * parameter is passed as a Number.  This timecode represents the 'seconds' that you want to seek to.  For example, if you wanted
   * to seek to the three minute mark then you would call <i>bc.device.externalscreen.seekVideo( 180, successHandler, errorHandler)
   * @param successCallback The function that is called if the video is successfully seeked into.  
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#skip" ).bind( "tap", function() {
     //Jump to minute 5
      bc.device.externalscreen.seekVideo( 600 );
   }); 
   */
  bc.device.externalscreen.seekVideo = function( timecode, successCallback, errorCallback ) {
    var params = {
      timecode: timecode
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.seekVideo is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "SeekVideoExternalScreen", params );
  };



 /*****************************************
  * Internal use only
  ****************************************/
 /**
  * @private
  */
  bc.device.getCallbackFunctionMap = function() {
    return _callbackFunctionMap;
  };
 
 /**
  * @private
  */
  bc.device.clearCallbackFunctionMap = function() {
    _callStack = [];
    _callbackFunctionMap = {};
  };
 
 /**
  * @private
  */
  bc.device.nativeCall = function( api ) {
   var $bridge;
   // window.androidCommandQueue is inject by the android container
   if( window.androidCommandQueue !== undefined ) {
     window.androidCommandQueue.enqueue( api );
   } else {
     _callStack.push( api );
     $bridge = $( "#bc-device-bridge" );
     if( $bridge.length === 0 ) {
       $bridge = createIframeBridge();
     }
     $bridge.attr( "src", "bccommand://checkqueue" );
    }
  };
 
 /**
  * @private
  * This is actually doing a shift, but we call it pop for backwards compatiability.
  */
  bc.device.popNativeCall = function() {
    return _callStack.shift();
  };
  
}( bc.lib.jQuery ));
/*global bc:true atob:false*/
/*jshint indent:2, browser: true, white: false devel:true undef:false, evil:true */

/**
 * bc.ui provides functions that interact with the DOM.  This includes initializing and managing
 * elements for momentum scrolling, functions to help transition between pages, and helper functions to draw common UI 
 * elements (for example an AJAX loader).
 * @namespace
 */
bc.ui = {};

( function( $, undefined ) {
  
  var _pendingTransition,
      _currentTransitionDirection,
      TRANSITION_FORWARD = "forwardPage",
      TRANSITION_BACK = "backPage";
  
  /** 
   * The type of transitions that we support.  
   * @namespace
   */
  bc.ui.transitions = {};
  /** Transition type of SLIDE_LEFT will slide the current page off the screen to the left. */
  bc.ui.transitions.SLIDE_LEFT = 0;
  /** Transition type of SLIDE_RIGHT will slide the current page off the screen to the right. */
  bc.ui.transitions.SLIDE_RIGHT = 1;
  
  /**
   * The possible orientation directions, which can be set in <a href="bc.device.html#.setAutoRotateDirections"><code>bc.device.setAutoRotateDirections</code></a>.
   * @namespace
   */
  bc.ui.orientation = {};
  /** The view is being displayed in the portrait mode. */
  bc.ui.orientation.PORTRAIT = "1";
  /** The view is being rendered as if it were rotated 180 degrees. */  
  bc.ui.orientation.PORTRAIT_UPSIDEDOWN = "2";
  /** The view is being rendered as if it were rotated 270 degrees clockwise. */  
  bc.ui.orientation.LANDSCAPE_LEFT = "3";
  /** The view is being rendered as if it were rotated 90 degrees clockwise. */  
  bc.ui.orientation.LANDSCAPE_RIGHT = "4";
  
  /** 
   * An array that keeps track of the page history.  For example, if our first page is a list of videos and then when we click
   * on a item it transitions (using the <code>bc.ui.forwardPage</code> function) to a video detail page, we would have two pages in our <code>bc.ui.pageStack</code>: 
   * The first item being the original page and the second the new page we transitioned to, $detailsPage in this example.
   */
  bc.ui.pageStack = [];
  
  /**
   * Tracks whether or not the current view is in transition.
   */
  bc.ui.inTransition = false;
  
  /** The currently active page, meaning the page that is currently in view.*/
  bc.ui.currentPage = undefined;
  
  function addScroller( scroller ) {
    var $scroller = $( scroller );
    if( $scroller.data( "bc-scroller" ) === undefined ) {  
      $scroller.data( "bc-scroller", new Scrollbox( scroller ) );
    }
  }
  
  function enableScrollerForPage( $page ) {
    $page.children( '.scroller' ).each( function( index, scroller ) {
      addScroller( scroller );
    });
    
    if( $page.hasClass( 'scroller' ) ) {
      addScroller( $page[0] );
    }
  }
  
  //When we remove a page from the DOM, we set the image src to an empty image to release them from RAM.  (just removing the image tag does not release it)
  function destroyImages( $page ) {
    $page.find( 'img' ).each( function() {
      this.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    });
  }

  function destroyScrollers( $page ) {
    var $scrollers = $page.children( '.scroller' ),
        aScroller;
    if ( $scrollers.length > 0 ) {
      $.each( $scrollers, function( idx, scroller ) {
        aScroller = $( scroller ).data( 'bc-scroller' );
        if ( aScroller ) {
          aScroller.destroy();
          aScroller = null;
          $( scroller ).data( 'bc-scroller', null );
        }
      });
    }
  }
  
  function destroyVideos( $page ) {
    $page.find( 'video' ).each( function() {
      this.pause();
      $( this ).remove();
    });
  }
  
  function freeRAM( $page ) {
    destroyScrollers( $page );
    destroyVideos( $page );
    destroyImages( $page );
  }
  
  function forwardPageEnd( toPage ) {
    bc.ui.inTransition = false;
    bc.ui.currentPage.find( '.bc-active' ).removeClass( 'bc-active' );
    $( bc ).trigger( "pagehide", bc.ui.currentPage );
    
    bc.ui.pageStack.push( $( toPage[0] ) );
    bc.ui.currentPage = toPage;
    $( bc ).trigger( "pageshow", toPage );
    setTimeout( function() { bc.ui.refreshScrollers( toPage ); }, 100);
  }
  
  function backPageEnd( toPage ) {
    var $previousPage = bc.ui.pageStack.pop(),
        removePage = $previousPage.data( "bc-internal-injected" ),
        aScroller;

    bc.ui.inTransition = false;
    bc.ui.currentPage.find( '.header .back' ).removeClass( 'active' );
    bc.ui.currentPage = toPage;
    $previousPage.removeData( "bc-internal-injected" );
    
    //If we hit memory issues start by setting the transform to nothing here.
    if ( removePage ) {
      freeRAM( $previousPage );
      $previousPage.css( 'display', 'none' ).remove();      
    } else {
      aScroller = ( $previousPage.hasClass( "scroller" ) ? $previousPage : $previousPage.find( ".scroller" ) );
      bc.ui.scrollToTop( aScroller );
      $( bc ).trigger( "pagehide", $previousPage );
    }
    $( bc ).trigger( "pageshow", bc.ui.currentPage );
    bc.ui.refreshScrollers();
  }
  
  function changePage( from, to, transitionType ) {
    
    if( bc.ui.currentPage !== from ) {
      bc.utils.warn('ERROR: trying to transition with a page that is not the currently displayed page.');
    }
    
    switch( transitionType ) {
      case bc.ui.transitions.SLIDE_LEFT:
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform .3s ease-out" );
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform .3s ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( -100%, 0px, 0px )" );
        break;
      case bc.ui.transitions.SLIDE_RIGHT:
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform .3s ease-out" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( 100%, 0px, 0px )" );
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform .3s ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        break;
      default:                    
        from.addClass( 'slide-left-out' )
            .data( 'bc-transition-type', bc.ui.transitions.SLIDE_LEFT );        
    }
  }
  
  function registerEventListeners() {
    $( window ).on( "resize", function( evt, data ) {
      bc.ui.refreshScrollers();
    });
    
    $( bc ).on( "backbuttonpressed", function( evt ) {
      if( bc.ui.inTransition ) {
        return;
      }
      
      if( bc.ui.pageStack.length > 1 ) {
        bc.ui.backPage();
      } else {
        bc.device.goBack();
      }
    });
  }
  
  function checkForPendingTransitions() {
    var pendingFunction,
        page,
        options;
        
    if( bc.ui.inTransition ) {
      setTimeout( checkForPendingTransitions, 100 );
      return;
    }
    
    pendingFunction = _pendingTransition.pendingFunction;
    page = _pendingTransition.page;
    options = _pendingTransition.options;
    _pendingTransition = undefined;
    if( page !== undefined ) {
      bc.ui[pendingFunction]( page, options );
    } else {
      bc.ui[pendingFunction]( options );
    }
  }
  
  function jQueryWrappedDOM( toPage ) {
    // take either a string or jQuery object.  
    if ( typeof( toPage ) === "string" || toPage instanceof Element ) {
      return $( toPage );
    } else if( toPage instanceof jQuery ){
      return toPage;
    } else {
      console.error( "forwardPage must take a valid CSS selector, an HTML element or jQuery object as a parameter." );
      return null;
    }
  }
  
  $( bc ).on( "init", function() {
    bc.ui.init();
    registerEventListeners();
  });
  
  bc.ui.init = function() {
    if( bc.ui.pageStack.length !== 0 || $( ".page" ).length === 0 ) {
      return;
    }
    $( ".page:eq(0)" )[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
    
    bc.ui.currentPage = $( '.page:eq(0)' );
    bc.ui.enableScrollers();
    bc.ui.pageStack.push( bc.ui.currentPage );
  };

  bc.ui.setCurrentPage = function( elem ) {
    var $elem = $( elem );
    if( !$elem.hasClass( "page" ) ) {
      console.warn( "Tyring to set page with an element that does not have class page." );
      return;
    }
    $elem[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
    bc.ui.currentPage = $elem;
    bc.ui.pageStack[0] = $elem;
  };

  /**
   * <b>DEPRECATED</b>  With the release of 1.7.2 this is no longer necessary.Called to refresh all existing scrollers on the page.  
   * The Brightcove App Cloud microframework
   * attempts to call this function for you automatically as appropriate.  For example,
   * when pages are first added to the DOM, a page is transitioned to, or whenever the window size changes.  
   *
   * <p>However, there are cases where you will need to call this function explicitly.  The most likely case
   * is when changes are made to the contents of the active page that affects its size.  For example,
   * if the active page is a list of entries and additional entries are injected.</p>
   *
   * @param options The options object has the possible value of <code>allPages</code>, which is a boolean indicating whether or not to refresh
   *                scrollers on all of the pages or just the currently active page.  The default value is false, since updating all of the pages
   *                is usually unnecessary and expensive.
   * @example 
   bc.ui.refreshScrollers( { "allPages": true } ); //Will refresh the scrollers for all pages on the view.
   */
  bc.ui.refreshScrollers = function( options ) {
    console.log( "bc.ui.refreshScrollers is no longer necessary.  This call can be removed from your code." );
    return;
  };
  
  bc.ui.addMoveCallbackFunction = function( $scroller, cbFunction ) {
    var aScroller = $scroller.data( "bc-scroller" );
    if( aScroller ) {
      console.log( aScroller );
      aScroller.options.onScrollMove = cbFunction;
    }
  };
  
  /** 
   * Scroll to the top of the provided momentum scroller. 
   *
   * @param $scroller A jQuery object that represents the scroller element to scroll to the top of the provided scroller.
   * @example 
   bc.ui.scrollToTop( $( '.scroller' ) ); //Scrolls the page to the top of the page.
   */
  bc.ui.scrollToTop = function( $scroller ) {
    var aScroller = $scroller.data( 'bc-scroller' );
    if ( aScroller ) {
      aScroller.scrollToY( 0, "0ms");
    }
  };
  
  /**
   * <b>Note</b> that the App Cloud SDK automatically manages the construction and destruction of these scrollers for you. Therefore
   * by default you should not have to call <code>enableScrollers</code>. The App Cloud SDK calls <code>enableScrollers</code> when it first loads and any time we 
   * transition to a new page.
   * 
   * <p>This function can be called to enable momentum scrolling for any element with a class of <code>scroller</code> that is a direct child of the page
   * that was passed in.  If no page is passed to the function, then it defaults to the currently active page.</p>
   *
   * @param $page An optional jQuery object that either has a class of <code>scroller</code> on it or is a parent of an element(s) that has
   * the class <code>scroller</code> on it.
   * @example
   bc.ui.enableScrollers(); //Will initialize momentum scrolling for this current page.
   */
  bc.ui.enableScrollers = function( $page ) {
    if ( $page ) {
      enableScrollerForPage( $page );
    } else {
      $( ".page" ).each( function() {
        enableScrollerForPage( $( this ) );
      });
    }
  };
  
  /**
   * @private
   */
  bc.ui.getScrollerForPage = function( index ) {
    var $page;
    if( index !== undefined ) {
      $page = bc.ui.pageStack[index];
    }
    
    $page = $page || bc.ui.currentPage;
    
    return $page.find( ".scroller" ).data( "bc-scroller" );
  };
  
  /**
   * Transitions to the <code>toPage</code> parameter from the current page.  The type of transition to be applied can be passed as parameter; otherwise it
   * defaults to <code>SLIDE_LEFT</code>.  The <code>toPage</code> parameter can be passed as either a CSS selector, DOM Element, or jQuery Object.  The passed <code>toPage</code> can already be part of the
   * Document or can be independent.  If it is independent, then this function will dynamically insert the <code>toPage</code> into the DOM.  If this function
   * inserts the page into the Document, then when the back function is called, it will automatically remove the associated page.  Generally speaking,
   * it is recommended to allow pages to be dynamically inserted and removed from the DOM so as to keep the DOM in-memory as small as possible.
   * 
   * <p>Both the current page and the new page should have a CSS class of <code>page</code> as defined in the theme file.
   * This function triggers a <code>pageshow</code> and a <code>pagehide</code> event once the transition has completed.  The <code>pageshow</code> event passes the 
   * new page as data parameter, while the <code>pagehide</code> event passes the page we transitioned from as data parameter.</p>
   *
   * <code>bc.ui.forwardPage</code> should be used when logically transitioning from one page to the next.  In addition to providing a visual
   * transition, it will add pages to the <code>bc.ui.pageStack</code> so that a history stack of pages can be maintained. To return to the original page (the from page)
   * call <code>bc.ui.backPage()</code>.  
   *
   * @param toPage The page we want to transition to.
   * @param options An object that overrides the default values of the <code>forwardPage</code> function.  The possible values are <code>transitionType</code> and <code>injectPage</code>.
   * <code>transitionType</code> specifies the direction of the type of transition to use during the transition. Defaults to <code>SLIDE_LEFT</code>.
   * @example  
   $( bc ).on( 'pageshow', function( $secondPage ) {
     //Got the pageshow event and the page we transitioned to.
   });
   
   $(bc ).on( 'pagehide', function( $firstPage ) {
     //Got the pagehide event and the page we transition from.
   });
   
   bc.ui.forwardPage( $( '.second_page' )); //transitions to the new page
   */
  bc.ui.forwardPage = function( toPage, options ) {
    var $toPage,
        settings,
        timeoutValue = 1;
        
    //We want to protect against getting double transition events
    if( toPage === undefined || _pendingTransition !== undefined ) {
      return;
    }
    
    if( bc.ui.inTransition ) {
      if( _currentTransitionDirection !== TRANSITION_FORWARD ) {
        _pendingTransition = { 
                              "pendingFunction": "forwardPage", 
                              "page": toPage,
                              "options": options
                             };
        checkForPendingTransitions();
      }
      return;
    }
    
    $toPage = jQueryWrappedDOM( toPage );
    
    //No valid toPage was passed in.
    if( $toPage === null ) {
      return;
    }

    // determine if we need to inject into the page
    if ( $toPage.parent().length === 0 ) {
      $toPage[0].style.setProperty( "-webkit-transform", "translate3d( 100%, 0px, 0px )" );
      $toPage.appendTo( "body" );      
      $toPage.data( "bc-internal-injected", true );
      timeoutValue = 300;
    } else {
      $toPage.data( "bc-internal-injected", false );      
    }

    settings = { "transitionType": bc.ui.transitions.SLIDE_LEFT };
                       
    $.extend( settings, options );
    
    bc.ui.inTransition = true;  
    _currentTransitionDirection = TRANSITION_FORWARD;
    
    //register event listener for when the transition is complete so that we can clean things up and trigger events.
    bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
      forwardPageEnd( $toPage );
    });
    
    bc.ui.enableScrollers( $toPage );
    setTimeout( function() {
      changePage( bc.ui.currentPage, $toPage, settings.transitionType );
      $( ".back-button" ).addClass( "show" );
    }, timeoutValue );
    
  };
  
  /**
   * Transitions from the current page back to the previous page.  The type of transition can be specified, but by default the current page will 
   * slide off the page to the right.  Once the transition has completed, the previous page is removed from the DOM if the page was injected into the DOM via the forwardPage API.  We remove
   * these pages from the DOM in order to minimize memory use.  The backPage function triggers a <code>pageshow</code> event once the transition has completed and a <code>pagehide</code> event 
   * once the current page has been hidden.  <b>Note</b> that the <code>pagehide</code> event is only fired if the page was not removed.
   *
   * <p><code>bc.ui.backPage()</code> is associated with the <code>bc.ui.forwardPage()</code> function.  After a previous use of <code>bc.ui.forwardPage()</code> to transition to a page,
   * call the <code>bc.ui.backPage()</code> function to transition back to the original page.  A common use would be when a user taps on a back button.  You would
   * call <code>bc.ui.backPage()</code> to transition back to the original page.</p>
   *
   * @param options An object that contains the options that can be provided to the transition function.  The possible values are:
    <ul>
      <li> <code>transitionType</code> - defines the type of transition to use when moving back to the previous page and must correspond to a value defined in <code>bc.ui.transitions</code>. 
      The default value is <code>bc.ui.transitions.SLIDE_RIGHT</code>, which will slide the current page off to the right.</li>
      <li> <code>toPage</code> - If you would like to inject a new page into the DOM and transition to this page you can pass in the DOM element to inject into the page.  <b>Note</b> If there is
      more then one page in the page stack this value is ignored</b></li
   *
   * @example  
   $( bc ).on( 'pageshow', function( $firstPage ) {
     //Got the pageshow event and the page we transitioned to.
     //In this example the first page we started on.
   });
   
   bc.ui.backPage(); //transitions back to the first page
   
   //The above line is equivalent to calling
   // bc.ui.backPage( { 
   //  "transitionType": bc.ui.transitions.SLIDE_RIGHT
   // })
   */
   bc.ui.backPage = function( options ) {
     var settings,
         $toPage,
         $fromPage = bc.ui.currentPage;

     if( _pendingTransition !== undefined ) {
       return;
     }

     //We want to protect against getting double transition events
     if( bc.ui.inTransition ) {
       if( _currentTransitionDirection !== TRANSITION_BACK ) {
         _pendingTransition = { 
                               "pendingFunction": TRANSITION_BACK, 
                               "options": options
                              };
         checkForPendingTransitions();
       }
       return;
     }

     settings = { "transitionType": bc.ui.transitions.SLIDE_RIGHT };
     $.extend( settings, options );


     //If a DOM element was passed in for the page to transition to and it is not in the DOM we should inject it into the page and the pagestack and then transition to it.
     if( settings.toPage && ( bc.ui.pageStack.length === 1 || bc.ui.pageStack.length === 0 ) ) {
       $toPage = jQueryWrappedDOM( settings.toPage );

       //No valid toPage was passed in.
       if( $toPage === null ) {
         return;
       }

       if( !$toPage.hasClass( "page" ) ) {
         console.warn( "The back page we are trying to inject and transition to does not have a class of 'page'." );
         return;
       }

       $toPage[0].style.setProperty( "-webkit-transform", "translate3d( -100%, 0px, 0px )" );

       // determine if we need to inject into the page
       if( $toPage.parent().length === 0 ) {
         $toPage.appendTo( "body" );     
       }

       //Add this page pageStack.
       bc.ui.pageStack.splice( bc.ui.pageStack.length - 1, 0, $toPage );
     }

     if( bc.ui.pageStack.length === 1 || bc.ui.pageStack.length === 0 ) {
       //If we are in a "more navigation view" then we should navigate back to the more page.  (This is the more menu on iOS)
       if( bc.context.moreNavigationView ) {
         bc.device.navigateToMoreMenu();
         return;
       }
       bc.utils.warn( "ERROR: Calling transition back when there is only one page in the page stack" );
       return;
     }

     $toPage = bc.ui.pageStack[ bc.ui.pageStack.length - 2 ];

     if( $toPage === undefined || $toPage === null ) {
       bc.utils.warn( "There is no page to transition back to" );
       return;
     }

     // set our down state for the back button
     $fromPage.find( '.header .back-button' )
                      .addClass( 'active' );

     bc.ui.inTransition = true;
     _currentTransitionDirection = TRANSITION_BACK;

     bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
       backPageEnd( $toPage );
     });
     changePage( bc.ui.currentPage, $toPage, settings.transitionType );
     if( bc.ui.pageStack.length === 2 && !bc.context.moreNavigationView ) {
       $( ".back-button" ).removeClass( "show" );
     }
   };
  
  /**
   * Returns an HTML snippet that can be used to inject a CSS3 animated spinner into the DOM.  The size and color are controlled in the theme file.
   *
   * @return An HTML snippet that represents a CSS3 animated spinner.  (AJAX loader)
   * @example
   $( 'body' ).append( bc.ui.spinner() ); //Injects an HTML spinner into the body of the page.
   */
  bc.ui.spinner = function() {
    return '<div class="spinner ' + bc.context.os +'">' +
                  '<div class="bar1"></div>' +
                  '<div class="bar2"></div>' +
                  '<div class="bar3"></div>' +
                  '<div class="bar4"></div>' +
                  '<div class="bar5"></div>' +
                  '<div class="bar6"></div>' +
                  '<div class="bar7"></div>' +
                  '<div class="bar8"></div>' +
                  '<div class="bar9"></div>' +
                  '<div class="bar10"></div>' +
                  '<div class="bar11"></div>' +
                  '<div class="bar12"></div>' +
                '</div>';
  };
  
  //Load the spinner into an included template
  Mark.includes.spinner = bc.ui.spinner();

  /**
   * Generates the HTML snippet for the header. 
   * @param options An object that represents the settings that can be overridden for this HTML snippet.  Below are the default values.
   <pre>
   {
     "backButton": false, //A boolean for whether or not to show a back button.
     "refreshButton": false, //A boolean for whehter or not to show a refreshButton.
     "title": ""
   }
   </pre>
   @return A string that is the HTML snippet for the header.
   * @private
   */  
  bc.ui.headerHTML = function( options ) {
    var html = "",
        settings = {
          "backButton": false,
          "refreshButton": false,
          "title": ""
        };
    
    $.extend( settings, options );
    
    html = "<header class='header'>";
    
    if( settings.backButton ) {
      html += "<div class='back-button'></div>";
    }
    
    html += "<h1 class='header-a ellipsis'>" + settings.title + "</h1>";
    
    if( settings.refreshButton ) {
      html += "<div class='refresh-button'></div>";
    }
    
    return ( html += "</header>" );        
  };

  /**
    * Returns the current width of the viewport.
    * @return The width of the viewport as a number, in pixels.
    * @example
    var width = bc.ui.width(); //sets width to the current width of the viewport.
    */
   bc.ui.width = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the width of the wrapper.
       return $( "#BCDeviceWrapper" ).width(); 
     } else {
       return $( window ).width();
     }
   };

   /**
    * Returns the current height of the viewport.
    * @return The height of the viewport as a number, in pixels.
    @example
    var height = bc.ui.height(); //sets height to the current height of the viewport
    */
   bc.ui.height = function() {
     if( $( "#BCDeviceWrapper" ).length > 0) { //If we are inside our developer extension return the height of the wrapper.
       return $( "#BCDeviceWrapper" ).height(); 
     } else {
       return $( window ).height();
     }
   };
   
  /**
   * @private
   * Should only be used by Jasmine tests to override private variables.
   */
  bc.ui.setPrivateVariables = function( options ) {
    for( var prop in options ) {
      if( typeof options[prop] === "string" ) {
        eval( prop + " = '" + options[prop] + "'");
      } else {
        eval( prop + " = " + options[prop] );
      }
    }
  };

  //The browser is sporadically showing all white pages, due to rendering issues.  This addresses that.
  $( bc ).on( "pageshow", function() {
    setTimeout( function() {
      document.body.style.display = "none";
      document.body.style.display = "block";
    }, 0 );
  });
  
})( bc.lib.jQuery );
/**
* Brightcove Metrics provides functions to measure interactions with applications.
* @namespace
*/
bc.metrics = {};

( function( bc, undefined ) {

  var _settings,
      _transit,
      _poll_interval,
      _loader,
      _events = [],
      _liveEvents = [],
      _errors = 0,
      _store_pendingevents_interval,
      _previous_pending_events;
  
  /**@private*/
  bc.metrics._contentSession = {};

  function Event(data) {
    this.getData = function() {
      return data;
    };
    
    this.isReady = function() {
      return true;
    };
    
    this.complete = function() {
      _events.shift();
      storePendingEventsQueue();
    };
    
    this.error = function() {};
  }
  
  function LiveEvent(data) {
    var last = new Date().getTime(),
        transit;

    this.getData = function() {
      transit = new Date().getTime();
      data.units = transit - last;
      return data;
    };
    
    this.isReady = function() {
      var d = new Date().getTime();
      return ( _settings.interval > 0 && d - last > _settings.interval );
    };
    
    this.complete = function() {
      last = transit;
      transit = undefined;
    };
    
    this.error = function() {
      transit = undefined;
    };
  }
  
  function getEventData( event, eventData ) {
    return $.extend({
      event: event, 
      time:( new Date() ).getTime()
    }, eventData );
  }

  function flush( force ) {
    if( bc.metrics.isInitialized() ) {
      if( force || _settings.interval <= 0 ) {
        send();
      } else if( _poll_interval === undefined ) {
        _poll_interval = setInterval( function() {
          send();
        }, _settings.interval );
      }
    }
  }
  
  function send() {
    var url, data;
    if( !bc.metrics.isInitialized() || _transit !== undefined ){
      // not ready, event already in _transit or nothing to send
      return;
    }
    while( !_transit ) {
      if( _events.length !== 0 ) {
        _transit = _events[0];
      } else {
        for( var i=0, len=_liveEvents.length; i < len; i++ ) {
          if( _liveEvents[i].isReady() ) {
            _transit = _liveEvents[i];
            break;
          }
        }
        if( !_transit ) {
          return;
        }
      }
    }
    
    data = $.extend( _transit.getData(), _settings.data );
    url = _settings.uri + "?" + $.param( data );
    _loader.attr( "src",url );
  }
  
  function storePendingEventsQueue() {
    var pendingEvents = [];

    for( var i = 0, len = _events.length; i < len; i++ ) {
      pendingEvents.push( _events[i].getData() );
    }

    for( i = 0, len = _liveEvents.length; i < len; i++ ) {
      pendingEvents.push( _liveEvents[i].getData() );
    }

    if( !bc.utils.isEqual( pendingEvents, _previous_pending_events ) ) {
      _previous_pending_events = pendingEvents;
      $( bc ).trigger( "metrics:pendingevents", { events: pendingEvents } );
    }
    
  }

  function bind_loader() {
    _loader.on( "load", function() {
      _errors = 0;
      _transit.complete();
      _transit = undefined;
      send();
    });
    
    _loader.on( "error", function() {
      console.log( "ERROR: unable to send metrics to", _settings.uri );
      setTimeout( function(){
        if( _transit !== undefined ) {
          _transit.error();
          _transit=undefined;
        }
        send();
      }, _settings.interval * Math.log( ++_errors ) );
    });
  }
  
  /**
   * Initialize and bind the metrics runtime
   * 
   * @param options - an object containing the metrics options
   *    - uri - the url used to send metric events
   *    - interval - the millisecond interval between event polling 
   *        (zero or negative will cause all tracking events to fire immediately, 
   *        but will also mean that live tracking must be explicitly dispatched )
   * @param data - session wide metadata that will be included with each event
   * @private
   */
  bc.metrics.init = function( options, data ) {
    $( function(){
      _settings = $.extend( {}, bc.metrics.defaults, options );
      _settings.data = data || {};
      _settings.data.domain = _settings.domain;
      _settings.uri = ( _settings.uri.indexOf( "tracker" ) > -1 ) ? _settings.uri : _settings.uri + "/tracker";

      if( _settings.pendingMetrics ) {
        for( var i = 0, len = _settings.pendingMetrics.length; i < len; i++ ) {
          _events.push( new Event( _settings.pendingMetrics[i] ) );
        }
      }
      _loader = _settings.loader || $( "<img />" ).appendTo( $( "head" ) );
      bind_loader();
      flush();
      _store_pendingevents_interval = setInterval( storePendingEventsQueue, 5000 );
    });
  };
  
  bc.metrics.addNotificationID = function( notificationID ) {
    _settings.data.message = notificationID;
  };
  
  bc.metrics.removeNotificationID = function() {
    if( _settings && _settings.data && _settings.data.message ) {
      delete _settings.data.message;
    }
  };

  /**
   * Send a tacking event
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   * @private
   */
  bc.metrics.track = function( event, properties ) {
    _events.push( new Event( getEventData( event, properties ) ) );
    flush();
  };

  /**
   * Create a live tracking event which sends time delta information for each poll interval.
   *
   * @param event - the name of the event
   * @param properties - metadata specific to this event
   * @returnValue - a closure which can be used to cancel the tracking and flush the last time delta
   * @private
   */
  bc.metrics.live = function( event, properties ) {
    var liveEvent = new LiveEvent( getEventData( event + "_usage", properties ) );

    bc.metrics.track( event + "_view" , properties);
    _liveEvents.push(liveEvent);
    
    liveEvent.die = function(){
      for( var i = 0, len = _liveEvents.length; i < len; i++ ) {
        if( _liveEvents[i] == liveEvent ) {
          _events.push( new Event( liveEvent.getData() ) );
          _liveEvents.splice( i, 1 );
          flush();
          return;
        }
      }
    };
    
    flush();
    return function() { liveEvent.die(); }; 
  };
  
  /**
   * Start tracking how long a user interacts with a given peice of content within the application.  For example the blog.js view tracks how long the user
   * spends on each article by calling bc.metrics.startContentSession when they open the article and then bc.metrics.endContentSession when they either navigate away from the
   * view or back to the list of the articles.
   * @param uri A unique identifier for this content.  Ideally a URI to the content on the web, but any unique ID will suffice.
   * @param name A human readable name to be displayed in the analytics section of App Cloud.
   */
  bc.metrics.startContentSession = function( uri, name ) {
    if( !uri || !name ) {
      console.log( "bc.metrics.startContentSession requires the parameters 'uri' and 'name'." );
      return;
    }
    
    if( bc.metrics._contentSession[uri] ) {
      console.log( uri + " content session is already being tracked." );
      return;
    }
    bc.metrics._contentSession[uri] = bc.metrics.live( "content", { uri: uri, name: name } );
  };
  
  /**
   * Stop tracking the users session for a given peice of content.  "endContentSession" should be called with the same URI that was called with its corresponding "startContentSession". 
   * @param uri A unique identifier for this content.  This needs to match the URI that was passed into the startContentSession event.
   */
  bc.metrics.endContentSession = function( uri ) {
    if( !uri ) {
      console.log( "bc.metrics.endContentSession requires a uri." );
      return;
    }
    
    if( !bc.metrics._contentSession[uri] ) {
      console.log( "bc.metrics.endContentSession cannot find a matching startContentSession for the URI: " + uri );
      return;
    }
    bc.metrics._contentSession[uri].call();
    delete bc.metrics._contentSession[uri];
  };
  
  /**
   * @private
   */
  bc.metrics.isInitialized = function() {
    return _settings !== undefined;
  };
  
  /** @private */
  bc.metrics.clear = function() {
    _transit = undefined;
    _poll_interval = undefined;
    _events = [];
    _liveEvents = [];
    _loader = undefined;
  };
  
  bc.metrics.defaults =  {
    uri:"http://localhost:44080/tracker", // the url of the event tracking service
    interval:5000 // the default poll interval
  };

})( bc );
/*global bc:true atob:false jQuery:false*/
/*jshint indent:2, browser: true, white: false devel:true*/
 
 /**
* Brightcove App Cloud events that are added to the jQuery object.  This enables you to
* use the jQuery event attachment functions of (on) with these set of events.
* These events will work across both desktops and mobile devices.
*
* @namespace
* @name Events
*/
bc.events = {};

( function( $, undefined ) {
  var MOVE_THRESHOLD = 20;
  
  if( bc.utils.hasTouchSupport() ) {
    bc.events.start = "touchstart";
    bc.events.move = "touchmove";
    bc.events.end = "touchend";
    bc.events.cancel = "touchcancel";
  } else {
    bc.events.start = "mousedown";
    bc.events.move = "mousemove";
    bc.events.end = "mouseup";
    bc.events.cancel = "touchcancel";
  }  
    
  /**
   * @event
   * @memberOf Events
   * @name tap
   *
   * @description Tap is an event that represents a user 'tapping' on an element.  It is recommended to use <code>tap </code> rather than <code>click</code>
   * as it eliminates 300ms of delay that binding to a <code>click</code> event introduces on some platforms.  On non-touch 
   * devices, the <code>tap</code> event  is equivalent to <code>click</code>.  This means binding to <code>tap</code> will work across both 
   * touch and non-touch devices.
   *
   * @example $( '.cancel-button' ).on( 'tap', function() {
      alert('Are you sure you want to cancel form submission?');
   });
   */
  $.event.special.tap = {
    setup: function( data ) {
      var $this = $( this );
      
      $this.on( bc.events.start, function( event ) {
        var moved = false,
          touching = true,
          origTarget = event.target,
          origEvent = event.originalEvent,
          origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
          originalType,
          tapHoldTimer;
                    
        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end ).off( bc.events.move );
        }, 750);
          
        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( ( Math.abs( origPos[0] - newPageXY.pageX ) > MOVE_THRESHOLD ) || ( Math.abs( origPos[1] - newPageXY.pageY ) > MOVE_THRESHOLD ) ) {
            moved = true;
          }
        });
        
        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, function( event ) {
          $this.off( bc.events.move );
          clearTimeout( tapHoldTimer );
          touching = false;
          
          /* ONLY trigger a 'tap' event if the start target is
           * the same as the stop target.
           */
          if ( !moved && ( origTarget === event.target ) ) {
              originalType = event.type;
              event.type = "tap";
              event.pageX = origPos[0];
              event.pageY = origPos[1];
              $.event.handle.call( $this[0], event );
              event.type = originalType;
          }
        });
      });
    }
  };
  
  /**
   * @event
   * @memberOf Events
   * @name swipe
   *
   * @description On touch platforms, users can provide input with a 'swipe' gesture.  For example, a user placing their finger on the screen
   * and dragging it.  When the <code>swipe</code> event is fired, the type of event will be <code>swipe</code>.  An additional parameter, either <code>swipeRight</code> or <code>swipeLeft</code>, will be passed to 
   * any bound functions.  This additional parameter can be used to understand in which 
   * direction the user is swiping.
   *
   * @example  $('.image').on( 'swipe', function(evt, direction) {
       if( direction === 'swipeRight' ) {
         handleSwipeRight( this );
       } else {
         handleSwipeLeft( this );
       }
    });
   *
   */  
 $.event.special.swipe = {
    setup: function( data ) {
      var $this = $( this );
      
      $this.on( bc.events.start, function( event ) {
        var touching = true,
            origEvent = event.originalEvent,
            origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
            tapHoldTimer,
            $elem = $( event.target );
          
        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end ).off( bc.events.move );
        }, 750);
          
        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( (Math.abs(origPos[0] - newPageXY.pageX) > MOVE_THRESHOLD) && (  Math.abs(origPos[1] - newPageXY.pageY) < MOVE_THRESHOLD ) ) {
             $this.off( bc.events.end );
             $this.off( bc.events.move );
             clearTimeout( tapHoldTimer );
             $elem.trigger( 'swipe', ( origPos[0] > newPageXY.pageX ) ? 'swipeLeft' : 'swipeRight' );
          }
        });
        
        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, function( event ) {
          $this.off( bc.events.move );
          clearTimeout( tapHoldTimer );
          touching = false;
        });
        
      });
    }
  };

})( bc.lib.jQuery );
