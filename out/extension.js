"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const nanoid_1 = require("nanoid");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
// lowercase, uppercase, and numbers, no special characters
const defaultSeed = letters + numbers;
const createNanoId = (seed, size) => {
    let id = (0, nanoid_1.customAlphabet)(seed, size)();
    // a number in the beginning of the id can cause issues when using the id as an object key
    if (numbers.includes(id[0])) {
        id = letters[Math.floor(Math.random() * letters.length)] + id.slice(1);
    }
    return id;
};
const activate = (context) => {
    // As of 2024-02-22, vscode api does not provide a way to get the current focus
    // which is why we need to duplicate logic and commands.
    // We can use the same shortcut for both editor and terminal though.
    const insertNanoIdIntoEditor = (seed, size) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor");
            return;
        }
        editor.edit((editBuilder) => {
            editBuilder.replace(editor.selection, createNanoId(seed, size));
        });
    };
    const insertNanoIdIntoTerminal = (seed, size) => {
        const terminal = vscode.window.activeTerminal;
        if (!terminal) {
            vscode.window.showErrorMessage("No active terminal");
            return;
        }
        terminal.sendText(createNanoId(seed, size), false);
    };
    const config = vscode.workspace.getConfiguration("nano-id-gen");
    const shiftAltU1Editor = vscode.commands.registerCommand("gen.nano.id.sm", () => insertNanoIdIntoEditor(config.get("sm-seed", defaultSeed), config.get("sm-size", 10)));
    const shiftAltU2Editor = vscode.commands.registerCommand("gen.nano.id.md", () => insertNanoIdIntoEditor(config.get("md-seed", defaultSeed), config.get("md-size", 21)));
    const shiftAltU3Editor = vscode.commands.registerCommand("gen.nano.id.lg", () => insertNanoIdIntoEditor(config.get("lg-seed", defaultSeed), config.get("lg-size", 36)));
    const shiftAltU1Terminal = vscode.commands.registerCommand("gen.nano.id.sm.term", () => insertNanoIdIntoTerminal(config.get("sm-seed", defaultSeed), config.get("sm-size", 10)));
    const shiftAltU2Terminal = vscode.commands.registerCommand("gen.nano.id.md.term", () => insertNanoIdIntoTerminal(config.get("md-seed", defaultSeed), config.get("md-size", 21)));
    const shiftAltU3Terminal = vscode.commands.registerCommand("gen.nano.id.lg.term", () => insertNanoIdIntoTerminal(config.get("lg-seed", defaultSeed), config.get("lg-size", 36)));
    context.subscriptions.push(shiftAltU1Editor, shiftAltU2Editor, shiftAltU3Editor, shiftAltU1Terminal, shiftAltU2Terminal, shiftAltU3Terminal);
};
exports.activate = activate;
const deactivate = () => { };
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map