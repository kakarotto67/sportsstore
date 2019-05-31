webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_product_model__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(repo) {
        this.repo = repo;
        this.title = "Angular & ASP.NET Core MVC";
    }
    Object.defineProperty(AppComponent.prototype, "product", {
        get: function () {
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createProduct = function () {
        this.repo.createProduct(new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* Product */](0, "X-Ray Scuba Mask", "Watersports", "See what the fish are hiding", 49.99, this.repo.products[0].supplier));
    };
    AppComponent.prototype.createProductAndSupplier = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__["a" /* Supplier */](0, "Rocket Shoe Corp", "Boston", "MA");
        var p = new __WEBPACK_IMPORTED_MODULE_2__models_product_model__["a" /* Product */](0, "Rocket-Powered Shoes", "Running", "Set a new record", 100, s);
        this.repo.createProductAndSupplier(p, s);
    };
    AppComponent.prototype.replaceProduct = function () {
        var p = this.repo.products[0];
        p.name = "Modified Product";
        p.category = "Modified Category";
        this.repo.replaceProduct(p);
    };
    AppComponent.prototype.replaceSupplier = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_3__models_supplier_model__["a" /* Supplier */](3, "Modified Supplier", "New York", "NY");
        this.repo.replaceSupplier(s);
    };
    AppComponent.prototype.updateProduct = function () {
        // Map is kind of dictionary with key/value pairs
        var changes = new Map();
        changes.set("name", "Green Kayak");
        changes.set("supplier", null);
        this.repo.updateProduct(1, changes);
    };
    AppComponent.prototype.deleteProduct = function () {
        this.repo.deleteProduct(1);
    };
    AppComponent.prototype.deleteSupplier = function () {
        this.repo.deleteSupplier(2);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "app-root",
        template: __webpack_require__(111),
        styles: [__webpack_require__(110)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_productTable_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_productDetail_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__structure_productTable_component__["a" /* ProductTableComponent */], __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__["a" /* CategoryFilterComponent */], __WEBPACK_IMPORTED_MODULE_8__structure_productDetail_component__["a" /* ProductDetailComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* RoutingConfig */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_productDetail_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });



var routes = [
    { path: "table", component: __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__["a" /* ProductTableComponent */] },
    { path: "detail/:id", component: __WEBPACK_IMPORTED_MODULE_2__structure_productDetail_component__["a" /* ProductDetailComponent */] },
    { path: "detail", component: __WEBPACK_IMPORTED_MODULE_2__structure_productDetail_component__["a" /* ProductDetailComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_1__structure_productTable_component__["a" /* ProductTableComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.category = this.search = null;
        this.related = false;
    };
    return Filter;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(productId, name, category, description, price, supplier, ratings) {
        this.productId = productId;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.supplier = supplier;
        this.ratings = ratings;
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Supplier; });
var Supplier = (function () {
    function Supplier(supplierId, name, city, state) {
        this.supplierId = supplierId;
        this.name = name;
        this.city = city;
        this.state = state;
    }
    return Supplier;
}());

//# sourceMappingURL=supplier.model.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryFilterComponent = (function () {
    function CategoryFilterComponent(repo) {
        this.repo = repo;
        this.chessCategory = "chess";
    }
    CategoryFilterComponent.prototype.setCategory = function (category) {
        this.repo.filter.category = category;
        this.repo.getProducts();
    };
    return CategoryFilterComponent;
}());
CategoryFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "category-filter",
        template: __webpack_require__(112)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], CategoryFilterComponent);

var _a;
//# sourceMappingURL=categoryFilter.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <category-filter></category-filter>\n      <product-table></product-table>\n    </div>\n    <div class=\"col\">\n      <product-detail></product-detail>\n    </div>\n  </div>\n</div> -->\n\n<!-- <table class=\"table table-sm table-striped\">\n  <tr>\n    <th>Name</th>\n    <th>Category</th>\n    <th>Price</th>\n    <th>Supplier</th>\n    <th>Ratings</th>\n  </tr>\n  <tr *ngFor=\"let product of products\">\n    <td>{{ product.name }}</td>\n    <td>{{ product.category }}</td>\n    <td>{{ product.price }}</td>\n    <td>{{ product.supplier?.name || \"None\" }}</td>\n    <td>{{ product.ratings?.length || 0 }}</td>\n  </tr>\n</table>\n\n<button class=\"btn btn-primary m-1\" (click)=\"createProduct()\">\n  Create Product\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"createProductAndSupplier()\">\n  Create Product and Supplier\n</button>\n\n<button class=\"btn btn-primary m-1\" (click)=\"replaceProduct()\">\n  Replace Product\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"replaceSupplier()\">\n  Replace Supplier\n</button>\n\n<button class=\"btn btn-primary m-1\" (click)=\"updateProduct()\">\n  Update Product\n</button>\n\n<button class=\"btn btn-primary m-1\" (click)=\"deleteProduct()\">\n  Delete Product\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"deleteSupplier()\">\n  Delete Supplier\n</button> -->\n\n<!-- <table class=\"table table-sm table-striped\">\n  <tr>\n    <th colspan=\"2\" class=\"bg-info\">Product</th>\n  </tr>\n  <tr>\n    <th>Name</th>\n    <td>{{ product?.name || \"Loading Data...\" }}</td>\n  </tr>\n  <tr>\n    <th>Category</th>\n    <td>{{ product?.category || \"Loading Data...\" }}</td>\n  </tr>\n  <tr>\n    <th>Description</th>\n    <td>{{ product?.description || \"Loading Data...\" }}</td>\n  </tr>\n  <tr>\n    <th>Price</th>\n    <td>{{ product?.price || \"Loading Data...\" }}</td>\n  </tr>\n  <tr>\n    <th colspan=\"2\" class=\"bg-info\">Supplier</th>\n  </tr>\n  <tr>\n    <th>Name</th>\n    <td>{{ product?.supplier?.name }}</td>\n  </tr>\n  <tr>\n    <th>City</th>\n    <td>{{ product?.supplier?.city }}</td>\n  </tr>\n  <tr>\n    <th>State</th>\n    <td>{{ product?.supplier?.state }}</td>\n  </tr>\n  <tr>\n    <th>Products</th>\n    <td>{{ product?.supplier?.products?.length }}</td>\n  </tr>\n</table> -->\n"

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-1\">\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory('soccer')\">Soccer</button>\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory(chessCategory)\">Chess</button>\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory('Water' + 'Sports')\">Watersports</button>\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory(null)\">All</button>\r\n</div>\r\n"

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <tr>\r\n    <th colspan=\"2\" class=\"bg-info\">Product</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Name</th>\r\n    <td>{{ product?.name || \"No Data\" }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>Category</th>\r\n    <td>{{ product?.category || \"No Data\" }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>Description</th>\r\n    <td>{{ product?.description || \"No Data\" }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>Price</th>\r\n    <td>{{ product?.price || \"No Data\" }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th colspan=\"2\" class=\"bg-info\">Supplier</th>\r\n  </tr>\r\n  <tr>\r\n    <th>Name</th>\r\n    <td>{{ product?.supplier?.name }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>City</th>\r\n    <td>{{ product?.supplier?.city }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>State</th>\r\n    <td>{{ product?.supplier?.state }}</td>\r\n  </tr>\r\n  <tr>\r\n    <th>Products</th>\r\n    <td>{{ product?.supplier?.products?.length }}</td>\r\n  </tr>\r\n</table>\r\n<div class=\"text-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/table\">Back</button>\r\n</div>\r\n"

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <tr>\r\n    <th>Name</th>\r\n    <th>Category</th>\r\n    <th>Price</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let product of products\">\r\n    <td>{{ product.name }}</td>\r\n    <td>{{ product.category }}</td>\r\n    <td>{{ product.price }}</td>\r\n    <td>\r\n      <button class=\"btn btn-primary btn-sm\" [routerLink]=\"['/detail', product.productId]\">\r\n        Details\r\n      </button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var productsUrl = "/api/products";
var suppliersUrl = "/api/suppliers";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_3__configClasses_repository__["a" /* Filter */]();
        this.suppliers = [];
        //this.filter.category = "Soccer";
        this.filter.related = true;
        this.getProducts();
    }
    Repository.prototype.getProduct = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, productsUrl + "/" + id).subscribe(function (response) { return (_this.product = response); });
    };
    Repository.prototype.getProducts = function () {
        var _this = this;
        var url = productsUrl + "/" + "?related=" + this.filter.related;
        if (this.filter.category) {
            url += "&category=" + this.filter.category;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, url).subscribe(function (response) { return (_this.products = response); });
    };
    Repository.prototype.getSuppliers = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Get, suppliersUrl).subscribe(function (response) { return (_this.suppliers = response); });
    };
    Repository.prototype.createProduct = function (prod) {
        var _this = this;
        // Create product object to insert
        var data = {
            name: prod.name,
            category: prod.category,
            description: prod.description,
            price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, productsUrl, data).subscribe(function (response) {
            prod.productId = response;
            _this.products.push(prod);
        });
    };
    Repository.prototype.createProductAndSupplier = function (prod, supp) {
        var _this = this;
        // Create supplier object to insert
        var data = {
            name: supp.name,
            city: supp.city,
            state: supp.state
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Post, suppliersUrl, data).subscribe(function (response) {
            supp.supplierId = response;
            prod.supplier = supp;
            _this.suppliers.push(supp);
            if (prod != null) {
                _this.createProduct(prod);
            }
        });
    };
    Repository.prototype.replaceProduct = function (prod) {
        var _this = this;
        var data = {
            name: prod.name,
            category: prod.category,
            description: prod.description,
            price: prod.price,
            supplier: prod.supplier ? prod.supplier.supplierId : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, productsUrl + "/" + prod.productId, data).subscribe(function (response) { return _this.getProducts(); } // this is inneficient since additional call is made after PUT request
        );
    };
    Repository.prototype.replaceSupplier = function (supp) {
        var _this = this;
        var data = {
            name: supp.name,
            city: supp.city,
            state: supp.state
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Put, suppliersUrl + "/" + supp.supplierId, data).subscribe(function (response) { return _this.getProducts(); } // this is inneficient since additional call is made after PUT request
        );
    };
    Repository.prototype.updateProduct = function (id, changes) {
        var _this = this;
        // Compose patch array of objects in this format {op: "operation, e.g. replace", path: "property to replace", value: "new value"}
        var patch = [];
        changes.forEach(function (value, key) { return patch.push({ op: "replace", path: key, value: value }); });
        // Send PATCH request
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Patch, productsUrl + "/" + id, patch).subscribe(function (response) { return _this.getProducts(); } // this is inneficient since additional call is made after PATCH request
        );
    };
    Repository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, productsUrl + "/" + id).subscribe(function (response) {
            return _this.getProducts();
        } // this is inneficient since additional call is made after DELETE request
        );
    };
    Repository.prototype.deleteSupplier = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestMethod */].Delete, suppliersUrl + "/" + id).subscribe(function (response) {
            _this.getProducts(); // this is inneficient since additional call is made after DELETE request
            _this.getSuppliers(); // this is inneficient since additional call is made after DELETE request
        });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    /* Private Methods */
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http
            .request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb,
            url: url,
            body: data
        }))
            .map(function (response) { return (response.headers.get("Content-Length") != "0" ? response.json() : null); });
    };
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(99);


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 68;

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(repo, router, activatedRoute) {
        this.repo = repo;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // Setup direct url routing
        var id = Number.parseInt(activatedRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getProduct(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(ProductDetailComponent.prototype, "product", {
        get: function () {
            return this.repo.product;
        },
        enumerable: true,
        configurable: true
    });
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "product-detail",
        template: __webpack_require__(113)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=productDetail.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTableComponent = (function () {
    function ProductTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(ProductTableComponent.prototype, "products", {
        get: function () {
            return this.repo.products;
        },
        enumerable: true,
        configurable: true
    });
    ProductTableComponent.prototype.selectProduct = function (id) {
        this.repo.getProduct(id);
        // Go to product details url using Angular routing mechanism
        this.router.navigateByUrl("/detail");
    };
    return ProductTableComponent;
}());
ProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: "product-table",
        template: __webpack_require__(114)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductTableComponent);

var _a, _b;
//# sourceMappingURL=productTable.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(103);


var bootApplication = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ })

},[230]);
//# sourceMappingURL=main.bundle.js.map