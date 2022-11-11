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
import { listGenres, listStatus, listPlataforms, listMoviesAvaible, createMovie, createMovieWithGrade, createMovieWithGradeOnly, createMovieWithNoteOnly, deleteMovieById, updateGradeAndNote, updateGrade, updateNote, countMovieByPlataform, countMovieByGenre, } from "../repositories/movies.repositories.js";
function listAllGenres(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, listGenres()];
                case 1:
                    response = _a.sent();
                    res.send(response.rows);
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
function listAllStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, listStatus()];
                case 1:
                    response = _a.sent();
                    res.send(response.rows);
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
function listAllPlataforms(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, listPlataforms()];
                case 1:
                    response = _a.sent();
                    res.send(response.rows);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function listMovies(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userid, response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userid = res.locals.userid;
                    return [4 /*yield*/, listMoviesAvaible(userid)];
                case 1:
                    response = _a.sent();
                    res.send(response.rows);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function insertMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userid, grade, note, name_1, plataform, genre, statusmovie, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    userid = res.locals.userid;
                    grade = req.body.grade;
                    note = req.body.note;
                    name_1 = req.body.name;
                    plataform = req.body.plataform;
                    genre = req.body.genre;
                    statusmovie = req.body.statusmovie;
                    if (!(!grade && !note && grade !== 0 && statusmovie === 2)) return [3 /*break*/, 2];
                    return [4 /*yield*/, createMovie(name_1, plataform, genre, statusmovie, userid)];
                case 1:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 2:
                    if (!(!note && statusmovie === 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, createMovieWithGradeOnly(name_1, plataform, genre, statusmovie, grade, userid)];
                case 3:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 4:
                    if (!(!grade && grade !== 0 && statusmovie === 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, createMovieWithNoteOnly(name_1, plataform, genre, statusmovie, note, userid)];
                case 5:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 6:
                    if (!((grade || grade === 0) && note && statusmovie === 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, createMovieWithGrade(name_1, plataform, genre, statusmovie, grade, note, userid)];
                case 7:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 8:
                    res.status(400).send({ msg: "Watch the movie before rating!" });
                    return [3 /*break*/, 10];
                case 9:
                    error_5 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
function deleteMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var number, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    number = Number(req.params.id);
                    return [4 /*yield*/, deleteMovieById(number)];
                case 1:
                    _a.sent();
                    res.sendStatus(204);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function updateMovie(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var movieid, note, grade, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    movieid = Number(req.params.id);
                    note = (_a = req.body) === null || _a === void 0 ? void 0 : _a.note;
                    grade = req.body.grade;
                    if (!((grade || grade === 0) && note)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateGradeAndNote(grade, note, movieid)];
                case 1:
                    _b.sent();
                    res.sendStatus(204);
                    return [2 /*return*/];
                case 2:
                    if (!(grade || grade === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateGrade(grade, movieid)];
                case 3:
                    _b.sent();
                    res.sendStatus(204);
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, updateNote(note, movieid)];
                case 5:
                    _b.sent();
                    res.send(204);
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _b.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function listMoviesByPlataform(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, countMovieByPlataform()];
                case 1:
                    response = _a.sent();
                    res.status(200).send(response.rows);
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function listMoviesByGenre(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, countMovieByGenre()];
                case 1:
                    response = _a.sent();
                    res.status(200).send(response.rows);
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    res.status(500).send({ msg: "Error in server!" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export { listAllGenres, listAllStatus, listAllPlataforms, listMovies, insertMovie, deleteMovie, updateMovie, listMoviesByPlataform, listMoviesByGenre, };
