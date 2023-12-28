var KC=Object.defineProperty;var QC=(e,t,n)=>t in e?KC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ZC=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var H=(e,t,n)=>(QC(e,typeof t!="symbol"?t+"":t,n),n);var PH=ZC((Zt,Jt)=>{function JC(e,t){for(var n=0;n<t.length;n++){const i=t[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function iw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h={},qC={get exports(){return h},set exports(e){h=e}},od={},P={},eA={get exports(){return P},set exports(e){P=e}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),tA=Symbol.for("react.portal"),nA=Symbol.for("react.fragment"),iA=Symbol.for("react.strict_mode"),rA=Symbol.for("react.profiler"),oA=Symbol.for("react.provider"),sA=Symbol.for("react.context"),aA=Symbol.for("react.forward_ref"),lA=Symbol.for("react.suspense"),cA=Symbol.for("react.memo"),uA=Symbol.for("react.lazy"),dx=Symbol.iterator;function dA(e){return e===null||typeof e!="object"?null:(e=dx&&e[dx]||e["@@iterator"],typeof e=="function"?e:null)}var rw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ow=Object.assign,sw={};function cs(e,t,n){this.props=e,this.context=t,this.refs=sw,this.updater=n||rw}cs.prototype.isReactComponent={};cs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function aw(){}aw.prototype=cs.prototype;function Hm(e,t,n){this.props=e,this.context=t,this.refs=sw,this.updater=n||rw}var $m=Hm.prototype=new aw;$m.constructor=Hm;ow($m,cs.prototype);$m.isPureReactComponent=!0;var fx=Array.isArray,lw=Object.prototype.hasOwnProperty,Gm={current:null},cw={key:!0,ref:!0,__self:!0,__source:!0};function uw(e,t,n){var i,r={},o=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)lw.call(t,i)&&!cw.hasOwnProperty(i)&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:e,key:o,ref:s,props:r,_owner:Gm.current}}function fA(e,t){return{$$typeof:nl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ym(e){return typeof e=="object"&&e!==null&&e.$$typeof===nl}function hA(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hx=/\/+/g;function uf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hA(""+e.key):t.toString(36)}function Sc(e,t,n,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case nl:case tA:s=!0}}if(s)return s=e,r=r(s),e=i===""?"."+uf(s,0):i,fx(r)?(n="",e!=null&&(n=e.replace(hx,"$&/")+"/"),Sc(r,t,n,"",function(c){return c})):r!=null&&(Ym(r)&&(r=fA(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(hx,"$&/")+"/")+e)),t.push(r)),1;if(s=0,i=i===""?".":i+":",fx(e))for(var a=0;a<e.length;a++){o=e[a];var l=i+uf(o,a);s+=Sc(o,t,n,l,r)}else if(l=dA(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=i+uf(o,a++),s+=Sc(o,t,n,l,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bl(e,t,n){if(e==null)return e;var i=[],r=0;return Sc(e,i,"","",function(o){return t.call(n,o,r++)}),i}function pA(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ot={current:null},Cc={transition:null},mA={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:Gm};me.Children={map:bl,forEach:function(e,t,n){bl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bl(e,function(){t++}),t},toArray:function(e){return bl(e,function(t){return t})||[]},only:function(e){if(!Ym(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=cs;me.Fragment=nA;me.Profiler=rA;me.PureComponent=Hm;me.StrictMode=iA;me.Suspense=lA;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mA;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ow({},e.props),r=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Gm.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)lw.call(t,l)&&!cw.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:nl,type:e.type,key:r,ref:o,props:i,_owner:s}};me.createContext=function(e){return e={$$typeof:sA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oA,_context:e},e.Consumer=e};me.createElement=uw;me.createFactory=function(e){var t=uw.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:aA,render:e}};me.isValidElement=Ym;me.lazy=function(e){return{$$typeof:uA,_payload:{_status:-1,_result:e},_init:pA}};me.memo=function(e,t){return{$$typeof:cA,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=Cc.transition;Cc.transition={};try{e()}finally{Cc.transition=t}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(e,t){return Ot.current.useCallback(e,t)};me.useContext=function(e){return Ot.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return Ot.current.useDeferredValue(e)};me.useEffect=function(e,t){return Ot.current.useEffect(e,t)};me.useId=function(){return Ot.current.useId()};me.useImperativeHandle=function(e,t,n){return Ot.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return Ot.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return Ot.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return Ot.current.useMemo(e,t)};me.useReducer=function(e,t,n){return Ot.current.useReducer(e,t,n)};me.useRef=function(e){return Ot.current.useRef(e)};me.useState=function(e){return Ot.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return Ot.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return Ot.current.useTransition()};me.version="18.2.0";(function(e){e.exports=me})(eA);const Qn=iw(P),Gh=JC({__proto__:null,default:Qn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gA=P,xA=Symbol.for("react.element"),yA=Symbol.for("react.fragment"),vA=Object.prototype.hasOwnProperty,bA=gA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wA={key:!0,ref:!0,__self:!0,__source:!0};function dw(e,t,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)vA.call(t,i)&&!wA.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:xA,type:e,key:o,ref:s,props:r,_owner:bA.current}}od.Fragment=yA;od.jsx=dw;od.jsxs=dw;(function(e){e.exports=od})(qC);var Yh={},Xh={},kA={get exports(){return Xh},set exports(e){Xh=e}},rn={},Kh={},SA={get exports(){return Kh},set exports(e){Kh=e}},fw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,Y){var Q=B.length;B.push(Y);e:for(;0<Q;){var le=Q-1>>>1,se=B[le];if(0<r(se,Y))B[le]=Y,B[Q]=se,Q=le;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Y=B[0],Q=B.pop();if(Q!==Y){B[0]=Q;e:for(var le=0,se=B.length,He=se>>>1;le<He;){var ye=2*(le+1)-1,_e=B[ye],we=ye+1,$e=B[we];if(0>r(_e,Q))we<se&&0>r($e,_e)?(B[le]=$e,B[we]=Q,le=we):(B[le]=_e,B[ye]=Q,le=ye);else if(we<se&&0>r($e,Q))B[le]=$e,B[we]=Q,le=we;else break e}}return Y}function r(B,Y){var Q=B.sortIndex-Y.sortIndex;return Q!==0?Q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,m=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=B)i(c),Y.sortIndex=Y.expirationTime,t(l,Y);else break;Y=n(c)}}function k(B){if(m=!1,b(B),!g)if(n(l)!==null)g=!0,de(S);else{var Y=n(c);Y!==null&&ae(k,Y.startTime-B)}}function S(B,Y){g=!1,m&&(m=!1,x(j),j=-1),p=!0;var Q=f;try{for(b(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||B&&!U());){var le=d.callback;if(typeof le=="function"){d.callback=null,f=d.priorityLevel;var se=le(d.expirationTime<=Y);Y=e.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&i(l),b(Y)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var ye=n(c);ye!==null&&ae(k,ye.startTime-Y),He=!1}return He}finally{d=null,f=Q,p=!1}}var E=!1,C=null,j=-1,T=5,z=-1;function U(){return!(e.unstable_now()-z<T)}function q(){if(C!==null){var B=e.unstable_now();z=B;var Y=!0;try{Y=C(!0,B)}finally{Y?ne():(E=!1,C=null)}}else E=!1}var ne;if(typeof y=="function")ne=function(){y(q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,re=he.port2;he.port1.onmessage=q,ne=function(){re.postMessage(null)}}else ne=function(){v(q,0)};function de(B){C=B,E||(E=!0,ne())}function ae(B,Y){j=v(function(){B(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,de(S))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(B){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var Q=f;f=Y;try{return B()}finally{f=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=f;f=B;try{return Y()}finally{f=Q}},e.unstable_scheduleCallback=function(B,Y,Q){var le=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,B={id:u++,callback:Y,priorityLevel:B,startTime:Q,expirationTime:se,sortIndex:-1},Q>le?(B.sortIndex=Q,t(c,B),n(l)===null&&B===n(c)&&(m?(x(j),j=-1):m=!0,ae(k,Q-le))):(B.sortIndex=se,t(l,B),g||p||(g=!0,de(S))),B},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(B){var Y=f;return function(){var Q=f;f=Y;try{return B.apply(this,arguments)}finally{f=Q}}}})(fw);(function(e){e.exports=fw})(SA);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hw=P,en=Kh;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pw=new Set,ba={};function qr(e,t){$o(e,t),$o(e+"Capture",t)}function $o(e,t){for(ba[e]=t,e=0;e<t.length;e++)pw.add(t[e])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,CA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,px={},mx={};function AA(e){return Qh.call(mx,e)?!0:Qh.call(px,e)?!1:CA.test(e)?mx[e]=!0:(px[e]=!0,!1)}function EA(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _A(e,t,n,i){if(t===null||typeof t>"u"||EA(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mt(e,t,n,i,r,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function Km(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xm,Km);bt[t]=new Mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xm,Km);bt[t]=new Mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xm,Km);bt[t]=new Mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qm(e,t,n,i){var r=bt.hasOwnProperty(t)?bt[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_A(t,n,r,i)&&(n=null),i||r===null?AA(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ai=hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),mw=Symbol.for("react.provider"),gw=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),qm=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),xw=Symbol.for("react.offscreen"),gx=Symbol.iterator;function ks(e){return e===null||typeof e!="object"?null:(e=gx&&e[gx]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Object.assign,df;function Us(e){if(df===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);df=t&&t[1]||""}return`
`+df+e}var ff=!1;function hf(e,t){if(!e||ff)return"";ff=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var i=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){i=c}e.call(t.prototype)}else{try{throw Error()}catch(c){i=c}e()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ff=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Us(e):""}function TA(e){switch(e.tag){case 5:return Us(e.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return e=hf(e.type,!1),e;case 11:return e=hf(e.type.render,!1),e;case 1:return e=hf(e.type,!0),e;default:return""}}function ep(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vo:return"Fragment";case yo:return"Portal";case Zh:return"Profiler";case Zm:return"StrictMode";case Jh:return"Suspense";case qh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gw:return(e.displayName||"Context")+".Consumer";case mw:return(e._context.displayName||"Context")+".Provider";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qm:return t=e.displayName||null,t!==null?t:ep(e.type)||"Memo";case Di:t=e._payload,e=e._init;try{return ep(e(t))}catch{}}return null}function PA(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ep(t);case 8:return t===Zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yw(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jA(e){var t=yw(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kl(e){e._valueTracker||(e._valueTracker=jA(e))}function vw(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=yw(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function su(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function tp(e,t){var n=t.checked;return Xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xx(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bw(e,t){t=t.checked,t!=null&&Qm(e,"checked",t,!1)}function np(e,t){bw(e,t);var n=lr(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ip(e,t.type,n):t.hasOwnProperty("defaultValue")&&ip(e,t.type,lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yx(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ip(e,t,n){(t!=="number"||su(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vs=Array.isArray;function zo(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+lr(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function rp(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vx(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Vs(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:lr(n)}}function ww(e,t){var n=lr(t.value),i=lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function bx(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kw(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function op(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kw(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sl,Sw=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sl=Sl||document.createElement("div"),Sl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OA=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(e){OA.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qs[t]=qs[e]})});function Cw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qs.hasOwnProperty(e)&&qs[e]?(""+t).trim():t+"px"}function Aw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cw(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var MA=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(e,t){if(t){if(MA[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function ap(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lp=null;function eg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cp=null,Io=null,Bo=null;function wx(e){if(e=ol(e)){if(typeof cp!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ud(t),cp(e.stateNode,e.type,t))}}function Ew(e){Io?Bo?Bo.push(e):Bo=[e]:Io=e}function _w(){if(Io){var e=Io,t=Bo;if(Bo=Io=null,wx(e),t)for(e=0;e<t.length;e++)wx(t[e])}}function Tw(e,t){return e(t)}function Pw(){}var pf=!1;function jw(e,t,n){if(pf)return e(t,n);pf=!0;try{return Tw(e,t,n)}finally{pf=!1,(Io!==null||Bo!==null)&&(Pw(),_w())}}function ka(e,t){var n=e.stateNode;if(n===null)return null;var i=ud(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var up=!1;if(vi)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){up=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{up=!1}function RA(e,t,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ea=!1,au=null,lu=!1,dp=null,NA={onError:function(e){ea=!0,au=e}};function DA(e,t,n,i,r,o,s,a,l){ea=!1,au=null,RA.apply(NA,arguments)}function LA(e,t,n,i,r,o,s,a,l){if(DA.apply(this,arguments),ea){if(ea){var c=au;ea=!1,au=null}else throw Error(I(198));lu||(lu=!0,dp=c)}}function eo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ow(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kx(e){if(eo(e)!==e)throw Error(I(188))}function FA(e){var t=e.alternate;if(!t){if(t=eo(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return kx(r),e;if(o===i)return kx(r),t;o=o.sibling}throw Error(I(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==i)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Mw(e){return e=FA(e),e!==null?Rw(e):null}function Rw(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rw(e);if(t!==null)return t;e=e.sibling}return null}var Nw=en.unstable_scheduleCallback,Sx=en.unstable_cancelCallback,zA=en.unstable_shouldYield,IA=en.unstable_requestPaint,Je=en.unstable_now,BA=en.unstable_getCurrentPriorityLevel,tg=en.unstable_ImmediatePriority,Dw=en.unstable_UserBlockingPriority,cu=en.unstable_NormalPriority,WA=en.unstable_LowPriority,Lw=en.unstable_IdlePriority,sd=null,Gn=null;function UA(e){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(sd,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:$A,VA=Math.log,HA=Math.LN2;function $A(e){return e>>>=0,e===0?32:31-(VA(e)/HA|0)|0}var Cl=64,Al=4194304;function Hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uu(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Hs(a):(o&=s,o!==0&&(i=Hs(o)))}else s=n&~r,s!==0?i=Hs(s):o!==0&&(i=Hs(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Pn(t),r=1<<n,i|=e[n],t&=~r;return i}function GA(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YA(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Pn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=GA(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function fp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fw(){var e=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),e}function mf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function il(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pn(t),e[t]=n}function XA(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Pn(n),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~o}}function ng(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Pn(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var Ae=0;function zw(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Iw,ig,Bw,Ww,Uw,hp=!1,El=[],Qi=null,Zi=null,Ji=null,Sa=new Map,Ca=new Map,zi=[],KA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cx(e,t){switch(e){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Sa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(t.pointerId)}}function Cs(e,t,n,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=ol(t),t!==null&&ig(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function QA(e,t,n,i,r){switch(t){case"focusin":return Qi=Cs(Qi,e,t,n,i,r),!0;case"dragenter":return Zi=Cs(Zi,e,t,n,i,r),!0;case"mouseover":return Ji=Cs(Ji,e,t,n,i,r),!0;case"pointerover":var o=r.pointerId;return Sa.set(o,Cs(Sa.get(o)||null,e,t,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ca.set(o,Cs(Ca.get(o)||null,e,t,n,i,r)),!0}return!1}function Vw(e){var t=Mr(e.target);if(t!==null){var n=eo(t);if(n!==null){if(t=n.tag,t===13){if(t=Ow(n),t!==null){e.blockedOn=t,Uw(e.priority,function(){Bw(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);lp=i,n.target.dispatchEvent(i),lp=null}else return t=ol(n),t!==null&&ig(t),e.blockedOn=n,!1;t.shift()}return!0}function Ax(e,t,n){Ac(e)&&n.delete(t)}function ZA(){hp=!1,Qi!==null&&Ac(Qi)&&(Qi=null),Zi!==null&&Ac(Zi)&&(Zi=null),Ji!==null&&Ac(Ji)&&(Ji=null),Sa.forEach(Ax),Ca.forEach(Ax)}function As(e,t){e.blockedOn===t&&(e.blockedOn=null,hp||(hp=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,ZA)))}function Aa(e){function t(r){return As(r,e)}if(0<El.length){As(El[0],e);for(var n=1;n<El.length;n++){var i=El[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Qi!==null&&As(Qi,e),Zi!==null&&As(Zi,e),Ji!==null&&As(Ji,e),Sa.forEach(t),Ca.forEach(t),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)Vw(n),n.blockedOn===null&&zi.shift()}var Wo=Ai.ReactCurrentBatchConfig,du=!0;function JA(e,t,n,i){var r=Ae,o=Wo.transition;Wo.transition=null;try{Ae=1,rg(e,t,n,i)}finally{Ae=r,Wo.transition=o}}function qA(e,t,n,i){var r=Ae,o=Wo.transition;Wo.transition=null;try{Ae=4,rg(e,t,n,i)}finally{Ae=r,Wo.transition=o}}function rg(e,t,n,i){if(du){var r=pp(e,t,n,i);if(r===null)Af(e,t,i,fu,n),Cx(e,i);else if(QA(r,e,t,n,i))i.stopPropagation();else if(Cx(e,i),t&4&&-1<KA.indexOf(e)){for(;r!==null;){var o=ol(r);if(o!==null&&Iw(o),o=pp(e,t,n,i),o===null&&Af(e,t,i,fu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Af(e,t,i,null,n)}}var fu=null;function pp(e,t,n,i){if(fu=null,e=eg(i),e=Mr(e),e!==null)if(t=eo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ow(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fu=e,null}function Hw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BA()){case tg:return 1;case Dw:return 4;case cu:case WA:return 16;case Lw:return 536870912;default:return 16}default:return 16}}var Bi=null,og=null,Ec=null;function $w(){if(Ec)return Ec;var e,t=og,n=t.length,i,r="value"in Bi?Bi.value:Bi.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===r[o-i];i++);return Ec=r.slice(e,1<i?1-i:void 0)}function _c(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Ex(){return!1}function on(e){function t(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_l:Ex,this.isPropagationStopped=Ex,this}return Xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sg=on(us),rl=Xe({},us,{view:0,detail:0}),e3=on(rl),gf,xf,Es,ad=Xe({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Es&&(Es&&e.type==="mousemove"?(gf=e.screenX-Es.screenX,xf=e.screenY-Es.screenY):xf=gf=0,Es=e),gf)},movementY:function(e){return"movementY"in e?e.movementY:xf}}),_x=on(ad),t3=Xe({},ad,{dataTransfer:0}),n3=on(t3),i3=Xe({},rl,{relatedTarget:0}),yf=on(i3),r3=Xe({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),o3=on(r3),s3=Xe({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a3=on(s3),l3=Xe({},us,{data:0}),Tx=on(l3),c3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d3[e])?!!t[e]:!1}function ag(){return f3}var h3=Xe({},rl,{key:function(e){if(e.key){var t=c3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_c(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(e){return e.type==="keypress"?_c(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_c(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p3=on(h3),m3=Xe({},ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Px=on(m3),g3=Xe({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),x3=on(g3),y3=Xe({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),v3=on(y3),b3=Xe({},ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w3=on(b3),k3=[9,13,27,32],lg=vi&&"CompositionEvent"in window,ta=null;vi&&"documentMode"in document&&(ta=document.documentMode);var S3=vi&&"TextEvent"in window&&!ta,Gw=vi&&(!lg||ta&&8<ta&&11>=ta),jx=String.fromCharCode(32),Ox=!1;function Yw(e,t){switch(e){case"keyup":return k3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bo=!1;function C3(e,t){switch(e){case"compositionend":return Xw(t);case"keypress":return t.which!==32?null:(Ox=!0,jx);case"textInput":return e=t.data,e===jx&&Ox?null:e;default:return null}}function A3(e,t){if(bo)return e==="compositionend"||!lg&&Yw(e,t)?(e=$w(),Ec=og=Bi=null,bo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gw&&t.locale!=="ko"?null:t.data;default:return null}}var E3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mx(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E3[e.type]:t==="textarea"}function Kw(e,t,n,i){Ew(i),t=hu(t,"onChange"),0<t.length&&(n=new sg("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var na=null,Ea=null;function _3(e){s2(e,0)}function ld(e){var t=So(e);if(vw(t))return e}function T3(e,t){if(e==="change")return t}var Qw=!1;if(vi){var vf;if(vi){var bf="oninput"in document;if(!bf){var Rx=document.createElement("div");Rx.setAttribute("oninput","return;"),bf=typeof Rx.oninput=="function"}vf=bf}else vf=!1;Qw=vf&&(!document.documentMode||9<document.documentMode)}function Nx(){na&&(na.detachEvent("onpropertychange",Zw),Ea=na=null)}function Zw(e){if(e.propertyName==="value"&&ld(Ea)){var t=[];Kw(t,Ea,e,eg(e)),jw(_3,t)}}function P3(e,t,n){e==="focusin"?(Nx(),na=t,Ea=n,na.attachEvent("onpropertychange",Zw)):e==="focusout"&&Nx()}function j3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ld(Ea)}function O3(e,t){if(e==="click")return ld(t)}function M3(e,t){if(e==="input"||e==="change")return ld(t)}function R3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nn=typeof Object.is=="function"?Object.is:R3;function _a(e,t){if(Nn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qh.call(t,r)||!Nn(e[r],t[r]))return!1}return!0}function Dx(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lx(e,t){var n=Dx(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dx(n)}}function Jw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qw(){for(var e=window,t=su();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=su(e.document)}return t}function cg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N3(e){var t=qw(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jw(n.ownerDocument.documentElement,n)){if(i!==null&&cg(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=Lx(n,o);var s=Lx(n,i);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D3=vi&&"documentMode"in document&&11>=document.documentMode,wo=null,mp=null,ia=null,gp=!1;function Fx(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gp||wo==null||wo!==su(i)||(i=wo,"selectionStart"in i&&cg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&_a(ia,i)||(ia=i,i=hu(mp,"onSelect"),0<i.length&&(t=new sg("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wo)))}function Tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ko={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},wf={},e2={};vi&&(e2=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function cd(e){if(wf[e])return wf[e];if(!ko[e])return e;var t=ko[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in e2)return wf[e]=t[n];return e}var t2=cd("animationend"),n2=cd("animationiteration"),i2=cd("animationstart"),r2=cd("transitionend"),o2=new Map,zx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,t){o2.set(e,t),qr(t,[e])}for(var kf=0;kf<zx.length;kf++){var Sf=zx[kf],L3=Sf.toLowerCase(),F3=Sf[0].toUpperCase()+Sf.slice(1);mr(L3,"on"+F3)}mr(t2,"onAnimationEnd");mr(n2,"onAnimationIteration");mr(i2,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(r2,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z3=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Ix(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,LA(i,t,void 0,e),e.currentTarget=null}function s2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Ix(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Ix(r,a,c),o=l}}}if(lu)throw e=dp,lu=!1,dp=null,e}function Re(e,t){var n=t[wp];n===void 0&&(n=t[wp]=new Set);var i=e+"__bubble";n.has(i)||(a2(t,e,2,!1),n.add(i))}function Cf(e,t,n){var i=0;t&&(i|=4),a2(n,e,i,t)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ta(e){if(!e[Pl]){e[Pl]=!0,pw.forEach(function(n){n!=="selectionchange"&&(z3.has(n)||Cf(n,!1,e),Cf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pl]||(t[Pl]=!0,Cf("selectionchange",!1,t))}}function a2(e,t,n,i){switch(Hw(t)){case 1:var r=JA;break;case 4:r=qA;break;default:r=rg}n=r.bind(null,t,n,e),r=void 0,!up||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Af(e,t,n,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Mr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}jw(function(){var c=o,u=eg(n),d=[];e:{var f=o2.get(e);if(f!==void 0){var p=sg,g=e;switch(e){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=p3;break;case"focusin":g="focus",p=yf;break;case"focusout":g="blur",p=yf;break;case"beforeblur":case"afterblur":p=yf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_x;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=n3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=x3;break;case t2:case n2:case i2:p=o3;break;case r2:p=v3;break;case"scroll":p=e3;break;case"wheel":p=w3;break;case"copy":case"cut":case"paste":p=a3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Px}var m=(t&4)!==0,v=!m&&e==="scroll",x=m?f!==null?f+"Capture":null:f;m=[];for(var y=c,b;y!==null;){b=y;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,x!==null&&(k=ka(y,x),k!=null&&m.push(Pa(y,k,b)))),v)break;y=y.return}0<m.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==lp&&(g=n.relatedTarget||n.fromElement)&&(Mr(g)||g[bi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Mr(g):null,g!==null&&(v=eo(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(m=_x,k="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(m=Px,k="onPointerLeave",x="onPointerEnter",y="pointer"),v=p==null?f:So(p),b=g==null?f:So(g),f=new m(k,y+"leave",p,n,u),f.target=v,f.relatedTarget=b,k=null,Mr(u)===c&&(m=new m(x,y+"enter",g,n,u),m.target=b,m.relatedTarget=v,k=m),v=k,p&&g)t:{for(m=p,x=g,y=0,b=m;b;b=uo(b))y++;for(b=0,k=x;k;k=uo(k))b++;for(;0<y-b;)m=uo(m),y--;for(;0<b-y;)x=uo(x),b--;for(;y--;){if(m===x||x!==null&&m===x.alternate)break t;m=uo(m),x=uo(x)}m=null}else m=null;p!==null&&Bx(d,f,p,m,!1),g!==null&&v!==null&&Bx(d,v,g,m,!0)}}e:{if(f=c?So(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=T3;else if(Mx(f))if(Qw)S=M3;else{S=j3;var E=P3}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=O3);if(S&&(S=S(e,c))){Kw(d,S,n,u);break e}E&&E(e,f,c),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ip(f,"number",f.value)}switch(E=c?So(c):window,e){case"focusin":(Mx(E)||E.contentEditable==="true")&&(wo=E,mp=c,ia=null);break;case"focusout":ia=mp=wo=null;break;case"mousedown":gp=!0;break;case"contextmenu":case"mouseup":case"dragend":gp=!1,Fx(d,n,u);break;case"selectionchange":if(D3)break;case"keydown":case"keyup":Fx(d,n,u)}var C;if(lg)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else bo?Yw(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Gw&&n.locale!=="ko"&&(bo||j!=="onCompositionStart"?j==="onCompositionEnd"&&bo&&(C=$w()):(Bi=u,og="value"in Bi?Bi.value:Bi.textContent,bo=!0)),E=hu(c,j),0<E.length&&(j=new Tx(j,e,null,n,u),d.push({event:j,listeners:E}),C?j.data=C:(C=Xw(n),C!==null&&(j.data=C)))),(C=S3?C3(e,n):A3(e,n))&&(c=hu(c,"onBeforeInput"),0<c.length&&(u=new Tx("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}s2(d,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hu(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ka(e,n),o!=null&&i.unshift(Pa(e,o,r)),o=ka(e,t),o!=null&&i.push(Pa(e,o,r))),e=e.return}return i}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bx(e,t,n,i,r){for(var o=t._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ka(n,o),l!=null&&s.unshift(Pa(n,l,a))):r||(l=ka(n,o),l!=null&&s.push(Pa(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var I3=/\r\n?/g,B3=/\u0000|\uFFFD/g;function Wx(e){return(typeof e=="string"?e:""+e).replace(I3,`
`).replace(B3,"")}function jl(e,t,n){if(t=Wx(t),Wx(e)!==t&&n)throw Error(I(425))}function pu(){}var xp=null,yp=null;function vp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bp=typeof setTimeout=="function"?setTimeout:void 0,W3=typeof clearTimeout=="function"?clearTimeout:void 0,Ux=typeof Promise=="function"?Promise:void 0,U3=typeof queueMicrotask=="function"?queueMicrotask:typeof Ux<"u"?function(e){return Ux.resolve(null).then(e).catch(V3)}:bp;function V3(e){setTimeout(function(){throw e})}function Ef(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Aa(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(t)}function qi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vx(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ds=Math.random().toString(36).slice(2),Un="__reactFiber$"+ds,ja="__reactProps$"+ds,bi="__reactContainer$"+ds,wp="__reactEvents$"+ds,H3="__reactListeners$"+ds,$3="__reactHandles$"+ds;function Mr(e){var t=e[Un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bi]||n[Un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vx(e);e!==null;){if(n=e[Un])return n;e=Vx(e)}return t}e=n,n=e.parentNode}return null}function ol(e){return e=e[Un]||e[bi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function So(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ud(e){return e[ja]||null}var kp=[],Co=-1;function gr(e){return{current:e}}function Fe(e){0>Co||(e.current=kp[Co],kp[Co]=null,Co--)}function Me(e,t){Co++,kp[Co]=e.current,e.current=t}var cr={},_t=gr(cr),Wt=gr(!1),Vr=cr;function Go(e,t){var n=e.type.contextTypes;if(!n)return cr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ut(e){return e=e.childContextTypes,e!=null}function mu(){Fe(Wt),Fe(_t)}function Hx(e,t,n){if(_t.current!==cr)throw Error(I(168));Me(_t,t),Me(Wt,n)}function l2(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(I(108,PA(e)||"Unknown",r));return Xe({},n,i)}function gu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Vr=_t.current,Me(_t,e),Me(Wt,Wt.current),!0}function $x(e,t,n){var i=e.stateNode;if(!i)throw Error(I(169));n?(e=l2(e,t,Vr),i.__reactInternalMemoizedMergedChildContext=e,Fe(Wt),Fe(_t),Me(_t,e)):Fe(Wt),Me(Wt,n)}var ci=null,dd=!1,_f=!1;function c2(e){ci===null?ci=[e]:ci.push(e)}function G3(e){dd=!0,c2(e)}function xr(){if(!_f&&ci!==null){_f=!0;var e=0,t=Ae;try{var n=ci;for(Ae=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}ci=null,dd=!1}catch(r){throw ci!==null&&(ci=ci.slice(e+1)),Nw(tg,xr),r}finally{Ae=t,_f=!1}}return null}var Ao=[],Eo=0,xu=null,yu=0,fn=[],hn=0,Hr=null,di=1,fi="";function Er(e,t){Ao[Eo++]=yu,Ao[Eo++]=xu,xu=e,yu=t}function u2(e,t,n){fn[hn++]=di,fn[hn++]=fi,fn[hn++]=Hr,Hr=e;var i=di;e=fi;var r=32-Pn(i)-1;i&=~(1<<r),n+=1;var o=32-Pn(t)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,di=1<<32-Pn(t)+r|n<<r|i,fi=o+e}else di=1<<o|n<<r|i,fi=e}function ug(e){e.return!==null&&(Er(e,1),u2(e,1,0))}function dg(e){for(;e===xu;)xu=Ao[--Eo],Ao[Eo]=null,yu=Ao[--Eo],Ao[Eo]=null;for(;e===Hr;)Hr=fn[--hn],fn[hn]=null,fi=fn[--hn],fn[hn]=null,di=fn[--hn],fn[hn]=null}var qt=null,Kt=null,Ue=!1,An=null;function d2(e,t){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gx(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Kt=qi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hr!==null?{id:di,overflow:fi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,Kt=null,!0):!1;default:return!1}}function Sp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cp(e){if(Ue){var t=Kt;if(t){var n=t;if(!Gx(e,t)){if(Sp(e))throw Error(I(418));t=qi(n.nextSibling);var i=qt;t&&Gx(e,t)?d2(i,n):(e.flags=e.flags&-4097|2,Ue=!1,qt=e)}}else{if(Sp(e))throw Error(I(418));e.flags=e.flags&-4097|2,Ue=!1,qt=e}}}function Yx(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function Ol(e){if(e!==qt)return!1;if(!Ue)return Yx(e),Ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vp(e.type,e.memoizedProps)),t&&(t=Kt)){if(Sp(e))throw f2(),Error(I(418));for(;t;)d2(e,t),t=qi(t.nextSibling)}if(Yx(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Kt=qi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=qt?qi(e.stateNode.nextSibling):null;return!0}function f2(){for(var e=Kt;e;)e=qi(e.nextSibling)}function Yo(){Kt=qt=null,Ue=!1}function fg(e){An===null?An=[e]:An.push(e)}var Y3=Ai.ReactCurrentBatchConfig;function Sn(e,t){if(e&&e.defaultProps){t=Xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vu=gr(null),bu=null,_o=null,hg=null;function pg(){hg=_o=bu=null}function mg(e){var t=vu.current;Fe(vu),e._currentValue=t}function Ap(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Uo(e,t){bu=e,hg=_o=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(zt=!0),e.firstContext=null)}function xn(e){var t=e._currentValue;if(hg!==e)if(e={context:e,memoizedValue:t,next:null},_o===null){if(bu===null)throw Error(I(308));_o=e,bu.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var Rr=null;function gg(e){Rr===null?Rr=[e]:Rr.push(e)}function h2(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,gg(t)):(n.next=r.next,r.next=n),t.interleaved=n,wi(e,i)}function wi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Li=!1;function xg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function er(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ve&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,wi(e,n)}return r=i.interleaved,r===null?(t.next=t,gg(i)):(t.next=r.next,r.next=t),i.interleaved=t,wi(e,n)}function Tc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ng(e,n)}}function Xx(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wu(e,t,n,i){var r=e.updateQueue;Li=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,u=c=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,m=a;switch(f=t,p=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Xe({},d,f);break e;case 2:Li=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,t=r.shared.interleaved,t!==null){r=t;do s|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Gr|=s,e.lanes=s,e.memoizedState=d}}function Kx(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(I(191,r));r.call(i)}}}var m2=new hw.Component().refs;function Ep(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fd={isMounted:function(e){return(e=e._reactInternals)?eo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=jt(),r=nr(e),o=xi(i,r);o.payload=t,n!=null&&(o.callback=n),t=er(e,o,r),t!==null&&(jn(t,e,r,i),Tc(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=jt(),r=nr(e),o=xi(i,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=er(e,o,r),t!==null&&(jn(t,e,r,i),Tc(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),i=nr(e),r=xi(n,i);r.tag=2,t!=null&&(r.callback=t),t=er(e,r,i),t!==null&&(jn(t,e,i,n),Tc(t,e,i))}};function Qx(e,t,n,i,r,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,s):t.prototype&&t.prototype.isPureReactComponent?!_a(n,i)||!_a(r,o):!0}function g2(e,t,n){var i=!1,r=cr,o=t.contextType;return typeof o=="object"&&o!==null?o=xn(o):(r=Ut(t)?Vr:_t.current,i=t.contextTypes,o=(i=i!=null)?Go(e,r):cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fd,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zx(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&fd.enqueueReplaceState(t,t.state,null)}function _p(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=m2,xg(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=xn(o):(o=Ut(t)?Vr:_t.current,r.context=Go(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ep(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&fd.enqueueReplaceState(r,r.state,null),wu(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function _s(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var i=n.stateNode}if(!i)throw Error(I(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=r.refs;a===m2&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function Ml(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jx(e){var t=e._init;return t(e._payload)}function x2(e){function t(x,y){if(e){var b=x.deletions;b===null?(x.deletions=[y],x.flags|=16):b.push(y)}}function n(x,y){if(!e)return null;for(;y!==null;)t(x,y),y=y.sibling;return null}function i(x,y){for(x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function r(x,y){return x=ir(x,y),x.index=0,x.sibling=null,x}function o(x,y,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<y?(x.flags|=2,y):b):(x.flags|=2,y)):(x.flags|=1048576,y)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,y,b,k){return y===null||y.tag!==6?(y=Nf(b,x.mode,k),y.return=x,y):(y=r(y,b),y.return=x,y)}function l(x,y,b,k){var S=b.type;return S===vo?u(x,y,b.props.children,k,b.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Di&&Jx(S)===y.type)?(k=r(y,b.props),k.ref=_s(x,y,b),k.return=x,k):(k=Nc(b.type,b.key,b.props,null,x.mode,k),k.ref=_s(x,y,b),k.return=x,k)}function c(x,y,b,k){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=Df(b,x.mode,k),y.return=x,y):(y=r(y,b.children||[]),y.return=x,y)}function u(x,y,b,k,S){return y===null||y.tag!==7?(y=Fr(b,x.mode,k,S),y.return=x,y):(y=r(y,b),y.return=x,y)}function d(x,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Nf(""+y,x.mode,b),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:return b=Nc(y.type,y.key,y.props,null,x.mode,b),b.ref=_s(x,null,y),b.return=x,b;case yo:return y=Df(y,x.mode,b),y.return=x,y;case Di:var k=y._init;return d(x,k(y._payload),b)}if(Vs(y)||ks(y))return y=Fr(y,x.mode,b,null),y.return=x,y;Ml(x,y)}return null}function f(x,y,b,k){var S=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return S!==null?null:a(x,y,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wl:return b.key===S?l(x,y,b,k):null;case yo:return b.key===S?c(x,y,b,k):null;case Di:return S=b._init,f(x,y,S(b._payload),k)}if(Vs(b)||ks(b))return S!==null?null:u(x,y,b,k,null);Ml(x,b)}return null}function p(x,y,b,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(b)||null,a(y,x,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case wl:return x=x.get(k.key===null?b:k.key)||null,l(y,x,k,S);case yo:return x=x.get(k.key===null?b:k.key)||null,c(y,x,k,S);case Di:var E=k._init;return p(x,y,b,E(k._payload),S)}if(Vs(k)||ks(k))return x=x.get(b)||null,u(y,x,k,S,null);Ml(y,k)}return null}function g(x,y,b,k){for(var S=null,E=null,C=y,j=y=0,T=null;C!==null&&j<b.length;j++){C.index>j?(T=C,C=null):T=C.sibling;var z=f(x,C,b[j],k);if(z===null){C===null&&(C=T);break}e&&C&&z.alternate===null&&t(x,C),y=o(z,y,j),E===null?S=z:E.sibling=z,E=z,C=T}if(j===b.length)return n(x,C),Ue&&Er(x,j),S;if(C===null){for(;j<b.length;j++)C=d(x,b[j],k),C!==null&&(y=o(C,y,j),E===null?S=C:E.sibling=C,E=C);return Ue&&Er(x,j),S}for(C=i(x,C);j<b.length;j++)T=p(C,x,j,b[j],k),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?j:T.key),y=o(T,y,j),E===null?S=T:E.sibling=T,E=T);return e&&C.forEach(function(U){return t(x,U)}),Ue&&Er(x,j),S}function m(x,y,b,k){var S=ks(b);if(typeof S!="function")throw Error(I(150));if(b=S.call(b),b==null)throw Error(I(151));for(var E=S=null,C=y,j=y=0,T=null,z=b.next();C!==null&&!z.done;j++,z=b.next()){C.index>j?(T=C,C=null):T=C.sibling;var U=f(x,C,z.value,k);if(U===null){C===null&&(C=T);break}e&&C&&U.alternate===null&&t(x,C),y=o(U,y,j),E===null?S=U:E.sibling=U,E=U,C=T}if(z.done)return n(x,C),Ue&&Er(x,j),S;if(C===null){for(;!z.done;j++,z=b.next())z=d(x,z.value,k),z!==null&&(y=o(z,y,j),E===null?S=z:E.sibling=z,E=z);return Ue&&Er(x,j),S}for(C=i(x,C);!z.done;j++,z=b.next())z=p(C,x,j,z.value,k),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?j:z.key),y=o(z,y,j),E===null?S=z:E.sibling=z,E=z);return e&&C.forEach(function(q){return t(x,q)}),Ue&&Er(x,j),S}function v(x,y,b,k){if(typeof b=="object"&&b!==null&&b.type===vo&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case wl:e:{for(var S=b.key,E=y;E!==null;){if(E.key===S){if(S=b.type,S===vo){if(E.tag===7){n(x,E.sibling),y=r(E,b.props.children),y.return=x,x=y;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Di&&Jx(S)===E.type){n(x,E.sibling),y=r(E,b.props),y.ref=_s(x,E,b),y.return=x,x=y;break e}n(x,E);break}else t(x,E);E=E.sibling}b.type===vo?(y=Fr(b.props.children,x.mode,k,b.key),y.return=x,x=y):(k=Nc(b.type,b.key,b.props,null,x.mode,k),k.ref=_s(x,y,b),k.return=x,x=k)}return s(x);case yo:e:{for(E=b.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(x,y.sibling),y=r(y,b.children||[]),y.return=x,x=y;break e}else{n(x,y);break}else t(x,y);y=y.sibling}y=Df(b,x.mode,k),y.return=x,x=y}return s(x);case Di:return E=b._init,v(x,y,E(b._payload),k)}if(Vs(b))return g(x,y,b,k);if(ks(b))return m(x,y,b,k);Ml(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,y!==null&&y.tag===6?(n(x,y.sibling),y=r(y,b),y.return=x,x=y):(n(x,y),y=Nf(b,x.mode,k),y.return=x,x=y),s(x)):n(x,y)}return v}var Xo=x2(!0),y2=x2(!1),sl={},Yn=gr(sl),Oa=gr(sl),Ma=gr(sl);function Nr(e){if(e===sl)throw Error(I(174));return e}function yg(e,t){switch(Me(Ma,t),Me(Oa,e),Me(Yn,sl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:op(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=op(t,e)}Fe(Yn),Me(Yn,t)}function Ko(){Fe(Yn),Fe(Oa),Fe(Ma)}function v2(e){Nr(Ma.current);var t=Nr(Yn.current),n=op(t,e.type);t!==n&&(Me(Oa,e),Me(Yn,n))}function vg(e){Oa.current===e&&(Fe(Yn),Fe(Oa))}var Ge=gr(0);function ku(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tf=[];function bg(){for(var e=0;e<Tf.length;e++)Tf[e]._workInProgressVersionPrimary=null;Tf.length=0}var Pc=Ai.ReactCurrentDispatcher,Pf=Ai.ReactCurrentBatchConfig,$r=0,Ye=null,at=null,ut=null,Su=!1,ra=!1,Ra=0,X3=0;function kt(){throw Error(I(321))}function wg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nn(e[n],t[n]))return!1;return!0}function kg(e,t,n,i,r,o){if($r=o,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pc.current=e===null||e.memoizedState===null?J3:q3,e=n(i,r),ra){o=0;do{if(ra=!1,Ra=0,25<=o)throw Error(I(301));o+=1,ut=at=null,t.updateQueue=null,Pc.current=eE,e=n(i,r)}while(ra)}if(Pc.current=Cu,t=at!==null&&at.next!==null,$r=0,ut=at=Ye=null,Su=!1,t)throw Error(I(300));return e}function Sg(){var e=Ra!==0;return Ra=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ye.memoizedState=ut=e:ut=ut.next=e,ut}function yn(){if(at===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var t=ut===null?Ye.memoizedState:ut.next;if(t!==null)ut=t,at=e;else{if(e===null)throw Error(I(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ut===null?Ye.memoizedState=ut=e:ut=ut.next=e}return ut}function Na(e,t){return typeof t=="function"?t(e):t}function jf(e){var t=yn(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var i=at,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:e(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,Ye.lanes|=u,Gr|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Nn(i,t.memoizedState)||(zt=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do o=r.lane,Ye.lanes|=o,Gr|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Of(e){var t=yn(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=e(o,s.action),s=s.next;while(s!==r);Nn(o,t.memoizedState)||(zt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function b2(){}function w2(e,t){var n=Ye,i=yn(),r=t(),o=!Nn(i.memoizedState,r);if(o&&(i.memoizedState=r,zt=!0),i=i.queue,Cg(C2.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Da(9,S2.bind(null,n,i,r,t),void 0,null),ht===null)throw Error(I(349));$r&30||k2(n,t,r)}return r}function k2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function S2(e,t,n,i){t.value=n,t.getSnapshot=i,A2(t)&&E2(e)}function C2(e,t,n){return n(function(){A2(t)&&E2(e)})}function A2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nn(e,n)}catch{return!0}}function E2(e){var t=wi(e,1);t!==null&&jn(t,e,1,-1)}function qx(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},t.queue=e,e=e.dispatch=Z3.bind(null,Ye,e),[t.memoizedState,e]}function Da(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function _2(){return yn().memoizedState}function jc(e,t,n,i){var r=zn();Ye.flags|=e,r.memoizedState=Da(1|t,n,void 0,i===void 0?null:i)}function hd(e,t,n,i){var r=yn();i=i===void 0?null:i;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,i!==null&&wg(i,s.deps)){r.memoizedState=Da(t,n,o,i);return}}Ye.flags|=e,r.memoizedState=Da(1|t,n,o,i)}function ey(e,t){return jc(8390656,8,e,t)}function Cg(e,t){return hd(2048,8,e,t)}function T2(e,t){return hd(4,2,e,t)}function P2(e,t){return hd(4,4,e,t)}function j2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function O2(e,t,n){return n=n!=null?n.concat([e]):null,hd(4,4,j2.bind(null,t,e),n)}function Ag(){}function M2(e,t){var n=yn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&wg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function R2(e,t){var n=yn();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&wg(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function N2(e,t,n){return $r&21?(Nn(n,t)||(n=Fw(),Ye.lanes|=n,Gr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=n)}function K3(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var i=Pf.transition;Pf.transition={};try{e(!1),t()}finally{Ae=n,Pf.transition=i}}function D2(){return yn().memoizedState}function Q3(e,t,n){var i=nr(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},L2(e))F2(t,n);else if(n=h2(e,t,n,i),n!==null){var r=jt();jn(n,e,i,r),z2(n,t,i)}}function Z3(e,t,n){var i=nr(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(L2(e))F2(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,s)){var l=t.interleaved;l===null?(r.next=r,gg(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=h2(e,t,r,i),n!==null&&(r=jt(),jn(n,e,i,r),z2(n,t,i))}}function L2(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function F2(e,t){ra=Su=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function z2(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ng(e,n)}}var Cu={readContext:xn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},J3={readContext:xn,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:xn,useEffect:ey,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jc(4194308,4,j2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jc(4194308,4,e,t)},useInsertionEffect:function(e,t){return jc(4,2,e,t)},useMemo:function(e,t){var n=zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=zn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Q3.bind(null,Ye,e),[i.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:qx,useDebugValue:Ag,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=qx(!1),t=e[0];return e=K3.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ye,r=zn();if(Ue){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ht===null)throw Error(I(349));$r&30||k2(i,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,ey(C2.bind(null,i,o,e),[e]),i.flags|=2048,Da(9,S2.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=zn(),t=ht.identifierPrefix;if(Ue){var n=fi,i=di;n=(i&~(1<<32-Pn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X3++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},q3={readContext:xn,useCallback:M2,useContext:xn,useEffect:Cg,useImperativeHandle:O2,useInsertionEffect:T2,useLayoutEffect:P2,useMemo:R2,useReducer:jf,useRef:_2,useState:function(){return jf(Na)},useDebugValue:Ag,useDeferredValue:function(e){var t=yn();return N2(t,at.memoizedState,e)},useTransition:function(){var e=jf(Na)[0],t=yn().memoizedState;return[e,t]},useMutableSource:b2,useSyncExternalStore:w2,useId:D2,unstable_isNewReconciler:!1},eE={readContext:xn,useCallback:M2,useContext:xn,useEffect:Cg,useImperativeHandle:O2,useInsertionEffect:T2,useLayoutEffect:P2,useMemo:R2,useReducer:Of,useRef:_2,useState:function(){return Of(Na)},useDebugValue:Ag,useDeferredValue:function(e){var t=yn();return at===null?t.memoizedState=e:N2(t,at.memoizedState,e)},useTransition:function(){var e=Of(Na)[0],t=yn().memoizedState;return[e,t]},useMutableSource:b2,useSyncExternalStore:w2,useId:D2,unstable_isNewReconciler:!1};function Qo(e,t){try{var n="",i=t;do n+=TA(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Mf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tE=typeof WeakMap=="function"?WeakMap:Map;function I2(e,t,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Eu||(Eu=!0,zp=i),Tp(e,t)},n}function B2(e,t,n){n=xi(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){Tp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tp(e,t),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ty(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new tE;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=mE.bind(null,e,t,n),t.then(e,e))}function ny(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function iy(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xi(-1,1),t.tag=2,er(n,t,1))),n.lanes|=1),e)}var nE=Ai.ReactCurrentOwner,zt=!1;function Pt(e,t,n,i){t.child=e===null?y2(t,null,n,i):Xo(t,e.child,n,i)}function ry(e,t,n,i,r){n=n.render;var o=t.ref;return Uo(t,r),i=kg(e,t,n,i,o,r),n=Sg(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ki(e,t,r)):(Ue&&n&&ug(t),t.flags|=1,Pt(e,t,i,r),t.child)}function oy(e,t,n,i,r){if(e===null){var o=n.type;return typeof o=="function"&&!Rg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,W2(e,t,o,i,r)):(e=Nc(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(s,i)&&e.ref===t.ref)return ki(e,t,r)}return t.flags|=1,e=ir(o,i),e.ref=t.ref,e.return=t,t.child=e}function W2(e,t,n,i,r){if(e!==null){var o=e.memoizedProps;if(_a(o,i)&&e.ref===t.ref)if(zt=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(zt=!0);else return t.lanes=e.lanes,ki(e,t,r)}return Pp(e,t,n,i,r)}function U2(e,t,n){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Po,Gt),Gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Po,Gt),Gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Me(Po,Gt),Gt|=i}else o!==null?(i=o.baseLanes|n,t.memoizedState=null):i=n,Me(Po,Gt),Gt|=i;return Pt(e,t,r,n),t.child}function V2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pp(e,t,n,i,r){var o=Ut(n)?Vr:_t.current;return o=Go(t,o),Uo(t,r),n=kg(e,t,n,i,o,r),i=Sg(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,ki(e,t,r)):(Ue&&i&&ug(t),t.flags|=1,Pt(e,t,n,r),t.child)}function sy(e,t,n,i,r){if(Ut(n)){var o=!0;gu(t)}else o=!1;if(Uo(t,r),t.stateNode===null)Oc(e,t),g2(t,n,i),_p(t,n,i,r),i=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=xn(c):(c=Ut(n)?Vr:_t.current,c=Go(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Zx(t,s,i,c),Li=!1;var f=t.memoizedState;s.state=f,wu(t,i,s,r),l=t.memoizedState,a!==i||f!==l||Wt.current||Li?(typeof u=="function"&&(Ep(t,n,u,i),l=t.memoizedState),(a=Li||Qx(t,n,a,i,f,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,p2(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Sn(t.type,a),s.props=c,d=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=Ut(n)?Vr:_t.current,l=Go(t,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zx(t,s,i,l),Li=!1,f=t.memoizedState,s.state=f,wu(t,i,s,r);var g=t.memoizedState;a!==d||f!==g||Wt.current||Li?(typeof p=="function"&&(Ep(t,n,p,i),g=t.memoizedState),(c=Li||Qx(t,n,c,i,f,g,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),s.props=i,s.state=g,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return jp(e,t,n,i,o,r)}function jp(e,t,n,i,r,o){V2(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return r&&$x(t,n,!1),ki(e,t,o);i=t.stateNode,nE.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=Xo(t,e.child,null,o),t.child=Xo(t,null,a,o)):Pt(e,t,a,o),t.memoizedState=i.state,r&&$x(t,n,!0),t.child}function H2(e){var t=e.stateNode;t.pendingContext?Hx(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hx(e,t.context,!1),yg(e,t.containerInfo)}function ay(e,t,n,i,r){return Yo(),fg(r),t.flags|=256,Pt(e,t,n,i),t.child}var Op={dehydrated:null,treeContext:null,retryLane:0};function Mp(e){return{baseLanes:e,cachePool:null,transitions:null}}function $2(e,t,n){var i=t.pendingProps,r=Ge.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(r&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Me(Ge,r&1),e===null)return Cp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,o?(i=t.mode,o=t.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gd(s,i,0,null),e=Fr(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mp(n),t.memoizedState=Op,e):Eg(t,s));if(r=e.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iE(e,t,s,i,a,r,n);if(o){o=i.fallback,s=t.mode,r=e.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=ir(a,o):(o=Fr(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,s=e.child.memoizedState,s=s===null?Mp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Op,i}return o=e.child,e=o.sibling,i=ir(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Eg(e,t){return t=gd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rl(e,t,n,i){return i!==null&&fg(i),Xo(t,e.child,null,n),e=Eg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iE(e,t,n,i,r,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Mf(Error(I(422))),Rl(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=gd({mode:"visible",children:i.children},r,0,null),o=Fr(o,r,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Xo(t,e.child,null,s),t.child.memoizedState=Mp(s),t.memoizedState=Op,o);if(!(t.mode&1))return Rl(e,t,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(I(419)),i=Mf(o,i,void 0),Rl(e,t,s,i)}if(a=(s&e.childLanes)!==0,zt||a){if(i=ht,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,wi(e,r),jn(i,e,r,-1))}return Mg(),i=Mf(Error(I(421))),Rl(e,t,s,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=gE.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,Kt=qi(r.nextSibling),qt=t,Ue=!0,An=null,e!==null&&(fn[hn++]=di,fn[hn++]=fi,fn[hn++]=Hr,di=e.id,fi=e.overflow,Hr=t),t=Eg(t,i.children),t.flags|=4096,t)}function ly(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ap(e.return,t,n)}function Rf(e,t,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function G2(e,t,n){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(Pt(e,t,i.children,n),i=Ge.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ly(e,n,t);else if(e.tag===19)ly(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Me(Ge,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ku(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Rf(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ku(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Rf(t,!0,n,null,o);break;case"together":Rf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ki(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rE(e,t,n){switch(t.tag){case 3:H2(t),Yo();break;case 5:v2(t);break;case 1:Ut(t.type)&&gu(t);break;case 4:yg(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;Me(vu,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Me(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?$2(e,t,n):(Me(Ge,Ge.current&1),e=ki(e,t,n),e!==null?e.sibling:null);Me(Ge,Ge.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return G2(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Me(Ge,Ge.current),i)break;return null;case 22:case 23:return t.lanes=0,U2(e,t,n)}return ki(e,t,n)}var Y2,Rp,X2,K2;Y2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rp=function(){};X2=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Nr(Yn.current);var o=null;switch(n){case"input":r=tp(e,r),i=tp(e,i),o=[];break;case"select":r=Xe({},r,{value:void 0}),i=Xe({},i,{value:void 0}),o=[];break;case"textarea":r=rp(e,r),i=rp(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=pu)}sp(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ba.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};K2=function(e,t,n,i){n!==i&&(t.flags|=4)};function Ts(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function oE(e,t,n){var i=t.pendingProps;switch(dg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Ut(t.type)&&mu(),St(t),null;case 3:return i=t.stateNode,Ko(),Fe(Wt),Fe(_t),bg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,An!==null&&(Wp(An),An=null))),Rp(e,t),St(t),null;case 5:vg(t);var r=Nr(Ma.current);if(n=t.type,e!==null&&t.stateNode!=null)X2(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(I(166));return St(t),null}if(e=Nr(Yn.current),Ol(t)){i=t.stateNode,n=t.type;var o=t.memoizedProps;switch(i[Un]=t,i[ja]=o,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)Re($s[r],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":xx(i,o),Re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Re("invalid",i);break;case"textarea":vx(i,o),Re("invalid",i)}sp(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&jl(i.textContent,a,e),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&jl(i.textContent,a,e),r=["children",""+a]):ba.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",i)}switch(n){case"input":kl(i),yx(i,o,!0);break;case"textarea":kl(i),bx(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=pu)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kw(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(n,{is:i.is}):(e=s.createElement(n),n==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,n),e[Un]=t,e[ja]=i,Y2(e,t,!1,!1),t.stateNode=e;e:{switch(s=ap(n,i),n){case"dialog":Re("cancel",e),Re("close",e),r=i;break;case"iframe":case"object":case"embed":Re("load",e),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)Re($s[r],e);r=i;break;case"source":Re("error",e),r=i;break;case"img":case"image":case"link":Re("error",e),Re("load",e),r=i;break;case"details":Re("toggle",e),r=i;break;case"input":xx(e,i),r=tp(e,i),Re("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=Xe({},i,{value:void 0}),Re("invalid",e);break;case"textarea":vx(e,i),r=rp(e,i),Re("invalid",e);break;default:r=i}sp(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Aw(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sw(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(e,l):typeof l=="number"&&wa(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ba.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Re("scroll",e):l!=null&&Qm(e,o,l,s))}switch(n){case"input":kl(e),yx(e,i,!1);break;case"textarea":kl(e),bx(e);break;case"option":i.value!=null&&e.setAttribute("value",""+lr(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?zo(e,!!i.multiple,o,!1):i.defaultValue!=null&&zo(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=pu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)K2(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(I(166));if(n=Nr(Ma.current),Nr(Yn.current),Ol(t)){if(i=t.stateNode,n=t.memoizedProps,i[Un]=t,(o=i.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:jl(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jl(i.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Un]=t,t.stateNode=i}return St(t),null;case 13:if(Fe(Ge),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&Kt!==null&&t.mode&1&&!(t.flags&128))f2(),Yo(),t.flags|=98560,o=!1;else if(o=Ol(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[Un]=t}else Yo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),o=!1}else An!==null&&(Wp(An),An=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?lt===0&&(lt=3):Mg())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Ko(),Rp(e,t),e===null&&Ta(t.stateNode.containerInfo),St(t),null;case 10:return mg(t.type._context),St(t),null;case 17:return Ut(t.type)&&mu(),St(t),null;case 19:if(Fe(Ge),o=t.memoizedState,o===null)return St(t),null;if(i=(t.flags&128)!==0,s=o.rendering,s===null)if(i)Ts(o,!1);else{if(lt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ku(e),s!==null){for(t.flags|=128,Ts(o,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)o=n,e=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Ge,Ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&Je()>Zo&&(t.flags|=128,i=!0,Ts(o,!1),t.lanes=4194304)}else{if(!i)if(e=ku(s),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ts(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ue)return St(t),null}else 2*Je()-o.renderingStartTime>Zo&&n!==1073741824&&(t.flags|=128,i=!0,Ts(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,n=Ge.current,Me(Ge,i?n&1|2:n&1),t):(St(t),null);case 22:case 23:return Og(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function sE(e,t){switch(dg(t),t.tag){case 1:return Ut(t.type)&&mu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ko(),Fe(Wt),Fe(_t),bg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vg(t),null;case 13:if(Fe(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Yo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ge),null;case 4:return Ko(),null;case 10:return mg(t.type._context),null;case 22:case 23:return Og(),null;case 24:return null;default:return null}}var Nl=!1,At=!1,aE=typeof WeakSet=="function"?WeakSet:Set,K=null;function To(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ke(e,t,i)}else n.current=null}function Np(e,t,n){try{n()}catch(i){Ke(e,t,i)}}var cy=!1;function lE(e,t){if(xp=du,e=qw(),cg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++c===r&&(a=s),f===o&&++u===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yp={focusedElem:e,selectionRange:n},du=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,v=g.memoizedState,x=t.stateNode,y=x.getSnapshotBeforeUpdate(t.elementType===t.type?m:Sn(t.type,m),v);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(k){Ke(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return g=cy,cy=!1,g}function oa(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Np(t,n,o)}r=r.next}while(r!==i)}}function pd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Dp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Q2(e){var t=e.alternate;t!==null&&(e.alternate=null,Q2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Un],delete t[ja],delete t[wp],delete t[H3],delete t[$3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Z2(e){return e.tag===5||e.tag===3||e.tag===4}function uy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Z2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pu));else if(i!==4&&(e=e.child,e!==null))for(Lp(e,t,n),e=e.sibling;e!==null;)Lp(e,t,n),e=e.sibling}function Fp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Fp(e,t,n),e=e.sibling;e!==null;)Fp(e,t,n),e=e.sibling}var xt=null,Cn=!1;function ji(e,t,n){for(n=n.child;n!==null;)J2(e,t,n),n=n.sibling}function J2(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(sd,n)}catch{}switch(n.tag){case 5:At||To(n,t);case 6:var i=xt,r=Cn;xt=null,ji(e,t,n),xt=i,Cn=r,xt!==null&&(Cn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Cn?(e=xt,n=n.stateNode,e.nodeType===8?Ef(e.parentNode,n):e.nodeType===1&&Ef(e,n),Aa(e)):Ef(xt,n.stateNode));break;case 4:i=xt,r=Cn,xt=n.stateNode.containerInfo,Cn=!0,ji(e,t,n),xt=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!At&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Np(n,t,s),r=r.next}while(r!==i)}ji(e,t,n);break;case 1:if(!At&&(To(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ke(n,t,a)}ji(e,t,n);break;case 21:ji(e,t,n);break;case 22:n.mode&1?(At=(i=At)||n.memoizedState!==null,ji(e,t,n),At=i):ji(e,t,n);break;default:ji(e,t,n)}}function dy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new aE),t.forEach(function(i){var r=xE.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:xt=a.stateNode,Cn=!1;break e;case 3:xt=a.stateNode.containerInfo,Cn=!0;break e;case 4:xt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(xt===null)throw Error(I(160));J2(o,s,r),xt=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ke(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)q2(t,e),t=t.sibling}function q2(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(t,e),Ln(e),i&4){try{oa(3,e,e.return),pd(3,e)}catch(m){Ke(e,e.return,m)}try{oa(5,e,e.return)}catch(m){Ke(e,e.return,m)}}break;case 1:wn(t,e),Ln(e),i&512&&n!==null&&To(n,n.return);break;case 5:if(wn(t,e),Ln(e),i&512&&n!==null&&To(n,n.return),e.flags&32){var r=e.stateNode;try{wa(r,"")}catch(m){Ke(e,e.return,m)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&bw(r,o),ap(a,s);var c=ap(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Aw(r,d):u==="dangerouslySetInnerHTML"?Sw(r,d):u==="children"?wa(r,d):Qm(r,u,d,c)}switch(a){case"input":np(r,o);break;case"textarea":ww(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?zo(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?zo(r,!!o.multiple,o.defaultValue,!0):zo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ja]=o}catch(m){Ke(e,e.return,m)}}break;case 6:if(wn(t,e),Ln(e),i&4){if(e.stateNode===null)throw Error(I(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(m){Ke(e,e.return,m)}}break;case 3:if(wn(t,e),Ln(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(t.containerInfo)}catch(m){Ke(e,e.return,m)}break;case 4:wn(t,e),Ln(e);break;case 13:wn(t,e),Ln(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Pg=Je())),i&4&&dy(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(At=(c=At)||u,wn(t,e),At=c):wn(t,e),Ln(e),i&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(K=e,u=e.child;u!==null;){for(d=K=u;K!==null;){switch(f=K,p=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:To(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{t=i,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){Ke(i,n,m)}}break;case 5:To(f,f.return);break;case 22:if(f.memoizedState!==null){hy(d);continue}}p!==null?(p.return=f,K=p):hy(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cw("display",s))}catch(m){Ke(e,e.return,m)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(m){Ke(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wn(t,e),Ln(e),i&4&&dy(e);break;case 21:break;default:wn(t,e),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Z2(n)){var i=n;break e}n=n.return}throw Error(I(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var o=uy(e);Fp(e,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=uy(e);Lp(e,a,s);break;default:throw Error(I(161))}}catch(l){Ke(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cE(e,t,n){K=e,ek(e)}function ek(e,t,n){for(var i=(e.mode&1)!==0;K!==null;){var r=K,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Nl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||At;a=Nl;var c=At;if(Nl=s,(At=l)&&!c)for(K=r;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?py(r):l!==null?(l.return=s,K=l):py(r);for(;o!==null;)K=o,ek(o),o=o.sibling;K=r,Nl=a,At=c}fy(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,K=o):fy(e)}}function fy(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:At||pd(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!At)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Sn(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kx(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kx(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}At||t.flags&512&&Dp(t)}catch(f){Ke(t,t.return,f)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function hy(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function py(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pd(4,t)}catch(l){Ke(t,n,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(l){Ke(t,r,l)}}var o=t.return;try{Dp(t)}catch(l){Ke(t,o,l)}break;case 5:var s=t.return;try{Dp(t)}catch(l){Ke(t,s,l)}}}catch(l){Ke(t,t.return,l)}if(t===e){K=null;break}var a=t.sibling;if(a!==null){a.return=t.return,K=a;break}K=t.return}}var uE=Math.ceil,Au=Ai.ReactCurrentDispatcher,_g=Ai.ReactCurrentOwner,mn=Ai.ReactCurrentBatchConfig,ve=0,ht=null,it=null,vt=0,Gt=0,Po=gr(0),lt=0,La=null,Gr=0,md=0,Tg=0,sa=null,Dt=null,Pg=0,Zo=1/0,ai=null,Eu=!1,zp=null,tr=null,Dl=!1,Wi=null,_u=0,aa=0,Ip=null,Mc=-1,Rc=0;function jt(){return ve&6?Je():Mc!==-1?Mc:Mc=Je()}function nr(e){return e.mode&1?ve&2&&vt!==0?vt&-vt:Y3.transition!==null?(Rc===0&&(Rc=Fw()),Rc):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:Hw(e.type)),e):1}function jn(e,t,n,i){if(50<aa)throw aa=0,Ip=null,Error(I(185));il(e,n,i),(!(ve&2)||e!==ht)&&(e===ht&&(!(ve&2)&&(md|=n),lt===4&&Ii(e,vt)),Vt(e,i),n===1&&ve===0&&!(t.mode&1)&&(Zo=Je()+500,dd&&xr()))}function Vt(e,t){var n=e.callbackNode;YA(e,t);var i=uu(e,e===ht?vt:0);if(i===0)n!==null&&Sx(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Sx(n),t===1)e.tag===0?G3(my.bind(null,e)):c2(my.bind(null,e)),U3(function(){!(ve&6)&&xr()}),n=null;else{switch(zw(i)){case 1:n=tg;break;case 4:n=Dw;break;case 16:n=cu;break;case 536870912:n=Lw;break;default:n=cu}n=lk(n,tk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tk(e,t){if(Mc=-1,Rc=0,ve&6)throw Error(I(327));var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var i=uu(e,e===ht?vt:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Tu(e,i);else{t=i;var r=ve;ve|=2;var o=ik();(ht!==e||vt!==t)&&(ai=null,Zo=Je()+500,Lr(e,t));do try{hE();break}catch(a){nk(e,a)}while(1);pg(),Au.current=o,ve=r,it!==null?t=0:(ht=null,vt=0,t=lt)}if(t!==0){if(t===2&&(r=fp(e),r!==0&&(i=r,t=Bp(e,r))),t===1)throw n=La,Lr(e,0),Ii(e,i),Vt(e,Je()),n;if(t===6)Ii(e,i);else{if(r=e.current.alternate,!(i&30)&&!dE(r)&&(t=Tu(e,i),t===2&&(o=fp(e),o!==0&&(i=o,t=Bp(e,o))),t===1))throw n=La,Lr(e,0),Ii(e,i),Vt(e,Je()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(I(345));case 2:_r(e,Dt,ai);break;case 3:if(Ii(e,i),(i&130023424)===i&&(t=Pg+500-Je(),10<t)){if(uu(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){jt(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=bp(_r.bind(null,e,Dt,ai),t);break}_r(e,Dt,ai);break;case 4:if(Ii(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var s=31-Pn(i);o=1<<s,s=t[s],s>r&&(r=s),i&=~o}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uE(i/1960))-i,10<i){e.timeoutHandle=bp(_r.bind(null,e,Dt,ai),i);break}_r(e,Dt,ai);break;case 5:_r(e,Dt,ai);break;default:throw Error(I(329))}}}return Vt(e,Je()),e.callbackNode===n?tk.bind(null,e):null}function Bp(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(Lr(e,t).flags|=256),e=Tu(e,t),e!==2&&(t=Dt,Dt=n,t!==null&&Wp(t)),e}function Wp(e){Dt===null?Dt=e:Dt.push.apply(Dt,e)}function dE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Nn(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ii(e,t){for(t&=~Tg,t&=~md,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pn(t),i=1<<n;e[n]=-1,t&=~i}}function my(e){if(ve&6)throw Error(I(327));Vo();var t=uu(e,0);if(!(t&1))return Vt(e,Je()),null;var n=Tu(e,t);if(e.tag!==0&&n===2){var i=fp(e);i!==0&&(t=i,n=Bp(e,i))}if(n===1)throw n=La,Lr(e,0),Ii(e,t),Vt(e,Je()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_r(e,Dt,ai),Vt(e,Je()),null}function jg(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(Zo=Je()+500,dd&&xr())}}function Yr(e){Wi!==null&&Wi.tag===0&&!(ve&6)&&Vo();var t=ve;ve|=1;var n=mn.transition,i=Ae;try{if(mn.transition=null,Ae=1,e)return e()}finally{Ae=i,mn.transition=n,ve=t,!(ve&6)&&xr()}}function Og(){Gt=Po.current,Fe(Po)}function Lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W3(n)),it!==null)for(n=it.return;n!==null;){var i=n;switch(dg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&mu();break;case 3:Ko(),Fe(Wt),Fe(_t),bg();break;case 5:vg(i);break;case 4:Ko();break;case 13:Fe(Ge);break;case 19:Fe(Ge);break;case 10:mg(i.type._context);break;case 22:case 23:Og()}n=n.return}if(ht=e,it=e=ir(e.current,null),vt=Gt=t,lt=0,La=null,Tg=md=Gr=0,Dt=sa=null,Rr!==null){for(t=0;t<Rr.length;t++)if(n=Rr[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Rr=null}return e}function nk(e,t){do{var n=it;try{if(pg(),Pc.current=Cu,Su){for(var i=Ye.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Su=!1}if($r=0,ut=at=Ye=null,ra=!1,Ra=0,_g.current=null,n===null||n.return===null){lt=1,La=t,it=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ny(s);if(p!==null){p.flags&=-257,iy(p,s,a,o,t),p.mode&1&&ty(o,c,t),t=p,l=c;var g=t.updateQueue;if(g===null){var m=new Set;m.add(l),t.updateQueue=m}else g.add(l);break e}else{if(!(t&1)){ty(o,c,t),Mg();break e}l=Error(I(426))}}else if(Ue&&a.mode&1){var v=ny(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),iy(v,s,a,o,t),fg(Qo(l,a));break e}}o=l=Qo(l,a),lt!==4&&(lt=2),sa===null?sa=[o]:sa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=I2(o,l,t);Xx(o,x);break e;case 1:a=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(tr===null||!tr.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=B2(o,a,t);Xx(o,k);break e}}o=o.return}while(o!==null)}ok(n)}catch(S){t=S,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function ik(){var e=Au.current;return Au.current=Cu,e===null?Cu:e}function Mg(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||!(Gr&268435455)&&!(md&268435455)||Ii(ht,vt)}function Tu(e,t){var n=ve;ve|=2;var i=ik();(ht!==e||vt!==t)&&(ai=null,Lr(e,t));do try{fE();break}catch(r){nk(e,r)}while(1);if(pg(),ve=n,Au.current=i,it!==null)throw Error(I(261));return ht=null,vt=0,lt}function fE(){for(;it!==null;)rk(it)}function hE(){for(;it!==null&&!zA();)rk(it)}function rk(e){var t=ak(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,t===null?ok(e):it=t,_g.current=null}function ok(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sE(n,t),n!==null){n.flags&=32767,it=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lt=6,it=null;return}}else if(n=oE(n,t,Gt),n!==null){it=n;return}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);lt===0&&(lt=5)}function _r(e,t,n){var i=Ae,r=mn.transition;try{mn.transition=null,Ae=1,pE(e,t,n,i)}finally{mn.transition=r,Ae=i}return null}function pE(e,t,n,i){do Vo();while(Wi!==null);if(ve&6)throw Error(I(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(XA(e,o),e===ht&&(it=ht=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dl||(Dl=!0,lk(cu,function(){return Vo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=mn.transition,mn.transition=null;var s=Ae;Ae=1;var a=ve;ve|=4,_g.current=null,lE(e,n),q2(n,e),N3(yp),du=!!xp,yp=xp=null,e.current=n,cE(n),IA(),ve=a,Ae=s,mn.transition=o}else e.current=n;if(Dl&&(Dl=!1,Wi=e,_u=r),o=e.pendingLanes,o===0&&(tr=null),UA(n.stateNode),Vt(e,Je()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Eu)throw Eu=!1,e=zp,zp=null,e;return _u&1&&e.tag!==0&&Vo(),o=e.pendingLanes,o&1?e===Ip?aa++:(aa=0,Ip=e):aa=0,xr(),null}function Vo(){if(Wi!==null){var e=zw(_u),t=mn.transition,n=Ae;try{if(mn.transition=null,Ae=16>e?16:e,Wi===null)var i=!1;else{if(e=Wi,Wi=null,_u=0,ve&6)throw Error(I(331));var r=ve;for(ve|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(K=c;K!==null;){var u=K;switch(u.tag){case 0:case 11:case 15:oa(8,u,o)}var d=u.child;if(d!==null)d.return=u,K=d;else for(;K!==null;){u=K;var f=u.sibling,p=u.return;if(Q2(u),u===c){K=null;break}if(f!==null){f.return=p,K=f;break}K=p}}}var g=o.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(m!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,K=x;break e}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else e:for(s=y;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pd(9,a)}}catch(S){Ke(a,a.return,S)}if(a===s){K=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,K=k;break e}K=a.return}}if(ve=r,xr(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(sd,e)}catch{}i=!0}return i}finally{Ae=n,mn.transition=t}}return!1}function gy(e,t,n){t=Qo(n,t),t=I2(e,t,1),e=er(e,t,1),t=jt(),e!==null&&(il(e,1,t),Vt(e,t))}function Ke(e,t,n){if(e.tag===3)gy(e,e,n);else for(;t!==null;){if(t.tag===3){gy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){e=Qo(n,e),e=B2(t,e,1),t=er(t,e,1),e=jt(),t!==null&&(il(t,1,e),Vt(t,e));break}}t=t.return}}function mE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(vt&n)===n&&(lt===4||lt===3&&(vt&130023424)===vt&&500>Je()-Pg?Lr(e,0):Tg|=n),Vt(e,t)}function sk(e,t){t===0&&(e.mode&1?(t=Al,Al<<=1,!(Al&130023424)&&(Al=4194304)):t=1);var n=jt();e=wi(e,t),e!==null&&(il(e,t,n),Vt(e,n))}function gE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sk(e,n)}function xE(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(I(314))}i!==null&&i.delete(t),sk(e,n)}var ak;ak=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Wt.current)zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return zt=!1,rE(e,t,n);zt=!!(e.flags&131072)}else zt=!1,Ue&&t.flags&1048576&&u2(t,yu,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Oc(e,t),e=t.pendingProps;var r=Go(t,_t.current);Uo(t,n),r=kg(null,t,i,e,r,n);var o=Sg();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ut(i)?(o=!0,gu(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xg(t),r.updater=fd,t.stateNode=r,r._reactInternals=t,_p(t,i,e,n),t=jp(null,t,i,!0,o,n)):(t.tag=0,Ue&&o&&ug(t),Pt(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Oc(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=vE(i),e=Sn(i,e),r){case 0:t=Pp(null,t,i,e,n);break e;case 1:t=sy(null,t,i,e,n);break e;case 11:t=ry(null,t,i,e,n);break e;case 14:t=oy(null,t,i,Sn(i.type,e),n);break e}throw Error(I(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Sn(i,r),Pp(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Sn(i,r),sy(e,t,i,r,n);case 3:e:{if(H2(t),e===null)throw Error(I(387));i=t.pendingProps,o=t.memoizedState,r=o.element,p2(e,t),wu(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=Qo(Error(I(423)),t),t=ay(e,t,i,n,r);break e}else if(i!==r){r=Qo(Error(I(424)),t),t=ay(e,t,i,n,r);break e}else for(Kt=qi(t.stateNode.containerInfo.firstChild),qt=t,Ue=!0,An=null,n=y2(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yo(),i===r){t=ki(e,t,n);break e}Pt(e,t,i,n)}t=t.child}return t;case 5:return v2(t),e===null&&Cp(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,s=r.children,vp(i,r)?s=null:o!==null&&vp(i,o)&&(t.flags|=32),V2(e,t),Pt(e,t,s,n),t.child;case 6:return e===null&&Cp(t),null;case 13:return $2(e,t,n);case 4:return yg(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Xo(t,null,i,n):Pt(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Sn(i,r),ry(e,t,i,r,n);case 7:return Pt(e,t,t.pendingProps,n),t.child;case 8:return Pt(e,t,t.pendingProps.children,n),t.child;case 12:return Pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,s=r.value,Me(vu,i._currentValue),i._currentValue=s,o!==null)if(Nn(o.value,s)){if(o.children===r.children&&!Wt.current){t=ki(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=xi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ap(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ap(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pt(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Uo(t,n),r=xn(r),i=i(r),t.flags|=1,Pt(e,t,i,n),t.child;case 14:return i=t.type,r=Sn(i,t.pendingProps),r=Sn(i.type,r),oy(e,t,i,r,n);case 15:return W2(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:Sn(i,r),Oc(e,t),t.tag=1,Ut(i)?(e=!0,gu(t)):e=!1,Uo(t,n),g2(t,i,r),_p(t,i,r,n),jp(null,t,i,!0,e,n);case 19:return G2(e,t,n);case 22:return U2(e,t,n)}throw Error(I(156,t.tag))};function lk(e,t){return Nw(e,t)}function yE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,t,n,i){return new yE(e,t,n,i)}function Rg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vE(e){if(typeof e=="function")return Rg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jm)return 11;if(e===qm)return 14}return 2}function ir(e,t){var n=e.alternate;return n===null?(n=pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nc(e,t,n,i,r,o){var s=2;if(i=e,typeof e=="function")Rg(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case vo:return Fr(n.children,r,o,t);case Zm:s=8,r|=8;break;case Zh:return e=pn(12,n,t,r|2),e.elementType=Zh,e.lanes=o,e;case Jh:return e=pn(13,n,t,r),e.elementType=Jh,e.lanes=o,e;case qh:return e=pn(19,n,t,r),e.elementType=qh,e.lanes=o,e;case xw:return gd(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mw:s=10;break e;case gw:s=9;break e;case Jm:s=11;break e;case qm:s=14;break e;case Di:s=16,i=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=pn(s,n,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Fr(e,t,n,i){return e=pn(7,e,i,t),e.lanes=n,e}function gd(e,t,n,i){return e=pn(22,e,i,t),e.elementType=xw,e.lanes=n,e.stateNode={isHidden:!1},e}function Nf(e,t,n){return e=pn(6,e,null,t),e.lanes=n,e}function Df(e,t,n){return t=pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bE(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ng(e,t,n,i,r,o,s,a,l){return e=new bE(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=pn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xg(o),e}function wE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function ck(e){if(!e)return cr;e=e._reactInternals;e:{if(eo(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ut(n))return l2(e,n,t)}return t}function uk(e,t,n,i,r,o,s,a,l){return e=Ng(n,i,!0,e,r,o,s,a,l),e.context=ck(null),n=e.current,i=jt(),r=nr(n),o=xi(i,r),o.callback=t??null,er(n,o,r),e.current.lanes=r,il(e,r,i),Vt(e,i),e}function xd(e,t,n,i){var r=t.current,o=jt(),s=nr(r);return n=ck(n),t.context===null?t.context=n:t.pendingContext=n,t=xi(o,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=er(r,t,s),e!==null&&(jn(e,r,s,o),Tc(e,r,s)),s}function Pu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dg(e,t){xy(e,t),(e=e.alternate)&&xy(e,t)}function kE(){return null}var dk=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lg(e){this._internalRoot=e}yd.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));xd(e,t,null,null)};yd.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){xd(null,e,null,null)}),t[bi]=null}};function yd(e){this._internalRoot=e}yd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ww();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zi.length&&t!==0&&t<zi[n].priority;n++);zi.splice(n,0,e),n===0&&Vw(e)}};function Fg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yy(){}function SE(e,t,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Pu(s);o.call(c)}}var s=uk(t,i,e,0,null,!1,!1,"",yy);return e._reactRootContainer=s,e[bi]=s.current,Ta(e.nodeType===8?e.parentNode:e),Yr(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pu(l);a.call(c)}}var l=Ng(e,0,!1,null,null,!1,!1,"",yy);return e._reactRootContainer=l,e[bi]=l.current,Ta(e.nodeType===8?e.parentNode:e),Yr(function(){xd(t,l,n,i)}),l}function bd(e,t,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Pu(s);a.call(l)}}xd(t,s,e,r)}else s=SE(n,t,e,r,i);return Pu(s)}Iw=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hs(t.pendingLanes);n!==0&&(ng(t,n|1),Vt(t,Je()),!(ve&6)&&(Zo=Je()+500,xr()))}break;case 13:Yr(function(){var i=wi(e,1);if(i!==null){var r=jt();jn(i,e,1,r)}}),Dg(e,1)}};ig=function(e){if(e.tag===13){var t=wi(e,134217728);if(t!==null){var n=jt();jn(t,e,134217728,n)}Dg(e,134217728)}};Bw=function(e){if(e.tag===13){var t=nr(e),n=wi(e,t);if(n!==null){var i=jt();jn(n,e,t,i)}Dg(e,t)}};Ww=function(){return Ae};Uw=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};cp=function(e,t,n){switch(t){case"input":if(np(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=ud(i);if(!r)throw Error(I(90));vw(i),np(i,r)}}}break;case"textarea":ww(e,n);break;case"select":t=n.value,t!=null&&zo(e,!!n.multiple,t,!1)}};Tw=jg;Pw=Yr;var CE={usingClientEntryPoint:!1,Events:[ol,So,ud,Ew,_w,jg]},Ps={findFiberByHostInstance:Mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},AE={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mw(e),e===null?null:e.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||kE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{sd=Ll.inject(AE),Gn=Ll}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE;rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fg(t))throw Error(I(200));return wE(e,t,null,n)};rn.createRoot=function(e,t){if(!Fg(e))throw Error(I(299));var n=!1,i="",r=dk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ng(e,1,!1,null,null,n,!1,i,r),e[bi]=t.current,Ta(e.nodeType===8?e.parentNode:e),new Lg(t)};rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Mw(t),e=e===null?null:e.stateNode,e};rn.flushSync=function(e){return Yr(e)};rn.hydrate=function(e,t,n){if(!vd(t))throw Error(I(200));return bd(null,e,t,!0,n)};rn.hydrateRoot=function(e,t,n){if(!Fg(e))throw Error(I(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=dk;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=uk(t,null,e,1,n??null,r,!1,o,s),e[bi]=t.current,Ta(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new yd(t)};rn.render=function(e,t,n){if(!vd(t))throw Error(I(200));return bd(null,e,t,!1,n)};rn.unmountComponentAtNode=function(e){if(!vd(e))throw Error(I(40));return e._reactRootContainer?(Yr(function(){bd(null,null,e,!1,function(){e._reactRootContainer=null,e[bi]=null})}),!0):!1};rn.unstable_batchedUpdates=jg;rn.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!vd(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return bd(e,t,n,!1,i)};rn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=rn})(kA);var vy=Xh;Yh.createRoot=vy.createRoot,Yh.hydrateRoot=vy.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Fa.apply(this,arguments)}var Ui;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ui||(Ui={}));const by="popstate";function EE(e){e===void 0&&(e={});function t(i,r){let{pathname:o,search:s,hash:a}=i.location;return Up("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ju(r)}return TE(t,n,null,e)}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _E(){return Math.random().toString(36).substr(2,8)}function wy(e,t){return{usr:e.state,key:e.key,idx:t}}function Up(e,t,n,i){return n===void 0&&(n=null),Fa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fs(t):t,{state:n,key:t&&t.key||i||_E()})}function ju(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function fs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function TE(e,t,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Ui.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Fa({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function d(){a=Ui.Pop;let v=u(),x=v==null?null:v-c;c=v,l&&l({action:a,location:m.location,delta:x})}function f(v,x){a=Ui.Push;let y=Up(m.location,v,x);n&&n(y,v),c=u()+1;let b=wy(y,c),k=m.createHref(y);try{s.pushState(b,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(k)}o&&l&&l({action:a,location:m.location,delta:1})}function p(v,x){a=Ui.Replace;let y=Up(m.location,v,x);n&&n(y,v),c=u();let b=wy(y,c),k=m.createHref(y);s.replaceState(b,"",k),o&&l&&l({action:a,location:m.location,delta:0})}function g(v){let x=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof v=="string"?v:ju(v);return et(x,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,x)}let m={get action(){return a},get location(){return e(r,s)},listen(v){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(by,d),l=v,()=>{r.removeEventListener(by,d),l=null}},createHref(v){return t(r,v)},createURL:g,encodeLocation(v){let x=g(v);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:p,go(v){return s.go(v)}};return m}var ky;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ky||(ky={}));function PE(e,t,n){n===void 0&&(n="/");let i=typeof t=="string"?fs(t):t,r=Ig(i.pathname||"/",n);if(r==null)return null;let o=fk(e);jE(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=IE(o[a],UE(r));return s}function fk(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=rr([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(et(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fk(o.children,t,u,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:FE(c,o.index),routesMeta:u})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of hk(o.path))r(o,s,l)}),t}function hk(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=hk(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function jE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zE(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const OE=/^:\w+$/,ME=3,RE=2,NE=1,DE=10,LE=-2,Sy=e=>e==="*";function FE(e,t){let n=e.split("/"),i=n.length;return n.some(Sy)&&(i+=LE),t&&(i+=RE),n.filter(r=>!Sy(r)).reduce((r,o)=>r+(OE.test(o)?ME:o===""?NE:DE),i)}function zE(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function IE(e,t){let{routesMeta:n}=e,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",u=BE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let d=a.route;o.push({params:i,pathname:rr([r,u.pathname]),pathnameBase:GE(rr([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=rr([r,u.pathnameBase]))}return o}function BE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=WE(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=VE(a[d]||"",u),c},{}),pathname:o,pathnameBase:s,pattern:e}}function WE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return e.endsWith("*")?(i.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function UE(e){try{return decodeURI(e)}catch(t){return zg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function VE(e,t){try{return decodeURIComponent(e)}catch(n){return zg(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ig(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function HE(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?fs(e):e;return{pathname:n?n.startsWith("/")?n:$E(n,t):t,search:YE(i),hash:XE(r)}}function $E(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Lf(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Wg(e,t,n,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=fs(e):(r=Fa({},e),et(!r.pathname||!r.pathname.includes("?"),Lf("?","pathname","search",r)),et(!r.pathname||!r.pathname.includes("#"),Lf("#","pathname","hash",r)),et(!r.search||!r.search.includes("#"),Lf("#","search","hash",r)));let o=e===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=t.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=HE(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const rr=e=>e.join("/").replace(/\/\/+/g,"/"),GE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),YE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,XE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function KE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pk=["post","put","patch","delete"];new Set(pk);const QE=["get",...pk];new Set(QE);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ou(){return Ou=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ou.apply(this,arguments)}const Ug=P.createContext(null),mk=P.createContext(null),to=P.createContext(null),wd=P.createContext(null),Ei=P.createContext({outlet:null,matches:[],isDataRoute:!1}),gk=P.createContext(null);function ZE(e,t){let{relative:n}=t===void 0?{}:t;hs()||et(!1);let{basename:i,navigator:r}=P.useContext(to),{hash:o,pathname:s,search:a}=Vg(e,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:rr([i,s])),r.createHref({pathname:l,search:a,hash:o})}function hs(){return P.useContext(wd)!=null}function no(){return hs()||et(!1),P.useContext(wd).location}function xk(e){P.useContext(to).static||P.useLayoutEffect(e)}function ps(){let{isDataRoute:e}=P.useContext(Ei);return e?f_():JE()}function JE(){hs()||et(!1);let e=P.useContext(Ug),{basename:t,navigator:n}=P.useContext(to),{matches:i}=P.useContext(Ei),{pathname:r}=no(),o=JSON.stringify(Bg(i).map(l=>l.pathnameBase)),s=P.useRef(!1);return xk(()=>{s.current=!0}),P.useCallback(function(l,c){if(c===void 0&&(c={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=Wg(l,JSON.parse(o),r,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:rr([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,o,r,e])}const qE=P.createContext(null);function e_(e){let t=P.useContext(Ei).outlet;return t&&P.createElement(qE.Provider,{value:e},t)}function Vg(e,t){let{relative:n}=t===void 0?{}:t,{matches:i}=P.useContext(Ei),{pathname:r}=no(),o=JSON.stringify(Bg(i).map(s=>s.pathnameBase));return P.useMemo(()=>Wg(e,JSON.parse(o),r,n==="path"),[e,o,r,n])}function t_(e,t){return n_(e,t)}function n_(e,t,n){hs()||et(!1);let{navigator:i}=P.useContext(to),{matches:r}=P.useContext(Ei),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=no(),c;if(t){var u;let m=typeof t=="string"?fs(t):t;a==="/"||(u=m.pathname)!=null&&u.startsWith(a)||et(!1),c=m}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=PE(e,{pathname:f}),g=a_(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:rr([a,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:rr([a,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n);return t&&g?P.createElement(wd.Provider,{value:{location:Ou({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ui.Pop}},g):g}function i_(){let e=d_(),t=KE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:r},n):null,o)}const r_=P.createElement(i_,null);class o_ extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(Ei.Provider,{value:this.props.routeContext},P.createElement(gk.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s_(e){let{routeContext:t,match:n,children:i}=e,r=P.useContext(Ug);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Ei.Provider,{value:t},i)}function a_(e,t,n){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||et(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,c)=>{let u=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||r_);let f=t.concat(o.slice(0,c+1)),p=()=>{let g;return u?g=d:l.route.Component?g=P.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,P.createElement(s_,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?P.createElement(o_,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var yk=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yk||{}),Mu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Mu||{});function l_(e){let t=P.useContext(Ug);return t||et(!1),t}function c_(e){let t=P.useContext(mk);return t||et(!1),t}function u_(e){let t=P.useContext(Ei);return t||et(!1),t}function vk(e){let t=u_(),n=t.matches[t.matches.length-1];return n.route.id||et(!1),n.route.id}function d_(){var e;let t=P.useContext(gk),n=c_(Mu.UseRouteError),i=vk(Mu.UseRouteError);return t||((e=n.errors)==null?void 0:e[i])}function f_(){let{router:e}=l_(yk.UseNavigateStable),t=vk(Mu.UseNavigateStable),n=P.useRef(!1);return xk(()=>{n.current=!0}),P.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Ou({fromRouteId:t},o)))},[e,t])}function Hg(e){let{to:t,replace:n,state:i,relative:r}=e;hs()||et(!1);let{matches:o}=P.useContext(Ei),{pathname:s}=no(),a=ps(),l=Wg(t,Bg(o).map(u=>u.pathnameBase),s,r==="path"),c=JSON.stringify(l);return P.useEffect(()=>a(JSON.parse(c),{replace:n,state:i,relative:r}),[a,c,r,n,i]),null}function h_(e){return e_(e.context)}function dn(e){et(!1)}function p_(e){let{basename:t="/",children:n=null,location:i,navigationType:r=Ui.Pop,navigator:o,static:s=!1}=e;hs()&&et(!1);let a=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=fs(i));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:p="default"}=i,g=P.useMemo(()=>{let m=Ig(c,a);return m==null?null:{location:{pathname:m,search:u,hash:d,state:f,key:p},navigationType:r}},[a,c,u,d,f,p,r]);return g==null?null:P.createElement(to.Provider,{value:l},P.createElement(wd.Provider,{children:n,value:g}))}function m_(e){let{children:t,location:n}=e;return t_(Vp(t),n)}new Promise(()=>{});function Vp(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(i,r)=>{if(!P.isValidElement(i))return;let o=[...t,r];if(i.type===P.Fragment){n.push.apply(n,Vp(i.props.children,o));return}i.type!==dn&&et(!1),!i.props.index||!i.props.children||et(!1);let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Vp(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ru.apply(this,arguments)}function bk(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function g_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function x_(e,t){return e.button===0&&(!t||t==="_self")&&!g_(e)}const y_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],v_=["aria-current","caseSensitive","className","end","style","to","children"],b_="startTransition",Cy=Gh[b_];function w_(e){let{basename:t,children:n,future:i,window:r}=e,o=P.useRef();o.current==null&&(o.current=EE({window:r,v5Compat:!0}));let s=o.current,[a,l]=P.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},u=P.useCallback(d=>{c&&Cy?Cy(()=>l(d)):l(d)},[l,c]);return P.useLayoutEffect(()=>s.listen(u),[s,u]),P.createElement(p_,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}const k_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kd=P.forwardRef(function(t,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u}=t,d=bk(t,y_),{basename:f}=P.useContext(to),p,g=!1;if(typeof c=="string"&&S_.test(c)&&(p=c,k_))try{let y=new URL(window.location.href),b=c.startsWith("//")?new URL(y.protocol+c):new URL(c),k=Ig(b.pathname,f);b.origin===y.origin&&k!=null?c=k+b.search+b.hash:g=!0}catch{}let m=ZE(c,{relative:r}),v=C_(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r});function x(y){i&&i(y),y.defaultPrevented||v(y)}return P.createElement("a",Ru({},d,{href:p||m,onClick:g||o?i:x,ref:n,target:l}))}),Zn=P.forwardRef(function(t,n){let{"aria-current":i="page",caseSensitive:r=!1,className:o="",end:s=!1,style:a,to:l,children:c}=t,u=bk(t,v_),d=Vg(l,{relative:u.relative}),f=no(),p=P.useContext(mk),{navigator:g}=P.useContext(to),m=g.encodeLocation?g.encodeLocation(d).pathname:d.pathname,v=f.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;r||(v=v.toLowerCase(),x=x?x.toLowerCase():null,m=m.toLowerCase());let y=v===m||!s&&v.startsWith(m)&&v.charAt(m.length)==="/",b=x!=null&&(x===m||!s&&x.startsWith(m)&&x.charAt(m.length)==="/"),k=y?i:void 0,S;typeof o=="function"?S=o({isActive:y,isPending:b}):S=[o,y?"active":null,b?"pending":null].filter(Boolean).join(" ");let E=typeof a=="function"?a({isActive:y,isPending:b}):a;return P.createElement(kd,Ru({},u,{"aria-current":k,className:S,ref:n,style:E,to:l}),typeof c=="function"?c({isActive:y,isPending:b}):c)});var Ay;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ay||(Ay={}));var Ey;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ey||(Ey={}));function C_(e,t){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=ps(),l=no(),c=Vg(e,{relative:s});return P.useCallback(u=>{if(x_(u,n)){u.preventDefault();let d=i!==void 0?i:ju(l)===ju(c);a(e,{replace:d,state:r,preventScrollReset:o,relative:s})}},[l,a,c,i,r,n,e,o,s])}var Hp={},A_={get exports(){return Hp},set exports(e){Hp=e}},wk={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=P;function E_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var __=typeof Object.is=="function"?Object.is:E_,T_=al.useSyncExternalStore,P_=al.useRef,j_=al.useEffect,O_=al.useMemo,M_=al.useDebugValue;wk.useSyncExternalStoreWithSelector=function(e,t,n,i,r){var o=P_(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=O_(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&s.hasValue){var g=s.value;if(r(g,p))return d=g}return d=p}if(g=d,__(u,p))return g;var m=i(p);return r!==void 0&&r(g,m)?g:(u=p,d=m)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,i,r]);var a=T_(e,o[0],o[1]);return j_(function(){s.hasValue=!0,s.value=a},[a]),M_(a),a};(function(e){e.exports=wk})(A_);var Qt="default"in Gh?Qn:Gh,_y=Symbol.for("react-redux-context"),Ty=typeof globalThis<"u"?globalThis:{};function R_(){if(!Qt.createContext)return{};const e=Ty[_y]??(Ty[_y]=new Map);let t=e.get(Qt.createContext);return t||(t=Qt.createContext(null),e.set(Qt.createContext,t)),t}var ur=R_(),N_=()=>{throw new Error("uSES not initialized!")};function $g(e=ur){return function(){return Qt.useContext(e)}}var kk=$g(),Sk=N_,D_=e=>{Sk=e},L_=(e,t)=>e===t;function F_(e=ur){const t=e===ur?kk:$g(e);return function(i,r={}){const{equalityFn:o=L_,devModeChecks:s={}}=typeof r=="function"?{equalityFn:r}:r,{store:a,subscription:l,getServerState:c,stabilityCheck:u,identityFunctionCheck:d}=t();Qt.useRef(!0);const f=Qt.useCallback({[i.name](g){return i(g)}}[i.name],[i,u,s.stabilityCheck]),p=Sk(l.addNestedSub,a.getState,c||a.getState,f,o);return Qt.useDebugValue(p),p}}var It=F_();function z_(e){e()}function I_(){let e=null,t=null;return{clear(){e=null,t=null},notify(){z_(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){let n=[],i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0,r=t={callback:n,next:null,prev:t};return r.prev?r.prev.next=r:e=r,function(){!i||e===null||(i=!1,r.next?r.next.prev=r.prev:t=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var Py={notify(){},get:()=>[]};function B_(e,t){let n,i=Py,r=0,o=!1;function s(m){u();const v=i.subscribe(m);let x=!1;return()=>{x||(x=!0,v(),d())}}function a(){i.notify()}function l(){g.onStateChange&&g.onStateChange()}function c(){return o}function u(){r++,n||(n=t?t.addNestedSub(l):e.subscribe(l),i=I_())}function d(){r--,n&&r===0&&(n(),n=void 0,i.clear(),i=Py)}function f(){o||(o=!0,u())}function p(){o&&(o=!1,d())}const g={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>i};return g}var W_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",U_=W_?Qt.useLayoutEffect:Qt.useEffect;function V_({store:e,context:t,children:n,serverState:i,stabilityCheck:r="once",identityFunctionCheck:o="once"}){const s=Qt.useMemo(()=>{const c=B_(e);return{store:e,subscription:c,getServerState:i?()=>i:void 0,stabilityCheck:r,identityFunctionCheck:o}},[e,i,r,o]),a=Qt.useMemo(()=>e.getState(),[e]);U_(()=>{const{subscription:c}=s;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[s,a]);const l=t||ur;return Qt.createElement(l.Provider,{value:s},n)}var H_=V_;function Ck(e=ur){const t=e===ur?kk:$g(e);return function(){const{store:i}=t();return i}}var $_=Ck();function G_(e=ur){const t=e===ur?$_:Ck(e);return function(){return t().dispatch}}var sn=G_();D_(Hp.useSyncExternalStoreWithSelector);const Y_=e=>e.auth.isLoggedIn,Gg=e=>e.auth.user,X_=e=>e.auth.isRefreshing,Ak=e=>e.auth.user,K_=e=>e.auth.dateLastWeight,Q_=()=>{const e=new Date,t={day:"numeric",month:"numeric",year:"numeric"};return e.toLocaleDateString("ru-RU",t)},za=()=>{const e=It(Y_),t=It(X_),n=It(Gg);return{isLoggedIn:e,isRefreshing:t,user:n}};var Bt=function(){return Bt=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Bt.apply(this,arguments)};function Ia(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,o;i<r;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}var Ne="-ms-",la="-moz-",ke="-webkit-",Ek="comm",Sd="rule",Yg="decl",Z_="@import",_k="@keyframes",J_="@layer",q_=Math.abs,Xg=String.fromCharCode,$p=Object.assign;function e5(e,t){return dt(e,0)^45?(((t<<2^dt(e,0))<<2^dt(e,1))<<2^dt(e,2))<<2^dt(e,3):0}function Tk(e){return e.trim()}function li(e,t){return(e=t.exec(e))?e[0]:e}function fe(e,t,n){return e.replace(t,n)}function Dc(e,t){return e.indexOf(t)}function dt(e,t){return e.charCodeAt(t)|0}function Jo(e,t,n){return e.slice(t,n)}function Wn(e){return e.length}function Pk(e){return e.length}function Gs(e,t){return t.push(e),e}function t5(e,t){return e.map(t).join("")}function jy(e,t){return e.filter(function(n){return!li(n,t)})}var Cd=1,qo=1,jk=0,vn=0,nt=0,ms="";function Ad(e,t,n,i,r,o,s,a){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:Cd,column:qo,length:s,return:"",siblings:a}}function Ri(e,t){return $p(Ad("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fo(e){for(;e.root;)e=Ri(e.root,{children:[e]});Gs(e,e.siblings)}function n5(){return nt}function i5(){return nt=vn>0?dt(ms,--vn):0,qo--,nt===10&&(qo=1,Cd--),nt}function On(){return nt=vn<jk?dt(ms,vn++):0,qo++,nt===10&&(qo=1,Cd++),nt}function zr(){return dt(ms,vn)}function Lc(){return vn}function Ed(e,t){return Jo(ms,e,t)}function Gp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r5(e){return Cd=qo=1,jk=Wn(ms=e),vn=0,[]}function o5(e){return ms="",e}function Ff(e){return Tk(Ed(vn-1,Yp(e===91?e+2:e===40?e+1:e)))}function s5(e){for(;(nt=zr())&&nt<33;)On();return Gp(e)>2||Gp(nt)>3?"":" "}function a5(e,t){for(;--t&&On()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Ed(e,Lc()+(t<6&&zr()==32&&On()==32))}function Yp(e){for(;On();)switch(nt){case e:return vn;case 34:case 39:e!==34&&e!==39&&Yp(nt);break;case 40:e===41&&Yp(e);break;case 92:On();break}return vn}function l5(e,t){for(;On()&&e+nt!==47+10;)if(e+nt===42+42&&zr()===47)break;return"/*"+Ed(t,vn-1)+"*"+Xg(e===47?e:On())}function c5(e){for(;!Gp(zr());)On();return Ed(e,vn)}function u5(e){return o5(Fc("",null,null,null,[""],e=r5(e),0,[0],e))}function Fc(e,t,n,i,r,o,s,a,l){for(var c=0,u=0,d=s,f=0,p=0,g=0,m=1,v=1,x=1,y=0,b="",k=r,S=o,E=i,C=b;v;)switch(g=y,y=On()){case 40:if(g!=108&&dt(C,d-1)==58){Dc(C+=fe(Ff(y),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:C+=Ff(y);break;case 9:case 10:case 13:case 32:C+=s5(g);break;case 92:C+=a5(Lc()-1,7);continue;case 47:switch(zr()){case 42:case 47:Gs(d5(l5(On(),Lc()),t,n,l),l);break;default:C+="/"}break;case 123*m:a[c++]=Wn(C)*x;case 125*m:case 59:case 0:switch(y){case 0:case 125:v=0;case 59+u:x==-1&&(C=fe(C,/\f/g,"")),p>0&&Wn(C)-d&&Gs(p>32?My(C+";",i,n,d-1,l):My(fe(C," ","")+";",i,n,d-2,l),l);break;case 59:C+=";";default:if(Gs(E=Oy(C,t,n,c,u,r,a,b,k=[],S=[],d,o),o),y===123)if(u===0)Fc(C,t,E,E,k,o,d,a,S);else switch(f===99&&dt(C,3)===110?100:f){case 100:case 108:case 109:case 115:Fc(e,E,E,i&&Gs(Oy(e,E,E,0,0,r,a,b,r,k=[],d,S),S),r,S,d,a,i?k:S);break;default:Fc(C,E,E,E,[""],S,0,a,S)}}c=u=p=0,m=x=1,b=C="",d=s;break;case 58:d=1+Wn(C),p=g;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&i5()==125)continue}switch(C+=Xg(y),y*m){case 38:x=u>0?1:(C+="\f",-1);break;case 44:a[c++]=(Wn(C)-1)*x,x=1;break;case 64:zr()===45&&(C+=Ff(On())),f=zr(),u=d=Wn(b=C+=c5(Lc())),y++;break;case 45:g===45&&Wn(C)==2&&(m=0)}}return o}function Oy(e,t,n,i,r,o,s,a,l,c,u,d){for(var f=r-1,p=r===0?o:[""],g=Pk(p),m=0,v=0,x=0;m<i;++m)for(var y=0,b=Jo(e,f+1,f=q_(v=s[m])),k=e;y<g;++y)(k=Tk(v>0?p[y]+" "+b:fe(b,/&\f/g,p[y])))&&(l[x++]=k);return Ad(e,t,n,r===0?Sd:a,l,c,u,d)}function d5(e,t,n,i){return Ad(e,t,n,Ek,Xg(n5()),Jo(e,2,-2),0,i)}function My(e,t,n,i,r){return Ad(e,t,n,Yg,Jo(e,0,i),Jo(e,i+1,-1),i,r)}function Ok(e,t,n){switch(e5(e,t)){case 5103:return ke+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+e+e;case 4789:return la+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+e+la+e+Ne+e+e;case 5936:switch(dt(e,t+11)){case 114:return ke+e+Ne+fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ke+e+Ne+fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ke+e+Ne+fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ke+e+Ne+e+e;case 6165:return ke+e+Ne+"flex-"+e+e;case 5187:return ke+e+fe(e,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return ke+e+Ne+"flex-item-"+fe(e,/flex-|-self/g,"")+(li(e,/flex-|baseline/)?"":Ne+"grid-row-"+fe(e,/flex-|-self/g,""))+e;case 4675:return ke+e+Ne+"flex-line-pack"+fe(e,/align-content|flex-|-self/g,"")+e;case 5548:return ke+e+Ne+fe(e,"shrink","negative")+e;case 5292:return ke+e+Ne+fe(e,"basis","preferred-size")+e;case 6060:return ke+"box-"+fe(e,"-grow","")+ke+e+Ne+fe(e,"grow","positive")+e;case 4554:return ke+fe(e,/([^-])(transform)/g,"$1"+ke+"$2")+e;case 6187:return fe(fe(fe(e,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),e,"")+e;case 5495:case 3959:return fe(e,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return fe(fe(e,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+e+e;case 4200:if(!li(e,/flex-|baseline/))return Ne+"grid-column-align"+Jo(e,t)+e;break;case 2592:case 3360:return Ne+fe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,r){return t=r,li(i.props,/grid-\w+-end/)})?~Dc(e+(n=n[t].value),"span")?e:Ne+fe(e,"-start","")+e+Ne+"grid-row-span:"+(~Dc(n,"span")?li(n,/\d+/):+li(n,/\d+/)-+li(e,/\d+/))+";":Ne+fe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return li(i.props,/grid-\w+-start/)})?e:Ne+fe(fe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return fe(e,/(.+)-inline(.+)/,ke+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(e)-1-t>6)switch(dt(e,t+1)){case 109:if(dt(e,t+4)!==45)break;case 102:return fe(e,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+la+(dt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dc(e,"stretch")?Ok(fe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return fe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,c){return Ne+r+":"+o+c+(s?Ne+r+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(dt(e,t+6)===121)return fe(e,":",":"+ke)+e;break;case 6444:switch(dt(e,dt(e,14)===45?18:11)){case 120:return fe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(dt(e,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Ne+"$2box$3")+e;case 100:return fe(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(e,"scroll-","scroll-snap-")+e}return e}function Nu(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function f5(e,t,n,i){switch(e.type){case J_:if(e.children.length)break;case Z_:case Yg:return e.return=e.return||e.value;case Ek:return"";case _k:return e.return=e.value+"{"+Nu(e.children,i)+"}";case Sd:if(!Wn(e.value=e.props.join(",")))return""}return Wn(n=Nu(e.children,i))?e.return=e.value+"{"+n+"}":""}function h5(e){var t=Pk(e);return function(n,i,r,o){for(var s="",a=0;a<t;a++)s+=e[a](n,i,r,o)||"";return s}}function p5(e){return function(t){t.root||(t=t.return)&&e(t)}}function m5(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Yg:e.return=Ok(e.value,e.length,n);return;case _k:return Nu([Ri(e,{value:fe(e.value,"@","@"+ke)})],i);case Sd:if(e.length)return t5(n=e.props,function(r){switch(li(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Ri(e,{props:[fe(r,/:(read-\w+)/,":"+la+"$1")]})),fo(Ri(e,{props:[r]})),$p(e,{props:jy(n,i)});break;case"::placeholder":fo(Ri(e,{props:[fe(r,/:(plac\w+)/,":"+ke+"input-$1")]})),fo(Ri(e,{props:[fe(r,/:(plac\w+)/,":"+la+"$1")]})),fo(Ri(e,{props:[fe(r,/:(plac\w+)/,Ne+"input-$1")]})),fo(Ri(e,{props:[r]})),$p(e,{props:jy(n,i)});break}return""})}}var g5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},es=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Kg=typeof window<"u"&&"HTMLElement"in window,x5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),_d=Object.freeze([]),ts=Object.freeze({});function y5(e,t,n){return n===void 0&&(n=ts),e.theme!==n.theme&&e.theme||t||n.theme}var Mk=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),v5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b5=/(^-|-$)/g;function Ry(e){return e.replace(v5,"-").replace(b5,"")}var w5=/(a)(d)/gi,Ny=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ny(t%52)+n;return(Ny(t%52)+n).replace(w5,"$1-$2")}var zf,jo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rk=function(e){return jo(5381,e)};function Nk(e){return Xp(Rk(e)>>>0)}function k5(e){return e.displayName||e.name||"Component"}function If(e){return typeof e=="string"&&!0}var Dk=typeof Symbol=="function"&&Symbol.for,Lk=Dk?Symbol.for("react.memo"):60115,S5=Dk?Symbol.for("react.forward_ref"):60112,C5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fk={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E5=((zf={})[S5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zf[Lk]=Fk,zf);function Dy(e){return("type"in(t=e)&&t.type.$$typeof)===Lk?Fk:"$$typeof"in e?E5[e.$$typeof]:C5;var t}var _5=Object.defineProperty,T5=Object.getOwnPropertyNames,Ly=Object.getOwnPropertySymbols,P5=Object.getOwnPropertyDescriptor,j5=Object.getPrototypeOf,Fy=Object.prototype;function zk(e,t,n){if(typeof t!="string"){if(Fy){var i=j5(t);i&&i!==Fy&&zk(e,i,n)}var r=T5(t);Ly&&(r=r.concat(Ly(t)));for(var o=Dy(e),s=Dy(t),a=0;a<r.length;++a){var l=r[a];if(!(l in A5||n&&n[l]||s&&l in s||o&&l in o)){var c=P5(t,l);try{_5(e,l,c)}catch{}}}}return e}function ns(e){return typeof e=="function"}function Qg(e){return typeof e=="object"&&"styledComponentId"in e}function Dr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Kp(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function Ba(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qp(e,t,n){if(n===void 0&&(n=!1),!n&&!Ba(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Qp(e[i],t[i]);else if(Ba(t))for(var i in t)e[i]=Qp(e[i],t[i]);return e}function Zg(e,t){Object.defineProperty(e,"toString",{value:t})}function ll(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var O5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;t>=o;)if((o<<=1)<0)throw ll(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n;this.groupSizes[t]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],r=this.indexOfGroup(t),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),zc=new Map,Du=new Map,Bf=1,Fl=function(e){if(zc.has(e))return zc.get(e);for(;Du.has(Bf);)Bf++;var t=Bf++;return zc.set(e,t),Du.set(t,e),t},M5=function(e,t){zc.set(e,t),Du.set(t,e)},R5="style[".concat(es,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),N5=new RegExp("^".concat(es,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),D5=function(e,t,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&e.registerName(t,i)},L5=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(N5);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(M5(u,c),D5(e,u,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function F5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ik=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(es,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(es,"active"),i.setAttribute("data-styled-version","6.0.7");var s=F5();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},z5=function(){function e(t){this.element=Ik(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw ll(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),I5=function(){function e(t){this.element=Ik(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),B5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zy=Kg,W5={isServer:!Kg,useCSSOMInjection:!x5},Bk=function(){function e(t,n,i){t===void 0&&(t=ts),n===void 0&&(n={});var r=this;this.options=Bt(Bt({},W5),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Kg&&zy&&(zy=!1,function(o){for(var s=document.querySelectorAll(R5),a=0,l=s.length;a<l;a++){var c=s[a];c&&c.getAttribute(es)!=="active"&&(L5(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Zg(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(d){var f=function(x){return Du.get(x)}(d);if(f===void 0)return"continue";var p=o.names.get(f),g=s.getGroup(d);if(p===void 0||g.length===0)return"continue";var m="".concat(es,".g").concat(d,'[id="').concat(f,'"]'),v="";p!==void 0&&p.forEach(function(x){x.length>0&&(v+="".concat(x,","))}),l+="".concat(g).concat(m,'{content:"').concat(v,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)c(u);return l}(r)})}return e.registerId=function(t){return Fl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Bt(Bt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new B5(r):i?new z5(r):new I5(r)}(this.options),new O5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fl(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Fl(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U5=/&/g,V5=/^\s*\/\/.*$/gm;function Wk(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wk(n.children,t)),n})}function H5(e){var t,n,i,r=e===void 0?ts:e,o=r.options,s=o===void 0?ts:o,a=r.plugins,l=a===void 0?_d:a,c=function(f,p,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):f},u=l.slice();u.push(function(f){f.type===Sd&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(U5,n).replace(i,c))}),s.prefix&&u.push(m5),u.push(f5);var d=function(f,p,g,m){p===void 0&&(p=""),g===void 0&&(g=""),m===void 0&&(m="&"),t=m,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var v=f.replace(V5,""),x=u5(g||p?"".concat(g," ").concat(p," { ").concat(v," }"):v);s.namespace&&(x=Wk(x,s.namespace));var y=[];return Nu(x,h5(u.concat(p5(function(b){return y.push(b)})))),y};return d.hash=l.length?l.reduce(function(f,p){return p.name||ll(15),jo(f,p.name)},5381).toString():"",d}var $5=new Bk,Zp=H5(),Uk=Qn.createContext({shouldForwardProp:void 0,styleSheet:$5,stylis:Zp});Uk.Consumer;Qn.createContext(void 0);function Iy(){return P.useContext(Uk)}var Vk=function(){function e(t,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Zp);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zg(this,function(){throw ll(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zp),this.name+t.hash},e}(),G5=function(e){return e>="A"&&e<="Z"};function By(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;G5(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Hk=function(e){return e==null||e===!1||e===""},$k=function(e){var t,n,i=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!Hk(o)&&(Array.isArray(o)&&o.isCss||ns(o)?i.push("".concat(By(r),":"),o,";"):Ba(o)?i.push.apply(i,Ia(Ia(["".concat(r," {")],$k(o),!1),["}"],!1)):i.push("".concat(By(r),": ").concat((t=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in g5||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ir(e,t,n,i){if(Hk(e))return[];if(Qg(e))return[".".concat(e.styledComponentId)];if(ns(e)){if(!ns(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var r=e(t);return Ir(r,t,n,i)}var o;return e instanceof Vk?n?(e.inject(n,i),[e.getName(i)]):[e]:Ba(e)?$k(e):Array.isArray(e)?Array.prototype.concat.apply(_d,e.map(function(s){return Ir(s,t,n,i)})):[e.toString()]}function Y5(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ns(n)&&!Qg(n))return!1}return!0}var X5=Rk("6.0.7"),K5=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Y5(t),this.componentId=n,this.baseHash=jo(X5,n),this.baseStyle=i,Bk.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Dr(r,this.staticRulesId);else{var o=Kp(Ir(this.rules,t,n,i)),s=Xp(jo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Dr(r,s),this.staticRulesId=s}else{for(var l=jo(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=Kp(Ir(d,t,n,i));l=jo(l,f),c+=f}}if(c){var p=Xp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=Dr(r,p)}}return r},e}(),Gk=Qn.createContext(void 0);Gk.Consumer;var Wf={};function Q5(e,t,n){var i=Qg(e),r=e,o=!If(e),s=t.attrs,a=s===void 0?_d:s,l=t.componentId,c=l===void 0?function(b,k){var S=typeof b!="string"?"sc":Ry(b);Wf[S]=(Wf[S]||0)+1;var E="".concat(S,"-").concat(Nk("6.0.7"+S+Wf[S]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):l,u=t.displayName;u===void 0&&function(b){return If(b)?"styled.".concat(b):"Styled(".concat(k5(b),")")}(e);var d=t.displayName&&t.componentId?"".concat(Ry(t.displayName),"-").concat(t.componentId):t.componentId||c,f=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,p=t.shouldForwardProp;if(i&&r.shouldForwardProp){var g=r.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(b,k){return g(b,k)&&m(b,k)}}else p=g}var v=new K5(n,d,i?r.componentStyle:void 0);function x(b,k){return function(S,E,C){var j=S.attrs,T=S.componentStyle,z=S.defaultProps,U=S.foldedComponentIds,q=S.styledComponentId,ne=S.target,he=Qn.useContext(Gk),re=Iy(),de=S.shouldForwardProp||re.shouldForwardProp,ae=function(He,ye,_e){for(var we,$e=Bt(Bt({},ye),{className:void 0,theme:_e}),st=0;st<He.length;st+=1){var Rt=ns(we=He[st])?we($e):we;for(var mt in Rt)$e[mt]=mt==="className"?Dr($e[mt],Rt[mt]):mt==="style"?Bt(Bt({},$e[mt]),Rt[mt]):Rt[mt]}return ye.className&&($e.className=Dr($e.className,ye.className)),$e}(j,E,y5(E,he,z)||ts),B=ae.as||ne,Y={};for(var Q in ae)ae[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?Y.as=ae.forwardedAs:de&&!de(Q,B)||(Y[Q]=ae[Q]));var le=function(He,ye){var _e=Iy(),we=He.generateAndInjectStyles(ye,_e.styleSheet,_e.stylis);return we}(T,ae),se=Dr(U,q);return le&&(se+=" "+le),ae.className&&(se+=" "+ae.className),Y[If(B)&&!Mk.has(B)?"class":"className"]=se,Y.ref=C,P.createElement(B,Y)}(y,b,k)}var y=Qn.forwardRef(x);return y.attrs=f,y.componentStyle=v,y.shouldForwardProp=p,y.foldedComponentIds=i?Dr(r.foldedComponentIds,r.styledComponentId):"",y.styledComponentId=d,y.target=i?r.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=i?function(k){for(var S=[],E=1;E<arguments.length;E++)S[E-1]=arguments[E];for(var C=0,j=S;C<j.length;C++)Qp(k,j[C],!0);return k}({},r.defaultProps,b):b}}),Zg(y,function(){return".".concat(y.styledComponentId)}),o&&zk(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Wy(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var Uy=function(e){return Object.assign(e,{isCss:!0})};function Yk(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ns(e)||Ba(e)){var i=e;return Uy(Ir(Wy(_d,Ia([i],t,!0))))}var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ir(r):Uy(Ir(Wy(r,t)))}function Jp(e,t,n){if(n===void 0&&(n=ts),!t)throw ll(1,t);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Yk.apply(void 0,Ia([r],o,!1)))};return i.attrs=function(r){return Jp(e,t,Bt(Bt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Jp(e,t,Bt(Bt({},n),r))},i}var Xk=function(e){return Jp(Q5,e)},w=Xk;Mk.forEach(function(e){w[e]=Xk(e)});function Z5(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Kp(Yk.apply(void 0,Ia([e],t,!1))),r=Nk(i);return new Vk(r,i)}const Vy=w.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: transparent;
`,zl=w.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: rgba(255, 255, 255, 0.01);
`,Hy=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`,$y=w.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  color: var(--primary-white-color);
`,Gy=w.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: var(--primary-white-color);
  text-transform: capitalize;
`,J5=w.div`
  display: flex;
  gap: 6px;
`,q5=w.span`
  font-weight: 400;
  color: var(--primary-grey-color);
  margin-left: 4px;
`,eT=w.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-light-green-color);
`,Yy=w.svg`
  width: 14px;
  height: 14px;
  stroke: var(--primary-light-green-color);
  margin-left: 12px;
`,Xt="/healthyhub-project/assets/icons-1bbab442.svg",Oo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgB3ZZ7TFNXGMC/e9vb23sLpUix1YIICBEB7VTcdMt8jMTpDJtb1Im6OVxEnXEvZ5a4jDg3557xuZk4bTKXjYlzi49tcSBsImpEJxky5CEIfdCWtkDbe9v7OiskJCa8Lmr2h78/bm7O953zO+fcL/ccgP8ZbLggqkrJBrXpEOCqeOC8R62t7r2Jy60s3Af4UIHyclAiTHMGyLg5oFCnARn7sUEvHWncByTcB0OusP6QYvUEk/qYhJNA0lKkBQEucMB4pC1RVPi4vQP8pkJg4EEJWyzGiS12dFtN+DGvjwWTUQXpmUYQBBzV3XD4I/7vjUmxe5PzHfXwIIS9NBTPbIzXR02qvVQLVqcHOB5BnBYDU1ykm4QQQWAHM7dKWzAsopcJPlzQVndnN86xvD5KEzJnReoGCGhxIbjZLoGjC2E8L624+ClEwSjARkooL5qnFMdR6XOSm252xWTB1cA0mOwrhYrzNUAh/+8vHYJFMAoGCNHlBVN5nDrKdjRujMlruBr8JXH839SCs0pDivkcXQB5jAUy+WpAhAaCfnavTovtwqb97AKZDNhSr60zx15TP8Nmk2b2zUiN77aq0szH6HchgOKhqUOC5srr4Pv32mWaCL0uAVUZvvRkBshkgNB621nMMeGb48eGN4QqMg8LnHLNDXEqcAwD7p5uKKHz4a/kt2yGlQ2z/R13XpNYexrnaX0RZDJAOO0dZ5BUixskEaWGPMF1tqbwvhox+YzV5wFnRBiKFE6dcYVu44U7sTpTklfo6ZSwLukEyEQ5WGNSoaOyeX/CbIaRjFnbrKWdv7KGOCV5VkdrppMEAUFcoUG4sBMhLl1kA+eiVlv/AZmMWKX9PFVaPz8hJva8nqKBjXTL5iqhgNkJTHvbs7Er20/JHQeXm1iWO7m80+0t53wByGgug/VwALpcPvi89Y1R/VuVchMR6tCcLyQzeAGApaLhoqEFrN4YCIfDcyLhErnjyBIihDDhyvyN2UsXxToakuDaLR1YvloIPB+CsVO6dTAKRtxSpvrxCeL1JScwleYzLfkdmWjYBm32JggHwkBQOOTm+pej6iU0yGTYFaLLk7SCSP4hCd50xumAThvf090DxVmzPe62Zo85//naZzITfDTjUh5Ap8ZtxvIcIx5Xw1YpVzGlAHDiSGezt8tuEz4RMNHy2HaXsz9e/ZHpA70O267TY7hKp7Ar1fQthYo6jvu6LdjipvCoheGy1JMCyy91t4mWiZtsBYPlXN9lnKsiiLfVJMol1UBptDjQcZo6aebp9+ilx05DxQ5BlhAdBwWrSfR7HYjxeblHs7e5mmEYEALsyocJk3BAearUpwtt0S+krdr0Lcp/7onag2PcZmzHjt5rw9Df0E9NKGDcImm3oVdmFQ0v65t53yFsbYy8frFsWc8enbZ0N+91bY0mQ3S/rJdBq9TpvG1AGfvfdwnmw7OK7D/CKCkpKRHt7mANoVJAWpr+p7tjfStsr6qicgqOXAiIHJkYP6Y1f/3hnLnm8Yb0jDVfA5yFe6Gi7JYyJcXA58xIPXl3u6L3oU1IkNatWshGa1TTg4HgvCt/1kdVXqz2F//w5ZtwjyQlpeCLcx+pevnVtb8NmVRUVIR32Rqn799j+Wbt2s0b4GHgP2b3D0z1jjVqAAAAAElFTkSuQmCC",qp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3lSURBVHgB7VoJdFzldf7+9+bNvJnRyNpGG7Ll3cK7LdnCwjb4lDrBTmyIQQSIcaEhy6lbCs0xTqEWojm0blhORFOWAElbO4tpE6AGG1BtYeMVhPEiy2AkWdJoH80+8+atf+8Ic9Ik3iRrTHIO3zlPo/Pem/fe9+797/3uvQN8gUsD55zhjxCX9VB8f4kT3FwDMfMmMEcWLN4MI/4qeuQ9rPqkhj8CjJgg3+bNQLFzCzwTVkEqYGA22qkDao/Go74dLOa/l62IDeBzhoARgKdeTA6/H55pq2EvZkPvKUUudcTutbMxk1ebztwd0W0Z0/E5Y0QEj23GVabJNwImoIfogzYjSP/7aQsAVgyiLJZLMh47XQcHPkfYMExwDtb3C+mXajTmEqyTsHucEAT9txY8exIsFZItuSpTxl/TnsfP7hawAxJbARVXCMO2ICNv7B/kOZbMiFMAwQ4fgl39SITC0BMRGGoESiwKJaFDcNpZZr59U/hXOV9KRVnzTfstnT7MxhXEiIJM5wvF69t6tKfjehK5uSnrWYjFLZgaR1GBgJzCXBSVFJB/OOkOEllTUS013Nn2YWuhErW+NqXU0XqgeVH7stoGA2nGsF00Bc1ib0VNWfUWFjsiA91Q4mQ1xUQsSQcNTj44CKYqkN12GAZDX2/S0XImMTkYtniWG28wtxwqmd721O4ab92y2oEY0ogRWTC1Dvc/Ob5hwpI7lnqUg+hp6UN3RzssPQ7T4ogSUY0Ma1iUNchG5KkgYsjzfLpPUWGW5LKfw7IemPY9+JFGjMiCtA55YBtvcoV/vVTMmoSSaeNhEwS0nO5B5yBFUWYheTaMFGYD47wYImg7u+IVDaJu8rV2G0x6Wfekroc0YURpIoXAIN/a+F6IvDMOgZsQLR2FWTLmTiE2oh0xIpggLdNN2aPZx9HcyXGG0n5fmKxLbjwUaTlWHHscXqQRlyXVdm70rllY4X0xOKhrwQHF53JjdlEp0aPYcuqjBN47EUEkbgxZziZ+mkQEumN+JlAwBsiQ0S/pmDWnFv1IEy5bIO+sKcnJpBizKNOnns4u+XrxBGwVnaTcyIrJpITtvfPAE1Hkx47C1xlEL8UUOwXWseS6sgOvrPZgDauFhTRhVCuA//3luuWVGe/slL2lDKS9X3d8A4fE67BBfxSZTAdnGj451oxd9UcopahBux1LvvUTNCGNuKQgE/3gRq9TyNgEM+ZSgoEnPDccOvn75yivFt/TIGU9bnNmMEsuxG75ZtQLX8Fs/QN4EKMlR37KRUyeNYNypBdNxz7Zd82cma3f+snLSCcuasGUAtEbv/o8xf9vahE/dFU//HbiSFV1dUqIfkZu7FKLmb/e6nk4V8+fjbCtAJ1sHNwUHq9OHsBd0Q2wDIMKDpJ1rkLK/bQAqbZiVvINZiqPsrmvHEaacHELvswELaeq3KIE5j/TD3v2mPllXeNKgY7W1GH+9sRxiqbVKYac25axEH5pNijtwUkRRaKc2KlmIdLZi2TUhKpyeHJ88BR5YcsmNxY9KyFKC/nRNT9HvPv7rOqAglHGRdMEI0sFWjqO9H3ciYF+HR3N/ldm3d/Rljo2+MbkTMWwnhaczjmdRin6nRMhUqx08E83zdTRbuWhXRuPUDClYZFsb1Hv8x3vPh5vPcItxZeKrF5LkO8zJcdLKQGBUcYl5cFgyPoXkpsDDop+48expcH/KPly57ZFTrdo/MKW4VllqTpO8Fkk4WwkwDVwQ6dkriKsKIiSktlS+BDC+TOhlczbVfFwT90kf9dc3+nEdYnOj09CH4SV8EEbbK2O/qYsB6OMSyI458HujyJx/o+FRYxnX8XynQXC/3hzAu+KnvwVJpEId5OlzHFQtSTiySSCtC+gJIYIpva1OKbi2Sk/xW8m1iVS10ulhRkbevbKOXlbUp0AM9ZLnQ4z5DGEKEYZl6xkNKfwAgmWN80kBxcYpW19vh7uR6AjyTt9fE+zc9b2eCJOiT2GYCyGAH3G1CQM0xzyOzszIYtsyq23bhNT10u5oyC7K7kehRlPUBASnktHH+eSCVY94FNCA9gQ6sUR1W9CGdDQ22Kovb34sWHFbu6Sip8ggj1xIqWQmxqWOVQ7SjYbJMlGhrKRxHHMyllfcW3qesH6iZlMlOebSgimalnM4D9FGjDsRf3+U6VFHpj/Zhp8WiiGDYse6Xr9M7G8eHtjuSTJ9U7JnuVIERNtQwQFUYBIRs+mu8VU9ZhpRhc/J6ydL8j59erAaZs6GH8t6/aum9Ihuocttivub++ZGvKtkRzOeVW1Xdv//0O9+5XyRtJo62yizXI5ZHhkGW6SKw5Rot0iogLFWLtjtig6X1AE753c1GyWQnWHwZ5MV0UxsnJpSDt+cs6+yu7QsddX5M/fRf55g50IOUhlc3p6SoEgsUbrV0CJ3lctiQxmYoBaHNbBrLGT9wE+pAMjLpfOi+pqU4lHH4mrVNUSoVSdKJP1XKmNiF5r7cXfOeogUVmhR4LgGn+JLUtf62L0CRJ2H557IBKPHAhTytBMa2ihS0T0ptjT+Av+DDJEi9o0fhiUJLdnfjcPaURaCKKWWcFk/Juhjv5ApGMAsQ9bYTYcR/TdFsoPBqWFVmjBbvijThyoF+8uL39OQpowojV4MfQd7CtoeEjdwJxihs1Nac8lk+TMRWFpDrqO1SMjgyFKqabJl4MsQbyqfGJrUWMjOpAGpIWgc7phTl2Rd4u/idu5g9xR1KGaCvYcXQh+ZD/G5g0OBZ497WVwFatQ+kwRacKoE+S8RojvvK58cuUqiv4PI9JDkTRXg+JPItZh4kTzEuwOxunOFqQMG+zdgaTddISQJozqm+PbbhWN2PEf2McU/yvTmuXcSQHkTvejIKsOY8rKsO+tXoRjARgRkyp6E8m4joKrM90FUwvG7D/65utIA0bNgsmDlVNMKfwzQfRWpQSS6MoDD/8KjmiEZJoXZ9pNRCIB6GEKMpYB+gs7WZC5mFA2J/drbW1tD0yYMCGJUcZlE0yJZuNw1TJByn2RmIzn9PBcC1KkTFUISegxAUnBjc62FgS6A9QFV6DToEZgqRa/CzcuSmDZ+KdtOR/9A7Wh0INRxuVNeOn7+oGldwkOz3P0r4MbMcpvpE7IalqYg2YwCEWoP5rkIVfJ1Yee2bpkSdO+DlfJtBAWL45g3tgOeF0x5NH81JEtnDAtttz95fZRJXlZFtQbZlQINvZDmIqDazRdioaghlTEQili3CSVeVS1sEXV9dcS7Ub70junrfT7QxPvXvl2mdturrVbzGkjyWaR8DM1a6bkdGyN1o9bnxGo/IhVv2xiFDDyETZ9V2uY8argzPoq1+JQqWUf7LWo+kcsofG9Ojc3h7rYe6ue70mc67sHa4trZJuwKSsTLINmFnZq7UtuBkGW4wJYI2ysiQv2fXZBbWBVH3dhhBg5wfeLXFo000+dMqeZCCLeb6LLh4OJZPKvrnnEf+Ri1cGJmul21R65z2lHjdsFNxUekKgjbncRSYcIIVVDSnYu2Bz9THTuEJnxKKs83IZhYsQE49vHldsynO9zKmxNCibxAHhvr7l29oM9Wy/1GrwGwgfuomtFU6iT7WwuVVZwpDYiaqNPgQScQC060UlKSPb0c8m23t5e+iq57yVX/iNeg2SeG1IR09SoeicnTMQwQBPqd4ZzjU/Lrp6927ahoqSpsNwmCkuZINxG9fFMmmfIZEQ4HBxuN80aM5R8Kde7LX7935+ORJ7958rK7+9oDiGMnucTF7wHRoBUalB2jj0EUVhgUL8zNkgtxAB/bNbGrocwCthP8w7GUUljqypy9eslG5vndljuzGvWwyi8md6KiC/d8yNKPeGkpbFDB9/c+N9z5kz/MWPsD2YcI7Kg+tqkSZC18hS56OBQv/O9RNL4EUYJVbU+GjJix9kNnU+WONv1vOozgbIn5ERr7i6qTDqPnqEjdlng4nWZLttCNDY+SztGh6AlJr/DDSbEKR0MBtGm6PjLa2v70jYCG0sNL6r4/73mwYbdnszcm33doc3MSFBvWUWeNxM0SO1Defk5i+Zh14OcGr6c4TaVEvjgIEJKwnygapPvOK4AajfXdXhLxm8pusob8mRS2CW5V7mgFIoS20Xuec6oPSyCNIixRRbVbWauspJwgPGIwjdW1va8giuIGTNmRJyy3ON2O0kgcCyomEQBTvnZ+c4fFsGe9k9uY86S70YnPIXY9NrY8cKVL+EKo5xcsa2ttyOZ1IigiamTr1IdOj483/m/vwaZ7F37EHXTv8E0K0xt6eNfX1NxtHxBaY5dlpY/8cxbc9dVV9hs1DBqDY+p//a3n9dxhcFYteBy9TtTlV5BgYdmJd7/Klu4+Lwt/98heGL3bvff/nDnHftau6ZJmXZq6/GF7zS1oeFEGwUWC2pUxYsvvo0b/6yEzysf9wN8DvB4jmab5tjZBs0b/2b9jbok2f/pQuf/TsHrHT/eeGzT3bHSHM/Crja/JxqNUyeaJkTUAoz5YqQ3aY5AbflTp87Ed+x46XsARkUQDweaNqhJ0pgld629vuiu25fdOWPeNXsudP45E/3AwKliQ7F959jxM4t37z214P3GtozGI2eolotSHZfq9/bVJxKnlgPp+33LhXDHypXZy1evLl53770nzxc9P8MFlUxNTY2w7vZbZtolYV1Ts+/ut+o/zD5y9AOrveP4n7e0nNyFPwFcklRLzelPnDhYJpq2igF/QNi1d/9/1tbWpu2nH1/gC/wW/weVUG8nIPrLNAAAAABJRU5ErkJggg==",Mo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASKSURBVHgB3ZZrTBxVFMfP3Rl2dmEXutLS8lq6lFLLI9SKPEpL2xBjogURok1NDSpYo/XRViWYRiOfmtT6IGmrlQaw2gTb1D4SSGoVSiGIKSgFoQIusOyysMtjhn3Ozuu68ME0UuiA8sVfMh/m3pPzn/+5d04OgAwwBgT/EQsmws3JOs43+aQCAgvJkHVbALtPo7TOE/AvUSwoiIlah138lghZ+wwokAF471F8fW0QrJRgX7f9JNasA9ZqBK/ZCDDDrBIcRAqslOCkw90y7E7kA/RZIFDhQNsRtjFoBFZKcHvZDJMcZR3GvAMwS4MYROHQR1MIWClBhADTI0P7JvoGRplJwaaLS1UoHLFNf6SXfHanoCADloms6971VvqBh0JCz/gaDIDybLA+NwREH3OCZO6Wo929LlgC8xy6mjKT2ZbtPXRD+tOz785rUTuV1ohy96VYAK8SqAATcBM9gBTUu6I2pstRZ4iHJUD+c8E7Pp01PcEmuDlFHHtj0xOIRN9zHhSo9BcDkQS4LqaAfaANVqfeAq2ONARQ4k3Hlei9wfnmZpDBfIe9vhokCp0x64TXRd57xjXhDnRgz9wegUhQeUOB+DEbLJcz9rud/Nf+Uwnn3LgUZDJP0FA+zGoD0VFJxAb3tKS3W6Uaya75UJAwiILkL6UC1Go1qJwxIWviIjggNcD6UD3I5L63NPwVS/30lJhtH8U5tfRosWNCedIrCE6BF0BCflHJ78spHMSimOFjnH96XVQVyER2U/7ZcKAyOEhVQimVIHI8EAkzEPnaXWAGLUXhxaPn5OZRyA10sNwnHM9hDvMgBDKwvtQCPmaCYbxQB0uAlBtYUZAnhZnMg6s8zg2xSXHwa20XYDFccd5YqAM4MiU3j6yS5r5X96KaRBWEJAXv2hoGjY1GuNM6Aq4pGySnrm+2Waicjo5XeTm5HljSjsqMzRFK+ktS8AWnbQyE+qu/Q3uTCSxD/cCLHmB5tCMyUfkByGRRQWyOUm+Otl15PvQ09bDOA+eruuCXhmHWauo/JYq0TUVFAMExkBtdl2upjIySMxksKsibo4sxUsXrKZOp94efPurrMrbR9ECex1P1BkFosl9Iv3W4Ys9ZT1582xaNDhm5lrRWoTt/z2I5Fx4x/F8rtmUNO8wW/dQY3rvx7ZEL94szfh79mEqDK9TBKFMdugoCdLGgoFZf+vi78VPHrq35jemsYWQ5FG5uzJEw1nMeYcCj8y149TccMt+OLLFssw4KMeN9zMvTPR1nXYPNjzjHbA0agZ5+s/T4bYzx38YW/C0kUlvMTo7DDI0rUg7b3PAAksrGZqeB6tnnwrNAtNL533hc9L4gShIRQnhRh+8X784C30zu1Ch7NZ6xfgFL5LmLILI8eUPy99+tm/XX792bc9jY2Kg5WPZVm79XBkRFrGbbxnFC6js8qQ+wHalrBwmWwYCF1iZu0rOPZ2devnd9zuEurdb3aXnR8f2FO2xhoUEJ/UYTaaEV5rr2gSFYJmEaVffObUkv6aIMnQsGzR6uzzmWWF197lhR8aGn4P/AXxaMEb+sYeVHAAAAAElFTkSuQmCC",em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0tSURBVHgB7VoLdFXllf7+87yvvBPyuEAekPDUSEUQban4AEu7HIaa0JmWjuPYdulUxmWltdPFQodOHacqo7im1QpaR2emoJZSFlZrxVYJxoAURA2ER8jz5ia573vuOfc8/u4Tda1aQUm4AVbbL+tfF9Y599x8d+//+/f+doC/4vTAORjOQ5zRL8Vfn5qPTPoyS8dnJVW8AKqsgwmPYcHRFxgDx3mAURMciVTrzMvhaCutZPbKrMbr1LIyQSyoBgQvoPdrsPu+yOYd/RXOAwgYLXZPXwg1+Ots0vn68IA51RusEcTiCwDRR+wtQMr3cU37IV+7dvTPHgdIGCWscPpy0dvhGTqhQyJOLDsExMJ0xcTI92VTiE17Jq7cOAV3owPnGKP+lve3W0/t+332kKEWQlT9cNJxcEODFTOAtA5kM0QSgh0zL8Z5gFETnHtnf9eUqXx9cVUAvopJSMQkxPscxGMytAhtaY3UxWRIDAsFOA8w6hR18Xa73Zmwo7hiaT3yplfAMU0wnkLsSAfktOEKEcKGcs7T08WYhOCyer6rP+Pp5ZNuH5FhUSX1ZAos00bvMEc0CSvjib+J8wBjU7qmwXTzlerv5Z67STg1Uh4NZrwHMuWD7BcRN7gZKC/N4DzAmAhuaYZgpNGRiZ5wdC0JRw/DiMQgKUBJ0Ifaxkq1Jti4im9uEnGOMeZKxj3wD/540ivVU3wLnVQG6WEHgWLAX3sxBE8ZPdljMtlZH3k883DiaT5Y2/mEjnOAMyrVYv8/aUoy7TzY38900+Zd1UF8payhokyecCm4ICG6PY3IozIyihHTGrpbqiryflD98HO7cBaR0wL52Ibq71XNVL7PvbMR/VkR0r/xQpcz8P1LCNXzJ0Cg2s4y4t+UjxVtYs1bbJwFjIog33mFxBa9Yp3sWueT02pD6y/Z4S0ypkuD+ZBtL9XdIszPv4tpX60AYx7a8bRJHR12pvslbqbvlOe/9uZ4F+WnJTK8ZUFx9vUr77OLlB3mG4uu+sj1PZU+NuB50GsFpnv6J0B2iJxIj5YEqr/jsIYPwE4cJsVN0ieqVLbWXS2qpS9Zuz51B99W6cM44hMJukWzDbbO1jPfSnb1XRPrHtrE911UOHKNhGZ42+RZ8R5xm5NQP88M4b1wUFiYJFLABJhvlyPeE0a65wiMvhbY0QNUGESJfF4hUwvv1QP+h3jLRC/GCZ9cyVRtF7WYucgyHfQejSNQ6KvqfTXeQFfe0F+qv8oXEB9jjlGtJ5QRcu/lGxEUGAQmQD1ai9AvUlDnHkN+SQay5zhkbxckjwpBchh3jH9MaqhP/aK2OfA3xweQY3xiBNk39lrDJ4b3DHXGEI9znDieamu8NdSW3DG1jDNskdS8aseyYWX5++zYez9ETmAiJK5AeWMWhh6Zg32/VREOkfr224j3asgM0X7McoG+i4W2bW5t31iahxzjtA7ir10T2EsJ90XKvIKqCjbB7PCJjmlfqvrYEjubgh51ED7qg9gZhEg3iYIAUZJGluAII8SljAf2CUrXozUPsobj/24YKFdVVCteJpAWgVyBiV5RTv/ns4lXkUOclsjMvq2/K5tla0tLwfOLoHq80l2qn62xqcjOxm1oCWCIim3uAviQLAouYVGE4vOgqKQEAU9J0UXf7t0+61u9i/0lwmuS190lDDa1k6ZO4c4xTrtUk3jmWcqlvTYdEg6dYO4vZBCxVIzIDaOHCU5z1rE7HMcZ6Sa4w0eWexC5OeguWVQgSXKd+7zUS/XTPMUTLpLzJ8KhZ1KKZ1I2/wlyjNMmOP07Q0nLstfpacQyRCxDQhgfghGN8Mfjlrjw2kcPPWM59vMmd2ATMdumV8uB477ZVVVaAnUboskbD5bdEpAENpepRQWWnoKpcSIoPFL/td4e5BijKrYnf71vWzRlLY5G+TNEbHckzq9/Ruu96bNrThynQPFU1tnsErMoiu6rKz6cCHP6FFdVORGUsk5eeqK8XJCEOlIYWKk4pSZ00REfxDhg1A3v7NtCbfTS5J6Bf1qFxPtSrf6a/EOS40xzd6NDy3ZvdHWGhISZrofjuF3Hv2aG8pK+Cmqz0rSPDWycdHNnJ8YBY3a+TlZiNWOLrdnWT2xuEznn/UVRZERW4K4IgaezdAZq0+Q871xb12CkeV/E4P+BcULOrb2UE3/CsO1hN01HfoikRSTppIRlZeGbH0P9ugTUsgKYyZQrWPc1rsr93vsAOSe4vHfrsG5bD9sjYkNrJJq0SHiUmb2YvHoAaqlIbtwgRY92qojdGEeMizmreoX7TcOKuNEjaiMkLfpXeohRM0HGd+xd6MO9rk/cJ4nWWxhHjAvBy9s3pjarea+/SILyKonIK7Tvdto2uhvK0PrbbiT6BhHudtDeXSCufOb2cbUXcz4R+tyXn8q3iwJrBFlYxbKmwnUDIp3kNzTNxgsvtuPQKy9gYW07Kkts7A7NQ8Y3e81zm2/5PsYJuSTIFq/a/ilF5htUWVqginS4U4pSUuLvltRBS1v40cZWRENUKYRS8EgWDDrkZzQGw47Hs/z5zTePi5WRkxRdSz3j0tu2/pPXw34T8MgLfHTmCRQ1RnXddZ+ugkhENz21l0QlS/vOoQ9lCPVFEI3HaPpmTfAp0oaZMzfnvA51kROC7yQmFQa8yto8RSgQiVSW0pLTkbDi6iBV0Cbue2g3IgMpDPem0X8sgVB/N3TrCBSFxotk81PRM6fhkuQjVA7kfMucsW/pRu+uxvU36Yay7EhisqTTAMYncnyjaQoOHAzj8f85iPiwjmifhsG+JDJGN73rGDxKEBVVlZCpyxBk6jZUtbGmcf/gkf1b25BDjGk28cdYfdlPV3ID919VuEM60F2KwsmNWHJ5OTb8aC8OHY5DT1qIhzNIpePUXHQfp96jDjwIn6cCokwugMPcNKXuPsMaKkLBXE9Nzygl9LYLpyGVfdk2tKpkv4NQLIADBd/BY/+bQj917HrKQiqRQdaMDDo8dg9jgz/jXPg/xqoXetUJyC/2o7xUx9y6Xlzf2IYphYMHFL90h83Ew+mIGKpfdcTAGeIMnG3OrJZ52zhjXzCG+pEc5KSU4IcHinpu2tTs01JGiWmnqX4ZppSLfVPTtu1131ZWdkUgnZ66clKJp/Kfl7x56/ypA4Xl+TpkhUGSac+QbyUoLCYFhKOiJ/Cob3rt0yy4XcMYMWaC8Rdn1PsLy991smkx2UMEh2hqr2MDy/J18+76apkthR+iu36naVlqg7YlT/bZ7euDi2hg82NFYfUKaahE1qmkuotBKSgD81Y6TPAe5AL/N9Hs3Mbm7jUxSoyZYGbnzLVy3sS7zFgXEr0pJKJ4Kx61L517d//737Y7ePlk9/rw+uoZomQ/4g/gM+7wxiUo+wXIeSUQfFVgcjF5rCpZWs5WwUnezGZviWAUGBNB18c07fIupvhL9XAnEgMOMhmsmnprzwaMATvXQppUPPFqSs9Vqo8vUcmIGomkh4wrfx5ZqEEw2rNMUKPhcP/W675rxUJ6YYvj8b/cs3tjJOcEUy/W3eApqnncMWLQQmFSSRLCNJs3c3X3QZwh9qytme4vMJd7PPi0qrJqimq14odfzfdDClQgFtdx7ZoihPWAa2gZWZP/7r/uufHp5us+9yR14B/pUcd0TCiq/0bKHRrjxly7Adks3zJzdc/byAHm3t3ZTi8/+OD/mx+Y6L0wxBf48rXrVV/H0l2HpMldgx4mK5S0IsWZs2sumVVzAd365MmeN2qCiZ0NpWRNX8yNCMxUFhkqUDTT+iEwPkOU5tt73Enxy+5q/W6w5ImWsge8Cl+ZNHQm04iusrwIeap45GTRczHqUk2xnRXExZdNDEKLcieVtP+7cfXAGafm6WD+Pb3Dcy5bfO/sKRUp27JgOibmNdZBN4xfnuo9oyLY8tjEYkFWbrK1KNmGFoYi2NEN516cRcyaM+d4ZXlJn1dVyCUAGmdV22q+77lT3X8qgh8Rn9vufKDu+Zb8p0Qh22gldCQjOJZOZr68ZPVAGmcRTU1NRjimd0l0gLo2yIz62uGysindp7r/T/Zgk1jdyNaTYbaMfJR+asJPLLt2bqi8JO/C/Dz/vF+9M9+76NuHIfM0FJ766fOtPQmcZdTXL5WjVqaYKihMrZ6AGdNqqPRjpyzpPkTwoU2fKd7283eWd/WGg6oiT7JsPm/na/upLHNtXXvEyE1lCqDpMqc5wrM4ByBytaIoNFjUV97yD0tTvqLAx569H2qXdmxdZ37himusYEXRBaGBaH46naGu2xhxp3WDFJNGQhYNJWwzG0r0tX0POPt/E+ovDxrZjPW3N6xYJN/YvPgrZVUNrR93/0f2mltEa9pQJTWtXxroCS/ctefg/F1t7eW797Sz8HCMmlMiaGTvT4Za78A5wpeW3VCz4u+XFi5ratp/quPhA3xsJeOSRSQSzCCzor2j89adu/ZN3tW2P7m7de+F/cf3ncCfC0Zm8T0dEzve2rP4he2bz4s/k/wr/lLwB364U+kuqGQJAAAAAElFTkSuQmCC",Ro="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAV5SURBVHgBrZZbbBRVGMe/M3PmsrvtXnovdZFSBCkFFV9AEwzqA0SIJCYmPhp9NjEaLw9KSCRqeJAHHgwvEhITCQEvIQKiCcTUS5SQKGAwoSktLVu23Xa3e5uZc/E7Z3brNhRIab/uZKc7M+f3ff/vMofAfSx/pr8l3rnqbTBiE8BL35DN39+AJRi53w2V85svuG0btoFhAUgegPB/wae+ADb7I3n81Bgs0ox7XZw9tXaf09S+DSCA0vhVENVJpMIzUvAjgvFf5d69BizS6N0uTJ/Z8JjlWh8StxUj8+HG3zfBIMPQnIpAakUMxq4XCo/sOy1hkXZXD6uT+Y/tWBJFJ1DJDgMrFaAj3QSxOIFybhY6H4p35c9t7IVF2l0jDCr+SsEZmJKBm+yER59rw18FGIYAE5/y8tnWmZsTafxxCJYDaNqiRwZVlJMBcVrBdvBWUQFRugm3rgzB8LX8B0/vL16ARdqCwJmvB/oqhUxS1bBkJZS1Crych0ouA5OjU3Dp9+DgS0eKH8ED2ILAyZHbm5JdBPxiHqoTU1DMlSE7VoLsBMxkcubnrx4rvg8PaAsCqct3m5YDfrkEo5fzcO0qBd+KHpj2jANvHM9kYQm2IDCWoANOcxyIYUJXXxUKBQ9a2o1DA+9NLwm2IHD8aPd6O+o8Qd0YGKYFkWQJoolJcFeoClq63dGHTUnnxUg8SS23GQw7ApTa2AYG9K1+tgLLYPOAUrW5Zb1m2K5KJP5iAjFNsCws19wYh2WweZJmj3XtbLbsNUpK1BOAeWrQgBB4cf1TCLw47+Eijj/C/d3EsbsNkyrv8kQafxQ8Odi+4+Kt+wKpbe6itqOLRb9IpMCPxGmDJ2syrH5f7qv0gC/FYZy1W61YGxAaCR1Uk1UEkPLLPh/ccrQwMrw/9UpmuJExX1Jh7MHZFb60FAxHm+AcJOFVQo5rSa9+1rY5kPx8a3rFVjveDsTFeWs1o/ox9LgJwE7gabttROOvN6fTFyo/b3l+QWDhZO9a5HSDlPhBV7mHsAB44AOXZkHdM3SwbV1rJ5xM9XS20oiCOKDyHIYmtZP60CtbYLpNK6kMTpfODLxwB3D0n5k+0zJCmMComK8P5vtQnjWz8s9d0WKVnY63dzxMHYyGmDVZeHgIrl9jSlLlLAim02I6LrUi9MvpEz3b5wHthN+CsaGDCEMvBcfIMEIFLOaDics//fZOel1TL402YSGp/MoGGEKkF34LPzzwebVBUAEQ00pwaRyW3z0Z/b9oBI2rnOmDsVBOhPkVBn5AcdKxdyOJFKbY1AISBVJZJaxBTqmdVWUta/JKEdaC7ZprJmYym+aAUlKqCkTwGgzlDCol8EoM2jrI9q5VLfjKcqHeJ1IGIUxqXUJmI1StpeEc11K1gEfV758DEpNFQVINVLKqRanrQk9/CroRTp0oRmfoBfVCWv56sSgI1//rlIia4zUQ81RaqnDruj00B7So3aMWVBIIfMDEfrSicWwvdELUItFp83ExoXMn65LpFuIwpxCmJIwKvwMOXpnB7Qy9uPXTyfMNjR/0E+roglCeqeYnKhrVh/gnsD1E4KFSTC8+B1PRiEYgOsyUjAICX0A+h/ujsnni8iXjLT1c6jivQjqEH4CPN6sH9CJY1hIXIIY6q29hZS3nsiah1PcKHp6zQGCh4UZrFoKpvDVYYvFP9hwaPVvnzAHHx8kPs4XiRhvT5GOFe1W1ZUKpsd0crBXLlTjEJUpMIGyfsDA5IygbbpjLBApFnBHgDAopz2Kffbvj4MgV3LtDo83beZ97M7Wx4HFXBtGyF0R9x1EDoxgtFf1UR4u1ujzFeoXJsRGBMkUNDD/iyFxzIvLvSJb9tXMXGe94OVuEe9h/1lsc0JfelKgAAAAASUVORK5CYII=",tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA85SURBVHgBzVoLjFzVef7Pfd87szP79vq1NsY41HWNQy2FilBc0rpp2lJXlUvVVtStSpsqqdSH1FZJqwYpoa0iNShECkkUE6Q8lDjvEMCExAgSQiCAjBMC8a5hzZr12vuanTsz93XOyX/OPfex9hrv2vGyB67v3TtzH9/5/v/7H2cI/JIG53sMeHnrRtCpT6657yyskkHglzD8R9621+utfYJY3ZsRKZ6JXwAW3wOk8hDZdegUvInjsgG2H9x5A1jwLXfwLf1g1NVZhv8HuMXjyO03IAkeA2PgObLzvhOwwuOyAPIn3t7TbEx+tbJmwx7NG8K7VdQnrHR7POYRAA0bwJNHQXM+Bjve8jghdzJYgXHJAPmRPcbs7Kv3uPX6u53+TQC6h2c1xNDCYxMIMfHuYrMgByo22olpMHlQ9/l7yW89lsAVHgZc4mj6479nu+a77Z41eBfFHO3A8SM/hMHNHlT6B0C3PcRYBYLgaRKAjsBBt0waRH87N33qbrziJbjC45IANh7ZdQ1tzRzy+tYBMap4Bl9csINE9ayvw7e/OAmbN81C76AJmsbBqzrQs6EP3JoDSdSBsRfOjm3bVF8R8dHgEgZtTn3K6+62NdNWZojIOAJElhyPwaaNBvzazRvh5KsMvJoN63cMg9NlQ3vmDIw+P86bsfmvZN/LTViBsWyA7e/svEEzjJt120VsXgpODNaBuHkGmmenoaeXQ6VehZtuXQ+DW4aAxiFMvzoGZ8fm8Hwf2for3oHGw9t7YQXGsk107Ccz71y31UjVSdMRoCHCASStSZh6ZQxGjiZAKUDXseNQ7a9CEiYQtTvg1F0Y3rUZDLcLkvb8H4V+46/wDh+BKzyWDTBuxcM0osBoApqI6cI0eYja4cDA1VugZyOVykkgwZifIMEaiqoOGn6uIeMcJ0P4a+C3dsEKjGUBxCSFvPh/rXWcecCSCDgNUSHxhTUbiDMEhiNuKKxebBzSrEYE/TZ+N8AQEkDUnIbG5FRy5nX6FKzAWJ4P/nC/Q7m1Vr67sEN8YQzgCogQGyE6bhr75IaGTH3gwQwk85PQGB+F4z8eg2NP+5/b8S9n7oUVGMsC6M89X3UcNkQ0vExsXCKFNIjjHk1SZi0cWWU+2vMUkjcF4fw0zL0+DkefmIWXRmof+O2PNA8gdg4rMJZlos2Gvsmw4gENAzcR7EgF5SkwUKECwXHMQ3noAw2aEPrz0JyehZmJEGK9/l/7Pzn+QVjBsSyA0XzjBmSPZKGBMwokbksV5QiOJyEknSaqpo/AmhDMd6DVSGDmDIHTjdpj+z7+d/8LH74TVnIsC2DYojtrfZokjSYxkLANlCBbjEEcdiBq+dCZbyG4GNrzHE0agZ3RocOcL3CL/TMm2Fc89zx3LBkg5/+tjXz07m1E4uNAowiC5jy0GxjgA4asUWjOcZib1qDZNGA+4HEC+vHuNdaH/myv9nVy60Qb3oSxZIDN7z7UY7n6tUTHWIH/MWQwbLagcTqG02M6TM0a0A4QusYmtZr95f712kO//5e7j5DdD7ThY/CmjSUDbDXCnQToGsN0wLAdKTKW50C1N4HegEIcEwgjDew19btuu3f8o/Kiux+AN3ssGWA4fepdXs0Cy3WxDMKsBNM0C03VTRLoxiAulDRMDOh1ghdgFY0lxUH+pf26abHftVwHUzJL1nUEARqYftmVCpZBFlQwwXYrDAbWNnxYRWNJDM7Zz+/UQn2rYVqYXyM4XUeAhoyDhpOAGYZgORGC59DTb2GUj2G1jCUBbM82rq/0uK4uE2Ybk2dbAhR+yPQIsHxCVkHGer1ew9ytBatlXNREhXk6Xc5+26sgQwqcgTmnIUBqik3cG5rM3vrWdndgFY2LApyFZ7frGt+jGcI8Dbmh86laUJPlkIYgdV0Tf2LPYjiCVTQuzqBGbzc9zxZmqAm/k74nLFtV8mKHpkowg7MQs//aBIVVNN4QIP/+33RxGr039Tk9ZU0CzC5LCwKi/sXUFKrdzqoC+IYic3rskZsqdccRZikAyjIpzdVUqbTw+5whVGs7AnwaljP48b+owfzUYBzMVDGeGmCasemt88HsPUOuPXhZzak3BGiZ/D2m4xTAxCZ9L23k5vyJ4g4T7gSzGTC9iybU/Cf7rdbJY3viqHO7Zpg3tUaf3kiIToQbEOHjWJWEbezy8xMsOPLWcdC1wyQh37Y2XfUYufpQA5YxLgiQ/2hf39kTT90iHogPL9V/JGWPiSI3bUtwueGphHCYt9/QRCcPbd175tgTdzoVZ7dXqxmyOydCjmHK58gJzFv+2PbhyTB2D+5gpHNHPD768873rvucY1fuJzc+OQaXA3Bi5Lk/cT3TIZI5BQxKvscVOHXMKL6NjuX9+OFFAb725G+4/Gcn7+Kx/w/1gR7bcKsq5Diy1S+FS4IrywIm9qIRhGmgZlcEs9v0KLgzCPy/9x+89n3Vd710P1xkXFBkWODfajl2SVCg6IGK4pYnssiVICmVACnHfsX+F89LY8Y/u34DPXbi826F/lN9sNc2vRqGUWTOwr6qBCjCjqWayEZpr1RbF9/BXo9VBc2tgVPtWWdVK59oHd72Lf6z2/vgUgBqpnGdlP8FZ5WqiD6MMFEBFKWT4TFN8FiH4Nxey+x93d1nT/ifcatsX6WvB0zFHGbs4iElQJmVZE/MLEYrjsX3xETg9aZTtS2v/getV558uPX4r6+9II7FTqIIDKHob5DikgPjRZOJqhYFApPsIUgaCwZhQVHrf2Nwzcuj7IG1V5nvqPan4DSRBQnGhJiAMn/OS89hxfOyY86Kz+UcoCmjz4qqxql17+at+aPNw7t3LBng/KvPSPYKKlIhkQ/Chi9nwjxpClAwmCBAzF8ScHJJxw6AMfKS8T/rryI3VvpqijlLxVPFjOxZlSYvv5iVJjQDTNPJzb+nSVESE2ZX6wMsmvqB//Bbr1sSwImRZJdlq8aSUsn8gQIcghLMSXAImGFNGCPAONDnsns89YF7/6PqNQ909XVhYYzgML1LVbJshgALGsSclcCV25FUPlduEmQGGuRkYagBt95bY/HsozPf3DJ8UYCEJcOpefIioKvZzEwz9z+a+mDYIRAFZFaCu2t4u0Ha768POsSqpGYpkvLcz0gZmGJHnqLnbBmoBAo3UZPAaK7kIPNhE2vTrn5cGLm/vLCzOEC9lTotE0FArcxKJlNQwBV7GUAUmACLJNdqj4nmVGOifc+6zcRxqhXMy11Z/S8Qj2zCoGSCAsiCBnKJLQkoSUExmjPJ01iZ3lV0M5FJ09T3RE3/Hy8IULwgAuvnWYwTIBnPTTUDlgkMVwLTauGL182Tj/77p/f19ga3uFUvDQW6vjDUyBemhX/lf9MCBC8BEYs1mXnK4zh1EWFF4h0gsyYukxFUf7EGcgc/undwcQZHZswkEWvSPAWhXoJDyURpxl6SCgzKZwdNNA7rJ9uN1vvXbdLQ7yqpqBCtIC8zKcYKEGXfK5tlGRiNc/ZS9ygyKLlX7yneSTzKMLV148+9eJt45PmZTONJ3TConSmk3DimUizNPTPWeJKKSxLH6HvYF410tnk4/FUg0fVuvZZ23vLKQ6V5EqgyK8bT8wt+a1FSU+lbBYj0FF+gupn4ZZYl301eByTpBL+DH95zPkBni9bpjOnpRTwPBVzOuLoRzirF5bM4DDApjqHTIGAiVeMnmu972y2G7LxpqjFF8uyHl8IOzjQn0irk51LHSsAUdvH8AhAUPqfch6t8OHcdqhQ+vWbr4gwGszoKqMVL1KcgmXpoJizIIGUyfaz2aHD9zdha9BPwunuQPS+tCpRqkjI7POdKbaUT6oCXWOSQXcNyLcjEKX2/4lg0o8WSQhLhpLf1ZFGAzblxQzeomzlOelN1I8LzNxFhxLRt7KY50LsBl6UjXD3qtJG9imxrCGaIEpeymUGBowCXm1yBNGMn1YJzTFGqakYAVeDE0nkiXSdCqwra+ouLAgwnpizLoJ5Y0JTzl8U9VhQJQvYJ+pgM4JYrwepWiPmhm4IT7GkLKw9+LojMr0rM8lLYkBObM1XsJSAlcpyyUqgSYicUncHUBMP1EedriwJs0+5eor/eReQ6OxQ2L01Uk34lAYotA4MD/0obUopdYZi5+ZT2ZaHgZf/KlZGV9oUZSpZKoNIKhskkQ+4xFicIMsYme6tlPbPmxs6D8OFFABKzsoFzXSOiSyaVjysJZtg5S0VBgBINKJJX92n+yxGYeBHxHV5KDIrsp5TTwjmgchNU8Y0XwHhekilfY9meS8AiTNEIlRyTjdERq9UKvP98+76J5qIMMn/sGsNCNgQLmqb8iKQBXWVMOoJTQleaGS2NY0L5RXyUs5wUad0CBpkisZQhKdXOTJEtYC9Tc56CU+cE4ERUMZgHd5oExl4zTlKj/8D+g6NHstc6D6A/Z17dNxSnfZhS/CKqNhRSTdEONKpj/Weo3iioWU5ScFRJNldssIwlWMggWwScMtccXA6Q56zJ4jqRhY00ybOndZht2Ydra/T3vOODo6NlPOczSMkA9n9KfkekYDBsBIkZSwMwKeJa2a/yjAVK8l58rzhVSgNLIPJvy7+hYEr6WapzIqlJROWCmdPpSQ0SYj5VG/A+9Md3n1p0re58kWkzg+LabBzimoOeKFOgChykJiJnAlSwTd9aJLtpmUekwOQF+nmlEeRKynNxgRJQyPeZeItsTZRjSUiggUlFu0Pafmg9vHaj+aWtW+GBodtPXXAx5Pw42NaPTZ+mt9V6AwWIp0V8wvNZVEznL533hPVUbLJfmWSmDdmPMcosAhQpKECef8v0U9TV2IIUbEUIqt0mMDuvdzBzHrG6vC8ODdtfeefevlGy+9mLLmORc08c/OuhgW6T/b8J7T+vVTjKIpG/PZOziA9NKMljdkYQ9k8xweVgYyfCsvEYl9G0UguVlJ6SdR9UrFaAiPSnKCJyCyJgIdV8QyMnqek8n7Do8e3b9Ge3D+95gfzpoWV1zhf9xa8omb77bwdvDFl4A49afcTQA65ZDc7dBjaefQ3LP9m60HA1wkywLop7SNhcGzadLWCTLQbvbIx9bTBmXBehJVPcPMfmsuEggVk6T8wqn47AeS30YbQ2GP/U0ruO/ebN2lHnD/vHCXn2shYbL/tH6Rca/JUDDkpb19zYMxWdEyuK5nX5gdHFDc+ILdcL3b4dLdDiFtlx6IqtSP0CkHW1niIkAScAAAAASUVORK5CYII=",No="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWKSURBVHgBpVZpbFRVFD73rTNv1k6HbjNOS6FQC7QKjQRFFkUkCGggGBeM8af8QBMMakwkxBijP9xiMNFAQhBNQCNK2KJAJFQwqbSlG13sYpnO0mlne+/Nm7dd7xTbgFH7KF9y3ktu7jvfPfee73sXgUU0Ny9j6x0b61VlxMDZWNi16vQYzAKUlUm4bb2jwfXouUxypDnSk23p/EX9MHp2vQNmAWRl0tCJJSs0SWsajamoPFgHwcVrgKbkmBRr/VmUY3tC65tGwSIsVcjifF9sNA6Nj+2AaLQbeKMfOJoqLSpf/LyTQZeufGoPgkVYIgxs6U1ULVp2Jp8aBEZJwUBnE6hiL4DUATyrzHU5vTvBIhirE0GNeCIDQ1BZMwfKSjGIyU6QKQ/oUhZoxmywmsZShQXIExO/ugUMFQEHIESBWzDA60hDakIBmsYJq3ksVzg8mo0Hyilo60RQfQ8LFINgYFgCVtdBSufOW81jqcLw8XkP8qyxJyfLUL+ABSmjQC6bg0XVDAicdqzxlewhsAhLhC63w39Ppe9iajzXlkyI3VdaRGhulSA9If4WuyHtgjuAJR3eigt7S9bxvPETYAAd0LJVbyWu3sn3lgivH1joKg+Zm/u/3fpk7faTm0ysk/Yh+uSoWMfhTU3ztp08Nt6X/75mV39+plyWtrQsAAdcHv4Ih4WnWYYTBBcDDhIcR5Xy2LXV5aK/KZ6HDl/YO3MTzkjYd7Byqa7B9kxEACPrhfi1+aDlDVBJxNtrwJS9kIkUkb2itpVVBe+dKd+MK0IMqpclHTLdQTAwhsTllZBqbQREG0T0Bf82IdJWDp4lYcpQYTUZaIe7qVBX4QVZJEkjeZA0FRRDA1liiDR4UAoaJGOxqApixgDTQE/MlO9/Ca/tDxUhhB6SRRWSKe3imCRCLJudjqhYCBGSGb1VTKvEcahHWj7yemdN6HKjNaQTeSWnj2qZmvdVg5wdNsEgmjBJaKYBmqGDnpr/RS6rjtlsNOv2OTfOinDgy5LS4jn2/U43TY4JH0CGWypoiCZKYoiX0pNxU1WGaZOwZn7t8bGoLOB8r//z0pI7JUSecs8RhqfLEjHlj2hS/szEcH+haVRSUY60bSEKFRfGdAMvlHD+3WxGu2FzsiFvhXPffxFOCz/+w33bEWP4/AZ3OAHS6zYb83YkLA4h1v5sMFAZ/e6dpQcxwmv/6RT45qNrx8OXG353DNZX1nLnBAfrzefwGzRDdygKvMTY6KPFG9qOThP2HapdwXP4OKKYqxyPH7cJLBrpz/YJHl6UZL3B57NT+UwA4gNzQMuxMNhaMslkkm0FHkHVglGoXd2ezkqinaFgVE6pQkW1syQZlbMMz57KK9palMssmf9yLD6pQ8ZUusMjxjDDMuuK5/AwHpf0shAfsgssn0oC9PeMg8clQmhpGPx+GnoanoJBuQK2BU5DqT0BZmIMertEj9fPQXW1vUov4nIjgxKmKcoRHU5vdjjoD5bvjsVv29KOvXVcrzj2wKJa986KucIzHI9QLoeAohHougmJqAbjURH8pTwU+Yit2RjgBZYYDJqslqJI55LzFNMm2OxEv5qpdbSkXxwKT5x/7hMpNsUz7TSL93Wp5HVp+Cvfa1Sh/ZAJgvD3KdmIUQcowJiHzq4UIDJUUUaI/TbwFDFgd9DAcIjc5ADcHjRZh65hVrCDeSvZbYRTCP8pnUgllS02BymNrNgg7anldeIuxGUkPcLR+MLV8WD7cWOjuSF1iithYo08R6/k7XSxXaALhg6mSe5XGaOH5Dk5uWRMbiXoZn/96+/p7Ju+5dgw6zTVqCUCFwnhIGOjrntCXP+aV1OZQo6pBAX8uNvl1xS6zmZHQYamK2gabtCyfmbtx6kU3C0Kq4VZ/Lin8BcbMYZZ5NAZhQAAAABJRU5ErkJggg==",nm="/healthyhub-project/assets/maintake-girl-2x-ee142481.png",Do="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWoSURBVHgBxVZZaFxVGP7OXWe5MzczmSSdTpImbdNal9hgtUoFi1oUfRAXCuL2VHxSfHbBBdwQUeqDWhdEFB9EUKhL0aJUrUVKUeyiJrUxaTLZZpKZO3fmbuce/5suVLDtbfvgYS5zl3O+7/+/fzkHOI8hZn/IiJn9Bs5jSOcyef7H+653hl/Y4btHFjzvl3rj9+cPTnw6dOO5YLC4E/dszXcbmaX7zY6CGULG5NgCxg7PoGd50Vq+KrN2yaadf8XBURBzZJKpO2TJNl3LQWXOQ1KXsPEGA36rmpkdLd9EU16PgxNbUscJcvkc4Dk+hta1YXDIRHW2CVXlcJtuOi5ObA+zBiuZpoxMPk0kMgVDYFm/Ae46SCWl/rg4sQlVRZRqdoh6y0OpKEEI4OiMh4wWIpkQfXFxYkvqefzdBONYXlLRqDqozTlY2a3C0EIBgW1xcWJnKXnExj8qft+xJLVh78GAngXWX6ZhbsbeXdpc3hAXJ7aHjEHUrOYDlRn78NAAMLSKYXqy8Vd5vnk/zmHEjmE0jJ9yE41rg92z096KSEc1If1s7u84CtRiY8SStPxJ/10ZS9vM/hQ3K5uUDNNomYh+At4Otx4W2a5GZ/BO6a7RTy+YcOS93g1dJeO79DxT2H4Bvo60bT+2ktUBeTfRrmZwl4be7ERjU++947vOhHdWSSUmbXFagSLVZejU0tg+8qzjOOEcENKNZ3M0m6Hmuuxe+nJhhIFgQw2LozXlIefqVI9EWj4mTEiScqqK2rQLJ8XguOLas+GdUdJvn+xrK/aIOc6Z7OyzkOMaNEWBJB9PbioNP+CoCQ/SFWkCC8NGdb5z/aNWBefjYda0r2bMkOsLDsS807QYTylEFhFGnYbzkC4OJwzITZXl2nVJSRhXAtZXp8M8bR1+82xnV7HHfDllyPBd/0BW0X80jQTybQYK0ZUzkDdTMNIJpBX1gOv4w4apYtmA8equZwvFcyKcer8rvXYw+3mhmLhYJg14IF5SZVaOIiBLEnSNEkhTFuMZAVBcJgUPX9F1IN+ZWH3pUNvHe9+E+p+EpAyb/eKy62a/HLz7xEuRzrxkZPUralWPNlr7+Y1PV953PZ5uuR7spoOG7cJqUD+1WrDo2fW5IVjlrbEj9htOk8PMJzes6B7YNrx1pb7owPbBR+Y/u3woao/sj9dXXZXKyTvJzH0pQ2L078uSuH5uurVQq/hPrFnXP8VEaP766i/PKIwtlajHsajPAYvx4yHlaiisgQfXrs+0a/h1z8itvX3Gk8mUYtCnn/2A6UFkk89X2PXGNWz87e786DT25fJJpa1dLdEkVOea9fai8ZmiKtdNTjR6k6qEHMXLK7eibQMH9niUjwK6QocNTULvGhlKnyEqCx5b1p/5O/C9ndWp1n1mPq1yP0C14s84tufqujy4WBY7Hlva44X8iZ7u1JbCEg2FDg20r1I2agiFhLEjFlp1l6TS0d2nY/voJRiutOPhdXugyiGsmoBVD1DoStCzQOC7UOgkEL2bLvt8fKz5ViDCp257bmb6ZB3ufrF7+8qL2m5ta4/IyHKF0SISnbIi5BIdJzhGDlVpt2fo7NJh5lSks+QZechYFJzFsiR5SepQhl3nyOYkLFR8zJadbWu2HH4w4jlZh3YtcMZGGnDdFNJRKXi0knoJ1TkoMaGQ5W15GQcP1TA8akM2ClhdtJAvaEjSfEWRIMsUXynKZL5ocHncR/nvJiiRTm4nJwlrdftxz/MHa/POQCIpQdUZJUXkHaew+Z7nBdO+E3zNW3zXhwt3TI1OlMTGyd/YnaW9yxSd3S6r8pWaJrXr+rFK89wQdiMMSa2fWnLrxRM8/2ptW+9BtiOlXCorWo6MVIXMXSHCCnfkGdl2Jjd/DO+UdeLUtR88lM8agq+iJmQKJiV9jwvO+IQhFw/d8tqIi/9r/APfYI9Vv9gUnwAAAABJRU5ErkJggg==",im="/healthyhub-project/assets/maintake-men-2x-cfdbbbe4.png",Xy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcqSURBVHgBrZVrbBTXFcfPndfO7MP7mF17196114uNTUJtDEWUYhIsVW1REE0TCYWWCicCaqV1ax4pSqtIldJKUVUIqtW6TVMqSj4kjZo2kVo1oSkGGnDDw6wJ2OAX68fuwq53va+ZnX3M5M6wSxwHQl5HupqZO3PP7/7PPecMwALbu3fvI7t3/+g75eddu3a5uru7dfAFGlG+2b9//566utq/2Wz2nyqKgtQ5m82y2+msnN25c+cm+IKMKt/k8+KIJEkBvV7f1NPz5FI8dZUgKCabFc+Mjo7++16OOjs7WZvN9pgsy55Dhw49q8719PT4dDr6GUGI/qS3988RTWF39+OOHTt2rDp48Df/8vuH1sbjsZdlmdiovgwGZyYDgZnO/v7+wr2ABEHQOCJP87z16+U5o1G/1ev1ddrt3lOYUaXOkR0dX3u4trb2lba2VrGv7/dvnzx56u91dd7glStXEhcv+v/v9/tF+AQ2ODiYa21dMZbL5VynT595XT2WgYGB32HFbCKRONjb2/u2+h3q6ur6Ns/zD6TTaYjFwi8cPfrKcNlJ7LX6p1iLuT19I/yWucazDzu5lopGOh2PBkJ3A2/fvv3+I0eOXO7q2rHeaDT/MJMR9vX19U2X36NF3yPlmK/ixs3EahDlMOesHOLsHhQ4exm8X14CVEUt5GPjV+dDExsqt0TC8DG2YcMGFh9FdvH8YiCEjjpPOhqWrJ88NwpL2lfjw2Fh/Mx5YEgB3G0rgeBskI1cvT4fmu1wkuun0ZZXi+q6mZc4t3ubOLPQ18aNG3VNTU1rLRZz9/x84gJOpl8Si4HFXE5CJAXpRAGk+CwgkoaGdavx1QiRET8o2Riw9gavudJ5LCj+d2K81/p04AX+eyaLZzrysmvPQl9Wq7UGX7bodLoGiiKrP6RQPeTwS659BEm04bFVkhiIB2PQsMYHrKMRlKIEYyfPgtlOgGPpckCMASu9Brl0OpeOp9513tfSXshmROFmYJn10VBgsZAnnthsOnz4jdRthSMHDCtZE/crQ5V3q5BGULOiBaqba2Dy3DhI0TFABFba3gaxcAHik++Bks+oSoHmOCY5V2iXklFgLG4OSLY/+CJbtxiowtTrbWA4Jfjng7FBJAsgJjKQS0XB5msGV7MbRt+dgNzcOIYCND3QAvGwBImpEVDkPHDO+0DPOyA4MgWFTAQqauq9Oqt9YPqPhha4g5HlmyMnQO5cjt5ElLTZ6nFapy9OgLXaBPpKL8hFAcb8M2CvpIEy8GB2OWDKPwEcVwTGbAezk4d8Jg3ZWBAYlgZGrzdm09lvbHuQ+csf3sxm7wic/K1hRVWz4z9yvjBMEAVXQSoyketR4GvtYKpyASpmYGpoFmwuDkMdYHVXQV5Ig87EYy96MDocwHA0iHMhIGlSHVa2KF389evi5YXA2yGNhWSfAmQNZ/d+UyGMhvr2tbjTUjD6zgWQpQQ4m5vBubQKhk+NQD45AyROGpMbt1xCbceyVj60xQNmXytQ+gqgWQZkEn2k6d8GrvqF+Fps6uafCCRAdCoOBTEFTe0rcTmQMH3+kpYklY3LoGaZG9LRGE7rXCnJy4mOoepPhsQR0NtxMhmB0tEPK5Ne9o5A1cRw5qm56zPHHB4zjJ2+gmsyA0vW3A8EQ0LwPZwk+TTwvkaw1mNlqPSjUVSQgoda/8VbG8C1q0aA4XTG8Kn0mrsCW56DOC0lvjUfDB13eK1w/dyw2gnA3folze/EhWEsbL60TCmpkkswuTSnaO/V5sFwLOTEfPNdgap59oCYnWM3J4Ph81UYOjV4DTNFcK9YDlU4gZAKwOWgQWQ8FPznUvCzjEMsFz5QjJDWpUiKjC/0/5FeWrbB/azX4mX7LW5nXWQyjpu3DyeC8RaEwPtE5K3laKEbopREGJgXcKnEIBkO3UhF0897l606gDr6C3cFquZ/lq038cwJk93hSUUi4GryAGO04AZAaQpKh6gBkfqsbgKr0jaAFSuFHI6OANlEHOKz0bc8jW0PfSxQtdM/42psVvRXnYH+qpwvgqXaDEYbD6SOLalUSrHCUKxcbYGIwPPaoLWQF8UkCLEbKRMiHPcElm34Of33aQ49mYxBi81FYqgBdAYWnxGjhRhpZ0ZiDoVF6nBmG3AdG7TzVSTcKoX4P9mOS5s+MbBsQ8+wD07OUOtdHvlxowH59BUEUCwJnFGntjRcDixQeBAMhlKsprooCSAT5FrmK+8MfGpg2caeN62TSeZ/iDRAJJAEiy2HeyoDBqsJaBxuUgMyt8KL4AC97uw+dd1nBqo2/WLFj3HjPpSZz8PQiSRu7gXgPQSYeAPOaFYLsSIrx01ydhPaHBLUNSR8DvvuQ9IlOqs0mni9IiTzx28GCR8JRRohnKE4WeRc7h/xorjV9kgkXV7zuRQutlcfs/yct8jb7NX5y5wNHW74gfAGziVl4TfvA2LYzvsWNrdVAAAAAElFTkSuQmCC",tT="/healthyhub-project/assets/waight-2x-47affc78.png";function Lu({gender:e,goal:t,buttonType:n,weight:i,onClick:r,mobile:o}){return h.jsxs(h.Fragment,{children:[n==="goal"&&h.jsxs(Vy,{type:"button",onClick:r,children:[t==="lose fat"&&h.jsx(zl,{children:e==="female"?h.jsx("img",{srcSet:`${Oo} 1x, ${qp} 2x`,src:Oo,alt:"Lose Fat Girl",width:"28",height:"28"}):h.jsx("img",{srcSet:`${Mo} 1x, ${em} 2x`,src:Mo,alt:"Lose Fat Man",width:"28",height:"28"})}),t==="maintain"&&h.jsx(zl,{children:e==="female"?h.jsx("img",{srcSet:`${No} 1x, ${nm} 2x`,src:No,alt:"Maintain Girl",width:"28",height:"28"}):h.jsx("img",{srcSet:`${Do} 1x, ${im} 2x`,src:Do,alt:"Maintain Man",width:"28",height:"28"})}),t==="gain muscle"&&h.jsx(zl,{children:h.jsx("img",{srcSet:`${Ro} 1x, ${tm} 2x`,src:Ro,alt:"Gain Muscle",width:"28",height:"28"})}),h.jsxs(Hy,{children:[h.jsx($y,{children:"Goal"}),h.jsxs(Gy,{children:[t,o?h.jsx(Yy,{children:h.jsx("use",{href:Xt+"#icon-arrow-right"})}):h.jsx(Yy,{children:h.jsx("use",{href:Xt+"#icon-arrow-down"})})]})]})]}),n==="weight"&&h.jsxs(Vy,{type:"button",onClick:r,children:[h.jsx(zl,{children:h.jsx("img",{srcSet:`${Xy} 1x, ${tT} 2x`,src:Xy,alt:"Weight",width:"28",height:"28"})}),h.jsxs(Hy,{children:[h.jsx($y,{children:"Weight"}),h.jsxs(J5,{children:[h.jsxs(Gy,{children:[i,h.jsx(q5,{children:"kg"})]}),h.jsx(eT,{children:h.jsx("use",{href:Xt+"#icon-edit-2"})})]})]})]})]})}const nT=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  @media (min-width: 834px) {
    display: none;
  }
`,iT=w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 12px;
  background: var(--primary-black-second-color);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  padding: 24px;

  @media (min-width: 834px) {
    display: none;
  }
`,rT=w.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,oT=w.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  padding: 0;
`;function sT({onClose:e,gender:t,goal:n,weight:i,openTarget:r,openWeight:o}){P.useEffect(()=>{const a=l=>{l.code==="Escape"&&e()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[e]);const s=a=>{a.currentTarget===a.target&&e()};return h.jsx(nT,{onClick:s,children:h.jsx("div",{className:"container",style:{position:"relative"},children:h.jsx(iT,{children:h.jsxs(rT,{children:[h.jsx(oT,{onClick:e,children:h.jsx("svg",{width:"16",height:"16",stroke:"var(--text-color-button-grey)",children:h.jsx("use",{href:Xt+"#icon-close-circle"})})}),h.jsx(Lu,{gender:t,goal:n,mobile:!0,buttonType:"goal",onClick:r}),h.jsx(Lu,{buttonType:"weight",weight:i,onClick:o})]})})})})}function gt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var aT=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Ky=aT,Uf=()=>Math.random().toString(36).substring(7).split("").join("."),lT={INIT:`@@redux/INIT${Uf()}`,REPLACE:`@@redux/REPLACE${Uf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Uf()}`},Fu=lT;function Jg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function qg(e,t,n){if(typeof e!="function")throw new Error(gt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(gt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(gt(1));return n(qg)(e,t)}let i=e,r=t,o=new Map,s=o,a=0,l=!1;function c(){s===o&&(s=new Map,o.forEach((v,x)=>{s.set(x,v)}))}function u(){if(l)throw new Error(gt(3));return r}function d(v){if(typeof v!="function")throw new Error(gt(4));if(l)throw new Error(gt(5));let x=!0;c();const y=a++;return s.set(y,v),function(){if(x){if(l)throw new Error(gt(6));x=!1,c(),s.delete(y),o=null}}}function f(v){if(!Jg(v))throw new Error(gt(7));if(typeof v.type>"u")throw new Error(gt(8));if(typeof v.type!="string")throw new Error(gt(17));if(l)throw new Error(gt(9));try{l=!0,r=i(r,v)}finally{l=!1}return(o=s).forEach(y=>{y()}),v}function p(v){if(typeof v!="function")throw new Error(gt(10));i=v,f({type:Fu.REPLACE})}function g(){const v=d;return{subscribe(x){if(typeof x!="object"||x===null)throw new Error(gt(11));function y(){const k=x;k.next&&k.next(u())}return y(),{unsubscribe:v(y)}},[Ky](){return this}}}return f({type:Fu.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[Ky]:g}}function cT(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Fu.INIT})>"u")throw new Error(gt(12));if(typeof n(void 0,{type:Fu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(gt(13))})}function uT(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}const i=Object.keys(n);let r;try{cT(n)}catch(o){r=o}return function(s={},a){if(r)throw r;let l=!1;const c={};for(let u=0;u<i.length;u++){const d=i[u],f=n[d],p=s[d],g=f(p,a);if(typeof g>"u")throw a&&a.type,new Error(gt(14));c[d]=g,l=l||g!==p}return l=l||i.length!==Object.keys(s).length,l?c:s}}function zu(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function dT(...e){return t=>(n,i)=>{const r=t(n,i);let o=()=>{throw new Error(gt(15))};const s={getState:r.getState,dispatch:(l,...c)=>o(l,...c)},a=e.map(l=>l(s));return o=zu(...a)(r.dispatch),{...r,dispatch:o}}}function fT(e){return Jg(e)&&"type"in e&&typeof e.type=="string"}var Kk=Symbol.for("immer-nothing"),Qy=Symbol.for("immer-draftable"),tn=Symbol.for("immer-state");function En(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var is=Object.getPrototypeOf;function dr(e){return!!e&&!!e[tn]}function Si(e){var t;return e?Qk(e)||Array.isArray(e)||!!e[Qy]||!!((t=e.constructor)!=null&&t[Qy])||Pd(e)||jd(e):!1}var hT=Object.prototype.constructor.toString();function Qk(e){if(!e||typeof e!="object")return!1;const t=is(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===hT}function Wa(e,t){Td(e)===0?Object.entries(e).forEach(([n,i])=>{t(n,i,e)}):e.forEach((n,i)=>t(i,n,e))}function Td(e){const t=e[tn];return t?t.type_:Array.isArray(e)?1:Pd(e)?2:jd(e)?3:0}function rm(e,t){return Td(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Zk(e,t,n){const i=Td(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function pT(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Pd(e){return e instanceof Map}function jd(e){return e instanceof Set}function Tr(e){return e.copy_||e.base_}function om(e,t){if(Pd(e))return new Map(e);if(jd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&Qk(e))return is(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[tn];let i=Reflect.ownKeys(n);for(let r=0;r<i.length;r++){const o=i[r],s=n[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(is(e),n)}function e0(e,t=!1){return Od(e)||dr(e)||!Si(e)||(Td(e)>1&&(e.set=e.add=e.clear=e.delete=mT),Object.freeze(e),t&&Wa(e,(n,i)=>e0(i,!0))),e}function mT(){En(2)}function Od(e){return Object.isFrozen(e)}var gT={};function Xr(e){const t=gT[e];return t||En(0,e),t}var Ua;function Jk(){return Ua}function xT(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Zy(e,t){t&&(Xr("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function sm(e){am(e),e.drafts_.forEach(yT),e.drafts_=null}function am(e){e===Ua&&(Ua=e.parent_)}function Jy(e){return Ua=xT(Ua,e)}function yT(e){const t=e[tn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function qy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[tn].modified_&&(sm(t),En(4)),Si(e)&&(e=Iu(t,e),t.parent_||Bu(t,e)),t.patches_&&Xr("Patches").generateReplacementPatches_(n[tn].base_,e,t.patches_,t.inversePatches_)):e=Iu(t,n,[]),sm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Kk?e:void 0}function Iu(e,t,n){if(Od(t))return t;const i=t[tn];if(!i)return Wa(t,(r,o)=>e1(e,i,t,r,o,n)),t;if(i.scope_!==e)return t;if(!i.modified_)return Bu(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const r=i.copy_;let o=r,s=!1;i.type_===3&&(o=new Set(r),r.clear(),s=!0),Wa(o,(a,l)=>e1(e,i,r,a,l,n,s)),Bu(e,r,!1),n&&e.patches_&&Xr("Patches").generatePatches_(i,n,e.patches_,e.inversePatches_)}return i.copy_}function e1(e,t,n,i,r,o,s){if(dr(r)){const a=o&&t&&t.type_!==3&&!rm(t.assigned_,i)?o.concat(i):void 0,l=Iu(e,r,a);if(Zk(n,i,l),dr(l))e.canAutoFreeze_=!1;else return}else s&&n.add(r);if(Si(r)&&!Od(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Iu(e,r),(!t||!t.scope_.parent_)&&Bu(e,r)}}function Bu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&e0(t,n)}function vT(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:Jk(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=i,o=t0;n&&(r=[i],o=Va);const{revoke:s,proxy:a}=Proxy.revocable(r,o);return i.draft_=a,i.revoke_=s,a}var t0={get(e,t){if(t===tn)return e;const n=Tr(e);if(!rm(n,t))return bT(e,n,t);const i=n[t];return e.finalized_||!Si(i)?i:i===Vf(e.base_,t)?(Hf(e),e.copy_[t]=cm(i,e)):i},has(e,t){return t in Tr(e)},ownKeys(e){return Reflect.ownKeys(Tr(e))},set(e,t,n){const i=qk(Tr(e),t);if(i!=null&&i.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const r=Vf(Tr(e),t),o=r==null?void 0:r[tn];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(pT(n,r)&&(n!==void 0||rm(e.base_,t)))return!0;Hf(e),lm(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Vf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Hf(e),lm(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Tr(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){En(11)},getPrototypeOf(e){return is(e.base_)},setPrototypeOf(){En(12)}},Va={};Wa(t0,(e,t)=>{Va[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Va.deleteProperty=function(e,t){return Va.set.call(this,e,t,void 0)};Va.set=function(e,t,n){return t0.set.call(this,e[0],t,n,e[0])};function Vf(e,t){const n=e[tn];return(n?Tr(n):e)[t]}function bT(e,t,n){var r;const i=qk(t,n);return i?"value"in i?i.value:(r=i.get)==null?void 0:r.call(e.draft_):void 0}function qk(e,t){if(!(t in e))return;let n=is(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=is(n)}}function lm(e){e.modified_||(e.modified_=!0,e.parent_&&lm(e.parent_))}function Hf(e){e.copy_||(e.copy_=om(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var wT=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const o=n;n=t;const s=this;return function(l=o,...c){return s.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&En(6),i!==void 0&&typeof i!="function"&&En(7);let r;if(Si(t)){const o=Jy(this),s=cm(t,void 0);let a=!0;try{r=n(s),a=!1}finally{a?sm(o):am(o)}return Zy(o,i),qy(r,o)}else if(!t||typeof t!="object"){if(r=n(t),r===void 0&&(r=t),r===Kk&&(r=void 0),this.autoFreeze_&&e0(r,!0),i){const o=[],s=[];Xr("Patches").generateReplacementPatches_(t,r,o,s),i(o,s)}return r}else En(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let i,r;return[this.produce(t,n,(s,a)=>{i=s,r=a}),i,r]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Si(e)||En(8),dr(e)&&(e=eS(e));const t=Jy(this),n=cm(e,void 0);return n[tn].isManual_=!0,am(t),n}finishDraft(e,t){const n=e&&e[tn];(!n||!n.isManual_)&&En(9);const{scope_:i}=n;return Zy(i,t),qy(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(r.path.length===0&&r.op==="replace"){e=r.value;break}}n>-1&&(t=t.slice(n+1));const i=Xr("Patches").applyPatches_;return dr(e)?i(e,t):this.produce(e,r=>i(r,t))}};function cm(e,t){const n=Pd(e)?Xr("MapSet").proxyMap_(e,t):jd(e)?Xr("MapSet").proxySet_(e,t):vT(e,t);return(t?t.scope_:Jk()).drafts_.push(n),n}function eS(e){return dr(e)||En(10,e),tS(e)}function tS(e){if(!Si(e)||Od(e))return e;const t=e[tn];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=om(e,t.scope_.immer_.useStrictShallowCopy_)}else n=om(e,!0);return Wa(n,(i,r)=>{Zk(n,i,tS(r))}),t&&(t.finalized_=!1),n}var nn=new wT,nS=nn.produce;nn.produceWithPatches.bind(nn);nn.setAutoFreeze.bind(nn);nn.setUseStrictShallowCopy.bind(nn);nn.applyPatches.bind(nn);nn.createDraft.bind(nn);nn.finishDraft.bind(nn);function kT(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function ST(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var t1=e=>Array.isArray(e)?e:[e];function CT(e){const t=Array.isArray(e[0])?e[0]:e;return ST(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function AT(e,t){const n=[],{length:i}=e;for(let r=0;r<i;r++)n.push(e[r].apply(null,t));return n}var ET=class{constructor(e){this.value=e}deref(){return this.value}},_T=typeof WeakRef<"u"?WeakRef:ET,TT=0,n1=1;function Il(){return{s:TT,v:void 0,o:null,p:null}}function n0(e,t={}){let n=Il();const{resultEqualityCheck:i}=t;let r,o=0;function s(){let a=n;const{length:l}=arguments;for(let d=0,f=l;d<f;d++){const p=arguments[d];if(typeof p=="function"||typeof p=="object"&&p!==null){let g=a.o;g===null&&(a.o=g=new WeakMap);const m=g.get(p);m===void 0?(a=Il(),g.set(p,a)):a=m}else{let g=a.p;g===null&&(a.p=g=new Map);const m=g.get(p);m===void 0?(a=Il(),g.set(p,a)):a=m}}const c=a;let u;if(a.s===n1?u=a.v:(u=e.apply(null,arguments),o++),c.s=n1,i){const d=(r==null?void 0:r.deref())??r;d!=null&&i(d,u)&&(u=d,o!==0&&o--),r=typeof u=="object"&&u!==null||typeof u=="function"?new _T(u):u}return c.v=u,u}return s.clearCache=()=>{n=Il(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function iS(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e;return(...r)=>{let o=0,s=0,a,l={},c=r.pop();typeof c=="object"&&(l=c,c=r.pop()),kT(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const u={...n,...l},{memoize:d,memoizeOptions:f=[],argsMemoize:p=n0,argsMemoizeOptions:g=[],devModeChecks:m={}}=u,v=t1(f),x=t1(g),y=CT(r),b=d(function(){return o++,c.apply(null,arguments)},...v),k=p(function(){s++;const E=AT(y,arguments);return a=b.apply(null,E),a},...x);return Object.assign(k,{resultFunc:c,memoizedResultFunc:b,dependencies:y,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:p})}}var rS=iS(n0);function oS(e){return({dispatch:n,getState:i})=>r=>o=>typeof o=="function"?o(n,i,e):r(o)}var PT=oS(),jT=oS,OT=(...e)=>{const t=iS(...e);return(...n)=>{const i=t(...n),r=(o,...s)=>i(dr(o)?eS(o):o,...s);return Object.assign(r,i),r}};OT(n0);var MT=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zu:zu.apply(null,arguments)},RT=e=>e&&typeof e.match=="function";function or(e,t){function n(...i){if(t){let r=t(...i);if(!r)throw new Error(Mn(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>fT(i)&&i.type===e,n}var sS=class Ys extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ys.prototype)}static get[Symbol.species](){return Ys}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ys(...t[0].concat(this)):new Ys(...t.concat(this))}};function i1(e){return Si(e)?nS(e,()=>{}):e}function r1(e,t,n){if(e.has(t)){let r=e.get(t);return n.update&&(r=n.update(r,t,e),e.set(t,r)),r}if(!n.insert)throw new Error(Mn(10));const i=n.insert(t,e);return e.set(t,i),i}function NT(e){return typeof e=="boolean"}var DT=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:r=!0,actionCreatorCheck:o=!0}=t??{};let s=new sS;return n&&(NT(n)?s.push(PT):s.push(jT(n.extraArgument))),s},LT="RTK_autoBatch",aS=e=>t=>{setTimeout(t,e)},FT=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:aS(10),zT=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let r=!0,o=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?FT:e.type==="callback"?e.queueNotification:aS(e.timeout),c=()=>{s=!1,o&&(o=!1,a.forEach(u=>u()))};return Object.assign({},i,{subscribe(u){const d=()=>r&&u(),f=i.subscribe(d);return a.add(u),()=>{f(),a.delete(u)}},dispatch(u){var d;try{return r=!((d=u==null?void 0:u.meta)!=null&&d[LT]),o=!r,o&&(s||(s=!0,l(c))),i.dispatch(u)}finally{r=!0}}})},IT=e=>function(n){const{autoBatch:i=!0}=n??{};let r=new sS(e);return i&&r.push(zT(typeof i=="object"?i:void 0)),r},BT=!0;function WT(e){const t=DT(),{reducer:n=void 0,middleware:i,devTools:r=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Jg(n))a=uT(n);else throw new Error(Mn(1));let l;typeof i=="function"?l=i(t):l=t();let c=zu;r&&(c=MT({trace:!BT,...typeof r=="object"&&r}));const u=dT(...l),d=IT(u);let f=typeof s=="function"?s(d):d();const p=c(...f);return qg(a,o,p)}function lS(e){const t={},n=[];let i;const r={addCase(o,s){const a=typeof o=="string"?o:o.type;if(!a)throw new Error(Mn(28));if(a in t)throw new Error(Mn(29));return t[a]=s,r},addMatcher(o,s){return n.push({matcher:o,reducer:s}),r},addDefaultCase(o){return i=o,r}};return e(r),[t,n,i]}function UT(e){return typeof e=="function"}function VT(e,t){let[n,i,r]=lS(t),o;if(UT(e))o=()=>i1(e());else{const a=i1(e);o=()=>a}function s(a=o(),l){let c=[n[l.type],...i.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[r]),c.reduce((u,d)=>{if(d)if(dr(u)){const p=d(u,l);return p===void 0?u:p}else{if(Si(u))return nS(u,f=>d(f,l));{const f=d(u,l);if(f===void 0){if(u===null)return u;throw new Error(Mn(9))}return f}}return u},a)}return s.getInitialState=o,s}var HT="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",$T=(e=21)=>{let t="",n=e;for(;n--;)t+=HT[Math.random()*64|0];return t},GT=(e,t)=>RT(e)?e.match(t):e(t);function Ic(...e){return t=>e.some(n=>GT(n,t))}var YT=["name","message","stack","code"],$f=class{constructor(e,t){H(this,"_type");this.payload=e,this.meta=t}},o1=class{constructor(e,t){H(this,"_type");this.payload=e,this.meta=t}},XT=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of YT)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},ot=(()=>{function e(t,n,i){const r=or(t+"/fulfilled",(l,c,u,d)=>({payload:l,meta:{...d||{},arg:u,requestId:c,requestStatus:"fulfilled"}})),o=or(t+"/pending",(l,c,u)=>({payload:void 0,meta:{...u||{},arg:c,requestId:l,requestStatus:"pending"}})),s=or(t+"/rejected",(l,c,u,d,f)=>({payload:d,error:(i&&i.serializeError||XT)(l||"Rejected"),meta:{...f||{},arg:u,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(c,u,d)=>{const f=i!=null&&i.idGenerator?i.idGenerator(l):$T(),p=new AbortController;let g;function m(x){g=x,p.abort()}const v=async function(){var b,k;let x;try{let S=(b=i==null?void 0:i.condition)==null?void 0:b.call(i,l,{getState:u,extra:d});if(QT(S)&&(S=await S),S===!1||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const E=new Promise((C,j)=>p.signal.addEventListener("abort",()=>j({name:"AbortError",message:g||"Aborted"})));c(o(f,l,(k=i==null?void 0:i.getPendingMeta)==null?void 0:k.call(i,{requestId:f,arg:l},{getState:u,extra:d}))),x=await Promise.race([E,Promise.resolve(n(l,{dispatch:c,getState:u,extra:d,requestId:f,signal:p.signal,abort:m,rejectWithValue:(C,j)=>new $f(C,j),fulfillWithValue:(C,j)=>new o1(C,j)})).then(C=>{if(C instanceof $f)throw C;return C instanceof o1?r(C.payload,f,l,C.meta):r(C,f,l)})])}catch(S){x=S instanceof $f?s(null,f,l,S.payload,S.meta):s(S,f,l)}return i&&!i.dispatchConditionRejection&&s.match(x)&&x.meta.condition||c(x),x}();return Object.assign(v,{abort:m,requestId:f,arg:l,unwrap(){return v.then(KT)}})}}return Object.assign(a,{pending:o,rejected:s,fulfilled:r,settled:Ic(s,r),typePrefix:t})}return e.withTypes=()=>e,e})();function KT(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function QT(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ZT=Symbol.for("rtk-slice-createasyncthunk");function JT(e,t){return`${e}/${t}`}function qT({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[ZT];return function(r){const{name:o,reducerPath:s=o}=r;if(!o)throw new Error(Mn(11));typeof process<"u";const a=(typeof r.reducers=="function"?r.reducers(tP()):r.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(v,x){const y=typeof v=="string"?v:v.type;if(!y)throw new Error(Mn(12));if(y in c.sliceCaseReducersByType)throw new Error(Mn(13));return c.sliceCaseReducersByType[y]=x,u},addMatcher(v,x){return c.sliceMatchers.push({matcher:v,reducer:x}),u},exposeAction(v,x){return c.actionCreators[v]=x,u},exposeCaseReducer(v,x){return c.sliceCaseReducersByName[v]=x,u}};l.forEach(v=>{const x=a[v],y={reducerName:v,type:JT(o,v),createNotation:typeof r.reducers=="function"};iP(x)?oP(y,x,u,t):nP(y,x,u)});function d(){const[v={},x=[],y=void 0]=typeof r.extraReducers=="function"?lS(r.extraReducers):[r.extraReducers],b={...v,...c.sliceCaseReducersByType};return VT(r.initialState,k=>{for(let S in b)k.addCase(S,b[S]);for(let S of c.sliceMatchers)k.addMatcher(S.matcher,S.reducer);for(let S of x)k.addMatcher(S.matcher,S.reducer);y&&k.addDefaultCase(y)})}const f=v=>v,p=new WeakMap;let g;const m={name:o,reducerPath:s,reducer(v,x){return g||(g=d()),g(v,x)},actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState(){return g||(g=d()),g.getInitialState()},getSelectors(v=f){const x=r1(p,this,{insert:()=>new WeakMap});return r1(x,v,{insert:()=>{const y={};for(const[b,k]of Object.entries(r.selectors??{}))y[b]=eP(this,k,v,this!==m);return y}})},selectSlice(v){let x=v[this.reducerPath];return typeof x>"u"&&this!==m&&(x=this.getInitialState()),x},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(v,{reducerPath:x,...y}={}){const b=x??this.reducerPath;return v.inject({reducerPath:b,reducer:this.reducer},y),{...this,reducerPath:b}}};return m}}function eP(e,t,n,i){function r(o,...s){let a=n.call(e,o);return typeof a>"u"&&i&&(a=e.getInitialState()),t(a,...s)}return r.unwrapped=t,r}var gs=qT();function tP(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function nP({type:e,reducerName:t,createNotation:n},i,r){let o,s;if("reducer"in i){if(n&&!rP(i))throw new Error(Mn(17));o=i.reducer,s=i.prepare}else o=i;r.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?or(e,s):or(e))}function iP(e){return e._reducerDefinitionType==="asyncThunk"}function rP(e){return e._reducerDefinitionType==="reducerWithPrepare"}function oP({type:e,reducerName:t},n,i,r){if(!r)throw new Error(Mn(18));const{payloadCreator:o,fulfilled:s,pending:a,rejected:l,settled:c,options:u}=n,d=r(e,o,u);i.exposeAction(t,d),s&&i.addCase(d.fulfilled,s),a&&i.addCase(d.pending,a),l&&i.addCase(d.rejected,l),c&&i.addMatcher(d.settled,c),i.exposeCaseReducer(t,{fulfilled:s||Bl,pending:a||Bl,rejected:l||Bl,settled:c||Bl})}function Bl(){}var i0="listenerMiddleware";or(`${i0}/add`);or(`${i0}/removeAll`);or(`${i0}/remove`);function Mn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function cS(e,t){return function(){return e.apply(t,arguments)}}const{toString:sP}=Object.prototype,{getPrototypeOf:r0}=Object,Md=(e=>t=>{const n=sP.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jn=e=>(e=e.toLowerCase(),t=>Md(t)===e),Rd=e=>t=>typeof t===e,{isArray:xs}=Array,Ha=Rd("undefined");function aP(e){return e!==null&&!Ha(e)&&e.constructor!==null&&!Ha(e.constructor)&&gn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const uS=Jn("ArrayBuffer");function lP(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&uS(e.buffer),t}const cP=Rd("string"),gn=Rd("function"),dS=Rd("number"),Nd=e=>e!==null&&typeof e=="object",uP=e=>e===!0||e===!1,Bc=e=>{if(Md(e)!=="object")return!1;const t=r0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dP=Jn("Date"),fP=Jn("File"),hP=Jn("Blob"),pP=Jn("FileList"),mP=e=>Nd(e)&&gn(e.pipe),gP=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||gn(e.append)&&((t=Md(e))==="formdata"||t==="object"&&gn(e.toString)&&e.toString()==="[object FormData]"))},xP=Jn("URLSearchParams"),yP=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function cl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,r;if(typeof e!="object"&&(e=[e]),xs(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(i=0;i<s;i++)a=o[i],t.call(null,e[a],a,e)}}function fS(e,t){t=t.toLowerCase();const n=Object.keys(e);let i=n.length,r;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const hS=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),pS=e=>!Ha(e)&&e!==hS;function um(){const{caseless:e}=pS(this)&&this||{},t={},n=(i,r)=>{const o=e&&fS(t,r)||r;Bc(t[o])&&Bc(i)?t[o]=um(t[o],i):Bc(i)?t[o]=um({},i):xs(i)?t[o]=i.slice():t[o]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&cl(arguments[i],n);return t}const vP=(e,t,n,{allOwnKeys:i}={})=>(cl(t,(r,o)=>{n&&gn(r)?e[o]=cS(r,n):e[o]=r},{allOwnKeys:i}),e),bP=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wP=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},kP=(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],(!i||i(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&r0(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},SP=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},CP=e=>{if(!e)return null;if(xs(e))return e;let t=e.length;if(!dS(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},AP=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&r0(Uint8Array)),EP=(e,t)=>{const i=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=i.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},_P=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},TP=Jn("HTMLFormElement"),PP=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),s1=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),jP=Jn("RegExp"),mS=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};cl(n,(r,o)=>{let s;(s=t(r,o,e))!==!1&&(i[o]=s||r)}),Object.defineProperties(e,i)},OP=e=>{mS(e,(t,n)=>{if(gn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(gn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},MP=(e,t)=>{const n={},i=r=>{r.forEach(o=>{n[o]=!0})};return xs(e)?i(e):i(String(e).split(t)),n},RP=()=>{},NP=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Gf="abcdefghijklmnopqrstuvwxyz",a1="0123456789",gS={DIGIT:a1,ALPHA:Gf,ALPHA_DIGIT:Gf+Gf.toUpperCase()+a1},DP=(e=16,t=gS.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n};function LP(e){return!!(e&&gn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const FP=e=>{const t=new Array(10),n=(i,r)=>{if(Nd(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[r]=i;const o=xs(i)?[]:{};return cl(i,(s,a)=>{const l=n(s,r+1);!Ha(l)&&(o[a]=l)}),t[r]=void 0,o}}return i};return n(e,0)},zP=Jn("AsyncFunction"),IP=e=>e&&(Nd(e)||gn(e))&&gn(e.then)&&gn(e.catch),F={isArray:xs,isArrayBuffer:uS,isBuffer:aP,isFormData:gP,isArrayBufferView:lP,isString:cP,isNumber:dS,isBoolean:uP,isObject:Nd,isPlainObject:Bc,isUndefined:Ha,isDate:dP,isFile:fP,isBlob:hP,isRegExp:jP,isFunction:gn,isStream:mP,isURLSearchParams:xP,isTypedArray:AP,isFileList:pP,forEach:cl,merge:um,extend:vP,trim:yP,stripBOM:bP,inherits:wP,toFlatObject:kP,kindOf:Md,kindOfTest:Jn,endsWith:SP,toArray:CP,forEachEntry:EP,matchAll:_P,isHTMLForm:TP,hasOwnProperty:s1,hasOwnProp:s1,reduceDescriptors:mS,freezeMethods:OP,toObjectSet:MP,toCamelCase:PP,noop:RP,toFiniteNumber:NP,findKey:fS,global:hS,isContextDefined:pS,ALPHABET:gS,generateString:DP,isSpecCompliantForm:LP,toJSONObject:FP,isAsyncFn:zP,isThenable:IP};function xe(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}F.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xS=xe.prototype,yS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{yS[e]={value:e}});Object.defineProperties(xe,yS);Object.defineProperty(xS,"isAxiosError",{value:!0});xe.from=(e,t,n,i,r,o)=>{const s=Object.create(xS);return F.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),xe.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const BP=null;function dm(e){return F.isPlainObject(e)||F.isArray(e)}function vS(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function l1(e,t,n){return e?e.concat(t).map(function(r,o){return r=vS(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function WP(e){return F.isArray(e)&&!e.some(dm)}const UP=F.toFlatObject(F,{},null,function(t){return/^is[A-Z]/.test(t)});function Dd(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,v){return!F.isUndefined(v[m])});const i=n.metaTokens,r=n.visitor||u,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(F.isDate(g))return g.toISOString();if(!l&&F.isBlob(g))throw new xe("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(g)||F.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,m,v){let x=g;if(g&&!v&&typeof g=="object"){if(F.endsWith(m,"{}"))m=i?m:m.slice(0,-2),g=JSON.stringify(g);else if(F.isArray(g)&&WP(g)||(F.isFileList(g)||F.endsWith(m,"[]"))&&(x=F.toArray(g)))return m=vS(m),x.forEach(function(b,k){!(F.isUndefined(b)||b===null)&&t.append(s===!0?l1([m],k,o):s===null?m:m+"[]",c(b))}),!1}return dm(g)?!0:(t.append(l1(v,m,o),c(g)),!1)}const d=[],f=Object.assign(UP,{defaultVisitor:u,convertValue:c,isVisitable:dm});function p(g,m){if(!F.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(g),F.forEach(g,function(x,y){(!(F.isUndefined(x)||x===null)&&r.call(t,x,F.isString(y)?y.trim():y,m,f))===!0&&p(x,m?m.concat(y):[y])}),d.pop()}}if(!F.isObject(e))throw new TypeError("data must be an object");return p(e),t}function c1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function o0(e,t){this._pairs=[],e&&Dd(e,this,t)}const bS=o0.prototype;bS.append=function(t,n){this._pairs.push([t,n])};bS.toString=function(t){const n=t?function(i){return t.call(this,i,c1)}:c1;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function VP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wS(e,t,n){if(!t)return e;const i=n&&n.encode||VP,r=n&&n.serialize;let o;if(r?o=r(t,n):o=F.isURLSearchParams(t)?t.toString():new o0(t,n).toString(i),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class HP{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){F.forEach(this.handlers,function(i){i!==null&&t(i)})}}const u1=HP,kS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$P=typeof URLSearchParams<"u"?URLSearchParams:o0,GP=typeof FormData<"u"?FormData:null,YP=typeof Blob<"u"?Blob:null,XP={isBrowser:!0,classes:{URLSearchParams:$P,FormData:GP,Blob:YP},protocols:["http","https","file","blob","url","data"]},SS=typeof window<"u"&&typeof document<"u",KP=(e=>SS&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),QP=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ZP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:SS,hasStandardBrowserEnv:KP,hasStandardBrowserWebWorkerEnv:QP},Symbol.toStringTag,{value:"Module"})),Hn={...ZP,...XP};function JP(e,t){return Dd(e,new Hn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,o){return Hn.isNode&&F.isBuffer(n)?(this.append(i,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function qP(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ej(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}function CS(e){function t(n,i,r,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&F.isArray(r)?r.length:s,l?(F.hasOwnProp(r,s)?r[s]=[r[s],i]:r[s]=i,!a):((!r[s]||!F.isObject(r[s]))&&(r[s]=[]),t(n,i,r[s],o)&&F.isArray(r[s])&&(r[s]=ej(r[s])),!a)}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,(i,r)=>{t(qP(i),r,n,0)}),n}return null}function tj(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(e)}const s0={transitional:kS,adapter:["xhr","http"],transformRequest:[function(t,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,o=F.isObject(t);if(o&&F.isHTMLForm(t)&&(t=new FormData(t)),F.isFormData(t))return r&&r?JSON.stringify(CS(t)):t;if(F.isArrayBuffer(t)||F.isBuffer(t)||F.isStream(t)||F.isFile(t)||F.isBlob(t))return t;if(F.isArrayBufferView(t))return t.buffer;if(F.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(i.indexOf("application/x-www-form-urlencoded")>-1)return JP(t,this.formSerializer).toString();if((a=F.isFileList(t))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Dd(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),tj(t)):t}],transformResponse:[function(t){const n=this.transitional||s0.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&F.isString(t)&&(i&&!this.responseType||r)){const s=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?xe.from(a,xe.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hn.classes.FormData,Blob:Hn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],e=>{s0.headers[e]={}});const a0=s0,nj=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ij=e=>{const t={};let n,i,r;return e&&e.split(`
`).forEach(function(s){r=s.indexOf(":"),n=s.substring(0,r).trim().toLowerCase(),i=s.substring(r+1).trim(),!(!n||t[n]&&nj[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},d1=Symbol("internals");function js(e){return e&&String(e).trim().toLowerCase()}function Wc(e){return e===!1||e==null?e:F.isArray(e)?e.map(Wc):String(e)}function rj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const oj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Yf(e,t,n,i,r){if(F.isFunction(i))return i.call(this,t,n);if(r&&(t=n),!!F.isString(t)){if(F.isString(i))return t.indexOf(i)!==-1;if(F.isRegExp(i))return i.test(t)}}function sj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function aj(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(r,o,s){return this[i].call(this,t,r,o,s)},configurable:!0})})}class Ld{constructor(t){t&&this.set(t)}set(t,n,i){const r=this;function o(a,l,c){const u=js(l);if(!u)throw new Error("header name must be a non-empty string");const d=F.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=Wc(a))}const s=(a,l)=>F.forEach(a,(c,u)=>o(c,u,l));return F.isPlainObject(t)||t instanceof this.constructor?s(t,n):F.isString(t)&&(t=t.trim())&&!oj(t)?s(ij(t),n):t!=null&&o(n,t,i),this}get(t,n){if(t=js(t),t){const i=F.findKey(this,t);if(i){const r=this[i];if(!n)return r;if(n===!0)return rj(r);if(F.isFunction(n))return n.call(this,r,i);if(F.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=js(t),t){const i=F.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Yf(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let r=!1;function o(s){if(s=js(s),s){const a=F.findKey(i,s);a&&(!n||Yf(i,i[a],a,n))&&(delete i[a],r=!0)}}return F.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const o=n[i];(!t||Yf(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,i={};return F.forEach(this,(r,o)=>{const s=F.findKey(i,o);if(s){n[s]=Wc(r),delete n[o];return}const a=t?sj(o):String(o).trim();a!==o&&delete n[o],n[a]=Wc(r),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return F.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=t&&F.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(r=>i.set(r)),i}static accessor(t){const i=(this[d1]=this[d1]={accessors:{}}).accessors,r=this.prototype;function o(s){const a=js(s);i[a]||(aj(r,s),i[a]=!0)}return F.isArray(t)?t.forEach(o):o(t),this}}Ld.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors(Ld.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});F.freezeMethods(Ld);const yi=Ld;function Xf(e,t){const n=this||a0,i=t||n,r=yi.from(i.headers);let o=i.data;return F.forEach(e,function(a){o=a.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function AS(e){return!!(e&&e.__CANCEL__)}function ul(e,t,n){xe.call(this,e??"canceled",xe.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(ul,xe,{__CANCEL__:!0});function lj(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new xe("Request failed with status code "+n.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const cj=Hn.hasStandardBrowserEnv?{write(e,t,n,i,r,o){const s=[e+"="+encodeURIComponent(t)];F.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),F.isString(i)&&s.push("path="+i),F.isString(r)&&s.push("domain="+r),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function uj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dj(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ES(e,t){return e&&!uj(t)?dj(e,t):t}const fj=Hn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(s){const a=F.isString(s)?r(s):s;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function hj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pj(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=i[o];s||(s=c),n[r]=l,i[r]=c;let d=o,f=0;for(;d!==r;)f+=n[d++],d=d%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),c-s<t)return;const p=u&&c-u;return p?Math.round(f*1e3/p):void 0}}function f1(e,t){let n=0;const i=pj(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a),c=o<=s;n=o;const u={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&c?(s-o)/l:void 0,event:r};u[t?"download":"upload"]=!0,e(u)}}const mj=typeof XMLHttpRequest<"u",gj=mj&&function(e){return new Promise(function(n,i){let r=e.data;const o=yi.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let u;if(F.isFormData(r)){if(Hn.hasStandardBrowserEnv||Hn.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[m,...v]=u?u.split(";").map(x=>x.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...v].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+v))}const f=ES(e.baseURL,e.url);d.open(e.method.toUpperCase(),wS(f,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function p(){if(!d)return;const m=yi.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),x={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:m,config:e,request:d};lj(function(b){n(b),c()},function(b){i(b),c()},x),d=null}if("onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(i(new xe("Request aborted",xe.ECONNABORTED,e,d)),d=null)},d.onerror=function(){i(new xe("Network Error",xe.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||kS;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),i(new xe(v,x.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,e,d)),d=null},Hn.hasStandardBrowserEnv&&(a&&F.isFunction(a)&&(a=a(e)),a||a!==!1&&fj(f))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&cj.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}r===void 0&&o.setContentType(null),"setRequestHeader"in d&&F.forEach(o.toJSON(),function(v,x){d.setRequestHeader(x,v)}),F.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",f1(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",f1(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{d&&(i(!m||m.type?new ul(null,e,d):m),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=hj(f);if(g&&Hn.protocols.indexOf(g)===-1){i(new xe("Unsupported protocol "+g+":",xe.ERR_BAD_REQUEST,e));return}d.send(r||null)})},fm={http:BP,xhr:gj};F.forEach(fm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const h1=e=>`- ${e}`,xj=e=>F.isFunction(e)||e===null||e===!1,_S={getAdapter:e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,i;const r={};for(let o=0;o<t;o++){n=e[o];let s;if(i=n,!xj(n)&&(i=fm[(s=String(n)).toLowerCase()],i===void 0))throw new xe(`Unknown adapter '${s}'`);if(i)break;r[s||"#"+o]=i}if(!i){const o=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(h1).join(`
`):" "+h1(o[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return i},adapters:fm};function Kf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ul(null,e)}function p1(e){return Kf(e),e.headers=yi.from(e.headers),e.data=Xf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_S.getAdapter(e.adapter||a0.adapter)(e).then(function(i){return Kf(e),i.data=Xf.call(e,e.transformResponse,i),i.headers=yi.from(i.headers),i},function(i){return AS(i)||(Kf(e),i&&i.response&&(i.response.data=Xf.call(e,e.transformResponse,i.response),i.response.headers=yi.from(i.response.headers))),Promise.reject(i)})}const m1=e=>e instanceof yi?e.toJSON():e;function rs(e,t){t=t||{};const n={};function i(c,u,d){return F.isPlainObject(c)&&F.isPlainObject(u)?F.merge.call({caseless:d},c,u):F.isPlainObject(u)?F.merge({},u):F.isArray(u)?u.slice():u}function r(c,u,d){if(F.isUndefined(u)){if(!F.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function o(c,u){if(!F.isUndefined(u))return i(void 0,u)}function s(c,u){if(F.isUndefined(u)){if(!F.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in t)return i(c,u);if(d in e)return i(void 0,c)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,u)=>r(m1(c),m1(u),!0)};return F.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=l[u]||r,f=d(e[u],t[u],u);F.isUndefined(f)&&d!==a||(n[u]=f)}),n}const TS="1.6.2",l0={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{l0[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const g1={};l0.transitional=function(t,n,i){function r(o,s){return"[Axios v"+TS+"] Transitional option '"+o+"'"+s+(i?". "+i:"")}return(o,s,a)=>{if(t===!1)throw new xe(r(s," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!g1[s]&&(g1[s]=!0,console.warn(r(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function yj(e,t,n){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new xe("option "+o+" must be "+l,xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xe("Unknown option "+o,xe.ERR_BAD_OPTION)}}const hm={assertOptions:yj,validators:l0},Oi=hm.validators;class Wu{constructor(t){this.defaults=t,this.interceptors={request:new u1,response:new u1}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=rs(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:o}=n;i!==void 0&&hm.assertOptions(i,{silentJSONParsing:Oi.transitional(Oi.boolean),forcedJSONParsing:Oi.transitional(Oi.boolean),clarifyTimeoutError:Oi.transitional(Oi.boolean)},!1),r!=null&&(F.isFunction(r)?n.paramsSerializer={serialize:r}:hm.assertOptions(r,{encode:Oi.function,serialize:Oi.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&F.merge(o.common,o[n.method]);o&&F.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=yi.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,d=0,f;if(!l){const g=[p1.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),f=g.length,u=Promise.resolve(n);d<f;)u=u.then(g[d++],g[d++]);return u}f=a.length;let p=n;for(d=0;d<f;){const g=a[d++],m=a[d++];try{p=g(p)}catch(v){m.call(this,v);break}}try{u=p1.call(this,p)}catch(g){return Promise.reject(g)}for(d=0,f=c.length;d<f;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=rs(this.defaults,t);const n=ES(t.baseURL,t.url);return wS(n,t.params,t.paramsSerializer)}}F.forEach(["delete","get","head","options"],function(t){Wu.prototype[t]=function(n,i){return this.request(rs(i||{},{method:t,url:n,data:(i||{}).data}))}});F.forEach(["post","put","patch"],function(t){function n(i){return function(o,s,a){return this.request(rs(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Wu.prototype[t]=n(),Wu.prototype[t+"Form"]=n(!0)});const Uc=Wu;class c0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const i=this;this.promise.then(r=>{if(!i._listeners)return;let o=i._listeners.length;for(;o-- >0;)i._listeners[o](r);i._listeners=null}),this.promise.then=r=>{let o;const s=new Promise(a=>{i.subscribe(a),o=a}).then(r);return s.cancel=function(){i.unsubscribe(o)},s},t(function(o,s,a){i.reason||(i.reason=new ul(o,s,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new c0(function(r){t=r}),cancel:t}}}const vj=c0;function bj(e){return function(n){return e.apply(null,n)}}function wj(e){return F.isObject(e)&&e.isAxiosError===!0}const pm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pm).forEach(([e,t])=>{pm[t]=e});const kj=pm;function PS(e){const t=new Uc(e),n=cS(Uc.prototype.request,t);return F.extend(n,Uc.prototype,t,{allOwnKeys:!0}),F.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return PS(rs(e,r))},n}const rt=PS(a0);rt.Axios=Uc;rt.CanceledError=ul;rt.CancelToken=vj;rt.isCancel=AS;rt.VERSION=TS;rt.toFormData=Dd;rt.AxiosError=xe;rt.Cancel=rt.CanceledError;rt.all=function(t){return Promise.all(t)};rt.spread=bj;rt.isAxiosError=wj;rt.mergeConfig=rs;rt.AxiosHeaders=yi;rt.formToJSON=e=>CS(F.isHTMLForm(e)?new FormData(e):e);rt.getAdapter=_S.getAdapter;rt.HttpStatusCode=kj;rt.default=rt;const Ve=rt;var Uu={},Sj={get exports(){return Uu},set exports(e){Uu=e}};(function(e){(function(t,n){e.exports=n(t)})(typeof kc>"u"?typeof window>"u"?kc:window:kc,function(t){if(typeof t>"u"&&typeof t.document>"u")return!1;var n,i,r,o,s,a=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,l='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},u={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},f={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},p={Show:"Show",Ask:"Ask",Prompt:"Prompt"},g={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},m={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},v={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},x={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse"},y={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},b=function(_){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+_+a)},k=function(_){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3",`
`+_+a)},S=function(_){return _||(_="head"),t.document[_]!==null||(b(`
Notiflix needs to be appended to the "<`+_+'>" element, but you called it before the "<'+_+'>" element has been created.'),!1)},E=function(_,M){if(!S("head"))return!1;if(_()!==null&&!t.document.getElementById(M)){var R=t.document.createElement("style");R.id=M,R.innerHTML=_(),t.document.head.appendChild(R)}},C=function(){var _={},M=!1,R=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(M=arguments[0],R++);for(var J=function(te){for(var oe in te)Object.prototype.hasOwnProperty.call(te,oe)&&(_[oe]=M&&Object.prototype.toString.call(te[oe])==="[object Object]"?C(_[oe],te[oe]):te[oe])};R<arguments.length;R++)J(arguments[R]);return _},j=function(_){var M=t.document.createElement("div");return M.innerHTML=_,M.textContent||M.innerText||""},T=function(_,M){_||(_="110px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+_+'" height="'+_+'" fill="'+M+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return R},z=function(_,M){_||(_="110px"),M||(M="#ff5549");var R='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+_+'" height="'+_+'" fill="'+M+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return R},U=function(_,M){_||(_="110px"),M||(M="#eebf31");var R='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+_+'" height="'+_+'" fill="'+M+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return R},q=function(_,M){_||(_="110px"),M||(M="#26c0d3");var R='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+_+'" height="'+_+'" fill="'+M+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';return R},ne=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+M+'" width="'+_+'" height="'+_+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';return R},he=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+M+'" width="'+_+'" height="'+_+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';return R},re=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" width="'+_+'" height="'+_+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+_+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+_+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+M+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';return R},de=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" fill="'+M+'" width="'+_+'" height="'+_+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';return R},ae=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" fill="'+M+'" width="'+_+'" height="'+_+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';return R},B=function(_,M){_||(_="60px"),M||(M="#32c682");var R='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+M+'" width="'+_+'" height="'+_+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';return R},Y=function(_,M,R){_||(_="60px"),M||(M="#f8f8f8"),R||(R="#32c682");var J='<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+_+'" height="'+_+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+M+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+R+'" stroke="'+R+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';return J},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},le=0,se=function(_,M,R,J){if(!S("body"))return!1;n||tt.Notify.init({});var te=C(!0,n,{});if(typeof R=="object"&&!Array.isArray(R)||typeof J=="object"&&!Array.isArray(J)){var oe={};typeof R=="object"?oe=R:typeof J=="object"&&(oe=J),n=C(!0,n,oe)}var ie=n[_.toLocaleLowerCase("en")];le++,typeof M!="string"&&(M="Notiflix "+_),n.plainText&&(M=j(M)),!n.plainText&&M.length>n.messageMaxLength&&(n=C(!0,n,{closeButton:!0,messageMaxLength:150}),M='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),M.length>n.messageMaxLength&&(M=M.substring(0,n.messageMaxLength)+"..."),n.fontAwesomeIconStyle==="shadow"&&(ie.fontAwesomeIconColor=ie.background),n.cssAnimation||(n.cssAnimationDuration=0);var $=t.document.getElementById(u.wrapID)||t.document.createElement("div");if($.id=u.wrapID,$.style.width=n.width,$.style.zIndex=n.zindex,$.style.opacity=n.opacity,n.position==="center-center"?($.style.left=n.distance,$.style.top=n.distance,$.style.right=n.distance,$.style.bottom=n.distance,$.style.margin="auto",$.classList.add("nx-flex-center-center"),$.style.maxHeight="calc((100vh - "+n.distance+") - "+n.distance+")",$.style.display="flex",$.style.flexWrap="wrap",$.style.flexDirection="column",$.style.justifyContent="center",$.style.alignItems="center",$.style.pointerEvents="none"):n.position==="center-top"?($.style.left=n.distance,$.style.right=n.distance,$.style.top=n.distance,$.style.bottom="auto",$.style.margin="auto"):n.position==="center-bottom"?($.style.left=n.distance,$.style.right=n.distance,$.style.bottom=n.distance,$.style.top="auto",$.style.margin="auto"):n.position==="right-bottom"?($.style.right=n.distance,$.style.bottom=n.distance,$.style.top="auto",$.style.left="auto"):n.position==="left-top"?($.style.left=n.distance,$.style.top=n.distance,$.style.right="auto",$.style.bottom="auto"):n.position==="left-bottom"?($.style.left=n.distance,$.style.bottom=n.distance,$.style.top="auto",$.style.right="auto"):($.style.right=n.distance,$.style.top=n.distance,$.style.left="auto",$.style.bottom="auto"),n.backOverlay){var O=t.document.getElementById(u.overlayID)||t.document.createElement("div");O.id=u.overlayID,O.style.width="100%",O.style.height="100%",O.style.position="fixed",O.style.zIndex=n.zindex-1,O.style.left=0,O.style.top=0,O.style.right=0,O.style.bottom=0,O.style.background=ie.backOverlayColor||n.backOverlayColor,O.className=n.cssAnimation?"nx-with-animation":"",O.style.animationDuration=n.cssAnimation?n.cssAnimationDuration+"ms":"",t.document.getElementById(u.overlayID)||t.document.body.appendChild(O)}t.document.getElementById(u.wrapID)||t.document.body.appendChild($);var D=t.document.createElement("div");D.id=n.ID+"-"+le,D.className=n.className+" "+ie.childClassName+" "+(n.cssAnimation?"nx-with-animation":"")+" "+(n.useIcon?"nx-with-icon":"")+" nx-"+n.cssAnimationStyle+" "+(n.closeButton&&typeof R!="function"?"nx-with-close-button":"")+" "+(typeof R=="function"?"nx-with-callback":"")+" "+(n.clickToClose?"nx-notify-click-to-close":""),D.style.fontSize=n.fontSize,D.style.color=ie.textColor,D.style.background=ie.background,D.style.borderRadius=n.borderRadius,D.style.pointerEvents="all",n.rtl&&(D.setAttribute("dir","rtl"),D.classList.add("nx-rtl-on")),D.style.fontFamily='"'+n.fontFamily+'", '+l,n.cssAnimation&&(D.style.animationDuration=n.cssAnimationDuration+"ms");var W="";if(n.closeButton&&typeof R!="function"&&(W='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+ie.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),!n.useIcon)D.innerHTML='<span class="nx-message">'+M+"</span>"+(n.closeButton?W:"");else if(n.useFontAwesome)D.innerHTML='<i style="color:'+ie.fontAwesomeIconColor+"; font-size:"+n.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+ie.fontAwesomeClassName+" "+(n.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+M+"</span>"+(n.closeButton?W:"");else{var G="";_===c.Success?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+ie.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':_===c.Failure?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+ie.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':_===c.Warning?G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+ie.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':_===c.Info&&(G='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+ie.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),D.innerHTML=G+'<span class="nx-message nx-with-icon">'+M+"</span>"+(n.closeButton?W:"")}if(n.position==="left-bottom"||n.position==="right-bottom"){var Z=t.document.getElementById(u.wrapID);Z.insertBefore(D,Z.firstChild)}else t.document.getElementById(u.wrapID).appendChild(D);var ee=t.document.getElementById(D.id);if(ee){var N,A,L=function(){ee.classList.add("nx-remove");var ce=t.document.getElementById(u.overlayID);ce&&0>=$.childElementCount&&ce.classList.add("nx-remove"),clearTimeout(N)},V=function(){if(ee&&ee.parentNode!==null&&ee.parentNode.removeChild(ee),0>=$.childElementCount&&$.parentNode!==null){$.parentNode.removeChild($);var ce=t.document.getElementById(u.overlayID);ce&&ce.parentNode!==null&&ce.parentNode.removeChild(ce)}clearTimeout(A)};if(n.closeButton&&typeof R!="function"){var X=t.document.getElementById(D.id).querySelector("span.nx-close-button");X.addEventListener("click",function(){L();var ce=setTimeout(function(){V(),clearTimeout(ce)},n.cssAnimationDuration)})}if((typeof R=="function"||n.clickToClose)&&ee.addEventListener("click",function(){typeof R=="function"&&R(),L();var ce=setTimeout(function(){V(),clearTimeout(ce)},n.cssAnimationDuration)}),!n.closeButton&&typeof R!="function"){var Te=function(){N=setTimeout(function(){L()},n.timeout),A=setTimeout(function(){V()},n.timeout+n.cssAnimationDuration)};Te(),n.pauseOnHover&&(ee.addEventListener("mouseenter",function(){ee.classList.add("nx-paused"),clearTimeout(N),clearTimeout(A)}),ee.addEventListener("mouseleave",function(){ee.classList.remove("nx-paused"),Te()}))}}if(n.showOnlyTheLastOne&&0<le)for(var Pe,ge=t.document.querySelectorAll("[id^="+n.ID+"-]:not([id="+n.ID+"-"+le+"])"),Ht=0;Ht<ge.length;Ht++)Pe=ge[Ht],Pe.parentNode!==null&&Pe.parentNode.removeChild(Pe);n=C(!0,n,te)},He=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ye=function(_,M,R,J,te,oe){if(!S("body"))return!1;i||tt.Report.init({});var ie={};if(typeof te=="object"&&!Array.isArray(te)||typeof oe=="object"&&!Array.isArray(oe)){var $={};typeof te=="object"?$=te:typeof oe=="object"&&($=oe),ie=C(!0,i,{}),i=C(!0,i,$)}var O=i[_.toLocaleLowerCase("en")];typeof M!="string"&&(M="Notiflix "+_),typeof R!="string"&&(_===d.Success?R='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':_===d.Failure?R='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':_===d.Warning?R='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':_===d.Info&&(R='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),typeof J!="string"&&(J="Okay"),i.plainText&&(M=j(M),R=j(R),J=j(J)),i.plainText||(M.length>i.titleMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',J="Okay"),R.length>i.messageMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',J="Okay"),J.length>i.buttonMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',J="Okay")),M.length>i.titleMaxLength&&(M=M.substring(0,i.titleMaxLength)+"..."),R.length>i.messageMaxLength&&(R=R.substring(0,i.messageMaxLength)+"..."),J.length>i.buttonMaxLength&&(J=J.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var D=t.document.createElement("div");D.id=f.ID,D.className=i.className,D.style.zIndex=i.zindex,D.style.borderRadius=i.borderRadius,D.style.fontFamily='"'+i.fontFamily+'", '+l,i.rtl&&(D.setAttribute("dir","rtl"),D.classList.add("nx-rtl-on")),D.style.display="flex",D.style.flexWrap="wrap",D.style.flexDirection="column",D.style.alignItems="center",D.style.justifyContent="center";var W="",G=i.backOverlayClickToClose===!0;i.backOverlay&&(W='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(G?" nx-report-click-to-close":"")+'" style="background:'+(O.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var Z="";if(_===d.Success?Z=T(i.svgSize,O.svgColor):_===d.Failure?Z=z(i.svgSize,O.svgColor):_===d.Warning?Z=U(i.svgSize,O.svgColor):_===d.Info&&(Z=q(i.svgSize,O.svgColor)),D.innerHTML=W+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+Z+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+O.titleColor+';">'+M+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+O.messageColor+';">'+R+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+O.buttonBackground+"; color:"+O.buttonColor+';">'+J+"</a></div>",!t.document.getElementById(D.id)){t.document.body.appendChild(D);var ee=function(){var L=t.document.getElementById(D.id);L.classList.add("nx-remove");var V=setTimeout(function(){L.parentNode!==null&&L.parentNode.removeChild(L),clearTimeout(V)},i.cssAnimationDuration)},N=t.document.getElementById("NXReportButton");if(N.addEventListener("click",function(){typeof te=="function"&&te(),ee()}),W&&G){var A=t.document.querySelector(".nx-report-click-to-close");A.addEventListener("click",function(){ee()})}}i=C(!0,i,ie)},_e=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},we=function(_,M,R,J,te,oe,ie,$,O){if(!S("body"))return!1;r||tt.Confirm.init({});var D=C(!0,r,{});typeof O!="object"||Array.isArray(O)||(r=C(!0,r,O)),typeof M!="string"&&(M="Notiflix Confirm"),typeof R!="string"&&(R="Do you agree with me?"),typeof te!="string"&&(te="Yes"),typeof oe!="string"&&(oe="No"),typeof ie!="function"&&(ie=void 0),typeof $!="function"&&($=void 0),r.plainText&&(M=j(M),R=j(R),te=j(te),oe=j(oe)),r.plainText||(M.length>r.titleMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',te="Okay",oe="..."),R.length>r.messageMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',te="Okay",oe="..."),(te.length||oe.length)>r.buttonsMaxLength&&(M="Possible HTML Tags Error",R='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',te="Okay",oe="...")),M.length>r.titleMaxLength&&(M=M.substring(0,r.titleMaxLength)+"..."),R.length>r.messageMaxLength&&(R=R.substring(0,r.messageMaxLength)+"..."),te.length>r.buttonsMaxLength&&(te=te.substring(0,r.buttonsMaxLength)+"..."),oe.length>r.buttonsMaxLength&&(oe=oe.substring(0,r.buttonsMaxLength)+"..."),r.cssAnimation||(r.cssAnimationDuration=0);var W=t.document.createElement("div");W.id=g.ID,W.className=r.className+(r.cssAnimation?" nx-with-animation nx-"+r.cssAnimationStyle:""),W.style.zIndex=r.zindex,W.style.padding=r.distance,r.rtl&&(W.setAttribute("dir","rtl"),W.classList.add("nx-rtl-on"));var G=typeof r.position=="string"?r.position.trim():"center";W.classList.add("nx-position-"+G),W.style.fontFamily='"'+r.fontFamily+'", '+l;var Z="";r.backOverlay&&(Z='<div class="'+r.className+"-overlay"+(r.cssAnimation?" nx-with-animation":"")+'" style="background:'+r.backOverlayColor+";animation-duration:"+r.cssAnimationDuration+'ms;"></div>');var ee="";typeof ie=="function"&&(ee='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+r.cancelButtonColor+";background:"+r.cancelButtonBackground+";font-size:"+r.buttonsFontSize+';">'+oe+"</a>");var N="",A=null,L=void 0;if(_===p.Ask||_===p.Prompt){A=J||"";var V=_===p.Ask||200<A.length?Math.ceil(1.5*A.length):250,X=_===p.Prompt?'value="'+A+'"':"";N='<div><input id="NXConfirmValidationInput" type="text" '+X+' maxlength="'+V+'" style="font-size:'+r.messageFontSize+";border-radius: "+r.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(W.innerHTML=Z+'<div class="'+r.className+'-content" style="width:'+r.width+"; background:"+r.backgroundColor+"; animation-duration:"+r.cssAnimationDuration+"ms; border-radius: "+r.borderRadius+';"><div class="'+r.className+'-head"><h5 style="color:'+r.titleColor+";font-size:"+r.titleFontSize+';">'+M+'</h5><div style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+R+N+'</div></div><div class="'+r.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+(typeof ie=="function"?"":" nx-full")+'" style="color:'+r.okButtonColor+";background:"+r.okButtonBackground+";font-size:"+r.buttonsFontSize+';">'+te+"</a>"+ee+"</div></div>",!t.document.getElementById(W.id)){t.document.body.appendChild(W);var Te=t.document.getElementById(W.id),Pe=t.document.getElementById("NXConfirmButtonOk"),ge=t.document.getElementById("NXConfirmValidationInput");if(ge&&(ge.focus(),ge.setSelectionRange(0,(ge.value||"").length),ge.addEventListener("keyup",function(ce){var ti=ce.target.value;if(_===p.Ask&&ti!==A)ce.preventDefault(),ge.classList.add("nx-validation-failure"),ge.classList.remove("nx-validation-success");else{_===p.Ask&&(ge.classList.remove("nx-validation-failure"),ge.classList.add("nx-validation-success"));var Be=(ce.key||"").toLocaleLowerCase("en")==="enter"||ce.keyCode===13;Be&&Pe.dispatchEvent(new Event("click"))}})),Pe.addEventListener("click",function(ce){if(_===p.Ask&&A&&ge){var ti=(ge.value||"").toString();if(ti!==A)return ge.focus(),ge.classList.add("nx-validation-failure"),ce.stopPropagation(),ce.preventDefault(),ce.returnValue=!1,ce.cancelBubble=!0,!1;ge.classList.remove("nx-validation-failure")}typeof ie=="function"&&(_===p.Prompt&&ge&&(L=ge.value||""),ie(L)),Te.classList.add("nx-remove");var Be=setTimeout(function(){Te.parentNode!==null&&(Te.parentNode.removeChild(Te),clearTimeout(Be))},r.cssAnimationDuration)}),typeof ie=="function"){var Ht=t.document.getElementById("NXConfirmButtonCancel");Ht.addEventListener("click",function(){typeof $=="function"&&(_===p.Prompt&&ge&&(L=ge.value||""),$(L)),Te.classList.add("nx-remove");var ce=setTimeout(function(){Te.parentNode!==null&&(Te.parentNode.removeChild(Te),clearTimeout(ce))},r.cssAnimationDuration)})}}r=C(!0,r,D)},$e=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},st=function(_,M,R,J,te){if(!S("body"))return!1;o||tt.Loading.init({});var oe=C(!0,o,{});if(typeof M=="object"&&!Array.isArray(M)||typeof R=="object"&&!Array.isArray(R)){var ie={};typeof M=="object"?ie=M:typeof R=="object"&&(ie=R),o=C(!0,o,ie)}var $="";if(typeof M=="string"&&0<M.length&&($=M),J){$=$.length>o.messageMaxLength?j($).toString().substring(0,o.messageMaxLength)+"...":j($).toString();var O="";0<$.length&&(O='<p id="'+o.messageID+'" class="nx-loading-message" style="color:'+o.messageColor+";font-size:"+o.messageFontSize+';">'+$+"</p>"),o.cssAnimation||(o.cssAnimationDuration=0);var D="";if(_===m.Standard)D=ne(o.svgSize,o.svgColor);else if(_===m.Hourglass)D=he(o.svgSize,o.svgColor);else if(_===m.Circle)D=re(o.svgSize,o.svgColor);else if(_===m.Arrows)D=de(o.svgSize,o.svgColor);else if(_===m.Dots)D=ae(o.svgSize,o.svgColor);else if(_===m.Pulse)D=B(o.svgSize,o.svgColor);else if(_===m.Custom&&o.customSvgCode!==null&&o.customSvgUrl===null)D=o.customSvgCode||"";else if(_===m.Custom&&o.customSvgUrl!==null&&o.customSvgCode===null)D='<img class="nx-custom-loading-icon" width="'+o.svgSize+'" height="'+o.svgSize+'" src="'+o.customSvgUrl+'" alt="Notiflix">';else{if(_===m.Custom&&(o.customSvgUrl===null||o.customSvgCode===null))return b('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;D=Y(o.svgSize,"#f8f8f8","#32c682")}var W=parseInt((o.svgSize||"").replace(/[^0-9]/g,"")),G=t.innerWidth,Z=W>=G?G-40+"px":W+"px",ee='<div style="width:'+Z+"; height:"+Z+';" class="'+o.className+"-icon"+(0<$.length?" nx-with-message":"")+'">'+D+"</div>",N=t.document.createElement("div");if(N.id=v.ID,N.className=o.className+(o.cssAnimation?" nx-with-animation":"")+(o.clickToClose?" nx-loading-click-to-close":""),N.style.zIndex=o.zindex,N.style.background=o.backgroundColor,N.style.animationDuration=o.cssAnimationDuration+"ms",N.style.fontFamily='"'+o.fontFamily+'", '+l,N.style.display="flex",N.style.flexWrap="wrap",N.style.flexDirection="column",N.style.alignItems="center",N.style.justifyContent="center",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.innerHTML=ee+O,!t.document.getElementById(N.id)&&(t.document.body.appendChild(N),o.clickToClose)){var A=t.document.getElementById(N.id);A.addEventListener("click",function(){N.classList.add("nx-remove");var X=setTimeout(function(){N.parentNode!==null&&(N.parentNode.removeChild(N),clearTimeout(X))},o.cssAnimationDuration)})}}else if(t.document.getElementById(v.ID))var L=t.document.getElementById(v.ID),V=setTimeout(function(){L.classList.add("nx-remove");var X=setTimeout(function(){L.parentNode!==null&&(L.parentNode.removeChild(L),clearTimeout(X))},o.cssAnimationDuration);clearTimeout(V)},te);o=C(!0,o,oe)},Rt=function(_){typeof _!="string"&&(_="");var M=t.document.getElementById(v.ID);if(M)if(0<_.length){_=_.length>o.messageMaxLength?j(_).substring(0,o.messageMaxLength)+"...":j(_);var R=M.getElementsByTagName("p")[0];if(R)R.innerHTML=_;else{var J=t.document.createElement("p");J.id=o.messageID,J.className="nx-loading-message nx-loading-message-new",J.style.color=o.messageColor,J.style.fontSize=o.messageFontSize,J.innerHTML=_,M.appendChild(J)}}else b("Where is the new message?")},mt=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ei=0,bn=function(_,M,R,J,te,oe){var ie;if(Array.isArray(R)){if(1>R.length)return b("Array of HTMLElements should contains at least one HTMLElement."),!1;ie=R}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,R)){if(1>R.length)return b("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;ie=Array.prototype.slice.call(R)}else{var $=typeof R!="string"||1>(R||"").length||(R||"").length===1&&((R||"")[0]==="#"||(R||"")[0]===".");if($)return b("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var O=t.document.querySelectorAll(R);if(1>O.length)return b('You called the "Notiflix.Block..." function with "'+R+'" selector, but there is no such element(s) in the document.'),!1;ie=O}s||tt.Block.init({});var D=C(!0,s,{});if(typeof J=="object"&&!Array.isArray(J)||typeof te=="object"&&!Array.isArray(te)){var W={};typeof J=="object"?W=J:typeof te=="object"&&(W=te),s=C(!0,s,W)}var G="";typeof J=="string"&&0<J.length&&(G=J),s.cssAnimation||(s.cssAnimationDuration=0);var Z=y.className;typeof s.className=="string"&&(Z=s.className.trim());var ee=typeof s.querySelectorLimit=="number"?s.querySelectorLimit:200,N=(ie||[]).length>=ee?ee:ie.length,A="nx-block-temporary-position";if(_){for(var L,V=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],X=0;X<N;X++)if(L=ie[X],L){if(-1<V.indexOf(L.tagName.toLocaleLowerCase("en")))break;var Te=L.querySelectorAll("[id^="+y.ID+"]");if(1>Te.length){var Pe="";M&&(M===x.Hourglass?Pe=he(s.svgSize,s.svgColor):M===x.Circle?Pe=re(s.svgSize,s.svgColor):M===x.Arrows?Pe=de(s.svgSize,s.svgColor):M===x.Dots?Pe=ae(s.svgSize,s.svgColor):M===x.Pulse?Pe=B(s.svgSize,s.svgColor):Pe=ne(s.svgSize,s.svgColor));var ge='<span class="'+Z+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+Pe+"</span>",Ht="";0<G.length&&(G=G.length>s.messageMaxLength?j(G).substring(0,s.messageMaxLength)+"...":j(G),Ht='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+Z+'-message">'+G+"</span>"),ei++;var ce=t.document.createElement("div");ce.id=y.ID+"-"+ei,ce.className=Z+(s.cssAnimation?" nx-with-animation":""),ce.style.position=s.position,ce.style.zIndex=s.zindex,ce.style.background=s.backgroundColor,ce.style.animationDuration=s.cssAnimationDuration+"ms",ce.style.fontFamily='"'+s.fontFamily+'", '+l,ce.style.display="flex",ce.style.flexWrap="wrap",ce.style.flexDirection="column",ce.style.alignItems="center",ce.style.justifyContent="center",s.rtl&&(ce.setAttribute("dir","rtl"),ce.classList.add("nx-rtl-on")),ce.innerHTML=ge+Ht;var ti=t.getComputedStyle(L).getPropertyValue("position"),Be=typeof ti=="string"?ti.toLocaleLowerCase("en"):"relative",yl=Math.round(1.25*parseInt(s.svgSize))+40,bs=L.offsetHeight||0,Pi="";yl>bs&&(Pi="min-height:"+yl+"px;");var ax="";ax=L.getAttribute("id")?"#"+L.getAttribute("id"):L.classList[0]?"."+L.classList[0]:(L.tagName||"").toLocaleLowerCase("en");var lx="",cx=-1>=["absolute","relative","fixed","sticky"].indexOf(Be);if(cx||0<Pi.length){if(!S("head"))return!1;cx&&(lx="position:relative!important;");var VC='<style id="Style-'+y.ID+"-"+ei+'">'+ax+"."+A+"{"+lx+Pi+"}</style>",ux=t.document.createRange();ux.selectNode(t.document.head);var HC=ux.createContextualFragment(VC);t.document.head.appendChild(HC),L.classList.add(A)}L.appendChild(ce)}}}else var $C=function(wt){var ln=setTimeout(function(){wt.parentNode!==null&&wt.parentNode.removeChild(wt);var ws=wt.getAttribute("id"),vl=t.document.getElementById("Style-"+ws);vl&&vl.parentNode!==null&&vl.parentNode.removeChild(vl),clearTimeout(ln)},s.cssAnimationDuration)},GC=function(wt){if(wt&&0<wt.length)for(var ln,ws=0;ws<wt.length;ws++)ln=wt[ws],ln&&(ln.classList.add("nx-remove"),$C(ln));else k(typeof R=="string"?'"Notiflix.Block.remove();" function called with "'+R+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+R+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},YC=function(wt){var ln=setTimeout(function(){wt.classList.remove(A),clearTimeout(ln)},s.cssAnimationDuration+300)},XC=setTimeout(function(){for(var wt,ln=0;ln<N;ln++)wt=ie[ln],wt&&(YC(wt),Te=wt.querySelectorAll("[id^="+y.ID+"]"),GC(Te));clearTimeout(XC)},oe);s=C(!0,s,D)},tt={Notify:{init:function(_){n=C(!0,u,_),E(Q,"NotiflixNotifyInternalCSS")},merge:function(_){return n?void(n=C(!0,n,_)):(b("You have to initialize the Notify module before call Merge function."),!1)},success:function(_,M,R){se(c.Success,_,M,R)},failure:function(_,M,R){se(c.Failure,_,M,R)},warning:function(_,M,R){se(c.Warning,_,M,R)},info:function(_,M,R){se(c.Info,_,M,R)}},Report:{init:function(_){i=C(!0,f,_),E(He,"NotiflixReportInternalCSS")},merge:function(_){return i?void(i=C(!0,i,_)):(b("You have to initialize the Report module before call Merge function."),!1)},success:function(_,M,R,J,te){ye(d.Success,_,M,R,J,te)},failure:function(_,M,R,J,te){ye(d.Failure,_,M,R,J,te)},warning:function(_,M,R,J,te){ye(d.Warning,_,M,R,J,te)},info:function(_,M,R,J,te){ye(d.Info,_,M,R,J,te)}},Confirm:{init:function(_){r=C(!0,g,_),E(_e,"NotiflixConfirmInternalCSS")},merge:function(_){return r?void(r=C(!0,r,_)):(b("You have to initialize the Confirm module before call Merge function."),!1)},show:function(_,M,R,J,te,oe,ie){we(p.Show,_,M,null,R,J,te,oe,ie)},ask:function(_,M,R,J,te,oe,ie,$){we(p.Ask,_,M,R,J,te,oe,ie,$)},prompt:function(_,M,R,J,te,oe,ie,$){we(p.Prompt,_,M,R,J,te,oe,ie,$)}},Loading:{init:function(_){o=C(!0,v,_),E($e,"NotiflixLoadingInternalCSS")},merge:function(_){return o?void(o=C(!0,o,_)):(b("You have to initialize the Loading module before call Merge function."),!1)},standard:function(_,M){st(m.Standard,_,M,!0,0)},hourglass:function(_,M){st(m.Hourglass,_,M,!0,0)},circle:function(_,M){st(m.Circle,_,M,!0,0)},arrows:function(_,M){st(m.Arrows,_,M,!0,0)},dots:function(_,M){st(m.Dots,_,M,!0,0)},pulse:function(_,M){st(m.Pulse,_,M,!0,0)},custom:function(_,M){st(m.Custom,_,M,!0,0)},notiflix:function(_,M){st(m.Notiflix,_,M,!0,0)},remove:function(_){typeof _!="number"&&(_=0),st(null,null,null,!1,_)},change:function(_){Rt(_)}},Block:{init:function(_){s=C(!0,y,_),E(mt,"NotiflixBlockInternalCSS")},merge:function(_){return s?void(s=C(!0,s,_)):(b('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(_,M,R){bn(!0,x.Standard,_,M,R)},hourglass:function(_,M,R){bn(!0,x.Hourglass,_,M,R)},circle:function(_,M,R){bn(!0,x.Circle,_,M,R)},arrows:function(_,M,R){bn(!0,x.Arrows,_,M,R)},dots:function(_,M,R){bn(!0,x.Dots,_,M,R)},pulse:function(_,M,R){bn(!0,x.Pulse,_,M,R)},remove:function(_,M){typeof M!="number"&&(M=0),bn(!1,null,_,null,null,M)}}};return typeof t.Notiflix=="object"?C(!0,t.Notiflix,{Notify:tt.Notify,Report:tt.Report,Confirm:tt.Confirm,Loading:tt.Loading,Block:tt.Block}):{Notify:tt.Notify,Report:tt.Report,Confirm:tt.Confirm,Loading:tt.Loading,Block:tt.Block}})})(Sj);const Ci=Uu;Ve.defaults.baseURL="https://healthy-hub-2d3x.onrender.com/api";const Fd=e=>{Ve.defaults.headers.common.Authorization=`Bearer ${e}`},Cj=()=>{Ve.defaults.headers.common.Authorization=""},jS=ot("auth/register",async(e,t)=>{try{const{data:n}=await Ve.post("/auth/signup",e);return Ci.Notify.success("You have successfully registered!"),Fd(n.token),console.log(n),n}catch(n){return Ci.Notify.failure("Sorry, there was an error, please try again."),t.rejectWithValue(n.message)}}),OS=ot("auth/login",async(e,t)=>{try{const{data:n}=await Ve.post("/auth/signin",e);return Ci.Notify.success("You have successfully logged in!"),Fd(n.token),n}catch(n){return Ci.Notify.failure("Oops! The email or password is incorrect"),t.rejectWithValue(n.message)}}),MS=ot("/auth/logout",async(e,t)=>{try{await Ve.post("/auth/signout"),Cj()}catch(n){return t.rejectWithValue(n.message)}}),RS=ot("auth/updateGoal",async(e,t)=>{try{const n=await Ve.put("/user/goal",e);return setHeadersToken(t.getState().auth.token),console.log(n.data),n.data}catch(n){return t.rejectWithValue(n.message)}}),Aj=ot("auth/updateWeight",async(e,t)=>{try{return(await Ve.post("/user/weight",e)).data}catch(n){return t.rejectWithValue(n.message)}}),ca=ot("auth/refresh",async(e,t)=>{const i=t.getState().auth.token;if(console.log(i),i===null)return t.rejectWithValue("Unable to fetch user");try{Fd(i);const{data:r}=await Ve.get("/user/current");return console.log(r),r}catch(r){return t.rejectWithValue(r.message)}}),Ej=ot("auth/forgotPassword",async(e,t)=>{try{const{data:n}=await Ve.post("/auth/forgot-password",e);return Fd(n.token),Ci.Notify.success("The password has been successfully sent to your email!"),console.log(n),n}catch(n){return Ci.Notify.failure("Sorry, there was an error, please try again."),t.rejectWithValue(n.message)}}),NS=ot("user/update",async(e,t)=>{try{const{data:n}=await Ve.put("/user/update",e);return setHeadersToken(t.getState().auth.token),console.log(n),n}catch(n){return t.rejectWithValue(n.message)}});ot("user/fetchStatistics",async(e,t)=>{try{const n=await Ve.get("/user/statistics");return setHeadersToken(t.getState().auth.token),console.log(n.data),n.data}catch(n){return t.rejectWithValue(n.message)}});const _j=w.button`
  display: none;

  @media (min-width: 834px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 32px;
    background: transparent;
    border: none;
    padding: 0;
  }
`;function DS({onClose:e}){return h.jsx(_j,{onClick:e,children:h.jsx("svg",{width:"16",height:"16",stroke:"#B6B6B6",children:h.jsx("use",{href:Xt+"#icon-close-circle"})})})}const Tj=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  font-family: Poppins;

  @media (min-width: 834px) {
    top: 100px;
  }
`,Pj=w.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`,jj=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--primary-black-color);
  padding: 24px 10px;

  @media (min-width: 834px) {
    position: absolute;
    top: 0;
    width: 392px;
    height: 352px;
    border-radius: 12px;
    background: var(--primary-black-second-color);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px;
    margin-left: 294px;
    margin-right: 148px;
  }

  @media (min-width: 1440px) {
    margin-left: 800px;
    margin-right: 248px;
  }
`,Oj=w.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 100%;
    height: 352px;
    padding: 0;
    margin: 0;
  }
`,Mj=w.h3`
  color: var(--primary-white-color);
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,Rj=w.p`
  color: var(--primary-grey-color);
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.43;
`,Nj=w.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    align-items: flex-start;
  }
`,Dj=w.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: var(--primary-black-second-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  border: 1px solid var(--primary-light-green-color);

  @media (min-width: 834px) {
    width: 166px;
  }
`,Qf=w.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
`,ho=w.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,Zf=w.label`
  color: var(--primary-white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  cursor: pointer;

  @media (min-width: 834px) {
    font-weight: 400;
  }
`,Jf=w.label`
  color: var(--primary-violet-color);
  font-size: 14px;
  line-height: 1.43;
  cursor: pointer;
`,qf=w.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-grey-color);
  background: rgba(255, 255, 255, 0.01);
`,eh=w.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-violet-color);
  background: rgba(255, 255, 255, 0.01);
`,Lj=w.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--primary-grey-color);
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  margin-top: 24px;
  border: none;

  @media (min-width: 834px) {
    display: none;
  }
`;function Fj({gender:e,onClose:t,target:n}){const i=sn(),[r,o]=P.useState(n);P.useEffect(()=>{const l=c=>{c.code==="Escape"&&t()};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[t]);const s=l=>{l.currentTarget===l.target&&t()},a=l=>{l.preventDefault(),i(RS({goal:r})),t()};return h.jsx(Tj,{onClick:s,children:h.jsx(Pj,{children:h.jsx(jj,{children:h.jsxs(Oj,{children:[h.jsx(DS,{onClose:t}),h.jsx(Mj,{children:"Target selection"}),h.jsxs(Rj,{children:["The service will adjust your calorie ",h.jsx("br",{})," intake to your goal"]}),h.jsxs(Nj,{onSubmit:a,children:[r==="lose fat"?h.jsxs(ho,{children:[h.jsx(eh,{children:e==="female"?h.jsx("img",{srcSet:`${Oo} 1x, ${qp} 2x`,src:Oo,alt:"Lose Fat Girl",width:"20",height:"20"}):h.jsx("img",{srcSet:`${Mo} 1x, ${em} 2x`,src:Mo,alt:"Lose Fat Man",width:"20",height:"20"})}),h.jsx(Jf,{htmlFor:"lose",children:"Lose fat"})]}):h.jsxs(ho,{children:[h.jsx(qf,{children:e==="female"?h.jsx("img",{srcSet:`${Oo} 1x, ${qp} 2x`,src:Oo,alt:"Lose Fat Girl",width:"20",height:"20"}):h.jsx("img",{srcSet:`${Mo} 1x, ${em} 2x`,src:Mo,alt:"Lose Fat Man",width:"20",height:"20"})}),h.jsx(Zf,{htmlFor:"lose",children:"Lose fat"})]}),h.jsx(Qf,{id:"lose",type:"radio",name:"goal",value:"lose fat",checked:r==="lose fat",onChange:()=>o("lose fat")}),r==="maintain"?h.jsxs(ho,{children:[h.jsx(eh,{children:e==="female"?h.jsx("img",{srcSet:`${No} 1x, ${nm} 2x`,src:No,alt:"Maintain Girl",width:"20",height:"20"}):h.jsx("img",{srcSet:`${Do} 1x, ${im} 2x`,src:Do,alt:"Maintain Man",width:"20",height:"20"})}),h.jsx(Jf,{htmlFor:"maintain",children:"Maintain"})]}):h.jsxs(ho,{children:[h.jsx(qf,{children:e==="female"?h.jsx("img",{srcSet:`${No} 1x, ${nm} 2x`,src:No,alt:"Maintain Girl",width:"20",height:"20"}):h.jsx("img",{srcSet:`${Do} 1x, ${im} 2x`,src:Do,alt:"Maintain Man",width:"20",height:"20"})}),h.jsx(Zf,{htmlFor:"maintain",children:"Maintain"})]}),h.jsx(Qf,{id:"maintain",type:"radio",name:"goal",value:"maintain",checked:r==="maintain",onChange:()=>o("maintain")}),r==="gain muscle"?h.jsxs(ho,{children:[h.jsx(eh,{children:h.jsx("img",{srcSet:`${Ro} 1x, ${tm} 2x`,src:Ro,alt:"gain muscle Girl",width:"20",height:"20"})}),h.jsx(Jf,{htmlFor:"gain",children:"Gain Muscle"})]}):h.jsxs(ho,{children:[h.jsx(qf,{children:h.jsx("img",{srcSet:`${Ro} 1x, ${tm} 2x`,src:Ro,alt:"gain muscle Girl",width:"20",height:"20"})}),h.jsx(Zf,{htmlFor:"gain",children:"Gain Muscle"})]}),h.jsx(Qf,{id:"gain",type:"radio",name:"goal",value:"gain muscle",checked:r==="gain muscle",onChange:()=>o("gain muscle")}),h.jsx(Dj,{type:"submit",children:"Confirm"})]}),h.jsx(Lj,{type:"button",onClick:t,children:"Cancel"})]})})})})}var zj=function(t){return Ij(t)&&!Bj(t)};function Ij(e){return!!e&&typeof e=="object"}function Bj(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Vj(e)}var Wj=typeof Symbol=="function"&&Symbol.for,Uj=Wj?Symbol.for("react.element"):60103;function Vj(e){return e.$$typeof===Uj}function Hj(e){return Array.isArray(e)?[]:{}}function Vu(e,t){return t.clone!==!1&&t.isMergeableObject(e)?$a(Hj(e),e,t):e}function $j(e,t,n){return e.concat(t).map(function(i){return Vu(i,n)})}function Gj(e,t,n){var i={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(r){i[r]=Vu(e[r],n)}),Object.keys(t).forEach(function(r){!n.isMergeableObject(t[r])||!e[r]?i[r]=Vu(t[r],n):i[r]=$a(e[r],t[r],n)}),i}function $a(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||$j,n.isMergeableObject=n.isMergeableObject||zj;var i=Array.isArray(t),r=Array.isArray(e),o=i===r;return o?i?n.arrayMerge(e,t,n):Gj(e,t,n):Vu(t,n)}$a.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(i,r){return $a(i,r,n)},{})};var mm=$a,Yj=typeof global=="object"&&global&&global.Object===Object&&global;const LS=Yj;var Xj=typeof self=="object"&&self&&self.Object===Object&&self,Kj=LS||Xj||Function("return this")();const qn=Kj;var Qj=qn.Symbol;const fr=Qj;var FS=Object.prototype,Zj=FS.hasOwnProperty,Jj=FS.toString,Os=fr?fr.toStringTag:void 0;function qj(e){var t=Zj.call(e,Os),n=e[Os];try{e[Os]=void 0;var i=!0}catch{}var r=Jj.call(e);return i&&(t?e[Os]=n:delete e[Os]),r}var e6=Object.prototype,t6=e6.toString;function n6(e){return t6.call(e)}var i6="[object Null]",r6="[object Undefined]",x1=fr?fr.toStringTag:void 0;function io(e){return e==null?e===void 0?r6:i6:x1&&x1 in Object(e)?qj(e):n6(e)}function zS(e,t){return function(n){return e(t(n))}}var o6=zS(Object.getPrototypeOf,Object);const u0=o6;function ro(e){return e!=null&&typeof e=="object"}var s6="[object Object]",a6=Function.prototype,l6=Object.prototype,IS=a6.toString,c6=l6.hasOwnProperty,u6=IS.call(Object);function y1(e){if(!ro(e)||io(e)!=s6)return!1;var t=u0(e);if(t===null)return!0;var n=c6.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&IS.call(n)==u6}var v1=Array.isArray,b1=Object.keys,d6=Object.prototype.hasOwnProperty,f6=typeof Element<"u";function gm(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=v1(e),i=v1(t),r,o,s;if(n&&i){if(o=e.length,o!=t.length)return!1;for(r=o;r--!==0;)if(!gm(e[r],t[r]))return!1;return!0}if(n!=i)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var d=b1(e);if(o=d.length,o!==b1(t).length)return!1;for(r=o;r--!==0;)if(!d6.call(t,d[r]))return!1;if(f6&&e instanceof Element&&t instanceof Element)return e===t;for(r=o;r--!==0;)if(s=d[r],!(s==="_owner"&&e.$$typeof)&&!gm(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Fi=function(t,n){try{return gm(t,n)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}},h6=!0;function BS(e,t){if(!h6){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function p6(){this.__data__=[],this.size=0}function WS(e,t){return e===t||e!==e&&t!==t}function zd(e,t){for(var n=e.length;n--;)if(WS(e[n][0],t))return n;return-1}var m6=Array.prototype,g6=m6.splice;function x6(e){var t=this.__data__,n=zd(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():g6.call(t,n,1),--this.size,!0}function y6(e){var t=this.__data__,n=zd(t,e);return n<0?void 0:t[n][1]}function v6(e){return zd(this.__data__,e)>-1}function b6(e,t){var n=this.__data__,i=zd(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}function _i(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}_i.prototype.clear=p6;_i.prototype.delete=x6;_i.prototype.get=y6;_i.prototype.has=v6;_i.prototype.set=b6;function w6(){this.__data__=new _i,this.size=0}function k6(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function S6(e){return this.__data__.get(e)}function C6(e){return this.__data__.has(e)}function dl(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var A6="[object AsyncFunction]",E6="[object Function]",_6="[object GeneratorFunction]",T6="[object Proxy]";function US(e){if(!dl(e))return!1;var t=io(e);return t==E6||t==_6||t==A6||t==T6}var P6=qn["__core-js_shared__"];const th=P6;var w1=function(){var e=/[^.]+$/.exec(th&&th.keys&&th.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function j6(e){return!!w1&&w1 in e}var O6=Function.prototype,M6=O6.toString;function oo(e){if(e!=null){try{return M6.call(e)}catch{}try{return e+""}catch{}}return""}var R6=/[\\^$.*+?()[\]{}|]/g,N6=/^\[object .+?Constructor\]$/,D6=Function.prototype,L6=Object.prototype,F6=D6.toString,z6=L6.hasOwnProperty,I6=RegExp("^"+F6.call(z6).replace(R6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function B6(e){if(!dl(e)||j6(e))return!1;var t=US(e)?I6:N6;return t.test(oo(e))}function W6(e,t){return e==null?void 0:e[t]}function so(e,t){var n=W6(e,t);return B6(n)?n:void 0}var U6=so(qn,"Map");const Ga=U6;var V6=so(Object,"create");const Ya=V6;function H6(){this.__data__=Ya?Ya(null):{},this.size=0}function $6(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var G6="__lodash_hash_undefined__",Y6=Object.prototype,X6=Y6.hasOwnProperty;function K6(e){var t=this.__data__;if(Ya){var n=t[e];return n===G6?void 0:n}return X6.call(t,e)?t[e]:void 0}var Q6=Object.prototype,Z6=Q6.hasOwnProperty;function J6(e){var t=this.__data__;return Ya?t[e]!==void 0:Z6.call(t,e)}var q6="__lodash_hash_undefined__";function eO(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ya&&t===void 0?q6:t,this}function Kr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Kr.prototype.clear=H6;Kr.prototype.delete=$6;Kr.prototype.get=K6;Kr.prototype.has=J6;Kr.prototype.set=eO;function tO(){this.size=0,this.__data__={hash:new Kr,map:new(Ga||_i),string:new Kr}}function nO(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Id(e,t){var n=e.__data__;return nO(t)?n[typeof t=="string"?"string":"hash"]:n.map}function iO(e){var t=Id(this,e).delete(e);return this.size-=t?1:0,t}function rO(e){return Id(this,e).get(e)}function oO(e){return Id(this,e).has(e)}function sO(e,t){var n=Id(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}function yr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}yr.prototype.clear=tO;yr.prototype.delete=iO;yr.prototype.get=rO;yr.prototype.has=oO;yr.prototype.set=sO;var aO=200;function lO(e,t){var n=this.__data__;if(n instanceof _i){var i=n.__data__;if(!Ga||i.length<aO-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new yr(i)}return n.set(e,t),this.size=n.size,this}function ys(e){var t=this.__data__=new _i(e);this.size=t.size}ys.prototype.clear=w6;ys.prototype.delete=k6;ys.prototype.get=S6;ys.prototype.has=C6;ys.prototype.set=lO;function cO(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var uO=function(){try{var e=so(Object,"defineProperty");return e({},"",{}),e}catch{}}();const k1=uO;function VS(e,t,n){t=="__proto__"&&k1?k1(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var dO=Object.prototype,fO=dO.hasOwnProperty;function HS(e,t,n){var i=e[t];(!(fO.call(e,t)&&WS(i,n))||n===void 0&&!(t in e))&&VS(e,t,n)}function Bd(e,t,n,i){var r=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=i?i(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),r?VS(n,a,l):HS(n,a,l)}return n}function hO(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var pO="[object Arguments]";function S1(e){return ro(e)&&io(e)==pO}var $S=Object.prototype,mO=$S.hasOwnProperty,gO=$S.propertyIsEnumerable,xO=S1(function(){return arguments}())?S1:function(e){return ro(e)&&mO.call(e,"callee")&&!gO.call(e,"callee")};const yO=xO;var vO=Array.isArray;const fl=vO;function bO(){return!1}var GS=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,C1=GS&&typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,wO=C1&&C1.exports===GS,A1=wO?qn.Buffer:void 0,kO=A1?A1.isBuffer:void 0,SO=kO||bO;const YS=SO;var CO=9007199254740991,AO=/^(?:0|[1-9]\d*)$/;function EO(e,t){var n=typeof e;return t=t??CO,!!t&&(n=="number"||n!="symbol"&&AO.test(e))&&e>-1&&e%1==0&&e<t}var _O=9007199254740991;function XS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=_O}var TO="[object Arguments]",PO="[object Array]",jO="[object Boolean]",OO="[object Date]",MO="[object Error]",RO="[object Function]",NO="[object Map]",DO="[object Number]",LO="[object Object]",FO="[object RegExp]",zO="[object Set]",IO="[object String]",BO="[object WeakMap]",WO="[object ArrayBuffer]",UO="[object DataView]",VO="[object Float32Array]",HO="[object Float64Array]",$O="[object Int8Array]",GO="[object Int16Array]",YO="[object Int32Array]",XO="[object Uint8Array]",KO="[object Uint8ClampedArray]",QO="[object Uint16Array]",ZO="[object Uint32Array]",De={};De[VO]=De[HO]=De[$O]=De[GO]=De[YO]=De[XO]=De[KO]=De[QO]=De[ZO]=!0;De[TO]=De[PO]=De[WO]=De[jO]=De[UO]=De[OO]=De[MO]=De[RO]=De[NO]=De[DO]=De[LO]=De[FO]=De[zO]=De[IO]=De[BO]=!1;function JO(e){return ro(e)&&XS(e.length)&&!!De[io(e)]}function d0(e){return function(t){return e(t)}}var KS=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,ua=KS&&typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,qO=ua&&ua.exports===KS,nh=qO&&LS.process,eM=function(){try{var e=ua&&ua.require&&ua.require("util").types;return e||nh&&nh.binding&&nh.binding("util")}catch{}}();const os=eM;var E1=os&&os.isTypedArray,tM=E1?d0(E1):JO;const nM=tM;var iM=Object.prototype,rM=iM.hasOwnProperty;function QS(e,t){var n=fl(e),i=!n&&yO(e),r=!n&&!i&&YS(e),o=!n&&!i&&!r&&nM(e),s=n||i||r||o,a=s?hO(e.length,String):[],l=a.length;for(var c in e)(t||rM.call(e,c))&&!(s&&(c=="length"||r&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||EO(c,l)))&&a.push(c);return a}var oM=Object.prototype;function f0(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||oM;return e===n}var sM=zS(Object.keys,Object);const aM=sM;var lM=Object.prototype,cM=lM.hasOwnProperty;function uM(e){if(!f0(e))return aM(e);var t=[];for(var n in Object(e))cM.call(e,n)&&n!="constructor"&&t.push(n);return t}function ZS(e){return e!=null&&XS(e.length)&&!US(e)}function h0(e){return ZS(e)?QS(e):uM(e)}function dM(e,t){return e&&Bd(t,h0(t),e)}function fM(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var hM=Object.prototype,pM=hM.hasOwnProperty;function mM(e){if(!dl(e))return fM(e);var t=f0(e),n=[];for(var i in e)i=="constructor"&&(t||!pM.call(e,i))||n.push(i);return n}function p0(e){return ZS(e)?QS(e,!0):mM(e)}function gM(e,t){return e&&Bd(t,p0(t),e)}var JS=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,_1=JS&&typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,xM=_1&&_1.exports===JS,T1=xM?qn.Buffer:void 0,P1=T1?T1.allocUnsafe:void 0;function yM(e,t){if(t)return e.slice();var n=e.length,i=P1?P1(n):new e.constructor(n);return e.copy(i),i}function qS(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}function vM(e,t){for(var n=-1,i=e==null?0:e.length,r=0,o=[];++n<i;){var s=e[n];t(s,n,e)&&(o[r++]=s)}return o}function e4(){return[]}var bM=Object.prototype,wM=bM.propertyIsEnumerable,j1=Object.getOwnPropertySymbols,kM=j1?function(e){return e==null?[]:(e=Object(e),vM(j1(e),function(t){return wM.call(e,t)}))}:e4;const m0=kM;function SM(e,t){return Bd(e,m0(e),t)}function t4(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}var CM=Object.getOwnPropertySymbols,AM=CM?function(e){for(var t=[];e;)t4(t,m0(e)),e=u0(e);return t}:e4;const n4=AM;function EM(e,t){return Bd(e,n4(e),t)}function i4(e,t,n){var i=t(e);return fl(e)?i:t4(i,n(e))}function _M(e){return i4(e,h0,m0)}function TM(e){return i4(e,p0,n4)}var PM=so(qn,"DataView");const xm=PM;var jM=so(qn,"Promise");const ym=jM;var OM=so(qn,"Set");const vm=OM;var MM=so(qn,"WeakMap");const bm=MM;var O1="[object Map]",RM="[object Object]",M1="[object Promise]",R1="[object Set]",N1="[object WeakMap]",D1="[object DataView]",NM=oo(xm),DM=oo(Ga),LM=oo(ym),FM=oo(vm),zM=oo(bm),Pr=io;(xm&&Pr(new xm(new ArrayBuffer(1)))!=D1||Ga&&Pr(new Ga)!=O1||ym&&Pr(ym.resolve())!=M1||vm&&Pr(new vm)!=R1||bm&&Pr(new bm)!=N1)&&(Pr=function(e){var t=io(e),n=t==RM?e.constructor:void 0,i=n?oo(n):"";if(i)switch(i){case NM:return D1;case DM:return O1;case LM:return M1;case FM:return R1;case zM:return N1}return t});const g0=Pr;var IM=Object.prototype,BM=IM.hasOwnProperty;function WM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&BM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var UM=qn.Uint8Array;const L1=UM;function x0(e){var t=new e.constructor(e.byteLength);return new L1(t).set(new L1(e)),t}function VM(e,t){var n=t?x0(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var HM=/\w*$/;function $M(e){var t=new e.constructor(e.source,HM.exec(e));return t.lastIndex=e.lastIndex,t}var F1=fr?fr.prototype:void 0,z1=F1?F1.valueOf:void 0;function GM(e){return z1?Object(z1.call(e)):{}}function YM(e,t){var n=t?x0(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var XM="[object Boolean]",KM="[object Date]",QM="[object Map]",ZM="[object Number]",JM="[object RegExp]",qM="[object Set]",e8="[object String]",t8="[object Symbol]",n8="[object ArrayBuffer]",i8="[object DataView]",r8="[object Float32Array]",o8="[object Float64Array]",s8="[object Int8Array]",a8="[object Int16Array]",l8="[object Int32Array]",c8="[object Uint8Array]",u8="[object Uint8ClampedArray]",d8="[object Uint16Array]",f8="[object Uint32Array]";function h8(e,t,n){var i=e.constructor;switch(t){case n8:return x0(e);case XM:case KM:return new i(+e);case i8:return VM(e,n);case r8:case o8:case s8:case a8:case l8:case c8:case u8:case d8:case f8:return YM(e,n);case QM:return new i;case ZM:case e8:return new i(e);case JM:return $M(e);case qM:return new i;case t8:return GM(e)}}var I1=Object.create,p8=function(){function e(){}return function(t){if(!dl(t))return{};if(I1)return I1(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const m8=p8;function g8(e){return typeof e.constructor=="function"&&!f0(e)?m8(u0(e)):{}}var x8="[object Map]";function y8(e){return ro(e)&&g0(e)==x8}var B1=os&&os.isMap,v8=B1?d0(B1):y8;const b8=v8;var w8="[object Set]";function k8(e){return ro(e)&&g0(e)==w8}var W1=os&&os.isSet,S8=W1?d0(W1):k8;const C8=S8;var A8=1,E8=2,_8=4,r4="[object Arguments]",T8="[object Array]",P8="[object Boolean]",j8="[object Date]",O8="[object Error]",o4="[object Function]",M8="[object GeneratorFunction]",R8="[object Map]",N8="[object Number]",s4="[object Object]",D8="[object RegExp]",L8="[object Set]",F8="[object String]",z8="[object Symbol]",I8="[object WeakMap]",B8="[object ArrayBuffer]",W8="[object DataView]",U8="[object Float32Array]",V8="[object Float64Array]",H8="[object Int8Array]",$8="[object Int16Array]",G8="[object Int32Array]",Y8="[object Uint8Array]",X8="[object Uint8ClampedArray]",K8="[object Uint16Array]",Q8="[object Uint32Array]",je={};je[r4]=je[T8]=je[B8]=je[W8]=je[P8]=je[j8]=je[U8]=je[V8]=je[H8]=je[$8]=je[G8]=je[R8]=je[N8]=je[s4]=je[D8]=je[L8]=je[F8]=je[z8]=je[Y8]=je[X8]=je[K8]=je[Q8]=!0;je[O8]=je[o4]=je[I8]=!1;function da(e,t,n,i,r,o){var s,a=t&A8,l=t&E8,c=t&_8;if(n&&(s=r?n(e,i,r,o):n(e)),s!==void 0)return s;if(!dl(e))return e;var u=fl(e);if(u){if(s=WM(e),!a)return qS(e,s)}else{var d=g0(e),f=d==o4||d==M8;if(YS(e))return yM(e,a);if(d==s4||d==r4||f&&!r){if(s=l||f?{}:g8(e),!a)return l?EM(e,gM(s,e)):SM(e,dM(s,e))}else{if(!je[d])return r?e:{};s=h8(e,d,a)}}o||(o=new ys);var p=o.get(e);if(p)return p;o.set(e,s),C8(e)?e.forEach(function(v){s.add(da(v,t,n,v,e,o))}):b8(e)&&e.forEach(function(v,x){s.set(x,da(v,t,n,x,e,o))});var g=c?l?TM:_M:l?p0:h0,m=u?void 0:g(e);return cO(m||e,function(v,x){m&&(x=v,v=e[x]),HS(s,x,da(v,t,n,x,e,o))}),s}var Z8=4;function U1(e){return da(e,Z8)}function a4(e,t){for(var n=-1,i=e==null?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r}var J8="[object Symbol]";function y0(e){return typeof e=="symbol"||ro(e)&&io(e)==J8}var q8="Expected a function";function v0(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(q8);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var s=e.apply(this,i);return n.cache=o.set(r,s)||o,s};return n.cache=new(v0.Cache||yr),n}v0.Cache=yr;var eR=500;function tR(e){var t=v0(e,function(i){return n.size===eR&&n.clear(),i}),n=t.cache;return t}var nR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,iR=/\\(\\)?/g,rR=tR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(nR,function(n,i,r,o){t.push(r?o.replace(iR,"$1"):i||n)}),t});const oR=rR;var sR=1/0;function aR(e){if(typeof e=="string"||y0(e))return e;var t=e+"";return t=="0"&&1/e==-sR?"-0":t}var lR=1/0,V1=fr?fr.prototype:void 0,H1=V1?V1.toString:void 0;function l4(e){if(typeof e=="string")return e;if(fl(e))return a4(e,l4)+"";if(y0(e))return H1?H1.call(e):"";var t=e+"";return t=="0"&&1/e==-lR?"-0":t}function cR(e){return e==null?"":l4(e)}function c4(e){return fl(e)?a4(e,aR):y0(e)?[e]:qS(oR(cR(e)))}var wm={},uR={get exports(){return wm},set exports(e){wm=e}},Ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,b0=pt?Symbol.for("react.element"):60103,w0=pt?Symbol.for("react.portal"):60106,Wd=pt?Symbol.for("react.fragment"):60107,Ud=pt?Symbol.for("react.strict_mode"):60108,Vd=pt?Symbol.for("react.profiler"):60114,Hd=pt?Symbol.for("react.provider"):60109,$d=pt?Symbol.for("react.context"):60110,k0=pt?Symbol.for("react.async_mode"):60111,Gd=pt?Symbol.for("react.concurrent_mode"):60111,Yd=pt?Symbol.for("react.forward_ref"):60112,Xd=pt?Symbol.for("react.suspense"):60113,dR=pt?Symbol.for("react.suspense_list"):60120,Kd=pt?Symbol.for("react.memo"):60115,Qd=pt?Symbol.for("react.lazy"):60116,fR=pt?Symbol.for("react.block"):60121,hR=pt?Symbol.for("react.fundamental"):60117,pR=pt?Symbol.for("react.responder"):60118,mR=pt?Symbol.for("react.scope"):60119;function an(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case b0:switch(e=e.type,e){case k0:case Gd:case Wd:case Vd:case Ud:case Xd:return e;default:switch(e=e&&e.$$typeof,e){case $d:case Yd:case Qd:case Kd:case Hd:return e;default:return t}}case w0:return t}}}function u4(e){return an(e)===Gd}Ee.AsyncMode=k0;Ee.ConcurrentMode=Gd;Ee.ContextConsumer=$d;Ee.ContextProvider=Hd;Ee.Element=b0;Ee.ForwardRef=Yd;Ee.Fragment=Wd;Ee.Lazy=Qd;Ee.Memo=Kd;Ee.Portal=w0;Ee.Profiler=Vd;Ee.StrictMode=Ud;Ee.Suspense=Xd;Ee.isAsyncMode=function(e){return u4(e)||an(e)===k0};Ee.isConcurrentMode=u4;Ee.isContextConsumer=function(e){return an(e)===$d};Ee.isContextProvider=function(e){return an(e)===Hd};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===b0};Ee.isForwardRef=function(e){return an(e)===Yd};Ee.isFragment=function(e){return an(e)===Wd};Ee.isLazy=function(e){return an(e)===Qd};Ee.isMemo=function(e){return an(e)===Kd};Ee.isPortal=function(e){return an(e)===w0};Ee.isProfiler=function(e){return an(e)===Vd};Ee.isStrictMode=function(e){return an(e)===Ud};Ee.isSuspense=function(e){return an(e)===Xd};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wd||e===Gd||e===Vd||e===Ud||e===Xd||e===dR||typeof e=="object"&&e!==null&&(e.$$typeof===Qd||e.$$typeof===Kd||e.$$typeof===Hd||e.$$typeof===$d||e.$$typeof===Yd||e.$$typeof===hR||e.$$typeof===pR||e.$$typeof===mR||e.$$typeof===fR)};Ee.typeOf=an;(function(e){e.exports=Ee})(uR);var S0=wm,gR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C0={};C0[S0.ForwardRef]=yR;C0[S0.Memo]=d4;function $1(e){return S0.isMemo(e)?d4:C0[e.$$typeof]||gR}var vR=Object.defineProperty,bR=Object.getOwnPropertyNames,G1=Object.getOwnPropertySymbols,wR=Object.getOwnPropertyDescriptor,kR=Object.getPrototypeOf,Y1=Object.prototype;function f4(e,t,n){if(typeof t!="string"){if(Y1){var i=kR(t);i&&i!==Y1&&f4(e,i,n)}var r=bR(t);G1&&(r=r.concat(G1(t)));for(var o=$1(e),s=$1(t),a=0;a<r.length;++a){var l=r[a];if(!xR[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var c=wR(t,l);try{vR(e,l,c)}catch{}}}}return e}var SR=f4;const CR=SR;var AR=1,ER=4;function _R(e){return da(e,AR|ER)}function Se(){return Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Se.apply(this,arguments)}function h4(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Vi(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function X1(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zd=P.createContext(void 0);Zd.displayName="FormikContext";var TR=Zd.Provider,PR=Zd.Consumer;function p4(){var e=P.useContext(Zd);return e||BS(!1),e}var K1=function(t){return Array.isArray(t)&&t.length===0},yt=function(t){return typeof t=="function"},hl=function(t){return t!==null&&typeof t=="object"},jR=function(t){return String(Math.floor(Number(t)))===t},ih=function(t){return Object.prototype.toString.call(t)==="[object String]"},m4=function(t){return P.Children.count(t)===0},rh=function(t){return hl(t)&&yt(t.then)};function We(e,t,n,i){i===void 0&&(i=0);for(var r=c4(t);e&&i<r.length;)e=e[r[i++]];return i!==r.length&&!e||e===void 0?n:e}function Xn(e,t,n){for(var i=U1(e),r=i,o=0,s=c4(t);o<s.length-1;o++){var a=s[o],l=We(e,s.slice(0,o+1));if(l&&(hl(l)||Array.isArray(l)))r=r[a]=U1(l);else{var c=s[o+1];r=r[a]=jR(c)&&Number(c)>=0?[]:{}}}return(o===0?e:r)[s[o]]===n?e:(n===void 0?delete r[s[o]]:r[s[o]]=n,o===0&&n===void 0&&delete i[s[o]],i)}function g4(e,t,n,i){n===void 0&&(n=new WeakMap),i===void 0&&(i={});for(var r=0,o=Object.keys(e);r<o.length;r++){var s=o[r],a=e[s];hl(a)?n.get(a)||(n.set(a,!0),i[s]=Array.isArray(a)?[]:{},g4(a,t,n,i[s])):i[s]=t}return i}function OR(e,t){switch(t.type){case"SET_VALUES":return Se({},e,{values:t.payload});case"SET_TOUCHED":return Se({},e,{touched:t.payload});case"SET_ERRORS":return Fi(e.errors,t.payload)?e:Se({},e,{errors:t.payload});case"SET_STATUS":return Se({},e,{status:t.payload});case"SET_ISSUBMITTING":return Se({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return Se({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return Se({},e,{values:Xn(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return Se({},e,{touched:Xn(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return Se({},e,{errors:Xn(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return Se({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return Se({},e,{touched:g4(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return Se({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Se({},e,{isSubmitting:!1});default:return e}}var br={},Wl={};function pl(e){var t=e.validateOnChange,n=t===void 0?!0:t,i=e.validateOnBlur,r=i===void 0?!0:i,o=e.validateOnMount,s=o===void 0?!1:o,a=e.isInitialValid,l=e.enableReinitialize,c=l===void 0?!1:l,u=e.onSubmit,d=Vi(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Se({validateOnChange:n,validateOnBlur:r,validateOnMount:s,onSubmit:u},d),p=P.useRef(f.initialValues),g=P.useRef(f.initialErrors||br),m=P.useRef(f.initialTouched||Wl),v=P.useRef(f.initialStatus),x=P.useRef(!1),y=P.useRef({});P.useEffect(function(){return x.current=!0,function(){x.current=!1}},[]);var b=P.useState(0),k=b[1],S=P.useRef({values:f.initialValues,errors:f.initialErrors||br,touched:f.initialTouched||Wl,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),E=S.current,C=P.useCallback(function(O){var D=S.current;S.current=OR(D,O),D!==S.current&&k(function(W){return W+1})},[]),j=P.useCallback(function(O,D){return new Promise(function(W,G){var Z=f.validate(O,D);Z==null?W(br):rh(Z)?Z.then(function(ee){W(ee||br)},function(ee){G(ee)}):W(Z)})},[f.validate]),T=P.useCallback(function(O,D){var W=f.validationSchema,G=yt(W)?W(D):W,Z=D&&G.validateAt?G.validateAt(D,O):NR(O,G);return new Promise(function(ee,N){Z.then(function(){ee(br)},function(A){A.name==="ValidationError"?ee(RR(A)):N(A)})})},[f.validationSchema]),z=P.useCallback(function(O,D){return new Promise(function(W){return W(y.current[O].validate(D))})},[]),U=P.useCallback(function(O){var D=Object.keys(y.current).filter(function(G){return yt(y.current[G].validate)}),W=D.length>0?D.map(function(G){return z(G,We(O,G))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(W).then(function(G){return G.reduce(function(Z,ee,N){return ee==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||ee&&(Z=Xn(Z,D[N],ee)),Z},{})})},[z]),q=P.useCallback(function(O){return Promise.all([U(O),f.validationSchema?T(O):{},f.validate?j(O):{}]).then(function(D){var W=D[0],G=D[1],Z=D[2],ee=mm.all([W,G,Z],{arrayMerge:DR});return ee})},[f.validate,f.validationSchema,U,j,T]),ne=cn(function(O){return O===void 0&&(O=E.values),C({type:"SET_ISVALIDATING",payload:!0}),q(O).then(function(D){return x.current&&(C({type:"SET_ISVALIDATING",payload:!1}),C({type:"SET_ERRORS",payload:D})),D})});P.useEffect(function(){s&&x.current===!0&&Fi(p.current,f.initialValues)&&ne(p.current)},[s,ne]);var he=P.useCallback(function(O){var D=O&&O.values?O.values:p.current,W=O&&O.errors?O.errors:g.current?g.current:f.initialErrors||{},G=O&&O.touched?O.touched:m.current?m.current:f.initialTouched||{},Z=O&&O.status?O.status:v.current?v.current:f.initialStatus;p.current=D,g.current=W,m.current=G,v.current=Z;var ee=function(){C({type:"RESET_FORM",payload:{isSubmitting:!!O&&!!O.isSubmitting,errors:W,touched:G,status:Z,values:D,isValidating:!!O&&!!O.isValidating,submitCount:O&&O.submitCount&&typeof O.submitCount=="number"?O.submitCount:0}})};if(f.onReset){var N=f.onReset(E.values,tt);rh(N)?N.then(ee):ee()}else ee()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);P.useEffect(function(){x.current===!0&&!Fi(p.current,f.initialValues)&&c&&(p.current=f.initialValues,he(),s&&ne(p.current))},[c,f.initialValues,he,s,ne]),P.useEffect(function(){c&&x.current===!0&&!Fi(g.current,f.initialErrors)&&(g.current=f.initialErrors||br,C({type:"SET_ERRORS",payload:f.initialErrors||br}))},[c,f.initialErrors]),P.useEffect(function(){c&&x.current===!0&&!Fi(m.current,f.initialTouched)&&(m.current=f.initialTouched||Wl,C({type:"SET_TOUCHED",payload:f.initialTouched||Wl}))},[c,f.initialTouched]),P.useEffect(function(){c&&x.current===!0&&!Fi(v.current,f.initialStatus)&&(v.current=f.initialStatus,C({type:"SET_STATUS",payload:f.initialStatus}))},[c,f.initialStatus,f.initialTouched]);var re=cn(function(O){if(y.current[O]&&yt(y.current[O].validate)){var D=We(E.values,O),W=y.current[O].validate(D);return rh(W)?(C({type:"SET_ISVALIDATING",payload:!0}),W.then(function(G){return G}).then(function(G){C({type:"SET_FIELD_ERROR",payload:{field:O,value:G}}),C({type:"SET_ISVALIDATING",payload:!1})})):(C({type:"SET_FIELD_ERROR",payload:{field:O,value:W}}),Promise.resolve(W))}else if(f.validationSchema)return C({type:"SET_ISVALIDATING",payload:!0}),T(E.values,O).then(function(G){return G}).then(function(G){C({type:"SET_FIELD_ERROR",payload:{field:O,value:We(G,O)}}),C({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),de=P.useCallback(function(O,D){var W=D.validate;y.current[O]={validate:W}},[]),ae=P.useCallback(function(O){delete y.current[O]},[]),B=cn(function(O,D){C({type:"SET_TOUCHED",payload:O});var W=D===void 0?r:D;return W?ne(E.values):Promise.resolve()}),Y=P.useCallback(function(O){C({type:"SET_ERRORS",payload:O})},[]),Q=cn(function(O,D){var W=yt(O)?O(E.values):O;C({type:"SET_VALUES",payload:W});var G=D===void 0?n:D;return G?ne(W):Promise.resolve()}),le=P.useCallback(function(O,D){C({type:"SET_FIELD_ERROR",payload:{field:O,value:D}})},[]),se=cn(function(O,D,W){C({type:"SET_FIELD_VALUE",payload:{field:O,value:D}});var G=W===void 0?n:W;return G?ne(Xn(E.values,O,D)):Promise.resolve()}),He=P.useCallback(function(O,D){var W=D,G=O,Z;if(!ih(O)){O.persist&&O.persist();var ee=O.target?O.target:O.currentTarget,N=ee.type,A=ee.name,L=ee.id,V=ee.value,X=ee.checked,Te=ee.outerHTML,Pe=ee.options,ge=ee.multiple;W=D||A||L,G=/number|range/.test(N)?(Z=parseFloat(V),isNaN(Z)?"":Z):/checkbox/.test(N)?FR(We(E.values,W),X,V):Pe&&ge?LR(Pe):V}W&&se(W,G)},[se,E.values]),ye=cn(function(O){if(ih(O))return function(D){return He(D,O)};He(O)}),_e=cn(function(O,D,W){D===void 0&&(D=!0),C({type:"SET_FIELD_TOUCHED",payload:{field:O,value:D}});var G=W===void 0?r:W;return G?ne(E.values):Promise.resolve()}),we=P.useCallback(function(O,D){O.persist&&O.persist();var W=O.target,G=W.name,Z=W.id,ee=W.outerHTML,N=D||G||Z;_e(N,!0)},[_e]),$e=cn(function(O){if(ih(O))return function(D){return we(D,O)};we(O)}),st=P.useCallback(function(O){yt(O)?C({type:"SET_FORMIK_STATE",payload:O}):C({type:"SET_FORMIK_STATE",payload:function(){return O}})},[]),Rt=P.useCallback(function(O){C({type:"SET_STATUS",payload:O})},[]),mt=P.useCallback(function(O){C({type:"SET_ISSUBMITTING",payload:O})},[]),ei=cn(function(){return C({type:"SUBMIT_ATTEMPT"}),ne().then(function(O){var D=O instanceof Error,W=!D&&Object.keys(O).length===0;if(W){var G;try{if(G=_(),G===void 0)return}catch(Z){throw Z}return Promise.resolve(G).then(function(Z){return x.current&&C({type:"SUBMIT_SUCCESS"}),Z}).catch(function(Z){if(x.current)throw C({type:"SUBMIT_FAILURE"}),Z})}else if(x.current&&(C({type:"SUBMIT_FAILURE"}),D))throw O})}),bn=cn(function(O){O&&O.preventDefault&&yt(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&yt(O.stopPropagation)&&O.stopPropagation(),ei().catch(function(D){console.warn("Warning: An unhandled error was caught from submitForm()",D)})}),tt={resetForm:he,validateForm:ne,validateField:re,setErrors:Y,setFieldError:le,setFieldTouched:_e,setFieldValue:se,setStatus:Rt,setSubmitting:mt,setTouched:B,setValues:Q,setFormikState:st,submitForm:ei},_=cn(function(){return u(E.values,tt)}),M=cn(function(O){O&&O.preventDefault&&yt(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&yt(O.stopPropagation)&&O.stopPropagation(),he()}),R=P.useCallback(function(O){return{value:We(E.values,O),error:We(E.errors,O),touched:!!We(E.touched,O),initialValue:We(p.current,O),initialTouched:!!We(m.current,O),initialError:We(g.current,O)}},[E.errors,E.touched,E.values]),J=P.useCallback(function(O){return{setValue:function(W,G){return se(O,W,G)},setTouched:function(W,G){return _e(O,W,G)},setError:function(W){return le(O,W)}}},[se,_e,le]),te=P.useCallback(function(O){var D=hl(O),W=D?O.name:O,G=We(E.values,W),Z={name:W,value:G,onChange:ye,onBlur:$e};if(D){var ee=O.type,N=O.value,A=O.as,L=O.multiple;ee==="checkbox"?N===void 0?Z.checked=!!G:(Z.checked=!!(Array.isArray(G)&&~G.indexOf(N)),Z.value=N):ee==="radio"?(Z.checked=G===N,Z.value=N):A==="select"&&L&&(Z.value=Z.value||[],Z.multiple=!0)}return Z},[$e,ye,E.values]),oe=P.useMemo(function(){return!Fi(p.current,E.values)},[p.current,E.values]),ie=P.useMemo(function(){return typeof a<"u"?oe?E.errors&&Object.keys(E.errors).length===0:a!==!1&&yt(a)?a(f):a:E.errors&&Object.keys(E.errors).length===0},[a,oe,E.errors,f]),$=Se({},E,{initialValues:p.current,initialErrors:g.current,initialTouched:m.current,initialStatus:v.current,handleBlur:$e,handleChange:ye,handleReset:M,handleSubmit:bn,resetForm:he,setErrors:Y,setFormikState:st,setFieldTouched:_e,setFieldValue:se,setFieldError:le,setStatus:Rt,setSubmitting:mt,setTouched:B,setValues:Q,submitForm:ei,validateForm:ne,validateField:re,isValid:ie,dirty:oe,unregisterField:ae,registerField:de,getFieldProps:te,getFieldMeta:R,getFieldHelpers:J,validateOnBlur:r,validateOnChange:n,validateOnMount:s});return $}function MR(e){var t=pl(e),n=e.component,i=e.children,r=e.render,o=e.innerRef;return P.useImperativeHandle(o,function(){return t}),P.createElement(TR,{value:t},n?P.createElement(n,t):r?r(t):i?yt(i)?i(t):m4(i)?null:P.Children.only(i):null)}function RR(e){var t={};if(e.inner){if(e.inner.length===0)return Xn(t,e.path,e.message);for(var r=e.inner,n=Array.isArray(r),i=0,r=n?r:r[Symbol.iterator]();;){var o;if(n){if(i>=r.length)break;o=r[i++]}else{if(i=r.next(),i.done)break;o=i.value}var s=o;We(t,s.path)||(t=Xn(t,s.path,s.message))}}return t}function NR(e,t,n,i){n===void 0&&(n=!1);var r=km(e);return t[n?"validateSync":"validate"](r,{abortEarly:!1,context:i||r})}function km(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=String(n);Array.isArray(e[i])===!0?t[i]=e[i].map(function(r){return Array.isArray(r)===!0||y1(r)?km(r):r!==""?r:void 0}):y1(e[i])?t[i]=km(e[i]):t[i]=e[i]!==""?e[i]:void 0}return t}function DR(e,t,n){var i=e.slice();return t.forEach(function(o,s){if(typeof i[s]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(o);i[s]=l?mm(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?i[s]=mm(e[s],o,n):e.indexOf(o)===-1&&i.push(o)}),i}function LR(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function FR(e,t,n){if(typeof e=="boolean")return!!t;var i=[],r=!1,o=-1;if(Array.isArray(e))i=e,o=e.indexOf(n),r=o>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!r?i.concat(n):r?i.slice(0,o).concat(i.slice(o+1)):i}var zR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?P.useLayoutEffect:P.useEffect;function cn(e){var t=P.useRef(e);return zR(function(){t.current=e}),P.useCallback(function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.current.apply(void 0,i)},[])}function IR(e){var t=e.validate,n=e.name,i=e.render,r=e.children,o=e.as,s=e.component,a=e.className,l=Vi(e,["validate","name","render","children","as","component","className"]),c=p4(),u=Vi(c,["validate","validationSchema"]),d=u.registerField,f=u.unregisterField;P.useEffect(function(){return d(n,{validate:t}),function(){f(n)}},[d,f,n,t]);var p=u.getFieldProps(Se({name:n},l)),g=u.getFieldMeta(n),m={field:p,form:u};if(i)return i(Se({},m,{meta:g}));if(yt(r))return r(Se({},m,{meta:g}));if(s){if(typeof s=="string"){var v=l.innerRef,x=Vi(l,["innerRef"]);return P.createElement(s,Se({ref:v},p,x,{className:a}),r)}return P.createElement(s,Se({field:p,form:u},l,{className:a}),r)}var y=o||"input";if(typeof y=="string"){var b=l.innerRef,k=Vi(l,["innerRef"]);return P.createElement(y,Se({ref:b},p,k,{className:a}),r)}return P.createElement(y,Se({},p,l,{className:a}),r)}var x4=P.forwardRef(function(e,t){var n=e.action,i=Vi(e,["action"]),r=n??"#",o=p4(),s=o.handleReset,a=o.handleSubmit;return P.createElement("form",Se({onSubmit:a,ref:t,onReset:s,action:r},i))});x4.displayName="Form";function BR(e){var t=function(r){return P.createElement(PR,null,function(o){return o||BS(!1),P.createElement(e,Se({},r,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",CR(t,e)}var WR=function(t,n,i){var r=Qr(t),o=r[n];return r.splice(n,1),r.splice(i,0,o),r},UR=function(t,n,i){var r=Qr(t),o=r[n];return r[n]=r[i],r[i]=o,r},oh=function(t,n,i){var r=Qr(t);return r.splice(n,0,i),r},VR=function(t,n,i){var r=Qr(t);return r[n]=i,r},Qr=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(i){return parseInt(i)}).reduce(function(i,r){return r>i?r:i},0);return Array.from(Se({},t,{length:n+1}))}else return[]},Q1=function(t,n){var i=typeof t=="function"?t:n;return function(r){if(Array.isArray(r)||hl(r)){var o=Qr(r);return i(o)}return r}},HR=function(e){h4(t,e);function t(i){var r;return r=e.call(this,i)||this,r.updateArrayField=function(o,s,a){var l=r.props,c=l.name,u=l.formik.setFormikState;u(function(d){var f=Q1(a,o),p=Q1(s,o),g=Xn(d.values,c,o(We(d.values,c))),m=a?f(We(d.errors,c)):void 0,v=s?p(We(d.touched,c)):void 0;return K1(m)&&(m=void 0),K1(v)&&(v=void 0),Se({},d,{values:g,errors:a?Xn(d.errors,c,m):d.errors,touched:s?Xn(d.touched,c,v):d.touched})})},r.push=function(o){return r.updateArrayField(function(s){return[].concat(Qr(s),[_R(o)])},!1,!1)},r.handlePush=function(o){return function(){return r.push(o)}},r.swap=function(o,s){return r.updateArrayField(function(a){return UR(a,o,s)},!0,!0)},r.handleSwap=function(o,s){return function(){return r.swap(o,s)}},r.move=function(o,s){return r.updateArrayField(function(a){return WR(a,o,s)},!0,!0)},r.handleMove=function(o,s){return function(){return r.move(o,s)}},r.insert=function(o,s){return r.updateArrayField(function(a){return oh(a,o,s)},function(a){return oh(a,o,null)},function(a){return oh(a,o,null)})},r.handleInsert=function(o,s){return function(){return r.insert(o,s)}},r.replace=function(o,s){return r.updateArrayField(function(a){return VR(a,o,s)},!1,!1)},r.handleReplace=function(o,s){return function(){return r.replace(o,s)}},r.unshift=function(o){var s=-1;return r.updateArrayField(function(a){var l=a?[o].concat(a):[o];return s=l.length,l},function(a){return a?[null].concat(a):[null]},function(a){return a?[null].concat(a):[null]}),s},r.handleUnshift=function(o){return function(){return r.unshift(o)}},r.handleRemove=function(o){return function(){return r.remove(o)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(X1(r)),r.pop=r.pop.bind(X1(r)),r}var n=t.prototype;return n.componentDidUpdate=function(r){this.props.validateOnChange&&this.props.formik.validateOnChange&&!Fi(We(r.formik.values,r.name),We(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(r){var o;return this.updateArrayField(function(s){var a=s?Qr(s):[];return o||(o=a[r]),yt(a.splice)&&a.splice(r,1),yt(a.every)&&a.every(function(l){return l===void 0})?[]:a},!0,!0),o},n.pop=function(){var r;return this.updateArrayField(function(o){var s=o.slice();return r||(r=s&&s.pop&&s.pop()),s},!0,!0),r},n.render=function(){var r={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,s=o.component,a=o.render,l=o.children,c=o.name,u=o.formik,d=Vi(u,["validate","validationSchema"]),f=Se({},r,{form:d,name:c});return s?P.createElement(s,f):a?a(f):l?typeof l=="function"?l(f):m4(l)?null:P.Children.only(l):null},t}(P.Component);HR.defaultProps={validateOnChange:!0};var $R=function(e){h4(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(r){return We(this.props.formik.errors,this.props.name)!==We(r.formik.errors,this.props.name)||We(this.props.formik.touched,this.props.name)!==We(r.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(r).length},n.render=function(){var r=this.props,o=r.component,s=r.formik,a=r.render,l=r.children,c=r.name,u=Vi(r,["component","formik","render","children","name"]),d=We(s.touched,c),f=We(s.errors,c);return d&&f?a?yt(a)?a(f):null:l?yt(l)?l(f):null:o?P.createElement(o,u,f):f:null},t}(P.Component),GR=BR($R);function ao(e){this._maxSize=e,this.clear()}ao.prototype.clear=function(){this._size=0,this._values=Object.create(null)};ao.prototype.get=function(e){return this._values[e]};ao.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var YR=/[^.^\]^[]+|(?=\[\]|\.\.)/g,y4=/^\d+$/,XR=/^\d/,KR=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,QR=/^\s*(['"]?)(.*?)(\1)\s*$/,A0=512,Z1=new ao(A0),J1=new ao(A0),q1=new ao(A0),Br={Cache:ao,split:Sm,normalizePath:sh,setter:function(e){var t=sh(e);return J1.get(e)||J1.set(e,function(i,r){for(var o=0,s=t.length,a=i;o<s-1;){var l=t[o];if(l==="__proto__"||l==="constructor"||l==="prototype")return i;a=a[t[o++]]}a[t[o]]=r})},getter:function(e,t){var n=sh(e);return q1.get(e)||q1.set(e,function(r){for(var o=0,s=n.length;o<s;)if(r!=null||!t)r=r[n[o++]];else return;return r})},join:function(e){return e.reduce(function(t,n){return t+(E0(n)||y4.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){ZR(Array.isArray(e)?e:Sm(e),t,n)}};function sh(e){return Z1.get(e)||Z1.set(e,Sm(e).map(function(t){return t.replace(QR,"$2")}))}function Sm(e){return e.match(YR)||[""]}function ZR(e,t,n){var i=e.length,r,o,s,a;for(o=0;o<i;o++)r=e[o],r&&(eN(r)&&(r='"'+r+'"'),a=E0(r),s=!a&&/^\d+$/.test(r),t.call(n,r,a,s,o,e))}function E0(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function JR(e){return e.match(XR)&&!e.match(y4)}function qR(e){return KR.test(e)}function eN(e){return!E0(e)&&(JR(e)||qR(e))}const tN=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Jd=e=>e.match(tN)||[],qd=e=>e[0].toUpperCase()+e.slice(1),_0=(e,t)=>Jd(e).join(t).toLowerCase(),v4=e=>Jd(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),nN=e=>qd(v4(e)),iN=e=>_0(e,"_"),rN=e=>_0(e,"-"),oN=e=>qd(_0(e," ")),sN=e=>Jd(e).map(qd).join(" ");var ah={words:Jd,upperFirst:qd,camelCase:v4,pascalCase:nN,snakeCase:iN,kebabCase:rN,sentenceCase:oN,titleCase:sN},Hu={},aN={get exports(){return Hu},set exports(e){Hu=e}};aN.exports=function(e){return b4(lN(e),e)};Hu.array=b4;function b4(e,t){var n=e.length,i=new Array(n),r={},o=n,s=cN(t),a=uN(e);for(t.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)r[o]||l(e[o],o,new Set);return i;function l(c,u,d){if(d.has(c)){var f;try{f=", node was:"+JSON.stringify(c)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!r[u]){r[u]=!0;var p=s.get(c)||new Set;if(p=Array.from(p),u=p.length){d.add(c);do{var g=p[--u];l(g,a.get(g),d)}while(u);d.delete(c)}i[--n]=c}}}function lN(e){for(var t=new Set,n=0,i=e.length;n<i;n++){var r=e[n];t.add(r[0]),t.add(r[1])}return Array.from(t)}function cN(e){for(var t=new Map,n=0,i=e.length;n<i;n++){var r=e[n];t.has(r[0])||t.set(r[0],new Set),t.has(r[1])||t.set(r[1],new Set),t.get(r[0]).add(r[1])}return t}function uN(e){for(var t=new Map,n=0,i=e.length;n<i;n++)t.set(e[n],n);return t}const dN=Object.prototype.toString,fN=Error.prototype.toString,hN=RegExp.prototype.toString,pN=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",mN=/^Symbol\((.*)\)(.*)$/;function gN(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function ev(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return gN(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return pN.call(e).replace(mN,"Symbol($1)");const i=dN.call(e).slice(8,-1);return i==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):i==="Error"||e instanceof Error?"["+fN.call(e)+"]":i==="RegExp"?hN.call(e):null}function sr(e,t){let n=ev(e,t);return n!==null?n:JSON.stringify(e,function(i,r){let o=ev(this[i],t);return o!==null?o:r},2)}function w4(e){return e==null?[]:[].concat(e)}let k4,xN=/\$\{\s*(\w+)\s*\}/g;k4=Symbol.toStringTag;class Lt extends Error{static formatError(t,n){const i=n.label||n.path||"this";return i!==n.path&&(n=Object.assign({},n,{path:i})),typeof t=="string"?t.replace(xN,(r,o)=>sr(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,i,r,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[k4]="Error",this.name="ValidationError",this.value=n,this.path=i,this.type=r,this.errors=[],this.inner=[],w4(t).forEach(s=>{if(Lt.isError(s)){this.errors.push(...s.errors);const a=s.inner.length?s.inner:[s];this.inner.push(...a)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,Lt)}}let Bn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:i})=>{const r=i!=null&&i!==n?` (cast from the value \`${sr(i,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${sr(n,!0)}\``+r:`${e} must match the configured type. The validated value was: \`${sr(n,!0)}\``+r}},kn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ni={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Cm={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},yN={isValue:"${path} field must be ${value}"},Am={noUnknown:"${path} field has unspecified keys: ${unknown}"},vN={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},bN={notType:e=>{const{path:t,value:n,spec:i}=e,r=i.types.length;if(Array.isArray(n)){if(n.length<r)return`${t} tuple value has too few items, expected a length of ${r} but got ${n.length} for value: \`${sr(n,!0)}\``;if(n.length>r)return`${t} tuple value has too many items, expected a length of ${r} but got ${n.length} for value: \`${sr(n,!0)}\``}return Lt.formatError(Bn.notType,e)}};Object.assign(Object.create(null),{mixed:Bn,string:kn,number:Ni,date:Cm,object:Am,array:vN,boolean:yN,tuple:bN});const T0=e=>e&&e.__isYupSchema__;class $u{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:r,otherwise:o}=n,s=typeof i=="function"?i:(...a)=>a.every(l=>l===i);return new $u(t,(a,l)=>{var c;let u=s(...a)?r:o;return(c=u==null?void 0:u(l))!=null?c:l})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let i=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),r=this.fn(i,t,n);if(r===void 0||r===t)return t;if(!T0(r))throw new TypeError("conditions must return a schema object");return r.resolve(n)}}const Ul={context:"$",value:"."};class lo{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ul.context,this.isValue=this.key[0]===Ul.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?Ul.context:this.isValue?Ul.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&Br.getter(this.path,!0),this.map=n.map}getValue(t,n,i){let r=this.isContext?i:this.isValue?t:n;return this.getter&&(r=this.getter(r||{})),this.map&&(r=this.map(r)),r}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}lo.prototype.__isYupRef=!0;const hi=e=>e==null;function po(e){function t({value:n,path:i="",options:r,originalValue:o,schema:s},a,l){const{name:c,test:u,params:d,message:f,skipAbsent:p}=e;let{parent:g,context:m,abortEarly:v=s.spec.abortEarly,disableStackTrace:x=s.spec.disableStackTrace}=r;function y(U){return lo.isRef(U)?U.getValue(n,g,m):U}function b(U={}){var q;const ne=Object.assign({value:n,originalValue:o,label:s.spec.label,path:U.path||i,spec:s.spec},d,U.params);for(const re of Object.keys(ne))ne[re]=y(ne[re]);const he=new Lt(Lt.formatError(U.message||f,ne),n,ne.path,U.type||c,(q=U.disableStackTrace)!=null?q:x);return he.params=ne,he}const k=v?a:l;let S={path:i,parent:g,type:c,from:r.from,createError:b,resolve:y,options:r,originalValue:o,schema:s};const E=U=>{Lt.isError(U)?k(U):U?l(null):k(b())},C=U=>{Lt.isError(U)?k(U):a(U)};if(p&&hi(n))return E(!0);let T;try{var z;if(T=u.call(S,n,S),typeof((z=T)==null?void 0:z.then)=="function"){if(r.sync)throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(T).then(E,C)}}catch(U){C(U);return}E(T)}return t.OPTIONS=e,t}function wN(e,t,n,i=n){let r,o,s;return t?(Br.forEach(t,(a,l,c)=>{let u=l?a.slice(1,a.length-1):a;e=e.resolve({context:i,parent:r,value:n});let d=e.type==="tuple",f=c?parseInt(u,10):0;if(e.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);r=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!c){if(!e.fields||!e.fields[u])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);r=n,n=n&&n[u],e=e.fields[u]}o=u,s=l?"["+a+"]":"."+a}),{schema:e,parent:r,parentPath:o}):{parent:r,parentPath:t,schema:e}}class Gu extends Set{describe(){const t=[];for(const n of this.values())t.push(lo.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const i of this.values())n.push(t(i));return n}clone(){return new Gu(this.values())}merge(t,n){const i=this.clone();return t.forEach(r=>i.add(r)),n.forEach(r=>i.delete(r)),i}}function Lo(e,t=new Map){if(T0(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let i=0;i<e.length;i++)n[i]=Lo(e[i],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[i,r]of e.entries())n.set(i,Lo(r,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const i of e)n.add(Lo(i,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[i,r]of Object.entries(e))n[i]=Lo(r,t)}else throw Error(`Unable to clone ${e}`);return n}class Dn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Gu,this._blacklist=new Gu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Bn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Lo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let i=t(this);return this._mutate=n,i}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,i=t.clone();const r=Object.assign({},n.spec,i.spec);return i.spec=r,i.internalTests=Object.assign({},n.internalTests,i.internalTests),i._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),i._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),i.tests=n.tests,i.exclusiveTests=n.exclusiveTests,i.withMutation(o=>{t.tests.forEach(s=>{o.test(s.OPTIONS)})}),i.transforms=[...n.transforms,...i.transforms],i}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let i=n.conditions;n=n.clone(),n.conditions=[],n=i.reduce((r,o)=>o.resolve(r,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,i,r,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(i=t.abortEarly)!=null?i:this.spec.abortEarly,recursive:(r=t.recursive)!=null?r:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let i=this.resolve(Object.assign({value:t},n)),r=n.assert==="ignore-optionality",o=i._cast(t,n);if(n.assert!==!1&&!i.isType(o)){if(r&&hi(o))return o;let s=sr(t),a=sr(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${s} 
`+(a!==s?`result of cast: ${a}`:""))}return o}_cast(t,n){let i=t===void 0?t:this.transforms.reduce((r,o)=>o.call(this,r,t,this),t);return i===void 0&&(i=this.getDefault(n)),i}_validate(t,n={},i,r){let{path:o,originalValue:s=t,strict:a=this.spec.strict}=n,l=t;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let u of Object.values(this.internalTests))u&&c.push(u);this.runTests({path:o,value:l,originalValue:s,options:n,tests:c},i,u=>{if(u.length)return r(u,l);this.runTests({path:o,value:l,originalValue:s,options:n,tests:this.tests},i,r)})}runTests(t,n,i){let r=!1,{tests:o,value:s,originalValue:a,path:l,options:c}=t,u=m=>{r||(r=!0,n(m,s))},d=m=>{r||(r=!0,i(m,s))},f=o.length,p=[];if(!f)return d([]);let g={value:s,originalValue:a,path:l,options:c,schema:this};for(let m=0;m<o.length;m++){const v=o[m];v(g,u,function(y){y&&(Array.isArray(y)?p.push(...y):p.push(y)),--f<=0&&d(p)})}}asNestedTest({key:t,index:n,parent:i,parentPath:r,originalParent:o,options:s}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=i[a];const u=Object.assign({},s,{strict:!0,parent:i,value:c,originalValue:o[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${r||""}[${c?a:`"${a}"`}]`:(r?`${r}.`:"")+t});return(d,f,p)=>this.resolve(u)._validate(c,u,f,p)}validate(t,n){var i;let r=this.resolve(Object.assign({},n,{value:t})),o=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return new Promise((s,a)=>r._validate(t,n,(l,c)=>{Lt.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new Lt(l,c,void 0,void 0,o)):s(c)}))}validateSync(t,n){var i;let r=this.resolve(Object.assign({},n,{value:t})),o,s=(i=n==null?void 0:n.disableStackTrace)!=null?i:r.spec.disableStackTrace;return r._validate(t,Object.assign({},n,{sync:!0}),(a,l)=>{throw Lt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new Lt(a,t,void 0,void 0,s);o=l}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,i=>{if(Lt.isError(i))return!1;throw i})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(i){if(Lt.isError(i))return!1;throw i}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Lo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const i=this.clone({nullable:t});return i.internalTests.nullable=po({message:n,name:"nullable",test(r){return r===null?this.schema.spec.nullable:!0}}),i}optionality(t,n){const i=this.clone({optional:t});return i.internalTests.optionality=po({message:n,name:"optionality",test(r){return r===void 0?this.schema.spec.optional:!0}}),i}optional(){return this.optionality(!0)}defined(t=Bn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Bn.notNull){return this.nullability(!1,t)}required(t=Bn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Bn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let i=this.clone(),r=po(n),o=n.exclusive||n.name&&i.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(i.exclusiveTests[n.name]=!!n.exclusive),i.tests=i.tests.filter(s=>!(s.OPTIONS.name===n.name&&(o||s.OPTIONS.test===r.OPTIONS.test))),i.tests.push(r),i}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let i=this.clone(),r=w4(t).map(o=>new lo(o));return r.forEach(o=>{o.isSibling&&i.deps.push(o.key)}),i.conditions.push(typeof n=="function"?new $u(r,n):$u.fromOptions(r,n)),i}typeError(t){let n=this.clone();return n.internalTests.typeError=po({message:t,name:"typeError",skipAbsent:!0,test(i){return this.schema._typeCheck(i)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Bn.oneOf){let i=this.clone();return t.forEach(r=>{i._whitelist.add(r),i._blacklist.delete(r)}),i.internalTests.whiteList=po({message:n,name:"oneOf",skipAbsent:!0,test(r){let o=this.schema._whitelist,s=o.resolveAll(this.resolve);return s.includes(r)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:s}})}}),i}notOneOf(t,n=Bn.notOneOf){let i=this.clone();return t.forEach(r=>{i._blacklist.add(r),i._whitelist.delete(r)}),i.internalTests.blacklist=po({message:n,name:"notOneOf",test(r){let o=this.schema._blacklist,s=o.resolveAll(this.resolve);return s.includes(r)?this.createError({params:{values:Array.from(o).join(", "),resolved:s}}):!0}}),i}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:i,meta:r,optional:o,nullable:s}=n.spec;return{meta:r,label:i,optional:o,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,u)=>u.findIndex(d=>d.name===l.name)===c)}}}Dn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Dn.prototype[`${e}At`]=function(t,n,i={}){const{parent:r,parentPath:o,schema:s}=wN(this,t,n,i.context);return s[e](r&&r[o],Object.assign({},i,{parent:r,path:t}))};for(const e of["equals","is"])Dn.prototype[e]=Dn.prototype.oneOf;for(const e of["not","nope"])Dn.prototype[e]=Dn.prototype.notOneOf;let kN=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,SN=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,CN=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,AN=e=>hi(e)||e===e.trim(),EN={}.toString();function _n(){return new S4}class S4 extends Dn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,i)=>{if(!i.spec.coerce||i.isType(t)||Array.isArray(t))return t;const r=t!=null&&t.toString?t.toString():t;return r===EN?t:r})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Bn.required,name:"required",skipAbsent:!0,test:i=>!!i.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=kn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(i){return i.length===this.resolve(t)}})}min(t,n=kn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i.length>=this.resolve(t)}})}max(t,n=kn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(i){return i.length<=this.resolve(t)}})}matches(t,n){let i=!1,r,o;return n&&(typeof n=="object"?{excludeEmptyString:i=!1,message:r,name:o}=n:r=n),this.test({name:o||"matches",message:r||kn.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&i||s.search(t)!==-1})}email(t=kn.email){return this.matches(kN,{name:"email",message:t,excludeEmptyString:!0})}url(t=kn.url){return this.matches(SN,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=kn.uuid){return this.matches(CN,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=kn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:AN})}lowercase(t=kn.lowercase){return this.transform(n=>hi(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hi(n)||n===n.toLowerCase()})}uppercase(t=kn.uppercase){return this.transform(n=>hi(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>hi(n)||n===n.toUpperCase()})}}_n.prototype=S4.prototype;let _N=e=>e!=+e;function $n(){return new C4}class C4 extends Dn{constructor(){super({type:"number",check(t){return t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&!_N(t)}}),this.withMutation(()=>{this.transform((t,n,i)=>{if(!i.spec.coerce)return t;let r=t;if(typeof r=="string"){if(r=r.replace(/\s/g,""),r==="")return NaN;r=+r}return i.isType(r)||r===null?r:parseFloat(r)})})}min(t,n=Ni.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(t)}})}max(t,n=Ni.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(t)}})}lessThan(t,n=Ni.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:t},skipAbsent:!0,test(i){return i<this.resolve(t)}})}moreThan(t,n=Ni.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:t},skipAbsent:!0,test(i){return i>this.resolve(t)}})}positive(t=Ni.positive){return this.moreThan(0,t)}negative(t=Ni.negative){return this.lessThan(0,t)}integer(t=Ni.integer){return this.test({name:"integer",message:t,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(t=>hi(t)?t:t|0)}round(t){var n;let i=["ceil","floor","round","trunc"];if(t=((n=t)==null?void 0:n.toLowerCase())||"round",t==="trunc")return this.truncate();if(i.indexOf(t.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+i.join(", "));return this.transform(r=>hi(r)?r:Math[t](r))}}$n.prototype=C4.prototype;const TN=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ni(e,t=0){return Number(e)||t}function PN(e){const t=TN.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:ni(t[1]),month:ni(t[2],1)-1,day:ni(t[3],1),hour:ni(t[4]),minute:ni(t[5]),second:ni(t[6]),millisecond:t[7]?ni(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:ni(t[10]),minuteOffset:ni(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let i=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(i=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(i=0-i)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+i,n.second,n.millisecond)}let jN=new Date(""),ON=e=>Object.prototype.toString.call(e)==="[object Date]";class ef extends Dn{constructor(){super({type:"date",check(t){return ON(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,i)=>!i.spec.coerce||i.isType(t)||t===null?t:(t=PN(t),isNaN(t)?ef.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let i;if(lo.isRef(t))i=t;else{let r=this.cast(t);if(!this._typeCheck(r))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);i=r}return i}min(t,n=Cm.min){let i=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r>=this.resolve(i)}})}max(t,n=Cm.max){let i=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(r){return r<=this.resolve(i)}})}}ef.INVALID_DATE=jN;ef.prototype;function MN(e,t=[]){let n=[],i=new Set,r=new Set(t.map(([s,a])=>`${s}-${a}`));function o(s,a){let l=Br.split(s)[0];i.add(l),r.has(`${a}-${l}`)||n.push([a,l])}for(const s of Object.keys(e)){let a=e[s];i.add(s),lo.isRef(a)&&a.isSibling?o(a.path,s):T0(a)&&"deps"in a&&a.deps.forEach(l=>o(l,s))}return Hu.array(Array.from(i),n).reverse()}function tv(e,t){let n=1/0;return e.some((i,r)=>{var o;if((o=t.path)!=null&&o.includes(i))return n=r,!0}),n}function A4(e){return(t,n)=>tv(e,t)-tv(e,n)}const RN=(e,t,n)=>{if(typeof e!="string")return e;let i=e;try{i=JSON.parse(e)}catch{}return n.isType(i)?i:e};function Vc(e){if("fields"in e){const t={};for(const[n,i]of Object.entries(e.fields))t[n]=Vc(i);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Vc(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Vc)}):"optional"in e?e.optional():e}const NN=(e,t)=>{const n=[...Br.normalizePath(t)];if(n.length===1)return n[0]in e;let i=n.pop(),r=Br.getter(Br.join(n),!0)(e);return!!(r&&i in r)};let nv=e=>Object.prototype.toString.call(e)==="[object Object]";function DN(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(i=>n.indexOf(i)===-1)}const LN=A4([]);function Vn(e){return new E4(e)}class E4 extends Dn{constructor(t){super({type:"object",check(n){return nv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=LN,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var i;let r=super._cast(t,n);if(r===void 0)return this.getDefault(n);if(!this._typeCheck(r))return r;let o=this.fields,s=(i=n.stripUnknown)!=null?i:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(r).filter(d=>!this._nodes.includes(d))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),u=!1;for(const d of a){let f=o[d],p=d in r;if(f){let g,m=r[d];c.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:m,context:n.context,parent:l});let v=f instanceof Dn?f.spec:void 0,x=v==null?void 0:v.strict;if(v!=null&&v.strip){u=u||d in r;continue}g=!n.__validating||!x?f.cast(r[d],c):r[d],g!==void 0&&(l[d]=g)}else p&&!s&&(l[d]=r[d]);(p!==d in l||l[d]!==r[d])&&(u=!0)}return u?l:r}_validate(t,n={},i,r){let{from:o=[],originalValue:s=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:s},...o],n.__validating=!0,n.originalValue=s,super._validate(t,n,i,(l,c)=>{if(!a||!nv(c)){r(l,c);return}s=s||c;let u=[];for(let d of this._nodes){let f=this.fields[d];!f||lo.isRef(f)||u.push(f.asNestedTest({options:n,key:d,parent:c,parentPath:n.path,originalParent:s}))}this.runTests({tests:u,value:c,originalValue:s,options:n},i,d=>{r(d.sort(this._sortErrors).concat(l),c)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),i=n.fields;for(let[r,o]of Object.entries(this.fields)){const s=i[r];i[r]=s===void 0?o:s}return n.withMutation(r=>r.setFields(i,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(i=>{var r;const o=this.fields[i];let s=t;(r=s)!=null&&r.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[i]})),n[i]=o&&"getDefault"in o?o.getDefault(s):void 0}),n}setFields(t,n){let i=this.clone();return i.fields=t,i._nodes=MN(t,n),i._sortErrors=A4(Object.keys(t)),n&&(i._excludedEdges=n),i}shape(t,n=[]){return this.clone().withMutation(i=>{let r=i._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),r=[...i._excludedEdges,...n]),i.setFields(Object.assign(i.fields,t),r)})}partial(){const t={};for(const[n,i]of Object.entries(this.fields))t[n]="optional"in i&&i.optional instanceof Function?i.optional():i;return this.setFields(t)}deepPartial(){return Vc(this)}pick(t){const n={};for(const i of t)this.fields[i]&&(n[i]=this.fields[i]);return this.setFields(n,this._excludedEdges.filter(([i,r])=>t.includes(i)&&t.includes(r)))}omit(t){const n=[];for(const i of Object.keys(this.fields))t.includes(i)||n.push(i);return this.pick(n)}from(t,n,i){let r=Br.getter(t,!0);return this.transform(o=>{if(!o)return o;let s=o;return NN(o,t)&&(s=Object.assign({},o),i||delete s[t],s[n]=r(o)),s})}json(){return this.transform(RN)}noUnknown(t=!0,n=Am.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let i=this.test({name:"noUnknown",exclusive:!0,message:n,test(r){if(r==null)return!0;const o=DN(this.schema,r);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return i.spec.noUnknown=t,i}unknown(t=!0,n=Am.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const i={};for(const r of Object.keys(n))i[t(r)]=n[r];return i})}camelCase(){return this.transformKeys(ah.camelCase)}snakeCase(){return this.transformKeys(ah.snakeCase)}constantCase(){return this.transformKeys(t=>ah.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),i=super.describe(t);i.fields={};for(const[o,s]of Object.entries(n.fields)){var r;let a=t;(r=a)!=null&&r.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[o]})),i.fields[o]=s.describe(a)}return i}}Vn.prototype=E4.prototype;const _4=Ve.create({baseURL:"https://healthy-hub-2d3x.onrender.com/api"}),FN=e=>{_4.defaults.headers.common.Authorization=`Bearer ${e}`},Hc=ot("caloriesGoal/get",async(e,t)=>{try{const i=t.getState().auth.token;return i?(FN(i),(await _4("/user/daily-goal-calories")).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),zN="/healthyhub-project/assets/error-3cccb7e1.svg",IN=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  font-family: Poppins;

  @media (min-width: 834px) {
    top: 100px;
  }
`,BN=w.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`,WN=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--primary-black-color);
  padding: 24px 10px;

  @media (min-width: 834px) {
    position: absolute;
    top: 0;
    width: 392px;
    height: 200px;
    border-radius: 12px;
    background: var(--primary-black-second-color);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
    padding: 20px 24px 40px;
    margin-left: 294px;
    margin-right: 148px;
  }

  @media (min-width: 1440px) {
    margin-left: 1012px;
    margin-right: 36px;
  }
`,UN=w.div`
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 100%;
    height: 200px;
    padding: 0;
    margin: 0;
  }
`,VN=w.h3`
  color: var(--primary-white-color);
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,HN=w.p`
  color: var(--primary-grey-color);
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.43;
`,$N=w.div`
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
`,GN=w.p`
  font-size: 14px;
  line-height: 1.43;
  color: var(--primary-white-color);
`,YN=w.p`
  font-size: 14px;
  line-height: 1.43;
  color: var(--primary-grey-color);
  font-weight: 500;
`,XN=w(x4)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  &::after {
    position: absolute;
    top: 12px;
    right: 10px;
    content: '';
    display: ${({$showIcon:e})=>e};
    width: 16px;
    height: 16px;
    background-image: url('${zN}');

    @media (min-width: 834px) {
      bottom: 29px;
      left: 140px;
    }
  }

  @media (min-width: 834px) {
    flex-direction: row;

    align-items: flex-start;
  }
`,KN=w.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: var(--primary-black-second-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  border: 1px solid var(--primary-light-green-color);

  @media (min-width: 834px) {
    width: 166px;
  }
`,QN=w(IR)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;
  color: var(--primary-white-color);
  font-size: 14px;
  line-height: 1.43;
  border-radius: 12px;
  background: var(--primary-black-color);
  border: 1px solid var(--primary-light-green-color);
  outline: none;
  border: ${({borderstyle:e})=>e};
  font-family: Poppins;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: var(--primary-grey-color);
  }

  @media (min-width: 834px) {
    background: var(--primary-black-second-color);
    width: 166px;
  }
`,ZN=w.p`
  color: rgba(231, 74, 59, 1);
  font-size: 12px;
  line-height: 1.17;
  margin-top: 4px;
`,JN=w.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--primary-grey-color);
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  margin-top: 24px;
  border: none;

  @media (min-width: 834px) {
    display: none;
  }
`,qN=Vn({weight:$n().min(1,"weight can not be less 1 kg").max(300,"weight can not be more 300 kg").required("please enter your weight")});function eD({onClose:e,date:t}){const n=sn(),i=It(K_);P.useEffect(()=>{const s=a=>{a.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const r=s=>{s.currentTarget===s.target&&e()},o=({weight:s},a)=>{n(Aj({weight:s})),n(ca()),setTimeout(()=>{n(Hc())},200),a.resetForm(),e()};return h.jsx(IN,{onClick:r,children:h.jsx(BN,{children:h.jsx(WN,{children:h.jsxs(UN,{children:[h.jsx(DS,{onClose:e}),h.jsx(VN,{children:"Enter your current weight"}),h.jsx(HN,{children:"You can record your weight once a day"}),h.jsxs($N,{children:[h.jsx(GN,{children:"Today"}),h.jsx(YN,{children:t})]}),i===t?h.jsx("p",{children:"You already recorded your weight today"}):h.jsx(MR,{initialValues:{weight:""},validationSchema:qN,onSubmit:o,children:({errors:s,touched:a})=>h.jsxs(XN,{$showIcon:s.weight&&a.weight?"block":"none",children:[h.jsx("div",{children:h.jsxs("div",{children:[h.jsx(QN,{name:"weight",type:"number",placeholder:"Enter your weight",borderstyle:s.weight&&a.weight?"1px solid rgba(231, 74, 59, 1)":""}),h.jsx(GR,{name:"weight",children:l=>h.jsx(ZN,{children:l})})]})}),h.jsx(KN,{type:"submit",children:"Confirm"})]})}),h.jsx(JN,{type:"button",onClick:e,children:"Cancel"})]})})})})}const P0=Ve.create({baseURL:"https://healthy-hub-2d3x.onrender.com/api"}),T4=e=>{P0.defaults.headers.common.Authorization=`Bearer ${e}`},lh=ot("waterIntake/get",async(e,t)=>{try{const i=t.getState().auth.token;return i?(T4(i),(await P0("/user/water-intake")).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),ch=ot("waterIntake/post",async(e,t)=>{try{const i=t.getState().auth.token;return i?(T4(i),(await P0.post("api/user/water-intake",e)).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),tD={water:{value:null},isLoading:!1,error:null},nD=(e,t)=>{e.isLoading=!1,e.error=t.payload},iD=e=>{e.isLoading=!0},rD=(e,t)=>{e.isLoading=!1,e.error=null,e.water.value=t.payload.data.value},oD=gs({name:"waterIntake",initialState:tD,reducers:{clearWaterIntake(e){return e}},extraReducers:e=>{e.addMatcher(Ic(lh.pending,ch.pending),iD).addMatcher(Ic(lh.rejected,ch.rejected),nD).addMatcher(Ic(lh.fulfilled,ch.fulfilled),rD)}}),{clearWaterIntake:sD}=oD.actions,aD={calories:{value:0},isLoading:!1,error:null},lD=(e,t)=>{e.isLoading=!1,e.error=t.payload},cD=e=>{e.isLoading=!0},uD=(e,t)=>{e.isLoading=!1,e.error=null,e.calories.value=t.payload.data.value},dD=gs({name:"caloriesGoal",initialState:aD,reducers:{clearDailyCalories(e){return e}},extraReducers:e=>{e.addCase(Hc.fulfilled,uD).addCase(Hc.pending,cD).addCase(Hc.rejected,lD)}}),{clearDailyCalories:fD}=dD.actions,tf=Ve.create({baseURL:"https://healthy-hub-2d3x.onrender.com/api"}),j0=e=>{tf.defaults.headers.common.Authorization=`Bearer ${e}`},$c=ot("foodIntake/get",async(e,t)=>{try{const i=t.getState().auth.token;return i?(j0(i),(await tf("api/user/food-intake")).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),Gc=ot("foodIntake/post",async(e,t)=>{try{const i=t.getState().auth.token;return i?(j0(i),(await tf.post("api/user/food-intake",e)).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),uh=ot("foodIntake/update",async({ident:e,type:t,product:n},i)=>{try{const o=i.getState().auth.token;return o?(j0(o),(await tf.put(`api/user/food-intake/${e}`,{type:t,product:n})).data):i.rejectWithValue("No token")}catch(r){return i.rejectWithValue(r.message)}}),hD={food:{breakfast:[],lunch:[],dinner:[],snack:[]},totalCalories:0,isLoading:!1,error:null,firstLoad:!1},dh=(e,t)=>{e.isLoading=!1,e.error=t.payload},fh=e=>{e.isLoading=!0},pD=(e,t)=>{e.isLoading=!1,e.error=null,e.firstLoad=!0;const n=t.payload.data.userProducts.breakfast,i=t.payload.data.userProducts.dinner,r=t.payload.data.userProducts.snack,o=t.payload.data.userProducts.lunch;e.food={breakfast:n,dinner:i,snack:r,lunch:o},e.totalCalories=t.payload.data.userProducts.totalCalories},mD=(e,t)=>{e.isLoading=!1,e.error=null;const n=t.payload.data.type;e.food[n]=[...t.payload.data.product],e.totalCalories=t.payload.data.totalCalories},gD=(e,t)=>{e.isLoading=!1,e.error=null;const n=t.payload.data.type,i=e.food[n].findIndex(r=>r.ident===t.payload.data.product.ident);e.food[n][i]=t.payload.data.product,e.totalCalories=t.payload.data.totalCalories},xD=gs({name:"foodIntake",initialState:hD,reducers:{clearDiary(e){return e}},extraReducers:e=>{e.addCase($c.fulfilled,pD).addCase($c.pending,fh).addCase($c.rejected,dh).addCase(Gc.fulfilled,mD).addCase(Gc.pending,fh).addCase(Gc.rejected,dh).addCase(uh.fulfilled,gD).addCase(uh.pending,fh).addCase(uh.rejected,dh)}}),{clearDiary:yD}=xD.actions,hh=ot("statistics/get",async(e,t)=>{try{const i=t.getState().auth.token;if(!i)return t.rejectWithValue("No token");setAuthHeader(i);const r=await Ve.get("/user/statistics");return console.log(r.data),r.data}catch(n){return t.rejectWithValue(n.message)}}),vD={statistics:null,isLoading:!1,error:null},bD=(e,t)=>{e.isLoading=!1,e.error=t.payload},wD=e=>{e.isLoading=!0},kD=(e,t)=>{e.isLoading=!1,e.error=null,e.statistics=t.payload.data},SD=gs({name:"statistics",initialState:vD,reducers:{clearStatistic(e){return e}},extraReducers:e=>{e.addCase(hh.fulfilled,kD).addCase(hh.pending,wD).addCase(hh.rejected,bD)}}),{clearStatistic:CD}=SD.actions,AD=w.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  font-family: Poppins;

  @media (min-width: 834px) {
    top: 100px;
  }
`,ED=w.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`,_D=w.div`
  position: absolute;
  top: -6px;
  right: 0;
  width: 158px;
  background: var(--primary-black-second-color);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 834px) {
    top: -20px;
  }
`,ph=w.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  color: var(--primary-white-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  background: transparent;
  border: none;
`,mh=w.svg`
  stroke: var(--primary-white-color);
  width: 16px;
  height: 16px;
`,TD=w.button`
  display: flex;
  justify-content: center;
  width: 100%;
  color: var(--primary-grey-color);
  font-size: 14px;
  line-height: 1.43;
  background: transparent;
  border: none;
`;function PD({onClose:e}){const[t,n]=P.useState(!1),i=ps(),r=sn();P.useEffect(()=>{const c=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[e]);const o=c=>{c.currentTarget===c.target&&e()},s=()=>{i("/settings"),e()},a=()=>{n(!0)},l=async()=>{await r(MS()),r(sD()),r(fD()),r(yD()),r(CD()),e()};return h.jsx(AD,{onClick:o,children:h.jsx(ED,{children:h.jsx(_D,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs(ph,{type:"button",onClick:l,children:[h.jsx(mh,{children:h.jsx("use",{href:Xt+"#icon-logout"})}),"Log out"]}),h.jsx(TD,{type:"button",onClick:e,children:"Cancel"})]}):h.jsxs(h.Fragment,{children:[h.jsxs(ph,{type:"button",onClick:s,children:[h.jsx(mh,{children:h.jsx("use",{href:Xt+"#icon-setting-2"})}),"Setting"]}),h.jsxs(ph,{type:"button",onClick:a,children:[h.jsx(mh,{children:h.jsx("use",{href:Xt+"#icon-logout"})}),"Log out"]})]})})})})}const jD=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 834px) {
    height: 100px;
  }
`,OD=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,MD=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,iv=w(kd)`
  padding: 8px 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.45;
  color: var(--primary-grey-color);

  @media (min-width: 834px) {
    font-size: 22px;
  }
`,RD=w.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,ND=w.span`
  padding: 22px 0;
  text-decoration: none;
  color: var(--primary-white-color);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`,DD=w.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 834px) {
    height: 100px;
  }
`,rv=w(Zn)`
  font-size: 12px;
  line-height: 1.43;
  color: var(--primary-white-color);

  &.active {
    color: var(--primary-light-green-color);
  }

  @media (min-width: 834px) {
    font-size: 14px;
  }
`,LD=w.svg`
  width: 26px;
  height: 26px;
  stroke: var(--primary-white-color);

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,FD=w.div`
  display: flex;
  align-items: center;

  @media (min-width: 834px) {
    gap: 72px;
  }

  @media (min-width: 1440px) {
    gap: 124px;
  }
`,zD=w.button`
  border: none;
  padding: 0;
  display: flex;
  background: transparent;
`,ID=w.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primary-white-color);

  @media (min-width: 834px) {
    display: none;
  }
`,BD=w.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    gap: 80px;
  }
`,WD=w.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  background: transparent;
`,UD=w.p`
  font-size: 12px;
  line-height: 1.43;
  color: var(--primary-white-color);
  margin-right: 6px;

  @media (min-width: 834px) {
    font-size: 14px;
  }
`,VD=w.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primary-white-color);
  margin-right: 4px;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,HD=w.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 4px;
  object-fit: cover;

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`,$D=()=>{var T,z;const{isLoggedIn:e}=za(),t=It(Ak),n=t==null?void 0:t.avatarURL,i=((T=t==null?void 0:t.gender)==null?void 0:T.toLowerCase())||"",r=((z=t==null?void 0:t.goal)==null?void 0:z.toLowerCase())||"",o=(t==null?void 0:t.weight)!==void 0?t.weight:"",s=(t==null?void 0:t.name)||"",[a,l]=P.useState(!1),[c,u]=P.useState(!1),[d,f]=P.useState(!1),[p,g]=P.useState(!1),[m,v]=P.useState(null);P.useEffect(()=>{const U=a||c||d||p?"hidden":"";return document.body.style.overflow=U,()=>{document.body.style.overflow=""}},[a,c,d,p]);const x=()=>{l(!a),g(!1)},y=()=>{l(!1)},b=()=>{u(!c),l(!1),f(!1),g(!1)},k=()=>{u(!1)},S=()=>{v(Q_()),f(!d),l(!1),u(!1),g(!1)},E=()=>{f(!1)},C=()=>{g(!p),f(!1),l(!1),u(!1)},j=()=>{g(!1)};return h.jsxs(h.Fragment,{children:[!e&&h.jsx("div",{className:"container",children:h.jsxs(DD,{children:[h.jsx(iv,{to:"/",children:"HealthyHub"}),h.jsxs(RD,{children:[h.jsx(rv,{exact:"true",to:"/signin",children:"Sign in"}),h.jsx(ND,{children:"/"}),h.jsx(rv,{exact:"true",to:"/signup",children:"Sign up"}),h.jsx(LD,{children:h.jsx("use",{href:Xt+"#icon-profile-circle"})})]})]})}),e&&h.jsx(jD,{children:h.jsxs(OD,{className:"container",children:[h.jsxs(MD,{children:[h.jsx(iv,{to:"/",children:"HealthyHub"}),h.jsx(zD,{type:"button",onClick:x,children:h.jsx(ID,{children:h.jsx("use",{href:Xt+"#icon-menu"})})})]}),h.jsxs(FD,{children:[h.jsxs(BD,{children:[h.jsx(Lu,{gender:i,goal:r,buttonType:"goal",onClick:b}),h.jsx(Lu,{buttonType:"weight",weight:o,onClick:S})]}),h.jsxs(WD,{type:"button",onClick:C,children:[h.jsx(UD,{children:s}),n?h.jsx(HD,{src:n,alt:"user avatar"}):h.jsx(VD,{children:h.jsx("use",{href:Xt+"#icon-profile-circle"})}),p?h.jsx("svg",{width:"14",height:"14",stroke:"rgba(227, 255, 168, 1)",style:{transform:"rotate(180deg)"},children:h.jsx("use",{href:Xt+"#icon-arrow-down"})}):h.jsx("svg",{width:"14",height:"14",stroke:"rgba(227, 255, 168, 1)",children:h.jsx("use",{href:Xt+"#icon-arrow-down"})})]})]})]})}),p&&h.jsx(PD,{onClose:j}),a&&h.jsx(sT,{onClose:y,gender:i,goal:r,weight:o,openTarget:b,openWeight:S}),c&&h.jsx(Fj,{gender:i,onClose:k,target:r}),d&&h.jsx(eD,{onClose:E,date:m})]})},GD=w.div`
  display: block;
`;function YD(){return h.jsxs(GD,{children:[h.jsx($D,{}),h.jsx(h_,{})]})}const XD=w.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 24px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    align-items: center;
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 66px 150px;
    margin: auto;
  }
`,KD=w.img`
  width: 300px;
  height: 302px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 382px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 594px;
  }
`,QD=w.div`
  @media screen and (min-width: 1440px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
  }
`,ZD=w.h2`
  width: 280px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin: 24px auto 16px auto;

  @media screen and (min-width: 834px) {
    width: 264px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`,JD=w.p`
  width: 280px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`,qD=w.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 234px;
  }
`,eL=w.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 458px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
`,ov=w.label`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    display: flex;
    flex-direction: column;
    color: var(--primary-white-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 0;
  }
`,sv=w.input`
  margin-top: 12px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  color: #fff;
  outline: transparent;
  background: var(--primary-black-second-color);
  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -moz-appearance: textfield;
    }
  }

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,tL=w.button`
  width: 280px;
  padding: 8px 10px;
  border-radius: 12px;
  /* background: var(--primary-light-green-color); */
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,nL=w.button`
  width: 280px;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,iL="/healthyhub-project/assets/parameters-fc62a76e.png",rL=({formik:e,next:t,prev:n})=>{const i=async()=>{const r=await e.validateForm();Object.keys(r).length===0&&t()};return h.jsxs(XD,{children:[h.jsx("div",{children:h.jsx(KD,{src:iL,alt:"Body parameters"})}),h.jsxs(QD,{children:[h.jsx(ZD,{children:"Body parameters"}),h.jsx(JD,{children:"Enter your parameters for correct performance tracking"}),h.jsxs(qD,{autoComplete:"off",children:[h.jsxs(eL,{children:[h.jsxs(ov,{children:["Height",h.jsx(sv,{type:"number",name:"height",value:e.values.height,onChange:e.handleChange,placeholder:"Enter your height",style:{border:e.values.height===""&&!e.touched.height?"1px solid #e3ffa8":"1px solid #3CBC81"}})]}),h.jsxs(ov,{children:["Weight",h.jsx(sv,{type:"number",name:"weight",value:e.values.weight,onChange:e.handleChange,placeholder:"Enter your weight",style:{border:e.values.weight===""&&!e.touched.weight?"1px solid #e3ffa8":"1px solid #3CBC81"}})]})]}),h.jsx(tL,{style:{backgroundColor:!e.isValid||!e.dirty||!e.touched?"lightgray":"#e3ffa8"},type:"button",onClick:i,disabled:!e.isValid||!e.values.height||!e.values.weight||!e.dirty,children:"Next"}),h.jsx(nL,{type:"button",onClick:n,children:"Back"})]})]})]})},oL="/healthyhub-project/assets/gender-f9ffadbd.png",sL=w.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 24px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    align-items: center;
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 90px 150px;
    margin: auto;
  }
`,aL=w.img`
  width: 300px;
  height: 288px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 366px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 570px;
  }
`,lL=w.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
    width: 444px;
  }
`,cL=w.h2`
  width: 280px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin: 0 0 16px 0;
  }
`,uL=w.p`
  width: 280px;
  color: var(--Color-Primary-Grey, #b6b6b6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 400px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
    margin-left: 0;
    margin-right: 0;
  }
`,dL=w.form`
  @media screen and (min-width: 834px) {
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 234px;
    margin: 0;
  }
`,fL=w.p`
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 12px;
  }
`,hL=w.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,av=w.label`
  width: 120px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,lv=w.input`
  margin-right: 8px;
  color: #e3ffa8;
`,pL=w.label`
  width: 234px;
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,mL=w.input`
  background: var(--Color-Primary-Black-2, #0f0f0f);
  width: 280px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Color-Primary-Green-Lite, #e3ffa8);
  color: #fff;
  outline: transparent;
  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -moz-appearance: textfield;
    }
  }

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    margin-top: 12px;
  }
`,gL=w.button`
  width: 280px;
  padding: 8px 10px;
  gap: 10px;
  border-radius: 12px;
  background: var(--Color-Primary-Green-Lite, #e3ffa8);
  color: var(--Color-Primary-Black-2, #0f0f0f);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,xL=w.button`
  width: 280px;
  background-color: transparent;
  border: none;
  color: var(--Color-Primary-Grey, #b6b6b6);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`,yL=({formik:e,next:t,prev:n})=>{const i=async()=>{const r=await e.validateForm();Object.keys(r).length===0&&t()};return h.jsxs(sL,{children:[h.jsx("div",{children:h.jsx(aL,{src:oL,alt:"Select gender, Age"})}),h.jsxs(lL,{children:[h.jsx(cL,{children:"Select gender, Age"}),h.jsx(uL,{children:"Choose a goal so that we can help you effectively"}),h.jsxs(dL,{autoComplete:"off",children:[h.jsx(fL,{children:"Gender"}),h.jsxs(hL,{children:[h.jsxs(av,{children:[h.jsx(lv,{type:"radio",name:"gender",value:"Male",onChange:e.handleChange,checked:e.values.gender==="Male"}),"Male"]}),h.jsxs(av,{children:[h.jsx(lv,{type:"radio",name:"gender",value:"Female",onChange:e.handleChange,checked:e.values.gender==="Female"}),"Female"]})]}),h.jsxs(pL,{children:["Your age",h.jsx(mL,{type:"number",name:"age",placeholder:"Enter your age",value:e.values.age,onChange:e.handleChange,style:{border:e.values.age===""&&!e.touched.age?"1px solid #e3ffa8":"1px solid #3CBC81"}})]}),h.jsx(gL,{style:{backgroundColor:!e.isValid||!e.dirty||!e.touched||!e.values.gender?"lightgray":"#e3ffa8"},type:"button",disabled:!e.isValid||!e.values.gender,onClick:i,children:"Next"}),h.jsx(xL,{type:"button",onClick:n,children:"Back"})]})]})]})},vL="/healthyhub-project/assets/activity-187d6960.png",bL=w.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px 24px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    align-items: center;

    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    width: 1440px;
    padding: 40px 150px 62px 150px;
    margin: auto;
  }
`,wL=w.img`
  width: 300px;
  height: 304px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 384px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 598px;
  }
`,kL=w.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
    margin-top: 80px;
    margin-left: 104px;
  }
`,SL=w.h2`
  /* width: 280px; */
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`,CL=w.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`,AL=w.form`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`,EL=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`,Ms=w.label`
  width: 280px;
  display: flex;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 438px;
  }

  @media screen and (min-width: 1440px) {
    width: 308px;
    color: var(--primary-white-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,Rs=w.input`
  margin-right: 8px;
`,_L=w.button`
  width: 280px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 360px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
  }
`,TL=w.button`
  width: 280px;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    display: flex;
    justify-content: center;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;
    margin-left: 0;
    margin-right: 0;
  }
`,PL=({formik:e,prev:t})=>{const n=i=>{i.preventDefault(),e.handleSubmit(),e.setValues({...e.values,activity:Number(e.values.activity)})};return h.jsxs(bL,{children:[h.jsx("div",{children:h.jsx(wL,{src:vL,alt:"Your Activity"})}),h.jsxs(kL,{children:[h.jsx(SL,{children:"Your Activity"}),h.jsx(CL,{children:"To correctly calculate calorie and water intake"}),h.jsxs(AL,{onSubmit:n,children:[h.jsxs(EL,{children:[h.jsxs(Ms,{children:[h.jsx(Rs,{type:"radio",name:"activity",value:"1.2",onChange:e.handleChange}),"1.2 - if you do not have physical activity and sedentary work"]}),h.jsxs(Ms,{children:[h.jsx(Rs,{type:"radio",name:"activity",value:"1.375",onChange:e.handleChange}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),h.jsxs(Ms,{children:[h.jsx(Rs,{type:"radio",name:"activity",value:"1.55",onChange:e.handleChange}),"1.55 - if you play sports with average loads 3-5 times a week"]}),h.jsxs(Ms,{children:[h.jsx(Rs,{type:"radio",name:"activity",value:"1.725",onChange:e.handleChange}),"1.725 - if you train fully 6-7 times a week"]}),h.jsxs(Ms,{children:[h.jsx(Rs,{type:"radio",name:"activity",value:"1.9",onChange:e.handleChange}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]}),e.errors.activity&&h.jsx("div",{children:e.errors.activity})]}),h.jsx(_L,{style:{backgroundColor:!e.isValid||!e.dirty||!e.touched||!e.values.activity?"lightgray":"#e3ffa8"},type:"submit",disabled:!e.isValid||!e.values.activity,children:"Sing up"}),h.jsx(TL,{type:"button",onClick:t,children:"Back"})]})]})]})},jL="/healthyhub-project/assets/goals-5664b3fd.png",OL=w.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  padding: 24px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 86px 150px;
    margin: auto;
    flex-direction: row;
  }
`,ML=w.img`
  width: 300px;
  height: 290px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 386px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 574px;
    margin: 0;
  }
`,RL=w.div`
  @media screen and (min-width: 834px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
    width: 50%;
  }
`,NL=w.h2`
  width: 300px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 16px;
  }
`,DL=w.p`
  width: 240px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    font-size: 22px;
    line-height: 32px;
    width: 420px;
  }
`,LL=w.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    width: 234px;
  }
`,FL=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 834px) {
    width: 360px;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
  }
`,gh=w.label`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`,xh=w.input`
  margin-right: 8px;
`,zL=w.button`
  width: 280px;
  margin-top: 24px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);

  @media screen and (min-width: 834px) {
    width: 360px;
    margin: 24px auto 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px 10px;
    width: 212px;
    margin-top: 24px;
    border-radius: 12px;
    background: var(--primary-light-green-color);
  }
`,IL=w.button`
  width: 280px;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 20px;

  @media screen and (min-width: 834px) {
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,BL=({formik:e,next:t,prev:n})=>{const i=async()=>{const r=await e.validateForm();Object.keys(r).length===0&&t()};return h.jsxs(OL,{children:[h.jsx("div",{children:h.jsx(ML,{src:jL,alt:"Your goal"})}),h.jsxs(RL,{children:[h.jsx(NL,{children:"Your goal"}),h.jsx(DL,{children:"Choose a goal so that we can help you effectively"}),h.jsxs(LL,{onSubmit:e.handleSubmit,children:[h.jsxs(FL,{children:[h.jsxs(gh,{children:[h.jsx(xh,{type:"radio",name:"goal",value:"Lose Fat",onChange:e.handleChange,checked:e.values.goal==="Lose Fat"}),"Lose Fat"]}),h.jsxs(gh,{children:[h.jsx(xh,{type:"radio",name:"goal",value:"Maintain",onChange:e.handleChange,checked:e.values.goal==="Maintain"}),"Maintain"]}),h.jsxs(gh,{children:[h.jsx(xh,{type:"radio",name:"goal",value:"Gain Muscle",onChange:e.handleChange,checked:e.values.goal==="Gain Muscle"}),"Gain Muscle"]})]}),h.jsx(zL,{style:{backgroundColor:!e.isValid||!e.dirty||!e.touched||!e.values.goal?"lightgray":"#e3ffa8"},type:"button",onClick:i,disabled:!e.isValid||!e.values.goal,children:"Next"}),h.jsx(IL,{type:"button",onClick:n,children:"Back"})]})]})]})},WL=w.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 72px 150px;
  }
`,UL=w.img`
  width: 300px;
  height: 296px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 12px;
  }
`,VL=w.div`
  @media screen and (min-width: 834px) {
    width: 444px;

    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`,HL=w.h2`
  width: 300px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 0;
    text-align: start;
  }
`,$L=w.p`
  width: 270px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 444px;
    color: var(--primary-grey-color);
    text-align: center;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    color: #b6b6b6;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: start;
    margin-top: 0;
  }
`,GL=w.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    width: 360px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin: 0;
    margin-bottom: 80px;
  }
`,yh=w.label`
  position: relative;
  width: 280px;
  display: inline-flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);

  @media screen and (min-width: 834px) {
    width: 360px;
    display: inline-flex;
    padding: 8px 10px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    border: 1px solid var(--primary-light-green-color);
    background: var(--primary-black-second-color);
  }

  @media screen and (min-width: 1440px) {
    /* position: relative; */
    width: 212px;
    height: 36px;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background-color: var(--primary-black-second-color);
  }
`,vh=w.input`
  background-color: transparent;
  border: transparent;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-white-color);
  outline: none;
  width: 230px;

  @media screen and (min-width: 834px) {
    width: 310px;
  }

  @media screen and (min-width: 1440px) {
    border: none;
    border-radius: 12px;
    border: transparent;
    color: var(--primary-white-color);
    outline: none;
    width: 170px;
  }
`,cv=w.img`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Vl=w.img`
  position: absolute;
  top: 30%;
  right: 5%;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,YL=w.button`
  width: 280px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 834px) {
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    padding: 8px 10px;
    gap: 10px;
    border-radius: 12px;
    background-color: var(--primary-light-green-color);
    color: var(--primary-black-second-color);
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`,XL=w.p`
  /* width: 238px; */
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 834px) {
    /* width: 215px; */
  }

  @media screen and (min-width: 1440px) {
    color: var(--primary-grey-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,KL=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    /* align-items: center; */
    justify-content: flex-start;
  }
`,QL=w(Zn)`
  width: 122px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
  color: var(--primary-white-color);
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,Ns=w.div`
  color: red;
  margin-top: 5px;
  text-align: center;
`,nf="/healthyhub-project/assets/one-41349066.png",Yu="/healthyhub-project/assets/error-00496ea4.svg",Xu="/healthyhub-project/assets/correct-c76805e9.svg",P4="/healthyhub-project/assets/eye-1e855825.svg",j4="/healthyhub-project/assets/eye-off-89186890.svg",ZL=()=>{const[e,t]=P.useState(1),[n,i]=P.useState(!1),[r,o]=P.useState(!0),s=sn(),a=ps(),l=()=>{i(!n),o(!1)},c=[Vn().shape({username:_n().min(2,"Too short").required("Name is required"),email:_n().email("Invalid email").required("Email is required"),password:_n().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,"Enter a valid Password (min 6 characters, 1 upper case, 1 lower case, 1 number)").required("Password is required")}),Vn().shape({goal:_n().required("Please select your goal")}),Vn().shape({gender:_n().required("Please select your gender"),age:$n().required("Required")}),Vn().shape({height:$n().required("Required"),weight:$n().required("Required")}),Vn().shape({activity:$n().required("Please select your activity")})],u=pl({initialValues:{username:"",email:"",password:"",goal:"",gender:"",age:"",height:"",weight:"",activity:""},validationSchema:c[e-1],onSubmit:p=>{console.log(p),s(jS({username:p.username,email:p.email,password:p.password,goal:p.goal,gender:p.gender,age:p.age,height:p.height,weight:p.weight,activity:p.activity}),a("/signin"))}}),d=()=>{t(e+1)},f=()=>{t(e-1)};return h.jsxs(h.Fragment,{children:[e===1&&h.jsxs(WL,{children:[h.jsx("div",{children:h.jsx(UL,{src:nf,alt:"Sport and fitness tracker"})}),h.jsxs(VL,{children:[h.jsx(HL,{children:"Sign up"}),h.jsx($L,{children:"You need to register to use the service"}),h.jsxs(GL,{autoComplete:"off",onSubmit:u.handleSubmit,children:[h.jsxs("div",{children:[h.jsxs(yh,{style:{border:u.values.username===""&&!u.touched.username?"1px solid #e3ffa8":u.errors.username?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(vh,{id:"username",name:"username",type:"text",placeholder:"Name",onChange:u.handleChange,value:u.values.username,onBlur:u.handleBlur}),u.values.username===""?null:u.errors.username?h.jsx(Vl,{src:Yu,alt:"Error icon"}):h.jsx(Vl,{src:Xu,alt:"Correct icon"})]}),u.errors.username&&u.touched.username&&h.jsx(Ns,{children:u.errors.username})]}),h.jsxs("div",{children:[h.jsxs(yh,{style:{border:u.values.email===""&&!u.touched.email?"1px solid #e3ffa8":u.errors.email?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(vh,{id:"email",name:"email",type:"email",placeholder:"E-mail",onChange:u.handleChange,value:u.values.email,onBlur:u.handleBlur}),u.values.email===""?null:u.errors.email?h.jsx(Vl,{src:Yu,alt:"Error icon"}):h.jsx(Vl,{src:Xu,alt:"Correct icon"})]}),u.errors.email&&u.touched.email&&h.jsx(Ns,{children:u.errors.email})]}),h.jsxs("div",{children:[h.jsxs(yh,{style:{border:u.values.password===""&&!u.touched.password?"1px solid #e3ffa8":u.errors.password?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(vh,{id:"password",name:"password",title:"Min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",type:n?"text":"password",placeholder:"Password",onChange:u.handleChange,value:u.values.password,onBlur:u.handleBlur}),u.values.password!==""&&h.jsx(h.Fragment,{children:n?h.jsx(cv,{className:"icon",src:P4,alt:"",onClick:l}):h.jsx(cv,{className:"icon",src:j4,alt:"",onClick:l})})]}),u.errors.password&&u.touched.password&&u.values.password===""?h.jsx(Ns,{children:u.errors.password}):u.values.password!==""&&u.errors.password?h.jsx(Ns,{children:u.errors.password}):u.values.password!==""&&!u.errors.password?h.jsx(Ns,{style:{color:"#3CBC81"},children:"Correct"}):null]}),h.jsx(YL,{style:{backgroundColor:!u.isValid||!u.dirty||!u.touched?"lightgray":"#e3ffa8"},type:"button",disabled:!u.isValid||!u.dirty||!u.touched,onClick:d,children:"Next"})]}),h.jsxs(KL,{children:[h.jsx(XL,{children:"Do you already have an account?"}),h.jsx(QL,{to:"/signin",children:"Sing in"})]})]})]}),e===2&&h.jsx(BL,{formik:u,next:d,prev:f}),e===3&&h.jsx(yL,{formik:u,next:d,prev:f}),e===4&&h.jsx(rL,{formik:u,next:d,prev:f}),e===5&&h.jsx(PL,{formik:u,prev:f})]})},JL=()=>h.jsx(ZL,{}),qL=w.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 60px 150px;
  }
`,eF=w.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 592px;
    height: 588px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-bottom: 12px;
  }
`,tF=w.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`,nF=w.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 102px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 16px;
  }
`,iF=w.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    /* text-align: center; */
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    text-align: start;
    margin-top: 0;
    margin-bottom: 24px;
  }
`,rF=w.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;

  @media screen and (min-width: 834px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`,uv=w.label`
  position: relative;
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    height: 36px;
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`,dv=w.input`
  width: 255px;
  background-color: transparent;
  border: none;
  border-radius: 12px;
  border: transparent;
  color: var(--primary-white-color);
  outline: none;

  @media screen and (min-width: 834px) {
    width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 170px;
  }
`,oF=w.button`
  margin-top: 40px;
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 14px;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    width: 380px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    margin-top: 20px;
    box-shadow: 0px 0px 5px var(--primary-light-green-color);
    margin-left: 0;
    margin-right: 0;
  }
`,sF=w.div`
  margin-bottom: 54px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    /* margin-top: 20px; */
    text-align: center;
  }
`,aF=w(Zn)`
  display: flex;
  justify-content: center;
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
    text-decoration: none;
  }
`,lF=w.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 150px;
    /* justify-content: center; */
    align-items: baseline;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 147px;
    justify-content: flex-start;
    align-items: baseline;
    gap: 16px;
  }
`,cF=w.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,uF=w(Zn)`
  text-decoration: none;
  width: 54px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 122px;
  }

  @media screen and (min-width: 1440px) {
  }
`,fv=w.img`
  position: absolute;
  top: 30%;
  right: 5%;
  display: inline-block;
  width: 16px;
  height: 16px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,Hl=w.div`
  color: red;
  /* margin-top: 15px; */
  text-align: center;
`,hv=w.img`
  position: absolute;
  top: 30%;
  right: 5%;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,dF=()=>{const[e,t]=P.useState(!1),[n,i]=P.useState(!0),r=()=>{t(!e),i(!1)},o=sn(),s=pl({initialValues:{email:"",password:""},validationSchema:Vn().shape({email:_n().email("Invalid email").required("Email is required"),password:_n().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:a=>{console.log(a),o(OS({email:a.email,password:a.password}))}});return h.jsx(h.Fragment,{children:h.jsxs(qL,{children:[h.jsx("div",{children:h.jsx(eF,{src:nf,alt:"Sport and fitness tracker"})}),h.jsxs(tF,{children:[h.jsx(nF,{children:"Sign in"}),h.jsx(iF,{children:"You need to login to use the service"}),h.jsxs(rF,{onSubmit:s.handleSubmit,autoComplete:"off",children:[h.jsxs(uv,{style:{border:s.values.email===""&&!s.touched.email?"1px solid #e3ffa8":s.errors.email?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(dv,{id:"email",type:"email",name:"email",placeholder:"E-mail",onChange:s.handleChange,value:s.values.email,onBlur:s.handleBlur}),s.values.email===""?null:s.errors.email?h.jsx(hv,{src:Yu,alt:"Error icon"}):h.jsx(hv,{src:Xu,alt:"Correct icon"})]}),s.errors.email&&s.touched.email&&h.jsx(Hl,{children:s.errors.email}),h.jsxs(uv,{style:{border:s.values.password===""&&!s.touched.password?"1px solid #e3ffa8":s.errors.password?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(dv,{id:"password",name:"password",title:"Min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit",type:e?"text":"password",placeholder:"Password",onChange:s.handleChange,value:s.values.password,onBlur:s.handleBlur}),s.values.password!==""&&h.jsx(h.Fragment,{children:e?h.jsx(fv,{className:"icon",src:P4,alt:"",onClick:r}):h.jsx(fv,{className:"icon",src:j4,alt:"",onClick:r})})]}),s.errors.password&&s.touched.password&&s.values.password===""?h.jsx(Hl,{children:s.errors.password}):s.values.password!==""&&s.errors.password?h.jsx(Hl,{children:s.errors.password}):s.values.password!==""&&!s.errors.password?h.jsx(Hl,{style:{color:"#3CBC81"},children:"Correct"}):null,h.jsx(oF,{style:{backgroundColor:!s.isValid||!s.dirty||!s.touched?"lightgray":"#e3ffa8"},type:"submit",disabled:!s.isValid||!s.dirty||!s.touched,children:"Sing in"})]}),h.jsx(sF,{children:h.jsx(aF,{to:"/forgot-password",children:"Forgot your password?"})}),h.jsxs(lF,{children:[h.jsx(cF,{children:"If you don't have an account yet"}),h.jsx(uF,{to:"/signup",children:"Sing up"})]})]})]})})},fF=()=>h.jsx(dF,{}),hF=w.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 60px 150px;
    margin: auto;
  }
`,pF=w.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 598px;
    height: 588px;
    margin-bottom: 12px;
  }
`,mF=w.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 80px;
    margin-left: 104px;
  }
`,gF=w.h2`
  width: 300px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 329px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`,xF=w.p`
  /* width: 300px; */
  width: 290px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 444px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,yF=w.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    width: 192px;
    gap: 40px;
  }
`,vF=w.label`
  display: flex;
  position: relative;
  width: 300px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);
  padding: 8px 10px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    height: 36px;
    margin: 0;
  }
`,bF=w.input`
  width: 255px;
  border: transparent;
  color: var(--primary-white-color);
  outline: none;
  background-color: transparent;
  border: none;
  border-radius: 12px;

  @media screen and (min-width: 834px) {
    width: 330px;
  }

  @media screen and (min-width: 1440px) {
    width: 170px;
  }
`,wF=w.button`
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 380px;
    /* margin: 0; */
  }

  @media screen and (min-width: 1440px) {
    width: 212px;
    font-style: normal;
    box-shadow: 0px 0px 5px #e3ffa8;
  }
`,kF=w.div`
  margin-top: 56px;

  @media screen and (min-width: 834px) {
    display: flex;
    margin-top: 150px;
    justify-content: center;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-top: 220px;
    justify-content: flex-start;
    align-items: baseline;
  }
`,SF=w.p`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,CF=w(Zn)`
  text-decoration: none;
  width: 122px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,AF=w.div`
  color: red;
  margin-top: 15px;
  text-align: center;
`,pv=w.img`
  position: absolute;
  top: 30%;
  right: 5%;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,EF=()=>{const e=sn(),t=ps(),n=pl({initialValues:{email:""},validationSchema:Vn().shape({email:_n().email("Invalid email").required("Email is required")}),onSubmit:i=>{console.log(i),Uu.Notify.success("The password has been successfully sent to your email!"),e(Ej({email:i.email}),t("/signin"))}});return h.jsxs(hF,{children:[h.jsx("div",{children:h.jsx(pF,{src:nf,alt:"Sport and fitness tracker"})}),h.jsxs(mF,{children:[h.jsx(gF,{children:"Forgot your password"}),h.jsx(xF,{children:"We will send you an email with recovery instructions"}),h.jsxs(yF,{onSubmit:n.handleSubmit,autoComplete:"off",children:[h.jsxs("div",{children:[h.jsxs(vF,{style:{border:n.values.email===""&&!n.touched.email?"1px solid #e3ffa8":n.errors.email?"1px solid red":"1px solid #3CBC81"},children:[h.jsx(bF,{id:"email",type:"email",name:"email",placeholder:"E-mail",onChange:n.handleChange,value:n.values.email,onBlur:n.handleBlur}),n.values.email===""?null:n.errors.email?h.jsx(pv,{src:Yu,alt:"Error icon"}):h.jsx(pv,{src:Xu,alt:"Correct icon"})]}),n.errors.email&&n.touched.email&&h.jsx(AF,{children:n.errors.email})]}),h.jsx(wF,{type:"submit",children:"Send"})]}),h.jsxs(kF,{children:[h.jsx(SF,{children:"Do you already have an account?"}),h.jsx(CF,{to:"/signin",children:"Sing in"})]})]})]})},_F=()=>h.jsx(EF,{}),TF="/healthyhub-project/assets/ketogenicDiet-df45efc2.png",PF=w.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`,jF=w.li`
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 12px;
  background: var(var(--primary-black-second-color));
  list-style: none;
  width: 300px;
  height: 86px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 86px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 86px;
  }
`,OF=w.h2`
  color: var(--primary-white-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`,MF=w.p`
  color: var(--primary-grey-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;

  > span {
    color: var(--primary-white-color);
  }
`,O4=({recommendedImage:e})=>h.jsx(PF,{children:e.slice(0,10).map(t=>h.jsxs(jF,{children:[h.jsx("img",{width:"46px",height:"46px",src:t.img,alt:t.name}),h.jsxs("div",{children:[h.jsx(OF,{children:t.name}),h.jsxs(MF,{children:[h.jsx("span",{children:"100 g "}),t.calories," calories"]})]})]},t._id))}),RF=w.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    text-align: center;
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
  }
`,NF=w.img`
  width: 300px;
  height: 312px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`,DF=w.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 44px;
    align-items: start;
    margin-left: 116px;
  }
`;Ve.defaults.baseURL="https://healthy-hub-2d3x.onrender.com/api";const M4=async e=>{try{return(await Ve.get("/recommended-food",{params:{count:e}})).data}catch(t){throw console.error(t),t}},LF=()=>{const[e,t]=P.useState([]),n=It(i=>i.auth.token);return P.useEffect(()=>{M4(10).then(i=>{t(i)}).catch(i=>console.error(i))},[n]),h.jsxs("div",{className:"container",children:[h.jsx(RF,{children:"Recommended food"}),h.jsxs(DF,{children:[h.jsx(NF,{src:TF,alt:"ketogenic-diet"}),h.jsx(O4,{recommendedImage:e})]})]})},FF=w.div`
  width: 320px;
  padding: 24px 10px 40px 10px;
  margin: auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 40px 195px 286px 195px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 40px 150px 72px 150px;
  }
`,zF=w.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 588px;
  }
`,IF=w.div`
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 80px;
    margin-left: 104px;
    width: 50%;
  }
`,BF=w.h1`
  width: 300px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  text-align: start;
  margin-top: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    width: 424px;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`,WF=w.p`
  width: 300px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  text-align: start;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    width: 320px;
    text-align: center;
    font-size: 22px;
    line-height: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1440px) {
    text-align: start;
    margin-left: 0;
    margin-right: 0;
  }
`,UF=w.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 834px) {
    width: 444px;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    justify-content: flex-start;
  }
`,VF=w(Zn)`
  width: 122px;
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  text-decoration: none;
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    width: 192px;
  }

  @media screen and (min-width: 1440px) {
  }
`,HF=w(Zn)`
  width: 122px;
  color: var(--primary-white-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,$F=w.ul`
  padding: 0;
  margin: 0;
  width: 234px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;

  li:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-self: center;
    background-color: var(--primary-light-green-color);
  }

  @media screen and (min-width: 834px) {
    width: 444px;
    height: 56px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 234px;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0;
  }
`,$l=w.li`
  margin: 0;
  display: flex;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,GF=()=>h.jsxs(FF,{children:[h.jsx(zF,{src:nf,alt:"Sport and fitness tracker"}),h.jsxs(IF,{children:[h.jsx(BF,{children:"Set goals and achieve them"}),h.jsx(WF,{children:"The service will help you set goals and follow them."}),h.jsxs(UF,{children:[h.jsx(VF,{to:"/signin",children:"Sing in"}),h.jsx(HF,{to:"/signup",children:"Sing up"})]}),h.jsxs($F,{children:[h.jsx($l,{children:"Set goals"}),h.jsx($l,{children:"Watch your calories"}),h.jsx($l,{children:"Keep track of your water intake"}),h.jsx($l,{children:"Control your weight"})]})]})]}),YF=()=>h.jsx(GF,{}),Ds=({component:e,redirectTo:t="/"})=>{const{isLoggedIn:n,isRefreshing:i}=za();return!n&&!i?h.jsx(Hg,{to:t}):e},XF=w.div`
  width: 320px;
  padding: 16px 10px 40px;
  margin: auto;

  @media (min-width: 834px) {
    width: 834px;
    padding: 24px 174px 174px 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    padding: 20px 103px 72px 34px;
  }
`,KF=w.div`
  @media (min-width: 1440px) {
    width: 536px;
  }
`,QF=w.img`
  width: 300px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 376px;
    margin: 0 auto 24px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    margin-bottom: 0;
  }
`,ZF=w.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    margin-bottom: 20;
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 36px;
  }
`,JF=w.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 834px) {
    width: 491px;
    margin: auto;
    flex-wrap: wrap;
    color: var(--primary-white-color);
  }

  @media (min-width: 1440px) {
    margin-top: 52px;
    margin-left: 160px;
  }
`,qF=w.div`
  display: flex;
  margin-bottom: 40px;
  gap: 12px;
  align-items: center;

  @media (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`,ez=w.div`
  display: flex;
  gap: 6px;

  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 8px 0;
  }
`,tz=w.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`,nz=w.p`
  margin: 0 0 12px 0;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,iz=w.img`
  @media (min-width: 1440px) {
    margin-right: 12px;
  }
`,Gl=w.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 40px;

  @media (min-width: 834px) {
    width: 192px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 40px;
  }
`,Yl=w.input`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-grey-color);
  background: var(--primary-black-second-color);
  color: var(--primary-white-color);
  outline: none;
  margin-top: 12px;
`,rz=w.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`,Ls=w.label`
  color: var(--primary-white-color);
`,oz=w.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`,sz=w.div`
  margin-bottom: 40px;
  display: flex;
  gap: 16px;

  @media (min-width: 834px) {
    margin-bottom: 0;
  }
`,mv=w.label`
  color: var(--primary-white-color);

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`,az=w.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 60px;
  }
`,lz=w.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  margin-bottom: 40px;

  @media (min-width: 834px) {
    width: 494px;
  }

  @media (min-width: 1440px) {
    color: var(--primary-white-color);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: 464px;
  }
`,wr=w.input`
  margin-right: 8px;
`,cz=w.div`
  @media (min-width: 834px) {
    display: flex;
    gap: 12px;
  }

  @media (min-width: 1440px) {
  }
`,uz=w.button`
  width: 300px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;

  @media (min-width: 834px) {
    width: 192px;
  }
  @media (min-width: 1440px) {
    &:hover {
    }
  }
`,dz=w.button`
  width: 300px;
  color: var(--primary-grey-color);
  text-align: center;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: transparent;
  border: none;

  @media (min-width: 834px) {
    width: 192px;
  }
`,gv=w.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,Xl=w.div`
  color: red;
  margin-top: 5px;
  text-align: center;
`,fz="/healthyhub-project/assets/settings-3992b3ba.png",hz="/healthyhub-project/assets/inbox-eac1d45e.svg",pz="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAe8SURBVHgBrdjnqlZLEgbgdrtPNOecc86CGDAioiKIoD9EBPGPVzEI3oWCFyAIBsyKCXPCnDDnnLPOecqpb7Z6zqgwDYu1vl7dVW+9lXp9tX755ZdP5SdHrVq1yqdPn+L6+PFjqaqqqrwzZ9Sc+5nxw7saNWpUfv3111K7du0KIGA85+/ffvut/P7775Xffxlb6tatG/f/G6Dq6upSp06deKaIwoYNG4Zy4BIYsM2aNSutW7eOZ2s/fPhQMebPP/+M9d8btf7JZQSyrEGDBuXNmzcx596lS5d4d/PmzfLo0aN4Bm7EiBGlRYsW5f3797Hu6tWr5e7du7EOQEa9evUq3jMgXfsNAX83yf+UYIKAd+/exVy7du0CZPfu3cvDhw+DLb+BnDp1amnevHkw+vz589gH8MqVK8uhQ4fK27dvQ96DBw8C3MuXLwPYdwFR8McffwQI1r9+/boSGwBRas4aAuvXr18mTZpUevToUerVqxduMocN8TNmzJhy/PjxAJRx5pkLX7x48Q1TVV8zQyFhaT0FYqBVq1ZhVc+ePcNy1prze8iQIeEuICkEyPvGjRuX9u3bh0yyU24akgnwjwwRihk+x8a5c+ciSNHvAoBSQjwD2qFDh9KtW7dwlTWG4GUMhW3btg3QT58+jX3JFFDJ5pMnT75lSPC6xAYr+ZpAAIEgCADxQRm6AWA9RRgwn6XBXnK4pmvXrqVJkyYBGphkxloGcfU3gAiGFAAuITSZQbWNrLl3715YCzhQApqSmtkDvD2ZnW3atAnXCeasW4b7s2fPQvYXgNQPi1mPxkx5z4RmHWHx4cOHy61btyJGgGnZsmWAB8baNELgA2befjqSIevFY7pP8COkAihpBwj1NhJOiE0stPHEiRPlypUrwSCww4cPD+CMQb8rY8dcxpVQ8GzeXQgARAemmzZtWjp27Pg5qNPPjx8/jglCM+MoFrzWXLt2rZw6dSoEUXbx4sWyZMmSMmDAgDJz5swyaNCgAGnf/fv3y759+8K15JJDOdkYA4xO7rJHvNJjrhqd2LERC9ATZBHlAk7VVUu879evX5k4cWJkjxiifM+ePWGlNBeD27ZtKytWrAjGsQ8QeXQxDih3+605c+ZM7I3Cyn986iW6LTCAQu+lS5diTnUePXp0+JvbDhw4UAYOHFg6deoUrmWQ/RRjY9asWRFrZIgzoDZv3hxgPNOXgU2X0AjXQoo2lmWQZfV0R+XIkSPL0KFD4/3atWvLuHHjypYtW8qwYcMq2QQIWZcvXw5ruWXdunXB8NmzZ0v//v1L586dIw4ZaB+wdLszlHeq82hgUmZkTXGJFaVfwYTenDYB6Jw5cypdPgtezQ6P9VGjRoXcCxculBs3bkSMZIE0gLbPHkyHy1gFsStrBGEqNNZYD0xmE0szMA1rbt++HdmUBTEzNOuWfWQcO3aswg4QWMk6p4z07t27VNucjdTFIjSz3CaLswIDTzCGsOWenT0BA8VqbrNGhca8dbKKvDzAeQ901iu6q7wQYASZsDhPeQCwEBibrXFHvfd54LImu3/WmAwDxllvHjBzMtJdDQLIc2ZoVTY5VqZvAcgeRhnAGXwZJ9kuZBy6s7ZgKXtfuj/bEJa0kHQ375CvHCiyEqMKjRZThpEM0DxKAAaQzdmjWOq3AHXHyPnz58NiJ8R8n20EeGVBMaW4pnzGKa6yc8OGDaUa6nRX0gwAYCxOBl3A55rsVzJDWnPl3r17Y05CkEuhYd/27dsjk8iVBBmLXDZ58uRgWimpZqWMwEQCMwcIQTVrBWVih4UEZEU/ePBgxAp3qOoMsh5zFJLjTISlkydPVhpsyh4/fnzUpyjG6QbI0SygCcp6kcWuT58+ARKoVatWhe+tzfN2r169IlidBgBSpYHXNM1bRyZZwABqnbMSUFwNy1/vav8LrTVdY3MewG22iWAAWOLcZC6zSlBrDxn09mfg+/LgHvNaRwaxxPGsJ5KzZs2aaOAROMmQFzXrhN9ihVDWAOTdtGnTAgirslOz2HpsOPoC6Vn7AI4RWMtMplx/dPzlxt27d3+OzzypJSMJJnsZQCqsCs19gADIMgHNLdqCo0m2EsngDKWJJlu7du0KeZ6dEAYPHhyxQ1+C+Y9HPrus5idxfi67uEZtkUF8fPr06YgDjLgEs2A9cuRIZA9Aglscrl+/PkqB2PGeHCyTOWHChMqhj+wcX3x1ZFPNPwrGjh0bZx+xIZBZkoEOHCsFMzayvuSBXeZpqsmSTm899hRGTAuDnTt31oTwX4ZqTITlrJg/f36lh+ncvkCvX78ebmRpPufZxl2Kb926NVjkWlk5ffr0SArBnI1WrC5btuyLT6C/BYRG6b9w4cLoL+lOWdS3b99y9OjRyskAk9lY3WWN+FCL7ty5E8zMmzcvkoBbgQPafenSpcHe1+MbQDnUEx+LqivWWKVzs1RRlCUUYgQIcQIoIN4J3hkzZpS5c+cGeGcqbmXQ8uXLK1X/61Hre39YOYouWrQoXEQJ66Q79xEODOtlWH53Aa4dTJkyJWRwHeYXL15c9u/f/7/UfR9QjtmzZ5cFCxZUCiJGjPyOy+OJkX9WYXDHjh1l9erVZdOmTT+i5scB5ZDSLPd/kFqUX6QZ3FzhKwR7GzduDDZ/ZvwbJUf8dD3kE38AAAAASUVORK5CYII=",mz=()=>{const e=It(Gg),t=sn();ps();const n=pl({initialValues:{username:e.username||"",gender:e.gender||"",age:e.age||"",height:e.height||"",weight:e.weight||"",activity:parseFloat(e.activity)||0},validationSchema:Vn().shape({username:_n().min(2,"Too short").required("Name is required"),gender:_n().required("Please select your gender"),age:$n().required("Required"),height:$n().min(130,"Height must be greater than or equal to 130"),weight:$n().min(40,"Weight must be greater than or equal to 40"),activity:$n().required("Please select your activity")}),onSubmit:r=>{console.log(r),t(NS({username:r.username,gender:r.gender,age:r.age,height:r.height,weight:r.weight,activity:r.activity}),Ci.Notify.success("Your data has been successfully updated!"))}}),i=()=>{n.resetForm()};return h.jsxs(XF,{children:[h.jsxs(KF,{children:[h.jsx(ZF,{children:"Profile setting"}),h.jsx(QF,{src:fz,alt:""})]}),h.jsxs(JF,{autoComplete:"off",onSubmit:n.handleSubmit,children:[h.jsxs(rz,{children:[h.jsxs(Gl,{children:["Your name",h.jsx(Yl,{id:"username",name:"username",type:"text",placeholder:"Name",onChange:n.handleChange,value:n.values.username}),n.errors.username&&h.jsx(Xl,{children:n.errors.username})]}),h.jsxs("div",{children:[h.jsx(gv,{children:"Your photo"}),h.jsxs(qF,{children:[h.jsx(iz,{src:pz,alt:"photo",width:36,height:36}),h.jsxs(ez,{children:[h.jsx("img",{src:hz,alt:"inbox",width:16,height:16}),h.jsx(tz,{children:"Download new photo"})]})]})]})]}),h.jsxs(oz,{children:[h.jsxs(Gl,{children:["Your age",h.jsx(Yl,{type:"number",name:"age",placeholder:"Enter your age",onChange:n.handleChange,value:n.values.age}),n.errors.age&&h.jsx(Xl,{children:n.errors.age})]}),h.jsxs("div",{children:[h.jsx(gv,{children:"Gender"}),h.jsxs(sz,{children:[h.jsxs(mv,{children:[h.jsx(wr,{type:"radio",name:"gender",value:"Male",onChange:n.handleChange,checked:n.values.gender==="Male"}),"Male"]}),h.jsxs(mv,{children:[h.jsx(wr,{type:"radio",name:"gender",value:"Female",onChange:n.handleChange,checked:n.values.gender==="Female"}),"Female"]})]})]})]}),h.jsxs(az,{children:[h.jsxs(Gl,{children:["Height",h.jsx(Yl,{type:"number",name:"height",value:n.values.height,onChange:n.handleChange,placeholder:"Enter your height"}),n.errors.height&&h.jsx(Xl,{children:n.errors.height})]}),h.jsxs(Gl,{children:["Weight",h.jsx(Yl,{type:"number",name:"weight",value:n.values.weight,onChange:n.handleChange,placeholder:"Enter your weight"}),n.errors.weight&&h.jsx(Xl,{children:n.errors.weight})]})]}),h.jsxs("div",{children:[h.jsx(nz,{children:"Your activity"}),h.jsxs(lz,{children:[h.jsxs(Ls,{children:[h.jsx(wr,{type:"radio",name:"activity",value:"1.2",onChange:n.handleChange,checked:n.values.activity==="1.2"}),"1.2 - if you do not have physical activity and sedentary work"]}),h.jsxs(Ls,{children:[h.jsx(wr,{type:"radio",name:"activity",value:"1.375",onChange:n.handleChange,checked:n.values.activity==="1.375"}),"1.375 - if you do short runs or light gymnastics 1-3 times a week"]}),h.jsxs(Ls,{children:[h.jsx(wr,{type:"radio",name:"activity",value:"1.55",onChange:n.handleChange,checked:n.values.activity==="1.55"}),"1.55 - if you play sports with average loads 3-5 times a week"]}),h.jsxs(Ls,{children:[h.jsx(wr,{type:"radio",name:"activity",value:"1.725",onChange:n.handleChange,checked:n.values.activity==="1.725"}),"1.725 - if you train fully 6-7 times a week"]}),h.jsxs(Ls,{children:[h.jsx(wr,{type:"radio",name:"activity",value:"1.9",onChange:n.handleChange,checked:n.values.activity==="1.9"}),"1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"]})]})]}),h.jsxs(cz,{children:[h.jsx(uz,{type:"submit",children:"Save"}),h.jsx(dz,{onClick:i,type:"button",children:"Cancel"})]})]})]})},gz=()=>h.jsx(mz,{}),xz=w.div`
  font-family: Poppins;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,yz=w.div`
  position: relative;
  width: 300px;
  height: 558px;
  padding: 16px 12px 40px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  overflow: auto;

  @media (min-width: 834px) {
    width: 676px;
    height: 408px;
    padding: 24px;
  }
`,vz=w.p`
  margin-bottom: 24px;
  color: var(--primary-white-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`,Kl=w.p`
  color: var(--primary-white-color);
  font-size: 18px;
  line-height: 1.455;

  @media (min-width: 834px) {
    font-size: 22px;
  }
`,Ql=w.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 834px) {
    font-size: 30px;
  }
`,bz=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  margin-top: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
    margin: 0;
  }
`,wz=w.input`
  padding: 8px 10px;

  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background-color: var(--primary-black-second-color);
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43;
  width: 100%;
  outline: none;

  @media (min-width: 834px) {
    margin-top: 16px;
    width: 235px;
  }
`,Zl=w.input`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background-color: var(--primary-black-second-color);
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.43;
  width: 100%;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: var(--primary-grey-color);
  }

  @media (min-width: 834px) {
    margin-top: 16px;
  }
`,kz=w.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  margin-top: 40px;

  @media (min-width: 834px) {
    position: absolute;
    flex-direction: row;
    bottom: 24px;
    right: 24px;
    gap: 12px;
    margin: 0;
  }
`,Sz=w.button`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 14px;
  line-height: 1.43;
  margin-top: 24px;
  color: var(--primary-light-green-color);
`,xv=w.button`
  width: 100%;
  color: var(--primary-black-second-color);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  height: 36px;
  border-radius: 12px;
  border: none;
  background: var(--primary-light-green-color);

  @media (min-width: 834px) {
    width: 212px;
  }
`,R4="/healthyhub-project/assets/breakfest-6e7317b8.svg",N4="/healthyhub-project/assets/lunchImg-83c0ae20.svg",D4="/healthyhub-project/assets/dinnerImg-ea7ee846.svg",L4="/healthyhub-project/assets/snackImg-1b224b49.svg",Hi=({onClose:e,type:t})=>{const n=sn(),[i,r]=P.useState({fields:[{ident:"1",name:"",carbonohidrates:"",protein:"",fat:"",calories:""}]}),o=c=>{c.preventDefault(),i.fields[i.fields.length-1].name!==""&&r({fields:[...i.fields,{ident:Date.now(),name:"",carbonohidrates:null,protein:null,fat:null,calories:null}]})};P.useEffect(()=>{const c=u=>{u.code==="Escape"&&e()};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[e]);const s=c=>{c.currentTarget===c.target&&e()},a=(c,u,d)=>{const f=i.fields.map(p=>p.ident===c?{...p,[u]:d}:p);r({fields:f})},l=c=>{c.preventDefault(),n(Gc({type:t,products:i.fields})),e()};return h.jsx(xz,{onClick:s,children:h.jsxs(yz,{children:[h.jsx(vz,{children:"Record your meal"}),t==="breakfast"&&h.jsxs(Ql,{children:[h.jsx("img",{src:R4,alt:"breakfast",width:"32",height:"32"}),h.jsx(Kl,{children:"Breakfast"})]}),t==="lunch"&&h.jsxs(Ql,{children:[h.jsx("img",{src:N4,alt:"lunch",width:"32",height:"32"}),h.jsx(Kl,{children:"Lunch"})]}),t==="dinner"&&h.jsxs(Ql,{children:[h.jsx("img",{src:D4,alt:"dinner",width:"32",height:"32"}),h.jsx(Kl,{children:"Dinner"})]}),t==="snack"&&h.jsxs(Ql,{children:[h.jsx("img",{src:L4,alt:"snack",width:"32",height:"32"}),h.jsx(Kl,{children:"Snack"})]}),h.jsxs("form",{onSubmit:l,children:[i.fields.map(c=>h.jsxs(bz,{children:[h.jsx(wz,{id:"name",type:"string",required:!0,value:c.name||"",onChange:u=>a(c.ident,"name",u.target.value),placeholder:"The name of the product or dish"}),h.jsx(Zl,{id:"carbonohidrates",type:"number",min:0,required:!0,value:c.carbonohidrates||"",onChange:u=>a(c.ident,"carbonohidrates",u.target.value),placeholder:"Carbonoh."}),h.jsx(Zl,{id:"protein",type:"number",min:0,required:!0,value:c.protein||"",onChange:u=>a(c.ident,"protein",u.target.value),placeholder:"Protein"}),h.jsx(Zl,{id:"fat",type:"number",min:0,required:!0,value:c.fat||"",onChange:u=>a(c.ident,"fat",u.target.value),placeholder:"Fat"}),h.jsx(Zl,{id:"calories",type:"number",min:0,required:!0,value:c.calories||"",onChange:u=>a(c.ident,"calories",u.target.value),placeholder:"Calories"})]},c.ident)),h.jsx(Sz,{onClick:o,children:"+ Add more"}),h.jsxs(kz,{children:[h.jsx(xv,{onClick:e,style:{background:"transparent",color:"rgba(182, 182, 182, 1)"},children:"Cancel"}),h.jsx(xv,{type:"submit",children:"Confirm"})]})]})]})})},Cz="/healthyhub-project/assets/breakfest-6e7317b8.svg",Az="/healthyhub-project/assets/lunchImg-83c0ae20.svg",Ez="/healthyhub-project/assets/dinnerImg-ea7ee846.svg",_z="/healthyhub-project/assets/snackImg-1b224b49.svg";let yv=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const Tz=w.div`
  display: block;
  width: 100%;
  height: 100%;
`,Pz=w(kd)`
  display: flex;
`,jz=w.h1`
  display: flex;
  width: auto;
  align-items: center;
  margin-left: 27px;
  margin-top: 20px;
`,Oz=w.svg`
  display: flex;
  width: 24px;
  height: 24px;
  background: #000;
`,Mz=w.span`
  display: flex;
  margin-left: 12px;
  color: #fff;
  font-family: 'Poppins';
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
`,Rz=w.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 20px;
  row-gap: 26px;

  padding-left: 27px;
  padding-right: 34px;
  padding-bottom: 52px;

  @media (min-width: 320px) and (max-width: 833px) {
    gap: 27px;
    width: 320px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    gap: 32px;
    width: 834px;
  }

  @media (min-width: 1200px) {
    row-gap: 26px;
    col-gap: 20px;
    width: 1372px;
  }
`,Nz=w.li`
  display: flex;
`,Dz=w.table`
  display: block;
  margin-top: 16px;
  background: #000;

  @media (min-width: 320px) and (max-width: 833px) {
    gap: 27px;
    width: 300px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    gap: 32px;
    width: 780px;
  }

  @media (min-width: 1200px) {
    row-gap: 26px;
    col-gap: 20px;
    width: 640px;
  }
`,Lz=w.thead`
  display: flex;
`,Fz=w.tr`
  @media (min-width: 320px) and (max-width: 833px) {
    width: 178px;
    height: 52px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    width: 780px;
    display: flex;
  }

  @media (min-width: 1200px) {
    display: flex;
    width: 640px;
  }
`,zz=w.img`
  display: flex;
  width: 32px;
  height: 32px;
  margin-right: 12px;
`,Iz=w.p`
  display: flex;
  width: auto;
`,Bz=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.45;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 129px;
    height: 32px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 344px;
    height: 32px;
  }

  @media (min-width: 1200px) {
    width: 244px;
    height: 32px;
  }
`,Wz=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 164px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 180px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 180px;
    height: 32px;
    padding-top: 10px;
  }
`,Uz=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 112px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 112px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 112px;
    height: 32px;
    padding-top: 10px;
  }
`,Vz=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 66px;
    height: 20px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 86px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 86px;
    height: 32px;
    padding-top: 10px;
  }
`,Hz=w.td`
  display: flex;
  padding-top: 10px;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 43px;
    height: 20px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 49px;
    height: 32px;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    width: 49px;
    height: 32px;
    padding-top: 10px;
  }
`,$z=w.tbody`
  display: block;
  padding-top: 16px;
  padding-bottom: 16px;

  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: #0f0f0f;
`,vv=w.tr`
  @media (min-width: 320px) and (max-width: 833px) {
    width: 295px;
    height: 52px;
    display: flex;
  }

  @media (min-width: 834px) and (max-width: 1199px) {
    width: 780px;
    display: flex;
  }

  @media (min-width: 1200px) {
    display: flex;
    width: 640px;
  }
`,bv=w.td`
  display: flex;
  width: 46px;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
`,bh=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 150px;
    height: 32px;
    padding-top: 16px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 344px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 244px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`,wv=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 164px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 180px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 180px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`,kv=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 112px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 112px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 112px;
    height: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`,Sv=w.td`
  display: flex;
  color: #fff;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 66px;
    height: 20px;
    color: #b6b6b6;
    font-family: 'Poppins';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 86px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    width: 86px;
    height: 32px;

    padding-top: 16px;
    padding-bottom: 16px;
  }
`,Gz=w.td`
  display: flex;
  color: #b6b6b6;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;

  @media (min-width: 320px) and (max-width: 833px) {
    width: 43px;
    height: 20px;
    padding-top: 16px;
    padding-right: 12px;
  }
  @media (min-width: 834px) and (max-width: 1199px) {
    width: 49px;
    height: 32px;
    padding-top: 16px;
    padding-right: 14px;
  }

  @media (min-width: 1200px) {
    width: 49px;
    height: 32px;
    padding-top: 16px;
    padding-right: 14px;
  }
`,Yz=w.svg`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: grey;
`,Xz=w.span`
  display: flex;
  color: #b6b6b6;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`,Kz=w(kd)`
  display: flex;
  width: 146px;
  color: #e3ffa8;
  font-family: 'Poppins';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
`,Cv="/healthyhub-project/assets/icons1-59310d10.svg",Qz=[Cz,Az,Ez,_z];let Zz=[1,2,3,4];const Jz=()=>{var g;const e=sn();P.useEffect(()=>{e($c)},[e]);const[t,n]=P.useState({breakfast:!1,lunch:!1,dinner:!1,snack:!1}),[i,r]=P.useState({breakfast:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},lunch:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},dinner:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},snack:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""}}),o=m=>{n({...t,[m]:!0})},s=(m,v,x)=>{r({...i,[m]:{...i[m],[v]:x}})},a=m=>{n({...t,[m]:!1})},c=((g=no().state)==null?void 0:g.from)??"/main",u={breakfast:[],lunch:[],dinner:[],snack:[]},d=Object.values(u),f=Object.keys(u);f.forEach((m,v)=>{f[v]=m.replace(m[0],m[0].toUpperCase())}),console.log(f);const p=[];return d.forEach(m=>{const v=[],x=[],y=[];if(m.length!==0)m.forEach(b=>{v.push(b.nutrition.carbohidrates),x.push(b.nutrition.protein),y.push(b.nutrition.fat);let k=v.reduce((T,z)=>T+z,0),S=x.reduce((T,z)=>T+z,0),E=y.reduce((T,z)=>T+z,0);const j={id:yv(),carbohidrates:k,protein:S,fat:E};p.push(j)});else{const k={id:yv(),carbohidrates:0,protein:0,fat:0};p.push(k)}}),h.jsxs(Tz,{children:[h.jsxs(jz,{children:[h.jsx(Pz,{to:c,children:h.jsx(Oz,{children:h.jsx("use",{href:Cv+"#icon-arrow-right"})})}),h.jsx(Mz,{children:"Diary"})]}),h.jsx(Rz,{children:f.map((m,v)=>h.jsx(Nz,{children:h.jsxs(Dz,{children:[h.jsx(Lz,{children:h.jsxs(Fz,{children:[h.jsxs(Bz,{children:[h.jsx(zz,{src:Qz[v],alt:m}),h.jsx(Iz,{children:m})]}),h.jsxs(Wz,{children:["Carbonohidrates:",p[v].carbohidrates]}),h.jsxs(Uz,{children:["Protein:",p[v].protein]}),h.jsxs(Vz,{children:["Fat:",p[v].fat]}),h.jsx(Hz,{})]})}),h.jsx($z,{children:Zz.map(x=>d[v].length!==0&&x<=d[v].length?h.jsxs(vv,{children:[h.jsx(bv,{children:x}),h.jsx(bh,{children:d[v][x-1].name}),h.jsx(wv,{children:d[v][x-1].nutrition.carbohidrates}),h.jsx(kv,{children:d[v][x-1].nutrition.protein}),h.jsx(Sv,{children:d[v][x-1].nutrition.fat}),h.jsxs(Gz,{children:[h.jsx(Yz,{children:h.jsx("use",{href:Cv+"#icon-edit-2"})}),h.jsx(Xz,{onClick:()=>o(m.toLowerCase()),children:"Edit"})]})]}):h.jsxs(vv,{children:[h.jsx(bv,{children:x}),x===d[v].length+1?h.jsx(bh,{children:h.jsx(Kz,{onClick:()=>o(m.toLowerCase()),children:"+ Record your meal"})}):h.jsx(bh,{}),h.jsx(wv,{}),h.jsx(kv,{}),h.jsx(Sv,{})]}))})]})}))}),t.breakfast&&h.jsx(Hi,{onClose:()=>n({...t,breakfast:!1}),type:"breakfast",formData:i.breakfast,onChange:(m,v)=>s("breakfast",m,v),onSubmit:()=>a("breakfast")}),t.lunch&&h.jsx(Hi,{onClose:()=>n({...t,lunch:!1}),type:"lunch",formData:i.lunch,onChange:(m,v)=>s("lunch",m,v),onSubmit:()=>a("lunch")}),t.dinner&&h.jsx(Hi,{onClose:()=>n({...t,dinner:!1}),type:"dinner",formData:i.dinner,onChange:(m,v)=>s("dinner",m,v),onSubmit:()=>a("dinner")}),t.snack&&h.jsx(Hi,{onClose:()=>n({...t,snack:!1}),type:"snack",formData:i.snack,onChange:(m,v)=>s("snack",m,v),onSubmit:()=>a("snack")})]})};/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function ml(e){return e+.5|0}const $i=(e,t,n)=>Math.max(Math.min(e,n),t);function Xs(e){return $i(ml(e*2.55),0,255)}function ar(e){return $i(ml(e*255),0,255)}function ui(e){return $i(ml(e/2.55)/100,0,1)}function Av(e){return $i(ml(e*100),0,100)}const un={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Em=[..."0123456789ABCDEF"],qz=e=>Em[e&15],eI=e=>Em[(e&240)>>4]+Em[e&15],Jl=e=>(e&240)>>4===(e&15),tI=e=>Jl(e.r)&&Jl(e.g)&&Jl(e.b)&&Jl(e.a);function nI(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&un[e[1]]*17,g:255&un[e[2]]*17,b:255&un[e[3]]*17,a:t===5?un[e[4]]*17:255}:(t===7||t===9)&&(n={r:un[e[1]]<<4|un[e[2]],g:un[e[3]]<<4|un[e[4]],b:un[e[5]]<<4|un[e[6]],a:t===9?un[e[7]]<<4|un[e[8]]:255})),n}const iI=(e,t)=>e<255?t(e):"";function rI(e){var t=tI(e)?qz:eI;return e?"#"+t(e.r)+t(e.g)+t(e.b)+iI(e.a,t):void 0}const oI=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function F4(e,t,n){const i=t*Math.min(n,1-n),r=(o,s=(o+e/30)%12)=>n-i*Math.max(Math.min(s-3,9-s,1),-1);return[r(0),r(8),r(4)]}function sI(e,t,n){const i=(r,o=(r+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function aI(e,t,n){const i=F4(e,1,.5);let r;for(t+n>1&&(r=1/(t+n),t*=r,n*=r),r=0;r<3;r++)i[r]*=1-t-n,i[r]+=t;return i}function lI(e,t,n,i,r){return e===r?(t-n)/i+(t<n?6:0):t===r?(n-e)/i+2:(e-t)/i+4}function O0(e){const n=e.r/255,i=e.g/255,r=e.b/255,o=Math.max(n,i,r),s=Math.min(n,i,r),a=(o+s)/2;let l,c,u;return o!==s&&(u=o-s,c=a>.5?u/(2-o-s):u/(o+s),l=lI(n,i,r,u,o),l=l*60+.5),[l|0,c||0,a]}function M0(e,t,n,i){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,i)).map(ar)}function R0(e,t,n){return M0(F4,e,t,n)}function cI(e,t,n){return M0(aI,e,t,n)}function uI(e,t,n){return M0(sI,e,t,n)}function z4(e){return(e%360+360)%360}function dI(e){const t=oI.exec(e);let n=255,i;if(!t)return;t[5]!==i&&(n=t[6]?Xs(+t[5]):ar(+t[5]));const r=z4(+t[2]),o=+t[3]/100,s=+t[4]/100;return t[1]==="hwb"?i=cI(r,o,s):t[1]==="hsv"?i=uI(r,o,s):i=R0(r,o,s),{r:i[0],g:i[1],b:i[2],a:n}}function fI(e,t){var n=O0(e);n[0]=z4(n[0]+t),n=R0(n),e.r=n[0],e.g=n[1],e.b=n[2]}function hI(e){if(!e)return;const t=O0(e),n=t[0],i=Av(t[1]),r=Av(t[2]);return e.a<255?`hsla(${n}, ${i}%, ${r}%, ${ui(e.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const Ev={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},_v={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function pI(){const e={},t=Object.keys(_v),n=Object.keys(Ev);let i,r,o,s,a;for(i=0;i<t.length;i++){for(s=a=t[i],r=0;r<n.length;r++)o=n[r],a=a.replace(o,Ev[o]);o=parseInt(_v[s],16),e[a]=[o>>16&255,o>>8&255,o&255]}return e}let ql;function mI(e){ql||(ql=pI(),ql.transparent=[0,0,0,0]);const t=ql[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const gI=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function xI(e){const t=gI.exec(e);let n=255,i,r,o;if(t){if(t[7]!==i){const s=+t[7];n=t[8]?Xs(s):$i(s*255,0,255)}return i=+t[1],r=+t[3],o=+t[5],i=255&(t[2]?Xs(i):$i(i,0,255)),r=255&(t[4]?Xs(r):$i(r,0,255)),o=255&(t[6]?Xs(o):$i(o,0,255)),{r:i,g:r,b:o,a:n}}}function yI(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ui(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const wh=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,mo=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function vI(e,t,n){const i=mo(ui(e.r)),r=mo(ui(e.g)),o=mo(ui(e.b));return{r:ar(wh(i+n*(mo(ui(t.r))-i))),g:ar(wh(r+n*(mo(ui(t.g))-r))),b:ar(wh(o+n*(mo(ui(t.b))-o))),a:e.a+n*(t.a-e.a)}}function ec(e,t,n){if(e){let i=O0(e);i[t]=Math.max(0,Math.min(i[t]+i[t]*n,t===0?360:1)),i=R0(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function I4(e,t){return e&&Object.assign(t||{},e)}function Tv(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=ar(e[3]))):(t=I4(e,{r:0,g:0,b:0,a:1}),t.a=ar(t.a)),t}function bI(e){return e.charAt(0)==="r"?xI(e):dI(e)}class Xa{constructor(t){if(t instanceof Xa)return t;const n=typeof t;let i;n==="object"?i=Tv(t):n==="string"&&(i=nI(t)||mI(t)||bI(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=I4(this._rgb);return t&&(t.a=ui(t.a)),t}set rgb(t){this._rgb=Tv(t)}rgbString(){return this._valid?yI(this._rgb):void 0}hexString(){return this._valid?rI(this._rgb):void 0}hslString(){return this._valid?hI(this._rgb):void 0}mix(t,n){if(t){const i=this.rgb,r=t.rgb;let o;const s=n===o?.5:n,a=2*s-1,l=i.a-r.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,i.r=255&c*i.r+o*r.r+.5,i.g=255&c*i.g+o*r.g+.5,i.b=255&c*i.b+o*r.b+.5,i.a=s*i.a+(1-s)*r.a,this.rgb=i}return this}interpolate(t,n){return t&&(this._rgb=vI(this._rgb,t._rgb,n)),this}clone(){return new Xa(this.rgb)}alpha(t){return this._rgb.a=ar(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=ml(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ec(this._rgb,2,t),this}darken(t){return ec(this._rgb,2,-t),this}saturate(t){return ec(this._rgb,1,t),this}desaturate(t){return ec(this._rgb,1,-t),this}rotate(t){return fI(this._rgb,t),this}}/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */function ii(){}const wI=(()=>{let e=0;return()=>e++})();function be(e){return e===null||typeof e>"u"}function Le(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function pe(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Qe(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function $t(e,t){return Qe(e)?e:t}function ue(e,t){return typeof e>"u"?t:e}const kI=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,B4=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Oe(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Ce(e,t,n,i){let r,o,s;if(Le(e))if(o=e.length,i)for(r=o-1;r>=0;r--)t.call(n,e[r],r);else for(r=0;r<o;r++)t.call(n,e[r],r);else if(pe(e))for(s=Object.keys(e),o=s.length,r=0;r<o;r++)t.call(n,e[s[r]],s[r])}function Ku(e,t){let n,i,r,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n)if(r=e[n],o=t[n],r.datasetIndex!==o.datasetIndex||r.index!==o.index)return!1;return!0}function Qu(e){if(Le(e))return e.map(Qu);if(pe(e)){const t=Object.create(null),n=Object.keys(e),i=n.length;let r=0;for(;r<i;++r)t[n[r]]=Qu(e[n[r]]);return t}return e}function W4(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function SI(e,t,n,i){if(!W4(e))return;const r=t[e],o=n[e];pe(r)&&pe(o)?Ka(r,o,i):t[e]=Qu(o)}function Ka(e,t,n){const i=Le(t)?t:[t],r=i.length;if(!pe(e))return e;n=n||{};const o=n.merger||SI;let s;for(let a=0;a<r;++a){if(s=i[a],!pe(s))continue;const l=Object.keys(s);for(let c=0,u=l.length;c<u;++c)o(l[c],e,s,n)}return e}function fa(e,t){return Ka(e,t,{merger:CI})}function CI(e,t,n){if(!W4(e))return;const i=t[e],r=n[e];pe(i)&&pe(r)?fa(i,r):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Qu(r))}const Pv={"":e=>e,x:e=>e.x,y:e=>e.y};function AI(e){const t=e.split("."),n=[];let i="";for(const r of t)i+=r,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function EI(e){const t=AI(e);return n=>{for(const i of t){if(i==="")break;n=n&&n[i]}return n}}function hr(e,t){return(Pv[t]||(Pv[t]=EI(t)))(e)}function N0(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Qa=e=>typeof e<"u",pr=e=>typeof e=="function",jv=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function _I(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Ie=Math.PI,ze=2*Ie,TI=ze+Ie,Zu=Number.POSITIVE_INFINITY,PI=Ie/180,qe=Ie/2,kr=Ie/4,Ov=Ie*2/3,Gi=Math.log10,Kn=Math.sign;function ha(e,t,n){return Math.abs(e-t)<n}function Mv(e){const t=Math.round(e);e=ha(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Gi(e))),i=e/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function jI(e){const t=[],n=Math.sqrt(e);let i;for(i=1;i<n;i++)e%i===0&&(t.push(i),t.push(e/i));return n===(n|0)&&t.push(n),t.sort((r,o)=>r-o).pop(),t}function ss(e){return!isNaN(parseFloat(e))&&isFinite(e)}function OI(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function U4(e,t,n){let i,r,o;for(i=0,r=e.length;i<r;i++)o=e[i][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Tn(e){return e*(Ie/180)}function D0(e){return e*(180/Ie)}function Rv(e){if(!Qe(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function V4(e,t){const n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i);let o=Math.atan2(i,n);return o<-.5*Ie&&(o+=ze),{angle:o,distance:r}}function _m(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function MI(e,t){return(e-t+TI)%ze-Ie}function Yt(e){return(e%ze+ze)%ze}function Za(e,t,n,i){const r=Yt(e),o=Yt(t),s=Yt(n),a=Yt(o-r),l=Yt(s-r),c=Yt(r-o),u=Yt(r-s);return r===o||r===s||i&&o===s||a>l&&c<u}function ft(e,t,n){return Math.max(t,Math.min(n,e))}function RI(e){return ft(e,-32768,32767)}function pi(e,t,n,i=1e-6){return e>=Math.min(t,n)-i&&e<=Math.max(t,n)+i}function L0(e,t,n){n=n||(s=>e[s]<t);let i=e.length-1,r=0,o;for(;i-r>1;)o=r+i>>1,n(o)?r=o:i=o;return{lo:r,hi:i}}const mi=(e,t,n,i)=>L0(e,n,i?r=>{const o=e[r][t];return o<n||o===n&&e[r+1][t]===n}:r=>e[r][t]<n),NI=(e,t,n)=>L0(e,n,i=>e[i][t]>=n);function DI(e,t,n){let i=0,r=e.length;for(;i<r&&e[i]<t;)i++;for(;r>i&&e[r-1]>n;)r--;return i>0||r<e.length?e.slice(i,r):e}const H4=["push","pop","shift","splice","unshift"];function LI(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),H4.forEach(n=>{const i="_onData"+N0(n),r=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const s=r.apply(this,o);return e._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...o)}),s}})})}function Nv(e,t){const n=e._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(t);r!==-1&&i.splice(r,1),!(i.length>0)&&(H4.forEach(o=>{delete e[o]}),delete e._chartjs)}function $4(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const G4=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Y4(e,t){let n=[],i=!1;return function(...r){n=r,i||(i=!0,G4.call(window,()=>{i=!1,e.apply(t,n)}))}}function FI(e,t){let n;return function(...i){return t?(clearTimeout(n),n=setTimeout(e,t,i)):e.apply(this,i),t}}const F0=e=>e==="start"?"left":e==="end"?"right":"center",Ct=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,zI=(e,t,n,i)=>e===(i?"left":"right")?n:e==="center"?(t+n)/2:t;function X4(e,t,n){const i=t.length;let r=0,o=i;if(e._sorted){const{iScale:s,_parsed:a}=e,l=s.axis,{min:c,max:u,minDefined:d,maxDefined:f}=s.getUserBounds();d&&(r=ft(Math.min(mi(a,l,c).lo,n?i:mi(t,l,s.getPixelForValue(c)).lo),0,i-1)),f?o=ft(Math.max(mi(a,s.axis,u,!0).hi+1,n?0:mi(t,l,s.getPixelForValue(u),!0).hi+1),r,i)-r:o=i-r}return{start:r,count:o}}function K4(e){const{xScale:t,yScale:n,_scaleRanges:i}=e,r={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!i)return e._scaleRanges=r,!0;const o=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),o}const tc=e=>e===0||e===1,Dv=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*ze/n)),Lv=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*ze/n)+1,pa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*qe)+1,easeOutSine:e=>Math.sin(e*qe),easeInOutSine:e=>-.5*(Math.cos(Ie*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>tc(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>tc(e)?e:Dv(e,.075,.3),easeOutElastic:e=>tc(e)?e:Lv(e,.075,.3),easeInOutElastic(e){return tc(e)?e:e<.5?.5*Dv(e*2,.1125,.45):.5+.5*Lv(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-pa.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?pa.easeInBounce(e*2)*.5:pa.easeOutBounce(e*2-1)*.5+.5};function z0(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Fv(e){return z0(e)?e:new Xa(e)}function kh(e){return z0(e)?e:new Xa(e).saturate(.5).darken(.1).hexString()}const II=["x","y","borderWidth","radius","tension"],BI=["color","borderColor","backgroundColor"];function WI(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:BI},numbers:{type:"number",properties:II}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function UI(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zv=new Map;function VI(e,t){t=t||{};const n=e+JSON.stringify(t);let i=zv.get(n);return i||(i=new Intl.NumberFormat(e,t),zv.set(n,i)),i}function gl(e,t,n){return VI(t,n).format(e)}const Q4={values(e){return Le(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const i=this.chart.options.locale;let r,o=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(r="scientific"),o=HI(e,n)}const s=Gi(Math.abs(o)),a=isNaN(s)?1:Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),gl(e,i,l)},logarithmic(e,t,n){if(e===0)return"0";const i=n[t].significand||e/Math.pow(10,Math.floor(Gi(e)));return[1,2,3,5,10,15].includes(i)||t>.8*n.length?Q4.numeric.call(this,e,t,n):""}};function HI(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var rf={formatters:Q4};function $I(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:rf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Zr=Object.create(null),Tm=Object.create(null);function ma(e,t){if(!t)return e;const n=t.split(".");for(let i=0,r=n.length;i<r;++i){const o=n[i];e=e[o]||(e[o]=Object.create(null))}return e}function Sh(e,t,n){return typeof t=="string"?Ka(ma(e,t),n):Ka(ma(e,""),t)}class GI{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,r)=>kh(r.backgroundColor),this.hoverBorderColor=(i,r)=>kh(r.borderColor),this.hoverColor=(i,r)=>kh(r.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Sh(this,t,n)}get(t){return ma(this,t)}describe(t,n){return Sh(Tm,t,n)}override(t,n){return Sh(Zr,t,n)}route(t,n,i,r){const o=ma(this,t),s=ma(this,i),a="_"+n;Object.defineProperties(o,{[a]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[a],c=s[r];return pe(l)?Object.assign({},c,l):ue(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(n=>n(this))}}var Ze=new GI({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[WI,UI,$I]);function YI(e){return!e||be(e.size)||be(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ju(e,t,n,i,r){let o=t[r];return o||(o=t[r]=e.measureText(r).width,n.push(r)),o>i&&(i=o),i}function XI(e,t,n,i){i=i||{};let r=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(r=i.data={},o=i.garbageCollect=[],i.font=t),e.save(),e.font=t;let s=0;const a=n.length;let l,c,u,d,f;for(l=0;l<a;l++)if(d=n[l],d!=null&&!Le(d))s=Ju(e,r,o,s,d);else if(Le(d))for(c=0,u=d.length;c<u;c++)f=d[c],f!=null&&!Le(f)&&(s=Ju(e,r,o,s,f));e.restore();const p=o.length/2;if(p>n.length){for(l=0;l<p;l++)delete r[o[l]];o.splice(0,p)}return s}function Sr(e,t,n){const i=e.currentDevicePixelRatio,r=n!==0?Math.max(n/2,.5):0;return Math.round((t-r)*i)/i+r}function Iv(e,t){t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore()}function Pm(e,t,n,i){Z4(e,t,n,i,null)}function Z4(e,t,n,i,r){let o,s,a,l,c,u,d,f;const p=t.pointStyle,g=t.rotation,m=t.radius;let v=(g||0)*PI;if(p&&typeof p=="object"&&(o=p.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,i),e.rotate(v),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(m)||m<=0)){switch(e.beginPath(),p){default:r?e.ellipse(n,i,r/2,m,0,0,ze):e.arc(n,i,m,0,ze),e.closePath();break;case"triangle":u=r?r/2:m,e.moveTo(n+Math.sin(v)*u,i-Math.cos(v)*m),v+=Ov,e.lineTo(n+Math.sin(v)*u,i-Math.cos(v)*m),v+=Ov,e.lineTo(n+Math.sin(v)*u,i-Math.cos(v)*m),e.closePath();break;case"rectRounded":c=m*.516,l=m-c,s=Math.cos(v+kr)*l,d=Math.cos(v+kr)*(r?r/2-c:l),a=Math.sin(v+kr)*l,f=Math.sin(v+kr)*(r?r/2-c:l),e.arc(n-d,i-a,c,v-Ie,v-qe),e.arc(n+f,i-s,c,v-qe,v),e.arc(n+d,i+a,c,v,v+qe),e.arc(n-f,i+s,c,v+qe,v+Ie),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*m,u=r?r/2:l,e.rect(n-u,i-l,2*u,2*l);break}v+=kr;case"rectRot":d=Math.cos(v)*(r?r/2:m),s=Math.cos(v)*m,a=Math.sin(v)*m,f=Math.sin(v)*(r?r/2:m),e.moveTo(n-d,i-a),e.lineTo(n+f,i-s),e.lineTo(n+d,i+a),e.lineTo(n-f,i+s),e.closePath();break;case"crossRot":v+=kr;case"cross":d=Math.cos(v)*(r?r/2:m),s=Math.cos(v)*m,a=Math.sin(v)*m,f=Math.sin(v)*(r?r/2:m),e.moveTo(n-d,i-a),e.lineTo(n+d,i+a),e.moveTo(n+f,i-s),e.lineTo(n-f,i+s);break;case"star":d=Math.cos(v)*(r?r/2:m),s=Math.cos(v)*m,a=Math.sin(v)*m,f=Math.sin(v)*(r?r/2:m),e.moveTo(n-d,i-a),e.lineTo(n+d,i+a),e.moveTo(n+f,i-s),e.lineTo(n-f,i+s),v+=kr,d=Math.cos(v)*(r?r/2:m),s=Math.cos(v)*m,a=Math.sin(v)*m,f=Math.sin(v)*(r?r/2:m),e.moveTo(n-d,i-a),e.lineTo(n+d,i+a),e.moveTo(n+f,i-s),e.lineTo(n-f,i+s);break;case"line":s=r?r/2:Math.cos(v)*m,a=Math.sin(v)*m,e.moveTo(n-s,i-a),e.lineTo(n+s,i+a);break;case"dash":e.moveTo(n,i),e.lineTo(n+Math.cos(v)*(r?r/2:m),i+Math.sin(v)*m);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function gi(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function of(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function sf(e){e.restore()}function KI(e,t,n,i,r){if(!t)return e.lineTo(n.x,n.y);if(r==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else r==="after"!=!!i?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function QI(e,t,n,i){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function ZI(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),be(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function JI(e,t,n,i,r){if(r.strikethrough||r.underline){const o=e.measureText(i),s=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,c=n+o.actualBoundingBoxDescent,u=r.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=r.decorationWidth||2,e.moveTo(s,u),e.lineTo(a,u),e.stroke()}}function qI(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Jr(e,t,n,i,r,o={}){const s=Le(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(e.save(),e.font=r.string,ZI(e,o),l=0;l<s.length;++l)c=s[l],o.backdrop&&qI(e,o.backdrop),a&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),be(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(c,n,i,o.maxWidth)),e.fillText(c,n,i,o.maxWidth),JI(e,n,i,c,o),i+=Number(r.lineHeight);e.restore()}function Ja(e,t){const{x:n,y:i,w:r,h:o,radius:s}=t;e.arc(n+s.topLeft,i+s.topLeft,s.topLeft,1.5*Ie,Ie,!0),e.lineTo(n,i+o-s.bottomLeft),e.arc(n+s.bottomLeft,i+o-s.bottomLeft,s.bottomLeft,Ie,qe,!0),e.lineTo(n+r-s.bottomRight,i+o),e.arc(n+r-s.bottomRight,i+o-s.bottomRight,s.bottomRight,qe,0,!0),e.lineTo(n+r,i+s.topRight),e.arc(n+r-s.topRight,i+s.topRight,s.topRight,0,-qe,!0),e.lineTo(n+s.topLeft,i)}const e9=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,t9=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function n9(e,t){const n=(""+e).match(e9);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const i9=e=>+e||0;function I0(e,t){const n={},i=pe(t),r=i?Object.keys(t):t,o=pe(e)?i?s=>ue(e[s],e[t[s]]):s=>e[s]:()=>e;for(const s of r)n[s]=i9(o(s));return n}function J4(e){return I0(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Wr(e){return I0(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Tt(e){const t=J4(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ct(e,t){e=e||{},t=t||Ze.font;let n=ue(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let i=ue(e.style,t.style);i&&!(""+i).match(t9)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const r={family:ue(e.family,t.family),lineHeight:n9(ue(e.lineHeight,t.lineHeight),n),size:n,style:i,weight:ue(e.weight,t.weight),string:""};return r.string=YI(r),r}function Ks(e,t,n,i){let r=!0,o,s,a;for(o=0,s=e.length;o<s;++o)if(a=e[o],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),r=!1),n!==void 0&&Le(a)&&(a=a[n%a.length],r=!1),a!==void 0))return i&&!r&&(i.cacheable=!1),a}function r9(e,t,n){const{min:i,max:r}=e,o=B4(t,(r-i)/2),s=(a,l)=>n&&a===0?0:a+l;return{min:s(i,-Math.abs(o)),max:s(r,o)}}function vr(e,t){return Object.assign(Object.create(e),t)}function B0(e,t=[""],n,i,r=()=>e[0]){const o=n||e;typeof i>"u"&&(i=nC("_fallback",e));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:i,_getTarget:r,override:a=>B0([a,...e],t,o,i)};return new Proxy(s,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return eC(a,l,()=>f9(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return Wv(a).includes(l)},ownKeys(a){return Wv(a)},set(a,l,c){const u=a._storage||(a._storage=r());return a[l]=u[l]=c,delete a._keys,!0}})}function as(e,t,n,i){const r={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:q4(e,i),setContext:o=>as(e,o,n,i),override:o=>as(e.override(o),t,n,i)};return new Proxy(r,{deleteProperty(o,s){return delete o[s],delete e[s],!0},get(o,s,a){return eC(o,s,()=>s9(o,s,a))},getOwnPropertyDescriptor(o,s){return o._descriptors.allKeys?Reflect.has(e,s)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,s)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,s){return Reflect.has(e,s)},ownKeys(){return Reflect.ownKeys(e)},set(o,s,a){return e[s]=a,delete o[s],!0}})}function q4(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:i=t.indexable,_allKeys:r=t.allKeys}=e;return{allKeys:r,scriptable:n,indexable:i,isScriptable:pr(n)?n:()=>n,isIndexable:pr(i)?i:()=>i}}const o9=(e,t)=>e?e+N0(t):t,W0=(e,t)=>pe(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function eC(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];const i=n();return e[t]=i,i}function s9(e,t,n){const{_proxy:i,_context:r,_subProxy:o,_descriptors:s}=e;let a=i[t];return pr(a)&&s.isScriptable(t)&&(a=a9(t,a,e,n)),Le(a)&&a.length&&(a=l9(t,a,e,s.isIndexable)),W0(t,a)&&(a=as(a,r,o&&o[t],s)),a}function a9(e,t,n,i){const{_proxy:r,_context:o,_subProxy:s,_stack:a}=n;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(o,s||i);return a.delete(e),W0(e,l)&&(l=U0(r._scopes,r,e,l)),l}function l9(e,t,n,i){const{_proxy:r,_context:o,_subProxy:s,_descriptors:a}=n;if(typeof o.index<"u"&&i(e))return t[o.index%t.length];if(pe(t[0])){const l=t,c=r._scopes.filter(u=>u!==l);t=[];for(const u of l){const d=U0(c,r,e,u);t.push(as(d,o,s&&s[e],a))}}return t}function tC(e,t,n){return pr(e)?e(t,n):e}const c9=(e,t)=>e===!0?t:typeof e=="string"?hr(t,e):void 0;function u9(e,t,n,i,r){for(const o of t){const s=c9(n,o);if(s){e.add(s);const a=tC(s._fallback,n,r);if(typeof a<"u"&&a!==n&&a!==i)return a}else if(s===!1&&typeof i<"u"&&n!==i)return null}return!1}function U0(e,t,n,i){const r=t._rootScopes,o=tC(t._fallback,n,i),s=[...e,...r],a=new Set;a.add(i);let l=Bv(a,s,n,o||n,i);return l===null||typeof o<"u"&&o!==n&&(l=Bv(a,s,o,l,i),l===null)?!1:B0(Array.from(a),[""],r,o,()=>d9(t,n,i))}function Bv(e,t,n,i,r){for(;n;)n=u9(e,t,n,i,r);return n}function d9(e,t,n){const i=e._getTarget();t in i||(i[t]={});const r=i[t];return Le(r)&&pe(n)?n:r||{}}function f9(e,t,n,i){let r;for(const o of t)if(r=nC(o9(o,e),n),typeof r<"u")return W0(e,r)?U0(n,i,e,r):r}function nC(e,t){for(const n of t){if(!n)continue;const i=n[e];if(typeof i<"u")return i}}function Wv(e){let t=e._keys;return t||(t=e._keys=h9(e._scopes)),t}function h9(e){const t=new Set;for(const n of e)for(const i of Object.keys(n).filter(r=>!r.startsWith("_")))t.add(i);return Array.from(t)}function iC(e,t,n,i){const{iScale:r}=e,{key:o="r"}=this._parsing,s=new Array(i);let a,l,c,u;for(a=0,l=i;a<l;++a)c=a+n,u=t[c],s[a]={r:r.parse(hr(u,o),c)};return s}const p9=Number.EPSILON||1e-14,ls=(e,t)=>t<e.length&&!e[t].skip&&e[t],rC=e=>e==="x"?"y":"x";function m9(e,t,n,i){const r=e.skip?t:e,o=t,s=n.skip?t:n,a=_m(o,r),l=_m(s,o);let c=a/(a+l),u=l/(a+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const d=i*c,f=i*u;return{previous:{x:o.x-d*(s.x-r.x),y:o.y-d*(s.y-r.y)},next:{x:o.x+f*(s.x-r.x),y:o.y+f*(s.y-r.y)}}}function g9(e,t,n){const i=e.length;let r,o,s,a,l,c=ls(e,0);for(let u=0;u<i-1;++u)if(l=c,c=ls(e,u+1),!(!l||!c)){if(ha(t[u],0,p9)){n[u]=n[u+1]=0;continue}r=n[u]/t[u],o=n[u+1]/t[u],a=Math.pow(r,2)+Math.pow(o,2),!(a<=9)&&(s=3/Math.sqrt(a),n[u]=r*s*t[u],n[u+1]=o*s*t[u])}}function x9(e,t,n="x"){const i=rC(n),r=e.length;let o,s,a,l=ls(e,0);for(let c=0;c<r;++c){if(s=a,a=l,l=ls(e,c+1),!a)continue;const u=a[n],d=a[i];s&&(o=(u-s[n])/3,a[`cp1${n}`]=u-o,a[`cp1${i}`]=d-o*t[c]),l&&(o=(l[n]-u)/3,a[`cp2${n}`]=u+o,a[`cp2${i}`]=d+o*t[c])}}function y9(e,t="x"){const n=rC(t),i=e.length,r=Array(i).fill(0),o=Array(i);let s,a,l,c=ls(e,0);for(s=0;s<i;++s)if(a=l,l=c,c=ls(e,s+1),!!l){if(c){const u=c[t]-l[t];r[s]=u!==0?(c[n]-l[n])/u:0}o[s]=a?c?Kn(r[s-1])!==Kn(r[s])?0:(r[s-1]+r[s])/2:r[s-1]:r[s]}g9(e,r,o),x9(e,o,t)}function nc(e,t,n){return Math.max(Math.min(e,n),t)}function v9(e,t){let n,i,r,o,s,a=gi(e[0],t);for(n=0,i=e.length;n<i;++n)s=o,o=a,a=n<i-1&&gi(e[n+1],t),o&&(r=e[n],s&&(r.cp1x=nc(r.cp1x,t.left,t.right),r.cp1y=nc(r.cp1y,t.top,t.bottom)),a&&(r.cp2x=nc(r.cp2x,t.left,t.right),r.cp2y=nc(r.cp2y,t.top,t.bottom)))}function b9(e,t,n,i,r){let o,s,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")y9(e,r);else{let c=i?e[e.length-1]:e[0];for(o=0,s=e.length;o<s;++o)a=e[o],l=m9(c,a,e[Math.min(o+1,s-(i?0:1))%s],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&v9(e,n)}function V0(){return typeof window<"u"&&typeof document<"u"}function H0(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function qu(e,t,n){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*t.parentNode[n])):i=e,i}const af=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function w9(e,t){return af(e).getPropertyValue(t)}const k9=["top","right","bottom","left"];function Ur(e,t,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const o=k9[r];i[o]=parseFloat(e[t+"-"+o+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const S9=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function C9(e,t){const n=e.touches,i=n&&n.length?n[0]:e,{offsetX:r,offsetY:o}=i;let s=!1,a,l;if(S9(r,o,e.target))a=r,l=o;else{const c=t.getBoundingClientRect();a=i.clientX-c.left,l=i.clientY-c.top,s=!0}return{x:a,y:l,box:s}}function jr(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:i}=t,r=af(n),o=r.boxSizing==="border-box",s=Ur(r,"padding"),a=Ur(r,"border","width"),{x:l,y:c,box:u}=C9(e,n),d=s.left+(u&&a.left),f=s.top+(u&&a.top);let{width:p,height:g}=t;return o&&(p-=s.width+a.width,g-=s.height+a.height),{x:Math.round((l-d)/p*n.width/i),y:Math.round((c-f)/g*n.height/i)}}function A9(e,t,n){let i,r;if(t===void 0||n===void 0){const o=H0(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const s=o.getBoundingClientRect(),a=af(o),l=Ur(a,"border","width"),c=Ur(a,"padding");t=s.width-c.width-l.width,n=s.height-c.height-l.height,i=qu(a.maxWidth,o,"clientWidth"),r=qu(a.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:i||Zu,maxHeight:r||Zu}}const ic=e=>Math.round(e*10)/10;function E9(e,t,n,i){const r=af(e),o=Ur(r,"margin"),s=qu(r.maxWidth,e,"clientWidth")||Zu,a=qu(r.maxHeight,e,"clientHeight")||Zu,l=A9(e,t,n);let{width:c,height:u}=l;if(r.boxSizing==="content-box"){const f=Ur(r,"border","width"),p=Ur(r,"padding");c-=p.width+f.width,u-=p.height+f.height}return c=Math.max(0,c-o.width),u=Math.max(0,i?c/i:u-o.height),c=ic(Math.min(c,s,l.maxWidth)),u=ic(Math.min(u,a,l.maxHeight)),c&&!u&&(u=ic(c/2)),(t!==void 0||n!==void 0)&&i&&l.height&&u>l.height&&(u=l.height,c=ic(Math.floor(u*i))),{width:c,height:u}}function Uv(e,t,n){const i=t||1,r=Math.floor(e.height*i),o=Math.floor(e.width*i);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const s=e.canvas;return s.style&&(n||!s.style.height&&!s.style.width)&&(s.style.height=`${e.height}px`,s.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||s.height!==r||s.width!==o?(e.currentDevicePixelRatio=i,s.height=r,s.width=o,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}const _9=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};V0()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Vv(e,t){const n=w9(e,t),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Or(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function T9(e,t,n,i){return{x:e.x+n*(t.x-e.x),y:i==="middle"?n<.5?e.y:t.y:i==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function P9(e,t,n,i){const r={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},s=Or(e,r,n),a=Or(r,o,n),l=Or(o,t,n),c=Or(s,a,n),u=Or(a,l,n);return Or(c,u,n)}const j9=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},O9=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ho(e,t,n){return e?j9(t,n):O9()}function oC(e,t){let n,i;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=i)}function sC(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function aC(e){return e==="angle"?{between:Za,compare:MI,normalize:Yt}:{between:pi,compare:(t,n)=>t-n,normalize:t=>t}}function Hv({start:e,end:t,count:n,loop:i,style:r}){return{start:e%n,end:t%n,loop:i&&(t-e+1)%n===0,style:r}}function M9(e,t,n){const{property:i,start:r,end:o}=n,{between:s,normalize:a}=aC(i),l=t.length;let{start:c,end:u,loop:d}=e,f,p;if(d){for(c+=l,u+=l,f=0,p=l;f<p&&s(a(t[c%l][i]),r,o);++f)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:d,style:e.style}}function lC(e,t,n){if(!n)return[e];const{property:i,start:r,end:o}=n,s=t.length,{compare:a,between:l,normalize:c}=aC(i),{start:u,end:d,loop:f,style:p}=M9(e,t,n),g=[];let m=!1,v=null,x,y,b;const k=()=>l(r,b,x)&&a(r,b)!==0,S=()=>a(o,x)===0||l(o,b,x),E=()=>m||k(),C=()=>!m||S();for(let j=u,T=u;j<=d;++j)y=t[j%s],!y.skip&&(x=c(y[i]),x!==b&&(m=l(x,r,o),v===null&&E()&&(v=a(x,r)===0?j:T),v!==null&&C()&&(g.push(Hv({start:v,end:j,loop:f,count:s,style:p})),v=null),T=j,b=x));return v!==null&&g.push(Hv({start:v,end:d,loop:f,count:s,style:p})),g}function cC(e,t){const n=[],i=e.segments;for(let r=0;r<i.length;r++){const o=lC(i[r],e.points,t);o.length&&n.push(...o)}return n}function R9(e,t,n,i){let r=0,o=t-1;if(n&&!i)for(;r<t&&!e[r].skip;)r++;for(;r<t&&e[r].skip;)r++;for(r%=t,n&&(o+=r);o>r&&e[o%t].skip;)o--;return o%=t,{start:r,end:o}}function N9(e,t,n,i){const r=e.length,o=[];let s=t,a=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%r];c.skip||c.stop?a.skip||(i=!1,o.push({start:t%r,end:(l-1)%r,loop:i}),t=s=c.stop?l:null):(s=l,a.skip&&(t=l)),a=c}return s!==null&&o.push({start:t%r,end:s%r,loop:i}),o}function D9(e,t){const n=e.points,i=e.options.spanGaps,r=n.length;if(!r)return[];const o=!!e._loop,{start:s,end:a}=R9(n,r,o,i);if(i===!0)return $v(e,[{start:s,end:a,loop:o}],n,t);const l=a<s?a+r:a,c=!!e._fullLoop&&s===0&&a===r-1;return $v(e,N9(n,s,l,c),n,t)}function $v(e,t,n,i){return!i||!i.setContext||!n?t:L9(e,t,n,i)}function L9(e,t,n,i){const r=e._chart.getContext(),o=Gv(e.options),{_datasetIndex:s,options:{spanGaps:a}}=e,l=n.length,c=[];let u=o,d=t[0].start,f=d;function p(g,m,v,x){const y=a?-1:1;if(g!==m){for(g+=l;n[g%l].skip;)g-=y;for(;n[m%l].skip;)m+=y;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:v,style:x}),u=x,d=m%l)}}for(const g of t){d=a?d:g.start;let m=n[d%l],v;for(f=d+1;f<=g.end;f++){const x=n[f%l];v=Gv(i.setContext(vr(r,{type:"segment",p0:m,p1:x,p0DataIndex:(f-1)%l,p1DataIndex:f%l,datasetIndex:s}))),F9(v,u)&&p(d,f-1,g.loop,u),m=x,u=v}d<f-1&&p(d,f-1,g.loop,u)}return c}function Gv(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function F9(e,t){if(!t)return!1;const n=[],i=function(r,o){return z0(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,i)!==JSON.stringify(t,i)}/*!
 * Chart.js v4.4.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */class z9{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,i,r){const o=n.listeners[r],s=n.duration;o.forEach(a=>a({chart:t,initial:n.initial,numSteps:s,currentStep:Math.min(i-n.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=G4.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const o=i.items;let s=o.length-1,a=!1,l;for(;s>=0;--s)l=o[s],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(r.draw(),this._notify(r,i,t,"progress")),o.length||(i.running=!1,this._notify(r,i,t,"complete"),i.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let i=n.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,i)),i}listen(t,n,i){this._getAnims(t).listeners[n].push(i)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,r)=>Math.max(i,r._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const i=n.items;let r=i.length-1;for(;r>=0;--r)i[r].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var oi=new z9;const Yv="transparent",I9={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const i=Fv(e||Yv),r=i.valid&&Fv(t||Yv);return r&&r.valid?r.mix(i,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class B9{constructor(t,n,i,r){const o=n[i];r=Ks([t.to,r,o,t.from]);const s=Ks([t.from,o,r]);this._active=!0,this._fn=t.fn||I9[t.type||typeof s],this._easing=pa[t.easing]||pa.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=i,this._from=s,this._to=r,this._promises=void 0}active(){return this._active}update(t,n,i){if(this._active){this._notify(!1);const r=this._target[this._prop],o=i-this._start,s=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Ks([t.to,n,r,t.from]),this._from=Ks([t.from,r,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,i=this._duration,r=this._prop,o=this._from,s=this._loop,a=this._to;let l;if(this._active=o!==a&&(s||n<i),!this._active){this._target[r]=a,this._notify(!0);return}if(n<0){this._target[r]=o;return}l=n/i%2,l=s&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[r]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,i)=>{t.push({res:n,rej:i})})}_notify(t){const n=t?"res":"rej",i=this._promises||[];for(let r=0;r<i.length;r++)i[r][n]()}}class uC{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!pe(t))return;const n=Object.keys(Ze.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{const o=t[r];if(!pe(o))return;const s={};for(const a of n)s[a]=o[a];(Le(o.properties)&&o.properties||[r]).forEach(a=>{(a===r||!i.has(a))&&i.set(a,s)})})}_animateOptions(t,n){const i=n.options,r=U9(t,i);if(!r)return[];const o=this._createAnimations(r,i);return i.$shared&&W9(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,n){const i=this._properties,r=[],o=t.$animations||(t.$animations={}),s=Object.keys(n),a=Date.now();let l;for(l=s.length-1;l>=0;--l){const c=s[l];if(c.charAt(0)==="$")continue;if(c==="options"){r.push(...this._animateOptions(t,n));continue}const u=n[c];let d=o[c];const f=i.get(c);if(d)if(f&&d.active()){d.update(f,u,a);continue}else d.cancel();if(!f||!f.duration){t[c]=u;continue}o[c]=d=new B9(f,t,c,u),r.push(d)}return r}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const i=this._createAnimations(t,n);if(i.length)return oi.add(this._chart,i),!0}}function W9(e,t){const n=[],i=Object.keys(t);for(let r=0;r<i.length;r++){const o=e[i[r]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function U9(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Xv(e,t){const n=e&&e.options||{},i=n.reverse,r=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:i?o:r,end:i?r:o}}function V9(e,t,n){if(n===!1)return!1;const i=Xv(e,n),r=Xv(t,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function H9(e){let t,n,i,r;return pe(e)?(t=e.top,n=e.right,i=e.bottom,r=e.left):t=n=i=r=e,{top:t,right:n,bottom:i,left:r,disabled:e===!1}}function dC(e,t){const n=[],i=e._getSortedDatasetMetas(t);let r,o;for(r=0,o=i.length;r<o;++r)n.push(i[r].index);return n}function Kv(e,t,n,i={}){const r=e.keys,o=i.mode==="single";let s,a,l,c;if(t!==null){for(s=0,a=r.length;s<a;++s){if(l=+r[s],l===n){if(i.all)continue;break}c=e.values[l],Qe(c)&&(o||t===0||Kn(t)===Kn(c))&&(t+=c)}return t}}function $9(e){const t=Object.keys(e),n=new Array(t.length);let i,r,o;for(i=0,r=t.length;i<r;++i)o=t[i],n[i]={x:o,y:e[o]};return n}function Qv(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function G9(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function Y9(e){const{min:t,max:n,minDefined:i,maxDefined:r}=e.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function X9(e,t,n){const i=e[t]||(e[t]={});return i[n]||(i[n]={})}function Zv(e,t,n,i){for(const r of t.getMatchingVisibleMetas(i).reverse()){const o=e[r.index];if(n&&o>0||!n&&o<0)return r.index}return null}function Jv(e,t){const{chart:n,_cachedMeta:i}=e,r=n._stacks||(n._stacks={}),{iScale:o,vScale:s,index:a}=i,l=o.axis,c=s.axis,u=G9(o,s,i),d=t.length;let f;for(let p=0;p<d;++p){const g=t[p],{[l]:m,[c]:v}=g,x=g._stacks||(g._stacks={});f=x[c]=X9(r,u,m),f[a]=v,f._top=Zv(f,s,!0,i.type),f._bottom=Zv(f,s,!1,i.type);const y=f._visualValues||(f._visualValues={});y[a]=v}}function Ch(e,t){const n=e.scales;return Object.keys(n).filter(i=>n[i].axis===t).shift()}function K9(e,t){return vr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Q9(e,t,n){return vr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Fs(e,t){const n=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){t=t||e._parsed;for(const r of t){const o=r._stacks;if(!o||o[i]===void 0||o[i][n]===void 0)return;delete o[i][n],o[i]._visualValues!==void 0&&o[i]._visualValues[n]!==void 0&&delete o[i]._visualValues[n]}}}const Ah=e=>e==="reset"||e==="none",qv=(e,t)=>t?e:Object.assign({},e),Z9=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:dC(n,!0),values:null};class Rn{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Qv(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Fs(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,i=this.getDataset(),r=(d,f,p,g)=>d==="x"?f:d==="r"?g:p,o=n.xAxisID=ue(i.xAxisID,Ch(t,"x")),s=n.yAxisID=ue(i.yAxisID,Ch(t,"y")),a=n.rAxisID=ue(i.rAxisID,Ch(t,"r")),l=n.indexAxis,c=n.iAxisID=r(l,o,s,a),u=n.vAxisID=r(l,s,o,a);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(s),n.rScale=this.getScaleForId(a),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Nv(this._data,this),t._stacked&&Fs(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),i=this._data;if(pe(n))this._data=$9(n);else if(i!==n){if(i){Nv(i,this);const r=this._cachedMeta;Fs(r),r._parsed=[]}n&&Object.isExtensible(n)&&LI(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,i=this.getDataset();let r=!1;this._dataCheck();const o=n._stacked;n._stacked=Qv(n.vScale,n),n.stack!==i.stack&&(r=!0,Fs(n),n.stack=i.stack),this._resyncElements(t),(r||o!==n._stacked)&&Jv(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:i,_data:r}=this,{iScale:o,_stacked:s}=i,a=o.axis;let l=t===0&&n===r.length?!0:i._sorted,c=t>0&&i._parsed[t-1],u,d,f;if(this._parsing===!1)i._parsed=r,i._sorted=!0,f=r;else{Le(r[t])?f=this.parseArrayData(i,r,t,n):pe(r[t])?f=this.parseObjectData(i,r,t,n):f=this.parsePrimitiveData(i,r,t,n);const p=()=>d[a]===null||c&&d[a]<c[a];for(u=0;u<n;++u)i._parsed[u+t]=d=f[u],l&&(p()&&(l=!1),c=d);i._sorted=l}s&&Jv(this,f)}parsePrimitiveData(t,n,i,r){const{iScale:o,vScale:s}=t,a=o.axis,l=s.axis,c=o.getLabels(),u=o===s,d=new Array(r);let f,p,g;for(f=0,p=r;f<p;++f)g=f+i,d[f]={[a]:u||o.parse(c[g],g),[l]:s.parse(n[g],g)};return d}parseArrayData(t,n,i,r){const{xScale:o,yScale:s}=t,a=new Array(r);let l,c,u,d;for(l=0,c=r;l<c;++l)u=l+i,d=n[u],a[l]={x:o.parse(d[0],u),y:s.parse(d[1],u)};return a}parseObjectData(t,n,i,r){const{xScale:o,yScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(r);let u,d,f,p;for(u=0,d=r;u<d;++u)f=u+i,p=n[f],c[u]={x:o.parse(hr(p,a),f),y:s.parse(hr(p,l),f)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,i){const r=this.chart,o=this._cachedMeta,s=n[t.axis],a={keys:dC(r,!0),values:n._stacks[t.axis]._visualValues};return Kv(a,s,o.index,{mode:i})}updateRangeFromParsed(t,n,i,r){const o=i[n.axis];let s=o===null?NaN:o;const a=r&&i._stacks[n.axis];r&&a&&(r.values=a,s=Kv(r,o,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,n){const i=this._cachedMeta,r=i._parsed,o=i._sorted&&t===i.iScale,s=r.length,a=this._getOtherScale(t),l=Z9(n,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:d}=Y9(a);let f,p;function g(){p=r[f];const m=p[a.axis];return!Qe(p[t.axis])||u>m||d<m}for(f=0;f<s&&!(!g()&&(this.updateRangeFromParsed(c,t,p,l),o));++f);if(o){for(f=s-1;f>=0;--f)if(!g()){this.updateRangeFromParsed(c,t,p,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,i=[];let r,o,s;for(r=0,o=n.length;r<o;++r)s=n[r][t.axis],Qe(s)&&i.push(s);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,i=n.iScale,r=n.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:r?""+r.getLabelForValue(o[r.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=H9(ue(this.options.clip,V9(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,i=this._cachedMeta,r=i.data||[],o=n.chartArea,s=[],a=this._drawStart||0,l=this._drawCount||r.length-a,c=this.options.drawActiveElementsOnTop;let u;for(i.dataset&&i.dataset.draw(t,o,a,l),u=a;u<a+l;++u){const d=r[u];d.hidden||(d.active&&c?s.push(d):d.draw(t,o))}for(u=0;u<s.length;++u)s[u].draw(t,o)}getStyle(t,n){const i=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,n,i){const r=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const s=this._cachedMeta.data[t];o=s.$context||(s.$context=Q9(this.getContext(),t,s)),o.parsed=this.getParsed(t),o.raw=r.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=K9(this.chart.getContext(),this.index)),o.dataset=r,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",i){const r=n==="active",o=this._cachedDataOpts,s=t+"-"+n,a=o[s],l=this.enableOptionSharing&&Qa(i);if(a)return qv(a,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),d=r?[`${t}Hover`,"hover",t,""]:[t,""],f=c.getOptionScopes(this.getDataset(),u),p=Object.keys(Ze.elements[t]),g=()=>this.getContext(i,r,n),m=c.resolveNamedOptions(f,p,g,d);return m.$shared&&(m.$shared=l,o[s]=Object.freeze(qv(m,l))),m}_resolveAnimations(t,n,i){const r=this.chart,o=this._cachedDataOpts,s=`animation-${n}`,a=o[s];if(a)return a;let l;if(r.options.animation!==!1){const u=this.chart.config,d=u.datasetAnimationScopeKeys(this._type,n),f=u.getOptionScopes(this.getDataset(),d);l=u.createResolver(f,this.getContext(t,i,n))}const c=new uC(r,l&&l.animations);return l&&l._cacheable&&(o[s]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ah(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const i=this.resolveDataElementOptions(t,n),r=this._sharedOptions,o=this.getSharedOptions(i),s=this.includeOptions(n,o)||o!==r;return this.updateSharedOptions(o,n,i),{sharedOptions:o,includeOptions:s}}updateElement(t,n,i,r){Ah(r)?Object.assign(t,i):this._resolveAnimations(n,r).update(t,i)}updateSharedOptions(t,n,i){t&&!Ah(n)&&this._resolveAnimations(void 0,n).update(t,i)}_setStyle(t,n,i,r){t.active=r;const o=this.getStyle(n,r);this._resolveAnimations(n,i,r).update(t,{options:!r&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,n,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,i=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const r=i.length,o=n.length,s=Math.min(o,r);s&&this.parse(0,s),o>r?this._insertElements(r,o-r,t):o<r&&this._removeElements(o,r-o)}_insertElements(t,n,i=!0){const r=this._cachedMeta,o=r.data,s=t+n;let a;const l=c=>{for(c.length+=n,a=c.length-1;a>=s;a--)c[a]=c[a-n]};for(l(o),a=t;a<s;++a)o[a]=new this.dataElementType;this._parsing&&l(r._parsed),this.parse(t,n),i&&this.updateElements(o,t,n,"reset")}updateElements(t,n,i,r){}_removeElements(t,n){const i=this._cachedMeta;if(this._parsing){const r=i._parsed.splice(t,n);i._stacked&&Fs(i,r)}i.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,i,r]=t;this[n](i,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}H(Rn,"defaults",{}),H(Rn,"datasetElementType",null),H(Rn,"dataElementType",null);function J9(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let i=[];for(let r=0,o=n.length;r<o;r++)i=i.concat(n[r].controller.getAllParsedValues(e));e._cache.$bar=$4(i.sort((r,o)=>r-o))}return e._cache.$bar}function q9(e){const t=e.iScale,n=J9(t,e.type);let i=t._length,r,o,s,a;const l=()=>{s===32767||s===-32768||(Qa(a)&&(i=Math.min(i,Math.abs(s-a)||i)),a=s)};for(r=0,o=n.length;r<o;++r)s=t.getPixelForValue(n[r]),l();for(a=void 0,r=0,o=t.ticks.length;r<o;++r)s=t.getPixelForTick(r),l();return i}function eB(e,t,n,i){const r=n.barThickness;let o,s;return be(r)?(o=t.min*n.categoryPercentage,s=n.barPercentage):(o=r*i,s=1),{chunk:o/i,ratio:s,start:t.pixels[e]-o/2}}function tB(e,t,n,i){const r=t.pixels,o=r[e];let s=e>0?r[e-1]:null,a=e<r.length-1?r[e+1]:null;const l=n.categoryPercentage;s===null&&(s=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-s);const c=o-(o-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/i,ratio:n.barPercentage,start:c}}function nB(e,t,n,i){const r=n.parse(e[0],i),o=n.parse(e[1],i),s=Math.min(r,o),a=Math.max(r,o);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:r,end:o,min:s,max:a}}function fC(e,t,n,i){return Le(e)?nB(e,t,n,i):t[n.axis]=n.parse(e,i),t}function eb(e,t,n,i){const r=e.iScale,o=e.vScale,s=r.getLabels(),a=r===o,l=[];let c,u,d,f;for(c=n,u=n+i;c<u;++c)f=t[c],d={},d[r.axis]=a||r.parse(s[c],c),l.push(fC(f,d,o,c));return l}function Eh(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function iB(e,t,n){return e!==0?Kn(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function rB(e){let t,n,i,r,o;return e.horizontal?(t=e.base>e.x,n="left",i="right"):(t=e.base<e.y,n="bottom",i="top"),t?(r="end",o="start"):(r="start",o="end"),{start:n,end:i,reverse:t,top:r,bottom:o}}function oB(e,t,n,i){let r=t.borderSkipped;const o={};if(!r){e.borderSkipped=o;return}if(r===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:s,end:a,reverse:l,top:c,bottom:u}=rB(e);r==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===i?r=c:(n._bottom||0)===i?r=u:(o[tb(u,s,a,l)]=!0,r=c)),o[tb(r,s,a,l)]=!0,e.borderSkipped=o}function tb(e,t,n,i){return i?(e=sB(e,t,n),e=nb(e,n,t)):e=nb(e,t,n),e}function sB(e,t,n){return e===t?n:e===n?t:e}function nb(e,t,n){return e==="start"?t:e==="end"?n:e}function aB(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class ga extends Rn{parsePrimitiveData(t,n,i,r){return eb(t,n,i,r)}parseArrayData(t,n,i,r){return eb(t,n,i,r)}parseObjectData(t,n,i,r){const{iScale:o,vScale:s}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,u=s.axis==="x"?a:l,d=[];let f,p,g,m;for(f=i,p=i+r;f<p;++f)m=n[f],g={},g[o.axis]=o.parse(hr(m,c),f),d.push(fC(hr(m,u),g,s,f));return d}updateRangeFromParsed(t,n,i,r){super.updateRangeFromParsed(t,n,i,r);const o=i._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:i,vScale:r}=n,o=this.getParsed(t),s=o._custom,a=Eh(s)?"["+s.start+", "+s.end+"]":""+r.getLabelForValue(o[r.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,i,r){const o=r==="reset",{index:s,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),u=this._getRuler(),{sharedOptions:d,includeOptions:f}=this._getSharedOptions(n,r);for(let p=n;p<n+i;p++){const g=this.getParsed(p),m=o||be(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(p),v=this._calculateBarIndexPixels(p,u),x=(g._stacks||{})[a.axis],y={horizontal:c,base:m.base,enableBorderRadius:!x||Eh(g._custom)||s===x._top||s===x._bottom,x:c?m.head:v.center,y:c?v.center:m.head,height:c?v.size:Math.abs(m.size),width:c?Math.abs(m.size):v.size};f&&(y.options=d||this.resolveDataElementOptions(p,t[p].active?"active":r));const b=y.options||t[p].options;oB(y,b,x,s),aB(y,b,u.ratio),this.updateElement(t[p],p,y,r)}}_getStacks(t,n){const{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),o=i.options.stacked,s=[],a=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(be(u)||isNaN(u))return!0};for(const l of r)if(!(n!==void 0&&a(l))&&((o===!1||s.indexOf(l.stack)===-1||o===void 0&&l.stack===void 0)&&s.push(l.stack),l.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,i){const r=this._getStacks(t,i),o=n!==void 0?r.indexOf(n):-1;return o===-1?r.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,i=n.iScale,r=[];let o,s;for(o=0,s=n.data.length;o<s;++o)r.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const a=t.barThickness;return{min:a||q9(n),pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:i,index:r},options:{base:o,minBarLength:s}}=this,a=o||0,l=this.getParsed(t),c=l._custom,u=Eh(c);let d=l[n.axis],f=0,p=i?this.applyStack(n,l,i):d,g,m;p!==d&&(f=p-d,p=d),u&&(d=c.barStart,p=c.barEnd-c.barStart,d!==0&&Kn(d)!==Kn(c.barEnd)&&(f=0),f+=d);const v=!be(o)&&!u?o:f;let x=n.getPixelForValue(v);if(this.chart.getDataVisibility(t)?g=n.getPixelForValue(f+p):g=x,m=g-x,Math.abs(m)<s){m=iB(m,n,a)*s,d===a&&(x-=m/2);const y=n.getPixelForDecimal(0),b=n.getPixelForDecimal(1),k=Math.min(y,b),S=Math.max(y,b);x=Math.max(Math.min(x,S),k),g=x+m,i&&!u&&(l._stacks[n.axis]._visualValues[r]=n.getValueForPixel(g)-n.getValueForPixel(x))}if(x===n.getPixelForValue(a)){const y=Kn(m)*n.getLineWidthForValue(a)/2;x+=y,m-=y}return{size:m,base:x,head:g,center:g+m/2}}_calculateBarIndexPixels(t,n){const i=n.scale,r=this.options,o=r.skipNull,s=ue(r.maxBarThickness,1/0);let a,l;if(n.grouped){const c=o?this._getStackCount(t):n.stackCount,u=r.barThickness==="flex"?tB(t,n,r,c):eB(t,n,r,c),d=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);a=u.start+u.chunk*d+u.chunk/2,l=Math.min(s,u.chunk*u.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(s,n.min*n.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,i=t.data,r=i.length;let o=0;for(;o<r;++o)this.getParsed(o)[n.axis]!==null&&i[o].draw(this._ctx)}}H(ga,"id","bar"),H(ga,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),H(ga,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Yc extends Rn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,i,r){const o=super.parsePrimitiveData(t,n,i,r);for(let s=0;s<o.length;s++)o[s]._custom=this.resolveDataElementOptions(s+i).radius;return o}parseArrayData(t,n,i,r){const o=super.parseArrayData(t,n,i,r);for(let s=0;s<o.length;s++){const a=n[i+s];o[s]._custom=ue(a[2],this.resolveDataElementOptions(s+i).radius)}return o}parseObjectData(t,n,i,r){const o=super.parseObjectData(t,n,i,r);for(let s=0;s<o.length;s++){const a=n[i+s];o[s]._custom=ue(a&&a.r&&+a.r,this.resolveDataElementOptions(s+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let i=t.length-1;i>=0;--i)n=Math.max(n,t[i].size(this.resolveDataElementOptions(i))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,s=this.getParsed(t),a=r.getLabelForValue(s.x),l=o.getLabelForValue(s.y),c=s._custom;return{label:i[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,i,r){const o=r==="reset",{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,r),u=s.axis,d=a.axis;for(let f=n;f<n+i;f++){const p=t[f],g=!o&&this.getParsed(f),m={},v=m[u]=o?s.getPixelForDecimal(.5):s.getPixelForValue(g[u]),x=m[d]=o?a.getBasePixel():a.getPixelForValue(g[d]);m.skip=isNaN(v)||isNaN(x),c&&(m.options=l||this.resolveDataElementOptions(f,p.active?"active":r),o&&(m.options.radius=0)),this.updateElement(p,f,m,r)}}resolveDataElementOptions(t,n){const i=this.getParsed(t);let r=super.resolveDataElementOptions(t,n);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const o=r.radius;return n!=="active"&&(r.radius=0),r.radius+=ue(i&&i._custom,o),r}}H(Yc,"id","bubble"),H(Yc,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),H(Yc,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function lB(e,t,n){let i=1,r=1,o=0,s=0;if(t<ze){const a=e,l=a+t,c=Math.cos(a),u=Math.sin(a),d=Math.cos(l),f=Math.sin(l),p=(b,k,S)=>Za(b,a,l,!0)?1:Math.max(k,k*n,S,S*n),g=(b,k,S)=>Za(b,a,l,!0)?-1:Math.min(k,k*n,S,S*n),m=p(0,c,d),v=p(qe,u,f),x=g(Ie,c,d),y=g(Ie+qe,u,f);i=(m-x)/2,r=(v-y)/2,o=-(m+x)/2,s=-(v+y)/2}return{ratioX:i,ratioY:r,offsetX:o,offsetY:s}}class Yi extends Rn{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const i=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=i;else{let o=l=>+i[l];if(pe(i[t])){const{key:l="value"}=this._parsing;o=c=>+hr(i[c],l)}let s,a;for(s=t,a=t+n;s<a;++s)r._parsed[s]=o(s)}}_getRotation(){return Tn(this.options.rotation-90)}_getCircumference(){return Tn(this.options.circumference)}_getRotationExtents(){let t=ze,n=-ze;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const r=this.chart.getDatasetMeta(i).controller,o=r._getRotation(),s=r._getCircumference();t=Math.min(t,o),n=Math.max(n,o+s)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:i}=n,r=this._cachedMeta,o=r.data,s=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-s)/2,0),l=Math.min(kI(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:u,rotation:d}=this._getRotationExtents(),{ratioX:f,ratioY:p,offsetX:g,offsetY:m}=lB(d,u,l),v=(i.width-s)/f,x=(i.height-s)/p,y=Math.max(Math.min(v,x)/2,0),b=B4(this.options.radius,y),k=Math.max(b*l,0),S=(b-k)/this._getVisibleDatasetWeightTotal();this.offsetX=g*b,this.offsetY=m*b,r.total=this.calculateTotal(),this.outerRadius=b-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const i=this.options,r=this._cachedMeta,o=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||r._parsed[t]===null||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*o/ze)}updateElements(t,n,i,r){const o=r==="reset",s=this.chart,a=s.chartArea,c=s.options.animation,u=(a.left+a.right)/2,d=(a.top+a.bottom)/2,f=o&&c.animateScale,p=f?0:this.innerRadius,g=f?0:this.outerRadius,{sharedOptions:m,includeOptions:v}=this._getSharedOptions(n,r);let x=this._getRotation(),y;for(y=0;y<n;++y)x+=this._circumference(y,o);for(y=n;y<n+i;++y){const b=this._circumference(y,o),k=t[y],S={x:u+this.offsetX,y:d+this.offsetY,startAngle:x,endAngle:x+b,circumference:b,outerRadius:g,innerRadius:p};v&&(S.options=m||this.resolveDataElementOptions(y,k.active?"active":r)),x+=b,this.updateElement(k,y,S,r)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let i=0,r;for(r=0;r<n.length;r++){const o=t._parsed[r];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(r)&&!n[r].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?ze*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=gl(n._parsed[t],i.options.locale);return{label:r[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const i=this.chart;let r,o,s,a,l;if(!t){for(r=0,o=i.data.datasets.length;r<o;++r)if(i.isDatasetVisible(r)){s=i.getDatasetMeta(r),t=s.data,a=s.controller;break}}if(!t)return 0;for(r=0,o=t.length;r<o;++r)l=a.resolveDataElementOptions(r),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let i=0,r=t.length;i<r;++i){const o=this.resolveDataElementOptions(i);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(t){return Math.max(ue(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}H(Yi,"id","doughnut"),H(Yi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),H(Yi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),H(Yi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:r}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:r,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class xa extends Rn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:i,data:r=[],_dataset:o}=n,s=this.chart._animationsDisabled;let{start:a,count:l}=X4(n,r,s);this._drawStart=a,this._drawCount=l,K4(n)&&(a=0,l=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=r;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:c},t),this.updateElements(r,a,l,t)}updateElements(t,n,i,r){const o=r==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:d}=this._getSharedOptions(n,r),f=s.axis,p=a.axis,{spanGaps:g,segment:m}=this.options,v=ss(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||r==="none",y=n+i,b=t.length;let k=n>0&&this.getParsed(n-1);for(let S=0;S<b;++S){const E=t[S],C=x?E:{};if(S<n||S>=y){C.skip=!0;continue}const j=this.getParsed(S),T=be(j[p]),z=C[f]=s.getPixelForValue(j[f],S),U=C[p]=o||T?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,j,l):j[p],S);C.skip=isNaN(z)||isNaN(U)||T,C.stop=S>0&&Math.abs(j[f]-k[f])>v,m&&(C.parsed=j,C.raw=c.data[S]),d&&(C.options=u||this.resolveDataElementOptions(S,E.active?"active":r)),x||this.updateElement(E,S,C,r),k=j}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,i=n.options&&n.options.borderWidth||0,r=t.data||[];if(!r.length)return i;const o=r[0].size(this.resolveDataElementOptions(0)),s=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,o,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}H(xa,"id","line"),H(xa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),H(xa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ya extends Rn{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,i=this.chart,r=i.data.labels||[],o=gl(n._parsed[t].r,i.options.locale);return{label:r[t]||"",value:o}}parseObjectData(t,n,i,r){return iC.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,r)=>{const o=this.getParsed(r).r;!isNaN(o)&&this.chart.getDataVisibility(r)&&(o<n.min&&(n.min=o),o>n.max&&(n.max=o))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,i=t.options,r=Math.min(n.right-n.left,n.bottom-n.top),o=Math.max(r/2,0),s=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),a=(o-s)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,n,i,r){const o=r==="reset",s=this.chart,l=s.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,d=c.yCenter,f=c.getIndexAngle(0)-.5*Ie;let p=f,g;const m=360/this.countVisibleElements();for(g=0;g<n;++g)p+=this._computeAngle(g,r,m);for(g=n;g<n+i;g++){const v=t[g];let x=p,y=p+this._computeAngle(g,r,m),b=s.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;p=y,o&&(l.animateScale&&(b=0),l.animateRotate&&(x=y=f));const k={x:u,y:d,innerRadius:0,outerRadius:b,startAngle:x,endAngle:y,options:this.resolveDataElementOptions(g,v.active?"active":r)};this.updateElement(v,g,k,r)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((i,r)=>{!isNaN(this.getParsed(r).r)&&this.chart.getDataVisibility(r)&&n++}),n}_computeAngle(t,n,i){return this.chart.getDataVisibility(t)?Tn(this.resolveDataElementOptions(t,n).angle||i):0}}H(ya,"id","polarArea"),H(ya,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),H(ya,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:i,color:r}}=t.legend.options;return n.labels.map((o,s)=>{const l=t.getDatasetMeta(0).controller.getStyle(s);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:r,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}})}return[]}},onClick(t,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class jm extends Yi{}H(jm,"id","pie"),H(jm,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Xc extends Rn{getLabelAndValue(t){const n=this._cachedMeta.vScale,i=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(i[n.axis])}}parseObjectData(t,n,i,r){return iC.bind(this)(t,n,i,r)}update(t){const n=this._cachedMeta,i=n.dataset,r=n.data||[],o=n.iScale.getLabels();if(i.points=r,t!=="resize"){const s=this.resolveDatasetElementOptions(t);this.options.showLine||(s.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===r.length,options:s};this.updateElement(i,void 0,a,t)}this.updateElements(r,0,r.length,t)}updateElements(t,n,i,r){const o=this._cachedMeta.rScale,s=r==="reset";for(let a=n;a<n+i;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":r),u=o.getPointPositionForValue(a,this.getParsed(a).r),d=s?o.xCenter:u.x,f=s?o.yCenter:u.y,p={x:d,y:f,angle:u.angle,skip:isNaN(d)||isNaN(f),options:c};this.updateElement(l,a,p,r)}}}H(Xc,"id","radar"),H(Xc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),H(Xc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Kc extends Rn{getLabelAndValue(t){const n=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:o}=n,s=this.getParsed(t),a=r.getLabelForValue(s.x),l=o.getLabelForValue(s.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const n=this._cachedMeta,{data:i=[]}=n,r=this.chart._animationsDisabled;let{start:o,count:s}=X4(n,i,r);if(this._drawStart=o,this._drawCount=s,K4(n)&&(o=0,s=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=n;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!r,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(i,o,s,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,i,r){const o=r==="reset",{iScale:s,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,r),d=this.getSharedOptions(u),f=this.includeOptions(r,d),p=s.axis,g=a.axis,{spanGaps:m,segment:v}=this.options,x=ss(m)?m:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||r==="none";let b=n>0&&this.getParsed(n-1);for(let k=n;k<n+i;++k){const S=t[k],E=this.getParsed(k),C=y?S:{},j=be(E[g]),T=C[p]=s.getPixelForValue(E[p],k),z=C[g]=o||j?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,E,l):E[g],k);C.skip=isNaN(T)||isNaN(z)||j,C.stop=k>0&&Math.abs(E[p]-b[p])>x,v&&(C.parsed=E,C.raw=c.data[k]),f&&(C.options=d||this.resolveDataElementOptions(k,S.active?"active":r)),y||this.updateElement(S,k,C,r),b=E}this.updateSharedOptions(d,r,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let a=0;for(let l=n.length-1;l>=0;--l)a=Math.max(a,n[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,r=i.options&&i.options.borderWidth||0;if(!n.length)return r;const o=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(r,o,s)/2}}H(Kc,"id","scatter"),H(Kc,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),H(Kc,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var cB=Object.freeze({__proto__:null,BarController:ga,BubbleController:Yc,DoughnutController:Yi,LineController:xa,PieController:jm,PolarAreaController:ya,RadarController:Xc,ScatterController:Kc});function Cr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class $0{constructor(t){H(this,"options");this.options=t||{}}static override(t){Object.assign($0.prototype,t)}init(){}formats(){return Cr()}parse(){return Cr()}format(){return Cr()}add(){return Cr()}diff(){return Cr()}startOf(){return Cr()}endOf(){return Cr()}}var uB={_date:$0};function dB(e,t,n,i){const{controller:r,data:o,_sorted:s}=e,a=r._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&s&&o.length){const l=a._reversePixels?NI:mi;if(i){if(r._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const d=l(o,t,n-u),f=l(o,t,n+u);return{lo:d.lo,hi:f.hi}}}}else return l(o,t,n)}return{lo:0,hi:o.length-1}}function xl(e,t,n,i,r){const o=e.getSortedVisibleDatasetMetas(),s=n[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:u}=o[a],{lo:d,hi:f}=dB(o[a],t,s,r);for(let p=d;p<=f;++p){const g=u[p];g.skip||i(g,c,p)}}}function fB(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(i,r){const o=t?Math.abs(i.x-r.x):0,s=n?Math.abs(i.y-r.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}}function _h(e,t,n,i,r){const o=[];return!r&&!e.isPointInArea(t)||xl(e,n,t,function(a,l,c){!r&&!gi(a,e.chartArea,0)||a.inRange(t.x,t.y,i)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function hB(e,t,n,i){let r=[];function o(s,a,l){const{startAngle:c,endAngle:u}=s.getProps(["startAngle","endAngle"],i),{angle:d}=V4(s,{x:t.x,y:t.y});Za(d,c,u)&&r.push({element:s,datasetIndex:a,index:l})}return xl(e,n,t,o),r}function pB(e,t,n,i,r,o){let s=[];const a=fB(n);let l=Number.POSITIVE_INFINITY;function c(u,d,f){const p=u.inRange(t.x,t.y,r);if(i&&!p)return;const g=u.getCenterPoint(r);if(!(!!o||e.isPointInArea(g))&&!p)return;const v=a(t,g);v<l?(s=[{element:u,datasetIndex:d,index:f}],l=v):v===l&&s.push({element:u,datasetIndex:d,index:f})}return xl(e,n,t,c),s}function Th(e,t,n,i,r,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!i?hB(e,t,n,r):pB(e,t,n,i,r,o)}function ib(e,t,n,i,r){const o=[],s=n==="x"?"inXRange":"inYRange";let a=!1;return xl(e,n,t,(l,c,u)=>{l[s](t[n],r)&&(o.push({element:l,datasetIndex:c,index:u}),a=a||l.inRange(t.x,t.y,r))}),i&&!a?[]:o}var mB={evaluateInteractionItems:xl,modes:{index(e,t,n,i){const r=jr(t,e),o=n.axis||"x",s=n.includeInvisible||!1,a=n.intersect?_h(e,r,o,i,s):Th(e,r,o,!1,i,s),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=a[0].index,d=c.data[u];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,i){const r=jr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;let a=n.intersect?_h(e,r,o,i,s):Th(e,r,o,!1,i,s);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let u=0;u<c.length;++u)a.push({element:c[u],datasetIndex:l,index:u})}return a},point(e,t,n,i){const r=jr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return _h(e,r,o,i,s)},nearest(e,t,n,i){const r=jr(t,e),o=n.axis||"xy",s=n.includeInvisible||!1;return Th(e,r,o,n.intersect,i,s)},x(e,t,n,i){const r=jr(t,e);return ib(e,r,"x",n.intersect,i)},y(e,t,n,i){const r=jr(t,e);return ib(e,r,"y",n.intersect,i)}}};const hC=["left","top","right","bottom"];function zs(e,t){return e.filter(n=>n.pos===t)}function rb(e,t){return e.filter(n=>hC.indexOf(n.pos)===-1&&n.box.axis===t)}function Is(e,t){return e.sort((n,i)=>{const r=t?i:n,o=t?n:i;return r.weight===o.weight?r.index-o.index:r.weight-o.weight})}function gB(e){const t=[];let n,i,r,o,s,a;for(n=0,i=(e||[]).length;n<i;++n)r=e[n],{position:o,options:{stack:s,stackWeight:a=1}}=r,t.push({index:n,box:r,pos:o,horizontal:r.isHorizontal(),weight:r.weight,stack:s&&o+s,stackWeight:a});return t}function xB(e){const t={};for(const n of e){const{stack:i,pos:r,stackWeight:o}=n;if(!i||!hC.includes(r))continue;const s=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=o}return t}function yB(e,t){const n=xB(e),{vBoxMaxWidth:i,hBoxMaxHeight:r}=t;let o,s,a;for(o=0,s=e.length;o<s;++o){a=e[o];const{fullSize:l}=a.box,c=n[a.stack],u=c&&a.stackWeight/c.weight;a.horizontal?(a.width=u?u*i:l&&t.availableWidth,a.height=r):(a.width=i,a.height=u?u*r:l&&t.availableHeight)}return n}function vB(e){const t=gB(e),n=Is(t.filter(c=>c.box.fullSize),!0),i=Is(zs(t,"left"),!0),r=Is(zs(t,"right")),o=Is(zs(t,"top"),!0),s=Is(zs(t,"bottom")),a=rb(t,"x"),l=rb(t,"y");return{fullSize:n,leftAndTop:i.concat(o),rightAndBottom:r.concat(l).concat(s).concat(a),chartArea:zs(t,"chartArea"),vertical:i.concat(r).concat(l),horizontal:o.concat(s).concat(a)}}function ob(e,t,n,i){return Math.max(e[n],t[n])+Math.max(e[i],t[i])}function pC(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function bB(e,t,n,i){const{pos:r,box:o}=n,s=e.maxPadding;if(!pe(r)){n.size&&(e[r]-=n.size);const d=i[n.stack]||{size:0,count:1};d.size=Math.max(d.size,n.horizontal?o.height:o.width),n.size=d.size/d.count,e[r]+=n.size}o.getPadding&&pC(s,o.getPadding());const a=Math.max(0,t.outerWidth-ob(s,e,"left","right")),l=Math.max(0,t.outerHeight-ob(s,e,"top","bottom")),c=a!==e.w,u=l!==e.h;return e.w=a,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function wB(e){const t=e.maxPadding;function n(i){const r=Math.max(t[i]-e[i],0);return e[i]+=r,r}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function kB(e,t){const n=t.maxPadding;function i(r){const o={left:0,top:0,right:0,bottom:0};return r.forEach(s=>{o[s]=Math.max(t[s],n[s])}),o}return i(e?["left","right"]:["top","bottom"])}function Qs(e,t,n,i){const r=[];let o,s,a,l,c,u;for(o=0,s=e.length,c=0;o<s;++o){a=e[o],l=a.box,l.update(a.width||t.w,a.height||t.h,kB(a.horizontal,t));const{same:d,other:f}=bB(t,n,a,i);c|=d&&r.length,u=u||f,l.fullSize||r.push(a)}return c&&Qs(r,t,n,i)||u}function rc(e,t,n,i,r){e.top=n,e.left=t,e.right=t+i,e.bottom=n+r,e.width=i,e.height=r}function sb(e,t,n,i){const r=n.padding;let{x:o,y:s}=t;for(const a of e){const l=a.box,c=i[a.stack]||{count:1,placed:0,weight:1},u=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*u,f=c.size||l.height;Qa(c.start)&&(s=c.start),l.fullSize?rc(l,r.left,s,n.outerWidth-r.right-r.left,f):rc(l,t.left+c.placed,s,d,f),c.start=s,c.placed+=d,s=l.bottom}else{const d=t.h*u,f=c.size||l.width;Qa(c.start)&&(o=c.start),l.fullSize?rc(l,o,r.top,f,n.outerHeight-r.bottom-r.top):rc(l,o,t.top+c.placed,f,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=s}var Et={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,i){if(!e)return;const r=Tt(e.options.layout.padding),o=Math.max(t-r.width,0),s=Math.max(n-r.height,0),a=vB(e.boxes),l=a.vertical,c=a.horizontal;Ce(e.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const u=l.reduce((m,v)=>v.box.options&&v.box.options.display===!1?m:m+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:r,availableWidth:o,availableHeight:s,vBoxMaxWidth:o/2/u,hBoxMaxHeight:s/2}),f=Object.assign({},r);pC(f,Tt(i));const p=Object.assign({maxPadding:f,w:o,h:s,x:r.left,y:r.top},r),g=yB(l.concat(c),d);Qs(a.fullSize,p,d,g),Qs(l,p,d,g),Qs(c,p,d,g)&&Qs(l,p,d,g),wB(p),sb(a.leftAndTop,p,d,g),p.x+=p.w,p.y+=p.h,sb(a.rightAndBottom,p,d,g),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},Ce(a.chartArea,m=>{const v=m.box;Object.assign(v,e.chartArea),v.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class mC{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,i){}removeEventListener(t,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,i,r){return n=Math.max(0,n||t.width),i=i||t.height,{width:n,height:Math.max(0,r?Math.floor(n/r):i)}}isAttached(t){return!0}updateConfig(t){}}class SB extends mC{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Qc="$chartjs",CB={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ab=e=>e===null||e==="";function AB(e,t){const n=e.style,i=e.getAttribute("height"),r=e.getAttribute("width");if(e[Qc]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",ab(r)){const o=Vv(e,"width");o!==void 0&&(e.width=o)}if(ab(i))if(e.style.height==="")e.height=e.width/(t||2);else{const o=Vv(e,"height");o!==void 0&&(e.height=o)}return e}const gC=_9?{passive:!0}:!1;function EB(e,t,n){e.addEventListener(t,n,gC)}function _B(e,t,n){e.canvas.removeEventListener(t,n,gC)}function TB(e,t){const n=CB[e.type]||e.type,{x:i,y:r}=jr(e,t);return{type:n,chart:t,native:e,x:i!==void 0?i:null,y:r!==void 0?r:null}}function ed(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function PB(e,t,n){const i=e.canvas,r=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||ed(a.addedNodes,i),s=s&&!ed(a.removedNodes,i);s&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}function jB(e,t,n){const i=e.canvas,r=new MutationObserver(o=>{let s=!1;for(const a of o)s=s||ed(a.removedNodes,i),s=s&&!ed(a.addedNodes,i);s&&n()});return r.observe(document,{childList:!0,subtree:!0}),r}const qa=new Map;let lb=0;function xC(){const e=window.devicePixelRatio;e!==lb&&(lb=e,qa.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function OB(e,t){qa.size||window.addEventListener("resize",xC),qa.set(e,t)}function MB(e){qa.delete(e),qa.size||window.removeEventListener("resize",xC)}function RB(e,t,n){const i=e.canvas,r=i&&H0(i);if(!r)return;const o=Y4((a,l)=>{const c=r.clientWidth;n(a,l),c<r.clientWidth&&n()},window),s=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||o(c,u)});return s.observe(r),OB(e,o),s}function Ph(e,t,n){n&&n.disconnect(),t==="resize"&&MB(e)}function NB(e,t,n){const i=e.canvas,r=Y4(o=>{e.ctx!==null&&n(TB(o,e))},e);return EB(i,t,r),r}class DB extends mC{acquireContext(t,n){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(AB(t,n),i):null}releaseContext(t){const n=t.canvas;if(!n[Qc])return!1;const i=n[Qc].initial;["height","width"].forEach(o=>{const s=i[o];be(s)?n.removeAttribute(o):n.setAttribute(o,s)});const r=i.style||{};return Object.keys(r).forEach(o=>{n.style[o]=r[o]}),n.width=n.width,delete n[Qc],!0}addEventListener(t,n,i){this.removeEventListener(t,n);const r=t.$proxies||(t.$proxies={}),s={attach:PB,detach:jB,resize:RB}[n]||NB;r[n]=s(t,n,i)}removeEventListener(t,n){const i=t.$proxies||(t.$proxies={}),r=i[n];if(!r)return;({attach:Ph,detach:Ph,resize:Ph}[n]||_B)(t,n,r),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,i,r){return E9(t,n,i,r)}isAttached(t){const n=H0(t);return!!(n&&n.isConnected)}}function LB(e){return!V0()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?SB:DB}var wc;let Ti=(wc=class{constructor(){H(this,"x");H(this,"y");H(this,"active",!1);H(this,"options");H(this,"$animations")}tooltipPosition(t){const{x:n,y:i}=this.getProps(["x","y"],t);return{x:n,y:i}}hasValue(){return ss(this.x)&&ss(this.y)}getProps(t,n){const i=this.$animations;if(!n||!i)return this;const r={};return t.forEach(o=>{r[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),r}},H(wc,"defaults",{}),H(wc,"defaultRoutes"),wc);function FB(e,t){const n=e.options.ticks,i=zB(e),r=Math.min(n.maxTicksLimit||i,i),o=n.major.enabled?BB(t):[],s=o.length,a=o[0],l=o[s-1],c=[];if(s>r)return WB(t,c,o,s/r),c;const u=IB(o,t,r);if(s>0){let d,f;const p=s>1?Math.round((l-a)/(s-1)):null;for(oc(t,c,u,be(p)?0:a-p,a),d=0,f=s-1;d<f;d++)oc(t,c,u,o[d],o[d+1]);return oc(t,c,u,l,be(p)?t.length:l+p),c}return oc(t,c,u),c}function zB(e){const t=e.options.offset,n=e._tickSize(),i=e._length/n+(t?0:1),r=e._maxLength/n;return Math.floor(Math.min(i,r))}function IB(e,t,n){const i=UB(e),r=t.length/n;if(!i)return Math.max(r,1);const o=jI(i);for(let s=0,a=o.length-1;s<a;s++){const l=o[s];if(l>r)return l}return Math.max(r,1)}function BB(e){const t=[];let n,i;for(n=0,i=e.length;n<i;n++)e[n].major&&t.push(n);return t}function WB(e,t,n,i){let r=0,o=n[0],s;for(i=Math.ceil(i),s=0;s<e.length;s++)s===o&&(t.push(e[s]),r++,o=n[r*i])}function oc(e,t,n,i,r){const o=ue(i,0),s=Math.min(ue(r,e.length),e.length);let a=0,l,c,u;for(n=Math.ceil(n),r&&(l=r-i,n=l/Math.floor(l/n)),u=o;u<0;)a++,u=Math.round(o+a*n);for(c=Math.max(o,0);c<s;c++)c===u&&(t.push(e[c]),a++,u=Math.round(o+a*n))}function UB(e){const t=e.length;let n,i;if(t<2)return!1;for(i=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==i)return!1;return i}const VB=e=>e==="left"?"right":e==="right"?"left":e,cb=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,ub=(e,t)=>Math.min(t||e,e);function db(e,t){const n=[],i=e.length/t,r=e.length;let o=0;for(;o<r;o+=i)n.push(e[Math.floor(o)]);return n}function HB(e,t,n){const i=e.ticks.length,r=Math.min(t,i-1),o=e._startPixel,s=e._endPixel,a=1e-6;let l=e.getPixelForTick(r),c;if(!(n&&(i===1?c=Math.max(l-o,s-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(r-1))/2,l+=r<t?c:-c,l<o-a||l>s+a)))return l}function $B(e,t){Ce(e,n=>{const i=n.gc,r=i.length/2;let o;if(r>t){for(o=0;o<r;++o)delete n.data[i[o]];i.splice(0,r)}})}function Bs(e){return e.drawTicks?e.tickLength:0}function fb(e,t){if(!e.display)return 0;const n=ct(e.font,t),i=Tt(e.padding);return(Le(e.text)?e.text.length:1)*n.lineHeight+i.height}function GB(e,t){return vr(e,{scale:t,type:"scale"})}function YB(e,t,n){return vr(e,{tick:n,index:t,type:"tick"})}function XB(e,t,n){let i=F0(e);return(n&&t!=="right"||!n&&t==="right")&&(i=VB(i)),i}function KB(e,t,n,i){const{top:r,left:o,bottom:s,right:a,chart:l}=e,{chartArea:c,scales:u}=l;let d=0,f,p,g;const m=s-r,v=a-o;if(e.isHorizontal()){if(p=Ct(i,o,a),pe(n)){const x=Object.keys(n)[0],y=n[x];g=u[x].getPixelForValue(y)+m-t}else n==="center"?g=(c.bottom+c.top)/2+m-t:g=cb(e,n,t);f=a-o}else{if(pe(n)){const x=Object.keys(n)[0],y=n[x];p=u[x].getPixelForValue(y)-v+t}else n==="center"?p=(c.left+c.right)/2-v+t:p=cb(e,n,t);g=Ct(i,s,r),d=n==="left"?-qe:qe}return{titleX:p,titleY:g,maxWidth:f,rotation:d}}class co extends Ti{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:i,_suggestedMax:r}=this;return t=$t(t,Number.POSITIVE_INFINITY),n=$t(n,Number.NEGATIVE_INFINITY),i=$t(i,Number.POSITIVE_INFINITY),r=$t(r,Number.NEGATIVE_INFINITY),{min:$t(t,i),max:$t(n,r),minDefined:Qe(t),maxDefined:Qe(n)}}getMinMax(t){let{min:n,max:i,minDefined:r,maxDefined:o}=this.getUserBounds(),s;if(r&&o)return{min:n,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)s=a[l].controller.getMinMax(this,t),r||(n=Math.min(n,s.min)),o||(i=Math.max(i,s.max));return n=o&&n>i?i:n,i=r&&n>i?n:i,{min:$t(n,$t(i,n)),max:$t(i,$t(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Oe(this.options.beforeUpdate,[this])}update(t,n,i){const{beginAtZero:r,grace:o,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=r9(this,o,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?db(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||s.source==="auto")&&(this.ticks=FB(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,t=!t),this._startPixel=n,this._endPixel=i,this._reversePixels=t,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Oe(this.options.afterUpdate,[this])}beforeSetDimensions(){Oe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Oe(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Oe(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Oe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let i,r,o;for(i=0,r=t.length;i<r;i++)o=t[i],o.label=Oe(n.callback,[o.value,i,t],this)}afterTickToLabelConversion(){Oe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Oe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,i=ub(this.ticks.length,t.ticks.maxTicksLimit),r=n.minRotation||0,o=n.maxRotation;let s=r,a,l,c;if(!this._isVisible()||!n.display||r>=o||i<=1||!this.isHorizontal()){this.labelRotation=r;return}const u=this._getLabelSizes(),d=u.widest.width,f=u.highest.height,p=ft(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/i:p/(i-1),d+6>a&&(a=p/(i-(t.offset?.5:1)),l=this.maxHeight-Bs(t.grid)-n.padding-fb(t.title,this.chart.options.font),c=Math.sqrt(d*d+f*f),s=D0(Math.min(Math.asin(ft((u.highest.height+6)/a,-1,1)),Math.asin(ft(l/c,-1,1))-Math.asin(ft(f/c,-1,1)))),s=Math.max(r,Math.min(o,s))),this.labelRotation=s}afterCalculateLabelRotation(){Oe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Oe(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:o}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){const l=fb(r,n.options.font);if(a?(t.width=this.maxWidth,t.height=Bs(o)+l):(t.height=this.maxHeight,t.width=Bs(o)+l),i.display&&this.ticks.length){const{first:c,last:u,widest:d,highest:f}=this._getLabelSizes(),p=i.padding*2,g=Tn(this.labelRotation),m=Math.cos(g),v=Math.sin(g);if(a){const x=i.mirror?0:v*d.width+m*f.height;t.height=Math.min(this.maxHeight,t.height+x+p)}else{const x=i.mirror?0:m*d.width+v*f.height;t.width=Math.min(this.maxWidth,t.width+x+p)}this._calculatePadding(c,u,v,m)}}this._handleMargins(),a?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,i,r){const{ticks:{align:o,padding:s},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let f=0,p=0;l?c?(f=r*t.width,p=i*n.height):(f=i*t.height,p=r*n.width):o==="start"?p=n.width:o==="end"?f=t.width:o!=="inner"&&(f=t.width/2,p=n.width/2),this.paddingLeft=Math.max((f-u+s)*this.width/(this.width-u),0),this.paddingRight=Math.max((p-d+s)*this.width/(this.width-d),0)}else{let u=n.height/2,d=t.height/2;o==="start"?(u=0,d=t.height):o==="end"&&(u=n.height,d=0),this.paddingTop=u+s,this.paddingBottom=d+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Oe(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,i;for(n=0,i=t.length;n<i;n++)be(t[n].label)&&(t.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=db(i,n)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,i){const{ctx:r,_longestTextCache:o}=this,s=[],a=[],l=Math.floor(n/ub(n,i));let c=0,u=0,d,f,p,g,m,v,x,y,b,k,S;for(d=0;d<n;d+=l){if(g=t[d].label,m=this._resolveTickFontOptions(d),r.font=v=m.string,x=o[v]=o[v]||{data:{},gc:[]},y=m.lineHeight,b=k=0,!be(g)&&!Le(g))b=Ju(r,x.data,x.gc,b,g),k=y;else if(Le(g))for(f=0,p=g.length;f<p;++f)S=g[f],!be(S)&&!Le(S)&&(b=Ju(r,x.data,x.gc,b,S),k+=y);s.push(b),a.push(k),c=Math.max(b,c),u=Math.max(k,u)}$B(o,n);const E=s.indexOf(c),C=a.indexOf(u),j=T=>({width:s[T]||0,height:a[T]||0});return{first:j(0),last:j(n-1),widest:j(E),highest:j(C),widths:s,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return RI(this._alignToPixels?Sr(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=YB(this.getContext(),t,i))}return this.$context||(this.$context=GB(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Tn(this.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),o=this._getLabelSizes(),s=t.autoSkipPadding||0,a=o?o.widest.width+s:0,l=o?o.highest.height+s:0;return this.isHorizontal()?l*i>a*r?a/i:l/r:l*r<a*i?l/i:a/r}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,i=this.chart,r=this.options,{grid:o,position:s,border:a}=r,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),f=Bs(o),p=[],g=a.setContext(this.getContext()),m=g.display?g.width:0,v=m/2,x=function(de){return Sr(i,de,m)};let y,b,k,S,E,C,j,T,z,U,q,ne;if(s==="top")y=x(this.bottom),C=this.bottom-f,T=y-v,U=x(t.top)+v,ne=t.bottom;else if(s==="bottom")y=x(this.top),U=t.top,ne=x(t.bottom)-v,C=y+v,T=this.top+f;else if(s==="left")y=x(this.right),E=this.right-f,j=y-v,z=x(t.left)+v,q=t.right;else if(s==="right")y=x(this.left),z=t.left,q=x(t.right)-v,E=y+v,j=this.left+f;else if(n==="x"){if(s==="center")y=x((t.top+t.bottom)/2+.5);else if(pe(s)){const de=Object.keys(s)[0],ae=s[de];y=x(this.chart.scales[de].getPixelForValue(ae))}U=t.top,ne=t.bottom,C=y+v,T=C+f}else if(n==="y"){if(s==="center")y=x((t.left+t.right)/2);else if(pe(s)){const de=Object.keys(s)[0],ae=s[de];y=x(this.chart.scales[de].getPixelForValue(ae))}E=y-v,j=E-f,z=t.left,q=t.right}const he=ue(r.ticks.maxTicksLimit,d),re=Math.max(1,Math.ceil(d/he));for(b=0;b<d;b+=re){const de=this.getContext(b),ae=o.setContext(de),B=a.setContext(de),Y=ae.lineWidth,Q=ae.color,le=B.dash||[],se=B.dashOffset,He=ae.tickWidth,ye=ae.tickColor,_e=ae.tickBorderDash||[],we=ae.tickBorderDashOffset;k=HB(this,b,l),k!==void 0&&(S=Sr(i,k,Y),c?E=j=z=q=S:C=T=U=ne=S,p.push({tx1:E,ty1:C,tx2:j,ty2:T,x1:z,y1:U,x2:q,y2:ne,width:Y,color:Q,borderDash:le,borderDashOffset:se,tickWidth:He,tickColor:ye,tickBorderDash:_e,tickBorderDashOffset:we}))}return this._ticksLength=d,this._borderValue=y,p}_computeLabelItems(t){const n=this.axis,i=this.options,{position:r,ticks:o}=i,s=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:u,mirror:d}=o,f=Bs(i.grid),p=f+u,g=d?-u:p,m=-Tn(this.labelRotation),v=[];let x,y,b,k,S,E,C,j,T,z,U,q,ne="middle";if(r==="top")E=this.bottom-g,C=this._getXAxisLabelAlignment();else if(r==="bottom")E=this.top+g,C=this._getXAxisLabelAlignment();else if(r==="left"){const re=this._getYAxisLabelAlignment(f);C=re.textAlign,S=re.x}else if(r==="right"){const re=this._getYAxisLabelAlignment(f);C=re.textAlign,S=re.x}else if(n==="x"){if(r==="center")E=(t.top+t.bottom)/2+p;else if(pe(r)){const re=Object.keys(r)[0],de=r[re];E=this.chart.scales[re].getPixelForValue(de)+p}C=this._getXAxisLabelAlignment()}else if(n==="y"){if(r==="center")S=(t.left+t.right)/2-p;else if(pe(r)){const re=Object.keys(r)[0],de=r[re];S=this.chart.scales[re].getPixelForValue(de)}C=this._getYAxisLabelAlignment(f).textAlign}n==="y"&&(l==="start"?ne="top":l==="end"&&(ne="bottom"));const he=this._getLabelSizes();for(x=0,y=a.length;x<y;++x){b=a[x],k=b.label;const re=o.setContext(this.getContext(x));j=this.getPixelForTick(x)+o.labelOffset,T=this._resolveTickFontOptions(x),z=T.lineHeight,U=Le(k)?k.length:1;const de=U/2,ae=re.color,B=re.textStrokeColor,Y=re.textStrokeWidth;let Q=C;s?(S=j,C==="inner"&&(x===y-1?Q=this.options.reverse?"left":"right":x===0?Q=this.options.reverse?"right":"left":Q="center"),r==="top"?c==="near"||m!==0?q=-U*z+z/2:c==="center"?q=-he.highest.height/2-de*z+z:q=-he.highest.height+z/2:c==="near"||m!==0?q=z/2:c==="center"?q=he.highest.height/2-de*z:q=he.highest.height-U*z,d&&(q*=-1),m!==0&&!re.showLabelBackdrop&&(S+=z/2*Math.sin(m))):(E=j,q=(1-U)*z/2);let le;if(re.showLabelBackdrop){const se=Tt(re.backdropPadding),He=he.heights[x],ye=he.widths[x];let _e=q-se.top,we=0-se.left;switch(ne){case"middle":_e-=He/2;break;case"bottom":_e-=He;break}switch(C){case"center":we-=ye/2;break;case"right":we-=ye;break;case"inner":x===y-1?we-=ye:x>0&&(we-=ye/2);break}le={left:we,top:_e,width:ye+se.width,height:He+se.height,color:re.backdropColor}}v.push({label:k,font:T,textOffset:q,options:{rotation:m,color:ae,strokeColor:B,strokeWidth:Y,textAlign:Q,textBaseline:ne,translation:[S,E],backdrop:le}})}return v}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Tn(this.labelRotation))return t==="top"?"left":"right";let r="center";return n.align==="start"?r="left":n.align==="end"?r="right":n.align==="inner"&&(r="inner"),r}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:i,mirror:r,padding:o}}=this.options,s=this._getLabelSizes(),a=t+o,l=s.widest.width;let c,u;return n==="left"?r?(u=this.right+o,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-a,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?r?(u=this.left+o,i==="near"?c="right":i==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+a,i==="near"?c="left":i==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:i,top:r,width:o,height:s}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(i,r,o,s),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const r=this.ticks.findIndex(o=>o.value===t);return r>=0?n.setContext(this.getContext(r)).lineWidth:0}drawGrid(t){const n=this.options.grid,i=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,s;const a=(l,c,u)=>{!u.width||!u.color||(i.save(),i.lineWidth=u.width,i.strokeStyle=u.color,i.setLineDash(u.borderDash||[]),i.lineDashOffset=u.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(n.display)for(o=0,s=r.length;o<s;++o){const l=r[o];n.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:i,grid:r}}=this,o=i.setContext(this.getContext()),s=i.display?o.width:0;if(!s)return;const a=r.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,d,f;this.isHorizontal()?(c=Sr(t,this.left,s)-s/2,u=Sr(t,this.right,a)+a/2,d=f=l):(d=Sr(t,this.top,s)-s/2,f=Sr(t,this.bottom,a)+a/2,c=u=l),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(c,d),n.lineTo(u,f),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,r=this._computeLabelArea();r&&of(i,r);const o=this.getLabelItems(t);for(const s of o){const a=s.options,l=s.font,c=s.label,u=s.textOffset;Jr(i,c,0,u,l,a)}r&&sf(i)}drawTitle(){const{ctx:t,options:{position:n,title:i,reverse:r}}=this;if(!i.display)return;const o=ct(i.font),s=Tt(i.padding),a=i.align;let l=o.lineHeight/2;n==="bottom"||n==="center"||pe(n)?(l+=s.bottom,Le(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=s.top;const{titleX:c,titleY:u,maxWidth:d,rotation:f}=KB(this,l,n,a);Jr(t,i.text,0,0,o,{color:i.color,maxWidth:d,rotation:f,textAlign:XB(a,n,r),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,i=ue(t.grid&&t.grid.z,-1),r=ue(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==co.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",r=[];let o,s;for(o=0,s=n.length;o<s;++o){const a=n[o];a[i]===this.id&&(!t||a.type===t)&&r.push(a)}return r}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return ct(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class sc{constructor(t,n,i){this.type=t,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let i;JB(n)&&(i=this.register(n));const r=this.items,o=t.id,s=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in r||(r[o]=t,QB(t,s,i),this.override&&Ze.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const n=this.items,i=t.id,r=this.scope;i in n&&delete n[i],r&&i in Ze[r]&&(delete Ze[r][i],this.override&&delete Zr[i])}}function QB(e,t,n){const i=Ka(Object.create(null),[n?Ze.get(n):{},Ze.get(t),e.defaults]);Ze.set(t,i),e.defaultRoutes&&ZB(t,e.defaultRoutes),e.descriptors&&Ze.describe(t,e.descriptors)}function ZB(e,t){Object.keys(t).forEach(n=>{const i=n.split("."),r=i.pop(),o=[e].concat(i).join("."),s=t[n].split("."),a=s.pop(),l=s.join(".");Ze.route(o,r,l,a)})}function JB(e){return"id"in e&&"defaults"in e}class qB{constructor(){this.controllers=new sc(Rn,"datasets",!0),this.elements=new sc(Ti,"elements"),this.plugins=new sc(Object,"plugins"),this.scales=new sc(co,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,i){[...n].forEach(r=>{const o=i||this._getRegistryForType(r);i||o.isForType(r)||o===this.plugins&&r.id?this._exec(t,o,r):Ce(r,s=>{const a=i||this._getRegistryForType(s);this._exec(t,a,s)})})}_exec(t,n,i){const r=N0(t);Oe(i["before"+r],[],i),n[t](i),Oe(i["after"+r],[],i)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(t))return i}return this.plugins}_get(t,n,i){const r=n.get(t);if(r===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return r}}var In=new qB;class eW{constructor(){this._init=[]}notify(t,n,i,r){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=r?this._descriptors(t).filter(r):this._descriptors(t),s=this._notify(o,t,n,i);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,n,i,r){r=r||{};for(const o of t){const s=o.plugin,a=s[i],l=[n,r,o.options];if(Oe(a,l,s)===!1&&r.cancelable)return!1}return!0}invalidate(){be(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const i=t&&t.config,r=ue(i.options&&i.options.plugins,{}),o=tW(i);return r===!1&&!n?[]:iW(t,o,r,n)}_notifyStateChanges(t){const n=this._oldCache||[],i=this._cache,r=(o,s)=>o.filter(a=>!s.some(l=>a.plugin.id===l.plugin.id));this._notify(r(n,i),t,"stop"),this._notify(r(i,n),t,"start")}}function tW(e){const t={},n=[],i=Object.keys(In.plugins.items);for(let o=0;o<i.length;o++)n.push(In.getPlugin(i[o]));const r=e.plugins||[];for(let o=0;o<r.length;o++){const s=r[o];n.indexOf(s)===-1&&(n.push(s),t[s.id]=!0)}return{plugins:n,localIds:t}}function nW(e,t){return!t&&e===!1?null:e===!0?{}:e}function iW(e,{plugins:t,localIds:n},i,r){const o=[],s=e.getContext();for(const a of t){const l=a.id,c=nW(i[l],r);c!==null&&o.push({plugin:a,options:rW(e.config,{plugin:a,local:n[l]},c,s)})}return o}function rW(e,{plugin:t,local:n},i,r){const o=e.pluginScopeKeys(t),s=e.getOptionScopes(i,o);return n&&t.defaults&&s.push(t.defaults),e.createResolver(s,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Om(e,t){const n=Ze.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function oW(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function sW(e,t){return e===t?"_index_":"_value_"}function hb(e){if(e==="x"||e==="y"||e==="r")return e}function aW(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Mm(e,...t){if(hb(e))return e;for(const n of t){const i=n.axis||aW(n.position)||e.length>1&&hb(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function pb(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function lW(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(n.length)return pb(e,"x",n[0])||pb(e,"y",n[0])}return{}}function cW(e,t){const n=Zr[e.type]||{scales:{}},i=t.scales||{},r=Om(e.type,t),o=Object.create(null);return Object.keys(i).forEach(s=>{const a=i[s];if(!pe(a))return console.error(`Invalid scale configuration for scale: ${s}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${s}`);const l=Mm(s,a,lW(s,e),Ze.scales[a.type]),c=sW(l,r),u=n.scales||{};o[s]=fa(Object.create(null),[{axis:l},a,u[l],u[c]])}),e.data.datasets.forEach(s=>{const a=s.type||e.type,l=s.indexAxis||Om(a,t),u=(Zr[a]||{}).scales||{};Object.keys(u).forEach(d=>{const f=oW(d,l),p=s[f+"AxisID"]||f;o[p]=o[p]||Object.create(null),fa(o[p],[{axis:f},i[p],u[d]])})}),Object.keys(o).forEach(s=>{const a=o[s];fa(a,[Ze.scales[a.type],Ze.scale])}),o}function yC(e){const t=e.options||(e.options={});t.plugins=ue(t.plugins,{}),t.scales=cW(e,t)}function vC(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function uW(e){return e=e||{},e.data=vC(e.data),yC(e),e}const mb=new Map,bC=new Set;function ac(e,t){let n=mb.get(e);return n||(n=t(),mb.set(e,n),bC.add(n)),n}const Ws=(e,t,n)=>{const i=hr(t,n);i!==void 0&&e.add(i)};class dW{constructor(t){this._config=uW(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=vC(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),yC(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ac(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return ac(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return ac(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,i=this.type;return ac(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const i=this._scopeCache;let r=i.get(t);return(!r||n)&&(r=new Map,i.set(t,r)),r}getOptionScopes(t,n,i){const{options:r,type:o}=this,s=this._cachedScopes(t,i),a=s.get(n);if(a)return a;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(d=>Ws(l,t,d))),u.forEach(d=>Ws(l,r,d)),u.forEach(d=>Ws(l,Zr[o]||{},d)),u.forEach(d=>Ws(l,Ze,d)),u.forEach(d=>Ws(l,Tm,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),bC.has(n)&&s.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,Zr[n]||{},Ze.datasets[n]||{},{type:n},Ze,Tm]}resolveNamedOptions(t,n,i,r=[""]){const o={$shared:!0},{resolver:s,subPrefixes:a}=gb(this._resolverCache,t,r);let l=s;if(hW(s,n)){o.$shared=!1,i=pr(i)?i():i;const c=this.createResolver(t,i,a);l=as(s,i,c)}for(const c of n)o[c]=l[c];return o}createResolver(t,n,i=[""],r){const{resolver:o}=gb(this._resolverCache,t,i);return pe(n)?as(o,n,void 0,r):o}}function gb(e,t,n){let i=e.get(t);i||(i=new Map,e.set(t,i));const r=n.join();let o=i.get(r);return o||(o={resolver:B0(t,n),subPrefixes:n.filter(a=>!a.toLowerCase().includes("hover"))},i.set(r,o)),o}const fW=e=>pe(e)&&Object.getOwnPropertyNames(e).some(t=>pr(e[t]));function hW(e,t){const{isScriptable:n,isIndexable:i}=q4(e);for(const r of t){const o=n(r),s=i(r),a=(s||o)&&e[r];if(o&&(pr(a)||fW(a))||s&&Le(a))return!0}return!1}var pW="4.4.1";const mW=["top","bottom","left","right","chartArea"];function xb(e,t){return e==="top"||e==="bottom"||mW.indexOf(e)===-1&&t==="x"}function yb(e,t){return function(n,i){return n[e]===i[e]?n[t]-i[t]:n[e]-i[e]}}function vb(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Oe(n&&n.onComplete,[e],t)}function gW(e){const t=e.chart,n=t.options.animation;Oe(n&&n.onProgress,[e],t)}function wC(e){return V0()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Zc={},bb=e=>{const t=wC(e);return Object.values(Zc).filter(n=>n.canvas===t).pop()};function xW(e,t,n){const i=Object.keys(e);for(const r of i){const o=+r;if(o>=t){const s=e[r];delete e[r],(n>0||o>t)&&(e[o+n]=s)}}}function yW(e,t,n,i){return!n||e.type==="mouseout"?null:i?t:e}function lc(e,t,n){return e.options.clip?e[n]:t[n]}function vW(e,t){const{xScale:n,yScale:i}=e;return n&&i?{left:lc(n,t,"left"),right:lc(n,t,"right"),top:lc(i,t,"top"),bottom:lc(i,t,"bottom")}:t}var Mi;let vs=(Mi=class{static register(...t){In.add(...t),wb()}static unregister(...t){In.remove(...t),wb()}constructor(t,n){const i=this.config=new dW(n),r=wC(t),o=bb(r);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const s=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||LB(r)),this.platform.updateConfig(i);const a=this.platform.acquireContext(r,s.aspectRatio),l=a&&a.canvas,c=l&&l.height,u=l&&l.width;if(this.id=wI(),this.ctx=a,this.canvas=l,this.width=u,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new eW,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=FI(d=>this.update(d),s.resizeDelay||0),this._dataChanges=[],Zc[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}oi.listen(this,"complete",vb),oi.listen(this,"progress",gW),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:i,height:r,_aspectRatio:o}=this;return be(t)?n&&o?o:r?i/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return In}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Uv(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Iv(this.canvas,this.ctx),this}stop(){return oi.stop(this),this}resize(t,n){oi.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const i=this.options,r=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(r,t,n,o),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Uv(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),Oe(i.onResize,[this,s],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Ce(n,(i,r)=>{i.id=r})}buildOrUpdateScales(){const t=this.options,n=t.scales,i=this.scales,r=Object.keys(i).reduce((s,a)=>(s[a]=!1,s),{});let o=[];n&&(o=o.concat(Object.keys(n).map(s=>{const a=n[s],l=Mm(s,a),c=l==="r",u=l==="x";return{options:a,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Ce(o,s=>{const a=s.options,l=a.id,c=Mm(l,a),u=ue(a.type,s.dtype);(a.position===void 0||xb(a.position,c)!==xb(s.dposition))&&(a.position=s.dposition),r[l]=!0;let d=null;if(l in i&&i[l].type===u)d=i[l];else{const f=In.getScale(u);d=new f({id:l,type:u,ctx:this.ctx,chart:this}),i[d.id]=d}d.init(a,t)}),Ce(r,(s,a)=>{s||delete i[a]}),Ce(i,s=>{Et.configure(this,s,s.options),Et.addBox(this,s)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,i=t.length;if(t.sort((r,o)=>r.index-o.index),i>n){for(let r=n;r<i;++r)this._destroyDatasetMeta(r);t.splice(n,i-n)}this._sortedMetasets=t.slice(0).sort(yb("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((i,r)=>{n.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(r)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let i,r;for(this._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const o=n[i];let s=this.getDatasetMeta(i);const a=o.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(i),s=this.getDatasetMeta(i)),s.type=a,s.indexAxis=o.indexAxis||Om(a,this.options),s.order=o.order||0,s.index=i,s.label=""+o.label,s.visible=this.isDatasetVisible(i),s.controller)s.controller.updateIndex(i),s.controller.linkScales();else{const l=In.getController(a),{datasetElementType:c,dataElementType:u}=Ze.datasets[a];Object.assign(l,{dataElementType:In.getElement(u),datasetElementType:c&&In.getElement(c)}),s.controller=new l(this,i),t.push(s.controller)}}return this._updateMetasets(),t}_resetElements(){Ce(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:d}=this.getDatasetMeta(c),f=!r&&o.indexOf(d)===-1;d.buildOrUpdateElements(f),s=Math.max(+d.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),r||Ce(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(yb("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Ce(this.scales,t=>{Et.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!jv(n,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:r,count:o}of n){const s=i==="_removeElements"?-o:o;xW(t,r,s)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=o=>new Set(t.filter(s=>s[0]===o).map((s,a)=>a+","+s.splice(1).join(","))),r=i(0);for(let o=1;o<n;o++)if(!jv(r,i(o)))return;return Array.from(r).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Et.update(this,this.width,this.height,t);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Ce(this.boxes,r=>{i&&r.position==="chartArea"||(r.configure&&r.configure(),this._layers.push(...r._layers()))},this),this._layers.forEach((r,o)=>{r._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,pr(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const i=this.getDatasetMeta(t),r={meta:i,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",r)!==!1&&(i.controller._update(n),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(oi.has(this)?this.attached&&!oi.running(this)&&oi.start(this):(this.draw(),vb({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:r}=this._resizeBeforeDraw;this._resize(i,r),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,i=[];let r,o;for(r=0,o=n.length;r<o;++r){const s=n[r];(!t||s.visible)&&i.push(s)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,i=t._clip,r=!i.disabled,o=vW(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(r&&of(n,{left:i.left===!1?0:o.left-i.left,right:i.right===!1?this.width:o.right+i.right,top:i.top===!1?0:o.top-i.top,bottom:i.bottom===!1?this.height:o.bottom+i.bottom}),t.controller.draw(),r&&sf(n),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return gi(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,i,r){const o=mB.modes[n];return typeof o=="function"?o(this,t,i,r):[]}getDatasetMeta(t){const n=this.data.datasets[t],i=this._metasets;let r=i.filter(o=>o&&o._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=vr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(t,n){const i=this.getDatasetMeta(t);i.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,i){const r=i?"show":"hide",o=this.getDatasetMeta(t),s=o.controller._resolveAnimations(void 0,r);Qa(n)?(o.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),s.update(o,{visible:i}),this.update(a=>a.datasetIndex===t?r:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),oi.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Iv(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Zc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,i=(o,s)=>{n.addEventListener(this,o,s),t[o]=s},r=(o,s,a)=>{o.offsetX=s,o.offsetY=a,this._eventHandler(o)};Ce(this.options.events,o=>i(o,r))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},r=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let s;const a=()=>{r("attach",a),this.attached=!0,this.resize(),i("resize",o),i("detach",s)};s=()=>{this.attached=!1,r("resize",o),this._stop(),this._resize(0,0),i("attach",a)},n.isAttached(this.canvas)?a():s()}unbindEvents(){Ce(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Ce(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,i){const r=i?"set":"remove";let o,s,a,l;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+r+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){s=t[a];const c=s&&this.getDatasetMeta(s.datasetIndex).controller;c&&c[r+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],i=t.map(({datasetIndex:o,index:s})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[s],index:s}});!Ku(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(t,n,i){return this._plugins.notify(this,t,n,i)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,i){const r=this.options.hover,o=(l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex===d.datasetIndex&&u.index===d.index)),s=o(n,t),a=i?t:o(t,n);s.length&&this.updateHoverStyle(s,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,n){const i={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},r=s=>(s.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,r)===!1)return;const o=this._handleEvent(t,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(o||i.changed)&&this.render(),this}_handleEvent(t,n,i){const{_active:r=[],options:o}=this,s=n,a=this._getActiveElements(t,r,i,s),l=_I(t),c=yW(t,this._lastEvent,i,l);i&&(this._lastEvent=null,Oe(o.onHover,[t,a,this],this),l&&Oe(o.onClick,[t,a,this],this));const u=!Ku(a,r);return(u||n)&&(this._active=a,this._updateHoverStyles(a,r,n)),this._lastEvent=c,u}_getActiveElements(t,n,i,r){if(t.type==="mouseout")return[];if(!i)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,r)}},H(Mi,"defaults",Ze),H(Mi,"instances",Zc),H(Mi,"overrides",Zr),H(Mi,"registry",In),H(Mi,"version",pW),H(Mi,"getChart",bb),Mi);function wb(){return Ce(vs.instances,e=>e._plugins.invalidate())}function bW(e,t,n){const{startAngle:i,pixelMargin:r,x:o,y:s,outerRadius:a,innerRadius:l}=t;let c=r/a;e.beginPath(),e.arc(o,s,a,i-c,n+c),l>r?(c=r/l,e.arc(o,s,l,n+c,i-c,!0)):e.arc(o,s,r,n+qe,i-qe),e.closePath(),e.clip()}function wW(e){return I0(e,["outerStart","outerEnd","innerStart","innerEnd"])}function kW(e,t,n,i){const r=wW(e.options.borderRadius),o=(n-t)/2,s=Math.min(o,i*t/2),a=l=>{const c=(n-Math.min(o,l))*i/2;return ft(l,0,Math.min(o,c))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:ft(r.innerStart,0,s),innerEnd:ft(r.innerEnd,0,s)}}function go(e,t,n,i){return{x:n+e*Math.cos(t),y:i+e*Math.sin(t)}}function td(e,t,n,i,r,o){const{x:s,y:a,startAngle:l,pixelMargin:c,innerRadius:u}=t,d=Math.max(t.outerRadius+i+n-c,0),f=u>0?u+i+n+c:0;let p=0;const g=r-l;if(i){const re=u>0?u-i:0,de=d>0?d-i:0,ae=(re+de)/2,B=ae!==0?g*ae/(ae+i):g;p=(g-B)/2}const m=Math.max(.001,g*d-n/Ie)/d,v=(g-m)/2,x=l+v+p,y=r-v-p,{outerStart:b,outerEnd:k,innerStart:S,innerEnd:E}=kW(t,f,d,y-x),C=d-b,j=d-k,T=x+b/C,z=y-k/j,U=f+S,q=f+E,ne=x+S/U,he=y-E/q;if(e.beginPath(),o){const re=(T+z)/2;if(e.arc(s,a,d,T,re),e.arc(s,a,d,re,z),k>0){const Y=go(j,z,s,a);e.arc(Y.x,Y.y,k,z,y+qe)}const de=go(q,y,s,a);if(e.lineTo(de.x,de.y),E>0){const Y=go(q,he,s,a);e.arc(Y.x,Y.y,E,y+qe,he+Math.PI)}const ae=(y-E/f+(x+S/f))/2;if(e.arc(s,a,f,y-E/f,ae,!0),e.arc(s,a,f,ae,x+S/f,!0),S>0){const Y=go(U,ne,s,a);e.arc(Y.x,Y.y,S,ne+Math.PI,x-qe)}const B=go(C,x,s,a);if(e.lineTo(B.x,B.y),b>0){const Y=go(C,T,s,a);e.arc(Y.x,Y.y,b,x-qe,T)}}else{e.moveTo(s,a);const re=Math.cos(T)*d+s,de=Math.sin(T)*d+a;e.lineTo(re,de);const ae=Math.cos(z)*d+s,B=Math.sin(z)*d+a;e.lineTo(ae,B)}e.closePath()}function SW(e,t,n,i,r){const{fullCircles:o,startAngle:s,circumference:a}=t;let l=t.endAngle;if(o){td(e,t,n,i,l,r);for(let c=0;c<o;++c)e.fill();isNaN(a)||(l=s+(a%ze||ze))}return td(e,t,n,i,l,r),e.fill(),l}function CW(e,t,n,i,r){const{fullCircles:o,startAngle:s,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:d,borderDashOffset:f}=l,p=l.borderAlign==="inner";if(!c)return;e.setLineDash(d||[]),e.lineDashOffset=f,p?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let g=t.endAngle;if(o){td(e,t,n,i,g,r);for(let m=0;m<o;++m)e.stroke();isNaN(a)||(g=s+(a%ze||ze))}p&&bW(e,t,g),o||(td(e,t,n,i,g,r),e.stroke())}class Fo extends Ti{constructor(n){super();H(this,"circumference");H(this,"endAngle");H(this,"fullCircles");H(this,"innerRadius");H(this,"outerRadius");H(this,"pixelMargin");H(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,r){const o=this.getProps(["x","y"],r),{angle:s,distance:a}=V4(o,{x:n,y:i}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:d,circumference:f}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],r),p=(this.options.spacing+this.options.borderWidth)/2,m=ue(f,c-l)>=ze||Za(s,l,c),v=pi(a,u+p,d+p);return m&&v}getCenterPoint(n){const{x:i,y:r,startAngle:o,endAngle:s,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,d=(o+s)/2,f=(a+l+u+c)/2;return{x:i+Math.cos(d)*f,y:r+Math.sin(d)*f}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:r}=this,o=(i.offset||0)/4,s=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=r>ze?Math.floor(r/ze):0,r===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(Ie,r||0)),u=o*c;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,SW(n,this,u,s,a),CW(n,this,u,s,a),n.restore()}}H(Fo,"id","arc"),H(Fo,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),H(Fo,"defaultRoutes",{backgroundColor:"backgroundColor"}),H(Fo,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function kC(e,t,n=t){e.lineCap=ue(n.borderCapStyle,t.borderCapStyle),e.setLineDash(ue(n.borderDash,t.borderDash)),e.lineDashOffset=ue(n.borderDashOffset,t.borderDashOffset),e.lineJoin=ue(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=ue(n.borderWidth,t.borderWidth),e.strokeStyle=ue(n.borderColor,t.borderColor)}function AW(e,t,n){e.lineTo(n.x,n.y)}function EW(e){return e.stepped?KI:e.tension||e.cubicInterpolationMode==="monotone"?QI:AW}function SC(e,t,n={}){const i=e.length,{start:r=0,end:o=i-1}=n,{start:s,end:a}=t,l=Math.max(r,s),c=Math.min(o,a),u=r<s&&o<s||r>a&&o>a;return{count:i,start:l,loop:t.loop,ilen:c<l&&!u?i+c-l:c-l}}function _W(e,t,n,i){const{points:r,options:o}=t,{count:s,start:a,loop:l,ilen:c}=SC(r,n,i),u=EW(o);let{move:d=!0,reverse:f}=i||{},p,g,m;for(p=0;p<=c;++p)g=r[(a+(f?c-p:p))%s],!g.skip&&(d?(e.moveTo(g.x,g.y),d=!1):u(e,m,g,f,o.stepped),m=g);return l&&(g=r[(a+(f?c:0))%s],u(e,m,g,f,o.stepped)),!!l}function TW(e,t,n,i){const r=t.points,{count:o,start:s,ilen:a}=SC(r,n,i),{move:l=!0,reverse:c}=i||{};let u=0,d=0,f,p,g,m,v,x;const y=k=>(s+(c?a-k:k))%o,b=()=>{m!==v&&(e.lineTo(u,v),e.lineTo(u,m),e.lineTo(u,x))};for(l&&(p=r[y(0)],e.moveTo(p.x,p.y)),f=0;f<=a;++f){if(p=r[y(f)],p.skip)continue;const k=p.x,S=p.y,E=k|0;E===g?(S<m?m=S:S>v&&(v=S),u=(d*u+k)/++d):(b(),e.lineTo(k,S),g=E,d=0,m=v=S),x=S}b()}function Rm(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?TW:_W}function PW(e){return e.stepped?T9:e.tension||e.cubicInterpolationMode==="monotone"?P9:Or}function jW(e,t,n,i){let r=t._path;r||(r=t._path=new Path2D,t.path(r,n,i)&&r.closePath()),kC(e,t.options),e.stroke(r)}function OW(e,t,n,i){const{segments:r,options:o}=t,s=Rm(t);for(const a of r)kC(e,o,a.style),e.beginPath(),s(e,t,a,{start:n,end:n+i-1})&&e.closePath(),e.stroke()}const MW=typeof Path2D=="function";function RW(e,t,n,i){MW&&!t.options.segment?jW(e,t,n,i):OW(e,t,n,i)}class Xi extends Ti{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const r=i.spanGaps?this._loop:this._fullLoop;b9(this._points,i,t,r,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=D9(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,i=t.length;return i&&n[t[i-1].end]}interpolate(t,n){const i=this.options,r=t[n],o=this.points,s=cC(this,{property:n,start:r,end:r});if(!s.length)return;const a=[],l=PW(i);let c,u;for(c=0,u=s.length;c<u;++c){const{start:d,end:f}=s[c],p=o[d],g=o[f];if(p===g){a.push(p);continue}const m=Math.abs((r-p[n])/(g[n]-p[n])),v=l(p,g,m,i.stepped);v[n]=t[n],a.push(v)}return a.length===1?a[0]:a}pathSegment(t,n,i){return Rm(this)(t,this,n,i)}path(t,n,i){const r=this.segments,o=Rm(this);let s=this._loop;n=n||0,i=i||this.points.length-n;for(const a of r)s&=o(t,this,a,{start:n,end:n+i-1});return!!s}draw(t,n,i,r){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),RW(t,this,i,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}H(Xi,"id","line"),H(Xi,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),H(Xi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),H(Xi,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function kb(e,t,n,i){const r=e.options,{[n]:o}=e.getProps([n],i);return Math.abs(t-o)<r.radius+r.hitRadius}class Jc extends Ti{constructor(n){super();H(this,"parsed");H(this,"skip");H(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,r){const o=this.options,{x:s,y:a}=this.getProps(["x","y"],r);return Math.pow(n-s,2)+Math.pow(i-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,i){return kb(this,n,"x",i)}inYRange(n,i){return kb(this,n,"y",i)}getCenterPoint(n){const{x:i,y:r}=this.getProps(["x","y"],n);return{x:i,y:r}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const r=i&&n.borderWidth||0;return(i+r)*2}draw(n,i){const r=this.options;this.skip||r.radius<.1||!gi(this,i,this.size(r)/2)||(n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.fillStyle=r.backgroundColor,Pm(n,r,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}H(Jc,"id","point"),H(Jc,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),H(Jc,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function CC(e,t){const{x:n,y:i,base:r,width:o,height:s}=e.getProps(["x","y","base","width","height"],t);let a,l,c,u,d;return e.horizontal?(d=s/2,a=Math.min(n,r),l=Math.max(n,r),c=i-d,u=i+d):(d=o/2,a=n-d,l=n+d,c=Math.min(i,r),u=Math.max(i,r)),{left:a,top:c,right:l,bottom:u}}function Ki(e,t,n,i){return e?0:ft(t,n,i)}function NW(e,t,n){const i=e.options.borderWidth,r=e.borderSkipped,o=J4(i);return{t:Ki(r.top,o.top,0,n),r:Ki(r.right,o.right,0,t),b:Ki(r.bottom,o.bottom,0,n),l:Ki(r.left,o.left,0,t)}}function DW(e,t,n){const{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),r=e.options.borderRadius,o=Wr(r),s=Math.min(t,n),a=e.borderSkipped,l=i||pe(r);return{topLeft:Ki(!l||a.top||a.left,o.topLeft,0,s),topRight:Ki(!l||a.top||a.right,o.topRight,0,s),bottomLeft:Ki(!l||a.bottom||a.left,o.bottomLeft,0,s),bottomRight:Ki(!l||a.bottom||a.right,o.bottomRight,0,s)}}function LW(e){const t=CC(e),n=t.right-t.left,i=t.bottom-t.top,r=NW(e,n/2,i/2),o=DW(e,n/2,i/2);return{outer:{x:t.left,y:t.top,w:n,h:i,radius:o},inner:{x:t.left+r.l,y:t.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,o.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(r.b,r.r))}}}}function jh(e,t,n,i){const r=t===null,o=n===null,a=e&&!(r&&o)&&CC(e,i);return a&&(r||pi(t,a.left,a.right))&&(o||pi(n,a.top,a.bottom))}function FW(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function zW(e,t){e.rect(t.x,t.y,t.w,t.h)}function Oh(e,t,n={}){const i=e.x!==n.x?-t:0,r=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-i,s=(e.y+e.h!==n.y+n.h?t:0)-r;return{x:e.x+i,y:e.y+r,w:e.w+o,h:e.h+s,radius:e.radius}}class va extends Ti{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:i,backgroundColor:r}}=this,{inner:o,outer:s}=LW(this),a=FW(s.radius)?Ja:zW;t.save(),(s.w!==o.w||s.h!==o.h)&&(t.beginPath(),a(t,Oh(s,n,o)),t.clip(),a(t,Oh(o,-n,s)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Oh(o,n)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,n,i){return jh(this,t,n,i)}inXRange(t,n){return jh(this,t,null,n)}inYRange(t,n){return jh(this,null,t,n)}getCenterPoint(t){const{x:n,y:i,base:r,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+r)/2:n,y:o?i:(i+r)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}H(va,"id","bar"),H(va,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),H(va,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var IW=Object.freeze({__proto__:null,ArcElement:Fo,BarElement:va,LineElement:Xi,PointElement:Jc});const Nm=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Sb=Nm.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function AC(e){return Nm[e%Nm.length]}function EC(e){return Sb[e%Sb.length]}function BW(e,t){return e.borderColor=AC(t),e.backgroundColor=EC(t),++t}function WW(e,t){return e.backgroundColor=e.data.map(()=>AC(t++)),t}function UW(e,t){return e.backgroundColor=e.data.map(()=>EC(t++)),t}function VW(e){let t=0;return(n,i)=>{const r=e.getDatasetMeta(i).controller;r instanceof Yi?t=WW(n,t):r instanceof ya?t=UW(n,t):r&&(t=BW(n,t))}}function Cb(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function HW(e){return e&&(e.borderColor||e.backgroundColor)}var $W={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:i},options:r}=e.config,{elements:o}=r;if(!n.forceOverride&&(Cb(i)||HW(r)||o&&Cb(o)))return;const s=VW(e);i.forEach(s)}};function GW(e,t,n,i,r){const o=r.samples||i;if(o>=n)return e.slice(t,t+n);const s=[],a=(n-2)/(o-2);let l=0;const c=t+n-1;let u=t,d,f,p,g,m;for(s[l++]=e[u],d=0;d<o-2;d++){let v=0,x=0,y;const b=Math.floor((d+1)*a)+1+t,k=Math.min(Math.floor((d+2)*a)+1,n)+t,S=k-b;for(y=b;y<k;y++)v+=e[y].x,x+=e[y].y;v/=S,x/=S;const E=Math.floor(d*a)+1+t,C=Math.min(Math.floor((d+1)*a)+1,n)+t,{x:j,y:T}=e[u];for(p=g=-1,y=E;y<C;y++)g=.5*Math.abs((j-v)*(e[y].y-T)-(j-e[y].x)*(x-T)),g>p&&(p=g,f=e[y],m=y);s[l++]=f,u=m}return s[l++]=e[c],s}function YW(e,t,n,i){let r=0,o=0,s,a,l,c,u,d,f,p,g,m;const v=[],x=t+n-1,y=e[t].x,k=e[x].x-y;for(s=t;s<t+n;++s){a=e[s],l=(a.x-y)/k*i,c=a.y;const S=l|0;if(S===u)c<g?(g=c,d=s):c>m&&(m=c,f=s),r=(o*r+a.x)/++o;else{const E=s-1;if(!be(d)&&!be(f)){const C=Math.min(d,f),j=Math.max(d,f);C!==p&&C!==E&&v.push({...e[C],x:r}),j!==p&&j!==E&&v.push({...e[j],x:r})}s>0&&E!==p&&v.push(e[E]),v.push(a),u=S,o=0,g=m=c,d=f=p=s}}return v}function _C(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Ab(e){e.data.datasets.forEach(t=>{_C(t)})}function XW(e,t){const n=t.length;let i=0,r;const{iScale:o}=e,{min:s,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(i=ft(mi(t,o.axis,s).lo,0,n-1)),c?r=ft(mi(t,o.axis,a).hi+1,i,n)-i:r=n-i,{start:i,count:r}}var KW={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Ab(e);return}const i=e.width;e.data.datasets.forEach((r,o)=>{const{_data:s,indexAxis:a}=r,l=e.getDatasetMeta(o),c=s||r.data;if(Ks([a,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:d,count:f}=XW(l,c);const p=n.threshold||4*i;if(f<=p){_C(r);return}be(s)&&(r._data=c,delete r.data,Object.defineProperty(r,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let g;switch(n.algorithm){case"lttb":g=GW(c,d,f,i,n);break;case"min-max":g=YW(c,d,f,i);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}r._decimated=g})},destroy(e){Ab(e)}};function QW(e,t,n){const i=e.segments,r=e.points,o=t.points,s=[];for(const a of i){let{start:l,end:c}=a;c=G0(l,c,r);const u=Dm(n,r[l],r[c],a.loop);if(!t.segments){s.push({source:a,target:u,start:r[l],end:r[c]});continue}const d=cC(t,u);for(const f of d){const p=Dm(n,o[f.start],o[f.end],f.loop),g=lC(a,r,p);for(const m of g)s.push({source:m,target:f,start:{[n]:Eb(u,p,"start",Math.max)},end:{[n]:Eb(u,p,"end",Math.min)}})}}return s}function Dm(e,t,n,i){if(i)return;let r=t[e],o=n[e];return e==="angle"&&(r=Yt(r),o=Yt(o)),{property:e,start:r,end:o}}function ZW(e,t){const{x:n=null,y:i=null}=e||{},r=t.points,o=[];return t.segments.forEach(({start:s,end:a})=>{a=G0(s,a,r);const l=r[s],c=r[a];i!==null?(o.push({x:l.x,y:i}),o.push({x:c.x,y:i})):n!==null&&(o.push({x:n,y:l.y}),o.push({x:n,y:c.y}))}),o}function G0(e,t,n){for(;t>e;t--){const i=n[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Eb(e,t,n,i){return e&&t?i(e[n],t[n]):e?e[n]:t?t[n]:0}function TC(e,t){let n=[],i=!1;return Le(e)?(i=!0,n=e):n=ZW(e,t),n.length?new Xi({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function _b(e){return e&&e.fill!==!1}function JW(e,t,n){let r=e[t].fill;const o=[t];let s;if(!n)return r;for(;r!==!1&&o.indexOf(r)===-1;){if(!Qe(r))return r;if(s=e[r],!s)return!1;if(s.visible)return r;o.push(r),r=s.fill}return!1}function qW(e,t,n){const i=i7(e);if(pe(i))return isNaN(i.value)?!1:i;let r=parseFloat(i);return Qe(r)&&Math.floor(r)===r?e7(i[0],t,r,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function e7(e,t,n,i){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=i?!1:n}function t7(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:pe(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function n7(e,t,n){let i;return e==="start"?i=n:e==="end"?i=t.options.reverse?t.min:t.max:pe(e)?i=e.value:i=t.getBaseValue(),i}function i7(e){const t=e.options,n=t.fill;let i=ue(n&&n.target,n);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function r7(e){const{scale:t,index:n,line:i}=e,r=[],o=i.segments,s=i.points,a=o7(t,n);a.push(TC({x:null,y:t.bottom},i));for(let l=0;l<o.length;l++){const c=o[l];for(let u=c.start;u<=c.end;u++)s7(r,s[u],a)}return new Xi({points:r,options:{}})}function o7(e,t){const n=[],i=e.getMatchingVisibleMetas("line");for(let r=0;r<i.length;r++){const o=i[r];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function s7(e,t,n){const i=[];for(let r=0;r<n.length;r++){const o=n[r],{first:s,last:a,point:l}=a7(o,t,"x");if(!(!l||s&&a)){if(s)i.unshift(l);else if(e.push(l),!a)break}}e.push(...i)}function a7(e,t,n){const i=e.interpolate(t,n);if(!i)return{};const r=i[n],o=e.segments,s=e.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const u=o[c],d=s[u.start][n],f=s[u.end][n];if(pi(r,d,f)){a=r===d,l=r===f;break}}return{first:a,last:l,point:i}}class PC{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,i){const{x:r,y:o,radius:s}=this;return n=n||{start:0,end:ze},t.arc(r,o,s,n.end,n.start,!0),!i.bounds}interpolate(t){const{x:n,y:i,radius:r}=this,o=t.angle;return{x:n+Math.cos(o)*r,y:i+Math.sin(o)*r,angle:o}}}function l7(e){const{chart:t,fill:n,line:i}=e;if(Qe(n))return c7(t,n);if(n==="stack")return r7(e);if(n==="shape")return!0;const r=u7(e);return r instanceof PC?r:TC(r,i)}function c7(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function u7(e){return(e.scale||{}).getPointPositionForValue?f7(e):d7(e)}function d7(e){const{scale:t={},fill:n}=e,i=t7(n,t);if(Qe(i)){const r=t.isHorizontal();return{x:r?i:null,y:r?null:i}}return null}function f7(e){const{scale:t,fill:n}=e,i=t.options,r=t.getLabels().length,o=i.reverse?t.max:t.min,s=n7(n,t,o),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,o);return new PC({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(s)})}for(let l=0;l<r;++l)a.push(t.getPointPositionForValue(l,s));return a}function Mh(e,t,n){const i=l7(t),{line:r,scale:o,axis:s}=t,a=r.options,l=a.fill,c=a.backgroundColor,{above:u=c,below:d=c}=l||{};i&&r.points.length&&(of(e,n),h7(e,{line:r,target:i,above:u,below:d,area:n,scale:o,axis:s}),sf(e))}function h7(e,t){const{line:n,target:i,above:r,below:o,area:s,scale:a}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&o!==r&&(Tb(e,i,s.top),Pb(e,{line:n,target:i,color:r,scale:a,property:l}),e.restore(),e.save(),Tb(e,i,s.bottom)),Pb(e,{line:n,target:i,color:o,scale:a,property:l}),e.restore()}function Tb(e,t,n){const{segments:i,points:r}=t;let o=!0,s=!1;e.beginPath();for(const a of i){const{start:l,end:c}=a,u=r[l],d=r[G0(l,c,r)];o?(e.moveTo(u.x,u.y),o=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),s=!!t.pathSegment(e,a,{move:s}),s?e.closePath():e.lineTo(d.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function Pb(e,t){const{line:n,target:i,property:r,color:o,scale:s}=t,a=QW(n,i,r);for(const{source:l,target:c,start:u,end:d}of a){const{style:{backgroundColor:f=o}={}}=l,p=i!==!0;e.save(),e.fillStyle=f,p7(e,s,p&&Dm(r,u,d)),e.beginPath();const g=!!n.pathSegment(e,l);let m;if(p){g?e.closePath():jb(e,i,d,r);const v=!!i.pathSegment(e,c,{move:g,reverse:!0});m=g&&v,m||jb(e,i,u,r)}e.closePath(),e.fill(m?"evenodd":"nonzero"),e.restore()}}function p7(e,t,n){const{top:i,bottom:r}=t.chart.chartArea,{property:o,start:s,end:a}=n||{};o==="x"&&(e.beginPath(),e.rect(s,i,a-s,r-i),e.clip())}function jb(e,t,n,i){const r=t.interpolate(n,i);r&&e.lineTo(r.x,r.y)}var m7={id:"filler",afterDatasetsUpdate(e,t,n){const i=(e.data.datasets||[]).length,r=[];let o,s,a,l;for(s=0;s<i;++s)o=e.getDatasetMeta(s),a=o.dataset,l=null,a&&a.options&&a instanceof Xi&&(l={visible:e.isDatasetVisible(s),index:s,fill:qW(a,s,i),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,r.push(l);for(s=0;s<i;++s)l=r[s],!(!l||l.fill===!1)&&(l.fill=JW(r,s,n.propagate))},beforeDraw(e,t,n){const i=n.drawTime==="beforeDraw",r=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let s=r.length-1;s>=0;--s){const a=r[s].$filler;a&&(a.line.updateControlPoints(o,a.axis),i&&a.fill&&Mh(e.ctx,a,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=e.getSortedVisibleDatasetMetas();for(let r=i.length-1;r>=0;--r){const o=i[r].$filler;_b(o)&&Mh(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const i=t.meta.$filler;!_b(i)||n.drawTime!=="beforeDatasetDraw"||Mh(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ob=(e,t)=>{let{boxHeight:n=t,boxWidth:i=t}=e;return e.usePointStyle&&(n=Math.min(n,t),i=e.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(t,n)}},g7=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Mb extends Ti{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,i){this.maxWidth=t,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Oe(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(i=>t.filter(i,this.chart.data))),t.sort&&(n=n.sort((i,r)=>t.sort(i,r,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,r=ct(i.font),o=r.size,s=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Ob(i,o);let c,u;n.font=r.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(s,o,a,l)+10):(u=this.maxHeight,c=this._fitCols(s,r,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,i,r){const{ctx:o,maxWidth:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=r+a;let d=t;o.textAlign="left",o.textBaseline="middle";let f=-1,p=-u;return this.legendItems.forEach((g,m)=>{const v=i+n/2+o.measureText(g.text).width;(m===0||c[c.length-1]+v+2*a>s)&&(d+=u,c[c.length-(m>0?0:1)]=0,p+=u,f++),l[m]={left:0,top:p,row:f,width:v,height:r},c[c.length-1]+=v+a}),d}_fitCols(t,n,i,r){const{ctx:o,maxHeight:s,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=s-t;let d=a,f=0,p=0,g=0,m=0;return this.legendItems.forEach((v,x)=>{const{itemWidth:y,itemHeight:b}=x7(i,n,o,v,r);x>0&&p+b+2*a>u&&(d+=f+a,c.push({width:f,height:p}),g+=f+a,m++,f=p=0),l[x]={left:g,top:p,col:m,width:y,height:b},f=Math.max(f,y),p+=b+a}),d+=f,c.push({width:f,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r},rtl:o}}=this,s=Ho(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ct(i,this.left+r,this.right-this.lineWidths[a]);for(const c of n)a!==c.row&&(a=c.row,l=Ct(i,this.left+r,this.right-this.lineWidths[a])),c.top+=this.top+t+r,c.left=s.leftForLtr(s.x(l),c.width),l+=c.width+r}else{let a=0,l=Ct(i,this.top+t+r,this.bottom-this.columnSizes[a].height);for(const c of n)c.col!==a&&(a=c.col,l=Ct(i,this.top+t+r,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+r,c.left=s.leftForLtr(s.x(c.left),c.width),l+=c.height+r}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;of(t,this),this._draw(),sf(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:i,ctx:r}=this,{align:o,labels:s}=t,a=Ze.color,l=Ho(t.rtl,this.left,this.width),c=ct(s.font),{padding:u}=s,d=c.size,f=d/2;let p;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=c.string;const{boxWidth:g,boxHeight:m,itemHeight:v}=Ob(s,d),x=function(E,C,j){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;r.save();const T=ue(j.lineWidth,1);if(r.fillStyle=ue(j.fillStyle,a),r.lineCap=ue(j.lineCap,"butt"),r.lineDashOffset=ue(j.lineDashOffset,0),r.lineJoin=ue(j.lineJoin,"miter"),r.lineWidth=T,r.strokeStyle=ue(j.strokeStyle,a),r.setLineDash(ue(j.lineDash,[])),s.usePointStyle){const z={radius:m*Math.SQRT2/2,pointStyle:j.pointStyle,rotation:j.rotation,borderWidth:T},U=l.xPlus(E,g/2),q=C+f;Z4(r,z,U,q,s.pointStyleWidth&&g)}else{const z=C+Math.max((d-m)/2,0),U=l.leftForLtr(E,g),q=Wr(j.borderRadius);r.beginPath(),Object.values(q).some(ne=>ne!==0)?Ja(r,{x:U,y:z,w:g,h:m,radius:q}):r.rect(U,z,g,m),r.fill(),T!==0&&r.stroke()}r.restore()},y=function(E,C,j){Jr(r,j.text,E,C+v/2,c,{strikethrough:j.hidden,textAlign:l.textAlign(j.textAlign)})},b=this.isHorizontal(),k=this._computeTitleHeight();b?p={x:Ct(o,this.left+u,this.right-i[0]),y:this.top+u+k,line:0}:p={x:this.left+u,y:Ct(o,this.top+k+u,this.bottom-n[0].height),line:0},oC(this.ctx,t.textDirection);const S=v+u;this.legendItems.forEach((E,C)=>{r.strokeStyle=E.fontColor,r.fillStyle=E.fontColor;const j=r.measureText(E.text).width,T=l.textAlign(E.textAlign||(E.textAlign=s.textAlign)),z=g+f+j;let U=p.x,q=p.y;l.setWidth(this.width),b?C>0&&U+z+u>this.right&&(q=p.y+=S,p.line++,U=p.x=Ct(o,this.left+u,this.right-i[p.line])):C>0&&q+S>this.bottom&&(U=p.x=U+n[p.line].width+u,p.line++,q=p.y=Ct(o,this.top+k+u,this.bottom-n[p.line].height));const ne=l.x(U);if(x(ne,q,E),U=zI(T,U+g+f,b?U+z:this.right,t.rtl),y(l.x(U),q,E),b)p.x+=z+u;else if(typeof E.text!="string"){const he=c.lineHeight;p.y+=jC(E,he)+u}else p.y+=S}),sC(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,i=ct(n.font),r=Tt(n.padding);if(!n.display)return;const o=Ho(t.rtl,this.left,this.width),s=this.ctx,a=n.position,l=i.size/2,c=r.top+l;let u,d=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),u=this.top+c,d=Ct(t.align,d,this.right-f);else{const g=this.columnSizes.reduce((m,v)=>Math.max(m,v.height),0);u=c+Ct(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const p=Ct(a,d,d+f);s.textAlign=o.textAlign(F0(a)),s.textBaseline="middle",s.strokeStyle=n.color,s.fillStyle=n.color,s.font=i.string,Jr(s,n.text,p,u,i)}_computeTitleHeight(){const t=this.options.title,n=ct(t.font),i=Tt(t.padding);return t.display?n.lineHeight+i.height:0}_getLegendItemAt(t,n){let i,r,o;if(pi(t,this.left,this.right)&&pi(n,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(r=o[i],pi(t,r.left,r.left+r.width)&&pi(n,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(t){const n=this.options;if(!b7(t.type,n))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const r=this._hoveredItem,o=g7(r,i);r&&!o&&Oe(n.onLeave,[t,r,this],this),this._hoveredItem=i,i&&!o&&Oe(n.onHover,[t,i,this],this)}else i&&Oe(n.onClick,[t,i,this],this)}}function x7(e,t,n,i,r){const o=y7(i,e,t,n),s=v7(r,i,t.lineHeight);return{itemWidth:o,itemHeight:s}}function y7(e,t,n,i){let r=e.text;return r&&typeof r!="string"&&(r=r.reduce((o,s)=>o.length>s.length?o:s)),t+n.size/2+i.measureText(r).width}function v7(e,t,n){let i=e;return typeof t.text!="string"&&(i=jC(t,n)),i}function jC(e,t){const n=e.text?e.text.length:0;return t*n}function b7(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Y0={id:"legend",_element:Mb,start(e,t,n){const i=e.legend=new Mb({ctx:e.ctx,options:n,chart:e});Et.configure(e,i,n),Et.addBox(e,i)},stop(e){Et.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const i=e.legend;Et.configure(e,i,n),i.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const i=t.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),t.hidden=!0):(r.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:o,useBorderRadius:s,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Tt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:r||c.textAlign,borderRadius:s&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class X0 extends Ti{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const r=Le(i.text)?i.text.length:1;this._padding=Tt(i.padding);const o=r*ct(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:i,bottom:r,right:o,options:s}=this,a=s.align;let l=0,c,u,d;return this.isHorizontal()?(u=Ct(a,i,o),d=n+t,c=o-i):(s.position==="left"?(u=i+t,d=Ct(a,r,n),l=Ie*-.5):(u=o-t,d=Ct(a,n,r),l=Ie*.5),c=r-n),{titleX:u,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const i=ct(n.font),o=i.lineHeight/2+this._padding.top,{titleX:s,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);Jr(t,n.text,0,0,i,{color:n.color,maxWidth:l,rotation:c,textAlign:F0(n.align),textBaseline:"middle",translation:[s,a]})}}function w7(e,t){const n=new X0({ctx:e.ctx,options:t,chart:e});Et.configure(e,n,t),Et.addBox(e,n),e.titleBlock=n}var k7={id:"title",_element:X0,start(e,t,n){w7(e,n)},stop(e){const t=e.titleBlock;Et.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const i=e.titleBlock;Et.configure(e,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const cc=new WeakMap;var S7={id:"subtitle",start(e,t,n){const i=new X0({ctx:e.ctx,options:n,chart:e});Et.configure(e,i,n),Et.addBox(e,i),cc.set(e,i)},stop(e){Et.removeBox(e,cc.get(e)),cc.delete(e)},beforeUpdate(e,t,n){const i=cc.get(e);Et.configure(e,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Zs={average(e){if(!e.length)return!1;let t,n,i=0,r=0,o=0;for(t=0,n=e.length;t<n;++t){const s=e[t].element;if(s&&s.hasValue()){const a=s.tooltipPosition();i+=a.x,r+=a.y,++o}}return{x:i/o,y:r/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,i=t.y,r=Number.POSITIVE_INFINITY,o,s,a;for(o=0,s=e.length;o<s;++o){const l=e[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=_m(t,c);u<r&&(r=u,a=l)}}if(a){const l=a.tooltipPosition();n=l.x,i=l.y}return{x:n,y:i}}};function Fn(e,t){return t&&(Le(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function si(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function C7(e,t){const{element:n,datasetIndex:i,index:r}=t,o=e.getDatasetMeta(i).controller,{label:s,value:a}=o.getLabelAndValue(r);return{chart:e,label:s,parsed:o.getParsed(r),raw:e.data.datasets[i].data[r],formattedValue:a,dataset:o.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function Rb(e,t){const n=e.chart.ctx,{body:i,footer:r,title:o}=e,{boxWidth:s,boxHeight:a}=t,l=ct(t.bodyFont),c=ct(t.titleFont),u=ct(t.footerFont),d=o.length,f=r.length,p=i.length,g=Tt(t.padding);let m=g.height,v=0,x=i.reduce((k,S)=>k+S.before.length+S.lines.length+S.after.length,0);if(x+=e.beforeBody.length+e.afterBody.length,d&&(m+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),x){const k=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=p*k+(x-p)*l.lineHeight+(x-1)*t.bodySpacing}f&&(m+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let y=0;const b=function(k){v=Math.max(v,n.measureText(k).width+y)};return n.save(),n.font=c.string,Ce(e.title,b),n.font=l.string,Ce(e.beforeBody.concat(e.afterBody),b),y=t.displayColors?s+2+t.boxPadding:0,Ce(i,k=>{Ce(k.before,b),Ce(k.lines,b),Ce(k.after,b)}),y=0,n.font=u.string,Ce(e.footer,b),n.restore(),v+=g.width,{width:v,height:m}}function A7(e,t){const{y:n,height:i}=t;return n<i/2?"top":n>e.height-i/2?"bottom":"center"}function E7(e,t,n,i){const{x:r,width:o}=i,s=n.caretSize+n.caretPadding;if(e==="left"&&r+o+s>t.width||e==="right"&&r-o-s<0)return!0}function _7(e,t,n,i){const{x:r,width:o}=n,{width:s,chartArea:{left:a,right:l}}=e;let c="center";return i==="center"?c=r<=(a+l)/2?"left":"right":r<=o/2?c="left":r>=s-o/2&&(c="right"),E7(c,e,t,n)&&(c="center"),c}function Nb(e,t,n){const i=n.yAlign||t.yAlign||A7(e,n);return{xAlign:n.xAlign||t.xAlign||_7(e,t,n,i),yAlign:i}}function T7(e,t){let{x:n,width:i}=e;return t==="right"?n-=i:t==="center"&&(n-=i/2),n}function P7(e,t,n){let{y:i,height:r}=e;return t==="top"?i+=n:t==="bottom"?i-=r+n:i-=r/2,i}function Db(e,t,n,i){const{caretSize:r,caretPadding:o,cornerRadius:s}=e,{xAlign:a,yAlign:l}=n,c=r+o,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Wr(s);let g=T7(t,a);const m=P7(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(u,f)+r:a==="right"&&(g+=Math.max(d,p)+r),{x:ft(g,0,i.width-t.width),y:ft(m,0,i.height-t.height)}}function uc(e,t,n){const i=Tt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-i.right:e.x+i.left}function Lb(e){return Fn([],si(e))}function j7(e,t,n){return vr(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function Fb(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const OC={beforeTitle:ii,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return n[t.dataIndex]}return""},afterTitle:ii,beforeBody:ii,beforeLabel:ii,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return be(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:ii,afterBody:ii,beforeFooter:ii,footer:ii,afterFooter:ii};function Nt(e,t,n,i){const r=e[t].call(n,i);return typeof r>"u"?OC[t].call(n,i):r}class Lm extends Ti{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&n.options.animation&&i.animations,o=new uC(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=j7(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:i}=n,r=Nt(i,"beforeTitle",this,t),o=Nt(i,"title",this,t),s=Nt(i,"afterTitle",this,t);let a=[];return a=Fn(a,si(r)),a=Fn(a,si(o)),a=Fn(a,si(s)),a}getBeforeBody(t,n){return Lb(Nt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:i}=n,r=[];return Ce(t,o=>{const s={before:[],lines:[],after:[]},a=Fb(i,o);Fn(s.before,si(Nt(a,"beforeLabel",this,o))),Fn(s.lines,Nt(a,"label",this,o)),Fn(s.after,si(Nt(a,"afterLabel",this,o))),r.push(s)}),r}getAfterBody(t,n){return Lb(Nt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:i}=n,r=Nt(i,"beforeFooter",this,t),o=Nt(i,"footer",this,t),s=Nt(i,"afterFooter",this,t);let a=[];return a=Fn(a,si(r)),a=Fn(a,si(o)),a=Fn(a,si(s)),a}_createItems(t){const n=this._active,i=this.chart.data,r=[],o=[],s=[];let a=[],l,c;for(l=0,c=n.length;l<c;++l)a.push(C7(this.chart,n[l]));return t.filter&&(a=a.filter((u,d,f)=>t.filter(u,d,f,i))),t.itemSort&&(a=a.sort((u,d)=>t.itemSort(u,d,i))),Ce(a,u=>{const d=Fb(t.callbacks,u);r.push(Nt(d,"labelColor",this,u)),o.push(Nt(d,"labelPointStyle",this,u)),s.push(Nt(d,"labelTextColor",this,u))}),this.labelColors=r,this.labelPointStyles=o,this.labelTextColors=s,this.dataPoints=a,a}update(t,n){const i=this.options.setContext(this.getContext()),r=this._active;let o,s=[];if(!r.length)this.opacity!==0&&(o={opacity:0});else{const a=Zs[i.position].call(this,r,this._eventPosition);s=this._createItems(i),this.title=this.getTitle(s,i),this.beforeBody=this.getBeforeBody(s,i),this.body=this.getBody(s,i),this.afterBody=this.getAfterBody(s,i),this.footer=this.getFooter(s,i);const l=this._size=Rb(this,i),c=Object.assign({},a,l),u=Nb(this.chart,i,c),d=Db(i,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=s,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,i,r){const o=this.getCaretPosition(t,i,r);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,i){const{xAlign:r,yAlign:o}=this,{caretSize:s,cornerRadius:a}=i,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:d}=Wr(a),{x:f,y:p}=t,{width:g,height:m}=n;let v,x,y,b,k,S;return o==="center"?(k=p+m/2,r==="left"?(v=f,x=v-s,b=k+s,S=k-s):(v=f+g,x=v+s,b=k-s,S=k+s),y=v):(r==="left"?x=f+Math.max(l,u)+s:r==="right"?x=f+g-Math.max(c,d)-s:x=this.caretX,o==="top"?(b=p,k=b-s,v=x-s,y=x+s):(b=p+m,k=b+s,v=x+s,y=x-s),S=b),{x1:v,x2:x,x3:y,y1:b,y2:k,y3:S}}drawTitle(t,n,i){const r=this.title,o=r.length;let s,a,l;if(o){const c=Ho(i.rtl,this.x,this.width);for(t.x=uc(this,i.titleAlign,i),n.textAlign=c.textAlign(i.titleAlign),n.textBaseline="middle",s=ct(i.titleFont),a=i.titleSpacing,n.fillStyle=i.titleColor,n.font=s.string,l=0;l<o;++l)n.fillText(r[l],c.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+a,l+1===o&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,n,i,r,o){const s=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:c}=o,u=ct(o.bodyFont),d=uc(this,"left",o),f=r.x(d),p=l<u.lineHeight?(u.lineHeight-l)/2:0,g=n.y+p;if(o.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},v=r.leftForLtr(f,c)+c/2,x=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Pm(t,m,v,x),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,Pm(t,m,v,x)}else{t.lineWidth=pe(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const m=r.leftForLtr(f,c),v=r.leftForLtr(r.xPlus(f,1),c-2),x=Wr(s.borderRadius);Object.values(x).some(y=>y!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Ja(t,{x:m,y:g,w:c,h:l,radius:x}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),Ja(t,{x:v,y:g+1,w:c-2,h:l-2,radius:x}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,g,c,l),t.strokeRect(m,g,c,l),t.fillStyle=s.backgroundColor,t.fillRect(v,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,n,i){const{body:r}=this,{bodySpacing:o,bodyAlign:s,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:u}=i,d=ct(i.bodyFont);let f=d.lineHeight,p=0;const g=Ho(i.rtl,this.x,this.width),m=function(j){n.fillText(j,g.x(t.x+p),t.y+f/2),t.y+=f+o},v=g.textAlign(s);let x,y,b,k,S,E,C;for(n.textAlign=s,n.textBaseline="middle",n.font=d.string,t.x=uc(this,v,i),n.fillStyle=i.bodyColor,Ce(this.beforeBody,m),p=a&&v!=="right"?s==="center"?c/2+u:c+2+u:0,k=0,E=r.length;k<E;++k){for(x=r[k],y=this.labelTextColors[k],n.fillStyle=y,Ce(x.before,m),b=x.lines,a&&b.length&&(this._drawColorBox(n,t,k,g,i),f=Math.max(d.lineHeight,l)),S=0,C=b.length;S<C;++S)m(b[S]),f=d.lineHeight;Ce(x.after,m)}p=0,f=d.lineHeight,Ce(this.afterBody,m),t.y-=o}drawFooter(t,n,i){const r=this.footer,o=r.length;let s,a;if(o){const l=Ho(i.rtl,this.x,this.width);for(t.x=uc(this,i.footerAlign,i),t.y+=i.footerMarginTop,n.textAlign=l.textAlign(i.footerAlign),n.textBaseline="middle",s=ct(i.footerFont),n.fillStyle=i.footerColor,n.font=s.string,a=0;a<o;++a)n.fillText(r[a],l.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+i.footerSpacing}}drawBackground(t,n,i,r){const{xAlign:o,yAlign:s}=this,{x:a,y:l}=t,{width:c,height:u}=i,{topLeft:d,topRight:f,bottomLeft:p,bottomRight:g}=Wr(r.cornerRadius);n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,n.lineWidth=r.borderWidth,n.beginPath(),n.moveTo(a+d,l),s==="top"&&this.drawCaret(t,n,i,r),n.lineTo(a+c-f,l),n.quadraticCurveTo(a+c,l,a+c,l+f),s==="center"&&o==="right"&&this.drawCaret(t,n,i,r),n.lineTo(a+c,l+u-g),n.quadraticCurveTo(a+c,l+u,a+c-g,l+u),s==="bottom"&&this.drawCaret(t,n,i,r),n.lineTo(a+p,l+u),n.quadraticCurveTo(a,l+u,a,l+u-p),s==="center"&&o==="left"&&this.drawCaret(t,n,i,r),n.lineTo(a,l+d),n.quadraticCurveTo(a,l,a+d,l),n.closePath(),n.fill(),r.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,i=this.$animations,r=i&&i.x,o=i&&i.y;if(r||o){const s=Zs[t.position].call(this,this._active,this._eventPosition);if(!s)return;const a=this._size=Rb(this,t),l=Object.assign({},s,this._size),c=Nb(n,t,l),u=Db(t,l,c,n);(r._to!==u.x||o._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=s.x,this.caretY=s.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const r={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const s=Tt(n.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,r,n),oC(t,n.textDirection),o.y+=s.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),sC(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const i=this._active,r=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!Ku(i,r),s=this._positionChanged(r,n);(o||s)&&(this._active=r,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,o=this._active||[],s=this._getActiveElements(t,o,n,i),a=this._positionChanged(s,t),l=n||!Ku(s,o)||a;return l&&(this._active=s,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,i,r){const o=this.options;if(t.type==="mouseout")return[];if(!r)return n.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const s=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&s.reverse(),s}_positionChanged(t,n){const{caretX:i,caretY:r,options:o}=this,s=Zs[o.position].call(this,t,n);return s!==!1&&(i!==s.x||r!==s.y)}}H(Lm,"positioners",Zs);var K0={id:"tooltip",_element:Lm,positioners:Zs,afterInit(e,t,n){n&&(e.tooltip=new Lm({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:OC},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},O7=Object.freeze({__proto__:null,Colors:$W,Decimation:KW,Filler:m7,Legend:Y0,SubTitle:S7,Title:k7,Tooltip:K0});const M7=(e,t,n,i)=>(typeof t=="string"?(n=e.push(t)-1,i.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function R7(e,t,n,i){const r=e.indexOf(t);if(r===-1)return M7(e,t,n,i);const o=e.lastIndexOf(t);return r!==o?n:r}const N7=(e,t)=>e===null?null:ft(Math.round(e),0,t);function zb(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class nd extends co{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:r,label:o}of n)i[r]===o&&i.splice(r,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(be(t))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===t?n:R7(i,t,ue(n,t),this._addedLabels),N7(n,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:i,max:r}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),n||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){const t=this.min,n=this.max,i=this.options.offset,r=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let s=t;s<=n;s++)r.push({value:s});return r}getLabelForValue(t){return zb.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}H(nd,"id","category"),H(nd,"defaults",{ticks:{callback:zb}});function D7(e,t){const n=[],{bounds:r,step:o,min:s,max:a,precision:l,count:c,maxTicks:u,maxDigits:d,includeBounds:f}=e,p=o||1,g=u-1,{min:m,max:v}=t,x=!be(s),y=!be(a),b=!be(c),k=(v-m)/(d+1);let S=Mv((v-m)/g/p)*p,E,C,j,T;if(S<1e-14&&!x&&!y)return[{value:m},{value:v}];T=Math.ceil(v/S)-Math.floor(m/S),T>g&&(S=Mv(T*S/g/p)*p),be(l)||(E=Math.pow(10,l),S=Math.ceil(S*E)/E),r==="ticks"?(C=Math.floor(m/S)*S,j=Math.ceil(v/S)*S):(C=m,j=v),x&&y&&o&&OI((a-s)/o,S/1e3)?(T=Math.round(Math.min((a-s)/S,u)),S=(a-s)/T,C=s,j=a):b?(C=x?s:C,j=y?a:j,T=c-1,S=(j-C)/T):(T=(j-C)/S,ha(T,Math.round(T),S/1e3)?T=Math.round(T):T=Math.ceil(T));const z=Math.max(Rv(S),Rv(C));E=Math.pow(10,be(l)?z:l),C=Math.round(C*E)/E,j=Math.round(j*E)/E;let U=0;for(x&&(f&&C!==s?(n.push({value:s}),C<s&&U++,ha(Math.round((C+U*S)*E)/E,s,Ib(s,k,e))&&U++):C<s&&U++);U<T;++U){const q=Math.round((C+U*S)*E)/E;if(y&&q>a)break;n.push({value:q})}return y&&f&&j!==a?n.length&&ha(n[n.length-1].value,a,Ib(a,k,e))?n[n.length-1].value=a:n.push({value:a}):(!y||j===a)&&n.push({value:j}),n}function Ib(e,t,{horizontal:n,minRotation:i}){const r=Tn(i),o=(n?Math.sin(r):Math.cos(r))||.001,s=.75*t*(""+e).length;return Math.min(t/o,s)}class id extends co{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return be(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:r,max:o}=this;const s=l=>r=n?r:l,a=l=>o=i?o:l;if(t){const l=Kn(r),c=Kn(o);l<0&&c<0?a(0):l>0&&c>0&&s(0)}if(r===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||s(r-l)}this.min=r,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=t,r;return i?(r=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,r>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),r=1e3)):(r=this.computeTickLimit(),n=n||11),n&&(r=Math.min(n,r)),r}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,s=D7(r,o);return t.bounds==="ticks"&&U4(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const r=(i-n)/Math.max(t.length-1,1)/2;n-=r,i+=r}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(t){return gl(t,this.chart.options.locale,this.options.ticks.format)}}class rd extends id{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Qe(t)?t:0,this.max=Qe(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,i=Tn(this.options.ticks.minRotation),r=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/r))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}H(rd,"id","linear"),H(rd,"defaults",{ticks:{callback:rf.formatters.numeric}});const el=e=>Math.floor(Gi(e)),Ar=(e,t)=>Math.pow(10,el(e)+t);function Bb(e){return e/Math.pow(10,el(e))===1}function Wb(e,t,n){const i=Math.pow(10,n),r=Math.floor(e/i);return Math.ceil(t/i)-r}function L7(e,t){const n=t-e;let i=el(n);for(;Wb(e,t,i)>10;)i++;for(;Wb(e,t,i)<10;)i--;return Math.min(i,el(e))}function F7(e,{min:t,max:n}){t=$t(e.min,t);const i=[],r=el(t);let o=L7(t,n),s=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=r>o?Math.pow(10,r):0,c=Math.round((t-l)*s)/s,u=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-u)/Math.pow(10,o)),f=$t(e.min,Math.round((l+u+d*Math.pow(10,o))*s)/s);for(;f<n;)i.push({value:f,major:Bb(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,s=o>=0?1:s),f=Math.round((l+u+d*Math.pow(10,o))*s)/s;const p=$t(e.max,f);return i.push({value:p,major:Bb(p),significand:d}),i}class Fm extends co{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const i=id.prototype.parse.apply(this,[t,n]);if(i===0){this._zero=!0;return}return Qe(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Qe(t)?Math.max(0,t):null,this.max=Qe(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Qe(this._userMin)&&(this.min=t===Ar(this.min,0)?Ar(this.min,-1):Ar(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let i=this.min,r=this.max;const o=a=>i=t?i:a,s=a=>r=n?r:a;i===r&&(i<=0?(o(1),s(10)):(o(Ar(i,-1)),s(Ar(r,1)))),i<=0&&o(Ar(r,-1)),r<=0&&s(Ar(i,1)),this.min=i,this.max=r}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},i=F7(n,this);return t.bounds==="ticks"&&U4(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":gl(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Gi(t),this._valueRange=Gi(this.max)-Gi(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Gi(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}H(Fm,"id","logarithmic"),H(Fm,"defaults",{ticks:{callback:rf.formatters.logarithmic,major:{enabled:!0}}});function zm(e){const t=e.ticks;if(t.display&&e.display){const n=Tt(t.backdropPadding);return ue(t.font&&t.font.size,Ze.font.size)+n.height}return 0}function z7(e,t,n){return n=Le(n)?n:[n],{w:XI(e,t.string,n),h:n.length*t.lineHeight}}function Ub(e,t,n,i,r){return e===i||e===r?{start:t-n/2,end:t+n/2}:e<i||e>r?{start:t-n,end:t}:{start:t,end:t+n}}function I7(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),i=[],r=[],o=e._pointLabels.length,s=e.options.pointLabels,a=s.centerPointLabels?Ie/o:0;for(let l=0;l<o;l++){const c=s.setContext(e.getPointLabelContext(l));r[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+r[l],a),d=ct(c.font),f=z7(e.ctx,d,e._pointLabels[l]);i[l]=f;const p=Yt(e.getIndexAngle(l)+a),g=Math.round(D0(p)),m=Ub(g,u.x,f.w,0,180),v=Ub(g,u.y,f.h,90,270);B7(n,t,p,m,v)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=V7(e,i,r)}function B7(e,t,n,i,r){const o=Math.abs(Math.sin(n)),s=Math.abs(Math.cos(n));let a=0,l=0;i.start<t.l?(a=(t.l-i.start)/o,e.l=Math.min(e.l,t.l-a)):i.end>t.r&&(a=(i.end-t.r)/o,e.r=Math.max(e.r,t.r+a)),r.start<t.t?(l=(t.t-r.start)/s,e.t=Math.min(e.t,t.t-l)):r.end>t.b&&(l=(r.end-t.b)/s,e.b=Math.max(e.b,t.b+l))}function W7(e,t,n){const i=e.drawingArea,{extra:r,additionalAngle:o,padding:s,size:a}=n,l=e.getPointPosition(t,i+r+s,o),c=Math.round(D0(Yt(l.angle+qe))),u=G7(l.y,a.h,c),d=H7(c),f=$7(l.x,a.w,d);return{visible:!0,x:l.x,y:u,textAlign:d,left:f,top:u,right:f+a.w,bottom:u+a.h}}function U7(e,t){if(!t)return!0;const{left:n,top:i,right:r,bottom:o}=e;return!(gi({x:n,y:i},t)||gi({x:n,y:o},t)||gi({x:r,y:i},t)||gi({x:r,y:o},t))}function V7(e,t,n){const i=[],r=e._pointLabels.length,o=e.options,{centerPointLabels:s,display:a}=o.pointLabels,l={extra:zm(o)/2,additionalAngle:s?Ie/r:0};let c;for(let u=0;u<r;u++){l.padding=n[u],l.size=t[u];const d=W7(e,u,l);i.push(d),a==="auto"&&(d.visible=U7(d,c),d.visible&&(c=d))}return i}function H7(e){return e===0||e===180?"center":e<180?"left":"right"}function $7(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function G7(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function Y7(e,t,n){const{left:i,top:r,right:o,bottom:s}=n,{backdropColor:a}=t;if(!be(a)){const l=Wr(t.borderRadius),c=Tt(t.backdropPadding);e.fillStyle=a;const u=i-c.left,d=r-c.top,f=o-i+c.width,p=s-r+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),Ja(e,{x:u,y:d,w:f,h:p,radius:l}),e.fill()):e.fillRect(u,d,f,p)}}function X7(e,t){const{ctx:n,options:{pointLabels:i}}=e;for(let r=t-1;r>=0;r--){const o=e._pointLabelItems[r];if(!o.visible)continue;const s=i.setContext(e.getPointLabelContext(r));Y7(n,s,o);const a=ct(s.font),{x:l,y:c,textAlign:u}=o;Jr(n,e._pointLabels[r],l,c+a.lineHeight/2,a,{color:s.color,textAlign:u,textBaseline:"middle"})}}function MC(e,t,n,i){const{ctx:r}=e;if(n)r.arc(e.xCenter,e.yCenter,t,0,ze);else{let o=e.getPointPosition(0,t);r.moveTo(o.x,o.y);for(let s=1;s<i;s++)o=e.getPointPosition(s,t),r.lineTo(o.x,o.y)}}function K7(e,t,n,i,r){const o=e.ctx,s=t.circular,{color:a,lineWidth:l}=t;!s&&!i||!a||!l||n<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(r.dash),o.lineDashOffset=r.dashOffset,o.beginPath(),MC(e,n,s,i),o.closePath(),o.stroke(),o.restore())}function Q7(e,t,n){return vr(e,{label:n,index:t,type:"pointLabel"})}class Js extends id{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Tt(zm(this.options)/2),n=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(n,i)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Qe(t)&&!isNaN(t)?t:0,this.max=Qe(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/zm(this.options))}generateTickLabels(t){id.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,i)=>{const r=Oe(this.options.pointLabels.callback,[n,i],this);return r||r===0?r:""}).filter((n,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?I7(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,i,r){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,i,r))}getIndexAngle(t){const n=ze/(this._pointLabels.length||1),i=this.options.startAngle||0;return Yt(t*n+Tn(i))}getDistanceFromCenterForValue(t){if(be(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(be(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const i=n[t];return Q7(this.getContext(),t,i)}}getPointPosition(t,n,i=0){const r=this.getIndexAngle(t)-qe+i;return{x:Math.cos(r)*n+this.xCenter,y:Math.sin(r)*n+this.yCenter,angle:r}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:i,right:r,bottom:o}=this._pointLabelItems[t];return{left:n,top:i,right:r,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),MC(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:i,grid:r,border:o}=n,s=this._pointLabels.length;let a,l,c;if(n.pointLabels.display&&X7(this,s),r.display&&this.ticks.forEach((u,d)=>{if(d!==0){l=this.getDistanceFromCenterForValue(u.value);const f=this.getContext(d),p=r.setContext(f),g=o.setContext(f);K7(this,p,l,s,g)}}),i.display){for(t.save(),a=s-1;a>=0;a--){const u=i.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:f}=u;!f||!d||(t.lineWidth=f,t.strokeStyle=d,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,i=n.ticks;if(!i.display)return;const r=this.getIndexAngle(0);let o,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!n.reverse)return;const c=i.setContext(this.getContext(l)),u=ct(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,s=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=Tt(c.backdropPadding);t.fillRect(-s/2-d.left,-o-u.size/2-d.top,s+d.width,u.size+d.height)}Jr(t,a.label,0,-o,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}H(Js,"id","radialLinear"),H(Js,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:rf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),H(Js,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),H(Js,"descriptors",{angleLines:{_fallback:"grid"}});const lf={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ft=Object.keys(lf);function Vb(e,t){return e-t}function Hb(e,t){if(be(t))return null;const n=e._adapter,{parser:i,round:r,isoWeekday:o}=e._parseOpts;let s=t;return typeof i=="function"&&(s=i(s)),Qe(s)||(s=typeof i=="string"?n.parse(s,i):n.parse(s)),s===null?null:(r&&(s=r==="week"&&(ss(o)||o===!0)?n.startOf(s,"isoWeek",o):n.startOf(s,r)),+s)}function $b(e,t,n,i){const r=Ft.length;for(let o=Ft.indexOf(e);o<r-1;++o){const s=lf[Ft[o]],a=s.steps?s.steps:Number.MAX_SAFE_INTEGER;if(s.common&&Math.ceil((n-t)/(a*s.size))<=i)return Ft[o]}return Ft[r-1]}function Z7(e,t,n,i,r){for(let o=Ft.length-1;o>=Ft.indexOf(n);o--){const s=Ft[o];if(lf[s].common&&e._adapter.diff(r,i,s)>=t-1)return s}return Ft[n?Ft.indexOf(n):0]}function J7(e){for(let t=Ft.indexOf(e)+1,n=Ft.length;t<n;++t)if(lf[Ft[t]].common)return Ft[t]}function Gb(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:i,hi:r}=L0(n,t),o=n[i]>=t?n[i]:n[r];e[o]=!0}}function q7(e,t,n,i){const r=e._adapter,o=+r.startOf(t[0].value,i),s=t[t.length-1].value;let a,l;for(a=o;a<=s;a=+r.add(a,1,i))l=n[a],l>=0&&(t[l].major=!0);return t}function Yb(e,t,n){const i=[],r={},o=t.length;let s,a;for(s=0;s<o;++s)a=t[s],r[a]=s,i.push({value:a,major:!1});return o===0||!n?i:q7(e,i,r,n)}class tl extends co{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const i=t.time||(t.time={}),r=this._adapter=new uB._date(t.adapters.date);r.init(n),fa(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:Hb(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,i=t.time.unit||"day";let{min:r,max:o,minDefined:s,maxDefined:a}=this.getUserBounds();function l(c){!s&&!isNaN(c.min)&&(r=Math.min(r,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!s||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),r=Qe(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),o=Qe(o)&&!isNaN(o)?o:+n.endOf(Date.now(),i)+1,this.min=Math.min(r,o-1),this.max=Math.max(r+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],i=t[t.length-1]),{min:n,max:i}}buildTicks(){const t=this.options,n=t.time,i=t.ticks,r=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const o=this.min,s=this.max,a=DI(r,o,s);return this._unit=n.unit||(i.autoSkip?$b(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):Z7(this,a.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:J7(this._unit),this.initOffsets(r),t.reverse&&a.reverse(),Yb(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,i=0,r,o;this.options.offset&&t.length&&(r=this.getDecimalForValue(t[0]),t.length===1?n=1-r:n=(this.getDecimalForValue(t[1])-r)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?i=o:i=(o-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;n=ft(n,0,s),i=ft(i,0,s),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const t=this._adapter,n=this.min,i=this.max,r=this.options,o=r.time,s=o.unit||$b(o.minUnit,n,i,this._getLabelCapacity(n)),a=ue(r.ticks.stepSize,1),l=s==="week"?o.isoWeekday:!1,c=ss(l)||l===!0,u={};let d=n,f,p;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":s),t.diff(i,n,s)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+s);const g=r.ticks.source==="data"&&this.getDataTimestamps();for(f=d,p=0;f<i;f=+t.add(f,a,s),p++)Gb(u,f,g);return(f===i||r.bounds==="ticks"||p===1)&&Gb(u,f,g),Object.keys(u).sort(Vb).map(m=>+m)}getLabelForValue(t){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}format(t,n){const r=this.options.time.displayFormats,o=this._unit,s=n||r[o];return this._adapter.format(t,s)}_tickFormatFunction(t,n,i,r){const o=this.options,s=o.ticks.callback;if(s)return Oe(s,[t,n,i],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&a[l],d=c&&a[c],f=i[n],p=c&&d&&f&&f.major;return this._adapter.format(t,r||(p?d:u))}generateTickLabels(t){let n,i,r;for(n=0,i=t.length;n<i;++n)r=t[n],r.label=this._tickFormatFunction(r.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,i=this.ctx.measureText(t).width,r=Tn(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(r),s=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*o+a*s,h:i*s+a*o}}_getLabelCapacity(t){const n=this.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,o=this._tickFormatFunction(t,0,Yb(this,[t],this._majorUnit),r),s=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],n,i;if(t.length)return t;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(n=0,i=r.length;n<i;++n)t=t.concat(r[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,i;if(t.length)return t;const r=this.getLabels();for(n=0,i=r.length;n<i;++n)t.push(Hb(this,r[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return $4(t.sort(Vb))}}H(tl,"id","time"),H(tl,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function dc(e,t,n){let i=0,r=e.length-1,o,s,a,l;n?(t>=e[i].pos&&t<=e[r].pos&&({lo:i,hi:r}=mi(e,"pos",t)),{pos:o,time:a}=e[i],{pos:s,time:l}=e[r]):(t>=e[i].time&&t<=e[r].time&&({lo:i,hi:r}=mi(e,"time",t)),{time:o,pos:a}=e[i],{time:s,pos:l}=e[r]);const c=s-o;return c?a+(l-a)*(t-o)/c:a}class Im extends tl{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=dc(n,this.min),this._tableRange=dc(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:i}=this,r=[],o=[];let s,a,l,c,u;for(s=0,a=t.length;s<a;++s)c=t[s],c>=n&&c<=i&&r.push(c);if(r.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(s=0,a=r.length;s<a;++s)u=r[s+1],l=r[s-1],c=r[s],Math.round((u+l)/2)!==c&&o.push({time:c,pos:s/(a-1)});return o}_generate(){const t=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((r,o)=>r-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?t=this.normalize(n.concat(i)):t=n.length?n:i,t=this._cache.all=t,t}getDecimalForValue(t){return(dc(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,i=this.getDecimalForPixel(t)/n.factor-n.end;return dc(this._table,i*this._tableRange+this._minPos,!0)}}H(Im,"id","timeseries"),H(Im,"defaults",tl.defaults);var eU=Object.freeze({__proto__:null,CategoryScale:nd,LinearScale:rd,LogarithmicScale:Fm,RadialLinearScale:Js,TimeScale:tl,TimeSeriesScale:Im});const tU=[cB,IW,O7,eU],RC="label";function Xb(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function nU(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function NC(e,t){e.labels=t}function DC(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:RC;const i=[];e.datasets=t.map(r=>{const o=e.datasets.find(s=>s[n]===r[n]);return!o||!r.data||i.includes(o)?{...r}:(i.push(o),Object.assign(o,r),o)})}function iU(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:RC;const n={labels:[],datasets:[]};return NC(n,e.labels),DC(n,e.datasets,t),n}function rU(e,t){const{height:n=150,width:i=300,redraw:r=!1,datasetIdKey:o,type:s,data:a,options:l,plugins:c=[],fallbackContent:u,updateMode:d,...f}=e,p=P.useRef(null),g=P.useRef(),m=()=>{p.current&&(g.current=new vs(p.current,{type:s,data:iU(a,o),options:l&&{...l},plugins:c}),Xb(t,g.current))},v=()=>{Xb(t,null),g.current&&(g.current.destroy(),g.current=null)};return P.useEffect(()=>{!r&&g.current&&l&&nU(g.current,l)},[r,l]),P.useEffect(()=>{!r&&g.current&&NC(g.current.config.data,a.labels)},[r,a.labels]),P.useEffect(()=>{!r&&g.current&&a.datasets&&DC(g.current.config.data,a.datasets,o)},[r,a.datasets]),P.useEffect(()=>{g.current&&(r?(v(),setTimeout(m)):g.current.update(d))},[r,l,a.labels,a.datasets,d]),P.useEffect(()=>{g.current&&(v(),setTimeout(m))},[s]),P.useEffect(()=>(m(),()=>v()),[]),Qn.createElement("canvas",Object.assign({ref:p,role:"img",height:n,width:i},f),u)}const oU=P.forwardRef(rU);function Q0(e,t){return vs.register(t),P.forwardRef((n,i)=>Qn.createElement(oU,Object.assign({},n,{ref:i,type:e})))}const sU=Q0("line",xa),aU=Q0("bar",ga),fc=Q0("doughnut",Yi),lU=w("h2")`
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  color: var(--primary-white-color);
`,cU=w("div")`
  display: flex;
`,uU=w("div")``,dU=w("p")`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  padding-left: 40px;
  padding-top: 10px;
  color: var(--primary-white-color);
`;w("canvas")``;vs.register(...tU);const fU={scales:{x:{grid:{color:"rgba(255, 255, 255, 0.1)",borderWidth:1},ticks:{color:"white"}},y:{grid:{color:"rgba(255, 255, 255, 0.1)",borderWidth:1},ticks:{color:"white"}}},plugins:{legend:{display:!0,labels:{color:"white"}}}},Rh=({chartType:e,averageValue:t,data:n,labels:i})=>{const r=P.useMemo(()=>({labels:i,datasets:[{label:e,data:n,fill:!1}]}),[e,t,n,i]),o=P.useRef(null);return P.useEffect(()=>(o.current&&o.current.destroy(),()=>{o.current&&o.current.destroy()}),[r]),h.jsxs(uU,{children:[h.jsxs(cU,{children:[h.jsx(lU,{children:e}),h.jsx(dU,{children:`Average value: ${t}`})]}),h.jsx(sU,{ref:o,data:r,options:fU})]})},hU=w("div")`
  display: flex;
  gap: 12px;
`,pU=w("select")`
  width: 214px;
  color: var(--primary-white-color);
  background-color: var(--primary-black-second-color);
  font-size: 30px;
  font-weight: 500;
`,mU=w("div")`
  display: flex;
  padding-left: 34px;
`,gU="/healthyhub-project/assets/arrow-1eb9177f.svg",xU=({onChange:e})=>{const t=[{value:"01",label:"January"},{value:"02",label:"February"},{value:"03",label:"March"},{value:"04",label:"April"},{value:"05",label:"May"},{value:"06",label:"June"},{value:"07",label:"July"},{value:"08",label:"August"},{value:"09",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}];return h.jsxs(hU,{children:[h.jsx(mU,{children:h.jsx("img",{src:gU,alt:"Arrow Right Icon",style:{transform:"rotate(180deg)"}})}),h.jsxs(pU,{className:"Select",defaultValue:"",onChange:n=>e(n.target.value),children:[h.jsx("option",{value:"",disabled:!0,children:"Months"}),t.map(n=>h.jsx("option",{value:n.value,children:n.label},n.value))]})]})},yU=w("div")`
  display: flex;
  flex-direction: column;
  width: 620px;
  height: 313px;
  top: 235px;
  left: 70px;
  border: 0.5px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`,vU=w("div")`
  display: flex;

  gap: 27px;
  margin-bottom: 27px;
  padding-left: 34px;
  width: 300%;

  @media screen and (min-width: 834px) {
    gap: 40px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`;w("div")`
  display: flex;
  background-color: var(--primary-black-second-color);
`;w("div")`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  padding: 24px 24px 36px 24px;
  border-radius: 12px;
  background-color: var(--primary-black-color);

  @media screen and (min-width: 1440px) {
    width: 1372px;
  }
`;const bU=w("div")`
  display: flex;
  width: 620px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`,wU=w("div")`
  display: flex;
  width: 620px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`,kU=w("div")`
  width: 1372px;
  padding-left: 34px;
  border-radius: 12px;
  background-color: var(--primary-black-second-color);
`,LC=Ve.create({baseURL:""}),SU=e=>{LC.defaults.headers.common.Authorization=`Bearer ${e}`},CU=ot("statistics/get",async(e,t)=>{try{const i=t.getState().auth.token;return i?(SU(i),(await LC("api/user/statistics")).data):t.rejectWithValue("No token")}catch(n){return t.rejectWithValue(n.message)}}),Z0=e=>{var t;return(t=e.statistics)==null?void 0:t.calories},FC=e=>{var t;return(t=e.statistics)==null?void 0:t.water},zC=e=>{var t;return(t=e.statistics)==null?void 0:t.weight},AU=rS([Z0],e=>e?[...new Set(e.map(n=>n.month))].map(n=>({value:n,label:n})):[]);rS([Z0,FC,zC],(e,t,n)=>({caloriesData:e,waterData:t,weightData:n}));const EU=()=>{const[e,t]=P.useState({value:"lastMonth",label:"Last Month"}),n=It(AU),i=It(c=>Z0(c,e.value)),r=It(FC),o=It(zC),s=sn(),a=c=>{t(c)},l=c=>{console.log("Selected month:",c),t({value:c,label:c})};return P.useEffect(()=>{(!i||!r||!o||!i.length||!r.length||!o.length)&&s(CU())},[s,i,r,o]),h.jsx(h.Fragment,{children:h.jsxs(yU,{className:"Frame",children:[h.jsx(xU,{options:n,onChange:l}),h.jsxs(vU,{className:"GraphicsFrame",children:[h.jsx(bU,{className:"CaloriesFrame",onChange:a,data:i,children:h.jsx(Rh,{className:"Canvas",chartType:"Calories",data:i,period:e,labels:"Last Month",averageValue:"1700 cal"})}),h.jsx(wU,{children:h.jsx(Rh,{chartType:"Water",data:r,period:e,labels:"Last Month",averageValue:"1700 ml"})})]}),h.jsx(kU,{children:h.jsx(Rh,{chartType:"Weight",data:o,period:e,labels:"Last Month",averageValue:"68 kg"})})]})})},Nh=({component:e,redirectTo:t="/"})=>{const{isLoggedIn:n}=za();return n?h.jsx(Hg,{to:t}):e},_U=Z5`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
`,TU=w.div`
  /* position: relative; */
  position: absolute;
  top: 35%;
  left: 35%;
  display: flex;
  /* margin: auto; */
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(255, 251, 251, 0.363));

  & > span {
    color: white;
    display: inline-block;
    font-size: 4rem;
    text-transform: uppercase;
    animation: ${_U} 1s infinite;
    animation-delay: calc(0.1s * var(--i));
  }
`,PU=()=>h.jsx("div",{children:h.jsxs(TU,{children:[h.jsx("span",{style:{"--i":1},children:"L"}),h.jsx("span",{style:{"--i":2},children:"o"}),h.jsx("span",{style:{"--i":3},children:"a"}),h.jsx("span",{style:{"--i":4},children:"d"}),h.jsx("span",{style:{"--i":5},children:"i"}),h.jsx("span",{style:{"--i":6},children:"n"}),h.jsx("span",{style:{"--i":7},children:"g"}),h.jsx("span",{style:{"--i":8},children:"."}),h.jsx("span",{style:{"--i":9},children:"."}),h.jsx("span",{style:{"--i":10},children:"."})]})}),jU="/healthyhub-project/assets/bubble-9a00051c.svg",OU="/healthyhub-project/assets/milk-b0841ac4.svg",MU=w.div`
  width: 300px;
  height: 242px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,RU=w.h3`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    line-height: 32px;
    font-size: 22px;
    margin-bottom: 19px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`,NU=w.div`
  width: 300px;
  height: 212px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  margin-top: 6px;
  padding: 12px 16px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
  }
`,Kb=w.div`
  display: flex;
  align-items: flex-start;
`,DU=w.div`
  margin-left: 20px;
`,LU=w.h3`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,FU=w.p`
  color: var(--primary-white-color);
  margin-top: 4px;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`,zU=w.div`
  margin-left: 20px;
`,IU=w.h3`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,BU=w.p`
  display: flex;
  align-items: center;
  color: var(--primary-white-color);
  margin-top: 4px;
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`,WU=w.span`
  margin-left: 4px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,UU=()=>{const e=It(Gg);return h.jsxs(MU,{children:[h.jsx(RU,{children:"Daily goal"}),h.jsxs(NU,{children:[h.jsxs(Kb,{children:[h.jsx("img",{src:jU,alt:"illustration"}),h.jsxs(DU,{children:[h.jsx(LU,{children:"Calories"}),h.jsx(FU,{children:e.bmr})]})]}),h.jsxs(Kb,{children:[h.jsx("img",{src:OU,alt:"illustration"}),h.jsxs(zU,{children:[h.jsx(IU,{children:"Water"}),h.jsxs(BU,{children:[e.waterRate,h.jsx(WU,{children:"ml"})]})]})]})]})]})},VU=w.div`
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    width: 518px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 1440px;
    padding: 20px 34px 54px 34px;
    margin: auto; */
    margin-left: 0;
    margin-right: 0;
  }
`,HU=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$U=w.div`
  display: flex;
  align-items: baseline;

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: baseline;
    /* margin-bottom: 25px; */
  }
`,GU=w.h2`
  margin-right: 10px;
  width: 57px;
  height: 32px;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: var(--primary-white-color);
`,YU=w(Zn)`
  width: auto;
  height: 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  white-space: nowrap;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,hc=w.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    /* margin-bottom: 20px; */
  }
`,pc=w.div`
  display: flex;
  /* margin-top: 20px; */
  align-items: center;
  /* margin-bottom: 20px; */

  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    width: 558px;
  }
`,mc=w.img`
  width: 36px;
  height: 36px;
  /* margin-left: 25px; */
  margin-right: 10px;
`,gc=w.h2`
  width: 100px;
  height: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--primary-white-color);
  margin: 0 10px 0 20px;

  @media screen and (min-width: 834px) {
    margin-left: 25px;
  }
`;w.p`
  width: 124px;

  color: var(--primary-white-color);
  margin: 0 25px 0 0px;
  /* margin-right: 25px;
  margin-left: 43px; */
  width: 160px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  gap: 4px;
`;w.p`
  margin-right: 25px;
  width: 110px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-white-color);
  margin: 0;
  display: flex;
  gap: 4px;
`;w.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-white-color);
  margin: 0;
  display: flex;
  gap: 4px;
  width: 26px;
`;w.span`
  width: 36px;
`;const xc=w.button`
  width: 150px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--primary-light-green-color);
  background-color: var(--primary-black-second-color);
  border: 1px solid transparent;
  /* padding: 5px 10px; */
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
`,yc=w.div`
  width: 300px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media screen and (min-width: 834px) {
    width: 518px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`,vc=w.button`
  background-color: transparent;
  border: transparent;
  margin-left: 20px;
`,bc="/healthyhub-project/assets/trash-03-90003558.svg",XU=()=>{const[e,t]=P.useState({breakfast:!1,lunch:!1,dinner:!1,snack:!1}),[n,i]=P.useState({breakfast:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},lunch:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},dinner:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""},snack:{name:"",carbonohidrates:"",protein:"",fat:"",calories:""}}),r=a=>{t({...e,[a]:!0})},o=(a,l,c)=>{i({...n,[a]:{...n[a],[l]:c}})},s=a=>{console.log(`Data for ${a}:`,n[a]),t({...e,[a]:!1})};return h.jsxs(VU,{children:[h.jsxs($U,{children:[h.jsx(GU,{children:"Diary"}),h.jsx(YU,{to:"/diary",children:"See More"})]}),h.jsx("div",{children:h.jsxs(HU,{children:[h.jsxs(hc,{children:[h.jsxs(pc,{children:[h.jsx(mc,{src:R4,alt:"Breakfast"}),h.jsx(gc,{children:"Breakfast"})]}),h.jsx("div",{children:n.breakfast.name?h.jsx(yc,{children:h.jsx(vc,{type:"button",children:h.jsx("img",{src:bc,alt:"trash basket"})})}):h.jsx(xc,{onClick:()=>r("breakfast"),children:"+ Record your meal"})})]}),h.jsxs(hc,{children:[h.jsxs(pc,{children:[h.jsx(mc,{src:N4,alt:"Lunch"}),h.jsx(gc,{children:"Lunch"})]}),h.jsx("div",{children:n.lunch.name?h.jsx(yc,{children:h.jsx(vc,{type:"button",children:h.jsx("img",{src:bc,alt:"trash basket"})})}):h.jsx(xc,{onClick:()=>r("lunch"),children:"+ Record your meal"})})]}),h.jsxs(hc,{children:[h.jsxs(pc,{children:[h.jsx(mc,{src:D4,alt:"Dinner"}),h.jsx(gc,{children:"Dinner"})]}),h.jsx("div",{children:n.dinner.name?h.jsx(yc,{children:h.jsx(vc,{type:"button",children:h.jsx("img",{src:bc,alt:"trash basket"})})}):h.jsx(xc,{onClick:()=>r("dinner"),children:"+ Record your meal"})})]}),h.jsxs(hc,{children:[h.jsxs(pc,{children:[h.jsx(mc,{src:L4,alt:"Snack"}),h.jsx(gc,{children:"Snack"})]}),h.jsx("div",{children:n.snack.name?h.jsx(yc,{children:h.jsx(vc,{type:"button",children:h.jsx("img",{src:bc,alt:"trash basket"})})}):h.jsx(xc,{onClick:()=>r("snack"),children:"+ Record your meal"})})]})]})}),e.breakfast&&h.jsx(Hi,{onClose:()=>t({...e,breakfast:!1}),type:"breakfast",formData:n.breakfast,onChange:(a,l)=>o("breakfast",a,l),onSubmit:()=>s("breakfast")}),e.lunch&&h.jsx(Hi,{onClose:()=>t({...e,lunch:!1}),type:"lunch",formData:n.lunch,onChange:(a,l)=>o("lunch",a,l),onSubmit:()=>s("lunch")}),e.dinner&&h.jsx(Hi,{onClose:()=>t({...e,dinner:!1}),type:"dinner",formData:n.dinner,onChange:(a,l)=>o("dinner",a,l),onSubmit:()=>s("dinner")}),e.snack&&h.jsx(Hi,{onClose:()=>t({...e,snack:!1}),type:"snack",formData:n.snack,onChange:(a,l)=>o("snack",a,l),onSubmit:()=>s("snack")})]})},KU="/healthyhub-project/assets/add-c5b7ab6b.svg";var Bm={},QU={get exports(){return Bm},set exports(e){Bm=e}};(function(e,t){(function(i,r){e.exports=r()})(kc,function(){return function(n){var i={};function r(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return n[o].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=n,r.c=i,r.d=function(o,s,a){r.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:a})},r.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,s){if(s&1&&(o=r(o)),s&8||s&4&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),s&2&&typeof o!="string")for(var l in o)r.d(a,l,function(c){return o[c]}.bind(null,l));return a},r.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(s,"a",s),s},r.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},r.p="",r(r.s=0)}([function(n,i,r){r.r(i);var o=function(A){return Array.isArray(A)?A:[A]},s=function(A){return A instanceof Node},a=function(A){return A instanceof NodeList},l=function(A,L){if(A&&L){A=a(A)?A:[A];for(var V=0;V<A.length&&L(A[V],V,A.length)!==!0;V++);}},c=function(A){return console.error("[scroll-lock] ".concat(A))},u=function(A){if(Array.isArray(A)){var L=A.join(", ");return L}},d=function(A){var L=[];return l(A,function(V){return L.push(V)}),L},f=function(A,L){var V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,X=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(V&&d(X.querySelectorAll(L)).indexOf(A)!==-1)return A;for(;(A=A.parentElement)&&d(X.querySelectorAll(L)).indexOf(A)===-1;);return A},p=function(A,L){var V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,X=d(V.querySelectorAll(L)).indexOf(A)!==-1;return X},g=function(A){if(A){var L=getComputedStyle(A),V=L.overflow==="hidden";return V}},m=function(A){if(A){if(g(A))return!0;var L=A.scrollTop;return L<=0}},v=function(A){if(A){if(g(A))return!0;var L=A.scrollTop,V=A.scrollHeight,X=L+A.offsetHeight;return X>=V}},x=function(A){if(A){if(g(A))return!0;var L=A.scrollLeft;return L<=0}},y=function(A){if(A){if(g(A))return!0;var L=A.scrollLeft,V=A.scrollWidth,X=L+A.offsetWidth;return X>=V}},b=function(A){var L='textarea, [contenteditable="true"]';return p(A,L)},k=function(A){var L='input[type="range"]';return p(A,L)};r.d(i,"disablePageScroll",function(){return z}),r.d(i,"enablePageScroll",function(){return U}),r.d(i,"getScrollState",function(){return q}),r.d(i,"clearQueueScrollLocks",function(){return ne}),r.d(i,"getTargetScrollBarWidth",function(){return he}),r.d(i,"getCurrentTargetScrollBarWidth",function(){return re}),r.d(i,"getPageScrollBarWidth",function(){return de}),r.d(i,"getCurrentPageScrollBarWidth",function(){return ae}),r.d(i,"addScrollableTarget",function(){return B}),r.d(i,"removeScrollableTarget",function(){return Y}),r.d(i,"addScrollableSelector",function(){return Q}),r.d(i,"removeScrollableSelector",function(){return le}),r.d(i,"addLockableTarget",function(){return se}),r.d(i,"addLockableSelector",function(){return He}),r.d(i,"setFillGapMethod",function(){return ye}),r.d(i,"addFillGapTarget",function(){return _e}),r.d(i,"removeFillGapTarget",function(){return we}),r.d(i,"addFillGapSelector",function(){return $e}),r.d(i,"removeFillGapSelector",function(){return st}),r.d(i,"refillGaps",function(){return Rt});function S(N){for(var A=1;A<arguments.length;A++){var L=arguments[A]!=null?arguments[A]:{},V=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(V=V.concat(Object.getOwnPropertySymbols(L).filter(function(X){return Object.getOwnPropertyDescriptor(L,X).enumerable}))),V.forEach(function(X){E(N,X,L[X])})}return N}function E(N,A,L){return A in N?Object.defineProperty(N,A,{value:L,enumerable:!0,configurable:!0,writable:!0}):N[A]=L,N}var C=["padding","margin","width","max-width","none"],j=3,T={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:C[0],startTouchY:0,startTouchX:0},z=function(A){T.queue<=0&&(T.scroll=!1,mt(),R()),B(A),T.queue++},U=function(A){T.queue>0&&T.queue--,T.queue<=0&&(T.scroll=!0,ei(),J()),Y(A)},q=function(){return T.scroll},ne=function(){T.queue=0},he=function(A){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s(A)){var V=A.style.overflowY;L?q()||(A.style.overflowY=A.getAttribute("data-scroll-lock-saved-overflow-y-property")):A.style.overflowY="scroll";var X=re(A);return A.style.overflowY=V,X}else return 0},re=function(A){if(s(A))if(A===document.body){var L=document.documentElement.clientWidth,V=window.innerWidth,X=V-L;return X}else{var Te=A.style.borderLeftWidth,Pe=A.style.borderRightWidth;A.style.borderLeftWidth="0px",A.style.borderRightWidth="0px";var ge=A.offsetWidth-A.clientWidth;return A.style.borderLeftWidth=Te,A.style.borderRightWidth=Pe,ge}else return 0},de=function(){var A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return he(document.body,A)},ae=function(){return re(document.body)},B=function(A){if(A){var L=o(A);L.map(function(V){l(V,function(X){s(X)?X.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(X,'" is not a Element.'))})})}},Y=function(A){if(A){var L=o(A);L.map(function(V){l(V,function(X){s(X)?X.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(X,'" is not a Element.'))})})}},Q=function(A){if(A){var L=o(A);L.map(function(V){T.scrollableSelectors.push(V)})}},le=function(A){if(A){var L=o(A);L.map(function(V){T.scrollableSelectors=T.scrollableSelectors.filter(function(X){return X!==V})})}},se=function(A){if(A){var L=o(A);L.map(function(V){l(V,function(X){s(X)?X.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(X,'" is not a Element.'))})}),q()||mt()}},He=function(A){if(A){var L=o(A);L.map(function(V){T.lockableSelectors.push(V)}),q()||mt(),$e(A)}},ye=function(A){if(A)if(C.indexOf(A)!==-1)T.fillGapMethod=A,Rt();else{var L=C.join(", ");c('"'.concat(A,`" method is not available!
Available fill gap methods: `).concat(L,"."))}},_e=function(A){if(A){var L=o(A);L.map(function(V){l(V,function(X){s(X)?(X.setAttribute("data-scroll-lock-fill-gap",""),T.scroll||oe(X)):c('"'.concat(X,'" is not a Element.'))})})}},we=function(A){if(A){var L=o(A);L.map(function(V){l(V,function(X){s(X)?(X.removeAttribute("data-scroll-lock-fill-gap"),T.scroll||$(X)):c('"'.concat(X,'" is not a Element.'))})})}},$e=function(A){if(A){var L=o(A);L.map(function(V){T.fillGapSelectors.indexOf(V)===-1&&(T.fillGapSelectors.push(V),T.scroll||te(V))})}},st=function(A){if(A){var L=o(A);L.map(function(V){T.fillGapSelectors=T.fillGapSelectors.filter(function(X){return X!==V}),T.scroll||ie(V)})}},Rt=function(){T.scroll||R()},mt=function(){var A=u(T.lockableSelectors);bn(A)},ei=function(){var A=u(T.lockableSelectors);tt(A)},bn=function(A){var L=document.querySelectorAll(A);l(L,function(V){_(V)})},tt=function(A){var L=document.querySelectorAll(A);l(L,function(V){M(V)})},_=function(A){if(s(A)&&A.getAttribute("data-scroll-lock-locked")!=="true"){var L=window.getComputedStyle(A);A.setAttribute("data-scroll-lock-saved-overflow-y-property",L.overflowY),A.setAttribute("data-scroll-lock-saved-inline-overflow-property",A.style.overflow),A.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",A.style.overflowY),A.style.overflow="hidden",A.setAttribute("data-scroll-lock-locked","true")}},M=function(A){s(A)&&A.getAttribute("data-scroll-lock-locked")==="true"&&(A.style.overflow=A.getAttribute("data-scroll-lock-saved-inline-overflow-property"),A.style.overflowY=A.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),A.removeAttribute("data-scroll-lock-saved-overflow-property"),A.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),A.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),A.removeAttribute("data-scroll-lock-locked"))},R=function(){T.fillGapSelectors.map(function(A){te(A)})},J=function(){T.fillGapSelectors.map(function(A){ie(A)})},te=function(A){var L=document.querySelectorAll(A),V=T.lockableSelectors.indexOf(A)!==-1;l(L,function(X){oe(X,V)})},oe=function(A){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s(A)){var V;if(A.getAttribute("data-scroll-lock-lockable")===""||L)V=he(A,!0);else{var X=f(A,u(T.lockableSelectors));V=he(X,!0)}A.getAttribute("data-scroll-lock-filled-gap")==="true"&&$(A);var Te=window.getComputedStyle(A);if(A.setAttribute("data-scroll-lock-filled-gap","true"),A.setAttribute("data-scroll-lock-current-fill-gap-method",T.fillGapMethod),T.fillGapMethod==="margin"){var Pe=parseFloat(Te.marginRight);A.style.marginRight="".concat(Pe+V,"px")}else if(T.fillGapMethod==="width")A.style.width="calc(100% - ".concat(V,"px)");else if(T.fillGapMethod==="max-width")A.style.maxWidth="calc(100% - ".concat(V,"px)");else if(T.fillGapMethod==="padding"){var ge=parseFloat(Te.paddingRight);A.style.paddingRight="".concat(ge+V,"px")}}},ie=function(A){var L=document.querySelectorAll(A);l(L,function(V){$(V)})},$=function(A){if(s(A)&&A.getAttribute("data-scroll-lock-filled-gap")==="true"){var L=A.getAttribute("data-scroll-lock-current-fill-gap-method");A.removeAttribute("data-scroll-lock-filled-gap"),A.removeAttribute("data-scroll-lock-current-fill-gap-method"),L==="margin"?A.style.marginRight="":L==="width"?A.style.width="":L==="max-width"?A.style.maxWidth="":L==="padding"&&(A.style.paddingRight="")}},O=function(A){Rt()},D=function(A){T.scroll||(T.startTouchY=A.touches[0].clientY,T.startTouchX=A.touches[0].clientX)},W=function(A){if(!T.scroll){var L=T.startTouchY,V=T.startTouchX,X=A.touches[0].clientY,Te=A.touches[0].clientX;if(A.touches.length<2){var Pe=u(T.scrollableSelectors),ge={up:L<X,down:L>X,left:V<Te,right:V>Te},Ht={up:L+j<X,down:L-j>X,left:V+j<Te,right:V-j>Te},ce=function ti(Be){var yl=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Be){var bs=f(Be,Pe,!1);if(k(Be))return!1;if(yl||b(Be)&&f(Be,Pe)||p(Be,Pe)){var Pi=!1;x(Be)&&y(Be)?(ge.up&&m(Be)||ge.down&&v(Be))&&(Pi=!0):m(Be)&&v(Be)?(ge.left&&x(Be)||ge.right&&y(Be))&&(Pi=!0):(Ht.up&&m(Be)||Ht.down&&v(Be)||Ht.left&&x(Be)||Ht.right&&y(Be))&&(Pi=!0),Pi&&(bs?ti(bs,!0):A.cancelable&&A.preventDefault())}else ti(bs)}else A.cancelable&&A.preventDefault()};ce(A.target)}}},G=function(A){T.scroll||(T.startTouchY=0,T.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",O),typeof document<"u"&&(document.addEventListener("touchstart",D),document.addEventListener("touchmove",W,{passive:!1}),document.addEventListener("touchend",G));var Z={hide:function(A){c(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),z(A)},show:function(A){c(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),U(A)},toggle:function(A){c('"toggle" is deprecated! Do not use it.'),q()?z():U(A)},getState:function(){return c(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),q()},getWidth:function(){return c(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),de()},getCurrentWidth:function(){return c(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),ae()},setScrollableTargets:function(A){c(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),B(A)},setFillGapSelectors:function(A){c(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),$e(A)},setFillGapTargets:function(A){c(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),_e(A)},clearQueue:function(){c(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),ne()}},ee=S({disablePageScroll:z,enablePageScroll:U,getScrollState:q,clearQueueScrollLocks:ne,getTargetScrollBarWidth:he,getCurrentTargetScrollBarWidth:re,getPageScrollBarWidth:de,getCurrentPageScrollBarWidth:ae,addScrollableSelector:Q,removeScrollableSelector:le,addScrollableTarget:B,removeScrollableTarget:Y,addLockableSelector:He,addLockableTarget:se,addFillGapSelector:$e,removeFillGapSelector:st,addFillGapTarget:_e,removeFillGapTarget:we,setFillGapMethod:ye,refillGaps:Rt,_state:T},Z);i.default=ee}]).default})})(QU);const Dh=iw(Bm),ZU=w.div`
  width: 300px;
  height: 254px;
  /* background: #050505; */

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
  }
`,JU=w.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 834px) {
    line-height: 32px;
    font-size: 22px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 6px;
  }
`,qU=w.div`
  margin-top: 6px;
  display: flex;
  width: 100%;
  height: 224px;
  background-color: var(--primary-black-second-color);
  border-radius: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
  padding-right: 22px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    padding: 24px 40px;
  }
`,eV=w.div`
  font-family: sans-serif;
  text-align: center;
  width: 80px;
  height: 192px;
  /* padding: 8px; */
  background-color: var(--primary-black-second-color);
  border-radius: 20px;
  margin-right: 20px;

  @media screen and (min-width: 834px) {
    margin-right: 40px;
  }
`,tV=w.h3`
  margin-top: 38px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`,nV=w.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: baseline;
  }
`,iV=w.div`
  display: flex;
  align-items: baseline;
  margin-top: 12px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
`,Qb=w.span`
  margin-left: 8px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-left: 2px;
  }
`,rV=w.span`
  margin-left: 4px;
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,oV=w.div`
  margin-top: 8px;
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    margin-left: 40px;
  }
`,sV=w.button`
  justify-content: center;
  width: 170px;
  height: 36px;
  margin-top: 16px;
  display: flex;
  padding: 8px 10px;
  align-items: center;
  border-radius: 12px;
  background: var(--primary-light-green-color);
  color: var(--primary-black-second-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,aV=w.img`
  margin-top: 2px;
  margin-right: 8px;
`;w.span`
  position: relative;
  z-index: 20;
  color: var(--primary-white-color);
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;const lV=w.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`,cV=w.div`
  position: absolute;
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: #0f0f0f;
  box-shadow: 0px 4px 14px rgba(227, 255, 168, 0.2);

  @media screen and (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding-top: 24px;
    padding-left: 40px;
    padding-right: 40;
  }
`,uV=w.h1`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    line-height: 36px;
    font-size: 30px;
  }
`,dV=w.form`
  display: flex;
  flex-direction: column;
`,fV=w.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`,hV=w.input`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 276px;
  height: 36px;
  display: flex;
  padding: 8px 10px;
  margin-bottom: 16px;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-black-second-color);
  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -moz-appearance: textfield;
    }
  }
`,pV=w.button`
  color: var(--primary-black-second-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 276px;
  height: 36px;
  margin-bottom: 16px;
  border-radius: 12px;
  border: 1px solid var(--primary-light-green-color);
  background: var(--primary-light-green-color);
`,mV=w.button`
  width: 276px;
  height: 20px;
  background: var(--primary-black-second-color);
  color: var(--primary-grey-color);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border: none;
`;Ve.defaults.baseURL="https://healthy-hub-2d3x.onrender.com/api";function J0(e){Ve.defaults.headers.common.Authorization=`Bearer ${e}`}const qc=ot("user/statistics",async(e,t)=>{try{J0(t.getState().auth.token);const n=await Ve.get("/user/statistics");return console.log(n.data),n.data}catch(n){return t.rejectWithValue(n.message)}}),eu=ot("user/water-intake",async(e,t)=>{try{J0(t.getState().auth.token);const{data:n}=await Ve.post("/user/water-intake",{water:e});return console.log(e),n}catch(n){return t.rejectWithValue(n.message)}}),Lh=ot("user/food-intake",async(e,t)=>{try{J0(t.getState().auth.token);const{data:n}=await Ve.post("/user/food-intake",{products:e,type:e});return console.log(e),console.log(n),n}catch(n){return t.rejectWithValue(n.response.data)}}),gV=({closeModal:e})=>{const t=sn();Ci.Notify.init({zindex:1e5,position:"center-top"});const n=o=>{o.preventDefault();const s=o.currentTarget,a=Number(s.elements.number.value);if(a<=0){Ci.Notify.failure("The entered number must be greater than zero :)");return}t(eu(a)),s.reset(),e()},i=o=>{o.code==="Escape"&&e()};window.addEventListener("keydown",i);const r=o=>{o.currentTarget===o.target&&e()};return h.jsx(lV,{onClick:r,children:h.jsxs(cV,{children:[h.jsx(uV,{children:"Add water intake"}),h.jsxs(dV,{onSubmit:n,children:[h.jsx(fV,{children:"How much water"}),h.jsx(hV,{type:"number",name:"number",placeholder:"Enter milliliters"}),h.jsx(pV,{type:"submit",children:"Confirm"}),h.jsx(mV,{onClick:e,children:"Cancel"})]})]})})};vs.register(nd,rd,va,K0,Y0);const xV=()=>{const[e,t]=P.useState(!1),[n,i]=P.useState(2e3),[r,o]=P.useState(1800),[s,a]=P.useState(n-r),[l,c]=P.useState(r/n*100),u=()=>{t(!0),Dh.disablePageScroll(document.body),o()},d=()=>{t(!1),Dh.clearQueueScrollLocks(),Dh.enablePageScroll()},f={labels:["Water Target"],datasets:[{data:[r,n],backgroundColor:["#B6C3FF","transparent"],borderWidth:1,borderColor:"black",borderRadius:20,borderSkipped:!1}]},p={plugins:{legend:{display:!1},tooltip:{enabled:!1},label:{enabled:!1}},scales:{x:{display:!1,stacked:!0},y:{display:!1,stacked:!0}},layout:{padding:{top:8,bottom:0}},barPercentage:.8,categoryPercentage:1.1},g={id:"barPattern",beforeDatasetsDraw(m,v,x){const{ctx:y,data:b,chartArea:{top:k,bottom:S,height:E},scales:{x:C,y:j}}=m;y.save();const T=m.getDatasetMeta(0).data[0].width;y.fillRect(C.getPixelForValue(0)-T/2,k,T,E-.5),y.font="16px Poppins",y.textStyle="normal",y.textAlign="center",y.textBaseLine="middle",y.fillStyle="#B6C3FF",y.fontWeight="600",y.lineHeight="22px",y.fillText(`${Math.round(l)}%`,m.getDatasetMeta(0).data[0].x,m.getDatasetMeta(0).data[0].y-6),y.restore()}};return h.jsxs(ZU,{children:[h.jsx(JU,{children:"Water"}),h.jsxs(qU,{children:[h.jsx(eV,{style:{width:"80px",height:"192px"},children:h.jsx(aU,{data:f,options:p,plugins:[g],width:82,height:187})}),h.jsxs("div",{children:[h.jsx(tV,{children:"Water consumption"}),h.jsxs(nV,{children:[h.jsxs(iV,{children:[n,h.jsx(Qb,{children:"ml"})]}),h.jsxs(oV,{children:["left:",h.jsx(rV,{children:s}),h.jsx(Qb,{children:"ml"})]})]}),e&&h.jsx(gV,{closeModal:d}),h.jsxs(sV,{onClick:u,children:[h.jsx(aV,{src:KU,alt:"plus"}),"Add water intake"]})]})]})]})},yV=w.div`
  width: 300px;
  height: 410px;
  margin-bottom: 50px;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 278px;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
    /* padding: 36px 40px 36px 96px; */
  }
`,vV=w.h2`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`,bV=w.div`
  width: 300px;
  height: 380;
  background-color: var(--primary-black-second-color);
  padding: 16px 72px 16px 12px;
  /* padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px; */
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 834px) {
    display: flex;
    width: 780px;
    height: 240px;
    padding: 36px 40px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 560px;
  }
`,wV=w.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    margin-top: 0px;
    margin-left: 40px;
  }
`,kV=w.div`
  display: flex;
  align-items: center;
`,Fh=w.div`
  margin-left: 12px;
  display: flex;
`,zh=w.h3`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`,Ih=w.div`
  display: flex;
  margin-top: 2px;
`,Bh=w.p`
  color: var(--primary-white-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,xo=w.span`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-left: 4px;
`,Wh=w.p`
  margin-left: 12px;
  color: var(--primary-grey-color);
`,SV=w.div`
  display: flex;
  align-items: center;
`,CV=w.div`
  display: flex;
  align-items: center;
`;vs.register(Fo,K0,Y0);const AV=()=>{const{ratio:e,bmr:t}=It(Ak);console.log(e);const n=t,i=1900,r=n-i,o={datasets:[{label:"Calories",data:[i,r],backgroundColor:["#45FFBC","#292928"],borderColor:["#45FFBC","#292928"],borderWidth:[1,0],cutout:"80%",borderRadius:["50","0"]}]},s={id:"textCenter",beforeDatasetsDraw(E,C,j){const{ctx:T,data:z}=E;T.save(),T.font="bolder 32px Poppins",T.textStyle="normal",T.textAlign="center",T.textBaseLine="middle",T.fillStyle="#FFF",T.fontWeight="500",T.lineHeight="38px",T.fillText(`${z.datasets[0].data[0]}`,E.getDatasetMeta(0).data[0].x,E.getDatasetMeta(0).data[0].y-10),T.font="bolder 14px Poppins",T.textStyle="normal",T.textAlign="center",T.textBaseLine="middle",T.fillStyle="#B6B6B6",T.fontWeight="400",T.lineHeight="20px",T.fillText("calories",E.getDatasetMeta(0).data[0].x,E.getDatasetMeta(0).data[0].y+20),T.restore()}},a=e.carbonohidrates,l=100,c=Math.floor((a-l)/a*100),u={datasets:[{label:"carbonohidrates",data:[c,100-c],backgroundColor:["#FFC4F7","#292928"],borderColor:["#FFC4F7","#292928"],borderWidth:1,cutout:"90%",borderRadius:["50","0"]}]},d={id:"carbonohidratesTextCenter",beforeDatasetsDraw(E,C,j){const{ctx:T,data:z}=E;T.save(),T.font="12px Poppins",T.textStyle="normal",T.textAlign="center",T.textBaseLine="middle",T.fillStyle="#B6B6B6",T.fontWeight="400",T.lineHeight="20px",T.fillText(`${z.datasets[0].data[0]}%`,E.getDatasetMeta(0).data[0].x,E.getDatasetMeta(0).data[0].y),T.restore()}},f=e.protein,p=150,g=Math.floor((f-p)/f*100),m={datasets:[{label:"protein",data:[g,100-g],backgroundColor:["#FFF3B7","#292928"],borderColor:["#FFF3B7","#292928"],borderWidth:[1,0],cutout:"90%",borderRadius:["50","0"]}]},v={id:"proteinTextCenter",beforeDatasetsDraw(E,C,j){const{ctx:T,data:z}=E;T.save(),T.font="12px Poppins",T.textStyle="normal",T.textAlign="center",T.textBaseLine="middle",T.fillStyle="#B6B6B6",T.fontWeight="400",T.lineHeight="20px",T.fillText(`${z.datasets[0].data[0]}%`,E.getDatasetMeta(0).data[0].x,E.getDatasetMeta(0).data[0].y),T.restore()}},x=e.fat,y=25,b=Math.floor((x-y)/x*100),k={datasets:[{label:"fat",data:[b,100-b],backgroundColor:["#B6B6B6","#292928"],borderColor:["#B6B6B6","#292928"],borderWidth:1,cutout:"90%",borderRadius:["50","0"]}]},S={id:"fatTextCenter",beforeDatasetsDraw(E,C,j){const{ctx:T,data:z}=E;T.save(),T.font="12px Poppins",T.textStyle="normal",T.textAlign="center",T.textBaseLine="middle",T.fillStyle="#B6B6B6",T.fontWeight="400",T.lineHeight="20px",T.fillText(`${z.datasets[0].data[0]}%`,E.getDatasetMeta(0).data[0].x,E.getDatasetMeta(0).data[0].y),T.restore()}};return h.jsxs(yV,{children:[h.jsx(vV,{children:"Food"}),h.jsxs(bV,{children:[h.jsx("div",{style:{width:"168px"},children:h.jsx(fc,{data:o,plugins:[s]})}),h.jsxs(wV,{children:[h.jsx(kV,{children:h.jsxs(Fh,{children:[h.jsx("div",{style:{width:"48px"},children:h.jsx(fc,{data:u,plugins:[d]})}),h.jsxs("div",{children:[h.jsx(zh,{children:"Carbonohidrates"}),h.jsxs(Ih,{children:[h.jsxs(Bh,{children:["Goal:",h.jsx(xo,{children:a})]}),h.jsxs(Wh,{children:["left:",h.jsx(xo,{children:l})]})]})]})]})}),h.jsx(SV,{children:h.jsxs(Fh,{children:[h.jsx("div",{style:{width:"48px"},children:h.jsx(fc,{data:m,plugins:[v]})}),h.jsxs("div",{children:[h.jsx(zh,{children:"Protein"}),h.jsxs(Ih,{children:[h.jsxs(Bh,{children:["Goal: ",h.jsx(xo,{children:f})]}),h.jsxs(Wh,{children:["left:",h.jsx(xo,{children:p})]})]})]})]})}),h.jsx(CV,{children:h.jsxs(Fh,{children:[h.jsx("div",{style:{width:"48px"},children:h.jsx(fc,{data:k,plugins:[S]})}),h.jsxs("div",{children:[h.jsx(zh,{children:"Fat"}),h.jsxs(Ih,{children:[h.jsxs(Bh,{children:["Goal: ",h.jsx(xo,{children:x})]}),h.jsxs(Wh,{children:["left:",h.jsx(xo,{children:y})]})]})]})]})})]})]})]})},EV=w.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding: 24px 27px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 20px 34px 54px;
  }
`,_V=w.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`,TV=w.h1`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  color: white;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
  }
`,PV=w(Zn)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: #b6b6b6;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`,jV=w.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,Uh=w.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (min-width: 834px) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and (min-width: 834px) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and (min-width: 1440px) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (min-width: 1440px) {
      flex-basis: 560px;
    }
  }
`,OV=w.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    /* flex-basis: calc((100% - 20px) / 2); */
    width: 1440px;
  }
`,MV=w.div`
  /* width: 558px; */
  width: 47%;
  margin: 0;
`,RV=w.h2`
  color: var(--Color-Primary-White, #fff);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 25px;
  }
`,NV=w.div`
  width: 676px;
  @media screen and (min-width: 834px) {
    width: 780px;
  }
`,DV=w.img``,LV=w(Zn)`
  color: var(--primary-grey-color);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  gap: 6px;
  margin-top: 16px;
`,FV="/healthyhub-project/assets/arrow-1eb9177f.svg",Zb=()=>{const[e,t]=P.useState([]),n=It(r=>r.auth.token),i=sn();return P.useEffect(()=>{i(qc())},[i]),P.useEffect(()=>{M4(10).then(r=>{const o=r.slice(0,4);t(o)}).catch(r=>console.error(r))},[n]),h.jsxs(EV,{children:[h.jsxs(_V,{children:[h.jsx(TV,{children:"Today"}),h.jsxs(PV,{to:"/dashboard",children:[h.jsx("p",{children:"On the way to the goal"}),h.jsx("img",{})]})]}),h.jsxs(jV,{children:[h.jsx(Uh,{children:h.jsx(UU,{})}),h.jsx(Uh,{children:h.jsx(xV,{})}),h.jsx(Uh,{children:h.jsx(AV,{})})]}),h.jsxs(OV,{children:[h.jsx(MV,{children:h.jsx(XU,{})}),h.jsxs(NV,{children:[h.jsx(RV,{children:"Recommended food"}),h.jsx(O4,{recommendedImage:e}),h.jsxs(LV,{to:"/recommended-food",children:["See more",h.jsx(DV,{src:FV,alt:"arrow"})]})]})]})]})};function zV(){const e=sn(),{isRefreshing:t}=za();P.useEffect(()=>{e(ca())},[e]);const{isLoggedIn:n}=za();return t?h.jsx(PU,{}):h.jsx(m_,{children:h.jsxs(dn,{path:"/",element:h.jsx(YD,{}),children:[h.jsx(dn,{index:!0,element:n?h.jsx(Zb,{}):h.jsx(YF,{})}),h.jsx(dn,{path:"signup",element:h.jsx(Nh,{redirectTo:"/signin",component:h.jsx(JL,{})})}),h.jsx(dn,{path:"signin",element:h.jsx(Nh,{redirectTo:"/main",component:h.jsx(fF,{})})}),h.jsx(dn,{path:"main",element:h.jsx(Ds,{redirectTo:"/signin",component:h.jsx(Zb,{})})}),h.jsx(dn,{path:"forgot-password",element:h.jsx(Nh,{redirectTo:"/",component:h.jsx(_F,{})})}),h.jsx(dn,{path:"dashboard",element:h.jsx(Ds,{redirectTo:"/signin",component:h.jsx(EU,{})})}),h.jsx(dn,{path:"diary",element:h.jsx(Ds,{redirectTo:"/signin",component:h.jsx(Jz,{})})}),h.jsx(dn,{path:"recommended-food",element:h.jsx(Ds,{redirectTo:"/signin",component:h.jsx(LF,{})})}),h.jsx(dn,{path:"settings",element:h.jsx(Ds,{redirectTo:"/signin",component:h.jsx(gz,{})})}),h.jsx(dn,{path:"*",element:h.jsx(Hg,{to:"/",replace:!0})})]})})}var q0="persist:",ex="persist/FLUSH",cf="persist/REHYDRATE",tx="persist/PAUSE",nx="persist/PERSIST",ix="persist/PURGE",rx="persist/REGISTER",IV=-1;function tu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tu=function(n){return typeof n}:tu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tu(e)}function Jb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function BV(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jb(n,!0).forEach(function(i){WV(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jb(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function WV(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UV(e,t,n,i){i.debug;var r=BV({},n);return e&&tu(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(r[o]=e[o])}),r}function VV(e){var t=e.blacklist||null,n=e.whitelist||null,i=e.transforms||[],r=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key),s=e.storage,a;e.serialize===!1?a=function(S){return S}:typeof e.serialize=="function"?a=e.serialize:a=HV;var l=e.writeFailHandler||null,c={},u={},d=[],f=null,p=null,g=function(S){Object.keys(S).forEach(function(E){x(E)&&c[E]!==S[E]&&d.indexOf(E)===-1&&d.push(E)}),Object.keys(c).forEach(function(E){S[E]===void 0&&x(E)&&d.indexOf(E)===-1&&c[E]!==void 0&&d.push(E)}),f===null&&(f=setInterval(m,r)),c=S};function m(){if(d.length===0){f&&clearInterval(f),f=null;return}var k=d.shift(),S=i.reduce(function(E,C){return C.in(E,k,c)},c[k]);if(S!==void 0)try{u[k]=a(S)}catch(E){console.error("redux-persist/createPersistoid: error serializing state",E)}else delete u[k];d.length===0&&v()}function v(){Object.keys(u).forEach(function(k){c[k]===void 0&&delete u[k]}),p=s.setItem(o,a(u)).catch(y)}function x(k){return!(n&&n.indexOf(k)===-1&&k!=="_persist"||t&&t.indexOf(k)!==-1)}function y(k){l&&l(k)}var b=function(){for(;d.length!==0;)m();return p||Promise.resolve()};return{update:g,flush:b}}function HV(e){return JSON.stringify(e)}function $V(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key),i=e.storage;e.debug;var r;return e.deserialize===!1?r=function(s){return s}:typeof e.deserialize=="function"?r=e.deserialize:r=GV,i.getItem(n).then(function(o){if(o)try{var s={},a=r(o);return Object.keys(a).forEach(function(l){s[l]=t.reduceRight(function(c,u){return u.out(c,l,a)},r(a[l]))}),s}catch(l){throw l}else return})}function GV(e){return JSON.parse(e)}function YV(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:q0).concat(e.key);return t.removeItem(n,XV)}function XV(e){}function qb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function ri(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qb(n,!0).forEach(function(i){KV(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qb(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function KV(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QV(e,t){if(e==null)return{};var n=ZV(e,t),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function ZV(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var JV=5e3;function qV(e,t){var n=e.version!==void 0?e.version:IV;e.debug;var i=e.stateReconciler===void 0?UV:e.stateReconciler,r=e.getStoredState||$V,o=e.timeout!==void 0?e.timeout:JV,s=null,a=!1,l=!0,c=function(d){return d._persist.rehydrated&&s&&!l&&s.update(d),d};return function(u,d){var f=u||{},p=f._persist,g=QV(f,["_persist"]),m=g;if(d.type===nx){var v=!1,x=function(j,T){v||(d.rehydrate(e.key,j,T),v=!0)};if(o&&setTimeout(function(){!v&&x(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,s||(s=VV(e)),p)return ri({},t(m,d),{_persist:p});if(typeof d.rehydrate!="function"||typeof d.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),r(e).then(function(C){var j=e.migrate||function(T,z){return Promise.resolve(T)};j(C,n).then(function(T){x(T)},function(T){x(void 0,T)})},function(C){x(void 0,C)}),ri({},t(m,d),{_persist:{version:n,rehydrated:!1}})}else{if(d.type===ix)return a=!0,d.result(YV(e)),ri({},t(m,d),{_persist:p});if(d.type===ex)return d.result(s&&s.flush()),ri({},t(m,d),{_persist:p});if(d.type===tx)l=!0;else if(d.type===cf){if(a)return ri({},m,{_persist:ri({},p,{rehydrated:!0})});if(d.key===e.key){var y=t(m,d),b=d.payload,k=i!==!1&&b!==void 0?i(b,u,y,e):y,S=ri({},k,{_persist:ri({},p,{rehydrated:!0})});return c(S)}}}if(!p)return t(u,d);var E=t(m,d);return E===m?u:c(ri({},E,{_persist:p}))}}function ew(e){return nH(e)||tH(e)||eH()}function eH(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function tH(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function nH(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function tw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function Wm(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tw(n,!0).forEach(function(i){iH(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tw(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function iH(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var IC={registry:[],bootstrapped:!1},rH=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:IC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case rx:return Wm({},t,{registry:[].concat(ew(t.registry),[n.key])});case cf:var i=t.registry.indexOf(n.key),r=ew(t.registry);return r.splice(i,1),Wm({},t,{registry:r,bootstrapped:r.length===0});default:return t}};function oH(e,t,n){var i=n||!1,r=qg(rH,IC,t&&t.enhancer?t.enhancer:void 0),o=function(c){r.dispatch({type:rx,key:c})},s=function(c,u,d){var f={type:cf,payload:u,err:d,key:c};e.dispatch(f),r.dispatch(f),i&&a.getState().bootstrapped&&(i(),i=!1)},a=Wm({},r,{purge:function(){var c=[];return e.dispatch({type:ix,result:function(d){c.push(d)}}),Promise.all(c)},flush:function(){var c=[];return e.dispatch({type:ex,result:function(d){c.push(d)}}),Promise.all(c)},pause:function(){e.dispatch({type:tx})},persist:function(){e.dispatch({type:nx,register:o,rehydrate:s})}});return t&&t.manualPersist||a.persist(),a}var ox={},sx={};sx.__esModule=!0;sx.default=lH;function nu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nu=function(n){return typeof n}:nu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},nu(e)}function Vh(){}var sH={getItem:Vh,setItem:Vh,removeItem:Vh};function aH(e){if((typeof self>"u"?"undefined":nu(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function lH(e){var t="".concat(e,"Storage");return aH(t)?self[t]:sH}ox.__esModule=!0;ox.default=dH;var cH=uH(sx);function uH(e){return e&&e.__esModule?e:{default:e}}function dH(e){var t=(0,cH.default)(e);return{getItem:function(i){return new Promise(function(r,o){r(t.getItem(i))})},setItem:function(i,r){return new Promise(function(o,s){o(t.setItem(i,r))})},removeItem:function(i){return new Promise(function(r,o){r(t.removeItem(i))})}}}var BC=void 0,fH=hH(ox);function hH(e){return e&&e.__esModule?e:{default:e}}var pH=(0,fH.default)("local");BC=pH;const mH={user:{username:null,email:null,ratio:[]},token:null,isLoggedIn:!1,isRefreshing:!1},gH=gs({name:"auth",initialState:mH,extraReducers:e=>e.addCase(jS.fulfilled,(t,n)=>{t.user=n.payload.user,t.token=n.payload.token,t.isLoggedIn=!0}).addCase(OS.fulfilled,(t,n)=>{t.user=n.payload.user,t.token=n.payload.token,t.isLoggedIn=!0}).addCase(MS.fulfilled,t=>{t.user={username:null,email:null},t.token=null,t.isLoggedIn=!1}).addCase(ca.pending,t=>{t.isRefreshing=!0}).addCase(ca.fulfilled,(t,n)=>{t.user=n.payload,t.isLoggedIn=!0,t.isRefreshing=!1}).addCase(ca.rejected,t=>{t.isRefreshing=!1}).addCase(NS.fulfilled,(t,n)=>{t.user=n.payload.user,t.token=n.payload.token,t.isLoggedIn=!0}).addCase(RS.fulfilled,(t,n)=>{t.user.goal=n.payload.user,t.token=n.payload.token,t.isLoggedIn=!0})}),xH=gH.reducer,Hh=e=>{e.isLoading=!0},$h=(e,t)=>{e.isLoading=!1,e.error=t.payload},yH=(e,t)=>{e.isLoading=!1,e.error=null,e.items=t.payload},vH=(e,t)=>{e.isLoading=!1,e.error=null,e.items.breakfast=t.payload.breakfast,e.items.lunch=t.payload.lunch,e.items.dinner=t.payload.dinner,e.items.snack=t.payload.snack,e.items.total.calories.used=t.payload.total.calories.used,e.items.total.carbohydrates.used=t.payload.total.carbohydrates.used,e.items.total.protein.used=t.payload.total.protein.used,e.items.total.fat.used=t.payload.total.fat.used,e.items.breakfastDishes=t.payload.breakfastDishes,e.items.lunchDishes=t.payload.lunchDishes,e.items.dinnerDishes=t.payload.dinnerDishes,e.items.snackDishes=t.payload.snackDishes},bH=(e,t)=>{e.isLoading=!1,e.error=null,e.items.water=t.payload},wH=gs({name:"goals",initialState:{items:{},isLoading:!1,error:null},extraReducers:e=>{e.addCase(qc.pending,Hh).addCase(qc.fulfilled,yH).addCase(qc.rejected,$h).addCase(eu.pending,Hh).addCase(eu.fulfilled,bH).addCase(eu.rejected,$h).addCase(Lh.pending,Hh).addCase(Lh.fulfilled,vH).addCase(Lh.rejected,$h)}}),kH=wH.reducer,SH={key:"auth",storage:BC,whitelist:["token"]},WC=WT({reducer:{auth:qV(SH,xH),goals:kH},middleware:e=>e({serializableCheck:{ignoredActions:[ex,cf,tx,nx,ix,rx]}}),devTools:!1}),CH=oH(WC);function iu(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?iu=function(n){return typeof n}:iu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},iu(e)}function AH(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nw(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function EH(e,t,n){return t&&nw(e.prototype,t),n&&nw(e,n),e}function _H(e,t){return t&&(iu(t)==="object"||typeof t=="function")?t:ru(e)}function Um(e){return Um=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Um(e)}function ru(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function TH(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Vm(e,t)}function Vm(e,t){return Vm=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},Vm(e,t)}function ou(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var UC=function(e){TH(t,e);function t(){var n,i;AH(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return i=_H(this,(n=Um(t)).call.apply(n,[this].concat(o))),ou(ru(i),"state",{bootstrapped:!1}),ou(ru(i),"_unsubscribe",void 0),ou(ru(i),"handlePersistorState",function(){var a=i.props.persistor,l=a.getState(),c=l.bootstrapped;c&&(i.props.onBeforeLift?Promise.resolve(i.props.onBeforeLift()).finally(function(){return i.setState({bootstrapped:!0})}):i.setState({bootstrapped:!0}),i._unsubscribe&&i._unsubscribe())}),i}return EH(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}(P.PureComponent);ou(UC,"defaultProps",{children:null,loading:null});Yh.createRoot(document.getElementById("root")).render(h.jsx(Qn.StrictMode,{children:h.jsx(H_,{store:WC,children:h.jsx(UC,{loading:null,persistor:CH,children:h.jsx(w_,{basename:"/healthyhub-project",children:h.jsx(zV,{})})})})}))});export default PH();
