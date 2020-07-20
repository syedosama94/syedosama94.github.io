'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "syedosama94.github.io/index.html": "a449d6af3729b40b0b8af44b14411ad3",
"/": "a449d6af3729b40b0b8af44b14411ad3",
"syedosama94.github.io/main.dart.js": "1587c9f8b7c6010c19bfd8e026951c5f",
"syedosama94.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"syedosama94.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"syedosama94.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"syedosama94.github.io/manifest.json": "615cf78c2e91ec0b1792488fd59ef71d",
"syedosama94.github.io/.git/config": "4b6a0c091e819692160518911d42d8ab",
"syedosama94.github.io/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"syedosama94.github.io/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"syedosama94.github.io/.git/objects/9e/3bc6b0900cd17f95a3c06f442f074a014a4087": "a648479b2fe954fe30967326af94dc69",
"syedosama94.github.io/.git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
"syedosama94.github.io/.git/objects/5f/c2a561f390c26b5250c9306758188801ed0023": "fc6e4578d7ad54f01f1bf77feaa49b0a",
"syedosama94.github.io/.git/objects/d6/b1cdd679c0a9ec1b4029a18efd61ce69622d1a": "09414356df1e4c229d3e9d9716639064",
"syedosama94.github.io/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"syedosama94.github.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"syedosama94.github.io/.git/objects/27/8a24db73b3d47b6e25348d7d9d20f7ffadb114": "6b90443fd8a466232684d9c43caba86e",
"syedosama94.github.io/.git/objects/89/f3b0341c8075f4c40a393ce455cba6a0a945e7": "e86764cc3b46210b0ce17067941a8e5e",
"syedosama94.github.io/.git/objects/87/482490823928fadba30db46375f5185ea41a70": "165774d03c08e524623f557be826cc58",
"syedosama94.github.io/.git/objects/80/86f0b666007f480e6a84f28bc6aa0e5b1ccad4": "fca700d586edefba3106b5fa5b370123",
"syedosama94.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"syedosama94.github.io/.git/objects/4c/decdcfada27789432e54e199c9ca92ec6b6946": "149c5ec4a78e6f0e66ece4348c4625c5",
"syedosama94.github.io/.git/objects/75/88df1f474bd9ecf7ad87744462b0657439a7f9": "2907d293161fbc93e494ba4b0ebfbd16",
"syedosama94.github.io/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"syedosama94.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"syedosama94.github.io/.git/objects/36/8dacdc2190bdc7592e9fdd607b378499eb0504": "97b9c8aa485c56bad79c88e742b6593a",
"syedosama94.github.io/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"syedosama94.github.io/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"syedosama94.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"syedosama94.github.io/.git/objects/f0/9cb5b332d12fecd9340aa28fbd724e4c32e8ce": "4f96c0bf6d4203ea399ebb891aec8718",
"syedosama94.github.io/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"syedosama94.github.io/.git/objects/76/ea207243be4bb3a05d8c2fd457abf37fc096ef": "4bffe1bd85e334c13ff861dbeafd7446",
"syedosama94.github.io/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"syedosama94.github.io/.git/objects/22/e265db1cf539f6a119940c77111620334d0e4c": "ee478bddbfe3f46f1cd556f471089e31",
"syedosama94.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"syedosama94.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"syedosama94.github.io/.git/logs/HEAD": "02c8c0ee130dc17ebc43962ce13e680d",
"syedosama94.github.io/.git/logs/refs/heads/master": "02c8c0ee130dc17ebc43962ce13e680d",
"syedosama94.github.io/.git/logs/refs/remotes/origin/master": "1888d75c13fd7e90ffadfc58f63d0134",
"syedosama94.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"syedosama94.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"syedosama94.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"syedosama94.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"syedosama94.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"syedosama94.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"syedosama94.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"syedosama94.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"syedosama94.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"syedosama94.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"syedosama94.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"syedosama94.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"syedosama94.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"syedosama94.github.io/.git/refs/heads/master": "b296f31be5be75d0ec4904ac9a8d1d94",
"syedosama94.github.io/.git/refs/remotes/origin/master": "b296f31be5be75d0ec4904ac9a8d1d94",
"syedosama94.github.io/.git/index": "87359144df7d6c6def0a50fffdaac4b5",
"syedosama94.github.io/.git/COMMIT_EDITMSG": "09d43c8edd2ce77f411faef32da0a7f5",
"syedosama94.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"syedosama94.github.io/assets/NOTICES": "108d0a1640e6b622b04c79e5a1de9f51",
"syedosama94.github.io/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"syedosama94.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"syedosama94.github.io/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"index.html": "a449d6af3729b40b0b8af44b14411ad3",
"main.dart.js": "fe02ccbf9f0d037485a803500970d4c7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "615cf78c2e91ec0b1792488fd59ef71d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "108d0a1640e6b622b04c79e5a1de9f51",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
