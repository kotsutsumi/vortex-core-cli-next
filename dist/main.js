#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hoge_1 = __importDefault(require("./hoge"));
const main = () => {
    console.log((0, hoge_1.default)());
    console.log('Hello World');
};
main();
// EOF
