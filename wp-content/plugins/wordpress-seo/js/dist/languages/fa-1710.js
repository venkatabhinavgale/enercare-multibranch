window.yoast=window.yoast||{},window.yoast.Researcher=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=51)}([function(e,t){e.exports=window.yoast.analysis},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.lodash},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(8);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(6).default,o=r(9);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,r(t,n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,r){var n=r(14),o=r(15),s=r(13),i=r(16);e.exports=function(e){return n(e)||o(e)||s(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(12);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,r){var n=r(12);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,r){"use strict";var n=r(2),o=r(0),s=o.languageProcessing.buildFormRule,i=o.languageProcessing.createRulesFromArrays,u=function(e,t,r){return function(n){var o=n.length;return!(o<t||n.substring(o-e.length,o)!==e||r.includes(n))}},a=o.languageProcessing.buildFormRule,f=o.languageProcessing.createRulesFromArrays,c=/([aeiouy])/g,l=function(e){return(e.match(c)||[]).length>1&&e.length>4&&"ing"===e.substring(e.length-3,e.length)},p=o.languageProcessing.buildFormRule,d=o.languageProcessing.createRulesFromArrays;function x(e,t){for(var r=0;r<t.length;r++)for(var n=t[r],o=0;o<n.length;o++)if(n[o]===e)return n[0];return null}function g(e,t){var r=t.verbs.regexVerb,o=p(e,d(t.nouns.regexNoun.singularize));if(!Object(n.isUndefined)(o))return l(o)?p(o,d(r.ingFormToInfinitive)):o;var x=t.adjectives.regexAdjective,g=p(e,d(x.icallyToBase));if(!Object(n.isUndefined)(g))return g;var b=[],y=function(e,t){var r=f(t.sFormToInfinitive),n=f(t.ingFormToInfinitive),o=f(t.edFormToInfinitive);return function(e){return e.length>3&&"s"===e[e.length-1]}(e)?{infinitive:a(e,r),guessedForm:"s"}:l(e)?{infinitive:a(e,n),guessedForm:"ing"}:function(e){var t=(e.match(c)||[]).length;return(t>1||1===t&&"e"!==e.substring(e.length-3,e.length-2))&&"ed"===e.substring(e.length-2,e.length)}(e)?{infinitive:a(e,o)||e,guessedForm:"ed"}:{infinitive:e,guessedForm:"inf"}}(e,r).infinitive;b.push(y);var h,v,m,_=function(e,t,r){if(u("er",4,r.erExceptions)(e)){var n=i(t.comparativeToBase);return{base:s(e,n)||e,guessedForm:"er"}}if(u("est",5,r.estExceptions)(e)){var o=i(t.superlativeToBase);return{base:s(e,o)||e,guessedForm:"est"}}if(u("ly",5,r.lyExceptions)(e)){var a=i(t.adverbToBase);return{base:s(e,a),guessedForm:"ly"}}return{base:e,guessedForm:"base"}}(e,x,t.adjectives.stopAdjectives).base;return b.push(_),h=b,v=Object(n.flatten)(h),m=v.pop(),v.forEach((function(e){var t=e.length-m.length;0===t?e.localeCompare(m)<0&&(m=e):t<0&&(m=e)})),m}t.a=function(e,t){var r,o,s=t.nouns,i=p(e,d(s.regexNoun.possessiveToBase));return Object(n.isUndefined)(i)?(r=e,o=x(e,s.irregularNouns)||x(e,t.adjectives.irregularAdjectives)||function(e,t){var r=function(e,t,r){var o;if(t.forEach((function(t){t.forEach((function(r){r===e&&(o=t)}))})),Object(n.isUndefined)(o)){var s=function(e,t){for(var r in t)t.hasOwnProperty&&(t[r]=new RegExp(t[r],"i"));return!0===t.sevenLetterHyphenPrefixes.test(e)?{normalizedWord:e.replace(t.sevenLetterHyphenPrefixes,""),prefix:e.substring(0,8)}:!0===t.sevenLetterPrefixes.test(e)?{normalizedWord:e.replace(t.sevenLetterPrefixes,""),prefix:e.substring(0,7)}:!0===t.fiveLetterHyphenPrefixes.test(e)?{normalizedWord:e.replace(t.fiveLetterHyphenPrefixes,""),prefix:e.substring(0,6)}:!0===t.fiveLetterPrefixes.test(e)?{normalizedWord:e.replace(t.fiveLetterPrefixes,""),prefix:e.substring(0,5)}:!0===t.fourLetterHyphenPrefixes.test(e)?{normalizedWord:e.replace(t.fourLetterHyphenPrefixes,""),prefix:e.substring(0,5)}:!0===t.fourLetterPrefixes.test(e)?{normalizedWord:e.replace(t.fourLetterPrefixes,""),prefix:e.substring(0,4)}:!0===t.threeLetterHyphenPrefixes.test(e)?{normalizedWord:e.replace(t.threeLetterHyphenPrefixes,""),prefix:e.substring(0,4)}:!0===t.threeLetterPrefixes.test(e)?{normalizedWord:e.replace(t.threeLetterPrefixes,""),prefix:e.substring(0,3)}:!0===t.twoLetterHyphenPrefixes.test(e)?{normalizedWord:e.replace(t.twoLetterHyphenPrefixes,""),prefix:e.substring(0,3)}:!0===t.twoLetterPrefixes.test(e)?{normalizedWord:e.replace(t.twoLetterPrefixes,""),prefix:e.substring(0,2)}:!0===t.oneLetterPrefixes.test(e)?{normalizedWord:e.replace(t.oneLetterPrefixes,""),prefix:e.substring(0,1)}:void 0}(e,r);Object(n.isUndefined)(s)||t.forEach((function(e){e.forEach((function(t){t===s.normalizedWord&&(o=e.map((function(e){return s.prefix.concat(e)})))}))}))}return o}(e,t.irregularVerbs,t.regexVerb.verbPrefixes);return Object(n.isUndefined)(r)?null:r[0]}(e,t.verbs)):(r=i,o=x(i,s.irregularNouns)),o||g(r,t)}},,,,,,,function(e,t){e.exports=window.yoast.featureFlag},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(3),o=r.n(n),s=r(4),i=r.n(s),u=r(5),a=r.n(u),f=r(1),c=r.n(f),l=r(0),p=[].concat(["یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه","ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده","بیست","صد","هزار","میلیون","میلیارد"],["اول","اوّل","دوم","سوم","چهارم","پنجم","ششم","هفتم","هشتم","نهم","دهم","یازدهم","دوازدهم","سیزدهم","چهاردهم","پانزدهم","شانزدهم","هفدهم","هجدهم","نوزدهم","بیستم"],["مرا","من را","من‌را","به من","تو را","شما را","شما","به تو","به شما","اون رو","اونو","به اون","اون","او را","به او","او","به ایشان","ایشان را","ایشان","به ایشون","ایشون رو","ایشون را","ایشون","این","این را","آن","به این","به آن","آن را","این رو","اینو","ما را","به ما","به اونا","آن‌ها","آنها را","آن‌ها را","به آنها","به آن‌ها","اونا","اونارو","اونا رو","من","تو","ما","آنها"],[],[],["خودم","خودت","خودش","یک نفر خودش","خودمان","خودتان","خودشان"],[],["با","بی","در","را","یا","اگر","مگر","نه","چه","باری","بر","برای","برای این","برای این که","برای آن که","برای آن","از برای","خواه","زیرا","که","نیز","چون","چونان که","چونان‌که","چنان","چنان‌چه","چنانچه","چنان‌که","چونکه","چون که","چون‌که","چندان که","چندان‌که","زیرا که","زیراکه","همین که","همین‌که","همان که","همان‌که","بلکه","جز","الا","الاّ","الی","تا اینکه","تااینکه","تا آنکه","تاآنکه","آن‌جا که","آن‌گاه که","از آن‌جا که","ازآنجاکه","از آن‌که","ازآنکه","زیرا","چون‌که","چون که","از این رو","ازاین‌رو","ازین‌رو","از بس","ازبس","از بس که","ازبس‌که","از بهر آن‌که","اکنون که","اگرچه","اگر چنانچه","اگرچنانچه","الا این‌که","با این حال","بااین‌حال","با این‌که","بااین‌که","بااینکه","با وجود این","باوجوداین","با این وجود","بس که","از بس که","بس‌که","از بس‌که","به شرط آن‌که","به‌شرط آن‌که","به شرطی که","به شروطی که","بعد از","قبل از","از بعد از","از قبل از","اندر","بدون","علیه","ضد","غیر","واسه‎ی","برای","واسه","برای"],[],[],[],[],[],[],[],["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],[],[],["دوباره","قطعاً","حتماً","اصلاً","قاعدتاً","ظبیعتاً","شاید","کاملاً","به","از","و","همچنین","هم","مانند","مثل","شبیه به","ولی","اما","امّا","لیکن","ولو","در ضمن","در کنار","ترجیحاً","وگرنه","پس","سپس","وقتی","زمانی که","به خاطر","مخصوصاً","مشخصاً","در کل","بعد","قبل","تا"]),d=r(11),x=r.n(d),g=l.languageProcessing.regexHelpers.searchAndReplaceWithRegex,b=function(e){var t=[];return t.push("ن"+e),e.endsWith("ها")?t.push.apply(t,x()(["یی","ی"].map((function(t){return e+t})))):/([^وای]ه)$/i.test(e)?t.push.apply(t,x()(["‌ای","‌یی","‌ام","‌ات","‌اش"].map((function(t){return e+t})))):/([وا])$/i.test(e)?t.push.apply(t,x()(["یی","یم","یت","یش"].map((function(t){return e+t})))):(e.endsWith("ی")&&t.push(e+"‌ای"),t.push.apply(t,x()(["مان","شان","تان","ش","ت","م","ی"].map((function(t){return e+t}))))),t};function y(e){var t=[];t.push.apply(t,x()(b(e)));var r=function(e){return e.startsWith("ن")?e.slice(1,e.length):g(e,[["(و|ا)(یش|یت|یم|یی)$","$1"],["([^وای]ه)(‌یی|‌ای|‌اش|‌ات|‌ام)$","$1"],["(ی)‌ای$","$1"],["(ها)یی$","$1"],["(مان|شان|تان|ش|ت|م|ی)$",""]])}(e);return r&&(t.push(r),t.push.apply(t,x()(b(r)))),t}var h=r(25),v=r(2),m=r(18),_=l.languageProcessing.baseStemmer;function P(e){if(Object(h.isFeatureEnabled)("FARSI_SUPPORT")){var t=Object(v.get)(e.getData("morphology"),"fa",!1);return t?function(e){return Object(m.a)(e,t)}:_}return _}var j=function(e){i()(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=c()(t);if(r){var o=c()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return a()(this,e)});function s(e){var t;return o()(this,s),delete(t=n.call(this,e)).defaultResearches.getFleschReadingScore,Object.assign(t.config,{language:"fa",functionWords:p}),Object.assign(t.helpers,{createBasicWordForms:y,getStemmer:P}),t}return s}(l.languageProcessing.AbstractResearcher)}]);