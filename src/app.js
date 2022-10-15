"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'hi';
const hello = (word) => {
    return `Hello ${word} !`;
};
exports.hello = hello;
(0, exports.hello)(world);
