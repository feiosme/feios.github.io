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

var precacheConfig = [["/AppleALC-to-AppleHDA/index.html","f694ffa47624b2c096f3374f37c6f81e"],["/GRE-Learning-notes/index.html","bb8ba4777e85a08b9520afb33fab929e"],["/Hexmoe/index.html","14e164baebae3e3565e014cc51ce1707"],["/Hexo/index.html","c56fc7a88219a01c45bf8500eb451763"],["/Magic-Trackpad-2/index.html","4735daa153fb75ea8c7d000e284258ec"],["/My-feeling-about-Apple-and-Microsoft/index.html","5bd3c84139546e15fc1ea83b29ca0900"],["/PY.html","525f62523e8093e2e700a7954c330fe0"],["/To-DW1820a/MCNES.jpg","a5242d98a79c9d480acf4c69279b5aa4"],["/To-DW1820a/index.html","3dcccb61134cb0431cebfacf1c2dadec"],["/about.html","aa3e52e29fc1d55efe0409e0ce42aeb2"],["/aplayer-and-dplayer/index.html","1e31afdbe377716c9e7b63e445ea4ff6"],["/archives/2020/01/index.html","23302e9a22bc18de68a4ae5db5690274"],["/archives/2020/02/index.html","de134f83c2e24dbb7181403ffb0d84d3"],["/archives/2020/03/index.html","612eae45c87d9a8d479f1fdf4835f316"],["/archives/2020/04/index.html","d3552ec45eb08a5ea7e371088cf28d74"],["/archives/2020/05/index.html","9917ff77f1bd9562cb87466dc8f6f5e1"],["/archives/2020/index.html","9ec7bfd4cedd39cccabe4d6e4e956aa9"],["/archives/2020/page/2/index.html","072e8d85c9e0b9271ea37f57d2775e5b"],["/archives/2021/02/index.html","15987e820f6a6758432285d26b868757"],["/archives/2021/index.html","44cfa80b9b2f2d947fdba0943389f9bf"],["/archives/index.html","56934897e203fd59bf0475ec41b8782d"],["/archives/page/2/index.html","85d33ed34d3b43b3aeb54b716f7fed10"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/build-frp-server/index.html","361ae2e49a502d678d85fb8c2fcedd24"],["/build-frp-server/pinned-octocat.svg","04bd217449cdb8dfb2d1ca02bf880c4d"],["/categories/作品/index.html","bdc0c86257db7dcbea62a7dd02f86d66"],["/categories/学习/index.html","851a435a5e3786ab7817e97e991bd133"],["/categories/折腾/index.html","57f326151599e3462c1842ab1a2053aa"],["/categories/设备/index.html","14649f157e9378c2af8bd222f293f7d2"],["/change-system-drive/index.html","420b4708aa972808fbf979bfb1770891"],["/css/style.css","fe290dc5c0c6a859a3d29b66e71a6e75"],["/css/zoom.css","891b5cede6a6fd94b873656a9ff2824d"],["/fonts-in-vscode/index.html","f7665def4edb0636714ea9f0528a585f"],["/hello-world/index.html","99b85f026c51b7b516a18a1ad0598137"],["/images/avatar.png","5c75e62586b5958d84241bbf8da49156"],["/images/cover.jpg","23c86a0aad355e7fd7465cb8f7fca026"],["/index.html","3e01ceadb98475b27d2048f8645df6fb"],["/install-Hexo/index.html","2937887c94e6b36355741e28fb037235"],["/js/app.js","b38d006831c0caf5bb9d20399b3e4833"],["/js/bootstrap.min.js","2f34b630ffe30ba2ff2b91e3f3c322a1"],["/js/fancybox-inject-full.js","b1bf0794700e8a6678e92fb32b854590"],["/js/fancybox-inject.js","816ec0cf2d77a546b8de7aeb4d761fed"],["/js/transition.js","6e60d662a42a54f58b7f39a5a077bcb1"],["/js/zoom-inject.js","de098a9285249abf4e9ace54b9f47001"],["/js/zoom.js","7b1242ff134c9d4400398ed81520978b"],["/js/zoom.min.js","82a393b9c03fafb012b5d56b2cab79c7"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","66a89300bb5f8470f9d7a802956b7c35"],["/lib/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["/lib/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["/lib/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["/lib/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["/lib/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["/lib/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["/lib/iconfont/iconfont.woff2","4909054796cfcc808cc878659e4cefeb"],["/lib/mdui_043tiny/css/mdui.css","8fa58c17333084f34e2638a973f3a973"],["/lib/mdui_043tiny/js/mdui.js","b83d858e2a8dc8b0e92cefe8ae619939"],["/mc-server-mcnes/MCNES.jpg","111cccbd75aee17b3198cde95c1ca0c4"],["/mc-server-mcnes/MCNES.png","3010c86ffa55dc25cf080533a991d2bd"],["/mc-server-mcnes/index.html","a00b72e452fe02594212285ba85fea04"],["/nexmoe-redesign/index.html","2790fc8918ebf9d5f262d8bef9da0735"],["/osx-in-2020/index.html","5a109e031145494cf9cda5d1872eba47"],["/page/2/index.html","943adf681656cb63bd0f6c4de3b43de3"],["/play-ESP8266/index.html","eb1c4e0fe47918fa0054f511c70c91a1"],["/pwa/logo/android-chrome-128x128.png","05a7566338a72aa388dc291ec224f198"],["/pwa/logo/android-chrome-512x512.png","8616523c69e8bff9098405c5f9a3ed2f"],["/screenshots-transitions-in-fcpx/index.html","e519c3e42b8ca4b86a8219a38d2a5c26"],["/sw.js","b576765c0d0c445dcb7ad74fc9209633"]];
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







