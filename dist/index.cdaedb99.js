!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,r,n,a){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof o[n]&&o[n],c=i.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,r){if(!c[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var a="function"==typeof o[n]&&o[n];if(!r&&a)return a(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(i)return i(t,!0);// Try the node require function if it exists.
if(s&&"string"==typeof t)return s(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}l.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},l.cache={};var d=c[t]=new f.Module(t);e[t][0].call(d.exports,l,d,d.exports,this)}return c[t].exports;function l(e){var t=l.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=c,f.parent=i,f.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(f,"root",{get:function(){return o[n]}}),o[n]=f;for(var u=0;u<t.length;u++)f(t[u]);if(r){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=f(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):a&&(this[a]=d)}}({"2nzDi":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");e("core-js/modules/web.immediate.js"),e("regenerator-runtime");var a=e("./model.js"),o=e("./config.js"),i=e("./views/searchView.js"),c=n.interopDefault(i),s=e("./views/recipeView.js"),f=n.interopDefault(s),u=e("./views/resultsView.js"),d=n.interopDefault(u),l=e("./views/paginationView.js"),p=n.interopDefault(l),b=e("./views/bookmarksView.js"),h=n.interopDefault(b),m=e("./views/addRecipeView.js"),g=n.interopDefault(m);e("regenerator-runtime/runtime");let v=document.querySelector(".recipe"),y=async function(){try{// to get the id in the url bar
let e=window.location.hash.slice(1);if(!e)return;(0,f.default).renderSpinner(v),// update results view to mark selected search  result
(0,d.default).update(a.getSearchResultsPage()),(0,h.default).update(a.state.bookmarks),// loading recipe from model
await a.loadRecipe(e),// 2. Rendering recipe to homepage
(0,f.default).render(a.state.recipe)}catch(e){(0,f.default).renderError()}};y();let w=async function(){try{// 1. Get search query
let e=(0,c.default).getQuery();if(!e)return;(0,d.default).renderSpinner(),// 2. Load search results
await a.loadSearchResults(e),// 3. Render results
// resultsView.render(model.state.search.results);
(0,d.default).render(a.getSearchResultsPage()),// 4. Render pagination
//  pass the results to its view so we can determine the number of pages
(0,p.default).render(a.state.search)}catch(e){throw e}},_=async function(e){try{//show loading spinner
(0,g.default).renderSpinner(),// upload new recipe
await a.uploadRecipe(e),// render the recipe
(0,f.default).render(a.state.recipe),(0,h.default).render(a.state.bookmarks),// change ID in the url
window.history.pushState(null,"",`#${a.state.recipe.id}`),// success message
(0,g.default).renderMessage(),// close the form window
setTimeout(function(){(0,g.default).toggleWindow()},1e3*o.MODAL_CLOSE_SEC)}catch(e){(0,g.default).renderError(e.message)}};(0,h.default).addHandlerRender(function(){(0,h.default).render(a.state.bookmarks)}),(0,f.default).addHandleRender(y),(0,f.default).addHandlerAddBookmark(function(){a.state.recipe.bookmarked?a.deleteBookmark(a.state.recipe.id):a.addBookmark(a.state.recipe),// update recipe view
(0,f.default).update(a.state.recipe),// render bookmarks
(0,h.default).render(a.state.bookmarks)}),(0,f.default).addHandlerUpdateServings(function(e){// update the recipe servings (in state)
a.updateServings(e),// update the view
// recipeView.render(model.state.recipe);
(0,f.default).update(a.state.recipe)}),(0,c.default).addHandlerSearch(w),(0,p.default).addHandlerClick(function(e){// 1. Render NEW results
(0,d.default).render(a.getSearchResultsPage(e)),// 2. Render NEW pagination
(0,p.default).render(a.state.search)}),(0,g.default).addHandlerUpload(_)},{"core-js/modules/web.immediate.js":"hcyNZ","regenerator-runtime":"7RkV0","./model.js":"5XrL7","./config.js":"cTPit","./views/searchView.js":"6L6eH","./views/recipeView.js":"gcMxR","./views/resultsView.js":"65N7q","./views/paginationView.js":"3vGkl","./views/bookmarksView.js":"9IfoN","./views/addRecipeView.js":"3CEDh","regenerator-runtime/runtime":"7RkV0","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hcyNZ:[function(e,t,r){// TODO: Remove this module from `core-js@4` since it's split to modules listed below
e("52e9b3eefbbce1ed"),e("292fa64716f5b39e")},{"52e9b3eefbbce1ed":"huxpP","292fa64716f5b39e":"kAiYh"}],huxpP:[function(e,t,r){var n=e("79389288a80b279c"),a=e("22a078687be7e1b6"),o=e("84ba5ca62b8b14c9").clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
n({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==o},{clearImmediate:o})},{"79389288a80b279c":"dKyFE","22a078687be7e1b6":"cfrjR","84ba5ca62b8b14c9":"dgCCh"}],dKyFE:[function(e,t,r){var n=e("6643b6592ad59b23"),a=e("2ec751f39e500b85").f,o=e("b4567636b28a3b3a"),i=e("50460aa43dd4048a"),c=e("581238c99f8c2c30"),s=e("566a383894c688bc"),f=e("f0e2e697f04e8ad9");/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/t.exports=function(e,t){var r,u,d,l,p,b=e.target,h=e.global,m=e.stat;if(r=h?n:m?n[b]||c(b,{}):(n[b]||{}).prototype)for(u in t){// contained in target
if(l=t[u],d=e.dontCallGetSet?(p=a(r,u))&&p.value:r[u],!f(h?u:b+(m?".":"#")+u,e.forced)&&void 0!==d){if(typeof l==typeof d)continue;s(l,d)}(e.sham||d&&d.sham)&&o(l,"sham",!0),i(r,u,l,e)}}},{"6643b6592ad59b23":"cfrjR","2ec751f39e500b85":"jg3wR",b4567636b28a3b3a:"b5Nku","50460aa43dd4048a":"5LWBN","581238c99f8c2c30":"4HPs2","566a383894c688bc":"53rVh",f0e2e697f04e8ad9:"bPIm8"}],cfrjR:[function(e,t,r){var n=arguments[3],a=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
t.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
a("object"==typeof self&&self)||a("object"==typeof n&&n)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||this||Function("return this")()},{}],jg3wR:[function(e,t,r){var n=e("c04e6fb248689dba"),a=e("553ec943aa2a4554"),o=e("bbc5e69071aa2fbd"),i=e("1d2ffbfd99e01f41"),c=e("c4ea69a78a643d87"),s=e("8ab18ff766aa2ab9"),f=e("3761c5d34b7aa48f"),u=e("c4dfcc26308f1b4a"),d=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
r.f=n?d:function(e,t){if(e=c(e),t=s(t),u)try{return d(e,t)}catch(e){}if(f(e,t))return i(!a(o.f,e,t),e[t])}},{c04e6fb248689dba:"8Jsbd","553ec943aa2a4554":"l2RNb",bbc5e69071aa2fbd:"eipw5","1d2ffbfd99e01f41":"6Ckdf",c4ea69a78a643d87:"gnUiO","8ab18ff766aa2ab9":"eGiwy","3761c5d34b7aa48f":"7hZGt",c4dfcc26308f1b4a:"dWHbx"}],"8Jsbd":[function(e,t,r){var n=e("735b783268fd06c0");// Detect IE8's incomplete defineProperty implementation
t.exports=!n(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},{"735b783268fd06c0":"oct0m"}],oct0m:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],l2RNb:[function(e,t,r){var n=e("44e025d030d66023"),a=Function.prototype.call;t.exports=n?a.bind(a):function(){return a.apply(a,arguments)}},{"44e025d030d66023":"byI16"}],byI16:[function(e,t,r){var n=e("2642aa7619056f20");t.exports=!n(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")})},{"2642aa7619056f20":"oct0m"}],eipw5:[function(e,t,r){var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!n.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
r.f=o?function(e){var t=a(this,e);return!!t&&t.enumerable}:n},{}],"6Ckdf":[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],gnUiO:[function(e,t,r){// toObject with fallback for non-array-like ES3 strings
var n=e("9d8f8f50ac9468eb"),a=e("f7224aed72953ac4");t.exports=function(e){return n(a(e))}},{"9d8f8f50ac9468eb":"8V4i5",f7224aed72953ac4:"kVEKk"}],"8V4i5":[function(e,t,r){var n=e("7ba7e65983d7b662"),a=e("df551e12a7c872dd"),o=e("1d34ea813cebff9c"),i=Object,c=n("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
t.exports=a(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!i("z").propertyIsEnumerable(0)})?function(e){return"String"===o(e)?c(e,""):i(e)}:i},{"7ba7e65983d7b662":"72EKL",df551e12a7c872dd:"oct0m","1d34ea813cebff9c":"efzsK"}],"72EKL":[function(e,t,r){var n=e("829dd7a4e960cf9e"),a=Function.prototype,o=a.call,i=n&&a.bind.bind(o,o);t.exports=n?i:function(e){return function(){return o.apply(e,arguments)}}},{"829dd7a4e960cf9e":"byI16"}],efzsK:[function(e,t,r){var n=e("1c71c3f6daac476c"),a=n({}.toString),o=n("".slice);t.exports=function(e){return o(a(e),8,-1)}},{"1c71c3f6daac476c":"72EKL"}],kVEKk:[function(e,t,r){var n=e("74607922ed30019f"),a=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
t.exports=function(e){if(n(e))throw a("Can't call method on "+e);return e}},{"74607922ed30019f":"jYZx8"}],jYZx8:[function(e,t,r){// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
t.exports=function(e){return null==e}},{}],eGiwy:[function(e,t,r){var n=e("53a3a67ac381c4e8"),a=e("b992ca9cdcf7937b");// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
t.exports=function(e){var t=n(e,"string");return a(t)?t:t+""}},{"53a3a67ac381c4e8":"3QM7N",b992ca9cdcf7937b:"dSQFV"}],"3QM7N":[function(e,t,r){var n=e("70235907dc93b4b0"),a=e("46fb53dace408c8e"),o=e("677bdc4d74d2f983"),i=e("80395bcde336a28b"),c=e("49552a7324952190"),s=e("aea01c71276624bf"),f=TypeError,u=s("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
t.exports=function(e,t){if(!a(e)||o(e))return e;var r,s=i(e,u);if(s){if(void 0===t&&(t="default"),!a(r=n(s,e,t))||o(r))return r;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},{"70235907dc93b4b0":"l2RNb","46fb53dace408c8e":"3IToc","677bdc4d74d2f983":"dSQFV","80395bcde336a28b":"i0Oop","49552a7324952190":"4ZQco",aea01c71276624bf:"6BOfm"}],"3IToc":[function(e,t,r){var n=e("f87cee1cb79cbcca"),a=e("319a7447e596d6da"),o=a.all;t.exports=a.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===o}:function(e){return"object"==typeof e?null!==e:n(e)}},{f87cee1cb79cbcca:"884ui","319a7447e596d6da":"gGzhA"}],"884ui":[function(e,t,r){var n=e("ca3b3b4ae4b8328f"),a=n.all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
t.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===a}:function(e){return"function"==typeof e}},{ca3b3b4ae4b8328f:"gGzhA"}],gGzhA:[function(e,t,r){var n="object"==typeof document&&document.all;t.exports={all:n,IS_HTMLDDA:void 0===n&&void 0!==n}},{}],dSQFV:[function(e,t,r){var n=e("6b6c481cdfb7df35"),a=e("2af44fcbdbf14c83"),o=e("76e903e830c40e7c"),i=e("7e2fe930b3598e22"),c=Object;t.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return a(t)&&o(t.prototype,c(e))}},{"6b6c481cdfb7df35":"bEFUU","2af44fcbdbf14c83":"884ui","76e903e830c40e7c":"hht5e","7e2fe930b3598e22":"euUQo"}],bEFUU:[function(e,t,r){var n=e("dd9e9ae04e8684f7"),a=e("f1d62079325906cb");t.exports=function(e,t){var r;return arguments.length<2?a(r=n[e])?r:void 0:n[e]&&n[e][t]}},{dd9e9ae04e8684f7:"cfrjR",f1d62079325906cb:"884ui"}],hht5e:[function(e,t,r){var n=e("83f14842ef67e16a");t.exports=n({}.isPrototypeOf)},{"83f14842ef67e16a":"72EKL"}],euUQo:[function(e,t,r){/* eslint-disable es/no-symbol -- required for testing */var n=e("da4a972af0214ea0");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},{da4a972af0214ea0:"6cA8W"}],"6cA8W":[function(e,t,r){/* eslint-disable es/no-symbol -- required for testing */var n=e("ecc4d354cb42bea8"),a=e("b37df495bcdc1d99"),o=e("d8adff9188ad5fee").String;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
t.exports=!!Object.getOwnPropertySymbols&&!a(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!o(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&n&&n<41})},{ecc4d354cb42bea8:"eDLcF",b37df495bcdc1d99:"oct0m",d8adff9188ad5fee:"cfrjR"}],eDLcF:[function(e,t,r){var n,a,o=e("705d79ce07ed8cf"),i=e("5afb83a49cd74e4c"),c=o.process,s=o.Deno,f=c&&c.versions||s&&s.version,u=f&&f.v8;u&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(n=u.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!a&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(a=+n[1]),t.exports=a},{"705d79ce07ed8cf":"cfrjR","5afb83a49cd74e4c":"hrSP7"}],hrSP7:[function(e,t,r){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},{}],i0Oop:[function(e,t,r){var n=e("bbfed17b24e215f4"),a=e("492a86e2970f6a26");// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
t.exports=function(e,t){var r=e[t];return a(r)?void 0:n(r)}},{bbfed17b24e215f4:"8gZvN","492a86e2970f6a26":"jYZx8"}],"8gZvN":[function(e,t,r){var n=e("4094667126ecac05"),a=e("fce2a7573db493fa"),o=TypeError;// `Assert: IsCallable(argument) is true`
t.exports=function(e){if(n(e))return e;throw o(a(e)+" is not a function")}},{"4094667126ecac05":"884ui",fce2a7573db493fa:"432pK"}],"432pK":[function(e,t,r){var n=String;t.exports=function(e){try{return n(e)}catch(e){return"Object"}}},{}],"4ZQco":[function(e,t,r){var n=e("abe9ca006f56626e"),a=e("c96b3a89fec6248a"),o=e("551615fda0214f1b"),i=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
t.exports=function(e,t){var r,c;if("string"===t&&a(r=e.toString)&&!o(c=n(r,e))||a(r=e.valueOf)&&!o(c=n(r,e))||"string"!==t&&a(r=e.toString)&&!o(c=n(r,e)))return c;throw i("Can't convert object to primitive value")}},{abe9ca006f56626e:"l2RNb",c96b3a89fec6248a:"884ui","551615fda0214f1b":"3IToc"}],"6BOfm":[function(e,t,r){var n=e("dbe74e87464035e3"),a=e("6a2cda01df6b4c79"),o=e("dccc28ffa5beeb54"),i=e("48d6af1225853d44"),c=e("9f762329148684"),s=e("1ce268781e409df2"),f=n.Symbol,u=a("wks"),d=s?f.for||f:f&&f.withoutSetter||i;t.exports=function(e){return o(u,e)||(u[e]=c&&o(f,e)?f[e]:d("Symbol."+e)),u[e]}},{dbe74e87464035e3:"cfrjR","6a2cda01df6b4c79":"8I9ns",dccc28ffa5beeb54:"7hZGt","48d6af1225853d44":"fq8Cs","9f762329148684":"6cA8W","1ce268781e409df2":"euUQo"}],"8I9ns":[function(e,t,r){var n=e("fe5f96cb4b2826a2"),a=e("84eeed9891aafe14");(t.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.1",mode:n?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},{fe5f96cb4b2826a2:"34uzF","84eeed9891aafe14":"jB3vg"}],"34uzF":[function(e,t,r){t.exports=!1},{}],jB3vg:[function(e,t,r){var n=e("8756de416b94afec"),a=e("dfb72a1d809f7b02"),o="__core-js_shared__",i=n[o]||a(o,{});t.exports=i},{"8756de416b94afec":"cfrjR",dfb72a1d809f7b02:"4HPs2"}],"4HPs2":[function(e,t,r){var n=e("70259c1dd4aa0e14"),a=Object.defineProperty;t.exports=function(e,t){try{a(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},{"70259c1dd4aa0e14":"cfrjR"}],"7hZGt":[function(e,t,r){var n=e("f5dcaa60a713971f"),a=e("ab17c4f45fcf0841"),o=n({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
t.exports=Object.hasOwn||function(e,t){return o(a(e),t)}},{f5dcaa60a713971f:"72EKL",ab17c4f45fcf0841:"1sScN"}],"1sScN":[function(e,t,r){var n=e("f45a7b5dcdc4a410"),a=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
t.exports=function(e){return a(n(e))}},{f45a7b5dcdc4a410:"kVEKk"}],fq8Cs:[function(e,t,r){var n=e("5da0fe4507da20a3"),a=0,o=Math.random(),i=n(1..toString);t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++a+o,36)}},{"5da0fe4507da20a3":"72EKL"}],dWHbx:[function(e,t,r){var n=e("9b4278b13c076bf"),a=e("8aee5d88a5f9b6b5"),o=e("1db4d60148afcf21");// Thanks to IE8 for its funny defineProperty
t.exports=!n&&!a(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},{"9b4278b13c076bf":"8Jsbd","8aee5d88a5f9b6b5":"oct0m","1db4d60148afcf21":"csBr9"}],csBr9:[function(e,t,r){var n=e("f5891d48afd7ec83"),a=e("824df78b2e007250"),o=n.document,i=a(o)&&a(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{f5891d48afd7ec83:"cfrjR","824df78b2e007250":"3IToc"}],b5Nku:[function(e,t,r){var n=e("a8753383ef98ee18"),a=e("189ab650b8f71085"),o=e("1168c8162aa30435");t.exports=n?function(e,t,r){return a.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{a8753383ef98ee18:"8Jsbd","189ab650b8f71085":"k98ym","1168c8162aa30435":"6Ckdf"}],k98ym:[function(e,t,r){var n=e("ca50eb9163928400"),a=e("d482f9e5478795e8"),o=e("b6ad7537efb06f4b"),i=e("16365a73399e7fe7"),c=e("fab1d366c47796d9"),s=TypeError,f=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",l="configurable",p="writable";// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
r.f=n?o?function(e,t,r){if(i(e),t=c(t),i(r),"function"==typeof e&&"prototype"===t&&"value"in r&&p in r&&!r[p]){var n=u(e,t);n&&n[p]&&(e[t]=r.value,r={configurable:l in r?r[l]:n[l],enumerable:d in r?r[d]:n[d],writable:!1})}return f(e,t,r)}:f:function(e,t,r){if(i(e),t=c(t),i(r),a)try{return f(e,t,r)}catch(e){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},{ca50eb9163928400:"8Jsbd",d482f9e5478795e8:"dWHbx",b6ad7537efb06f4b:"l0xHU","16365a73399e7fe7":"eH0cO",fab1d366c47796d9:"eGiwy"}],l0xHU:[function(e,t,r){var n=e("b22a5a2de93e3ad2"),a=e("249a5b857c2dfccd");// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t.exports=n&&a(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},{b22a5a2de93e3ad2:"8Jsbd","249a5b857c2dfccd":"oct0m"}],eH0cO:[function(e,t,r){var n=e("2b6c6258a0a6082f"),a=String,o=TypeError;// `Assert: Type(argument) is Object`
t.exports=function(e){if(n(e))return e;throw o(a(e)+" is not an object")}},{"2b6c6258a0a6082f":"3IToc"}],"5LWBN":[function(e,t,r){var n=e("99ee13632b3fa68"),a=e("9ebb3e3004fccc0a"),o=e("f10cc812a3094053"),i=e("d354802d852d9c2b");t.exports=function(e,t,r,c){c||(c={});var s=c.enumerable,f=void 0!==c.name?c.name:t;if(n(r)&&o(r,f,c),c.global)s?e[t]=r:i(t,r);else{try{c.unsafe?e[t]&&(s=!0):delete e[t]}catch(e){}s?e[t]=r:a.f(e,t,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},{"99ee13632b3fa68":"884ui","9ebb3e3004fccc0a":"k98ym",f10cc812a3094053:"7oLsi",d354802d852d9c2b:"4HPs2"}],"7oLsi":[function(e,t,r){var n=e("ca84677f1ebd1804"),a=e("13360f2842eba261"),o=e("103e488c0928755a"),i=e("cbf9b0e0779cc368"),c=e("3f2eb7efeae2f72b"),s=e("548b10f284264c72").CONFIGURABLE,f=e("358f00f3103bd55b"),u=e("9b2ce14119fd2412"),d=u.enforce,l=u.get,p=String,b=Object.defineProperty,h=n("".slice),m=n("".replace),g=n([].join),v=c&&!a(function(){return 8!==b(function(){},"length",{value:8}).length}),y=String(String).split("String"),w=t.exports=function(e,t,r){"Symbol("===h(p(t),0,7)&&(t="["+m(p(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!i(e,"name")||s&&e.name!==t)&&(c?b(e,"name",{value:t,configurable:!0}):e.name=t),v&&r&&i(r,"arity")&&e.length!==r.arity&&b(e,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?c&&b(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=d(e);return i(n,"source")||(n.source=g(y,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=w(function(){return o(this)&&l(this).source||f(this)},"toString")},{ca84677f1ebd1804:"72EKL","13360f2842eba261":"oct0m","103e488c0928755a":"884ui",cbf9b0e0779cc368:"7hZGt","3f2eb7efeae2f72b":"8Jsbd","548b10f284264c72":"5CWcN","358f00f3103bd55b":"aMzpk","9b2ce14119fd2412":"7c3Zm"}],"5CWcN":[function(e,t,r){var n=e("8ad2bacb0e20b95c"),a=e("4eabfd8f83afc9d5"),o=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=a(o,"name"),s=c&&(!n||n&&i(o,"name").configurable);t.exports={EXISTS:c,PROPER:c&&"something"===(function(){}).name,CONFIGURABLE:s}},{"8ad2bacb0e20b95c":"8Jsbd","4eabfd8f83afc9d5":"7hZGt"}],aMzpk:[function(e,t,r){var n=e("26e26db98367212e"),a=e("40ed9a4f6ae66648"),o=e("485d48d6f4c6739e"),i=n(Function.toString);a(o.inspectSource)||(o.inspectSource=function(e){return i(e)}),t.exports=o.inspectSource},{"26e26db98367212e":"72EKL","40ed9a4f6ae66648":"884ui","485d48d6f4c6739e":"jB3vg"}],"7c3Zm":[function(e,t,r){var n,a,o,i=e("d3f0c9f3327b2fd6"),c=e("ca46b44b6201ccd7"),s=e("f82e6cc0ac249fa5"),f=e("c0ae163eea4ef97"),u=e("6dea7358344877bb"),d=e("3e035a1241da2f0"),l=e("88d6ccc27e779e5a"),p=e("d40b9b3abdbb956e"),b="Object already initialized",h=c.TypeError,m=c.WeakMap;if(i||d.state){var g=d.state||(d.state=new m);/* eslint-disable no-self-assign -- prototype methods protection */g.get=g.get,g.has=g.has,g.set=g.set,/* eslint-enable no-self-assign -- prototype methods protection */n=function(e,t){if(g.has(e))throw h(b);return t.facade=e,g.set(e,t),t},a=function(e){return g.get(e)||{}},o=function(e){return g.has(e)}}else{var v=l("state");p[v]=!0,n=function(e,t){if(u(e,v))throw h(b);return t.facade=e,f(e,v,t),t},a=function(e){return u(e,v)?e[v]:{}},o=function(e){return u(e,v)}}t.exports={set:n,get:a,has:o,enforce:function(e){return o(e)?a(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=a(t)).type!==e)throw h("Incompatible receiver, "+e+" required");return r}}}},{d3f0c9f3327b2fd6:"cdBy3",ca46b44b6201ccd7:"cfrjR",f82e6cc0ac249fa5:"3IToc",c0ae163eea4ef97:"b5Nku","6dea7358344877bb":"7hZGt","3e035a1241da2f0":"jB3vg","88d6ccc27e779e5a":"gcWZs",d40b9b3abdbb956e:"f4YNg"}],cdBy3:[function(e,t,r){var n=e("6bd2547a42528a9c"),a=e("aa77fff8d5ef0565"),o=n.WeakMap;t.exports=a(o)&&/native code/.test(String(o))},{"6bd2547a42528a9c":"cfrjR",aa77fff8d5ef0565:"884ui"}],gcWZs:[function(e,t,r){var n=e("dbc8182adeb8c92f"),a=e("90b4ffb58508a6e5"),o=n("keys");t.exports=function(e){return o[e]||(o[e]=a(e))}},{dbc8182adeb8c92f:"8I9ns","90b4ffb58508a6e5":"fq8Cs"}],f4YNg:[function(e,t,r){t.exports={}},{}],"53rVh":[function(e,t,r){var n=e("d91d786cc71453ce"),a=e("88cb809f98beddc6"),o=e("10ea642aad5f7c21"),i=e("39ff598ce822187e");t.exports=function(e,t,r){for(var c=a(t),s=i.f,f=o.f,u=0;u<c.length;u++){var d=c[u];n(e,d)||r&&n(r,d)||s(e,d,f(t,d))}}},{d91d786cc71453ce:"7hZGt","88cb809f98beddc6":"h1dW1","10ea642aad5f7c21":"jg3wR","39ff598ce822187e":"k98ym"}],h1dW1:[function(e,t,r){var n=e("3cc1e4329d869e34"),a=e("2b8e77cbdbe3db7a"),o=e("d703bcb62fcda216"),i=e("157674bad2772c6d"),c=e("a09e060b9cae3c6c"),s=a([].concat);// all object keys, includes non-enumerable and symbols
t.exports=n("Reflect","ownKeys")||function(e){var t=o.f(c(e)),r=i.f;return r?s(t,r(e)):t}},{"3cc1e4329d869e34":"bEFUU","2b8e77cbdbe3db7a":"72EKL",d703bcb62fcda216:"leDxZ","157674bad2772c6d":"bmGTq",a09e060b9cae3c6c:"eH0cO"}],leDxZ:[function(e,t,r){var n=e("6d8591e17a49376c"),a=e("2c933f93dd98f385").concat("length","prototype");// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
r.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},{"6d8591e17a49376c":"gbPsH","2c933f93dd98f385":"fYdbV"}],gbPsH:[function(e,t,r){var n=e("363ee0e6bb4f46a7"),a=e("3183fe0b0bf6f6ac"),o=e("28192ac12e934672"),i=e("a5f9c5d8e993ccd6").indexOf,c=e("57775908f1581bc6"),s=n([].push);t.exports=function(e,t){var r,n=o(e),f=0,u=[];for(r in n)!a(c,r)&&a(n,r)&&s(u,r);// Don't enum bug & hidden keys
for(;t.length>f;)a(n,r=t[f++])&&(~i(u,r)||s(u,r));return u}},{"363ee0e6bb4f46a7":"72EKL","3183fe0b0bf6f6ac":"7hZGt","28192ac12e934672":"gnUiO",a5f9c5d8e993ccd6:"cRpVd","57775908f1581bc6":"f4YNg"}],cRpVd:[function(e,t,r){var n=e("d5dcbcd68ac5acd0"),a=e("212b13aecfa48226"),o=e("e5a8b3e1da4c5637"),i=function(e){return function(t,r,i){var c,s=n(t),f=o(s),u=a(i,f);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;f>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((c=s[u++])!=c)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;f>u;u++)if((e||u in s)&&s[u]===r)return e||u||0;return!e&&-1}};t.exports={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:i(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:i(!1)}},{d5dcbcd68ac5acd0:"gnUiO","212b13aecfa48226":"kmCAu",e5a8b3e1da4c5637:"jd4tR"}],kmCAu:[function(e,t,r){var n=e("72fe0a53ad43912c"),a=Math.max,o=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t.exports=function(e,t){var r=n(e);return r<0?a(r+t,0):o(r,t)}},{"72fe0a53ad43912c":"bwykD"}],bwykD:[function(e,t,r){var n=e("3403cba02b5f61d8");// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t.exports=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:n(t)}},{"3403cba02b5f61d8":"99oPJ"}],"99oPJ":[function(e,t,r){var n=Math.ceil,a=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t.exports=Math.trunc||function(e){var t=+e;return(t>0?a:n)(t)}},{}],jd4tR:[function(e,t,r){var n=e("23d9716c54a2ab90");// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
t.exports=function(e){return n(e.length)}},{"23d9716c54a2ab90":"1f43X"}],"1f43X":[function(e,t,r){var n=e("c48d3a8b8ac52b0b"),a=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
t.exports=function(e){return e>0?a(n(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
}},{c48d3a8b8ac52b0b:"bwykD"}],fYdbV:[function(e,t,r){// IE8- don't enum bug keys
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],bmGTq:[function(e,t,r){// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
r.f=Object.getOwnPropertySymbols},{}],bPIm8:[function(e,t,r){var n=e("10299561ea0c7870"),a=e("8b1ecdaf59f07210"),o=/#|\.prototype\./,i=function(e,t){var r=s[c(e)];return r===u||r!==f&&(a(t)?n(t):!!t)},c=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},f=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},{"10299561ea0c7870":"oct0m","8b1ecdaf59f07210":"884ui"}],dgCCh:[function(e,t,r){var n,a,o,i,c=e("1e8ed58235e9956a"),s=e("e574be68c288c7c8"),f=e("df212787338802d3"),u=e("afdf018c2d01bbc6"),d=e("35a3e849940fd612"),l=e("b8bf5434d2248ca7"),p=e("731f9370cc21fc3b"),b=e("ec358060964e4bde"),h=e("907adb6d219da7a3"),m=e("f398561ebd49a798"),g=e("fdfdeccf85e81d4f"),v=e("fcf929779abbf29c"),y=c.setImmediate,w=c.clearImmediate,_=c.process,j=c.Dispatch,k=c.Function,x=c.MessageChannel,E=c.String,S=0,O={},L="onreadystatechange";l(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
n=c.location});var P=function(e){if(d(O,e)){var t=O[e];delete O[e],t()}},F=function(e){return function(){P(e)}},R=function(e){P(e.data)},I=function(e){// old engines have not location.origin
c.postMessage(E(e),n.protocol+"//"+n.host)};y&&w||(y=function(e){m(arguments.length,1);var t=u(e)?e:k(e),r=b(arguments,1);return O[++S]=function(){s(t,void 0,r)},a(S),S},w=function(e){delete O[e]},v?a=function(e){_.nextTick(F(e))}:j&&j.now?a=function(e){j.now(F(e))}:x&&!g?(i=(o=new x).port2,o.port1.onmessage=R,a=f(i.postMessage,i)):c.addEventListener&&u(c.postMessage)&&!c.importScripts&&n&&"file:"!==n.protocol&&!l(I)?(a=I,c.addEventListener("message",R,!1)):a=L in h("script")?function(e){p.appendChild(h("script"))[L]=function(){p.removeChild(this),P(e)}}:function(e){setTimeout(F(e),0)}),t.exports={set:y,clear:w}},{"1e8ed58235e9956a":"cfrjR",e574be68c288c7c8:"blIox",df212787338802d3:"bCCGq",afdf018c2d01bbc6:"884ui","35a3e849940fd612":"7hZGt",b8bf5434d2248ca7:"oct0m","731f9370cc21fc3b":"vIwmT",ec358060964e4bde:"63y0Z","907adb6d219da7a3":"csBr9",f398561ebd49a798:"gxn50",fdfdeccf85e81d4f:"8iV0z",fcf929779abbf29c:"8oQEM"}],blIox:[function(e,t,r){var n=e("d07466971ded2aca"),a=Function.prototype,o=a.apply,i=a.call;// eslint-disable-next-line es/no-reflect -- safe
t.exports="object"==typeof Reflect&&Reflect.apply||(n?i.bind(o):function(){return i.apply(o,arguments)})},{d07466971ded2aca:"byI16"}],bCCGq:[function(e,t,r){var n=e("92f6f475baa85665"),a=e("547ee4f9dab0cc76"),o=e("5acd31cba656d393"),i=n(n.bind);// optional / simple context binding
t.exports=function(e,t){return a(e),void 0===t?e:o?i(e,t):function(){return e.apply(t,arguments)}}},{"92f6f475baa85665":"9QlzI","547ee4f9dab0cc76":"8gZvN","5acd31cba656d393":"byI16"}],"9QlzI":[function(e,t,r){var n=e("8e77093015e1e67f"),a=e("9daa4dbbca634c9e");t.exports=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===n(e))return a(e)}},{"8e77093015e1e67f":"efzsK","9daa4dbbca634c9e":"72EKL"}],vIwmT:[function(e,t,r){var n=e("14cb391fa4a0dda8");t.exports=n("document","documentElement")},{"14cb391fa4a0dda8":"bEFUU"}],"63y0Z":[function(e,t,r){var n=e("5250b5c9324ccbe");t.exports=n([].slice)},{"5250b5c9324ccbe":"72EKL"}],gxn50:[function(e,t,r){var n=TypeError;t.exports=function(e,t){if(e<t)throw n("Not enough arguments");return e}},{}],"8iV0z":[function(e,t,r){var n=e("d96985a79ddda108");// eslint-disable-next-line redos/no-vulnerable -- safe
t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},{d96985a79ddda108:"hrSP7"}],"8oQEM":[function(e,t,r){var n=e("1b4555a3a97d5ef1"),a=e("779f783a397f138");t.exports="process"===a(n.process)},{"1b4555a3a97d5ef1":"cfrjR","779f783a397f138":"efzsK"}],kAiYh:[function(e,t,r){var n=e("33581c362196ed1f"),a=e("9a84e40db4964af6"),o=e("4219ce460223bd08").set,i=e("738dc378e6a94c64"),c=a.setImmediate?i(o,!1):o;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
n({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==c},{setImmediate:c})},{"33581c362196ed1f":"dKyFE","9a84e40db4964af6":"cfrjR","4219ce460223bd08":"dgCCh","738dc378e6a94c64":"8shyH"}],"8shyH":[function(e,t,r){var n,a=e("373dd417176da2c5"),o=e("a68ecfcbf29c46f6"),i=e("7087588d33667af2"),c=e("7679d27a979f2651"),s=e("7493ba8d8bb8623d"),f=e("cff2c830bdea4f24"),u=e("58a74f00cee1ac64"),d=a.Function,l=/MSIE .\./.test(s)||c&&((n=a.Bun.version.split(".")).length<3||"0"===n[0]&&(n[1]<3||"3"===n[1]&&"0"===n[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
t.exports=function(e,t){var r=t?2:1;return l?function(n,a/* , ...arguments */){var c=u(arguments.length,1)>r,s=i(n)?n:d(n),l=c?f(arguments,r):[],p=c?function(){o(s,this,l)}:s;return t?e(p,a):e(p)}:e}},{"373dd417176da2c5":"cfrjR",a68ecfcbf29c46f6:"blIox","7087588d33667af2":"884ui","7679d27a979f2651":"2cWCw","7493ba8d8bb8623d":"hrSP7",cff2c830bdea4f24:"63y0Z","58a74f00cee1ac64":"gxn50"}],"2cWCw":[function(e,t,r){/* global Bun -- Deno case */t.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},{}],"7RkV0":[function(e,t,r){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function u(e,r,n,o){var i,c,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
a(s,"_invoke",{value:(i=new O(o||[]),c=l,function(r,a){if(c===p)throw Error("Generator is already running");if(c===b){if("throw"===r)throw a;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(i.method=r,i.arg=a;;){var o=i.delegate;if(o){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var a=n.method,o=r.iterator[a];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===a&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+a+"' method")),h);var i=d(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var c=i.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,h):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,h)}(o,i);if(s){if(s===h)continue;return s}}if("next"===i.method)// function.sent implementation.
i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===l)throw c=b,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=p;var f=d(e,n,i);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=i.done?b:"suspendedYield",f.arg===h)continue;return{value:f.arg,done:i.done}}"throw"===f.type&&(c=b,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
i.method="throw",i.arg=f.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",p="executing",b="completed",h={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function g(){}function v(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var y={};f(y,i,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(L([])));_&&_!==r&&n.call(_,i)&&// of the polyfill.
(y=_);var j=v.prototype=m.prototype=Object.create(y);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function k(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=d(e[a],e,o);if("throw"===s.type)c(s.arg);else{var f=s.arg,u=f.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(u).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=e,i(f)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,i,c)})}}(a,o,r,i)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(i,// invocations of the iterator.
i):i()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=v,a(j,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:g,configurable:!0}),g.displayName=f(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},k(x.prototype),f(x.prototype,c,function(){return this}),e.AsyncIterator=x,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i// If outerFn is a generator, return the full iterator.
:i.next().then(function(e){return e.done?e.value:i.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
k(j),f(j,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(j,i,function(){return this}),f(j,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),f=n.call(i,"finallyLoc");if(s&&f){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else if(f){if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),h}},e}(t.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},{}],"5XrL7":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"state",()=>i),n.export(r,"loadRecipe",()=>s),n.export(r,"loadSearchResults",()=>f),n.export(r,"getSearchResultsPage",()=>u),n.export(r,"updateServings",()=>d),n.export(r,"addBookmark",()=>p),n.export(r,"deleteBookmark",()=>b),n.export(r,"uploadRecipe",()=>h),e("regenerator-runtime");var a=e("./config"),o=e("./helpers");let i={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:a.RES_PER_PAGE},bookmarks:[]},c=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,// short circuit, if the key does exist, it will return the object
// if not, nothing will return
...t.key&&{key:t.key}}},s=async function(e){try{let t=await (0,o.AJAX)(`${a.API_URL}${e}?key=${a.KEY}`);i.recipe=c(t),i.bookmarks.some(t=>t.id===e)?i.recipe.bookmarked=!0:i.recipe.bookmarked=!1}catch(e){throw console.error(e),e}},f=async function(e){try{i.search.query=e;// get and make another object of search results
let t=await (0,o.AJAX)(`${a.API_URL}?search=${e}&key=${a.KEY}`);i.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),i.search.page=1}catch(e){throw e}},u=function(e=i.search.page){// the current page
i.search.page=e;// to set starting point of the pagination
let t=(e-1)*i.search.resultsPerPage,r=e*i.search.resultsPerPage;//0
return i.search.results.slice(t,r)},d=function(e){i.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/i.recipe.servings;// newQt = oldQt * newServings / oldServings //example: 2 * 8 / 4 = 4
}),i.recipe.servings=e},l=function(){localStorage.setItem("bookmarks",JSON.stringify(i.bookmarks))},p=function(e){// Add bookmark
i.bookmarks.push(e),e.id===i.recipe.id&&(i.recipe.bookmarked=!0),l()},b=function(e){// Delete bookmark
let t=i.bookmarks.findIndex(t=>t.id===e);i.bookmarks.splice(t,1),e===i.recipe.id&&(i.recipe.bookmarked=!1),l()},h=async function(e){try{// making a new array of ingredients, filtering those ingredients
let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format.");let[r,n,a]=t;return{quantity:r?+r:null,unit:n,description:a}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await (0,o.AJAX)(`${a.API_URL}?key=${a.KEY}`,r);// adding the new recipe in our state object
i.recipe=c(n),// add bookmark in our new recipe
p(i.recipe)}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(i.bookmarks=JSON.parse(e))}()},{"regenerator-runtime":"7RkV0","./config":"cTPit","./helpers":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cTPit:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"API_URL",()=>a),n.export(r,"TIMEOUT_SEC",()=>o),n.export(r,"RES_PER_PAGE",()=>i),n.export(r,"KEY",()=>c),n.export(r,"MODAL_CLOSE_SEC",()=>s);let a="https://forkify-api.herokuapp.com/api/v2/recipes/",o=10,i=10,c="e4ca5630-7837-440d-85aa-4c87471a46c8",s=2.5},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],rOFoc:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"AJAX",()=>o),e("regenerator-runtime");var a=e("./config");let o=async function(e,t){try{var r;// 1. Loading recipe from API
let n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([n,(r=a.TIMEOUT_SEC,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} second`))},1e3*r)}))]),i=await o.json();if(!o.ok)throw Error(`${i.message} (${o.status})`);return i}catch(e){throw e}};// export const getJSON = async function (url) {
//   try {
//     // 1. Loading recipe from API
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
// export const sendJSON = async function (url, uploadData) {
//   try {
//     // 1. Loading recipe from API
//     const res = await Promise.race([
//       fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(uploadData),
//       }),
//       timeout(TIMEOUT_SEC),
//     ]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
},{"regenerator-runtime":"7RkV0","./config":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6L6eH":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);class n{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}//   publisher subscriber pattern for search controller
addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}// passing a new instance
r.default=new n},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i),s=e("fractional");class f extends o.default{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_successMessage="";_generateMarkup(){return`<figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${c.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${c.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button data-update-to=${this._data.servings-1} class="btn--tiny btn--update-servings">
              <svg>
                <use href="${c.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button data-update-to=${this._data.servings+1} class="btn--tiny btn--update-servings">
              <svg>
                <use href="${c.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${c.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${c.default}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">

        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}

        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`}_generateMarkupIngredient(e){return`<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${c.default}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?new(0,s.Fraction)(e.quantity).toString():""}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
          </li>`}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}// publisher subscriber pattern
addHandleRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e));// window.addEventListener('hashchange', controlRecipes);
}}r.default=new f},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd",fractional:"ioWMr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],lslfl:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("url:../../img/icons.svg"),o=n.interopDefault(a);r.default=class{// all properties and methods will be available to its child class
_data;/**
   * Render the received object to the DOM
   * @param {Object | Object[]} data - The data to be rendered (e.g. recipe)
   * @param {boolean} [render = true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returened if render = false
   * @this {Object} View instance
   * @author Jonas
   * @todo Finish implementaion
   */render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// if (!data || (Array.isArray(data) && data.length === 0))
//   return this.renderError();
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),a=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{// to select all current element in the site
let r=a[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
    <div class="spinner">
      <svg>
        <use href="${o.default}#icon-loader"></use>
      </svg>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
        <div>
          <svg>
            <use href="${o.default}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._successMessage){let t=`
    <div class="message">
        <div>
          <svg>
            <use href="${o.default}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}},{"url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],eVjJd:[function(e,t,r){t.exports=e("deb742bfd0809536").getBundleURL("hwbR1")+e("ce89793d7e0dd8c2").resolve("6pYmK")},{deb742bfd0809536:"c7Tr5",ce89793d7e0dd8c2:"fyJL2"}],c7Tr5:[function(e,t,r){var n={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return a(e[2])}return"/"}(),n[e]=t),t},r.getBaseURL=a,r.getOrigin=// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],ioWMr:[function(e,t,r){var n,a;/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*//* Fractions *//* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 *//*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,a=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},a=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(n(this.denominator)){var e=a(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(n(this.numerator)){var e=a(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},t.exports.Fraction=Fraction},{}],"65N7q":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("./previewView.js"),c=n.interopDefault(i),s=e("url:../../img/icons.svg");n.interopDefault(s);class f extends o.default{// ul.results in html
_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again!";_successMessage="";_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}r.default=new f},{"./View.js":"lslfl","./previewView.js":"edsmS","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],edsmS:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i);class s extends o.default{// ul.results in html
_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`    
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
                <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
                </figure>
                  <div class="preview__data">
                    <h4 class="preview__title">${this._data.title}</h4>
                    <p class="preview__publisher">${this._data.publisher}</p>

                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                      <use href="${c.default}#icon-user"></use>
                    </svg>
                  </div>
              </div>
            </a>
        </li>
        `}}r.default=new s},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3vGkl":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg"),c=n.interopDefault(i);class s extends o.default{_parentElement=document.querySelector(".pagination");// event delegation
addHandlerClick(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}// pagination
_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
(console.log(this._data.results),1===e&&t>1)?`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
              <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>`:e===t&&t>1?`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${c.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>`:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${c.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
              <use href="${c.default}#icon-arrow-right"></use>
          </svg>
        </button>`:"")}}r.default=new s},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9IfoN":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("./previewView.js"),c=n.interopDefault(i),s=e("url:../../img/icons.svg");n.interopDefault(s);class f extends o.default{// ul.results in html
_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it.";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}r.default=new f},{"./View.js":"lslfl","./previewView.js":"edsmS","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3CEDh":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var a=e("./View.js"),o=n.interopDefault(a),i=e("url:../../img/icons.svg");n.interopDefault(i);class c extends o.default{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_successMessage="Recipe was successfully uploaded!";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}// pagination
_generateMarkup(){this._data.page}}r.default=new c},{"./View.js":"lslfl","url:../../img/icons.svg":"eVjJd","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["2nzDi"],"2nzDi","parcelRequire3a11")//# sourceMappingURL=index.cdaedb99.js.map
;
//# sourceMappingURL=index.cdaedb99.js.map
