const openingSymbol = (ch) => {
	switch (ch) {
		case "}": return "{";
		case ">": return "<";
		case "»": return "«";
		case "]": return "[";
		case ")": return "(";
		default: return ch;
	}
};

const closingSymbol = (ch) => {
	switch (ch) {
		case "{": return "}";
		case "<": return ">";
		case "«": return "»";
		case "[": return "]";
		case "(": return ")";
		default: return ch;
	}
};

const wrapPattern = (pattern) => {
	return [
		openingSymbol(pattern),
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
