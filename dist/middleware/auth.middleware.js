var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { hasUserWithEmail, selectSpecifyToken, } from "../repositories/auth.repositories.js";
import { schemaSignUp, schemaSignIn } from "../schemas/auth.schemas.js";
function signUpIsValid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var isValid, error;
        return __generator(this, function (_a) {
            isValid = schemaSignUp.validate(req.body, { abortEarly: false });
            if (isValid.error) {
                error = isValid.error.details.map(function (erro) { return erro.message; });
                res.status(422).send(error);
                return [2 /*return*/];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function signInIsValid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var isValid, error;
        return __generator(this, function (_a) {
            isValid = schemaSignIn.validate(req.body, { abortEarly: false });
            if (isValid.error) {
                error = isValid.error.details.map(function (erro) { return erro.message; });
                res.status(422).send(error);
                return [2 /*return*/];
            }
            next();
            return [2 /*return*/];
        });
    });
}
function hadEmailUnique(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var email, response, qtdUser, passwordEncrypted, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.body.email;
                    return [4 /*yield*/, hasUserWithEmail(email)];
                case 1:
                    response = _a.sent();
                    qtdUser = response.rows.length;
                    if (qtdUser > 0) {
                        res.status(409).send({ msg: "E-mail already registered" });
                        return [2 /*return*/];
                    }
                    passwordEncrypted = bcrypt.hashSync(req.body.password, 12);
                    res.locals.passwordEncrypted = passwordEncrypted;
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function hadAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var email, response, qtdUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.body.email;
                    return [4 /*yield*/, hasUserWithEmail(email)];
                case 1:
                    response = _a.sent();
                    qtdUser = response.rows.length;
                    if (qtdUser === 0) {
                        res.status(401).send({ msg: "E-mail and password incompatible!" });
                        return [2 /*return*/];
                    }
                    res.locals.response = response.rows[0];
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function tokenIsValid(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var token, userid, response, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
                    if (!token) {
                        res.status(401).send({ msg: "Token dont send" });
                        return [2 /*return*/];
                    }
                    if (token.length < 120) {
                        res.status(400).send({ msg: "Token invalid" });
                        return [2 /*return*/];
                    }
                    userid = jwt.verify(token, "palavra_secreta").userid;
                    if (!userid) {
                        res.status(400).send({ msg: "Token invalid" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, selectSpecifyToken(userid)];
                case 1:
                    response = _b.sent();
                    if (response.rows.length === 0) {
                        res.sendStatus(401);
                        return [2 /*return*/];
                    }
                    res.locals.userid = userid;
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.log(error_3);
                    res
                        .status(500)
                        .send({ msg: "Error in server or in the format of token send!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export { hadEmailUnique, signUpIsValid, signInIsValid, hadAccount, tokenIsValid, };
