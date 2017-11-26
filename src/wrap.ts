const matchSymbol = {
	close: {
		"(": ")",
		"<": ">",
		"<%": "%>",
		"[": "]",
		"{": "}",
		"{%": "%}",
		"{{": "}}",
		"{{{": "}}}",
		"«": "»",
	},
	open: {
		"%>": "<%",
		"%}": "{%",
		")": "(",
		">": "<",
		"]": "[",
		"}": "{",
		"}}": "{{",
		"}}}": "{{{",
		"»": "«",
	},
};

const closingSymbol = (ch) => matchSymbol.close[ch] || ch;
const openingSymbol = (ch) => matchSymbol.open[ch] || ch;

const wrapPattern = (pattern) => {
	const patternDefined = matchSymbol.open.hasOwnProperty(pattern) ||
		matchSymbol.close.hasOwnProperty(pattern);

	return [
		openingSymbol(pattern),
		patternDefined ?
			closingSymbol(pattern) :
			pattern.split("")
				.reverse()
				.map(closingSymbol)
				.join(""),
	];
};

const wrap = (text, symbol) => {
	const [begin, end] = wrapPattern(symbol);
	return `${begin}${text}${end}`;
};

export default wrap;
