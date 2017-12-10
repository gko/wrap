const template = (str, text) => str.join(text);

const wrap = (text, pattern) => {
	switch (pattern) {
		case "%>": case "<%": return template`<%${text}%>`;
		case "%}": case "{%": return template`{%${text}%}`;
		case "(": case ")": return template`(${text})`;
		case "<": case ">": return template`<${text}>`;
		case "[": case "]": return template`[${text}]`;
		case "{": case "}": return template`{${text}}`;
		case "{{": case "}}": return template`{{${text}}}`;
		case "{{{": case "}}}": return template`{{{${text}}}}`;
		case "«": case "»": return template`«${text}»`;
		case "<!--": case "--!>": return template`<!--${text}--!>`;
		default: return `${pattern}${text}${pattern}`;
	}
};

export default wrap;
