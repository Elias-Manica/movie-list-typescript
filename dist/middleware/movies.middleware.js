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
import { schemaMovie, schemaUpdateMovie } from "../schemas/movies.schemas.js";
import { genreIsValid, listMovieById, plataformIsValid, statusIsValid, } from "../repositories/movies.repositories.js";
function movieIsValid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var isValid, error;
        return __generator(this, function (_a) {
            isValid = schemaMovie.validate(req.body, { abortEarly: false });
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
function updateIsValid(req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var note, grade, isValid, error;
        return __generator(this, function (_c) {
            note = (_a = req.body) === null || _a === void 0 ? void 0 : _a.note;
            grade = (_b = req.body) === null || _b === void 0 ? void 0 : _b.grade;
            if (!note && !grade && grade !== 0) {
                res.status(400).send({ msg: "update the grade or the note of movie" });
                return [2 /*return*/];
            }
            isValid = schemaUpdateMovie.validate(req.body, { abortEarly: false });
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
function bodyIsValid(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var plataform, genre, statusmovie, responseGenre, responseStatus, responsePlataform, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    plataform = req.body.plataform;
                    genre = req.body.genre;
                    statusmovie = req.body.statusmovie;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, genreIsValid(genre)];
                case 2:
                    responseGenre = _a.sent();
                    if (responseGenre.rows.length === 0) {
                        res.sendStatus(400);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, statusIsValid(statusmovie)];
                case 3:
                    responseStatus = _a.sent();
                    if (responseStatus.rows.length === 0) {
                        res.sendStatus(400);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, plataformIsValid(plataform)];
                case 4:
                    responsePlataform = _a.sent();
                    if (responsePlataform.rows.length === 0) {
                        res.sendStatus(400);
                        return [2 /*return*/];
                    }
                    next();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function hasMovie(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var number, response, userid, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Number(req.params.id)) {
                        res.status(400).send({ msg: "Send a valid number!" });
                        return [2 /*return*/];
                    }
                    number = Number(req.params.id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, listMovieById(number)];
                case 2:
                    response = _a.sent();
                    if (response.rows.length === 0) {
                        res.sendStatus(404);
                        return [2 /*return*/];
                    }
                    userid = res.locals.userid;
                    if (response.rows[0].userid !== userid) {
                        res
                            .status(401)
                            .send({ msg: "You dont have acess to delete this movie rate!" });
                        return [2 /*return*/];
                    }
                    next();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export { movieIsValid, bodyIsValid, hasMovie, updateIsValid };
