/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/AppleALC-to-AppleHDA/index.html","3dbb7ae9e88269194b0ec6e83b7eb1c0"],["/GRE-Learning-notes/index.html","bb0883be10b2fe8913995e750e36082d"],["/Hexmoe/index.html","b73841b3459958563384417e84a1df47"],["/Hexo/index.html","7238cfec351c3feb3a03ca22397633bb"],["/Magic-Trackpad-2/index.html","8540ced04372c5cbab4e19b78bef6e37"],["/My-feeling-about-Apple-and-Microsoft/index.html","76eba8ba3f2d5a4913c9c68b25606cb5"],["/PY.html","0ec89b1970eb9d468551ec12154d9365"],["/To-DW1820a/MCNES.jpg","a5242d98a79c9d480acf4c69279b5aa4"],["/To-DW1820a/index.html","9fa257a5c5be59e1659ff3f415151daa"],["/about.html","3c345b83423e969fca96cfd499672db0"],["/aplayer-and-dplayer/index.html","89fbdb23f8d0f450c92f2e28fda999e1"],["/archives/2020/01/index.html","f2fadd6759e2d73cc343b359fe8023e2"],["/archives/2020/02/index.html","c1e70cf9aae37c3565ec0945c2466260"],["/archives/2020/03/index.html","82e848ea1ae228401f130babd88ae82e"],["/archives/2020/04/index.html","a0e05e96b7484ed7b8d0805f6672a392"],["/archives/2020/05/index.html","54c12317f237a50e004f0c35d2451582"],["/archives/2020/index.html","6a5fd96f466a50d7be595e68df252f0d"],["/archives/2020/page/2/index.html","40c6beb3ee327c711d619557f6fef4ef"],["/archives/index.html","641ef34c91ce3200b2d7dd701b13d92a"],["/archives/page/2/index.html","8d726e2d3f8dd789b2b46f94b5516d6b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/作品/index.html","5b372657c321f815c0ced6a1fc8a1f69"],["/categories/学习/index.html","506e9f749f9827ebb5576fe2e036bc31"],["/categories/折腾/index.html","86a8ee74ecb54d97ecb49dec0dce64f8"],["/categories/设备/index.html","8ade789b594a23493766315b5b0e5d32"],["/change-system-drive/index.html","34865b47cafe94cd08a928f8c77f29b4"],["/css/style.css","a34b7317f670cec49cffe0156e3549b1"],["/css/zoom.css","891b5cede6a6fd94b873656a9ff2824d"],["/fonts-in-vscode/index.html","9337334fbb969bb3e782d883ae30eaac"],["/hello-world/index.html","f8f139666d56fa36e1cfa62bdcc679cb"],["/images/avatar.png","5c75e62586b5958d84241bbf8da49156"],["/images/cover.jpg","23c86a0aad355e7fd7465cb8f7fca026"],["/index.html","579f0a2d981757f9cb02a34439763b73"],["/install-Hexo/index.html","1414c8130f43880d815db657c6cda7ed"],["/js/app.js","b38d006831c0caf5bb9d20399b3e4833"],["/js/bootstrap.min.js","2f34b630ffe30ba2ff2b91e3f3c322a1"],["/js/fancybox-inject-full.js","b1bf0794700e8a6678e92fb32b854590"],["/js/fancybox-inject.js","816ec0cf2d77a546b8de7aeb4d761fed"],["/js/transition.js","6e60d662a42a54f58b7f39a5a077bcb1"],["/js/zoom-inject.js","de098a9285249abf4e9ace54b9f47001"],["/js/zoom.js","7b1242ff134c9d4400398ed81520978b"],["/js/zoom.min.js","82a393b9c03fafb012b5d56b2cab79c7"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","21ec590233f36b6497349bf898104914"],["/lib/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["/lib/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["/lib/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["/lib/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["/lib/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["/lib/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["/lib/iconfont/iconfont.woff2","4909054796cfcc808cc878659e4cefeb"],["/lib/mdui_043tiny/css/mdui.css","07f51190077db540b7d77f5eb3c63c9a"],["/lib/mdui_043tiny/js/mdui.js","b83d858e2a8dc8b0e92cefe8ae619939"],["/mc-server-mcnes/MCNES.jpg","a5242d98a79c9d480acf4c69279b5aa4"],["/mc-server-mcnes/MCNES.png","3010c86ffa55dc25cf080533a991d2bd"],["/mc-server-mcnes/index.html","13322494afcf2062e1329d413bb44646"],["/nexmoe-redesign/index.html","27722ad9a033dfed5a9536db78b8c8e6"],["/osx-in-2020/index.html","77bcb26326d7d04000f4aaa4353e66e7"],["/page/2/index.html","f558e73da3f65b000f38d77cd23f7d8e"],["/play-ESP8266/index.html","b7fffbb021d805610153e9d6ac4d4d10"],["/pwa/logo/android-chrome-128x128.png","05a7566338a72aa388dc291ec224f198"],["/pwa/logo/android-chrome-512x512.png","8616523c69e8bff9098405c5f9a3ed2f"],["/screenshots-transitions-in-fcpx/index.html","dce18229eb30324965eac61bcaba5911"],["/sw.js","b576765c0d0c445dcb7ad74fc9209633"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







