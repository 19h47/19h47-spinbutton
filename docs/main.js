!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.SpinButton=n():t.SpinButton=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=115)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(69))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(46),i=e(4),u=e(27),c=e(50),a=e(81),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(6),o=e(8),i=e(21);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(6),o=e(42),i=e(5),u=e(41),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n,e){window,t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n),e.d(n,"BACKSPACE",(function(){return r})),e.d(n,"TAB",(function(){return o})),e.d(n,"ENTER",(function(){return i})),e.d(n,"SHIFT",(function(){return u})),e.d(n,"ESCAPE",(function(){return c})),e.d(n,"SPACE",(function(){return a})),e.d(n,"PAGE_UP",(function(){return f})),e.d(n,"PAGE_DOWN",(function(){return s})),e.d(n,"END",(function(){return l})),e.d(n,"HOME",(function(){return p})),e.d(n,"ARROW_LEFT",(function(){return v})),e.d(n,"ARROW_UP",(function(){return y})),e.d(n,"ARROW_RIGHT",(function(){return h})),e.d(n,"ARROW_DOWN",(function(){return d})),e.d(n,"DELETE",(function(){return x}));const r=8,o=9,i=13,u=16,c=27,a=32,f=33,s=34,l=35,p=36,v=37,y=38,h=39,d=40,x=46}])},function(t,n,e){var r=e(0),o=e(39).f,i=e(7),u=e(12),c=e(24),a=e(72),f=e(48);t.exports=function(t,n){var e,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(0),o=e(7),i=e(4),u=e(24),c=e(44),a=e(16),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,e){var r=e(74),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports={}},function(t,n,e){var r=e(40),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n,e){var r,o,i,u=e(71),c=e(0),a=e(3),f=e(7),s=e(4),l=e(25),p=e(17),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,x=y.set;r=function(t,n){return x.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n,e){var r,o=e(5),i=e(88),u=e(30),c=e(17),a=e(89),f=e(43),s=e(25),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=r?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var e=u.length;e--;)delete y.prototype[u[e]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=y(),void 0===n?e:i(e,n)}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(7);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(46),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(32);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(23);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r={};r[e(2)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){"use strict";var r=e(11),o=e(98),i=e(58),u=e(59),c=e(36),a=e(7),f=e(12),s=e(2),l=e(26),p=e(14),v=e(57),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),x=function(){return this};t.exports=function(t,n,e,s,v,g,b){o(e,n,s);var m,S,O,w=function(t){if(t===v&&_)return _;if(!h&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},E=n+" Iterator",j=!1,A=t.prototype,P=A[d]||A["@@iterator"]||v&&A[v],_=!h&&P||w(v),k="Array"==n&&A.entries||P;if(k&&(m=i(k.call(new t)),y!==Object.prototype&&m.next&&(l||i(m)===y||(u?u(m,y):"function"!=typeof m[d]&&a(m,d,x)),c(m,E,!0,!0),l&&(p[E]=x))),"values"==v&&P&&"values"!==P.name&&(j=!0,_=function(){return P.call(this)}),l&&!b||A[d]===_||a(A,d,_),p[n]=_,v)if(S={values:w("values"),keys:g?_:w("keys"),entries:w("entries")},b)for(O in S)(h||j||!(O in A))&&f(A,O,S[O]);else r({target:n,proto:!0,forced:h||j},S);return S}},function(t,n,e){var r=e(8).f,o=e(4),i=e(2)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},function(t,n,e){var r=e(6),o=e(70),i=e(21),u=e(15),c=e(41),a=e(4),f=e(42),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(1),o=e(22),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(6),o=e(1),i=e(43);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(45),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(24),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(26),o=e(45);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(4),o=e(15),i=e(76).indexOf,u=e(17);t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(31),o=e(40),i=e(33),u=e(28),c=e(79),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,d){for(var x,g,b=i(v),m=o(b),S=r(y,h,3),O=u(m.length),w=0,E=d||c,j=n?E(v,O):e?E(v,0):void 0;O>w;w++)if((p||w in m)&&(g=S(x=m[w],w,b),t))if(n)j[w]=g;else if(g)switch(t){case 3:return!0;case 5:return x;case 6:return w;case 2:a.call(j,x)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(6),o=e(1),i=e(4),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},function(t,n,e){var r=e(47),o=e(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(34),o=e(12),i=e(86);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(34),o=e(22),i=e(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:u?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){"use strict";var r=e(49).forEach,o=e(96),i=e(51),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){"use strict";var r=e(15),o=e(97),i=e(14),u=e(16),c=e(35),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:r(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r,o,i,u=e(58),c=e(7),a=e(4),f=e(2),s=e(26),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||a(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(4),o=e(33),i=e(25),u=e(99),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r=e(5),o=e(100);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){"use strict";var r=e(11),o=e(0),i=e(48),u=e(12),c=e(61),a=e(62),f=e(63),s=e(3),l=e(1),p=e(106),v=e(36),y=e(107);t.exports=function(t,n,e){var h=-1!==t.indexOf("Map"),d=-1!==t.indexOf("Weak"),x=h?"set":"add",g=o[t],b=g&&g.prototype,m=g,S={},O=function(t){var n=b[t];u(b,t,"add"==t?function(t){return n.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return d&&!s(t)?void 0:n.call(this,0===t?0:t)}:"has"==t?function(t){return!(d&&!s(t))&&n.call(this,0===t?0:t)}:function(t,e){return n.call(this,0===t?0:t,e),this})};if(i(t,"function"!=typeof g||!(d||b.forEach&&!l((function(){(new g).entries().next()})))))m=e.getConstructor(n,t,h,x),c.REQUIRED=!0;else if(i(t,!0)){var w=new m,E=w[x](d?{}:-0,1)!=w,j=l((function(){w.has(1)})),A=p((function(t){new g(t)})),P=!d&&l((function(){for(var t=new g,n=5;n--;)t[x](n,n);return!t.has(-0)}));A||((m=n((function(n,e){f(n,m,t);var r=y(new g,n,m);return null!=e&&a(e,r[x],r,h),r}))).prototype=b,b.constructor=m),(j||P)&&(O("delete"),O("has"),h&&O("get")),(P||E)&&O(x),d&&b.clear&&delete b.clear}return S[t]=m,r({global:!0,forced:m!=g},S),v(m,t),d||e.setStrong(m,t,h),m}},function(t,n,e){var r=e(17),o=e(3),i=e(4),u=e(8).f,c=e(27),a=e(102),f=c("meta"),s=0,l=Object.isExtensible||function(){return!0},p=function(t){u(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,f)){if(!l(t))return"F";if(!n)return"E";p(t)}return t[f].objectID},getWeakData:function(t,n){if(!i(t,f)){if(!l(t))return!0;if(!n)return!1;p(t)}return t[f].weakData},onFreeze:function(t){return a&&v.REQUIRED&&l(t)&&!i(t,f)&&p(t),t}};r[f]=!0},function(t,n,e){var r=e(5),o=e(103),i=e(28),u=e(31),c=e(104),a=e(105),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,y,h,d,x,g,b=u(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=c(t)))throw TypeError("Target is not iterable");if(o(v)){for(y=0,h=i(t.length);h>y;y++)if((d=s?b(r(g=t[y])[0],g[1]):b(t[y]))&&d instanceof f)return d;return new f(!1)}p=v.call(t)}for(x=p.next;!(g=x.call(p)).done;)if("object"==typeof(d=a(p,b,g.value,s))&&d&&d instanceof f)return d;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){"use strict";var r=e(8).f,o=e(18),i=e(108),u=e(31),c=e(63),a=e(62),f=e(35),s=e(109),l=e(6),p=e(61).fastKey,v=e(16),y=v.set,h=v.getterFor;t.exports={getConstructor:function(t,n,e,f){var s=t((function(t,r){c(t,s,n),y(t,{type:n,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&a(r,t[f],t,e)})),v=h(n),d=function(t,n,e){var r,o,i=v(t),u=x(t,n);return u?u.value=e:(i.last=u={index:o=p(n,!0),key:n,value:e,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=u),r&&(r.next=u),l?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},x=function(t,n){var e,r=v(t),o=p(n);if("F"!==o)return r.index[o];for(e=r.first;e;e=e.next)if(e.key==n)return e};return i(s.prototype,{clear:function(){for(var t=v(this),n=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete n[e.index],e=e.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var n=v(this),e=x(this,t);if(e){var r=e.next,o=e.previous;delete n.index[e.index],e.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==e&&(n.first=r),n.last==e&&(n.last=o),l?n.size--:this.size--}return!!e},forEach:function(t){for(var n,e=v(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.next:e.first;)for(r(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(t){return!!x(this,t)}}),i(s.prototype,e?{get:function(t){var n=x(this,t);return n&&n.value},set:function(t,n){return d(this,0===t?0:t,n)}}:{add:function(t){return d(this,t=0===t?0:t,t)}}),l&&r(s.prototype,"size",{get:function(){return v(this).size}}),s},setStrong:function(t,n,e){var r=n+" Iterator",o=h(n),i=h(r);f(t,n,(function(t,n){y(this,{type:r,target:t,state:o(t),kind:n,last:void 0})}),(function(){for(var t=i(this),n=t.kind,e=t.last;e&&e.removed;)e=e.previous;return t.target&&(t.last=e=e?e.next:t.state.first)?"keys"==n?{value:e.key,done:!1}:"values"==n?{value:e.value,done:!1}:{value:[e.key,e.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),e?"entries":"values",!e,!0),s(n)}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r=e(93);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},function(t,n,e){var r=e(94),o=e(37);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},function(t,n,e){"use strict";var r=e(11),o=e(49).map,i=e(82),u=e(51),c=i("map"),a=u("map");r({target:"Array",proto:!0,forced:!c||!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(44),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(4),o=e(73),i=e(39),u=e(8);t.exports=function(t,n){for(var e=o(n),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||c(t,s,a(n,s))}}},function(t,n,e){var r=e(13),o=e(75),i=e(78),u=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(47),o=e(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(15),o=e(28),i=e(77),u=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(29),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(3),o=e(80),i=e(2)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(22);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(50);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(1),o=e(2),i=e(83),u=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),u=e(84),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(13);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(11),o=e(33),i=e(52);r({target:"Object",stat:!0,forced:e(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,e){"use strict";var r=e(34),o=e(54);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(11),o=e(13),i=e(32),u=e(5),c=e(3),a=e(18),f=e(90),s=e(1),l=o("Reflect","construct"),p=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),v=!s((function(){l((function(){}))})),y=p||v;r({target:"Reflect",stat:!0,forced:y,sham:y},{construct:function(t,n){i(t),u(n);var e=arguments.length<3?t:i(arguments[2]);if(v&&!p)return l(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(f.apply(t,r))}var o=e.prototype,s=a(c(o)?o:Object.prototype),y=Function.apply.call(t,s,n);return c(y)?y:s}})},function(t,n,e){var r=e(6),o=e(8),i=e(5),u=e(52);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,a=0;c>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(13);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(32),o=e(3),i=[].slice,u={},c=function(t,n,e){if(!(n in u)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";u[n]=Function("C,a","return new C("+r.join(",")+")")}return u[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=i.call(arguments,1),u=function(){var r=e.concat(i.call(arguments));return this instanceof u?c(n,r.length,r):n.apply(t,r)};return o(n.prototype)&&(u.prototype=n.prototype),u}},function(t,n,e){"use strict";var r=e(12),o=e(5),i=e(1),u=e(92),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?u.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},function(t,n,e){"use strict";var r=e(11),o=e(55);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(2),o=e(18),i=e(8),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,e){"use strict";var r=e(57).IteratorPrototype,o=e(18),i=e(21),u=e(36),c=e(14),a=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,e){var r=e(1);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(60),o=e(64);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){var r=e(1);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,n,e){var r=e(2),o=e(14),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,e){var r=e(54),o=e(14),i=e(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(3),o=e(59);t.exports=function(t,n,e){var i,u;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(u=i.prototype)&&u!==e.prototype&&o(t,u),t}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(13),o=e(8),i=e(2),u=e(6),c=i("species");t.exports=function(t){var n=r(t),e=o.f;u&&n&&!n[c]&&e(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){"use strict";var r=e(60),o=e(64);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,n,e){"use strict";var r=e(112).charAt,o=e(16),i=e(35),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(29),o=e(23),i=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(0),o=e(65),i=e(55),u=e(7);for(var c in o){var a=r[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){var r=e(0),o=e(65),i=e(56),u=e(7),c=e(2),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=r[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return m}));e(68),e(85),e(53),e(87),e(91);var r=e(9),o=e.n(r),i=e(19),u=e.n(i),c=e(20),a=e.n(c),f=e(37),s=e.n(f),l=e(66),p=e.n(l),v=e(67),y=e.n(v),h=e(38),d=e.n(h),x=e(10);e(95),e(56),e(101),e(110),e(111),e(113),e(114);function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=d()(t);if(n){var o=d()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return y()(this,e)}}var b=function(t,n,e){return n===e?t.setAttribute("disabled",!0):t.removeAttribute("disabled")},m=function(t){p()(e,t);var n=g(e);function e(t){var r;return u()(this,e),(r=n.call(this,["SpinButton.change"],t)).rootElement=t,r.$input=r.rootElement.querySelector('input[type="text"]'),r.$increase=r.rootElement.querySelector(".js-increase"),r.$decrease=r.rootElement.querySelector(".js-decrease"),r.value={min:JSON.parse(r.rootElement.getAttribute("aria-valuemin")),max:JSON.parse(r.rootElement.getAttribute("aria-valuemax")),now:JSON.parse(r.rootElement.getAttribute("aria-valuenow")),text:""},r.onKeyDown=r.onKeyDown.bind(s()(r)),r}return a()(e,[{key:"init",value:function(){this.setValue(this.value.now),this.initEvents()}},{key:"initEvents",value:function(){var t=this;this.rootElement.addEventListener("keydown",this.onKeyDown),this.$increase.addEventListener("click",(function(){return t.setValue(t.value.now+1)})),this.$decrease.addEventListener("click",(function(){return t.setValue(t.value.now-1)})),this.$input.addEventListener("input",(function(n){var e=n.target,r=parseInt(e.value,10)||0;t.setValue(r)}))}},{key:"onKeyDown",value:function(t){var n,e=this,r=t.keyCode||t.which,i=function(n){t.preventDefault(),e.setValue(n)},u=(n={},o()(n,x.ARROW_DOWN,(function(){return i(e.value.now-1)})),o()(n,x.ARROW_UP,(function(){return i(e.value.now+1)})),o()(n,x.PAGE_DOWN,(function(){return i(e.value.now-5)})),o()(n,x.PAGE_UP,(function(){return i(e.value.now+5)})),o()(n,x.HOME,(function(){return i(e.value.min)})),o()(n,x.END,(function(){return i(e.value.max)})),o()(n,"default",(function(){return!1})),n);return(u[r]||u.default)()}},{key:"setMin",value:function(t){this.value.min=t,this.rootElement.setAttribute("aria-valuemin",t),this.setValue(this.value.now)}},{key:"setMax",value:function(t){this.value.max=t,this.rootElement.setAttribute("aria-valuemax",t),this.setValue(this.value.now)}},{key:"setValue",value:function(t){var n,e,r=t;r>this.value.max&&(r=this.value.max),r<this.value.min&&(r=this.value.min),this.value.now=r,this.value.text=r,b(this.$increase,r,this.value.max),b(this.$decrease,r,this.value.min),n=this.$input,e={"aria-valuenow":this.value.now,"aria-valuetext":this.value.text,value:this.value.now},Object.keys(e).map((function(t){return n.setAttribute(t,e[t])})),this.$input.value=this.value.now,this.emit("SpinButton.change",r)}}]),e}(function(){function t(n){u()(this,t),this.listeners=new Map,this.events=n}return a()(t,[{key:"on",value:function(t,n){var e=this.listeners.get(t);e||(e=new Set,this.listeners.set(t,e)),e.add(n)}},{key:"once",value:function(t,n){var e=this,r=function r(o){e.off(t,r),n.call(e,o)};this.on(t,r)}},{key:"off",value:function(t,n){var e=this.listeners.get(t);e&&(e.delete(n),e.size||this.listeners.delete(t))}},{key:"offAll",value:function(t){if(void 0===t)return this.listeners.clear();var n=this.listeners.get(t);return!!n&&(n.clear(),this.listeners.delete(t))}},{key:"hasListeners",value:function(t){return this.listeners.has(t)}},{key:"emit",value:function(t,n){var e=this,r=this.listeners.get(t);r&&r.forEach((function(t){return t.call(e,n)}))}}]),t}())}])}));