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

var precacheConfig = [["/AppleALC-to-AppleHDA/index.html","2d071388ff066593dce29a724935a74d"],["/Dactyl-ManuForm-Keyboard/index.html","a6ae26332ecde5e7f2067df43250f37a"],["/GPMS-Design/index.html","4a2dea023a7872e3d4b278ace65ed569"],["/GRE-Learning-notes/index.html","e325c0ca116564bb31bc375e057feedf"],["/Hexmoe/index.html","1b007807789fb66e1649c3464782529c"],["/Hexo/index.html","bb25080936be15c12380e3de80f7bfbd"],["/Magic-Trackpad-2/index.html","6bda1b1c1b107922fab54f91324a5beb"],["/My-feeling-about-Apple-and-Microsoft/index.html","51fa6e6f8fb6a16af9df63764b6c29fd"],["/PY.html","f21234eeda28d52cd0028a7349f018d9"],["/To-DW1820a/MCNES.jpg","a5242d98a79c9d480acf4c69279b5aa4"],["/To-DW1820a/index.html","677320c7309c12bdb0780db29b901e90"],["/about.html","802f9b54fc3e2091cf873a6d118f2289"],["/aplayer-and-dplayer/index.html","de1a445d5dc1999a4a1dea31cf60a0f1"],["/archives/2020/01/index.html","59aa240762290436c88808657eb43353"],["/archives/2020/02/index.html","c0c48ea3bdf0bd449f67b2f75a5c525e"],["/archives/2020/03/index.html","9f9c9f6a07a1d7ad8a05224797545bb8"],["/archives/2020/04/index.html","d2e75ef00e528eb12dbf3e39c5429b87"],["/archives/2020/05/index.html","59e143d0cd59cdc85be44d8c2d066242"],["/archives/2020/index.html","efe36585aa78e731605349af4de75ff0"],["/archives/2020/page/2/index.html","97667545cbf67d2186a7636c4b82af90"],["/archives/2021/02/index.html","8ec356be419a09108f2335e5b24e9a9d"],["/archives/2021/index.html","48662c2f153a569c5a10f55259ece2d2"],["/archives/2022/03/index.html","82c7084a18a584bd3fb6c718692e3e41"],["/archives/2022/04/index.html","7dc3438f56a34f6915d01e7d20ca60d9"],["/archives/2022/index.html","c43ae475d6ea2c9fe181d65eacf9b0e3"],["/archives/index.html","4abe8b4d43e2168694e4b9b72be97113"],["/archives/page/2/index.html","370fa602058223d300771dac9b0f7ca3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/build-frp-server/android-192x192.png","71aabbab45fe85ba15ec6c624bbef831"],["/build-frp-server/favicon-32x32.png","10c0e4bdf32ccacdffe62428007a9178"],["/build-frp-server/index.html","3963ff36476a40bba1e266f0a40f6515"],["/build-frp-server/pinned-octocat.svg","04bd217449cdb8dfb2d1ca02bf880c4d"],["/categories/作品/index.html","679c94a3b59e3f65f1d74494450633f9"],["/categories/学习/index.html","d4b3cc0212b60aa3e9263dba4e1b5fe2"],["/categories/折腾/index.html","10f8a7279b92aa0c1a584efcf600d747"],["/categories/折腾/page/2/index.html","80f9d138ba7efc8f76080ef5301b6a33"],["/categories/设备/index.html","0ac4035629aaf7b945f8175572e4aa7a"],["/change-system-drive/index.html","25d56db954a059f45420ed51c3a3b2e1"],["/css/style.css","fe290dc5c0c6a859a3d29b66e71a6e75"],["/css/zoom.css","891b5cede6a6fd94b873656a9ff2824d"],["/fonts-in-vscode/index.html","5965e9b4df9a96e31f6d50f853850706"],["/hello-world/index.html","a34c301cc92dbb49b74b6ec31eaccdfd"],["/images/avatar.png","5c75e62586b5958d84241bbf8da49156"],["/images/cover.jpg","23c86a0aad355e7fd7465cb8f7fca026"],["/index.html","67b4198a527ef323512da56ab2655636"],["/install-Hexo/index.html","4ffc4b42be0c9e8b59398961b0a202c1"],["/js/app.js","b38d006831c0caf5bb9d20399b3e4833"],["/js/bootstrap.min.js","2f34b630ffe30ba2ff2b91e3f3c322a1"],["/js/fancybox-inject-full.js","b1bf0794700e8a6678e92fb32b854590"],["/js/fancybox-inject.js","816ec0cf2d77a546b8de7aeb4d761fed"],["/js/transition.js","6e60d662a42a54f58b7f39a5a077bcb1"],["/js/zoom-inject.js","de098a9285249abf4e9ace54b9f47001"],["/js/zoom.js","7b1242ff134c9d4400398ed81520978b"],["/js/zoom.min.js","82a393b9c03fafb012b5d56b2cab79c7"],["/lib/iconfont/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/lib/iconfont/demo_index.html","66a89300bb5f8470f9d7a802956b7c35"],["/lib/iconfont/iconfont.css","7d548fe2d0e4ad4245c9602badb85ce7"],["/lib/iconfont/iconfont.eot","c1f105daf2849b315528378fc5108b65"],["/lib/iconfont/iconfont.js","7ba6bf06efe3dec04f41b6b1ad74e962"],["/lib/iconfont/iconfont.svg","877e4f9a3023e0e46c789e1c86384135"],["/lib/iconfont/iconfont.ttf","8dd90136d11ee5aef619a16dfd773dab"],["/lib/iconfont/iconfont.woff","a855e7b5e83fac7050ea141baca33075"],["/lib/iconfont/iconfont.woff2","4909054796cfcc808cc878659e4cefeb"],["/lib/mdui_043tiny/css/mdui.css","8fa58c17333084f34e2638a973f3a973"],["/lib/mdui_043tiny/js/mdui.js","b83d858e2a8dc8b0e92cefe8ae619939"],["/mc-server-mcnes/MCNES.jpg","111cccbd75aee17b3198cde95c1ca0c4"],["/mc-server-mcnes/MCNES.png","3010c86ffa55dc25cf080533a991d2bd"],["/mc-server-mcnes/index.html","104e03c626f684f4c3a8f597968516b0"],["/nexmoe-redesign/index.html","8a20cdac4a520bdebf3643f599748143"],["/osx-in-2020/index.html","6c4e1e52a94f8d0159610f7fb892841d"],["/page/2/index.html","f0f0c4157a943df3dd5e683e8a013e48"],["/play-ESP8266/index.html","7d071094767c98401b90bd2b0821a549"],["/pwa/logo/android-chrome-128x128.png","05a7566338a72aa388dc291ec224f198"],["/pwa/logo/android-chrome-512x512.png","8616523c69e8bff9098405c5f9a3ed2f"],["/screenshots-transitions-in-fcpx/index.html","4dec29901d831548015e505804849af7"],["/sw.js","b576765c0d0c445dcb7ad74fc9209633"]];
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







