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
})({"49GRG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6aa77c329a3ae487";
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

},{}],"gngJL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recipesJson = require("../data/recipes.json");
var _recipesJsonDefault = parcelHelpers.interopDefault(_recipesJson);
////        DOM     ////
//On récupère tous les inputs
let searchbarInput = document.querySelector(".searchbox #searchRecipes input#search");
let ingredientsFilterInput = document.querySelector(".searchbox #ingredients-filter input.ingredients-filter");
let appliancesFilterInput = document.querySelector(".searchbox #appliances-filter input.appliances-filter");
let utensilsFilterInput = document.querySelector(".searchbox #utensils-filter input.utensils-filter");
//Le contenu des filtres
let ingredientsList = document.querySelector(".searchbox #ingredients-filter .filter-items");
let appliancesList = document.querySelector(".searchbox #appliances-filter .filter-items");
let utensilsList = document.querySelector(".searchbox #utensils-filter .filter-items");
//Les tags wrappers
let ingredientTagsWrapper = document.querySelector('.searchbox__tags .ingredient-tags');
let applianceTagsWrapper = document.querySelector('.searchbox__tags .appliance-tags');
let utensilTagsWrapper = document.querySelector('.searchbox__tags .utensil-tags');
//Les tags
let taggedIngredients = [];
let taggedAppliances = [];
let taggedUtensils = [];
let crosses;
//La section où l'on va afficher les résultats de recherche
const matchList = document.getElementById('results');
////        VARIABLES       ////
//Tableaux contenant les items dans les filtres
let ingredientsInFilter = [];
let appliancesInFilter = [];
let utensilsInFilter = [];
////        FUNCTIONS       ////
//Afficher les résultats de la (ou les) recherche(s)
const displayResults = (matches)=>{
    if (matches.length > 0) {
        const html = matches.map((match)=>`
            <div class="card">
                <div class="card-inner bg-light-gray">
                    <div class="card-img-top" style="background: url('https://fakeimg.pl/800x400/C6BEBE/?text=Yummy')">
                    </div>
                    <div class="card-body">
                        <div>
                            <h4 class="card-title">${match.name}</h4>
                            <div class="time">
                                <span class="material-icons material-icons-outlined">access_time</span>
                                <p>${match.time} min</p>
                            </div>
                        </div>
                        <div class="description">
                            <p class="card-text">${match.description.slice(0, 200) + '...'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
        ).join(' ');
        matchList.innerHTML = html;
    } else matchList.innerHTML = '';
};
//Filtrer les recettes avec les tags
const filterWithTags = (recipesToFilter)=>{
    //On récupère les tags
    taggedIngredientsDOM = Array.from(document.querySelectorAll('.searchbox__tags .ingredient-tags .tag .tag-text'));
    taggedAppliancesDOM = Array.from(document.querySelectorAll('.searchbox__tags .appliance-tags .tag .tag-text'));
    taggedUtensilsDOM = Array.from(document.querySelectorAll('.searchbox__tags .utensil-tags .tag .tag-text'));
    let taggedIngredients = [];
    let taggedAppliances = [];
    let taggedUtensils = [];
    taggedIngredientsDOM.forEach((taggedIngredient)=>{
        taggedIngredients.push(taggedIngredient.innerText);
    });
    taggedAppliancesDOM.forEach((taggedAppliance)=>{
        taggedAppliances.push(taggedAppliance.innerText);
    });
    taggedUtensilsDOM.forEach((taggedUtensil)=>{
        taggedUtensils.push(taggedUtensil.innerText);
    });
    console.log("tagged ingredient : ", taggedIngredients);
    //On filtres les recettes d'après les tags
    let matches = recipesToFilter.filter((recipe)=>{
        let recipeIsMatching = false;
        let ingredientsMatching = 0;
        let appliancesMatching = 0;
        let utensilsMatching = 0;
        let ingredientsInTheRecipe = [];
        let applianceInTheRecipe = [];
        let utensilsInTheRecipe = [];
        //On récupère tous les ingrédients de la recette
        /* recipe.ingredients.forEach(({ingredient}) => {
            ingredientsInTheRecipe.push(ingredient);
        }) */ ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient  })=>{
            return ingredient;
        });
        console.log(ingredientsInTheRecipe);
        //On récupère l'appareil de la recette
        applianceInTheRecipe.push(recipe.appliance);
        //On récupère tous les ustensils de la recette
        recipe.utensils.forEach((utensil)=>{
            utensilsInTheRecipe.push(utensil);
        });
        console.log("Recipe : ");
        //On filtre par ingrédient
        console.log("Ingredients correspondants : ");
        if (taggedIngredients.length > 0) taggedIngredients.forEach((taggedIngredient)=>{
            if (ingredientsInTheRecipe.includes(taggedIngredient)) {
                console.log("La recette contient le tag : ", taggedIngredient);
                ingredientsMatching++;
            }
        });
        //On filtre par appareil
        console.log("Appareils correspondants : ");
        if (taggedAppliances.length > 0) taggedAppliances.forEach((taggedAppliance)=>{
            if (applianceInTheRecipe.includes(taggedAppliance)) {
                console.log("La recette contient le tag : ", taggedAppliance);
                appliancesMatching++;
            }
        });
        //On filtre par ustensiles
        console.log("Ustensiles correspondants : ");
        if (taggedUtensils.length > 0) taggedUtensils.forEach((taggedUtensil)=>{
            if (utensilsInTheRecipe.includes(taggedUtensil)) {
                console.log("La recette contient le tag : ", taggedUtensil);
                utensilsMatching++;
            }
        });
        //Si tous les tags correspondent à la recette, alors on doit l'afficher
        if (ingredientsMatching === taggedIngredients.length) recipeIsMatching = true;
        return recipeIsMatching;
    });
    displayResults(matches);
};
//Supprimer un tag
const deleteTag = (recipesToFilter)=>{
    //On écoute si l'utilisateur veut supprimer un tag
    crosses = Array.from(document.querySelectorAll(".searchbox .searchbox__tags .tags-wrapper .tag .tag-icon"));
    crosses.forEach((cross)=>{
        cross.addEventListener('click', function(e) {
            e.target.parentElement.remove();
            filterWithTags(recipesToFilter);
            search();
        });
    });
    //e.target.parentElement.remove();
    filterWithTags(recipesToFilter);
};
//Ajouter un tag
const addTag = (recipesToFilter, filterCategory, text, index)=>{
    //On crée le tag
    let tag = document.createElement('div');
    tag.classList.add('tag');
    if (filterCategory === 'ingredient') {
        tag.classList.add('bg-blue');
        tag.classList.add('ingredient');
        ingredientTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'utensil') {
        tag.classList.add('bg-red');
        tag.classList.add('utensil');
        utensilTagsWrapper.appendChild(tag);
    } else if (filterCategory === 'appliance') {
        tag.classList.add('bg-green');
        tag.classList.add('appliance');
        applianceTagsWrapper.appendChild(tag);
    }
    tag.setAttribute('id', 'tag-' + index.toString());
    //Le nom du tag
    let tagText = document.createElement('p');
    tagText.classList.add('tag-text');
    tagText.innerText = text;
    tag.appendChild(tagText);
    //Et le bouton 'x' pour supprimer le tag
    let icon = document.createElement('span');
    icon.classList.add('tag-icon');
    icon.classList.add('material-icons');
    icon.classList.add('material-icons-outlined');
    icon.innerText = 'highlight_off';
    tag.appendChild(icon);
    deleteTag(recipesToFilter);
    //On refiltre les résultats selon le tag ajouté
    filterWithTags(recipesToFilter);
};
// 0 : Pas de recherche, mais on peut ajouter et supprimer des tags
const noSearchButTags = ()=>{
    //On met tous les ingrédients/appareils/ustensiles dans les filtres
    _recipesJsonDefault.default.forEach((recipe)=>{
        recipe.ingredients.forEach(({ ingredient  })=>{
            if (ingredientsInFilter.includes(ingredient) === false) {
                ingredientsInFilter.push(ingredient);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = ingredient;
                ingredientsList.appendChild(filterItem);
            }
        });
        if (appliancesInFilter.includes(recipe.appliance) === false) {
            appliancesInFilter.push(recipe.appliance);
            let filterItem = document.createElement('span');
            filterItem.classList.add('filter-item');
            filterItem.innerText = recipe.appliance;
            appliancesList.appendChild(filterItem);
        }
        recipe.utensils.forEach((utensil)=>{
            if (utensilsInFilter.includes(utensil) === false) {
                utensilsInFilter.push(utensil);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = utensil;
                utensilsList.appendChild(filterItem);
            }
        });
    });
    //On affiche rien dans les résultats
    let matches = [];
    displayResults(matches);
    //Gestion des tags
    let ingredientsInFilterDOM = document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item");
    let appliancesInFilterDOM = document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item");
    let utensilsInFilterDOM = document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item");
    //Pour les tags ingrédient
    ingredientsInFilterDOM.forEach((ingredientDOM, index)=>{
        ingredientDOM.addEventListener('click', function() {
            let tagDOM = `.searchbox__tags .ingredient#tag-${index.toString()}`;
            //Si l'ingrédient n'est pas encore affiché dans les tags
            if (!document.querySelector(tagDOM)) addTag(_recipesJsonDefault.default, 'ingredient', ingredientDOM.innerText, index);
            else return;
        });
    });
    //Pour les tags appareil
    appliancesInFilterDOM.forEach((applianceDOM, index)=>{
        applianceDOM.addEventListener('click', function() {
            let tagDOM = `.searchbox__tags .appliance#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) addTag(_recipesJsonDefault.default, 'appliance', applianceDOM.innerText, index);
        });
    });
    //Pour les tags ustensile
    utensilsInFilterDOM.forEach((utensilDOM, index)=>{
        utensilDOM.addEventListener('click', function() {
            let tagDOM = `.searchbox__tags .utensil#tag-${index.toString()}`;
            if (!document.querySelector(tagDOM)) addTag(_recipesJsonDefault.default, 'utensil', utensilDOM.innerText, index);
        });
    });
};
//Au lancement de l'appli, on est dans le cas 0, donc on lance la fonction correspondante
noSearchButTags();
//A partir du moment où l'utilisateur tape quelque chose dans un des inputs, on passe dans le cas 1, 2 ou 3
const search = (e)=>{
    // 1 : Recherche dans la barre de recherche uniquement
    const searchWithSearchbarOnly = ()=>{
        console.log("1 : Recherche avec barre de recherche uniquement !");
        //On vide la liste des ingrédients/appareils/ustensiles des filtres car ils vont être mis à jour pour correspondre aux recettes filtrées
        ingredientsInFilter = [];
        appliancesInFilter = [];
        utensilsInFilter = [];
        ingredientsList.innerText = '';
        appliancesList.innerText = '';
        utensilsList.innerText = '';
        let input = searchbarInput.value;
        //Expression régulière
        const regex = new RegExp(`${input}`, 'gi');
        //On met les recettes à afficher dans un tableau
        let recipesToDisplay = _recipesJsonDefault.default.filter((recipe)=>{
            let recipeIsMatching = false;
            //On recherche dans le nom de la recette,
            if (regex.test(recipe.name)) recipeIsMatching = true;
            else if (regex.test(recipe.description)) recipeIsMatching = true;
            //et les ingrédients.
            recipe.ingredients.forEach(({ ingredient  })=>{
                if (regex.test(ingredient)) recipeIsMatching = true;
            });
            return recipeIsMatching;
        });
        //On met à jour les éléments dans les filtres
        recipesToDisplay.forEach((recipe)=>{
            recipe.ingredients.forEach(({ ingredient  })=>{
                if (ingredientsInFilter.includes(ingredient) === false) {
                    ingredientsInFilter.push(ingredient);
                    let filterItem = document.createElement('span');
                    filterItem.classList.add('filter-item');
                    filterItem.innerText = ingredient;
                    ingredientsList.appendChild(filterItem);
                }
            });
            if (appliancesInFilter.includes(recipe.appliance) === false) {
                appliancesInFilter.push(recipe.appliance);
                let filterItem = document.createElement('span');
                filterItem.classList.add('filter-item');
                filterItem.innerText = recipe.appliance;
                appliancesList.appendChild(filterItem);
            }
            recipe.utensils.forEach((utensil)=>{
                if (utensilsInFilter.includes(utensil) === false) {
                    utensilsInFilter.push(utensil);
                    let filterItem = document.createElement('span');
                    filterItem.classList.add('filter-item');
                    filterItem.innerText = utensil;
                    utensilsList.appendChild(filterItem);
                }
            });
        });
        //Gestion des tags
        let ingredientsInFilterDOM = document.querySelectorAll(".searchbox__filters #ingredients-filter .filter-items .filter-item");
        let appliancesInFilterDOM = document.querySelectorAll(".searchbox__filters #appliances-filter .filter-items .filter-item");
        let utensilsInFilterDOM = document.querySelectorAll(".searchbox__filters #utensils-filter .filter-items .filter-item");
        //Pour les tags ingrédient
        ingredientsInFilterDOM.forEach((ingredientDOM, index)=>{
            ingredientDOM.addEventListener('click', function() {
                let tagDOM = `.searchbox__tags .ingredient#tag-${index.toString()}`;
                //Si l'ingrédient n'est pas encore affiché dans les tags
                if (!document.querySelector(tagDOM)) addTag(recipesToDisplay, 'ingredient', ingredientDOM.innerText, index);
                else return;
            });
        });
        //Pour les tags appareil
        appliancesInFilterDOM.forEach((applianceDOM, index)=>{
            applianceDOM.addEventListener('click', function() {
                let tagDOM = `.searchbox__tags .appliance#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) addTag(recipesToDisplay, 'appliance', applianceDOM.innerText, index);
            });
        });
        //Pour les tags ustensile
        utensilsInFilterDOM.forEach((utensilDOM, index)=>{
            utensilDOM.addEventListener('click', function() {
                let tagDOM = `.searchbox__tags .utensil#tag-${index.toString()}`;
                if (!document.querySelector(tagDOM)) addTag(recipesToDisplay, 'utensil', utensilDOM.innerText, index);
            });
        });
        displayResults(recipesToDisplay);
    };
    // 2 : Recherche dans les filtres uniquement
    const searchWithFiltersOnly = ()=>{
        console.log("2 : Recherche avec les filtres uniquement !");
    };
    // 3 : Recherche dans la barre de recherche et les filtres
    const searchWithSearchbarAndFilters = ()=>{
        console.log(" 3 : La barre de recherche ET les filtres sont utilisés !");
        //Expressions régulières
        const regex = new RegExp(`${searchbarInput.value}`, 'gi');
        const ingrRegex = new RegExp(`${ingredientsFilterInput.value}`, 'gi');
        const appRegex = new RegExp(`${appliancesFilterInput.value}`, 'gi');
        const utenRegex = new RegExp(`${utensilsFilterInput.value}`, 'gi');
        //On filtre une première fois avec la barre de recherche
        let recipesFilteredOnce = _recipesJsonDefault.default.filter((recipe)=>{
            let recipeIsMatching = false;
            //On recherche dans le nom de la recette,
            if (regex.test(recipe.name)) recipeIsMatching = true;
            else if (regex.test(recipe.description)) recipeIsMatching = true;
            //et les ingrédients.
            recipe.ingredients.forEach(({ ingredient  })=>{
                if (regex.test(ingredient)) recipeIsMatching = true;
            });
            return recipeIsMatching;
        });
    };
    //On appelle une fonction différente pour chaque cas d'utilisation
    // 0 : L'utilisateur efface tous les inputs
    if (ingredientsFilterInput.value === '' && appliancesFilterInput.value === '' && utensilsFilterInput.value === '' && searchbarInput.value === '') noSearchButTags();
    else if (ingredientsFilterInput.value === '' && appliancesFilterInput.value === '' && utensilsFilterInput.value === '' && searchbarInput.value !== '') {
        if (searchbarInput.value.length > 2) searchWithSearchbarOnly();
    } else if ((ingredientsFilterInput.value !== '' || appliancesFilterInput.value !== '' || utensilsFilterInput.value !== '') && searchbarInput.value === '') searchWithFiltersOnly();
    else if ((ingredientsFilterInput.value !== '' || appliancesFilterInput.value !== '' || utensilsFilterInput.value !== '') && searchbarInput.value !== '') searchWithSearchbarAndFilters();
};
////      EVENT LISTENERS       ////
//searchbar
searchbarInput.addEventListener("input", (e)=>{
    search(e);
});
//ingredients filter
ingredientsFilterInput.addEventListener("input", (e)=>{
    search(e);
});
//appliances filter
appliancesFilterInput.addEventListener("input", (e)=>{
    search(e);
});
//utensils filter
utensilsFilterInput.addEventListener("input", (e)=>{
    search(e);
});

},{"../data/recipes.json":"djX96","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["49GRG","gngJL"], "gngJL", "parcelRequirec720")

//# sourceMappingURL=index.9a3ae487.js.map
