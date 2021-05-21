import {normalize} from "../index.js";


describe("normalize", () => {
	const normalizeEdgeCases = [
		{r: 1, g: 2, b: 3},
		{r: 1, g: 2, b: 3, a: 0.4},
		{R: 1, G: 2, B: 3},
		{R: 1, G: 2, B: 3, A: 0.4},
		{red: 1, green: 2, blue: 3},
		{red: 1, green: 2, blue: 3, alpha: 0.4},
		[1, 2, 3],
		[1, 2, 3, 0.4],
		"rgb(0, 213, 34)",
		"rgba(0, 213, 34,.12)",
		"#fff",
		"#000000",
		"#FFBB00AA",
		"123",
		"FFFF",
	];

	test.each(normalizeEdgeCases)("%p", (color) => {
		expect(normalize(color)).toMatchSnapshot();
	});

	test("throw error if not recognized", () => {
		expect(() => {
			(normalize as CallableFunction)({r: 1, a: "string"});
		}).toThrowError("The input into `looseRGB.normalize` wasn't a recognized RGB type.");
	});
});
