import {convert} from "..";
import {RGBUnknown} from "../helpers";


interface GenericConvert {
	(color: RGBUnknown): RGBUnknown;
}
describe("convert", () => {
	const convertMethods: Array<keyof typeof convert> = [
		"toLowerKeys",
		"toUpperKeys",
		"toFullKeys",
		"toArray",
		"toCSSValue",
		"toHex",
	];
	const convertEdgeCases = [
		{r: 0, g: 1, b: 2},
		{r: 255, g: 101, b: 16},
		{r: 0, g: 1, b: 2, a: 0},
		{r: 255, g: 101, b: 16, a: 0.95},
	];

	describe.each(convertMethods)("%s", (method) => {
		test.each(convertEdgeCases)("%p", (color) => {
			expect((convert[method] as GenericConvert)(color)).toMatchSnapshot();
		});
	});
});
