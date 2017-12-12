import { workspace } from "vscode";

const userPatterns = workspace.getConfiguration("wrapSelection.patterns");
const userPattern = (text, pattern) => {
	const escapedPattern = userPatterns[pattern].replace(/`/g, "\\`");

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
	const isUserDefined = userPatterns.hasOwnProperty(pattern);

	if (isUserDefined) {
		return userPattern(text, pattern);
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
		default: return `${pattern}${text}${pattern}`;
	}
};

export default wrap;
