import { commands, ExtensionContext, TextEdit, window } from "vscode";
import wrap from "./wrap";

const wrapSelection = (editor, symbol) => {
	if (!symbol) {
		return;
	}

	const { document, selections } = editor;

	editor.edit((b) => {
		selections.forEach((selection) => {
			if (!selection.isEmpty) {
				const text = document.getText(selection);

				b.replace(selection, wrap(text, symbol));
			}
		});
	});
};

export function activate(context: ExtensionContext) {
	context.subscriptions.push(commands.registerCommand("wrapSelection", async () => {
		const { activeTextEditor: editor } = window;

		const symbol = await window.showInputBox({ placeHolder: "symbols" });
		wrapSelection(editor, symbol);
	}));

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.quote.single",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, "'");
			},
		),
	);

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.quote.double",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, '"');
			},
		),
	);

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.quote.backtick",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, '`');
			},
		),
	);

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.quote.french",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, "«");
			},
		),
	);

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.bracket.square",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, "[");
			},
		),
	);

	context.subscriptions.push(
		commands.registerCommand(
			"wrapSelection.bracket.round",
			() => {
				const { activeTextEditor: editor } = window;
				wrapSelection(editor, "(");
			},
		),
	);
}
