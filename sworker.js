var version = "v324"; this.addEventListener("install", function (e) { e.waitUntil(caches.open(version).then(function (e) { return e.addAll([]) })) }); var illegal = { "www.google-analytics.com": 1, "solar.tza.red": 1 }; this.addEventListener("fetch", function (e) { var t = e.request.url.split("://")[1].split("/")[0]; "GET" != e.request.method || illegal[t] || e.respondWith(caches.match(e.request).then(function (t) { return t || fetch(e.request).then(function (t) { return caches.open(version).then(function (n) { return n.put(e.request, t.clone()), t }) }) })) }), this.skipWaiting().then(function () { console.log("nv", version) }), this.addEventListener("activate", function (e) { var t = [version]; e.waitUntil(caches.keys().then(function (e) { return Promise.all(e.map(function (e) { if (-1 === t.indexOf(e)) return caches.delete(e) })) })) });