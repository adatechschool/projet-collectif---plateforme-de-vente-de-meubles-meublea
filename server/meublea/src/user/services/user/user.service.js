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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const CreateUser_dto_1 = require("src/user/dtos/CreateUser.dto");
let UserService = exports.UserService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var UserService = _classThis = class {
        constructor(userRepository) {
            this.userRepository = userRepository;
        }
        findUsers() {
            return this.userRepository.find();
        }
        createUser(userDetails) {
            return __awaiter(this, void 0, void 0, function* () {
                //Check if the mail used to register already exist in DB
                const existingUser = yield this.userRepository.findOne({ where: { mail: userDetails.mail } });
                if (existingUser) {
                    throw new common_1.HttpException('User with this email already exists', common_1.HttpStatus.BAD_REQUEST);
                }
                // New instance of User based on the userDetails
                const newUser = this.userRepository.create(Object.assign({}, userDetails));
                // Save it into the database. Return a promise.
                return this.userRepository.save(newUser);
            });
        }
        validateUser(userDetails) {
            return __awaiter(this, void 0, void 0, function* () {
                // Create a new instance of CreateUserDto
                const createUserDto = new CreateUser_dto_1.CreateUserDto();
                // Copy property values from userDetails to createUserDto
                Object.assign(createUserDto, userDetails);
                // Perform validation on the createUserDto object
                // and return the array of validation errors
                return yield (0, class_validator_1.validate)(createUserDto);
            });
        }
        updateUser(id, updateUserDetails) {
            return this.userRepository.update({ id }, Object.assign({}, updateUserDetails));
        }
        // Login
        validateCredentials(mail, password) {
            return __awaiter(this, void 0, void 0, function* () {
                // Retrieve the user from the database based on the email
                const user = yield this.userRepository.findOne({ where: { mail } });
                // If no user is found or the password doesn't match
                if (!user || user.password !== password) {
                    return { isValid: false };
                }
                if (mail === "fleury@test.com") {
                    return { isValid: true, userId: user.id, isAdmin: true };
                }
                // If they match
                return { isValid: true, userId: user.id };
            });
        }
    };
    __setFunctionName(_classThis, "UserService");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UserService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserService = _classThis;
})();
