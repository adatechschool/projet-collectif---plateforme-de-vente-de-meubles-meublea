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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = exports.User = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)({ name: 'user' })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _id_decorators;
    let _id_initializers = [];
    let _username_decorators;
    let _username_initializers = [];
    let _mail_decorators;
    let _mail_initializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _phone_number_decorators;
    let _phone_number_initializers = [];
    let _first_name_decorators;
    let _first_name_initializers = [];
    let _last_name_decorators;
    let _last_name_initializers = [];
    let _adress_decorators;
    let _adress_initializers = [];
    var User = _classThis = class {
        constructor() {
            this.id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _id_initializers, void 0));
            this.username = __runInitializers(this, _username_initializers, void 0);
            this.mail = __runInitializers(this, _mail_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.phone_number = __runInitializers(this, _phone_number_initializers, void 0);
            this.first_name = __runInitializers(this, _first_name_initializers, void 0);
            this.last_name = __runInitializers(this, _last_name_initializers, void 0);
            this.adress = __runInitializers(this, _adress_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "User");
    (() => {
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _username_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 45 })];
        _mail_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 45 })];
        _password_decorators = [(0, typeorm_1.Column)()];
        _phone_number_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: true })];
        _first_name_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true })];
        _last_name_decorators = [(0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true })];
        _adress_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: obj => "username" in obj, get: obj => obj.username, set: (obj, value) => { obj.username = value; } } }, _username_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _mail_decorators, { kind: "field", name: "mail", static: false, private: false, access: { has: obj => "mail" in obj, get: obj => obj.mail, set: (obj, value) => { obj.mail = value; } } }, _mail_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } } }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _phone_number_decorators, { kind: "field", name: "phone_number", static: false, private: false, access: { has: obj => "phone_number" in obj, get: obj => obj.phone_number, set: (obj, value) => { obj.phone_number = value; } } }, _phone_number_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _first_name_decorators, { kind: "field", name: "first_name", static: false, private: false, access: { has: obj => "first_name" in obj, get: obj => obj.first_name, set: (obj, value) => { obj.first_name = value; } } }, _first_name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _last_name_decorators, { kind: "field", name: "last_name", static: false, private: false, access: { has: obj => "last_name" in obj, get: obj => obj.last_name, set: (obj, value) => { obj.last_name = value; } } }, _last_name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _adress_decorators, { kind: "field", name: "adress", static: false, private: false, access: { has: obj => "adress" in obj, get: obj => obj.adress, set: (obj, value) => { obj.adress = value; } } }, _adress_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
})();
