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
import connection from "../database/database.js";
function listGenres() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n        SELECT * FROM genres;\n    ")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function listStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n          SELECT * FROM status;\n      ")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function listPlataforms() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n            SELECT * FROM plataforms;\n        ")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function listMoviesAvaible(userid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n    SELECT movies.id, movies.name, plataforms.name AS \"plataform\", genres.name AS \"genre\", status.name AS \"status\", \n    movies.grade, movies.note FROM movies LEFT JOIN plataforms ON plataforms.id = movies.plataform \n    LEFT JOIN genres ON genres.id = movies.genre LEFT JOIN status ON status.id = movies.statusmovie \n    WHERE movies.userid = $1\n    ", [userid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function createMovie(name, plataform, genre, statusmovie, userid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n      INSERT INTO movies (name, plataform, genre, statusmovie, userid) VALUES ($1, $2, $3, $4, $5)\n      ", [name, plataform, genre, statusmovie, userid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function createMovieWithGrade(name, plataform, genre, statusmovie, grade, note, userid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n        INSERT INTO movies (name, plataform, genre, statusmovie, grade, note, userid) VALUES ($1, $2, $3, $4, $5, $6, $7)\n        ", [name, plataform, genre, statusmovie, grade, note, userid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function createMovieWithGradeOnly(name, plataform, genre, statusmovie, grade, userid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n    INSERT INTO movies (name, plataform, genre, statusmovie, grade, userid) VALUES ($1, $2, $3, $4, $5, $6)\n    ", [name, plataform, genre, statusmovie, grade, userid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function createMovieWithNoteOnly(name, plataform, genre, statusmovie, note, userid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n    INSERT INTO movies (name, plataform, genre, statusmovie, note, userid) VALUES ($1, $2, $3, $4, $5, $6)\n    ", [name, plataform, genre, statusmovie, note, userid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function genreIsValid(genreid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT * FROM genres WHERE id = $1;", [genreid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function statusIsValid(statusid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT * FROM status WHERE id = $1;", [statusid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function plataformIsValid(plataformid) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT * FROM plataforms WHERE id = $1;", [plataformid])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function listMovieById(movieId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("SELECT * FROM movies WHERE id = $1;", [movieId])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function deleteMovieById(movieId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("DELETE FROM movies WHERE id = $1;", [
                        movieId,
                    ])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function updateGrade(grade, movieId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("UPDATE movies SET grade = $1, statusmovie=1 WHERE id = $2", [grade, movieId])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function updateNote(note, movieId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("UPDATE movies SET note = $1, statusmovie=1 WHERE id = $2", [note, movieId])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function updateGradeAndNote(grade, note, movieId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("UPDATE movies SET grade = $1, note=$2, statusmovie=1 WHERE id = $3", [grade, note, movieId])];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function countMovieByPlataform() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n    SELECT plataforms.name, COUNT(movies.id) AS \"qtd\" FROM movies \n    LEFT JOIN plataforms on plataforms.id = movies.plataform \n    GROUP BY plataforms.name\n    ")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
function countMovieByGenre() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.query("\n    SELECT genres.name, COUNT(movies.id) AS \"qtd\" FROM movies \n    LEFT JOIN genres on genres.id = movies.genre \n    GROUP BY genres.name\n      ")];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
export { listGenres, listStatus, listPlataforms, listMoviesAvaible, createMovie, genreIsValid, statusIsValid, plataformIsValid, createMovieWithGrade, createMovieWithGradeOnly, createMovieWithNoteOnly, deleteMovieById, listMovieById, updateGrade, updateNote, updateGradeAndNote, countMovieByPlataform, countMovieByGenre, };
