/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 1.0.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;(function(undefined){function isFunction(a){return ostring.call(a)==="[object Function]"}function isArray(a){return ostring.call(a)==="[object Array]"}function mixin(a,b,c){for(var d in b)!(d in empty)&&(!(d in a)||c)&&(a[d]=b[d]);return req}function makeError(a,b,c){var d=new Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a);return c&&(d.originalError=c),d}function configurePackageDir(a,b,c){var d,e,f;for(d=0;f=b[d];d++)f=typeof f=="string"?{name:f}:f,e=f.location,c&&(!e||e.indexOf("/")!==0&&e.indexOf(":")===-1)&&(e=c+"/"+(e||f.name)),a[f.name]={name:f.name,location:e||f.name,main:(f.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}function jQueryHoldReady(a,b){a.holdReady?a.holdReady(b):b?a.readyWait+=1:a.ready(!0)}function newContext(a){function b(a){var b,c;for(b=0;c=a[b];b++)if(c===".")a.splice(b,1),b-=1;else if(c===".."){if(b===1&&(a[2]===".."||a[0]===".."))break;b>0&&(a.splice(b-1,2),b-=2)}}function c(a,c){var d,e;return a&&a.charAt(0)==="."&&(c?(v.pkgs[c]?c=[c]:(c=c.split("/"),c=c.slice(0,c.length-1)),a=c.concat(a.split("/")),b(a),e=v.pkgs[d=a[0]],a=a.join("/"),e&&a===d+"/"+e.main&&(a=d)):a.indexOf("./")===0&&(a=a.substring(2))),a}function d(a,b){var d=a?a.indexOf("!"):-1,e=null,f=b?b.name:null,g=a,h,i,j;return d!==-1&&(e=a.substring(0,d),a=a.substring(d+1,a.length)),e&&(e=c(e,f)),a&&(e?(j=z[e],j&&j.normalize?h=j.normalize(a,function(a){return c(a,f)}):h=c(a,f)):(h=c(a,f),i=y[h],i||(i=t.nameToUrl(a,null,b),y[h]=i))),{prefix:e,name:h,parentMap:b,url:i,originalName:g,fullName:e?e+"!"+(h||""):h}}function e(){var a=!0,b=v.priorityWait,c,d;if(b){for(d=0;c=b[d];d++)if(!A[c]){a=!1;break}a&&delete v.priorityWait}return a}function f(a,b,c){return function(){var d=aps.call(arguments,0),e;return c&&isFunction(e=d[d.length-1])&&(e.__requireJsBuild=!0),d.push(b),a.apply(null,d)}}function g(a,b,c){var d=f(c||t.require,a,b);return mixin(d,{nameToUrl:f(t.nameToUrl,a),toUrl:f(t.toUrl,a),defined:f(t.requireDefined,a),specified:f(t.requireSpecified,a),isBrowser:req.isBrowser}),d}function h(a){t.paused.push(a)}function i(a){var b,c,e,f,g,h=a.callback,i=a.map,j=i.fullName,k=a.deps,l=a.listeners,m=v.requireExecCb||req.execCb,n;if(h&&isFunction(h)){if(v.catchError.define)try{c=m(j,a.callback,k,z[j])}catch(o){e=o}else c=m(j,a.callback,k,z[j]);j&&(n=a.cjsModule,n&&n.exports!==undefined&&n.exports!==z[j]?c=z[j]=a.cjsModule.exports:c===undefined&&a.usingExports?c=z[j]:(z[j]=c,H[j]&&(I[j]=!0)))}else j&&(c=z[j]=h,H[j]&&(I[j]=!0));B[a.id]&&(delete B[a.id],a.isDone=!0,t.waitCount-=1,t.waitCount===0&&(C=[])),delete F[j],req.onResourceLoad&&!a.placeholder&&req.onResourceLoad(t,i,a.depArray);if(e)return f=(j?d(j).url:"")||e.fileName||e.sourceURL,g=e.moduleTree,e=makeError("defineerror",'Error evaluating module "'+j+'" at location "'+f+'":\n'+e+"\nfileName:"+f+"\nlineNumber: "+(e.lineNumber||e.line),e),e.moduleName=j,e.moduleTree=g,req.onError(e);for(b=0;h=l[b];b++)h(c);return undefined}function j(a,b){return function(c){a.depDone[b]||(a.depDone[b]=!0,a.deps[b]=c,a.depCount-=1,a.depCount||i(a))}}function k(a,b){var c=b.map,e=c.fullName,f=c.name,h=G[a]||(G[a]=z[a]),j;if(b.loading)return;b.loading=!0,j=function(a){b.callback=function(){return a},i(b),A[b.id]=!0,u()},j.fromText=function(a,b){var c=useInteractive;A[a]=!1,t.scriptCount+=1,t.fake[a]=!0,c&&(useInteractive=!1),req.exec(b),c&&(useInteractive=!0),t.completeLoad(a)},e in z?j(z[e]):h.load(f,g(c.parentMap,!0,function(a,e){var f=[],g,h,i;for(g=0;h=a[g];g++)i=d(h,c.parentMap),a[g]=i.fullName,i.prefix||f.push(a[g]);return b.moduleDeps=(b.moduleDeps||[]).concat(f),t.require(a,e)}),j,v)}function l(a){B[a.id]||(B[a.id]=a,C.push(a),t.waitCount+=1)}function m(a){this.listeners.push(a)}function n(a,b){var c=a.fullName,e=a.prefix,f=e?G[e]||(G[e]=z[e]):null,g,j,k,o;return c&&(g=F[c]),g||(j=!0,g={id:(e&&!f?E++ +"__p@:":"")+(c||"__r@"+E++),map:a,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:m},x[g.id]=!0,c&&(!e||G[e])&&(F[c]=g)),e&&!f?(o=d(e),e in z&&!z[e]&&(delete z[e],delete D[o.url]),k=n(o,!0),k.add(function(b){var c=d(a.originalName,a.parentMap),e=n(c,!0);g.placeholder=!0,e.add(function(a){g.callback=function(){return a},i(g)})})):j&&b&&(A[g.id]=!1,h(g),l(g)),g}function o(a,b,c,e){var f=d(a,e),h=f.name,k=f.fullName,m=n(f),o=m.id,p=m.deps,q,r,s,u,w;if(k){if(k in z||A[o]===!0||k==="jquery"&&v.jQuery&&v.jQuery!==c().fn.jquery)return;x[o]=!0,A[o]=!0,k==="jquery"&&c&&jQueryCheck(c())}m.depArray=b,m.callback=c;for(q=0;q<b.length;q++)r=b[q],r&&(r=d(r,h?f:e),s=r.fullName,u=r.prefix,b[q]=s,s==="require"?p[q]=g(f):s==="exports"?(p[q]=z[k]={},m.usingExports=!0):s==="module"?m.cjsModule=w=p[q]={id:h,uri:h?t.nameToUrl(h,null,e):undefined,exports:z[k]}:!(s in z)||s in B||k in H&&!(k in H&&I[s])?(k in H&&(H[s]=!0,delete z[s],D[r.url]=!1),m.depCount+=1,m.depCallbacks[q]=j(m,q),n(r,!0).add(m.depCallbacks[q])):p[q]=z[s]);m.depCount?l(m):i(m)}function p(a){o.apply(null,a)}function q(a,b){var c=a.map.fullName,d=a.depArray,e=!0,f,g,h,i;if(a.isDone||!c||!A[c])return i;if(b[c])return a;b[c]=!0;if(d){for(f=0;f<d.length;f++){g=d[f];if(!A[g]&&!reservedDependencies[g]){e=!1;break}h=B[g];if(h&&!h.isDone&&A[g]){i=q(h,b);if(i)break}}e||(i=undefined,delete b[c])}return i}function r(a,b){var c=a.map.fullName,e=a.depArray,f,g,h,i,j,k;if(a.isDone||!c||!A[c])return undefined;if(c){if(b[c])return z[c];b[c]=!0}if(e)for(f=0;f<e.length;f++)g=e[f],g&&(i=d(g).prefix,i&&(j=B[i])&&r(j,b),h=B[g],h&&!h.isDone&&A[g]&&(k=r(h,b),a.depCallbacks[f](k)));return z[c]}function s(){var a=v.waitSeconds*1e3,b=a&&t.startTime+a<(new Date).getTime(),c="",d=!1,f=!1,g=[],h,i,j,k,l,m;if(t.pausedCount>0)return undefined;if(v.priorityWait){if(!e())return undefined;u()}for(i in A)if(!(i in empty)){d=!0;if(!A[i])if(b)c+=i+" ";else{f=!0;if(i.indexOf("!")===-1){g=[];break}m=F[i]&&F[i].moduleDeps,m&&g.push.apply(g,m)}}if(!d&&!t.waitCount)return undefined;if(b&&c)return j=makeError("timeout","Load timeout for modules: "+c),j.requireType="timeout",j.requireModules=c,j.contextName=t.contextName,req.onError(j);if(f&&g.length)for(h=0;k=B[g[h]];h++)if(l=q(k,{})){r(l,{});break}if(!b&&(f||t.scriptCount))return(isBrowser||isWebWorker)&&!checkLoadedTimeoutId&&(checkLoadedTimeoutId=setTimeout(function(){checkLoadedTimeoutId=0,s()},50)),undefined;if(t.waitCount){for(h=0;k=C[h];h++)r(k,{});t.paused.length&&u(),checkLoadedDepth<5&&(checkLoadedDepth+=1,s())}return checkLoadedDepth=0,req.checkReadyState(),undefined}var t,u,v={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},w=[],x={require:!0,exports:!0,module:!0},y={},z={},A={},B={},C=[],D={},E=0,F={},G={},H={},I={},J=0;return jQueryCheck=function(a){if(!t.jQuery){var b=a||(typeof jQuery!="undefined"?jQuery:null);if(b){if(v.jQuery&&b.fn.jquery!==v.jQuery)return;if("holdReady"in b||"readyWait"in b)t.jQuery=b,p(["jquery",[],function(){return jQuery}]),t.scriptCount&&(jQueryHoldReady(b,!0),t.jQueryIncremented=!0)}}},u=function(){var a,b,c,d,f,g,h;t.takeGlobalQueue(),J+=1,t.scriptCount<=0&&(t.scriptCount=0);while(w.length){g=w.shift();if(g[0]===null)return req.onError(makeError("mismatch","Mismatched anonymous define() module: "+g[g.length-1]));p(g)}if(!v.priorityWait||e())while(t.paused.length){f=t.paused,t.pausedCount+=f.length,t.paused=[];for(d=0;a=f[d];d++)b=a.map,c=b.url,h=b.fullName,b.prefix?k(b.prefix,a):!D[c]&&!A[h]&&((v.requireLoad||req.load)(t,h,c),c.indexOf("empty:")!==0&&(D[c]=!0));t.startTime=(new Date).getTime(),t.pausedCount-=f.length}return J===1&&s(),J-=1,undefined},t={contextName:a,config:v,defQueue:w,waiting:B,waitCount:0,specified:x,loaded:A,urlMap:y,urlFetched:D,scriptCount:0,defined:z,paused:[],pausedCount:0,plugins:G,needFullExec:H,fake:{},fullExec:I,managerCallbacks:F,makeModuleMap:d,normalize:c,configure:function(a){var b,c,d,e,f,g;a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/"),b=v.paths,d=v.packages,e=v.pkgs,mixin(v,a,!0);if(a.paths){for(c in a.paths)c in empty||(b[c]=a.paths[c]);v.paths=b}f=a.packagePaths;if(f||a.packages){if(f)for(c in f)c in empty||configurePackageDir(e,f[c],c);a.packages&&configurePackageDir(e,a.packages),v.pkgs=e}a.priority&&(g=t.requireWait,t.requireWait=!1,u(),t.require(a.priority),u(),t.requireWait=g,v.priorityWait=a.priority),(a.deps||a.callback)&&t.require(a.deps||[],a.callback)},requireDefined:function(a,b){return d(a,b).fullName in z},requireSpecified:function(a,b){return d(a,b).fullName in x},require:function(b,c,e){var f,g,h;if(typeof b=="string")return isFunction(c)?req.onError(makeError("requireargs","Invalid require call")):req.get?req.get(t,b,c):(f=b,e=c,h=d(f,e),g=h.fullName,g in z?z[g]:req.onError(makeError("notloaded","Module name '"+h.fullName+"' has not been loaded yet for context: "+a)));(b&&b.length||c)&&o(null,b,c,e);if(!t.requireWait)while(!t.scriptCount&&t.paused.length)u();return t.require},takeGlobalQueue:function(){globalDefQueue.length&&(apsp.apply(t.defQueue,[t.defQueue.length-1,0].concat(globalDefQueue)),globalDefQueue=[])},completeLoad:function(a){var b;t.takeGlobalQueue();while(w.length){b=w.shift();if(b[0]===null){b[0]=a;break}if(b[0]===a)break;p(b),b=null}b?p(b):p([a,[],a==="jquery"&&typeof jQuery!="undefined"?function(){return jQuery}:null]),req.isAsync&&(t.scriptCount-=1),u(),req.isAsync||(t.scriptCount-=1)},toUrl:function(a,b){var c=a.lastIndexOf("."),d=null;return c!==-1&&(d=a.substring(c,a.length),a=a.substring(0,c)),t.nameToUrl(a,d,b)},nameToUrl:function(a,b,d){var e,f,g,h,i,j,k,l,m=t.config;a=c(a,d&&d.fullName);if(req.jsExtRegExp.test(a))l=a+(b?b:"");else{e=m.paths,f=m.pkgs,i=a.split("/");for(j=i.length;j>0;j--){k=i.slice(0,j).join("/");if(e[k]){i.splice(0,j,e[k]);break}if(g=f[k]){a===g.name?h=g.location+"/"+g.main:h=g.location,i.splice(0,j,h);break}}l=i.join("/")+(b||".js"),l=(l.charAt(0)==="/"||l.match(/^[\w\+\.\-]+:/)?"":m.baseUrl)+l}return m.urlArgs?l+((l.indexOf("?")===-1?"?":"&")+m.urlArgs):l}},t.jQueryCheck=jQueryCheck,t.resume=u,t}function getInteractiveScript(){var a,b,c;if(interactiveScript&&interactiveScript.readyState==="interactive")return interactiveScript;a=document.getElementsByTagName("script");for(b=a.length-1;b>-1&&(c=a[b]);b--)if(c.readyState==="interactive")return interactiveScript=c;return null}var version="1.0.8",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/require\(\s*["']([^'"\s]+)["']\s*\)/g,currDirRegExp=/^\.\//,jsSuffixRegExp=/\.js$/,ostring=Object.prototype.toString,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=typeof window!="undefined"&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",empty={},contexts={},globalDefQueue=[],interactiveScript=null,checkLoadedDepth=0,useInteractive=!1,reservedDependencies={require:!0,module:!0,exports:!0},req,cfg={},currentlyAddingScript,s,head,baseElement,scripts,script,src,subPath,mainScript,dataMain,globalI,ctx,jQueryCheck,checkLoadedTimeoutId;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(a,b){var c=defContextName,d,e;return!isArray(a)&&typeof a!="string"&&(e=a,isArray(b)?(a=b,b=arguments[2]):a=[]),e&&e.context&&(c=e.context),d=contexts[c]||(contexts[c]=newContext(c)),e&&d.configure(e),d.require(a,b)},req.config=function(a){return req(a)},require||(require=req),req.toUrl=function(a){return contexts[defContextName].toUrl(a)},req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,s=req.s={contexts:contexts,skipAsync:{}},req.isAsync=req.isBrowser=isBrowser,isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(a){throw a},req.load=function(a,b,c){req.resourcesReady(!1),a.scriptCount+=1,req.attach(c,a,b),a.jQuery&&!a.jQueryIncremented&&(jQueryHoldReady(a.jQuery,!0),a.jQueryIncremented=!0)},define=function(a,b,c){var d,e;return typeof a!="string"&&(c=b,b=a,a=null),isArray(b)||(c=b,b=[]),!b.length&&isFunction(c)&&c.length&&(c.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(c.length===1?["require"]:["require","exports","module"]).concat(b)),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute("data-requiremodule")),e=contexts[d.getAttribute("data-requirecontext")])),(e?e.defQueue:globalDefQueue).push([a,b,c]),undefined},define.amd={multiversion:!0,plugins:!0,jQuery:!0},req.exec=function(text){return eval(text)},req.execCb=function(a,b,c,d){return b.apply(d,c)},req.addScriptToDom=function(a){currentlyAddingScript=a,baseElement?head.insertBefore(a,baseElement):head.appendChild(a),currentlyAddingScript=null},req.onScriptLoad=function(a){var b=a.currentTarget||a.srcElement,c,d,e;if(a.type==="load"||b&&readyRegExp.test(b.readyState))interactiveScript=null,c=b.getAttribute("data-requirecontext"),d=b.getAttribute("data-requiremodule"),e=contexts[c],contexts[c].completeLoad(d),b.detachEvent&&!isOpera?b.detachEvent("onreadystatechange",req.onScriptLoad):b.removeEventListener("load",req.onScriptLoad,!1)},req.attach=function(a,b,c,d,e,f){var g;return isBrowser?(d=d||req.onScriptLoad,g=b&&b.config&&b.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),g.type=e||b&&b.config.scriptType||"text/javascript",g.charset="utf-8",g.async=!s.skipAsync[a],b&&g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!(g.attachEvent.toString&&g.attachEvent.toString().indexOf("[native code]")<0)&&!isOpera?(useInteractive=!0,f?g.onreadystatechange=function(a){g.readyState==="loaded"&&(g.onreadystatechange=null,g.attachEvent("onreadystatechange",d),f(g))}:g.attachEvent("onreadystatechange",d)):g.addEventListener("load",d,!1),g.src=a,f||req.addScriptToDom(g),g):(isWebWorker&&(importScripts(a),b.completeLoad(c)),null)};if(isBrowser){scripts=document.getElementsByTagName("script");for(globalI=scripts.length-1;globalI>-1&&(script=scripts[globalI]);globalI--){head||(head=script.parentNode);if(dataMain=script.getAttribute("data-main")){cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript.replace(jsSuffixRegExp,"")),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain];break}}}req.checkReadyState=function(){var a=s.contexts,b;for(b in a)if(!(b in empty)&&a[b].waitCount)return;req.resourcesReady(!0)},req.resourcesReady=function(a){var b,c,d;req.resourcesDone=a;if(req.resourcesDone){b=s.contexts;for(d in b)d in empty||(c=b[d],c.jQueryIncremented&&(jQueryHoldReady(c.jQuery,!1),c.jQueryIncremented=!1))}},req.pageLoaded=function(){document.readyState!=="complete"&&(document.readyState="complete")},isBrowser&&document.addEventListener&&(document.readyState||(document.readyState="loading",window.addEventListener("load",req.pageLoaded,!1))),req(cfg),req.isAsync&&typeof setTimeout!="undefined"&&(ctx=s.contexts[cfg.context||defContextName],ctx.requireWait=!0,setTimeout(function(){ctx.requireWait=!1,ctx.scriptCount||ctx.resume(),req.checkReadyState()},0))})()