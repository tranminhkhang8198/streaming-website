// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../scripts/main.js":[function(require,module,exports) {
var teamBlocks = Array.from(document.querySelectorAll('.schedule-team-name'));
teamBlocks.forEach(function (item) {
  item.addEventListener('mouseenter', function () {});
});
var cloneObject = [{
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming2"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming2"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming2"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming1"
}, {
  imgSrc: ['https://picsum.photos/200/200', 'https://picsum.photos/200/200'],
  alt: 'Alt logo',
  teamName: ['GEORIA', 'VietVi'],
  time: '12/10/2019 - 10:00 PM',
  tournament: 'Euro 2020 Qualification',
  streamingKey: "streaming2"
}];
var scheduler = document.querySelector('.schedule');
var outputScheduler = '';
cloneObject.forEach(function (item) {
  outputScheduler += "\n        <div class=\"schedule-containers row\" data-key=\"".concat(item.streamingKey, "\">\n            <div class=\"col-1\"></div>\n            <div class=\"col-4 d-flex flex-row align-items-center justify-content-start schedule-team-1 schedule-team\">\n                <img class=\"rounded-circle img-responsive schedule-team-img\" src=\"").concat(item.imgSrc[0], "\" alt=\"").concat(item.alt, "\" />\n                <div class=\"schedule-team-name-container schedule-team-name-container-1\">\n                    <p class=\"schedule-team-name\">").concat(item.teamName[0], "</p>\n                </div>\n            </div>\n            <div class=\"col-2 schedule-time-container d-flex flex-column justify-content-center align-items-center\">\n                <p class=\"schedule-time\">").concat(item.time, "</p><strong class=\"schedule-tour-name\">Euro 2020 Qualification</strong></div>\n            <div class=\"col-4 d-flex flex-row align-items-center justify-content-end schedule-team-2 schedule-team\">\n                <div class=\"schedule-team-name-container schedule-team-name-container-2\">\n                    <p class=\"schedule-team-name\">").concat(item.teamName[1], "</p>\n                </div><img class=\"rounded-circle schedule-team-img img-responsive\" src=\"").concat(item.imgSrc[1], "\" alt=\"").concat(item.alt, "\" /></div>\n            <div class=\"col-1\"></div>\n        </div>");
});
scheduler.innerHTML = outputScheduler;
var streamingContainer = document.querySelector('.streaming-container');
var streamingOutput = '';
var cloneStreaming = [{
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}, {
  teamName: ['BAGA', 'PetLand'],
  score: '0 - 1',
  tournament: 'Vietnem'
}];
cloneStreaming.forEach(function (item) {
  streamingOutput += "\n        <div class=\"streaming-card row w-75 mx-auto mb-3\">\n            <div class=\"col-4 streaming-card-title-container d-flex flex-row align-items-center\"><i class=\"fas fa-tv mr-3\"></i>\n                <h3 class=\"streaming-card-title\">".concat(item.tournament, "</h3>\n            </div>\n            <div class=\"col-3 streaming-card-team-1-container d-flex align-items-center justify-content-center\">\n                <p class=\"streaming-card-team-1\">").concat(item.teamName[0], "</p>\n            </div>\n            <p class=\"col-1 streaming-card-score d-flex align-items-center justify-content-center\">").concat(item.score, "</p>\n            <div class=\"col-3 streaming-card-team-2-container d-flex align-items-center justify-content-center\">\n                <p class=\"streaming-card-team-2\">").concat(item.teamName[1], "</p>\n            </div>\n        </div>\n    ");
});
streamingContainer.innerHTML = streamingOutput;
Array.from(document.querySelectorAll('.schedule-containers')).forEach(function (item) {
  item.addEventListener('click', function () {
    localStorage.setItem('key', item.dataset.key);
    window.location = '/streaming.html';
  });
});
},{}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43145" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../scripts/main.js"], null)
//# sourceMappingURL=/main.1cbf646b.js.map