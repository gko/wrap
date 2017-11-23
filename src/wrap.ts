const closingPattern = (pattern) => pattern.split("")
		.reverse()
		.map((ch) => {
			switch (ch) {
				case "{": return "}";
				case "<": return ">";
				case "«": return "»";
				case "[": return "]";
				case "(": return ")";
				default: return ch;
			}
		})
		.join("");

const wrap = (text, symbol) => `${symbol}${text}${closingPattern(symbol)}`;

export default wrap;
