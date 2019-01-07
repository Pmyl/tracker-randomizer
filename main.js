(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alttpr-ui/alttpr-ui.module.ts":
/*!***********************************************!*\
  !*** ./src/app/alttpr-ui/alttpr-ui.module.ts ***!
  \***********************************************/
/*! exports provided: AlttprUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlttprUiModule", function() { return AlttprUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dungeon_tile_dungeon_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dungeon-tile/dungeon-tile.component */ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.ts");
/* harmony import */ var _standard_standard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./standard/standard.component */ "./src/app/alttpr-ui/standard/standard.component.ts");
/* harmony import */ var _core_ui_core_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core-ui/core-ui.module */ "./src/app/core-ui/core-ui.module.ts");
/* harmony import */ var _configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configuration/base/configuration-fetcher */ "./src/app/configuration/base/configuration-fetcher.ts");
/* harmony import */ var _configuration_json_configuration_json_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../configuration/json/configuration-json-fetcher */ "./src/app/configuration/json/configuration-json-fetcher.ts");
/* harmony import */ var _alttpr_tiles_dungeon_tile_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alttpr/tiles/dungeon-tile-parser */ "./src/app/alttpr/tiles/dungeon-tile-parser.ts");
/* harmony import */ var _images_base_images_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/base/images-service */ "./src/app/alttpr-ui/images/base/images-service.ts");
/* harmony import */ var _images_json_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/json-images */ "./src/app/alttpr-ui/images/json-images.ts");
/* harmony import */ var _core_ui_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core-ui/image-repository/image-repository */ "./src/app/core-ui/image-repository/image-repository.ts");
/* harmony import */ var _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multiplayer/multiplayer.component */ "./src/app/alttpr-ui/multiplayer/multiplayer.component.ts");
/* harmony import */ var _singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./singleplayer/singleplayer.component */ "./src/app/alttpr-ui/singleplayer/singleplayer.component.ts");
/* harmony import */ var _multiplayer_service_multiplayer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./multiplayer/service/multiplayer */ "./src/app/alttpr-ui/multiplayer/service/multiplayer.ts");
/* harmony import */ var _multiplayer_service_json_multiplayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiplayer/service/json-multiplayer */ "./src/app/alttpr-ui/multiplayer/service/json-multiplayer.ts");
















var AlttprUiModule = /** @class */ (function () {
    function AlttprUiModule(imagesService) {
        imagesService.setImagesInRepository();
    }
    AlttprUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dungeon_tile_dungeon_tile_component__WEBPACK_IMPORTED_MODULE_3__["DungeonTileComponent"], _standard_standard_component__WEBPACK_IMPORTED_MODULE_4__["StandardComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_12__["MultiplayerComponent"], _singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_13__["SingleplayerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_ui_core_ui_module__WEBPACK_IMPORTED_MODULE_5__["CoreUiModule"]
            ],
            exports: [_dungeon_tile_dungeon_tile_component__WEBPACK_IMPORTED_MODULE_3__["DungeonTileComponent"], _singleplayer_singleplayer_component__WEBPACK_IMPORTED_MODULE_13__["SingleplayerComponent"], _multiplayer_multiplayer_component__WEBPACK_IMPORTED_MODULE_12__["MultiplayerComponent"]],
            providers: [
                {
                    provide: _configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_6__["IConfigurationFetcher"],
                    useFactory: function () {
                        var fetcher = new _configuration_json_configuration_json_fetcher__WEBPACK_IMPORTED_MODULE_7__["ConfigurationJsonFetcher"]('./assets/configuration/example.json');
                        fetcher.addParser(new _alttpr_tiles_dungeon_tile_parser__WEBPACK_IMPORTED_MODULE_8__["DungeonTileParser"]());
                        return fetcher;
                    }
                },
                {
                    provide: _images_base_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"],
                    useFactory: function (imageRepo) {
                        return new _images_json_images__WEBPACK_IMPORTED_MODULE_10__["JsonImages"](imageRepo, './assets/configuration/example.images.json');
                    },
                    deps: [_core_ui_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_11__["ImageRepository"]]
                },
                {
                    provide: _multiplayer_service_multiplayer__WEBPACK_IMPORTED_MODULE_14__["MultiplayerService"],
                    useFactory: function () {
                        return new _multiplayer_service_json_multiplayer__WEBPACK_IMPORTED_MODULE_15__["JsonMultiplayerService"]('./assets/configuration/example.multiplayer.json');
                    }
                },
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_images_base_images_service__WEBPACK_IMPORTED_MODULE_9__["ImagesService"]])
    ], AlttprUiModule);
    return AlttprUiModule;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageContainer\">\n    <activable-tile\n      class=\"dungeon\"\n      [item]=\"item\"></activable-tile>\n    <select-tile\n      class=\"reward\"\n      [item]=\"item.reward\"></select-tile>\n    <select-tile\n      *ngIf=\"item.block\"\n      class=\"block\"\n      [item]=\"item.block\"></select-tile>\n</div>"

/***/ }),

/***/ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageContainer {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  position: relative; }\n  .imageContainer .notFound,\n  .imageContainer .unknown {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n  .imageContainer .reward {\n    z-index: 10;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 16px;\n    height: 16px; }\n  .imageContainer .block {\n    z-index: 10;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 16px;\n    height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx0dHByLXVpL2R1bmdlb24tdGlsZS9EOlxcUHJvamVjdHNcXFRyYWNrZXJBTFRUUFIvc3JjXFxhcHBcXGFsdHRwci11aVxcZHVuZ2Vvbi10aWxlXFxkdW5nZW9uLXRpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0IsRUF3QnJCO0VBNUJEOztJQVFRLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFDMUI7RUFUTDtJQVlRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFNBQVE7SUFDUixZQUFXO0lBQ1gsYUFBWSxFQUNmO0VBbEJMO0lBcUJRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFNBQVE7SUFDUixZQUFXO0lBQ1gsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYWx0dHByLXVpL2R1bmdlb24tdGlsZS9kdW5nZW9uLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLm5vdEZvdW5kLFxyXG4gICAgLnVua25vd24ge1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXdhcmQge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jayB7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.ts ***!
  \******************************************************************/
/*! exports provided: DungeonTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonTileComponent", function() { return DungeonTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_alttpr_tiles_dungeon_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/alttpr/tiles/dungeon-tile */ "./src/app/alttpr/tiles/dungeon-tile.ts");



var DungeonTileComponent = /** @class */ (function () {
    function DungeonTileComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_alttpr_tiles_dungeon_tile__WEBPACK_IMPORTED_MODULE_2__["DungeonTile"])
    ], DungeonTileComponent.prototype, "item", void 0);
    DungeonTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dungeon-tile',
            template: __webpack_require__(/*! ./dungeon-tile.component.html */ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.html"),
            styles: [__webpack_require__(/*! ./dungeon-tile.component.scss */ "./src/app/alttpr-ui/dungeon-tile/dungeon-tile.component.scss")]
        })
    ], DungeonTileComponent);
    return DungeonTileComponent;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/images/base/images-service.ts":
/*!*********************************************************!*\
  !*** ./src/app/alttpr-ui/images/base/images-service.ts ***!
  \*********************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
var ImagesService = /** @class */ (function () {
    function ImagesService() {
    }
    return ImagesService;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/images/json-images.ts":
/*!*************************************************!*\
  !*** ./src/app/alttpr-ui/images/json-images.ts ***!
  \*************************************************/
/*! exports provided: JsonImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonImages", function() { return JsonImages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_ui_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core-ui/image-repository/image-repository */ "./src/app/core-ui/image-repository/image-repository.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var JsonImages = /** @class */ (function () {
    function JsonImages(imageRepo, filename) {
        this._imageRepo = imageRepo;
        this._filename = filename;
    }
    JsonImages.prototype.setImagesInRepository = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var images;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this._filename)];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        images = _a.sent();
                        Object.keys(images).forEach(function (id) {
                            _this._imageRepo.addImage(id, images[id]);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonImages = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_ui_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_1__["ImageRepository"], String])
    ], JsonImages);
    return JsonImages;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/multiplayer/multiplayer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/alttpr-ui/multiplayer/multiplayer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<standard [config]=\"config1\"></standard>\n<p>----------</p>\n<standard [config]=\"config2\"></standard>"

/***/ }),

/***/ "./src/app/alttpr-ui/multiplayer/multiplayer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/alttpr-ui/multiplayer/multiplayer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdHRwci11aS9tdWx0aXBsYXllci9tdWx0aXBsYXllci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/alttpr-ui/multiplayer/multiplayer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/alttpr-ui/multiplayer/multiplayer.component.ts ***!
  \****************************************************************/
/*! exports provided: MultiplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerComponent", function() { return MultiplayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/base/configuration-fetcher */ "./src/app/configuration/base/configuration-fetcher.ts");
/* harmony import */ var src_app_core_item_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/item/Select */ "./src/app/core/item/Select.ts");
/* harmony import */ var _service_multiplayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/multiplayer */ "./src/app/alttpr-ui/multiplayer/service/multiplayer.ts");
/* harmony import */ var src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/item/Activable */ "./src/app/core/item/Activable.ts");






var MultiplayerComponent = /** @class */ (function () {
    function MultiplayerComponent(configuration, multiplayerService) {
        this._configRepository = configuration;
        this._multiplayerService = multiplayerService;
    }
    MultiplayerComponent_1 = MultiplayerComponent;
    MultiplayerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, commonSelects, commonActivables;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._configRepository.getConfig()];
                    case 1:
                        _a.config1 = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this._configRepository.getConfig()];
                    case 2:
                        _b.config2 = _c.sent();
                        return [4 /*yield*/, this._multiplayerService.getAllCommonSelects()];
                    case 3:
                        commonSelects = _c.sent();
                        this._connectItemCategory(src_app_core_item_Select__WEBPACK_IMPORTED_MODULE_3__["Select"], "Select", commonSelects, MultiplayerComponent_1._setSelectState);
                        return [4 /*yield*/, this._multiplayerService.getAllCommonActivables()];
                    case 4:
                        commonActivables = _c.sent();
                        this._connectItemCategory(src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_5__["Activable"], "Activable", commonActivables, MultiplayerComponent_1._setActivableState);
                        return [2 /*return*/];
                }
            });
        });
    };
    MultiplayerComponent.prototype._connectItemCategory = function (category, categoryName, commons, setFn) {
        var _this = this;
        commons.forEach(function (commonState) {
            var itemConfig1 = _this.config1.getItem(commonState);
            var itemConfig2 = _this.config2.getItem(commonState);
            if (!(itemConfig1 instanceof category) || !(itemConfig2 instanceof category)) {
                throw new Error(commonState + " needs to be a " + categoryName + " item");
            }
            _this._connectItems(itemConfig1, itemConfig2, setFn);
        });
    };
    MultiplayerComponent.prototype._connectItems = function (item1, item2, setFn) {
        item1.onUpdate.subscribe(function (source) {
            setFn(source, item2);
        });
        item2.onUpdate.subscribe(function (source) {
            setFn(source, item1);
        });
    };
    MultiplayerComponent._setSelectState = function (source, target) {
        target.state = source.state;
    };
    MultiplayerComponent._setActivableState = function (source, target) {
        target.setActive(source.isActive);
    };
    var MultiplayerComponent_1;
    MultiplayerComponent = MultiplayerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multiplayer',
            template: __webpack_require__(/*! ./multiplayer.component.html */ "./src/app/alttpr-ui/multiplayer/multiplayer.component.html"),
            styles: [__webpack_require__(/*! ./multiplayer.component.scss */ "./src/app/alttpr-ui/multiplayer/multiplayer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_2__["IConfigurationFetcher"], _service_multiplayer__WEBPACK_IMPORTED_MODULE_4__["MultiplayerService"]])
    ], MultiplayerComponent);
    return MultiplayerComponent;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/multiplayer/service/json-multiplayer.ts":
/*!*******************************************************************!*\
  !*** ./src/app/alttpr-ui/multiplayer/service/json-multiplayer.ts ***!
  \*******************************************************************/
/*! exports provided: JsonMultiplayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonMultiplayerService", function() { return JsonMultiplayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var JsonMultiplayerService = /** @class */ (function () {
    function JsonMultiplayerService(filename) {
        this._filename = filename;
    }
    JsonMultiplayerService.prototype.getAllCommonSelects = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sharedItems;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._fetchSharedItems()];
                    case 1:
                        sharedItems = _a.sent();
                        return [2 /*return*/, sharedItems.select || []];
                }
            });
        });
    };
    JsonMultiplayerService.prototype.getAllCommonActivables = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sharedItems;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._fetchSharedItems()];
                    case 1:
                        sharedItems = _a.sent();
                        return [2 /*return*/, sharedItems.activable || []];
                }
            });
        });
    };
    JsonMultiplayerService.prototype._fetchSharedItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this._sharedItems) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, fetch(this._filename)];
                    case 1: return [4 /*yield*/, (_b.sent()).json()];
                    case 2:
                        _a._sharedItems = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, this._sharedItems];
                }
            });
        });
    };
    return JsonMultiplayerService;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/multiplayer/service/multiplayer.ts":
/*!**************************************************************!*\
  !*** ./src/app/alttpr-ui/multiplayer/service/multiplayer.ts ***!
  \**************************************************************/
/*! exports provided: MultiplayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplayerService", function() { return MultiplayerService; });
var MultiplayerService = /** @class */ (function () {
    function MultiplayerService() {
    }
    return MultiplayerService;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/singleplayer/singleplayer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/alttpr-ui/singleplayer/singleplayer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<standard [config]=\"config\"></standard>"

/***/ }),

/***/ "./src/app/alttpr-ui/singleplayer/singleplayer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/alttpr-ui/singleplayer/singleplayer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdHRwci11aS9zaW5nbGVwbGF5ZXIvc2luZ2xlcGxheWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/alttpr-ui/singleplayer/singleplayer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/alttpr-ui/singleplayer/singleplayer.component.ts ***!
  \******************************************************************/
/*! exports provided: SingleplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleplayerComponent", function() { return SingleplayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/base/configuration-fetcher */ "./src/app/configuration/base/configuration-fetcher.ts");



var SingleplayerComponent = /** @class */ (function () {
    function SingleplayerComponent(configuration) {
        this._configRepository = configuration;
    }
    SingleplayerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._configRepository.getConfig()];
                    case 1:
                        _a.config = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SingleplayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'singleplayer',
            template: __webpack_require__(/*! ./singleplayer.component.html */ "./src/app/alttpr-ui/singleplayer/singleplayer.component.html"),
            styles: [__webpack_require__(/*! ./singleplayer.component.scss */ "./src/app/alttpr-ui/singleplayer/singleplayer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configuration_base_configuration_fetcher__WEBPACK_IMPORTED_MODULE_2__["IConfigurationFetcher"]])
    ], SingleplayerComponent);
    return SingleplayerComponent;
}());



/***/ }),

/***/ "./src/app/alttpr-ui/standard/standard.component.html":
/*!************************************************************!*\
  !*** ./src/app/alttpr-ui/standard/standard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"config\">\n  <activable-tile\n    class=\"tile\"\n    [item]=\"config.getItem(Item.Bow)\"></activable-tile>\n  <activable-tile\n    class=\"tile\"\n    [item]=\"config.getItem(Item.BlueBoomerang)\"></activable-tile>\n  <select-tile\n    class=\"tile\"\n    [item]=\"config.getItem(Item.Sword)\"></select-tile>\n  <dungeon-tile\n    class=\"tile\"\n    [item]=\"config.getItem(Dungeon.EasternPalace)\"></dungeon-tile>\n  <dungeon-tile\n    class=\"tile\"\n    [item]=\"config.getItem(Dungeon.MiseryMire)\"></dungeon-tile>\n</ng-container>"

/***/ }),

/***/ "./src/app/alttpr-ui/standard/standard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/alttpr-ui/standard/standard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile {\n  width: 32px;\n  height: 32px;\n  max-width: 32px;\n  max-height: 32px;\n  background-color: #2b4e4e;\n  overflow: hidden;\n  margin: 1px;\n  border-radius: 3px;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWx0dHByLXVpL3N0YW5kYXJkL0Q6XFxQcm9qZWN0c1xcVHJhY2tlckFMVFRQUi9zcmNcXGFwcFxcYWx0dHByLXVpXFxzdGFuZGFyZFxcc3RhbmRhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hbHR0cHItdWkvc3RhbmRhcmQvc3RhbmRhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZSB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1heC13aWR0aDogMzJweDtcclxuICAgIG1heC1oZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0ZTRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/alttpr-ui/standard/standard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/alttpr-ui/standard/standard.component.ts ***!
  \**********************************************************/
/*! exports provided: StandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardComponent", function() { return StandardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_alttpr_ids_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/alttpr/ids/Item */ "./src/app/alttpr/ids/Item.ts");
/* harmony import */ var src_app_alttpr_ids_Dungeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/alttpr/ids/Dungeon */ "./src/app/alttpr/ids/Dungeon.ts");
/* harmony import */ var src_app_alttpr_ids_SwordState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/alttpr/ids/SwordState */ "./src/app/alttpr/ids/SwordState.ts");





var StandardComponent = /** @class */ (function () {
    function StandardComponent() {
        this.Item = src_app_alttpr_ids_Item__WEBPACK_IMPORTED_MODULE_2__["Item"];
        this.Dungeon = src_app_alttpr_ids_Dungeon__WEBPACK_IMPORTED_MODULE_3__["Dungeon"];
        this.SwordState = src_app_alttpr_ids_SwordState__WEBPACK_IMPORTED_MODULE_4__["SwordState"];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StandardComponent.prototype, "config", void 0);
    StandardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'standard',
            template: __webpack_require__(/*! ./standard.component.html */ "./src/app/alttpr-ui/standard/standard.component.html"),
            styles: [__webpack_require__(/*! ./standard.component.scss */ "./src/app/alttpr-ui/standard/standard.component.scss")]
        })
    ], StandardComponent);
    return StandardComponent;
}());



/***/ }),

/***/ "./src/app/alttpr/ALTTPR-config-helper.ts":
/*!************************************************!*\
  !*** ./src/app/alttpr/ALTTPR-config-helper.ts ***!
  \************************************************/
/*! exports provided: ALTTPConfigHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALTTPConfigHelper", function() { return ALTTPConfigHelper; });
/* harmony import */ var _core_item_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/item/Select */ "./src/app/core/item/Select.ts");
/* harmony import */ var _ids_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ids/Utils */ "./src/app/alttpr/ids/Utils.ts");
/* harmony import */ var _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ids/DungeonReward */ "./src/app/alttpr/ids/DungeonReward.ts");
/* harmony import */ var _ids_DungeonEntranceItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ids/DungeonEntranceItem */ "./src/app/alttpr/ids/DungeonEntranceItem.ts");




var ALTTPConfigHelper = /** @class */ (function () {
    function ALTTPConfigHelper() {
    }
    ALTTPConfigHelper.createDungeonRewardSelect = function (dungeonId) {
        return new _core_item_Select__WEBPACK_IMPORTED_MODULE_0__["Select"](_ids_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].dungeonRewardId(dungeonId), [
            _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__["DungeonReward"].Unknown,
            _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__["DungeonReward"].Pendant,
            _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__["DungeonReward"].GreenPendant,
            _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__["DungeonReward"].Crystal,
            _ids_DungeonReward__WEBPACK_IMPORTED_MODULE_2__["DungeonReward"].RedCrystal
        ]);
    };
    ALTTPConfigHelper.createDungeonBlockSelect = function (dungeonId) {
        return new _core_item_Select__WEBPACK_IMPORTED_MODULE_0__["Select"](_ids_Utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].dungeonNeededItemId(dungeonId), [
            _ids_DungeonEntranceItem__WEBPACK_IMPORTED_MODULE_3__["DungeonEntranceItem"].Unknown,
            _ids_DungeonEntranceItem__WEBPACK_IMPORTED_MODULE_3__["DungeonEntranceItem"].Bombos,
            _ids_DungeonEntranceItem__WEBPACK_IMPORTED_MODULE_3__["DungeonEntranceItem"].Ether,
            _ids_DungeonEntranceItem__WEBPACK_IMPORTED_MODULE_3__["DungeonEntranceItem"].Quake
        ]);
    };
    return ALTTPConfigHelper;
}());



/***/ }),

/***/ "./src/app/alttpr/ids/Dungeon.ts":
/*!***************************************!*\
  !*** ./src/app/alttpr/ids/Dungeon.ts ***!
  \***************************************/
/*! exports provided: Dungeon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeon", function() { return Dungeon; });
var Dungeon;
(function (Dungeon) {
    Dungeon["EasternPalace"] = "Dungeon_EasternPalace";
    Dungeon["MiseryMire"] = "Dungeon_MiseryMire";
})(Dungeon || (Dungeon = {}));


/***/ }),

/***/ "./src/app/alttpr/ids/DungeonEntranceItem.ts":
/*!***************************************************!*\
  !*** ./src/app/alttpr/ids/DungeonEntranceItem.ts ***!
  \***************************************************/
/*! exports provided: DungeonEntranceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonEntranceItem", function() { return DungeonEntranceItem; });
var DungeonEntranceItem;
(function (DungeonEntranceItem) {
    DungeonEntranceItem["Unknown"] = "DungeonEntranceItem_?";
    DungeonEntranceItem["Bombos"] = "DungeonEntranceItem_Bombos";
    DungeonEntranceItem["Ether"] = "DungeonEntranceItem_Ether";
    DungeonEntranceItem["Quake"] = "DungeonEntranceItem_Quake";
})(DungeonEntranceItem || (DungeonEntranceItem = {}));


/***/ }),

/***/ "./src/app/alttpr/ids/DungeonReward.ts":
/*!*********************************************!*\
  !*** ./src/app/alttpr/ids/DungeonReward.ts ***!
  \*********************************************/
/*! exports provided: DungeonReward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonReward", function() { return DungeonReward; });
var DungeonReward;
(function (DungeonReward) {
    DungeonReward["Unknown"] = "DungeonReward_?";
    DungeonReward["Pendant"] = "DungeonReward_Pendant";
    DungeonReward["GreenPendant"] = "DungeonReward_GreenPendant";
    DungeonReward["Crystal"] = "DungeonReward_Crystal";
    DungeonReward["RedCrystal"] = "DungeonReward_RedCrystal";
})(DungeonReward || (DungeonReward = {}));


/***/ }),

/***/ "./src/app/alttpr/ids/Item.ts":
/*!************************************!*\
  !*** ./src/app/alttpr/ids/Item.ts ***!
  \************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item;
(function (Item) {
    Item["Bow"] = "Item_Bow";
    Item["SilverArrows"] = "Item_SilverArrows";
    Item["BlueBoomerang"] = "Item_BlueBoomerang";
    Item["RedBoomerang"] = "Item_RedBoomerang";
    Item["Hookshot"] = "Item_Hookshot";
    Item["Mushroom"] = "Item_Mushroom";
    Item["Bottle"] = "Item_Bottle";
    Item["Sword"] = "Item_Sword";
    // ...
})(Item || (Item = {}));


/***/ }),

/***/ "./src/app/alttpr/ids/SwordState.ts":
/*!******************************************!*\
  !*** ./src/app/alttpr/ids/SwordState.ts ***!
  \******************************************/
/*! exports provided: SwordState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwordState", function() { return SwordState; });
var SwordState;
(function (SwordState) {
    SwordState["NotFound"] = "SwordState_NotFound";
    SwordState["Hero"] = "SwordState_Hero";
    SwordState["Master"] = "SwordState_Master";
    SwordState["Tempered"] = "SwordState_Tempered";
    SwordState["Gold"] = "SwordState_Gold";
})(SwordState || (SwordState = {}));


/***/ }),

/***/ "./src/app/alttpr/ids/Utils.ts":
/*!*************************************!*\
  !*** ./src/app/alttpr/ids/Utils.ts ***!
  \*************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.dungeonRewardId = function (dungeon) {
        return dungeon + "_Reward";
    };
    Utils.dungeonNeededItemId = function (dungeon) {
        return dungeon + "_EntranceNeededItem";
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/alttpr/tiles/dungeon-tile-parser.ts":
/*!*****************************************************!*\
  !*** ./src/app/alttpr/tiles/dungeon-tile-parser.ts ***!
  \*****************************************************/
/*! exports provided: DungeonTileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonTileParser", function() { return DungeonTileParser; });
/* harmony import */ var _dungeon_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dungeon-tile */ "./src/app/alttpr/tiles/dungeon-tile.ts");

var DungeonTileParser = /** @class */ (function () {
    function DungeonTileParser() {
        this.type = 'Dungeon';
    }
    DungeonTileParser.prototype.parse = function (config) {
        var dungeonTile = new _dungeon_tile__WEBPACK_IMPORTED_MODULE_0__["DungeonTile"](config.id);
        var parsedItems = [dungeonTile, dungeonTile.reward];
        if (config.blocked) {
            dungeonTile.setBlocked();
            parsedItems.push(dungeonTile.block);
        }
        return parsedItems;
    };
    return DungeonTileParser;
}());



/***/ }),

/***/ "./src/app/alttpr/tiles/dungeon-tile.ts":
/*!**********************************************!*\
  !*** ./src/app/alttpr/tiles/dungeon-tile.ts ***!
  \**********************************************/
/*! exports provided: DungeonTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonTile", function() { return DungeonTile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/item/Activable */ "./src/app/core/item/Activable.ts");
/* harmony import */ var _ALTTPR_config_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ALTTPR-config-helper */ "./src/app/alttpr/ALTTPR-config-helper.ts");



var DungeonTile = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DungeonTile, _super);
    function DungeonTile(id) {
        var _this = _super.call(this, id) || this;
        _this.reward = _ALTTPR_config_helper__WEBPACK_IMPORTED_MODULE_2__["ALTTPConfigHelper"].createDungeonRewardSelect(id);
        _this.reward.onUpdate.subscribe(function () { return _this._emitChange(); });
        return _this;
    }
    DungeonTile.prototype.setBlocked = function () {
        var _this = this;
        this.block = _ALTTPR_config_helper__WEBPACK_IMPORTED_MODULE_2__["ALTTPConfigHelper"].createDungeonBlockSelect(this.id);
        this.block.onUpdate.subscribe(function () { return _this._emitChange(); });
    };
    return DungeonTile;
}(src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_1__["Activable"]));



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<multiplayer></multiplayer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _alttpr_ui_alttpr_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alttpr-ui/alttpr-ui.module */ "./src/app/alttpr-ui/alttpr-ui.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _alttpr_ui_alttpr_ui_module__WEBPACK_IMPORTED_MODULE_4__["AlttprUiModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration/base/configuration-fetcher.ts":
/*!*************************************************************!*\
  !*** ./src/app/configuration/base/configuration-fetcher.ts ***!
  \*************************************************************/
/*! exports provided: IConfigurationFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IConfigurationFetcher", function() { return IConfigurationFetcher; });
var IConfigurationFetcher = /** @class */ (function () {
    function IConfigurationFetcher() {
    }
    return IConfigurationFetcher;
}());



/***/ }),

/***/ "./src/app/configuration/json/configuration-json-fetcher.ts":
/*!******************************************************************!*\
  !*** ./src/app/configuration/json/configuration-json-fetcher.ts ***!
  \******************************************************************/
/*! exports provided: ConfigurationJsonFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationJsonFetcher", function() { return ConfigurationJsonFetcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_configuration_ConfigurationBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/configuration/ConfigurationBuilder */ "./src/app/core/configuration/ConfigurationBuilder.ts");
/* harmony import */ var _parsers_activable_tile_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/activable-tile-parser */ "./src/app/configuration/json/parsers/activable-tile-parser.ts");
/* harmony import */ var _parsers_select_tile_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/select-tile-parser */ "./src/app/configuration/json/parsers/select-tile-parser.ts");
/* harmony import */ var _parsers_count_tile_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsers/count-tile-parser */ "./src/app/configuration/json/parsers/count-tile-parser.ts");





var ConfigurationJsonFetcher = /** @class */ (function () {
    function ConfigurationJsonFetcher(filename) {
        this._parsersMap = {
            Activable: new _parsers_activable_tile_parser__WEBPACK_IMPORTED_MODULE_2__["ActivableTileParser"](),
            Count: new _parsers_count_tile_parser__WEBPACK_IMPORTED_MODULE_4__["CountTileParser"](),
            Select: new _parsers_select_tile_parser__WEBPACK_IMPORTED_MODULE_3__["SelectTileParser"]()
        };
        this._filename = filename;
    }
    ConfigurationJsonFetcher.prototype.addParser = function (parser) {
        this._parsersMap[parser.type] = parser;
    };
    ConfigurationJsonFetcher.prototype.getConfig = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var json, builder;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this._filename)];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        json = _a.sent();
                        builder = new _core_configuration_ConfigurationBuilder__WEBPACK_IMPORTED_MODULE_1__["ConfigurationBuilder"]();
                        json.tiles.forEach(function (item) {
                            var parser = _this._findParserFor(item.type);
                            builder.addItems(parser.parse(item));
                        });
                        return [2 /*return*/, builder.build()];
                }
            });
        });
    };
    ConfigurationJsonFetcher.prototype._findParserFor = function (type) {
        if (!this._parsersMap[type])
            throw new Error("Parser not found for tile type " + type);
        return this._parsersMap[type];
    };
    return ConfigurationJsonFetcher;
}());



/***/ }),

/***/ "./src/app/configuration/json/parsers/activable-tile-parser.ts":
/*!*********************************************************************!*\
  !*** ./src/app/configuration/json/parsers/activable-tile-parser.ts ***!
  \*********************************************************************/
/*! exports provided: ActivableTileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivableTileParser", function() { return ActivableTileParser; });
/* harmony import */ var _core_item_Activable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/item/Activable */ "./src/app/core/item/Activable.ts");

var ActivableTileParser = /** @class */ (function () {
    function ActivableTileParser() {
        this.type = 'Activable';
    }
    ActivableTileParser.prototype.parse = function (config) {
        return [new _core_item_Activable__WEBPACK_IMPORTED_MODULE_0__["Activable"](config.id)];
    };
    return ActivableTileParser;
}());



/***/ }),

/***/ "./src/app/configuration/json/parsers/count-tile-parser.ts":
/*!*****************************************************************!*\
  !*** ./src/app/configuration/json/parsers/count-tile-parser.ts ***!
  \*****************************************************************/
/*! exports provided: CountTileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountTileParser", function() { return CountTileParser; });
/* harmony import */ var _core_item_Count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/item/Count */ "./src/app/core/item/Count.ts");

var CountTileParser = /** @class */ (function () {
    function CountTileParser() {
        this.type = 'Count';
    }
    CountTileParser.prototype.parse = function (config) {
        return [new _core_item_Count__WEBPACK_IMPORTED_MODULE_0__["Count"](config.id, config.from, config.to)];
    };
    return CountTileParser;
}());



/***/ }),

/***/ "./src/app/configuration/json/parsers/select-tile-parser.ts":
/*!******************************************************************!*\
  !*** ./src/app/configuration/json/parsers/select-tile-parser.ts ***!
  \******************************************************************/
/*! exports provided: SelectTileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTileParser", function() { return SelectTileParser; });
/* harmony import */ var _core_item_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/item/Select */ "./src/app/core/item/Select.ts");

var SelectTileParser = /** @class */ (function () {
    function SelectTileParser() {
        this.type = 'Select';
    }
    SelectTileParser.prototype.parse = function (config) {
        return [new _core_item_Select__WEBPACK_IMPORTED_MODULE_0__["Select"](config.id, config.states)];
    };
    return SelectTileParser;
}());



/***/ }),

/***/ "./src/app/core-ui/activable-tile/activable-tile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core-ui/activable-tile/activable-tile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageContainer\" (click)=\"item.toggle()\" (contextmenu)=\"item.toggle(); $event.preventDefault()\">\r\n    <img [ngClass]=\"{ 'notFound': !(state$ | async) }\" [src]=\"image\">\r\n</div>"

/***/ }),

/***/ "./src/app/core-ui/activable-tile/activable-tile.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core-ui/activable-tile/activable-tile.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageContainer {\n  width: 100%;\n  height: 100%; }\n  .imageContainer img {\n    width: 100%;\n    height: 100%; }\n  .imageContainer .notFound {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS11aS9hY3RpdmFibGUtdGlsZS9EOlxcUHJvamVjdHNcXFRyYWNrZXJBTFRUUFIvc3JjXFxhcHBcXGNvcmUtdWlcXGFjdGl2YWJsZS10aWxlXFxhY3RpdmFibGUtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBVWY7RUFaRDtJQUtRLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7RUFQTDtJQVVRLGdDQUF1QjtZQUF2Qix3QkFBdUIsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb3JlLXVpL2FjdGl2YWJsZS10aWxlL2FjdGl2YWJsZS10aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubm90Rm91bmQge1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/core-ui/activable-tile/activable-tile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core-ui/activable-tile/activable-tile.component.ts ***!
  \********************************************************************/
/*! exports provided: ActivableTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivableTileComponent", function() { return ActivableTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/item/Activable */ "./src/app/core/item/Activable.ts");
/* harmony import */ var _image_repository_image_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-repository/image-repository */ "./src/app/core-ui/image-repository/image-repository.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ActivableTileComponent = /** @class */ (function () {
    function ActivableTileComponent(imageRepo) {
        this._imageRepo = imageRepo;
    }
    ActivableTileComponent.prototype.ngOnInit = function () {
        this.image = this._imageRepo.getImageForId(this.item.id);
        this.state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.item.isActive), this.item.onUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return item.isActive; })));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_item_Activable__WEBPACK_IMPORTED_MODULE_2__["Activable"])
    ], ActivableTileComponent.prototype, "item", void 0);
    ActivableTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'activable-tile',
            template: __webpack_require__(/*! ./activable-tile.component.html */ "./src/app/core-ui/activable-tile/activable-tile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./activable-tile.component.scss */ "./src/app/core-ui/activable-tile/activable-tile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_3__["ImageRepository"]])
    ], ActivableTileComponent);
    return ActivableTileComponent;
}());



/***/ }),

/***/ "./src/app/core-ui/core-ui.module.ts":
/*!*******************************************!*\
  !*** ./src/app/core-ui/core-ui.module.ts ***!
  \*******************************************/
/*! exports provided: CoreUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUiModule", function() { return CoreUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activable_tile_activable_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activable-tile/activable-tile.component */ "./src/app/core-ui/activable-tile/activable-tile.component.ts");
/* harmony import */ var _select_tile_select_tile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-tile/select-tile.component */ "./src/app/core-ui/select-tile/select-tile.component.ts");
/* harmony import */ var _image_repository_image_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-repository/image-repository */ "./src/app/core-ui/image-repository/image-repository.ts");






var CoreUiModule = /** @class */ (function () {
    function CoreUiModule() {
    }
    CoreUiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_activable_tile_activable_tile_component__WEBPACK_IMPORTED_MODULE_3__["ActivableTileComponent"], _select_tile_select_tile_component__WEBPACK_IMPORTED_MODULE_4__["SelectTileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_activable_tile_activable_tile_component__WEBPACK_IMPORTED_MODULE_3__["ActivableTileComponent"], _select_tile_select_tile_component__WEBPACK_IMPORTED_MODULE_4__["SelectTileComponent"]],
            providers: [_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_5__["ImageRepository"]]
        })
    ], CoreUiModule);
    return CoreUiModule;
}());



/***/ }),

/***/ "./src/app/core-ui/image-repository/image-repository.ts":
/*!**************************************************************!*\
  !*** ./src/app/core-ui/image-repository/image-repository.ts ***!
  \**************************************************************/
/*! exports provided: ImageRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRepository", function() { return ImageRepository; });
var ImageRepository = /** @class */ (function () {
    function ImageRepository() {
        this._imagesMap = {};
    }
    ImageRepository.prototype.addImage = function (id, url) {
        this._imagesMap[id] = url;
    };
    ImageRepository.prototype.addImages = function (images) {
        Object.assign(this._imagesMap, images);
    };
    ImageRepository.prototype.getImageForId = function (id) {
        if (!this._imagesMap[id])
            console.warn("Image not found for id", id);
        return this._imagesMap[id];
    };
    return ImageRepository;
}());



/***/ }),

/***/ "./src/app/core-ui/select-tile/select-tile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/core-ui/select-tile/select-tile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageContainer\" (click)=\"next()\" (contextmenu)=\"previous(); $event.preventDefault()\">\n    <ng-container *ngIf=\"state$ | async; let state\">\n        <img [ngClass]=\"{ 'notFound': !isFound(state) }\" [src]=\"images[state]\">\n    </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/core-ui/select-tile/select-tile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core-ui/select-tile/select-tile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageContainer {\n  width: 100%;\n  height: 100%;\n  text-align: center; }\n  .imageContainer img {\n    width: 100%;\n    height: 100%; }\n  .imageContainer .notFound {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS11aS9zZWxlY3QtdGlsZS9EOlxcUHJvamVjdHNcXFRyYWNrZXJBTFRUUFIvc3JjXFxhcHBcXGNvcmUtdWlcXHNlbGVjdC10aWxlXFxzZWxlY3QtdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCLEVBVXJCO0VBYkQ7SUFNUSxZQUFXO0lBQ1gsYUFBWSxFQUNmO0VBUkw7SUFXUSxnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29yZS11aS9zZWxlY3QtdGlsZS9zZWxlY3QtdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubm90Rm91bmQge1xyXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/core-ui/select-tile/select-tile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core-ui/select-tile/select-tile.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTileComponent", function() { return SelectTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_item_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/item/Select */ "./src/app/core/item/Select.ts");
/* harmony import */ var _image_repository_image_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-repository/image-repository */ "./src/app/core-ui/image-repository/image-repository.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SelectTileComponent = /** @class */ (function () {
    function SelectTileComponent(imageRepo) {
        this._imageRepo = imageRepo;
    }
    SelectTileComponent.prototype.ngOnInit = function () {
        this.images = this._getStatesImages();
        this.state$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.item.state), this.item.onUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return item.state; })));
    };
    SelectTileComponent.prototype._getStatesImages = function () {
        var _this = this;
        return this.item.states.reduce(function (tot, state) {
            tot[state] = _this._imageRepo.getImageForId(state);
            return tot;
        }, {});
    };
    SelectTileComponent.prototype.isFound = function (state) {
        return this.item.states[0] !== state;
    };
    SelectTileComponent.prototype.next = function () {
        var index = this.item.states.indexOf(this.item.state);
        var length = this.item.states.length;
        this.item.state = this.item.states[Math.min((index + 1), length - 1)];
    };
    SelectTileComponent.prototype.previous = function () {
        var index = this.item.states.indexOf(this.item.state);
        this.item.state = this.item.states[Math.max((index - 1), 0)];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_core_item_Select__WEBPACK_IMPORTED_MODULE_2__["Select"])
    ], SelectTileComponent.prototype, "item", void 0);
    SelectTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-tile',
            template: __webpack_require__(/*! ./select-tile.component.html */ "./src/app/core-ui/select-tile/select-tile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./select-tile.component.scss */ "./src/app/core-ui/select-tile/select-tile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_image_repository_image_repository__WEBPACK_IMPORTED_MODULE_3__["ImageRepository"]])
    ], SelectTileComponent);
    return SelectTileComponent;
}());



/***/ }),

/***/ "./src/app/core/configuration/Configuration.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/configuration/Configuration.ts ***!
  \*****************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    Configuration.prototype.getItem = function (id) {
        var item = this.items.find(function (item) { return item.id === id; });
        if (!item) {
            throw new Error("Configuration item not found with id " + id);
        }
        return item;
    };
    Configuration.prototype.setItem = function (itemToSet) {
        var index = this.items.findIndex(function (item) { return item.id === itemToSet.id; });
        if (index > -1) {
            this.items.splice(index, 1, itemToSet);
        }
        else {
            this.items.push(itemToSet);
        }
    };
    return Configuration;
}());



/***/ }),

/***/ "./src/app/core/configuration/ConfigurationBuilder.ts":
/*!************************************************************!*\
  !*** ./src/app/core/configuration/ConfigurationBuilder.ts ***!
  \************************************************************/
/*! exports provided: ConfigurationBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationBuilder", function() { return ConfigurationBuilder; });
/* harmony import */ var _item_Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item/Select */ "./src/app/core/item/Select.ts");
/* harmony import */ var _item_Count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item/Count */ "./src/app/core/item/Count.ts");
/* harmony import */ var _item_Activable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item/Activable */ "./src/app/core/item/Activable.ts");
/* harmony import */ var _Configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Configuration */ "./src/app/core/configuration/Configuration.ts");




var ConfigurationBuilder = /** @class */ (function () {
    function ConfigurationBuilder() {
        this._items = [];
    }
    ConfigurationBuilder.prototype.contructor = function () { };
    ConfigurationBuilder.create = function () {
        return new ConfigurationBuilder();
    };
    ConfigurationBuilder.prototype.addSelect = function (id, betweenValues) {
        this._items.push(new _item_Select__WEBPACK_IMPORTED_MODULE_0__["Select"](id, betweenValues));
        return this;
    };
    ConfigurationBuilder.prototype.addCount = function (id, from, to) {
        this._items.push(new _item_Count__WEBPACK_IMPORTED_MODULE_1__["Count"](id, from, to));
        return this;
    };
    ConfigurationBuilder.prototype.addActivable = function (id) {
        this._items.push(new _item_Activable__WEBPACK_IMPORTED_MODULE_2__["Activable"](id));
        return this;
    };
    ConfigurationBuilder.prototype.addItem = function (item) {
        this._items.push(item);
        return this;
    };
    ConfigurationBuilder.prototype.addItems = function (items) {
        var _this = this;
        items.forEach(function (item) { return _this._items.push(item); });
        return this;
    };
    ConfigurationBuilder.prototype.build = function () {
        var config = new _Configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        config.items = this._items;
        return config;
    };
    return ConfigurationBuilder;
}());



/***/ }),

/***/ "./src/app/core/item/Activable.ts":
/*!****************************************!*\
  !*** ./src/app/core/item/Activable.ts ***!
  \****************************************/
/*! exports provided: Activable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Activable", function() { return Activable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _updatable_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatable-item */ "./src/app/core/item/updatable-item.ts");


var Activable = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Activable, _super);
    function Activable(id) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this.id = id;
        return _this;
    }
    Object.defineProperty(Activable.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Activable.prototype.toggle = function () {
        this._isActive = !this._isActive;
        this._emitChange();
    };
    Activable.prototype.setActive = function (isActive) {
        if (this._isActive !== isActive) {
            this._isActive = isActive;
            this._emitChange();
        }
    };
    return Activable;
}(_updatable_item__WEBPACK_IMPORTED_MODULE_1__["UpdatableItem"]));



/***/ }),

/***/ "./src/app/core/item/Count.ts":
/*!************************************!*\
  !*** ./src/app/core/item/Count.ts ***!
  \************************************/
/*! exports provided: Count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Count", function() { return Count; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select */ "./src/app/core/item/Select.ts");
/* harmony import */ var _updatable_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatable-item */ "./src/app/core/item/updatable-item.ts");



var Count = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Count, _super);
    function Count(id, from, to) {
        var _this = _super.call(this) || this;
        _this._select = new _Select__WEBPACK_IMPORTED_MODULE_1__["Select"](id + "_internal_select", _this._createNumberList(from, to));
        _this._select.onUpdate.subscribe(function () { return _this._emitChange(); });
        _this.id = id;
        return _this;
    }
    Object.defineProperty(Count.prototype, "state", {
        get: function () {
            return this._select.state;
        },
        set: function (value) {
            this._select.state = value;
        },
        enumerable: true,
        configurable: true
    });
    Count.prototype._createNumberList = function (from, to) {
        var list = [];
        for (var i = from; i <= to; i++) {
            list.push(i);
        }
        return list;
    };
    return Count;
}(_updatable_item__WEBPACK_IMPORTED_MODULE_2__["UpdatableItem"]));



/***/ }),

/***/ "./src/app/core/item/Select.ts":
/*!*************************************!*\
  !*** ./src/app/core/item/Select.ts ***!
  \*************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _updatable_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatable-item */ "./src/app/core/item/updatable-item.ts");


var Select = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Select, _super);
    function Select(id, states) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.states = states;
        _this._statesMap = states.reduce(function (tot, value) {
            tot.set(value, true);
            return tot;
        }, new Map());
        _this.state = states[0];
        return _this;
    }
    Object.defineProperty(Select.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            if (!this._statesMap.has(value)) {
                throw new Error(value + " is not an accepted state. Select state can be set only between " + this.states.join(', ') + " values.");
            }
            if (this._state !== value) {
                this._state = value;
                this._emitChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    return Select;
}(_updatable_item__WEBPACK_IMPORTED_MODULE_1__["UpdatableItem"]));



/***/ }),

/***/ "./src/app/core/item/updatable-item.ts":
/*!*********************************************!*\
  !*** ./src/app/core/item/updatable-item.ts ***!
  \*********************************************/
/*! exports provided: UpdatableItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatableItem", function() { return UpdatableItem; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var UpdatableItem = /** @class */ (function () {
    function UpdatableItem() {
        this._onUpdateEvent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.onUpdate = this._onUpdateEvent.asObservable();
    }
    UpdatableItem.prototype._emitChange = function () {
        this._onUpdateEvent.next(this);
    };
    return UpdatableItem;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\TrackerALTTPR\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map