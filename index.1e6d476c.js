function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,b=function(){return c.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i,o,r,u,a,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=i,r=o;return i=o=void 0,l=e,u=t.apply(r,n)}function y(t){return l=t,a=setTimeout(w,e),c?h(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-l>=r}function w(){var t=b();if(j(t))return $(t);a=setTimeout(w,function(t){var n=e-(t-f);return s?d(n,r-(t-l)):n}(t))}function $(t){return a=void 0,g&&i?h(t):(i=o=void 0,u)}function T(){var t=b(),n=j(t);if(i=arguments,o=this,f=t,n){if(void 0===a)return y(f);if(s)return a=setTimeout(w,e),h(f)}return void 0===a&&(a=setTimeout(w,e)),u}return e=m(e)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?p(m(n.maxWait)||0,e):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=f=o=a=void 0},T.flush=function(){return void 0===a?u:$(b())},T};var g={fetchCountries:function(t){return fetch(`https://restcountries.com/v2/name/${t}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}};let h=document.querySelector("#search-box"),y=document.querySelector(".country-list");h.addEventListener("input",t(e)((function(t){let e=h.value;g.fetchCountries(e).then((t=>function(t){const e=t.map((t=>`\n      <li class="list_item"><img src="${t.flags.png}" width="30" height="20"></li>\n      <li class="list_item"><h2>${t.name}</h2></li>\n          <li><b>Capital:</b> ${t.capital}</li>\n          <li><b>Population:</b> ${t.population}</li>\n          <li><b>Languages:</b> ${t.languages[0].name}</li>\n        `)).join("");y.innerHTML=e}(t))).catch((t=>console.log(t)))}),300));
//# sourceMappingURL=index.1e6d476c.js.map
