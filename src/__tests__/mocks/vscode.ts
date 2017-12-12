const userDefinedPatterns = {
	log: "console.log(`${text}`, ${text})",
	promise: "new Promise((yeah, nah) => yeah(${text}))",
};

const getConfiguration = () => userDefinedPatterns;
const workspace = { getConfiguration };

export { workspace };
