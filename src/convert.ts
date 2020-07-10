import {MarkOptional} from "ts-essentials";
import {RGBLowerKeys, RGBALowerKeys, RGBUpperKeys, RGBAUpperKeys, RGBFullKeys, RGBAFullKeys, RGBArray, RGBAArray, RGBHex, RGBAHex, RGBCSSValue, RGBACSSValue} from "./helpers";


/*
	Converting
*/
export function toLowerKeys<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBALowerKeys;
export function toLowerKeys<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBLowerKeys;
export function toLowerKeys ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): MarkOptional<RGBALowerKeys, "a"> {
	return a ? {r, g, b, a} : {r, g, b};
}
export function toUpperKeys<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBAUpperKeys;
export function toUpperKeys<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBUpperKeys;
export function toUpperKeys ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): MarkOptional<RGBAUpperKeys, "A"> {
	return a ? {R: r, G: g, B: b, A: a} : {R: r, G: g, B: b};
}
export function toFullKeys<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBAFullKeys;
export function toFullKeys<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBFullKeys;
export function toFullKeys ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): MarkOptional<RGBAFullKeys, "alpha"> {
	return a ? {red: r, green: g, blue: b, alpha: a} : {red: r, green: g, blue: b};
}
export function toArray<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBAArray;
export function toArray<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBArray;
export function toArray ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): RGBArray | RGBAArray {
	return a ? [r, g, b, a] : [r, g, b];
}
export function toHex<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBAHex;
export function toHex<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBHex;
export function toHex ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): RGBHex | RGBAHex {
	const [rHex, gHex, bHex, aHex] = [r, g, b, a].map((num) => {
		if (num === undefined) return;
		const hex = num.toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	});
	return a ? `#${rHex!}${gHex!}${bHex!}${aHex!}` : `#${rHex!}${gHex!}${bHex!}`;
}
export function toCSSValue<InputRGBA extends RGBALowerKeys>(input: InputRGBA): RGBACSSValue;
export function toCSSValue<InputRGB extends RGBLowerKeys>(input: InputRGB): RGBCSSValue;
export function toCSSValue ({r, g, b, a}: MarkOptional<RGBALowerKeys, "a">): RGBCSSValue | RGBACSSValue {
	return a ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
