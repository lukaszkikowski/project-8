var version="v1014";this.addEventListener("install",function(e){e.waitUntil(caches.open(version).then(function(e){return e.addAll([])}))});var illegal={"www.google-analytics.com":1,"127.0.0.1:8888":1,"solar.tza.red":1};this.addEventListener("fetch",function(n){var e=n.request.url.split("://")[1].split("/")[0];n.request.url.split("sworker")[2]||"GET"!=n.request.method||illegal[e]||n.respondWith(caches.match(n.request).then(function(e){return e||fetch(n.request).then(function(t){return caches.open(version).then(function(e){return e.put(n.request,t.clone()),t})})}))}),this.skipWaiting().then(function(){console.log("nv",version)}),this.addEventListener("activate",function(e){var t=[version];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===t.indexOf(e))return caches.delete(e)}))}))});