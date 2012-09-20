/*Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.*/
/*Version:1.11*/
/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);/*
Copyright (c) 2011 Matteo Spinelli, http://cubiq.org/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
(function(){var e=Math,s=(/webkit/i).test(navigator.appVersion)?"webkit":(/firefox/i).test(navigator.userAgent)?"Moz":"opera" in window?"O":"",n="WebKitCSSMatrix" in window&&"m11" in new WebKitCSSMatrix(),k="ontouchstart" in window,c=s+"Transform" in document.documentElement.style,p=(/android/gi).test(navigator.appVersion),r=(/iphone|ipad/gi).test(navigator.appVersion),a=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(m){window.setTimeout(m,17)}})(),o="onorientationchange" in window?"orientationchange":"resize",g=k?"touchstart":"mousedown",f=k?"touchmove":"mousemove",h=k?"touchend":"mouseup",d=k?"touchcancel":"mouseup",q=s=="Moz"?"DOMMouseScroll":"mousewheel",b="translate"+(n?"3d(":"("),j=n?",0)":")",t=function(v,m){var w=this,x=document,u;w.wrapper=typeof v=="object"?v:x.getElementById(v);w.wrapper.style.overflow="hidden";w.scroller=w.wrapper.children[0];w.options={hScroll:true,vScroll:true,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:p,hideScrollbar:r,fadeScrollbar:r&&n,scrollbarClass:"",zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(y){y.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(u in m){w.options[u]=m[u]}w.options.useTransform=c?w.options.useTransform:false;w.options.hScrollbar=w.options.hScroll&&w.options.hScrollbar;w.options.vScrollbar=w.options.vScroll&&w.options.vScrollbar;w.options.zoom=w.options.useTransform&&w.options.zoom;w.scroller.style[s+"TransitionProperty"]=w.options.useTransform?"-"+s.toLowerCase()+"-transform":"top left";w.scroller.style[s+"TransitionDuration"]="0";w.scroller.style[s+"TransformOrigin"]="0 0";if(w.options.useTransform){w.scroller.style[s+"Transform"]=b+"0,0"+j}else{w.scroller.style.cssText+=";top:0;left:0"}w.refresh();w._bind(o,window);if(!k){w._bind("mouseout",w.wrapper)}w._bind(g);w._bind(q)};t.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],handleEvent:function(u){var m=this;switch(u.type){case g:m._start(u);break;case f:m._move(u);break;case h:case d:m._end(u);break;case o:m._resize();break;case q:m._wheel(u);break;case"mouseout":m._mouseout(u);break}},_scrollbar:function(m){var v=this,w=document,u;if(!v[m+"Scrollbar"]){if(v[m+"ScrollbarWrapper"]){if(c){v[m+"ScrollbarIndicator"].style[s+"Transform"]=""}v[m+"ScrollbarWrapper"].parentNode.removeChild(v[m+"ScrollbarWrapper"]);v[m+"ScrollbarWrapper"]=null;v[m+"ScrollbarIndicator"]=null}return}if(!v[m+"ScrollbarWrapper"]){u=w.createElement("div");if(v.options.scrollbarClass){u.className=v.options.scrollbarClass+m.toUpperCase()}else{u.style.cssText="position:absolute;z-index:100;"+(m=="h"?"height:7px;bottom:1px;left:2px;right:"+(v.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(v.hScrollbar?"7":"2")+"px;top:2px;right:1px")}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:opacity;-"+s+"-transition-duration:"+(v.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(v.options.hideScrollbar?"0":"1");v.wrapper.appendChild(u);v[m+"ScrollbarWrapper"]=u;u=w.createElement("div");if(!v.options.scrollbarClass){u.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-"+s+"-background-clip:padding-box;-"+s+"-box-sizing:border-box;"+(m=="h"?"height:100%":"width:100%")+";-"+s+"-border-radius:3px;border-radius:3px"}u.style.cssText+=";pointer-events:none;-"+s+"-transition-property:-"+s+"-transform;-"+s+"-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-"+s+"-transition-duration:0;-"+s+"-transform:"+b+"0,0"+j;v[m+"ScrollbarWrapper"].appendChild(u);v[m+"ScrollbarIndicator"]=u}if(m=="h"){v.hScrollbarSize=v.hScrollbarWrapper.clientWidth;v.hScrollbarIndicatorSize=e.max(e.round(v.hScrollbarSize*v.hScrollbarSize/v.scrollerW),8);v.hScrollbarIndicator.style.width=v.hScrollbarIndicatorSize+"px";v.hScrollbarMaxScroll=v.hScrollbarSize-v.hScrollbarIndicatorSize;v.hScrollbarProp=v.hScrollbarMaxScroll/v.maxScrollX}else{v.vScrollbarSize=v.vScrollbarWrapper.clientHeight;v.vScrollbarIndicatorSize=e.max(e.round(v.vScrollbarSize*v.vScrollbarSize/v.scrollerH),8);v.vScrollbarIndicator.style.height=v.vScrollbarIndicatorSize+"px";v.vScrollbarMaxScroll=v.vScrollbarSize-v.vScrollbarIndicatorSize;v.vScrollbarProp=v.vScrollbarMaxScroll/v.maxScrollY}v._scrollbarPos(m,true)},_resize:function(){this.refresh()},_pos:function(m,u){m=this.hScroll?m:0;u=this.vScroll?u:0;if(this.options.useTransform){this.scroller.style[s+"Transform"]=b+m+"px,"+u+"px"+j+" scale("+this.scale+")"}else{m=e.round(m);u=e.round(u);this.scroller.style.left=m+"px";this.scroller.style.top=u+"px"}this.x=m;this.y=u;this._scrollbarPos("h");this._scrollbarPos("v")},_scrollbarPos:function(m,w){var v=this,x=m=="h"?v.x:v.y,u;if(!v[m+"Scrollbar"]){return}x=v[m+"ScrollbarProp"]*x;if(x<0){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]+e.round(x*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px"}x=0}else{if(x>v[m+"ScrollbarMaxScroll"]){if(!v.options.fixedScrollbar){u=v[m+"ScrollbarIndicatorSize"]-e.round((x-v[m+"ScrollbarMaxScroll"])*3);if(u<8){u=8}v[m+"ScrollbarIndicator"].style[m=="h"?"width":"height"]=u+"px";x=v[m+"ScrollbarMaxScroll"]+(v[m+"ScrollbarIndicatorSize"]-u)}else{x=v[m+"ScrollbarMaxScroll"]}}}v[m+"ScrollbarWrapper"].style[s+"TransitionDelay"]="0";v[m+"ScrollbarWrapper"].style.opacity=w&&v.options.hideScrollbar?"0":"1";v[m+"ScrollbarIndicator"].style[s+"Transform"]=b+(m=="h"?x+"px,0":"0,"+x+"px")+j},_start:function(B){var A=this,u=k?B.touches[0]:B,v,m,C,z,w;if(!A.enabled){return}if(A.options.onBeforeScrollStart){A.options.onBeforeScrollStart.call(A,B)}A.moved=false;A.animating=false;A.zoomed=false;A.distX=0;A.distY=0;A.absDistX=0;A.absDistY=0;A.dirX=0;A.dirY=0;if(A.options.zoom&&k&&B.touches.length>1){z=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);A.touchesDistStart=e.sqrt(z*z+w*w);A.originX=e.abs(B.touches[0].pageX+B.touches[1].pageX-A.wrapperOffsetLeft*2)/2-A.x;A.originY=e.abs(B.touches[0].pageY+B.touches[1].pageY-A.wrapperOffsetTop*2)/2-A.y}if(A.options.momentum){if(A.options.useTransform){v=getComputedStyle(A.scroller,null)[s+"Transform"].replace(/[^0-9-.,]/g,"").split(",");m=v[4]*1;C=v[5]*1}else{m=getComputedStyle(A.scroller,null).left.replace(/[^0-9-]/g,"")*1;C=getComputedStyle(A.scroller,null).top.replace(/[^0-9-]/g,"")*1}if(m!=A.x||C!=A.y){A.steps=[];A._pos(m,C)}}A.absStartX=A.x;A.absStartY=A.y;A.startX=A.x;A.startY=A.y;A.pointX=u.pageX;A.pointY=u.pageY;A.startTime=B.timeStamp||(new Date()).getTime();if(A.options.onScrollStart){A.options.onScrollStart.call(A,B)}A._bind(f);A._bind(h);A._bind(d)},_move:function(B){var z=this,C=k?B.touches[0]:B,x=C.pageX-z.pointX,v=C.pageY-z.pointY,m=z.x+x,D=z.y+v,y,w,u,A=B.timeStamp||(new Date()).getTime();if(z.options.onBeforeScrollMove){z.options.onBeforeScrollMove.call(z,B)}if(z.options.zoom&&k&&B.touches.length>1){y=e.abs(B.touches[0].pageX-B.touches[1].pageX);w=e.abs(B.touches[0].pageY-B.touches[1].pageY);z.touchesDist=e.sqrt(y*y+w*w);z.zoomed=true;u=1/z.touchesDistStart*z.touchesDist*this.scale;if(u<0.5){u=0.5}else{if(u>z.options.zoomMax){u=z.options.zoomMax}}z.lastScale=u/this.scale;m=this.originX-this.originX*z.lastScale+this.x,D=this.originY-this.originY*z.lastScale+this.y;this.scroller.style[s+"Transform"]=b+m+"px,"+D+"px"+j+" scale("+u+")";return}z.pointX=C.pageX;z.pointY=C.pageY;if(m>0||m<z.maxScrollX){m=z.options.bounce?z.x+(x/2):m>=0||z.maxScrollX>=0?0:z.maxScrollX}if(D>0||D<z.maxScrollY){D=z.options.bounce?z.y+(v/2):D>=0||z.maxScrollY>=0?0:z.maxScrollY}if(z.absDistX<6&&z.absDistY<6){z.distX+=x;z.distY+=v;z.absDistX=e.abs(z.distX);z.absDistY=e.abs(z.distY);return}if(z.options.lockDirection){if(z.absDistX>z.absDistY+5){D=z.y;v=0}else{if(z.absDistY>z.absDistX+5){m=z.x;x=0}}}z.moved=true;z._pos(m,D);z.dirX=x>0?-1:x<0?1:0;z.dirY=v>0?-1:v<0?1:0;if(A-z.startTime>300){z.startTime=A;z.startX=z.x;z.startY=z.y}if(z.options.onScrollMove){z.options.onScrollMove.call(z,B)}},_end:function(z){if(k&&z.touches.length!=0){return}var x=this,F=k?z.changedTouches[0]:z,A,E,v={dist:0,time:0},m={dist:0,time:0},w=(z.timeStamp||(new Date()).getTime())-x.startTime,B=x.x,y=x.y,D,C,u;x._unbind(f);x._unbind(h);x._unbind(d);if(x.options.onBeforeTouchEnd){x.options.onBeforeTouchEnd.call(x,z)}if(x.zoomed){x.scale=x.scale*x.lastScale;x.x=x.originX-x.originX*x.lastScale+x.x;x.y=x.originY-x.originY*x.lastScale+x.y;x.scroller.style.webkitTransform=b+x.x+"px,"+x.y+"px"+j+" scale("+x.scale+")";x.refresh();return}if(!x.moved){if(k){if(x.doubleTapTimer&&x.options.zoom){clearTimeout(x.doubleTapTimer);x.doubleTapTimer=null;x.zoom(x.pointX,x.pointY,x.scale==1?x.options.doubleTapZoom:1)}else{x.doubleTapTimer=setTimeout(function(){x.doubleTapTimer=null;A=F.target;while(A.nodeType!=1){A=A.parentNode}if(A.tagName!="SELECT"&&A.tagName!="INPUT"&&A.tagName!="TEXTAREA"){E=document.createEvent("MouseEvents");E.initMouseEvent("click",true,true,z.view,1,F.screenX,F.screenY,F.clientX,F.clientY,z.ctrlKey,z.altKey,z.shiftKey,z.metaKey,0,null);E._fake=true;A.dispatchEvent(E)}},x.options.zoom?250:0)}}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(w<300&&x.options.momentum){v=B?x._momentum(B-x.startX,w,-x.x,x.scrollerW-x.wrapperW+x.x,x.options.bounce?x.wrapperW:0):v;m=y?x._momentum(y-x.startY,w,-x.y,(x.maxScrollY<0?x.scrollerH-x.wrapperH+x.y:0),x.options.bounce?x.wrapperH:0):m;B=x.x+v.dist;y=x.y+m.dist;if((x.x>0&&B>0)||(x.x<x.maxScrollX&&B<x.maxScrollX)){v={dist:0,time:0}}if((x.y>0&&y>0)||(x.y<x.maxScrollY&&y<x.maxScrollY)){m={dist:0,time:0}}}if(v.dist||m.dist){u=e.max(e.max(v.time,m.time),10);if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(B,y);B=snap.x;y=snap.y;u=e.max(snap.time,u)}}x.scrollTo(B,y,u);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}if(x.options.snap){D=B-x.absStartX;C=y-x.absStartY;if(e.abs(D)<x.options.snapThreshold&&e.abs(C)<x.options.snapThreshold){x.scrollTo(x.absStartX,x.absStartY,200)}else{snap=x._snap(x.x,x.y);if(snap.x!=x.x||snap.y!=x.y){x.scrollTo(snap.x,snap.y,snap.time)}}if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}return}x._resetPos(200);if(x.options.onTouchEnd){x.options.onTouchEnd.call(x,z)}},_resetPos:function(v){var m=this,w=m.x>=0?0:m.x<m.maxScrollX?m.maxScrollX:m.x,u=m.y>=0||m.maxScrollY>0?0:m.y<m.maxScrollY?m.maxScrollY:m.y;if(w==m.x&&u==m.y){if(m.moved){if(m.options.onScrollEnd){m.options.onScrollEnd.call(m)}m.moved=false}if(m.hScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.hScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.hScrollbarWrapper.style.opacity="0"}if(m.vScrollbar&&m.options.hideScrollbar){if(s=="webkit"){m.vScrollbarWrapper.style[s+"TransitionDelay"]="300ms"}m.vScrollbarWrapper.style.opacity="0"}return}m.scrollTo(w,u,v||0)},_wheel:function(w){var v=this,u,m;if("wheelDeltaX" in w){u=v.x+w.wheelDeltaX/12,m=v.y+w.wheelDeltaY/12}else{if("detail" in w){u=v.x-w.detail*3,m=v.y-w.detail*3}else{u=v.x-w.wheelDelta,m=v.y-w.wheelDelta}}if(u>0){u=0}else{if(u<v.maxScrollX){u=v.maxScrollX}}if(m>0){m=0}else{if(m<v.maxScrollY){m=v.maxScrollY}}v.scrollTo(u,m,0)},_mouseout:function(u){var m=u.relatedTarget;if(!m){this._end(u);return}while(m=m.parentNode){if(m==this.wrapper){return}}this._end(u)},_startAni:function(){var z=this,u=z.x,m=z.y,x=(new Date).getTime(),y,w;if(z.animating){return}if(!z.steps.length){z._resetPos(200);return}y=z.steps.shift();if(y.x==u&&y.y==m){y.time=0}z.animating=true;z.moved=true;(function v(){var A=(new Date).getTime(),C,B;if(A>=x+y.time){z._pos(y.x,y.y);z.animating=false;if(z.options.onAnimationEnd){z.options.onAnimationEnd.call(z)}z._startAni();return}A=(A-x)/y.time-1;w=e.sqrt(1-A*A);C=(y.x-u)*w+u;B=(y.y-m)*w+m;z._pos(C,B);if(z.animating){a(v)}})()},_momentum:function(A,u,y,m,C){var z=0.0006,v=e.abs(A)/u,w=(v*v)/(2*z),B=0,x=0;if(A>0&&w>y){x=C/(6/(w/v*z));y=y+x;v=v*y/w;w=y}else{if(A<0&&w>m){x=C/(6/(w/v*z));m=m+x;v=v*m/w;w=m}}w=w*(A<0?-1:1);B=v/z;return{dist:w,time:e.round(B)}},_offset:function(m){var v=-m.offsetLeft,u=-m.offsetTop;while(m=m.offsetParent){v-=m.offsetLeft;u-=m.offsetTop}return{left:v,top:u}},_snap:function(D,C){var A=this,z,w,B,v,u,m;B=A.pagesX.length-1;for(z=0,w=A.pagesX.length;z<w;z++){if(D>=A.pagesX[z]){B=z;break}}if(B==A.currPageX&&B>0&&A.dirX<0){B--}D=A.pagesX[B];u=e.abs(D-A.pagesX[A.currPageX]);u=u?e.abs(A.x-D)/u*500:0;A.currPageX=B;B=A.pagesY.length-1;for(z=0;z<B;z++){if(C>=A.pagesY[z]){B=z;break}}if(B==A.currPageY&&B>0&&A.dirY<0){B--}C=A.pagesY[B];m=e.abs(C-A.pagesY[A.currPageY]);m=m?e.abs(A.y-C)/m*500:0;A.currPageY=B;v=e.round(e.max(u,m))||200;return{x:D,y:C,time:v}},_bind:function(v,u,m){(u||this.scroller).addEventListener(v,this,!!m)},_unbind:function(v,u,m){(u||this.scroller).removeEventListener(v,this,!!m)},destroy:function(){var m=this;m.scroller.style[s+"Transform"]="";m.hScrollbar=false;m.vScrollbar=false;m._scrollbar("h");m._scrollbar("v");m._unbind(o);m._unbind(g);m._unbind(f);m._unbind(h);m._unbind(d);m._unbind("mouseout",m.wrapper);m._unbind(q);if(m.options.onDestroy){m.options.onDestroy.call(m)}},refresh:function(){var m=this,v,w=0,u=0;if(m.scale<m.options.zoomMin){m.scale=m.options.zoomMin}m.wrapperW=m.wrapper.clientWidth;m.wrapperH=m.wrapper.clientHeight;if(!m.wrapperW||!m.wrapperH){m.disable();return}m.scrollerW=e.round(m.scroller.offsetWidth*m.scale);m.scrollerH=e.round(m.scroller.offsetHeight*m.scale);m.maxScrollX=m.wrapperW-m.scrollerW;m.maxScrollY=m.wrapperH-m.scrollerH;m.dirX=0;m.dirY=0;m.hScroll=m.options.hScroll&&m.maxScrollX<0;m.vScroll=m.options.vScroll&&(!m.options.bounceLock&&!m.hScroll||m.scrollerH>m.wrapperH);m.hScrollbar=m.hScroll&&m.options.hScrollbar;m.vScrollbar=m.vScroll&&m.options.vScrollbar&&m.scrollerH>m.wrapperH;v=m._offset(m.wrapper);m.wrapperOffsetLeft=-v.left;m.wrapperOffsetTop=-v.top;if(typeof m.options.snap=="string"){m.pagesX=[];m.pagesY=[];els=m.scroller.querySelectorAll(m.options.snap);for(i=0,l=els.length;i<l;i++){w=m._offset(els[i]);w.left+=m.wrapperOffsetLeft;w.top+=m.wrapperOffsetTop;m.pagesX[i]=w.left<m.maxScrollX?m.maxScrollX:w.left*m.scale;m.pagesY[i]=w.top<m.maxScrollY?m.maxScrollY:w.top*m.scale}}else{if(m.options.snap){m.pagesX=[];while(w>=m.maxScrollX){m.pagesX[u]=w;w=w-m.wrapperW;u++}if(m.maxScrollX%m.wrapperW){m.pagesX[m.pagesX.length]=m.maxScrollX-m.pagesX[m.pagesX.length-1]+m.pagesX[m.pagesX.length-1]}w=0;u=0;m.pagesY=[];while(w>=m.maxScrollY){m.pagesY[u]=w;w=w-m.wrapperH;u++}if(m.maxScrollY%m.wrapperH){m.pagesY[m.pagesY.length]=m.maxScrollY-m.pagesY[m.pagesY.length-1]+m.pagesY[m.pagesY.length-1]}}}m._scrollbar("h");m._scrollbar("v");m.scroller.style[s+"TransitionDuration"]="0";m._resetPos(200)},scrollTo:function(m,C,B,A){var z=this,w=m,v,u;if(!w.length){w=[{x:m,y:C,time:B,relative:A}]}for(v=0,u=w.length;v<u;v++){if(w[v].relative){w[v].x=z.x-w[v].x;w[v].y=z.y-w[v].y}z.steps.push({x:w[v].x,y:w[v].y,time:w[v].time||0})}z._startAni()},scrollToElement:function(m,v){var u=this,w;m=m.nodeType?m:u.scroller.querySelector(m);if(!m){return}w=u._offset(m);w.left+=u.wrapperOffsetLeft;w.top+=u.wrapperOffsetTop;w.left=w.left>0?0:w.left<u.maxScrollX?u.maxScrollX:w.left;w.top=w.top>0?0:w.top<u.maxScrollY?u.maxScrollY:w.top;v=v===undefined?e.max(e.abs(w.x)*2,e.abs(w.y)*2):v;u.scrollTo(w.left,w.top,v)},scrollToPage:function(v,u,z){var w=this,m,A;if(w.options.snap){v=v=="next"?w.currPageX+1:v=="prev"?w.currPageX-1:v;u=u=="next"?w.currPageY+1:u=="prev"?w.currPageY-1:u;v=v<0?0:v>w.pagesX.length-1?w.pagesX.length-1:v;u=u<0?0:u>w.pagesY.length-1?w.pagesY.length-1:u;w.currPageX=v;w.currPageY=u;m=w.pagesX[v];A=w.pagesY[u]}else{m=-w.wrapperW*v;A=-w.wrapperH*u;if(m<w.maxScrollX){m=w.maxScrollX}if(A<w.maxScrollY){A=w.maxScrollY}}w.scrollTo(m,A,z||400)},disable:function(){this.enabled=false;this._unbind(f);this._unbind(h);this._unbind(d)},enable:function(){this.enabled=true},stop:function(){this.steps=[];this.moved=false;this.animating=false;this._resetPos(200)},zoom:function(m,A,z,w){var u=this,v=z/u.scale;if(!u.options.useTransform){return}w=(w||200)+"ms";m=m-u.wrapperOffsetLeft-u.x;A=A-u.wrapperOffsetTop-u.y;u.x=m-m*v+u.x;u.y=A-A*v+u.y;u.scale=z;u.scroller.style[s+"TransitionDuration"]=w;u.scroller.style[s+"Transform"]=b+u.x+"px,"+u.y+"px"+j+" scale("+z+")";u.refresh()}};if(typeof exports!=="undefined"){exports.iScroll=t}else{window.iScroll=t}})();/*global bc:true atob:false*/
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

    // corrects a rendering bug in android 2.x. (9/6/2012)
    self.scrollToY(0, 0);
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
  Markup.js v1.5.12: http://github.com/adammark/Markup.js
  MIT License
  (c) 2011 Adam Mark
*/
var Mark={includes:{},globals:{},delimiter:">",compact:false,_copy:function(d,c){c=c||[];for(var e in d){c[e]=d[e]}return c},_size:function(b){return b instanceof Array?b.length:(b||0)},_iter:function(a,b){this.idx=a;this.size=b;this.length=b;this.sign="#";this.toString=function(){return this.idx+this.sign.length-1}},_pipe:function(h,d){var c=d.shift(),g,b,a;if(c){g=c.split(this.delimiter);b=g[0].trim();a=g.splice(1);try{h=this._pipe(Mark.pipes[b].apply(null,[h].concat(a)),d)}catch(f){}}return h},_eval:function(e,g,h){var a=this._pipe(e,g),b=a,d=-1,c,f;if(a instanceof Array){a="";c=b.length;while(++d<c){f={iter:new this._iter(d,c)};a+=h?Mark.up(h,b[d],f):b[d]}}else{if(a instanceof Object){a=Mark.up(h,b)}}return a},_test:function(a,f,d,b){var e=Mark.up(f,d,b).split(/\{\{\s*else\s*\}\}/),c=(a===false?e[1]:e[0]);return Mark.up(c||"",d,b)},_bridge:function(g,e){var f="{{\\s*"+e+"([^/}]+\\w*)?}}|{{/"+e+"\\s*}}",l=new RegExp(f,"g"),n=g.match(l),m,k=0,j=0,i=-1,h=0;for(m in n){i=g.indexOf(n[m],i+1);if(n[m].match("{{/")){j++}else{k++}if(k===j){break}}k=g.indexOf(n[0]);j=k+n[0].length;h=i+n[m].length;return[g.substring(k,h),g.substring(j,i)]}};Mark.up=function(s,b,e){b=b||{};e=e||{};var m=/\{\{\w*[^}]+\w*\}\}/g,l=s.match(m)||[],t,d,g,h=[],r,c,f,n,k,o,a,q=0,p=0;if(e.pipes){this._copy(e.pipes,this.pipes)}if(e.includes){this._copy(e.includes,this.includes)}if(e.globals){this._copy(e.globals,this.globals)}if(e.delimiter){this.delimiter=e.delimiter}if(e.compact!==undefined){this.compact=e.compact}while((t=l[q++])){k=undefined;f="";r=t.indexOf("/}}")>-1;d=t.substr(2,t.length-(r?5:4));d=d.replace(/`([^`]+)`/g,function(i,j){return Mark.up("{{"+j+"}}",b)});c=d.trim().indexOf("if ")===0;h=d.split("|").splice(1);d=d.replace(/^\s*if/,"").split("|").shift().trim();g=c?"if":d.split("|")[0];n=b[d];if(c&&!h.length){h=["notempty"]}if(!r&&s.indexOf("{{/"+g)>-1){k=this._bridge(s,g);t=k[0];f=k[1];q+=t.match(m).length-1}if(/^\{\{\s*else\s*\}\}$/.test(t)){continue}else{if((o=this.globals[d])!==undefined){k=this._eval(o,h,f)}else{if((a=this.includes[d])){if(a instanceof Function){a=a()}k=this._pipe(Mark.up(a,b),h)}else{if(d.match(/#{1,2}/)){e.iter.sign=d;k=this._pipe(e.iter,h)}else{if(d==="."){k=this._pipe(b,h)}else{if(d.match(/\./)){d=d.split(".");n=Mark.globals[d[0]];if(n){p=1}else{p=0;n=b}while(n&&p<d.length){n=n[d[p++]]}k=this._eval(n,h,f)}else{if(c){k=this._pipe(n,h)}else{if(n instanceof Array){k=this._eval(n,h,f)}else{if(f){k=n?Mark.up(f,n):undefined}else{if(b.hasOwnProperty(d)){k=this._pipe(n,h)}}}}}}}}}}if(c){k=this._test(k,f,b,e)}s=s.replace(t,k===undefined?"???":k)}return this.compact?s.replace(/>\s+</g,"><"):s};Mark.pipes={empty:function(a){return !a||(a+"").trim().length===0?a:false},notempty:function(a){return a&&(a+"").trim().length?a:false},blank:function(b,a){return !!b||b===0?b:a},more:function(d,c){return Mark._size(d)>c?d:false},less:function(d,c){return Mark._size(d)<c?d:false},ormore:function(d,c){return Mark._size(d)>=c?d:false},orless:function(d,c){return Mark._size(d)<=c?d:false},between:function(e,d,f){e=Mark._size(e);return e>=d&&e<=f?e:false},equals:function(d,c){return d==c?d:false},notequals:function(d,c){return d!=c?d:false},like:function(b,a){return new RegExp(a,"i").test(b)?b:false},notlike:function(b,a){return !Mark.pipes.like(b,a)?b:false},upcase:function(a){return String(a).toUpperCase()},downcase:function(a){return String(a).toLowerCase()},capcase:function(a){return a.replace(/\b\w/g,function(b){return b.toUpperCase()})},chop:function(a,b){return a.length>b?a.substr(0,b)+"...":a},tease:function(c,d){var b=c.split(/\s+/);return b.slice(0,d).join(" ")+(b.length>d?"...":"")},trim:function(a){return a.trim()},pack:function(a){return a.trim().replace(/\s{2,}/g," ")},round:function(a){return Math.round(+a)},clean:function(a){return String(a).replace(/<\/?[^>]+>/gi,"")},size:function(a){return a.length},length:function(a){return a.length},reverse:function(a){return Mark._copy(a).reverse()},join:function(a,b){return a.join(b)},limit:function(b,c,a){return b.slice(+a||0,+c+(+a||0))},split:function(b,a){return b.split(a||",")},choose:function(b,c,a){return !!b?c:(a||"")},toggle:function(c,b,a,d){return a.split(",")[b.match(/\w+/g).indexOf(c+"")]||d},sort:function(a,c){var b=function(e,d){return e[c]>d[c]?1:-1};return Mark._copy(a).sort(c?b:undefined)},fix:function(a,b){return(+a).toFixed(b)},mod:function(a,b){return(+a)%(+b)},divisible:function(a,b){return a&&(+a%b)===0?a:false},even:function(a){return a&&(+a&1)===0?a:false},odd:function(a){return a&&(+a&1)===1?a:false},number:function(a){return parseFloat(a.replace(/[^\-\d\.]/g,""))},url:function(a){return encodeURI(a)},bool:function(a){return !!a},falsy:function(a){return !a},first:function(a){return a.idx===0},last:function(a){return a.idx===a.size-1},call:function(b,a){return b[a].apply(b,[].slice.call(arguments,2))},set:function(b,a){Mark.globals[a]=b;return""},log:function(a){console.log(a);return a}}; /*global bc:true, atob:false*/
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
  bc.context = { version: "1.11" };
  
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

  /**
   * The configuration object.  The following properties can be set on this object to control the behavior of the SDK.  Properties
   * can be set on this object after the 'init' event has fired on the bc object.
   *
   * <p/>
   * The following properties can be set on this object:
   * <ul>
   *   <li>touchEventsEnabled: Whether or not the App Cloud SDK should detect and fire gestures events such as tap, swipe.  Enabled by
   *       default.  Turn this off if you are using a third party library, such as hammer.js, that will be detecting and firing these events.
   * </ul>
   *
   * @namespace
   */
  bc.config = {};

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
    
    bc.device.getDownloadInfo( function( downloadInfoArray ) {
      var needToDownload,
          max = downloadInfoArray.length;
      for( var i=0, len = styles.length; i<len; i++ ) {
        needToDownload = false;
        //If we have a background image that is not an empty string then we need to see if we have downlaoded it.
        if( styles[i].attribute === "background-image" && styles[i].value !== "" ) {
          needToDownload = true;
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
   * The <code>viewfocus</code> event is triggered when a view gains focus.  Note that this will fire after the init event.
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
  * user or other helpful messaging, and not for important business logic decisions in template source code.  The data object that is passed to any registered function
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
    var videoFile = data.info.fileURI;
    
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
        console.error( "ERROR: Loading manifest.json from: " + bc.manifestURI );
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
 * The <code>externalscreenpostmessage</code> event is fired when a message has been posted to the screen
 *
 * @example
 * $( bc ).on( "externalscreenpostmessage", function( evt, result ) {
 *    $("#message").text(result.message) ;
 * });
 *
 * @name externalscreenpostmessage
 * @event
 * @memberOf bc
 * @param event (type of externalscreenpostmessage)
 * @param result The result parameter to the event handler contains a property <i>message</i>.  This property contains the string value sent from another screen.
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
        converters: {"* text": window.String,"text json": window.String, "text xml": window.String },
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
        },
        headers: {
          "Authorization": token
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
   * @param options An object of options that specify additional properties to be sent to the server.  The options object accepts two properties of:
   <ul>
    <li>data - This is the data that will be passed to the server.  Typically another object.
    <li>headers - This allows you to specify the headers to be sent to the server.  This is useful for authentication.
  </ul>
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
       <li>progressInterval - The interval at which progress events are fired.  For example if 5 is passed in then a progress event will be fired when 5%, 10%, 15%...100% of the file has been downloaded. If 0 or an invalid value such as 101 then no progress events will be fired.  Defaults to 0.  <b>Note:</b> This event is only fired on iOS devices.</li>
       <li>showAndroidNativeProgress - A boolean specifing whether or not to show the progress indicator in the notification area on Android.  Defaults to true.</li>
       <li>downloadTitle - A title to show in the notification are on Anroid devices.</li>
    </ul>
   * @example
   var video = { 
    "id": 1234567,
    "FLVURL": "http://url/to/the/mp4/file.mp4"
   };
   
   function success() {
     $( bc ).on( "downloadprogress", handleProgressEvent );
   }
   
   function error( error ) {
     //handle error 
   }
   
   function handleProgressEvent( evt, info ) {
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
   * @param options An options object.  We look for the timecode which if not 0, will play the video at the given time.
   * Support for this depends on encoding of the video, as explained here:
   * http://developer.apple.com/library/ios/#documentation/mediaplayer/reference/MPMoviePlayerController_Class/Reference/Reference.html#//apple_ref/occ/instp/MPMoviePlayerController/initialPlaybackTime
	@example 
    $(bc).bind( "externalscreenconnected", function() {
      bc.device.externalscreen.playVideo( "http://someurl.com/a.m4v", successHandler, errorHandler);
    });

    $(bc).bind( "externalscreenvideoplaying", function() {
      // update UI on iPad to give them controls to pause/stop video playing on Apple TV
    });

   */
  bc.device.externalscreen.playVideo = function( videoURL, successCallback, errorCallback, options) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.playVideo is only available in native applications" );
      return;
    }
 	options = options || {};
	options.url = videoURL;

    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoPlay", options );
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
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoPause" );
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
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoStop" );
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
    createNativeCall( successCallback, errorCallback, "ExternalScreenVideoSeek", params );
  };

  /**
   * This function will display a webview on an external screen using specified the URI.
   * 
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param uri The URI string specified in the manifest
   * @param successCallback The function that is called if the webview is displayed 
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#display" ).bind( "tap", function() {
      bc.device.externalscreen.openExternalWebview( "test.html" );
   }); 
   */
  bc.device.externalscreen.openExternalWebView = function( uri, successCallback, errorCallback ) {
    var params = {
      uri: uri
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.openExternalWebview is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenWebViewOpen", params );
  };

  /**
   * This function will remove the view on an external screen.
   * 
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * @param successCallback The function that is called if the webview is displayed 
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#close" ).bind( "tap", function() {
      bc.device.externalscreen.closeExternalScreen();
   }); 
   */
  bc.device.externalscreen.closeExternalScreen = function(successCallback, errorCallback ) {
    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.closeExternalScreen is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "ExternalScreenClose");
  };

  /**
   * This function is used for communication between an external webview and the device's active web view.  If called from the device,
   * this will post the message to the external screen if the external screen has an active webview.  If called from the external web view,
   * this will post the message to the active device webview.
   *
   * <p><b>Note</b>:In order for the Apple TV to be connected the user of the iOS device must have turned on mirroring.  You can listen for
   * mirroring to be turned on/off by the user by listening for the "externalscreenconnected" event on the bc object.  
   *
   *<p><b>Note:</b>This API only works on iOS devices.
   *
   * <p><b>Note:</b> If <code>seekVideo</code> is called from the browser, we will call the errorCallback with the <code>errorCode: bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION</code>.</p>
   *
   * @param successCallback The function that is called if the webview is displayed 
   * @param errorCallback The function that is called if an error occurs.  The <code>errorCallback</code> function is passed an object that contains a property named <code>errorCode</code>, which maps to one of the
     codes defined in <code>bc.device.codes</code>, and a property named <code>errorMessage</code>, which provides additional information about this error.
   * @example
   $( "#postmessage" ).bind( "tap", function() {
      bc.device.externalscreen.postMessage();
   }); 
   */
  bc.device.externalscreen.postMessage = function(message, successCallback, errorCallback ) {
    var params = {
      message: message
    };

    if( !bc.context.isNative ) {
      callErrorCallback( errorCallback, bc.device.codes.COMMAND_ONLY_AVAILABLE_IN_A_NATIVE_APPLICATION, "bc.device.externalscreen.postMessage is only available in native applications" );      
      return;
    }
    createNativeCall( successCallback, errorCallback, "PostMessage", params );
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
  }
  
  function changePage( from, to, options ) {
    
    if( bc.ui.currentPage !== from ) {
      bc.utils.warn('ERROR: trying to transition with a page that is not the currently displayed page.');
    }
    
    switch( options.transitionType ) {
      case bc.ui.transitions.SLIDE_LEFT:
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( -100%, 0px, 0px )" );
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        break;
      case bc.ui.transitions.SLIDE_RIGHT:
        from[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        from[0].style.setProperty( "-webkit-transform", "translate3d( 100%, 0px, 0px )" );
        to[0].style.setProperty( "-webkit-transition", "-webkit-transform " + options.transitionTime + "ms ease-out" );
        to[0].style.setProperty( "-webkit-transform", "translate3d( 0px, 0px, 0px )" );
        break;      
    }
  }
  
  function registerEventListeners() {
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
  
  /**
   * @private
   */
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
   * @param options An object that overrides the default values of the <code>forwardPage</code> function.  The possible values are:
     <ul>
        <li><code>transitionType</code> specifies the direction of the type of transition to use during the transition. Defaults to <code>SLIDE_LEFT</code></li>
        <li><code>transitionTime</code> specifies how the long the transition should take.  Smaller = faster.  The time is in milliseconds.</li>
     </ul>
   * .
   * @example  
   $( bc ).on( 'pageshow', function( $secondPage ) {
     //Got the pageshow event and the page we transitioned to.
   });
   
   $(bc ).on( 'pagehide', function( $firstPage ) {
     //Got the pagehide event and the page we transition from.
   });
   
   bc.ui.forwardPage( $( '.second_page' ) ); //transitions to the new page
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

    settings = { 
      "transitionType": bc.ui.transitions.SLIDE_LEFT,
      "transitionTime": 300
    };
                       
    $.extend( settings, options );
    
    bc.ui.inTransition = true;  
    _currentTransitionDirection = TRANSITION_FORWARD;
    
    //register event listener for when the transition is complete so that we can clean things up and trigger events.
    bc.ui.currentPage.one( 'webkitTransitionEnd', function() {
      forwardPageEnd( $toPage );
    });
    
    bc.ui.enableScrollers( $toPage );
    changePage( bc.ui.currentPage, $toPage, settings );
    $( ".back-button" ).addClass( "show" );
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
      more then one page in the page stack this value is ignored</b></li>
      <li><code>transitionTime</code> specifies how the long the transition should take.  Smaller = faster.  The time is in milliseconds.</li>
    </ul>
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

     settings = { 
       "transitionType": bc.ui.transitions.SLIDE_RIGHT,
       "transitionTime": 300
      };
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
     changePage( bc.ui.currentPage, $toPage, settings );
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

/**
 * The <code>connectionstatechange</code> event is fired when there is change in the state of the connection to the internet.  The event passes a data object that
 * currently has a single property of <code>online</code>, which is a boolean indicating whether or not the device is currently connected to the internet.
 *
 * @example
 * $( bc ).on( "connectionstatechange", function( evt, data ) {
 *   if( data.online ) {
 *     //Check to see if there is new data available.
 *   }   
 * });
 *
 * @name connectionstatechange
 * @event
 * @memberOf bc
 * @param event (type of connectionstatechange)
 * @param data The data object currently has a single property of <code>online</code>, which is a boolean indicating whether or not the device is currently connected to the internet.
 */

( function( bc, undefined ) {

  var _settings,
      _transit,
      _poll_interval,
      _loader,
      _events = [],
      _liveEvents = [],
      _errors = 0,
      _store_pendingevents_interval,
      _previous_pending_events,
      _$bc = $( bc );
  
  _$bc.bind( "init", function() {
    var $img;
    var frequency = 5000;
    var url = "https://trk.kissmetrics.com/e?_k=46b26eea9908c85fa960e11c169fda7bc84c67ef&_n=workshop+session&_p=start&account_id=" + bc.accountID;
    var sessionURL = "https://trk.kissmetrics.com/e?_k=46b26eea9908c85fa960e11c169fda7bc84c67ef&_n=workshop+session+time&_p=session&account_id=" + bc.accountID + "&frequency=" + frequency;
    
    //If we are in the workshop we want to ping kissmetrics
    if( bc.utils.runningInWorkShop() ) {
      $img = $( "<img />" );
      $img.attr( "src", url );
      
      setInterval( function() {
        $img.attr( "src", sessionURL );
      }, frequency );
      
      $img.on( "load", function() {
        handleOnlineEvent( true );
      });

      $img.on( "error", function() {
        handleOnlineEvent( false );
      });
    }
    
  });
  
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
  
  function handleOnlineEvent( success ) {
    if( success ) {
      if( !bc.context.online ) {
        bc.context.online = true;
        _$bc.trigger( "connectionstatechange", { online: true } );
      }
    } else {
      if( bc.context.online ) {
        bc.context.online = false;
        _$bc.trigger( "connectionstatechange", { online: false } );
      }
    }
  }
  
  function bind_loader() {
    _loader.on( "load", function() {
      _errors = 0;
      _transit.complete();
      _transit = undefined;
      handleOnlineEvent( true );
      send();
    });
    
    _loader.on( "error", function() {
      console.log( "ERROR: unable to send metrics to", _settings.uri );
      handleOnlineEvent( false );
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
  
  /**
   * @private
   */
  bc.metrics.addNotificationID = function( notificationID ) {
    _settings.data.message = notificationID;
  };
  
  /**
   * @private
   */
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
   * Private functions
   */

  /**
   * Set up our config object to register getter/setter functions for its properties to ensure we can tie into the SDK where
   * appropriate
   */
  function initConfigObject() {
    var touchEventsEnabled = true;

    Object.defineProperty( bc.config, "touchEventsEnabled", {
      get: function() {
        return touchEventsEnabled;
      },
      set: function( value ) {
        if ( !value ) {
          removeAllEvents();
        }

        touchEventsEnabled = value;
      }
    });
  }


  /**
   * De-register all of the gesture events that the SDK had registered
   */
  function removeAllEvents() {
    delete $.event.special.tap;
    delete $.event.special.swipe;    
  };

  initConfigObject();

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
        if ( !bc.config.touchEventsEnabled ) {
          return;
        }

        var moved = false,
            touching = true,
            origTarget = event.target,
            origEvent = event.originalEvent,
            origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
            originalType,
            tapHoldTimer;

        var touchMoveHandler = function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( ( Math.abs( origPos[0] - newPageXY.pageX ) > MOVE_THRESHOLD ) || ( Math.abs( origPos[1] - newPageXY.pageY ) > MOVE_THRESHOLD ) ) {
            moved = true;
          }
        };

        var touchEndHandler = function( event ) {
          $this.off( bc.events.move, origTarget, touchMoveHandler );
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
        };
       
        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end, touchEndHandler )
               .off( bc.events.move, touchMoveHandler );
        }, 750 );

        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, touchMoveHandler );

        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, touchEndHandler );
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
        if ( !bc.config.touchEventsEnabled ) {
          return;
        }
        
        var touching = true,
            origEvent = event.originalEvent,
            origPos = event.type == "touchstart" ? [origEvent.touches[0].pageX, origEvent.touches[0].pageY] : [ event.pageX, event.pageY ],
            tapHoldTimer,
            $elem = $( event.target );

        var touchMoveHandler = function( event ) {
          var newPageXY = event.type == "touchmove" ? event.originalEvent.touches[0] : event;
          if ( (Math.abs(origPos[0] - newPageXY.pageX) > MOVE_THRESHOLD) && (  Math.abs(origPos[1] - newPageXY.pageY) < MOVE_THRESHOLD ) ) {
            $this.off( bc.events.end, origTarget, touchEndHandler );
            $this.off( bc.events.move, touchMoveHandler );
            clearTimeout( tapHoldTimer );
            $elem.trigger( 'swipe', ( origPos[0] > newPageXY.pageX ) ? 'swipeLeft' : 'swipeRight' );
          }
        };

        var touchEndHandler = function( event ) {
          $this.off( bc.events.move, touchMoveHandler );
          clearTimeout( tapHoldTimer );
          touching = false;
        };

        //We want to protect against them tapping and holding.  So we start a timer to see if they haven't moved or released.
        tapHoldTimer = setTimeout( function() {
          $this.off( bc.events.end, touchEndHandler )
                .off( bc.events.move, touchMoveHandler );
          }, 750 );

        //Register the move event listener so we know if this is not actually a tap but a swipe or scroll
        $this.on( bc.events.move, touchMoveHandler );

        //Register the end event so we can check to see if we should fire a tap event and cleanup.
        $this.one( bc.events.end, touchEndHandler );

      });
    }
  };


})( bc.lib.jQuery );
