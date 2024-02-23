import * as vscode from "vscode";
import { customAlphabet } from "nanoid";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
// lowercase, uppercase, and numbers, no special characters
const defaultSeed = letters + numbers;

const createNanoId = (seed: string, size: number) => {
  let id = customAlphabet(seed, size)();
  // a number in the beginning of the id can cause issues when using the id as an object key
  if (numbers.includes(id[0])) {
    id = letters[Math.floor(Math.random() * letters.length)] + id.slice(1);
  }
  return id;
};
export const activate = (context: vscode.ExtensionContext) => {
  // As of 2024-02-22, vscode api does not provide a way to get the current focus
  // which is why we need to duplicate logic and commands.
  // We can use the same shortcut for both editor and terminal though.
  const insertNanoIdIntoEditor = (seed: string, size: number) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor");
      return;
    }
    editor.edit((editBuilder) => {
      editBuilder.replace(editor.selection, createNanoId(seed, size));
    });
  };

  const insertNanoIdIntoTerminal = (seed: string, size: number) => {
    const terminal = vscode.window.activeTerminal;
    if (!terminal) {
      vscode.window.showErrorMessage("No active terminal");
      return;
    }
    terminal.sendText(createNanoId(seed, size),false);
  };

  const config = vscode.workspace.getConfiguration("nano-id-gen");
  const shiftAltU1Editor = vscode.commands.registerCommand(
    "gen.nano.id.sm",
    () =>
      insertNanoIdIntoEditor(
        config.get("sm-seed", defaultSeed),
        config.get("sm-size", 10)
      )
  );
  const shiftAltU2Editor = vscode.commands.registerCommand(
    "gen.nano.id.md",
    () =>
      insertNanoIdIntoEditor(
        config.get("md-seed", defaultSeed),
        config.get("md-size", 21)
      )
  );
  const shiftAltU3Editor = vscode.commands.registerCommand(
    "gen.nano.id.lg",
    () =>
      insertNanoIdIntoEditor(
        config.get("lg-seed", defaultSeed),
        config.get("lg-size", 36)
      )
  );
  const shiftAltU1Terminal = vscode.commands.registerCommand(
    "gen.nano.id.sm.term",
    () =>
      insertNanoIdIntoTerminal(
        config.get("sm-seed", defaultSeed),
        config.get("sm-size", 10)
      )
  );
  const shiftAltU2Terminal = vscode.commands.registerCommand(
    "gen.nano.id.md.term",
    () =>
      insertNanoIdIntoTerminal(
        config.get("md-seed", defaultSeed),
        config.get("md-size", 21)
      )
  );
  const shiftAltU3Terminal = vscode.commands.registerCommand(
    "gen.nano.id.lg.term",
    () =>
      insertNanoIdIntoTerminal(
        config.get("lg-seed", defaultSeed),
        config.get("lg-size", 36)
      )
  );
  context.subscriptions.push(
    shiftAltU1Editor,
    shiftAltU2Editor,
    shiftAltU3Editor,
    shiftAltU1Terminal,
    shiftAltU2Terminal,
    shiftAltU3Terminal
  );
};

export const deactivate = () => {};
