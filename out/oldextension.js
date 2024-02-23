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
// lowercase, uppercase, and numbers, no special characters
const seed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const generateCid = (characters, length) => {
    let result = '';
    for (let i = 0; i < length; i++) {
        // If the first character is a number this can lead to invonveniences when using the CID as a key in a map
        let usableChars = characters;
        if (i === 0) {
            usableChars = characters.replaceAll(/\d+/g, '');
        }
        result += usableChars.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
const activate = (context) => {
    const disposableV1 = vscode.commands.registerCommand('v1.cid', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }
        const v1Cid = generateCid(seed, 21);
        editor.edit(editBuilder => {
            editBuilder.replace(editor.selection, v1Cid);
        });
    });
    const disposableV2 = vscode.commands.registerCommand('v2.cid', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }
        const v2Cid = generateCid(seed, 10);
        editor.edit(editBuilder => {
            editBuilder.replace(editor.selection, v2Cid);
        });
    });
    context.subscriptions.push(disposableV2, disposableV1);
};
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=oldextension.js.map