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
// import { customAlphabet } from 'nanoid';
// lowercase, uppercase, and numbers, no special characters
const defaultSeed = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const activate = (context) => {
    /* const createNanoId = (seed: string, size: number) => customAlphabet(seed, size)();
    const insertNanoId = (seed: string, size: number) => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('No active editor');
        return;
      }
      editor.edit(editBuilder => {
        editBuilder.replace(editor.selection, createNanoId(seed, size));
      });
    };
    const config = vscode.workspace.getConfiguration('nano-id-gen');
    const ctrliq = vscode.commands.registerCommand('gen.nano.id.q', () =>
      insertNanoId(config.get('q-seed', defaultSeed), config.get('q-size', 36)),
    );
    const ctrliw = vscode.commands.registerCommand('gen.nano.id.w', () =>
      insertNanoId(config.get('w-seed', defaultSeed), config.get('w-size', 21)),
    );
    const ctrlie = vscode.commands.registerCommand('gen.nano.id.e', () =>
      insertNanoId(config.get('e-seed', defaultSeed), config.get('e-size', 10)),
    ); */
    const old = vscode.commands.registerCommand('v1.cid', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }
        const v1Cid = "hallo";
        editor.edit(editBuilder => {
            editBuilder.replace(editor.selection, v1Cid);
        });
    });
    context.subscriptions.push(/* ctrliq, ctrliw, ctrlie,  */ old);
};
exports.activate = activate;
const deactivate = () => { };
exports.deactivate = deactivate;
//# sourceMappingURL=extensionold.js.map