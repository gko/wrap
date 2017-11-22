const wrap = (text, symbol) => {
	switch (symbol) {
		case "{": case "}": return `{ ${text} }`;
		case "{{": case "}}": return `{{${text}}}`;
		case "{{{": case "}}}": return `{{${text}}}`;
		case "[": case "]": return `[${text}]`;
		case "<": case ">": return `<${text}>`;
		case "<!--": case "--!>": return `<!-- ${text}}} --!>`;
		case "<%": case "%>": return `<%${text}%>`;
		case "«": case "»": return `«${text}»`;
		case "(": case ")": return `(${text})`;
		case "/*": case "*/": return `/*${text}*/`;
		default: return `${symbol}${text}${symbol}`;
	}
};

export default wrap;
