'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4bdabd88d19eaa63b66249726757911b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b29eaa11f3d9e324dc29b23f10c903f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46fbcc6981a8c9182e2fb1dbccfaf696",
".git/logs/refs/heads/main": "4cdee590b649945671c76ea9814bafec",
".git/logs/refs/remotes/origin/main": "450f0460b7875f90a92d7a81a7123699",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/15/31bbd2328ea0abac3e87a349bbe13922f1a4ab": "aab1f44617a6ac0fcf2fd0b8c6eaf208",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/2df83f56a7ca83c37d5b4f51774a17742594af": "7bdb2b2ad540df7b2ae42fd2a30e0d91",
".git/objects/26/1b548d7706084ec4ab6c4d2ea9d45db34db9de": "89aeda2bbcf00da0075a895447e3d5de",
".git/objects/32/496ba3affc15698e1d1ae03ede685cde972946": "173004167908a1ec9d295c15093db019",
".git/objects/33/b847041293395b82fb6c103a31be1ba977123a": "9f3ddf6f45c4dff3268181723dcc2aa2",
".git/objects/39/003e7a6332aa4c6a5ac0b20be56a577b20a1c8": "d13e0d9f02923034b641b4a760af0417",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/47/557637aea29036a7068b7dd91c0eae6969b741": "eb9e4ca608a55b56c7bd91f3c5951b58",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/576e57ab6c12898bfa126e0c793d2d15e2ba9a": "ad7e0910236e86243662b750eb3bbfc1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/416b2d3b2a45e263d05d82095168f8e441e889": "98b655338a88cc11b863e5a0a0ae1dbe",
".git/objects/62/f2077934f081d8e11443cee46c0d3ce6a29a69": "5ba79bb409f7ff1201fa549292e7e3b8",
".git/objects/63/64062dae8f24885b94fc5ddd4aa629cb55abb0": "f307a716747c3fc448f6ead94545eac1",
".git/objects/6a/b591bc20f7ace6ff36cd9bfbcc0af08b54a948": "e3280d94062a8536deadc056bf98d7f1",
".git/objects/7d/abf379aa9d892b432918d29ffc0f665909c5a4": "03c7bc58b048f69c8e02277adbfeda67",
".git/objects/80/55574ccf449ba6eb5069be9d90ab5f8e75ac0e": "5d6bba719767e9c942d4f97bd7e44d3a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/2fae9240e0b7789e6f95a854e9c1b227ffde26": "235523f466a8e934ca0166cf83d6c0c3",
".git/objects/95/64a508bde2a1c8c22dcebf3ad3cb1259425624": "ad647c24e2f158a402eeffb67e3fccbf",
".git/objects/a6/2e723b1d3c37b00a1843f4b92d2a866d198468": "74e475085950fecf65e860f99c86a038",
".git/objects/ac/3f49f8030a9517bb77718ec3910ae35a851eae": "d9b761a61a7b7b1914517a215f6b96f5",
".git/objects/b3/5478866b1d014cce1d652fa86fca11cb6599f1": "43b286ffb97a6e3bad4f337b0f6d5c6a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/5c8dd05a006937b488c913303cf2dd95c4e0dd": "21eee35753f7d0bd30ee7125eb09d367",
".git/objects/c4/48feacdc6f1625ace4cfd5e52c9f5a6b04b0ca": "650d78c745885e9223f06cdbd968b4a2",
".git/objects/d1/21b219d577c31f705502636e576e9baba491ce": "83a8443e94b686ad1bf8835cedba17f7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bf49959f2f45cf5a32a2de26793bb3f2ccb313": "9284264fd0a4106cd5e62251ce80f0de",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/f1b7e7d30842c8622c2cd7bb40952295edef8c": "df8d1b96e4f29135c8b4e475523b9b50",
".git/objects/e5/4854887c7979f057effb19d006e65d5e22320e": "84de26a6be1808702194738647bf550e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/20599f84348935696a35c862d5ef81afdccc4a": "a1bceb9fd2ce6f45df4fde5319457c3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/28e5adbe5f31d1134a97a5b611ca91d7e80d9f": "0f20a2460758798d1dd640ea6d08b8a1",
".git/objects/f6/590f126fb5e0e3a86142e0539b314f628b646f": "b553ba898e6f13078ba25e178be03ba2",
".git/refs/heads/main": "69bc9a4e2b61597670a2b7ab5ba28721",
".git/refs/remotes/origin/main": "69bc9a4e2b61597670a2b7ab5ba28721",
"assets/AssetManifest.bin": "1edd267a1e71ebb76e15061847f94598",
"assets/AssetManifest.bin.json": "fc2eda65f56c9604d7593801da40da38",
"assets/AssetManifest.json": "79b5f4109719371665c144150ea65666",
"assets/assets/images/logo.png": "33b401564b5c15fab1f4904a41f7ac06",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c08b4bfe7cd67853c837d10c40969c3b",
"assets/NOTICES": "2793535bfdb7bad87fc63695796157cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "302dbd9f3334ff132921b54ab4f2a69b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "3b0c5a669e87a380eee13c0fabfa0667",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "ac6446f753316635b4290bf767d4eb23",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "81a4f1b8cca113574cd038a67deef3ae",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42dcbc331d7858faa46a204720501f26",
"/": "42dcbc331d7858faa46a204720501f26",
"main.dart.js": "82413d3bfd5e156d799c91df3fcadb66",
"manifest.json": "b287b9bc704d0cf846c100200f1f521e",
"version.json": "af9d9a84f7fd9928f92336916e49b4a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
