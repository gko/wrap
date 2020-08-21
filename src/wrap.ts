import { workspace } from "vscode";

const userPattern = (text, wrapPattern) => {
	const escapedPattern = wrapPattern.replace(/`/g, "\\`");

	try {
		/* tslint:disable:no-eval */
		const templateFunction = eval(`(text) => \`${escapedPattern}\``);
		/* tslint:enable */

		return templateFunction(text);
	} catch {
		// TODO return predefined pattern
	}
};

const wrap = (text, pattern) => {
	const userPatterns = workspace.getConfiguration("wrapSelection.patterns");
	const isUserDefined = userPatterns.hasOwnProperty(pattern);

	if (isUserDefined) {
		return userPattern(text, userPatterns[pattern]);
	}

	switch (pattern) {
		case "%>": case "<%": return `<%${text}%>`;
		case "%}": case "{%": return `{%${text}%}`;
		case "(": case ")": return `(${text})`;
		case "<": case ">": return `<${text}>`;
		case "[": case "]": return `[${text}]`;
		case "{": case "}": return `{${text}}`;
		case "{{": case "}}": return `{{${text}}}`;
		case "{{{": case "}}}": return `{{{${text}}}}`;
		case "«": case "»": return `«${text}»`;
		case "<!--": case "--!>": return `<!--${text}--!>`;
		default:
			if (pattern.indexOf('$&') !== -1) {
				// Perform non-symmetric selection wrapping.
				// - "$&" is used as a placeholder for the selected text, e.g. wrap("text", "f($&, ...)") gives "f(text, ...)". Same placeholder as JavaScript's strings' replace().
				// - Using "$&" but not "${text}" because the latter is too long to be used as an unsaved quick wrap expression.
				return pattern.split('$&').join(text);
			}
			return `${pattern}${text}${pattern}`;
	}
};

export default wrap;
