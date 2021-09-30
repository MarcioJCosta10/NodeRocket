"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
// Função que receberá de quem está requisitando e criar no nosso serviço o curso.
function createCourse(req, res) {
    CreateCourseService_1.default.execute({
        name: 'NodeJS',
        educator: 'Marcio',
        duration: 10
    });
    CreateCourseService_1.default.execute({
        name: 'ReactJS',
        educator: 'Marcio'
    });
    return res.json({ message: 'Courses createds' });
}
exports.createCourse = createCourse;
