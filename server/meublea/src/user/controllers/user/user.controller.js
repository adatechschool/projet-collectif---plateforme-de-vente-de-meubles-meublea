"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
let UserController = exports.UserController = (() => {
    let _classDecorators = [(0, common_1.Controller)('user')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getUsers_decorators;
    let _createUser_decorators;
    let _updateUserById_decorators;
    let _validateCredentials_decorators;
    var UserController = _classThis = class {
        constructor(userService) {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), userService);
        }
        getUsers() {
            return __awaiter(this, void 0, void 0, function* () {
                const users = yield this.userService.findUsers();
                return users;
            });
        }
        createUser(createUserDto) {
            return __awaiter(this, void 0, void 0, function* () {
                // Check for errors specified in CreateUser.dto.ts
                const errors = yield this.userService.validateUser(createUserDto);
                if (errors.length > 0) {
                    // if there's any, throw a 400 with corresponding error messages
                    const errorMessages = errors.map(error => Object.values(error.constraints)).flat();
                    throw new common_1.HttpException({ statusCode: common_1.HttpStatus.BAD_REQUEST, message: errorMessages }, common_1.HttpStatus.BAD_REQUEST);
                }
                // If everything is fine, return a 201
                return this.userService.createUser(createUserDto);
            });
        }
        // If request to localhost:3000/user/asdsd (or any string)
        // ParseIntPipe make it a 400 : Bad Request "Validation failed (numeric string is expected)"
        updateUserById(id, updateUserDto) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.userService.updateUser(id, updateUserDto);
            });
        }
        // Login
        validateCredentials(credentials, response) {
            return __awaiter(this, void 0, void 0, function* () {
                const { mail, password } = credentials;
                // Call the validateCredentials method in the UserService
                const { isValid, userId, isAdmin } = yield this.userService.validateCredentials(mail, password);
                // Throw a 401 error if mail/password aren't in database
                if (!isValid) {
                    throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
                }
                const responseObject = { message: 'Successful connexion', isValid, userId };
                response.cookie('userId', userId, { httpOnly: true });
                // Check if the user is the admin
                if (isAdmin) {
                    responseObject.isAdmin = "C\'est Fleury !!!";
                    response.cookie('Admin', 'Admin-connectee', { httpOnly: true });
                }
                return response.status(common_1.HttpStatus.OK).json(responseObject);
            });
        }
    };
    __setFunctionName(_classThis, "UserController");
    (() => {
        _getUsers_decorators = [(0, common_1.Get)()];
        _createUser_decorators = [(0, common_1.Post)()];
        _updateUserById_decorators = [(0, common_1.Put)(':id')];
        _validateCredentials_decorators = [(0, common_1.Post)('authentification')];
        __esDecorate(_classThis, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: obj => "getUsers" in obj, get: obj => obj.getUsers } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUserById_decorators, { kind: "method", name: "updateUserById", static: false, private: false, access: { has: obj => "updateUserById" in obj, get: obj => obj.updateUserById } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _validateCredentials_decorators, { kind: "method", name: "validateCredentials", static: false, private: false, access: { has: obj => "validateCredentials" in obj, get: obj => obj.validateCredentials } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
})();
