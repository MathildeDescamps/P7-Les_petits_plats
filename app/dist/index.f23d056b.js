// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"erxlV":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "fc2bdbfff23d056b";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"djX96":[function(require,module,exports) {
module.exports = JSON.parse("[{\"id\":1,\"name\":\"Limonade de Coco\",\"servings\":1,\"ingredients\":[{\"ingredient\":\"Lait de coco\",\"quantity\":400,\"unit\":\"ml\"},{\"ingredient\":\"Jus de citron\",\"quantity\":2},{\"ingredient\":\"Crème de coco\",\"quantity\":2,\"unit\":\"cuillères à soupe\"},{\"ingredient\":\"Sucre\",\"quantity\":30,\"unit\":\"grammes\"},{\"ingredient\":\"Glaçons\"}],\"time\":10,\"description\":\"Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée\",\"appliance\":\"Blender\",\"utensils\":[\"cuillère à Soupe\",\"verres\",\"presse citron\"]},{\"id\":2,\"name\":\"Poisson Cru à la tahitienne\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Thon Rouge (ou blanc)\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Concombre\",\"quantity\":1},{\"ingredient\":\"Tomate\",\"quantity\":2},{\"ingredient\":\"Carotte\",\"quantite\":1},{\"ingredient\":\"Citron Vert\",\"quantity\":5},{\"ingredient\":\"Lait de Coco\",\"quantity\":100,\"unit\":\"ml\"}],\"time\":60,\"description\":\"Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco\",\"appliance\":\"Saladier\",\"utensils\":[\"presse citron\"]},{\"id\":3,\"name\":\"Poulet coco réunionnais\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Poulet\",\"quantity\":1},{\"ingredient\":\"Lait de coco\",\"quantity\":400,\"unit\":\"ml\"},{\"ingredient\":\"Coulis de tomate\",\"quantity\":25,\"unit\":\"cl\"},{\"ingredient\":\"Oignon\",\"quantity\":1},{\"ingredient\":\"Poivron rouge\",\"quantity\":1},{\"ingredient\":\"Huile d'olive\"}],\"time\":80,\"description\":\"Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz\",\"appliance\":\"Cocotte\",\"utensils\":[\"couteau\"]},{\"id\":4,\"name\":\"Salade de riz\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Riz blanc\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Thon en miettes\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Tomate\",\"quantity\":2},{\"ingredient\":\"Oeuf dur\",\"quantity\":2},{\"ingredient\":\"Maïs\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Vinaigrette\",\"quantity\":5,\"unit\":\"cl\"}],\"time\":50,\"description\":\"Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..\",\"appliance\":\"Cuiseur de riz\",\"utensils\":[\"saladier\",\"passoire\"]},{\"id\":5,\"name\":\"Tarte au thon\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pâte feuilletée\",\"quantity\":1},{\"ingredient\":\"Thon en miettes\",\"quantity\":130,\"unit\":\"grammes\"},{\"ingredient\":\"Tomate\",\"quantity\":2},{\"ingredient\":\"Crème fraiche\",\"quantity\":2,\"unit\":\"cuillères à soupe\"},{\"ingredient\":\"gruyère râpé\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Moutarde de Dijon\",\"quantity\":1,\"unite\":\"cuillères à soupe\"}],\"time\":45,\"description\":\"Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes\",\"appliance\":\"Four\",\"utensils\":[\"moule à tarte\",\"râpe à fromage\",\"couteau\"]},{\"id\":6,\"name\":\"Tarte aux pommes\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Pâte brisée\",\"quantity\":1},{\"ingredient\":\"Pomme\",\"quantity\":3},{\"ingredient\":\"Oeuf\",\"quantity\":\"2\"},{\"ingredient\":\"Crème fraiche\",\"quantity\":25,\"unit\":\"cl\"},{\"ingredient\":\"Sucre en Poudre\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre vanillé\",\"quantity\":1,\"unit\":\"sachets\"}],\"time\":50,\"description\":\"Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes\",\"appliance\":\"Four\",\"utensils\":[\"moule à tarte\",\"saladier\",\"fourchette\"]},{\"id\":7,\"name\":\"Tartelettes au chocolat et aux fraises\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Pâte sablée\",\"quantity\":1},{\"ingredient\":\"Chocolat au lait\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Crème liquide\",\"quantity\":80,\"unit\":\"cl\"},{\"ingredient\":\"Beurre\",\"quantity\":\"30\",\"unit\":\"grammes\"},{\"ingredient\":\"Fraise\",\"quantity\":6}],\"time\":50,\"description\":\"Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur \",\"appliance\":\"Four\",\"utensils\":[\"moule à tartelettes (6)\",\"casserolle\"]},{\"id\":8,\"name\":\"Brownie\",\"servings\":10,\"ingredients\":[{\"ingredient\":\"Noix\",\"quantity\":\"180\",\"unit\":\"grammes\"},{\"ingredient\":\"Chocolat noir\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":120,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":2},{\"ingredient\":\"Sucre en Poudre\",\"quantity\":\"110\",\"unit\":\"grammes\"},{\"ingredient\":\"farine\",\"quantity\":90,\"unit\":\"grammes\"}],\"time\":60,\"description\":\"Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.\",\"appliance\":\"Four\",\"utensils\":[\"moule à gateaux\",\"casserolle\"]},{\"id\":9,\"name\":\"Salade Méditerannéene fraiche au chèvre\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Concombre\",\"quantity\":1},{\"ingredient\":\"Olives\"},{\"ingredient\":\"Fromage de chèvre\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Vinaigre Balsamic\"},{\"ingredient\":\"Huile d'olive\"},{\"ingredient\":\"Basilic\"}],\"time\":15,\"description\":\"Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.\",\"appliance\":\"Saladier\",\"utensils\":[\"cuillère en bois\",\"couteau\"]},{\"id\":10,\"name\":\"Tartiflette\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Roblochon\",\"quantity\":\"1\"},{\"ingredient\":\"Pommes de terre\",\"quantity\":4.5,\"unit\":\"kg\"},{\"ingredient\":\"Jambon fumé\",\"quantity\":2,\"unit\":\"tranches\"},{\"ingredient\":\"Oignon\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Vin blanc sec\",\"quantity\":30,\"unit\":\"cl\"}],\"time\":60,\"description\":\"Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !\",\"appliance\":\"Four\",\"utensils\":[\"plat à gratin\",\"couteau\",\"Économe\"]},{\"id\":11,\"name\":\"Salade tomate, mozzarella et pommes\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Tomates cerises\",\"quantity\":250,\"unit\":\"grammes\"},{\"ingredient\":\"Mozzarella\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Jambon de parme\",\"quantity\":4,\"unit\":\"tranches\"},{\"ingredient\":\"Pommes\",\"quantity\":1},{\"ingredient\":\"Salade Verte\",\"quantity\":1},{\"ingredient\":\"Vinaigrette\",\"quantity\":5,\"unit\":\"cl\"}],\"time\":10,\"description\":\"Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. \",\"appliance\":\"Saladier\",\"utensils\":[\"couteau\",\"cuillère à melon\"]},{\"id\":12,\"name\":\"Compote pomme rhubarbe\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Rhubarbe\",\"quantity\":160,\"unit\":\"grammes\"},{\"ingredient\":\"Pommes\",\"quantity\":8},{\"ingredient\":\"Sucre vanillé\",\"quantity\":6,\"unit\":\"sachets\"},{\"ingredient\":\"Eau\",\"quantity\":\"0.5\",\"unit\":\"tasses\"}],\"time\":40,\"description\":\"Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.\",\"appliance\":\"Casserole\",\"utensils\":[\"couteau\",\"économe\"]},{\"id\":13,\"name\":\"Salade mâchée de patates\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Mâche\",\"quantity\":60,\"unit\":\"grammes\"},{\"ingredient\":\"Pommes de terre\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Échalote\",\"quantity\":2},{\"ingredient\":\"Vinaigre de cidre\",\"quantity\":1,\"unit\":\"cuillère à soupe\"},{\"ingredient\":\"huile d'olive\",\"quantity\":2,\"unit\":\"cuillère à soupe\"}],\"time\":40,\"description\":\"Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter\",\"appliance\":\"Casserole\",\"utensils\":[\"couteau\",\"saladier\",\"cuillère en bois\"]},{\"id\":14,\"name\":\"Galette Bretonne Saucisse et Fromage à raclette\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Saucisse bretonne ou de toulouse\",\"quantity\":2},{\"ingredient\":\"Farine de blé noir\",\"quantity\":130,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":1},{\"ingredient\":\"Fromage à raclette\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Oignon\",\"quantity\":1},{\"ingredient\":\"Beurre\",\"quantity\":75,\"unit\":\"grammes\"}],\"time\":100,\"description\":\"Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes\",\"appliance\":\"Four\",\"utensils\":[\"poelle à frire\",\"couteau\"]},{\"id\":15,\"name\":\"Crêpes Chocolat Banane\",\"servings\":10,\"ingredients\":[{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Farine\",\"quantity\":250,\"unit\":\"grammes\"},{\"ingredient\":\"Lait\",\"quantity\":600,\"unit\":\"ml\"},{\"ingredient\":\"Beurre salé\",\"quantity\":30,\"unit\":\"grammes\"},{\"ingredient\":\"Chocolat au lait\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Banane\",\"quantity\":4}],\"time\":60,\"description\":\"Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands\",\"appliance\":\"Poële à crêpe\",\"utensils\":[\"saladier\",\"louche\",\"cuillère en bois\"]},{\"id\":16,\"name\":\"Gratin de pâtes à la tomate\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Tomate\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Mozzarella\",\"quantity\":250,\"unit\":\"grammes\"},{\"ingredient\":\"Pennes\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Basilic\",\"quantity\":1,\"unit\":\"tiges\"},{\"ingredient\":\"huile d'olives\",\"quantity\":2,\"unit\":\"cuillère à soupe\"}],\"time\":45,\"description\":\"Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.\",\"appliance\":\"Four\",\"utensils\":[\"plat à gratin\",\"couteau\",\"râpe à fromage\"]},{\"id\":17,\"name\":\"Smoothie à la fraise\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Fraise\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Pastèque\",\"quantity\":0.5},{\"ingredient\":\"Jus de citron\",\"quantity\":1,\"unit\":\"cuillères à soupe\"},{\"ingredient\":\"Glaçons\",\"quantity\":8},{\"ingredient\":\"Menthe\"}],\"time\":15,\"description\":\"Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.\",\"appliance\":\"Blender\",\"utensils\":[\"verres\",\"couteau\",\"presse citron\"]},{\"id\":18,\"name\":\"Smoothie ananas et vanille\",\"servings\":5,\"ingredients\":[{\"ingredient\":\"Ananas\",\"quantity\":1},{\"ingredient\":\"Glace à la vanille\",\"quantity\":500,\"unit\":\"ml\"},{\"ingredient\":\"Lait\",\"quantity\":50,\"unit\":\"cl\"}],\"time\":10,\"description\":\"Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt\",\"appliance\":\"Blender\",\"utensils\":[\"verres\",\"couteau\"]},{\"id\":19,\"name\":\"Shake Banane Kiwi\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Kiwi\",\"quantity\":4},{\"ingredient\":\"Citron\",\"quantity\":1},{\"ingredient\":\"Lait\",\"quantity\":1,\"unit\":\"litres\"},{\"ingredient\":\"Sucre glace\",\"quantity\":30,\"unit\":\"grammes\"},{\"ingredient\":\"Banane\",\"quantity\":1}],\"time\":0,\"description\":\"Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.\",\"appliance\":\"Blender\",\"utensils\":[\"couteau\",\"verres\",\"presse citron\"]},{\"id\":20,\"name\":\"Pates Carbonara\",\"servings\":5,\"ingredients\":[{\"ingredient\":\"Tagliatelles\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Lardons\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Crème fraiche\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Parmesan\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"huile d'olive\",\"quantity\":1,\"unit\":\"cuillères à soupe\"}],\"time\":30,\"description\":\"Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.\",\"appliance\":\"Sauteuse\",\"utensils\":[\"râpe à fromage\",\"cuillère en bois\"]},{\"id\":21,\"name\":\"Spaghettis à la bolognaise\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Spaghettis\",\"quantity\":400,\"unit\":\"grammes\"},{\"ingredient\":\"Oignon\",\"quantity\":2},{\"ingredient\":\"Coulis de tomate\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Viande hachée 1% de matière grasse\",\"quantity\":400,\"unit\":\"grammes\"},{\"ingredient\":\"Vin rouge\",\"quantity\":20,\"unit\":\"cl\"},{\"ingredient\":\"Crème Fraiche\",\"quantity\":1,\"unit\":\"cuillères à soupe\"}],\"time\":30,\"description\":\"Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.\",\"appliance\":\"Casserolle.\",\"utensils\":[\"Cuillère en bois\",\"louche\",\"couteau\"]},{\"id\":22,\"name\":\"Fondant au chocolat\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Beurre\",\"quantity\":160,\"unit\":\"grammes\"},{\"ingredient\":\"Chocolat noir\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Farine\",\"quantity\":50,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":4},{\"ingredient\":\"Sucre\",\"quantity\":150,\"unit\":\"grammes\"}],\"time\":30,\"description\":\"Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.\",\"appliance\":\"Four\",\"utensils\":[\"moule à gateaux\",\"fouet\",\"casserolle\"]},{\"id\":23,\"name\":\"Quiche lorraine\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pâte brisée\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Lardons\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":30,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Crème Fraîche\",\"quantity\":20,\"unit\":\"cl\"},{\"ingredient\":\"Lait\",\"quantity\":20,\"unit\":\"cl\"}],\"time\":60,\"description\":\"Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.\",\"appliance\":\"Four\",\"utensils\":[\"moule à gateaux\",\"rouleau à patisserie\",\"fouet\"]},{\"id\":24,\"name\":\"Salade de pâtes\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Thon en miettes\",\"quantity\":160,\"unit\":\"grammes\"},{\"ingredient\":\"Maïs\",\"quantity\":60,\"unit\":\"grammes\"},{\"ingredient\":\"Tomate\",\"quantity\":1},{\"ingredient\":\"Concombre\",\"quantity\":0.5},{\"ingredient\":\"Macaronis\",\"quantity\":300,\"unit\":\"grammes\"},{\"ingredient\":\"Mayonnaise\",\"quantity\":2,\"unit\":\"cuillères à soupe\"}],\"time\":40,\"description\":\"Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.\",\"appliance\":\"Saladier\",\"utensils\":[\"couteau\",\"cuillère en bois\"]},{\"id\":25,\"name\":\"Cookies\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Sucre\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Farine\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Chocolat noir en pepites\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":1}],\"time\":30,\"description\":\"Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.\",\"appliance\":\"Four\",\"utensils\":[\"fouet\",\"saladier\",\"plaque de cuisson\"]},{\"id\":26,\"name\":\"Soupe de tomates\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Tomate\",\"quantity\":6},{\"ingredient\":\"Pommes de terre\",\"quantity\":1},{\"ingredient\":\"Huile d'olives\"},{\"ingredient\":\"Oignon\",\"quantity\":1},{\"ingredient\":\"Ail\",\"quantity\":1,\"unit\":\"gousses\"}],\"time\":25,\"description\":\"Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.\",\"appliance\":\"Mixer\",\"utensils\":[\"cocotte minute\",\"couteau\"]},{\"id\":27,\"name\":\"Soupe à l'oseille\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Oseille\",\"quantity\":2},{\"ingredient\":\"Oeuf\",\"quantity\":1},{\"ingredient\":\"Crème fraîche\",\"quantity\":4,\"unit\":\"cuillère à soupe\"},{\"ingredient\":\"Vermicelles\",\"quantity\":1,\"unit\":\"verres\"},{\"ingredient\":\"Beurre salé\",\"quantity\":50,\"unit\":\"grammes\"}],\"time\":15,\"description\":\"Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche\",\"appliance\":\"Casserolle\",\"utensils\":[\"couteau\",\"cuillère en bois\"]},{\"id\":28,\"name\":\"Soupe de poireaux\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Poireau\",\"quantity\":3},{\"ingredient\":\"Pommes de terre\",\"quantity\":400,\"unit\":\"grammes\"},{\"ingredient\":\"Oseille\",\"quantity\":75,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":50,\"unit\":\"grammes\"},{\"ingredient\":\"Crême fraîche\",\"quantity\":10,\"unit\":\"cl\"}],\"time\":80,\"description\":\"Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.\",\"appliance\":\"Mixer\",\"utensils\":[\"casserolle\",\"couteau\"]},{\"id\":29,\"name\":\"Houmous Express\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Pois chiches\",\"quantity\":1,\"unit\":\"boites\"},{\"ingredient\":\"Ail\",\"quantity\":1,\"unit\":\"gousses\"},{\"ingredient\":\"Citron\",\"quantity\":2},{\"ingredient\":\"Huile d'olive\"},{\"ingredient\":\"Paprika\"}],\"time\":30,\"description\":\"Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.\",\"appliance\":\"Mixer\",\"utensils\":[\"cuillère en bois\",\"presse citron\"]},{\"id\":30,\"name\":\"Purée de pois cassés\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pois Cassé\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Oignon\",\"quantity\":1},{\"ingredient\":\"Ail\",\"quantity\":2,\"unit\":\"gousses\"}],\"time\":60,\"description\":\"Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt\",\"appliance\":\"Mixer\",\"utensils\":[\"casserolle\",\"cuillère en bois\"]},{\"id\":31,\"name\":\"Jardinière de légumes\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Carotte\",\"quantity\":2},{\"ingredient\":\"Pommes de terre\",\"quantity\":2},{\"ingredient\":\"Haricots verts\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Petits poids\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Lardons\",\"quantity\":150,\"unit\":\"grammes\"}],\"time\":60,\"description\":\"Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier\",\"appliance\":\"Poële\",\"utensils\":[\"Couteau\",\"économe\"]},{\"id\":32,\"name\":\"Croque Monsieur à la dinde\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pain de mie\",\"quantity\":8,\"unit\":\"tranches\"},{\"ingredient\":\"Blanc de dinde\",\"quantity\":4,\"unit\":\"tranches\"},{\"ingredient\":\"Emmental\",\"quantity\":8,\"unit\":\"tranches\"},{\"ingredient\":\"Gruyère\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Lait\",\"quantity\":5,\"unit\":\"cl\"},{\"ingredient\":\"Noix de muscade\",\"quantity\":1,\"unit\":\"pincées\"}],\"time\":20,\"description\":\"Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.\",\"appliance\":\"Four\",\"utensils\":[\"râpe à fromage\",\"cuillère à Soupe\",\"couteau\"]},{\"id\":33,\"name\":\"Sandwich au saumon fumé\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pain de mie\",\"quantity\":8,\"unit\":\"tranches\"},{\"ingredient\":\"Saumon Fumé\",\"quantity\":4,\"unit\":\"tranches\"},{\"ingredient\":\"Feuilles de laitue\",\"quantity\":4},{\"ingredient\":\"Fromage blanc\",\"quantity\":4,\"unit\":\"cuillères à soupe\"},{\"ingredient\":\"Jus de citron\",\"quantity\":1,\"unit\":\"cuillères à soupe\"}],\"time\":5,\"description\":\"Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.\",\"appliance\":\"Four\",\"utensils\":[\"couteau\",\"cuillère en bois\"]},{\"id\":34,\"name\":\"Purée de patate douce\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Patate douce\",\"quantity\":800,\"unit\":\"grammes\"},{\"ingredient\":\"Crème fraîche\",\"quantity\":20,\"unit\":\"cl\"},{\"ingredient\":\"Huile d'olive\"},{\"ingredient\":\"Orange\",\"quantity\":1}],\"time\":25,\"description\":\"Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.\",\"appliance\":\"Mixer\",\"utensils\":[\"couteau\",\"économe\",\"cuillère en bois\"]},{\"id\":35,\"name\":\"Purée de carottes\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Carotte\",\"quantity\":6},{\"ingredient\":\"Pommes de terre\",\"quantity\":1},{\"ingredient\":\"Beurre\",\"quantity\":20,\"unit\":\"grammes\"},{\"ingredient\":\"Crème fraîche\",\"quantity\":2,\"unit\":\"cuillères à soupe\"},{\"ingredient\":\"Cumin\",\"quantity\":1,\"unit\":\"cuillères à café\"},{\"ingredient\":\"Noix de muscade\",\"quantity\":1,\"unit\":\"pincées\"}],\"time\":25,\"description\":\"Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.\",\"appliance\":\"Mixer\",\"utensils\":[\"cocotte minute\",\"couteau\",\"cuillère en bois\"]},{\"id\":36,\"name\":\"Lasagne Courgettes et Chèvre\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Courgette\",\"quantity\":2},{\"ingredient\":\"Fromage de chèvre\",\"quantity\":4},{\"ingredient\":\"Lait\",\"quantity\":25,\"unit\":\"cl\"},{\"ingredient\":\"Lasagnes\",\"quantity\":5,\"unit\":\"feuilles\"},{\"ingredient\":\"Gruyère\",\"quantity\":40,\"unit\":\"grammes\"},{\"ingredient\":\"Maïzena\",\"quantity\":1,\"unit\":\"cuillères à soupe\"}],\"time\":35,\"description\":\"Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.\",\"appliance\":\"Four\",\"utensils\":[\"plat à gratin\",\"râpe à fromage\",\"fouet\"]},{\"id\":37,\"name\":\"Courgettes farcies au boeuf\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Courgette\",\"quantity\":2},{\"ingredient\":\"Viande hachée\",\"quantity\":600,\"unit\":\"grammes\"},{\"ingredient\":\"Huile d'olives\",\"quantity\":25,\"unit\":\"cl\"},{\"ingredient\":\"Oignon\",\"quantity\":1},{\"ingredient\":\"Coulis de tomates\",\"quantity\":20,\"unit\":\"cl\"},{\"ingredient\":\"Gruyère\",\"quantity\":50,\"unit\":\"grammes\"}],\"time\":60,\"description\":\"Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé\",\"appliance\":\"Four\",\"utensils\":[\"couteau\",\"cuillère en bois\",\"Poelle à frire\"]},{\"id\":38,\"name\":\"Pain Perdu\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pain\",\"quantity\":6,\"unit\":\"tranches\"},{\"ingredient\":\"Lait\",\"quantity\":25,\"unit\":\"cl\"},{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Sucre roux\",\"quantity\":75,\"unit\":\"grammes\"}],\"time\":20,\"description\":\"Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir\",\"appliance\":\"Four\",\"utensils\":[\"fouet\",\"bol\",\"Cuillère à Soupe\"]},{\"id\":39,\"name\":\"Crumble aux pommes\",\"servings\":40,\"ingredients\":[{\"ingredient\":\"Pomme\",\"quantity\":2},{\"ingredient\":\"Farine\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":50,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre roux\",\"quantity\":80,\"unit\":\"grammes\"}],\"time\":40,\"description\":\"Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four\",\"appliance\":\"Four\",\"utensils\":[\"saladier\",\"couteau\",\"fouet\"]},{\"id\":40,\"name\":\"Limonade\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Eau\",\"quantity\":1,\"unit\":\"Litres\"},{\"ingredient\":\"Citron Vert\",\"quantity\":3},{\"ingredient\":\"Sucre en poudre\",\"quantity\":4,\"unit\":\"cuillères à café\"},{\"ingredient\":\"Bicarbonate\",\"quantity\":1,\"unit\":\"cuillères à café\"}],\"time\":10,\"description\":\"Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.\",\"appliance\":\"Saladier\",\"utensils\":[\"cuillère en bois\"]},{\"id\":41,\"name\":\"Mousse au chocolat\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Chocolat noir\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre vanillé\",\"quantity\":1,\"unit\":\"sachets\"}],\"time\":20,\"description\":\"Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais\",\"appliance\":\"Casserolle\",\"utensils\":[\"fouet\",\"spatule\",\"verres\"]},{\"id\":42,\"name\":\"Charlotte au poires\",\"servings\":3,\"ingredients\":[{\"ingredient\":\"Chocolat\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Poires au jus\",\"quantity\":0.5,\"unit\":\"boites\"},{\"ingredient\":\"Boudoirs\",\"quantity\":15}],\"time\":60,\"description\":\"Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.\",\"appliance\":\"Moule à charlotte\",\"utensils\":[\"saladier\",\"couteau\",\"fouet\"]},{\"id\":43,\"name\":\"Tarte au citron\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Pâte brisée\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre fondu\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":3},{\"ingredient\":\"Citron\"}],\"time\":50,\"description\":\"Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit \",\"appliance\":\"Four\",\"utensils\":[\"rouleau à patisserie\",\"moule à tarte\",\"presse citron\"]},{\"id\":44,\"name\":\"Crème déssert au chocolat\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Lait\",\"quantity\":1,\"unit\":\"litres\"},{\"ingredient\":\"Chocolat\",\"quantity\":200,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":50,\"unit\":\"grammes\"},{\"ingredient\":\"farine\",\"quantity\":40,\"unit\":\"grammes\"}],\"time\":15,\"description\":\"Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres\",\"appliance\":\"Casserolle\",\"utensils\":[\"cuillère en bois\"]},{\"id\":45,\"name\":\"Crème patissière\",\"servings\":8,\"ingredients\":[{\"ingredient\":\"Lait\",\"quantity\":50,\"unit\":\"cl\"},{\"ingredient\":\"Oeuf\",\"quantity\":2},{\"ingredient\":\"Farine\",\"quantity\":30,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre\",\"quantity\":80,\"unit\":\"grammes\"}],\"time\":30,\"description\":\"Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.\",\"appliance\":\"Casserolle\",\"utensils\":[\"fouet\",\"saladier\"]},{\"id\":46,\"name\":\"Far breton\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Farine\",\"quantity\":250,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre\",\"quantity\":150,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre vanillé\",\"quantity\":1,\"unit\":\"sachets\"},{\"ingredient\":\"Oeuf\",\"quantity\":4},{\"ingredient\":\"Lait\",\"quantity\":1,\"unit\":\"litre\"},{\"ingredient\":\"Pruneaux\",\"quantity\":100,\"unit\":\"grammes\"}],\"time\":60,\"description\":\"Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes\",\"appliance\":\"Four\",\"utensils\":[\"fouet\",\"moule\",\"verres\"]},{\"id\":47,\"name\":\"Mousse au citron\",\"servings\":6,\"ingredients\":[{\"ingredient\":\"Jus de citron\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Mascarpone\",\"quantity\":250,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre\",\"quantity\":100,\"unit\":\"grammes\"},{\"ingredient\":\"Crème Fraîche\",\"quantity\":20,\"unit\":\"cl\"}],\"time\":5,\"description\":\"Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir\",\"appliance\":\"Saladier\",\"utensils\":[\"fouet\",\"verres\",\"cuillère en bois\"]},{\"id\":48,\"name\":\"Pizza\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Pâte à pizza\",\"quantity\":1},{\"ingredient\":\"Tomates pelées\",\"quantity\":1,\"unit\":\"boites\"},{\"ingredient\":\"Lardons\",\"quantity\":1,\"unit\":\"barquettes\"},{\"ingredient\":\"Champignons de paris\",\"quantity\":1,\"unit\":\"boites\"},{\"ingredient\":\"Gruyère\",\"quantity\":200,\"unit\":\"grammes\"}],\"time\":40,\"description\":\"Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes\",\"appliance\":\"Four\",\"utensils\":[\"rouleau à patisserie\",\"râpe à fromage\",\"couteau\"]},{\"id\":49,\"name\":\"Smoothie tropical\",\"servings\":4,\"ingredients\":[{\"ingredient\":\"Bananes\",\"quantity\":2},{\"ingredient\":\"Kiwis\",\"quantity\":3},{\"ingredient\":\"Mangue\",\"quantity\":1},{\"ingredient\":\"Ananas\",\"quantity\":4,\"unit\":\"tranches\"},{\"ingredient\":\"Miel\",\"quantity\":2,\"unit\":\"cuillères à soupe\"}],\"time\":0,\"description\":\"Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir\",\"appliance\":\"Blender\",\"utensils\":[\"couteau\",\"verres\"]},{\"id\":50,\"name\":\"Frangipane\",\"servings\":2,\"ingredients\":[{\"ingredient\":\"Pâte feuilletée\",\"quantity\":400,\"unit\":\"grammes\"},{\"ingredient\":\"Oeuf\",\"quantity\":6},{\"ingredient\":\"Poudre d'amendes\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Beurre\",\"quantity\":500,\"unit\":\"grammes\"},{\"ingredient\":\"Sucre glace\",\"quantity\":500,\"unit\":\"grammes\"}],\"time\":60,\"description\":\"Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes\",\"appliance\":\"Four\",\"utensils\":[\"rouleau à patisserie\",\"fouet\"]}]");

},{}]},["erxlV","djX96"], "djX96", "parcelRequirec720")

//# sourceMappingURL=index.f23d056b.js.map
