'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22a4bb662ab9f5f60774614b0d7aca4f",
"assets/AssetManifest.bin.json": "b4134ee7b7ad8b19b8c6eabf957ea69c",
"assets/AssetManifest.json": "9006979258ff3a2d7f376025d028cb07",
"assets/assets/about-me.png": "1e4f9c47d704b703068ac559b4717223",
"assets/assets/about_art.png": "c26eb3a8e4e860fb3bf44d1abad68410",
"assets/assets/Art.jpg": "6508b78b7cf3c2888c3e15c06fddcd90",
"assets/assets/arthur_pic.jpg": "933d16d22aaf3019021ff87d0ee03389",
"assets/assets/background.png": "5821bdc03547b924a27952417bf5918f",
"assets/assets/bg_image.png": "a8a0ecf756dbff6f3c81e27c10e58b94",
"assets/assets/contact-me.png": "996ec82e2eb4f51364413378708a65bf",
"assets/assets/github-100.png": "7e8419dbd33d45f150be079a4cd23821",
"assets/assets/linkedin-100.png": "932896684a7405812813cafc82de1c9a",
"assets/assets/my-resume.png": "b604fc9b7afb86ebb5b118511ae4f93f",
"assets/assets/skills/android-studio-100.png": "5f67724242a441c7992159f8b2fd287b",
"assets/assets/skills/c-100.png": "e3d94d40cbbc1f4f827c0d03dff8af1c",
"assets/assets/skills/css-100.png": "188abf5ed844954e40067ff48693511e",
"assets/assets/skills/flutter-100.png": "16146638fb7793b9b9b0f79f7723f3a8",
"assets/assets/skills/git-100.png": "cdabb9ca322f3a4aa3bf6d014fa2edb8",
"assets/assets/skills/html-100.png": "83b77426e20d4c468d2b9c83b67c2a5a",
"assets/assets/skills/linux-100.png": "6dad37a7969a2a3aeffc6b337405bb66",
"assets/assets/skills/mysql-100.png": "e0ebc6232e760ff4d183c6287b0ebe3c",
"assets/assets/skills/net-100.png": "91203e1d2f0eb7306a6ab15fae1e53cc",
"assets/assets/skills/opensuse-100.png": "05d83b5bedffd99328f16c9da8a0fe24",
"assets/assets/skills/php-100.png": "87ef0430df734c5ef8e22a604ed7ad27",
"assets/assets/skills/wordpress-100.png": "b706a5692d793620df6ea73d15815481",
"assets/assets/works/AboutApp.png": "082ea0adb1d37ee387a35fde40a9db97",
"assets/assets/works/Fly_1.png": "d3694c4b6d419275021c45e269d96f7b",
"assets/assets/works/Fly_2.png": "3090d96b901294ddbb18a7b888435d00",
"assets/assets/works/Jump_1.png": "7a43368f26d53bf4ab3f9877523a8e15",
"assets/assets/works/Jump_2.png": "657ab198a9fe009ce890a6dd71548945",
"assets/assets/works/menu_1.png": "43a173ba634cc3395acd512d5b349e0c",
"assets/assets/works/psa_website.png": "ddfe60d2fb4a135292906d880a97aa17",
"assets/assets/works.png": "761d5e0590c768c09c419f25d19caf59",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "b82b895b7893d78b6a6de738d3d26c63",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "77cf97388c5a238b801523642c0fd8b2",
"canvaskit/canvaskit.wasm": "21010aa977f72fa9f688a1790150daf9",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "a3471c226d0394a05d60cd7881925542",
"canvaskit/chromium/canvaskit.wasm": "e2a9c8b9e6818d96afec1184bd166ef2",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ee47a9ec8eafd64eaea24b28d87ada4d",
"canvaskit/skwasm.wasm": "6c3da98745468043aad1fdbf533da655",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "b12cdd674701e8e0d3758e0f6465c1ce",
"flutter_bootstrap.js": "d47b817dcbb5d48181c4eb2926c37456",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73cffed7b60db960ce7b7d252efe6441",
"/": "73cffed7b60db960ce7b7d252efe6441",
"main.dart.js": "28b0f66db9ded55e1244cda07a6f69cf",
"manifest.json": "c5e2c5d785edc02da941b48724b3054f",
"version.json": "7234eb01e31e05acdbb90c9f8bc24c9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
