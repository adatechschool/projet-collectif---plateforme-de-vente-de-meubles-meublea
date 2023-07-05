"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopItem = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./User.entity");
let ShopItem = exports.ShopItem = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)({ name: 'shop_item' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _type_decorators;
    let _type_initializers = [];
    let _picture_decorators;
    let _picture_initializers = [];
    let _dimensions_decorators;
    let _dimensions_initializers = [];
    let _colour_decorators;
    let _colour_initializers = [];
    let _material_decorators;
    let _material_initializers = [];
    let _reserved_by_decorators;
    let _reserved_by_initializers = [];
    let _setDefaultValues_decorators;
    let _user_decorators;
    let _user_initializers = [];
    let _createdAt_decorators;
    let _createdAt_initializers = [];
    var ShopItem = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.name = __runInitializers(this, _name_initializers, void 0);
            this.price = __runInitializers(this, _price_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.picture = __runInitializers(this, _picture_initializers, void 0);
            this.dimensions = __runInitializers(this, _dimensions_initializers, void 0);
            this.colour = __runInitializers(this, _colour_initializers, void 0);
            this.material = __runInitializers(this, _material_initializers, void 0);
            this.reserved_by = __runInitializers(this, _reserved_by_initializers, void 0);
            this.user = __runInitializers(this, _user_initializers, void 0);
            this.createdAt = __runInitializers(this, _createdAt_initializers, void 0);
        }
        setDefaultValues() {
            if (!this.name) {
                this.name = ''; // Définition de la valeur par défaut à ''
            }
        }
    };
    __setFunctionName(_classThis, "ShopItem");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)({ default: '' })];
        _price_decorators = [(0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 })];
        _description_decorators = [(0, typeorm_1.Column)({ default: '' })];
        _type_decorators = [(0, typeorm_1.Column)({ default: '' })];
        _picture_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _dimensions_decorators = [(0, typeorm_1.Column)({ default: 'N/A' })];
        _colour_decorators = [(0, typeorm_1.Column)({ default: 'N/A' })];
        _material_decorators = [(0, typeorm_1.Column)({ default: 'N/A' })];
        _reserved_by_decorators = [(0, typeorm_1.Column)({ name: 'reserved_by', nullable: true })];
        _setDefaultValues_decorators = [(0, typeorm_1.BeforeInsert)()];
        _user_decorators = [(0, typeorm_1.ManyToOne)(() => User_entity_1.User), (0, typeorm_1.JoinColumn)({ name: 'reserved_by' })];
        _createdAt_decorators = [(0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })];
        __esDecorate(_classThis, null, _setDefaultValues_decorators, { kind: "method", name: "setDefaultValues", static: false, private: false, access: { has: obj => "setDefaultValues" in obj, get: obj => obj.setDefaultValues } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } } }, _type_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _picture_decorators, { kind: "field", name: "picture", static: false, private: false, access: { has: obj => "picture" in obj, get: obj => obj.picture, set: (obj, value) => { obj.picture = value; } } }, _picture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dimensions_decorators, { kind: "field", name: "dimensions", static: false, private: false, access: { has: obj => "dimensions" in obj, get: obj => obj.dimensions, set: (obj, value) => { obj.dimensions = value; } } }, _dimensions_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _colour_decorators, { kind: "field", name: "colour", static: false, private: false, access: { has: obj => "colour" in obj, get: obj => obj.colour, set: (obj, value) => { obj.colour = value; } } }, _colour_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _material_decorators, { kind: "field", name: "material", static: false, private: false, access: { has: obj => "material" in obj, get: obj => obj.material, set: (obj, value) => { obj.material = value; } } }, _material_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _reserved_by_decorators, { kind: "field", name: "reserved_by", static: false, private: false, access: { has: obj => "reserved_by" in obj, get: obj => obj.reserved_by, set: (obj, value) => { obj.reserved_by = value; } } }, _reserved_by_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } } }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: obj => "createdAt" in obj, get: obj => obj.createdAt, set: (obj, value) => { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ShopItem = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShopItem = _classThis;
})();
