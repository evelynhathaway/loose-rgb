import {
	RGB,
	RGBLowerKeys,
	RGBA,
	RGBALowerKeys,
	isRGBLowerKeys,
	isRGBUpperKeys,
	isRGBFullKeys,
	isRGBArray,
	isRGBCSSValue,
	regexRGBCSSValue,
	parseDec,
	isRGBACSSValue,
	regexRGBACSSValue,
	isRGBHex,
	regexRGBHex,
	parseHex,
	isRGBAHex,
	regexRGBAHex,
	isRGBHexShort,
	regexRGBHexShort,
	isRGBAHexShort,
	regexRGBAHexShort,
	RGBUnknown,
} from "./helpers";
import {convert} from ".";


/*
	Normalizing
*/
export function normalize<InputRGBA extends RGBA>(input: InputRGBA): RGBALowerKeys;
export function normalize<InputRGB extends RGB>(input: InputRGB): RGBLowerKeys;
export function normalize<InputRGBA extends string>(input: InputRGBA): RGBLowerKeys | RGBALowerKeys;
export function normalize (input: RGBUnknown): RGBLowerKeys | RGBALowerKeys;
export function normalize (input: RGBUnknown): RGBLowerKeys | RGBALowerKeys {
	if (isRGBLowerKeys(input)) {
		const {r, g, b, a} = input;
		return convert.toLowerKeys({r, g, b, a});
	}
	if (isRGBUpperKeys(input)) {
		const {R, G, B, A} = input;
		return convert.toLowerKeys({r: R, g: G, b: B, a: A});
	}
	if (isRGBFullKeys(input)) {
		const {red, green, blue, alpha} = input;
		return convert.toLowerKeys({r: red, g: green, b: blue, a: alpha});
	}
	if (isRGBArray(input)) {
		const [r, g, b, a] = input;
		return convert.toLowerKeys({r, g, b, a});
	}
	if (isRGBCSSValue(input)) {
		const [, r, g, b] = regexRGBCSSValue.exec(input)!.map(parseDec);
		return convert.toLowerKeys({r, g, b});
	}
	if (isRGBACSSValue(input)) {
		const [, r, g, b, a] = regexRGBACSSValue.exec(input)!.map(parseDec);
		return convert.toLowerKeys({r, g, b, a});
	}
	if (isRGBHex(input)) {
		const [, r, g, b] = regexRGBHex.exec(input)!.map(parseHex);
		return convert.toLowerKeys({r, g, b});
	}
	if (isRGBAHex(input)) {
		const [, r, g, b, a] = regexRGBAHex.exec(input)!.map(parseHex);
		return convert.toLowerKeys({r, g, b, a});
	}
	if (isRGBHexShort(input)) {
		const [, r, g, b] = regexRGBHexShort.exec(input)!.map((num, index) => parseHex(num.repeat(2), index));
		return convert.toLowerKeys({r, g, b});
	}
	if (isRGBAHexShort(input)) {
		const [, r, g, b, a] = regexRGBAHexShort.exec(input)!.map((num, index) => parseHex(num.repeat(2), index));
		return convert.toLowerKeys({r, g, b, a});
	}

	throw new Error("The input into `looseRGB.normalize` wasn't a recognized RGB type.");
}
