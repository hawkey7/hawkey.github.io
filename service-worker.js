"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c34ebd5f49a3f65c70f86a962f211ce6"],["/static/css/main.54fb13f9.css","54fb13f9eccdc4ca73e818e754ce4d50"],["/static/js/0.9d1bee6a.chunk.js","88b5cc6716c0b4061812688561ce386a"],["/static/js/1.d51d375f.chunk.js","271fe6e7114345164a6141b5ade2f42b"],["/static/js/10.3f93eeaf.chunk.js","c5975d82a7c01ef6cb1b6ded0b58c5dc"],["/static/js/2.33dca03d.chunk.js","4bb1a5f7737f115e1efde8682b3a25bb"],["/static/js/3.07783728.chunk.js","c168f6d7a34cdb6302dd46838891c6cc"],["/static/js/4.580afba1.chunk.js","e8d7d9f343990b5c6e107cc78d3e4cf0"],["/static/js/5.224b862d.chunk.js","48f6896d0f64397cf301e4183105e2b2"],["/static/js/6.7875c813.chunk.js","9f2f99105da26b44a0c54e0ebae683fe"],["/static/js/7.2160d588.chunk.js","9591cbffc963b15e5e57ad9f399363de"],["/static/js/8.84bb97e8.chunk.js","eeb6f1948d1e51b03b52d8e2a1639daf"],["/static/js/9.7ac22fd0.chunk.js","a54e1003cc5295f82bd306017cc0cfcb"],["/static/js/main.1e003cd1.js","fba57632bde3844dfff10ce3cec6d14f"],["/static/media/benefit.eb895651.png","eb895651de61cf3974354c8f4e25afb5"],["/static/media/contact_success.c3d173e6.png","c3d173e674eb73a6ba8069928e9f2fc6"],["/static/media/home4.ef25f653.png","ef25f6531c63c628f419997ca930ec18"],["/static/media/home5.ae9d63e3.png","ae9d63e359dd74dde6f9aa0b2d310d6f"],["/static/media/okex.37933c90.png","37933c90d33332f37b5697eac3942c76"],["/static/media/overview.918d3832.png","918d38328b41c28f02eedf59736e45f9"],["/static/media/ripioCredit.7427f332.png","7427f3327b8f4266debfd79e42ce2a59"],["/static/media/step2.cc569461.png","cc56946148fa06d28db0bb1c6cc40143"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});