import type {MarkOptional} from "ts-essentials";


/*
	Types
*/
export interface RGBLowerKeys {
	r: number;
	g: number;
	b: number;
}
export interface RGBALowerKeys extends RGBLowerKeys {
	a: number;
}

export interface RGBUpperKeys {
	R: number;
	G: number;
	B: number;
}
export interface RGBAUpperKeys extends RGBUpperKeys {
	A: number;
}

export interface RGBFullKeys {
	red: number;
	green: number;
	blue: number;
}
export interface RGBAFullKeys extends RGBFullKeys {
	alpha: number;
}

export type RGBArray = [number, number, number] | Array<number>;
export type RGBAArray = [number, number, number, number] | Array<number>;

export type RGBCSSValue = string;
export type RGBACSSValue = string;

export type RGBHex = string;
export type RGBAHex = string;

export type RGB = RGBLowerKeys | RGBUpperKeys | RGBFullKeys | RGBArray;
export type RGBA = RGBALowerKeys | RGBAUpperKeys | RGBAFullKeys | RGBAArray;
export type RGBX = RGB | RGBA;
export type RGBUnknown = RGB | RGBA | RGBCSSValue | RGBACSSValue | RGBHex | RGBAHex;

export type RGBTypeName = "LowerKeys" | "UpperKeys" | "FullKeys" | "Array" | "Hex" | "CSSValue"


/*
	Helpers
*/
// eslint-disable-next-line @typescript-eslint/ban-types
export const includesKeys = (source: Array<string>, target: Object): boolean => (
	source.every((key) => Object.keys(target).includes(key))
);
export const parseDec = (number: string, index: number): number => (
	// Parse float for alpha
	index === 4 ? Number.parseFloat(number) : Number.parseInt(number, 10)
);
export const parseHex = (number: string, index: number): number => {
	const numberInt = Number.parseInt(number, 16);
	// Convert to float for alpha
	return index === 4 ? (numberInt + 1) / 256 : numberInt;
};


/*
	Regular Expressions
*/
export const regCSSNumber = "\\s*(\\d+)\\s*";
export const regCSSFloatNumber = "\\s*(\\d?\\.?\\d+)\\s*";
export const regexRGBCSSValue = new RegExp(`^rgb\\(${regCSSNumber},${regCSSNumber},${regCSSNumber}\\)$`, "i");
export const regexRGBACSSValue = new RegExp(`^rgba\\(${regCSSNumber},${regCSSNumber},${regCSSNumber},${regCSSFloatNumber}\\)$`, "i");

export const regHexNumber = "([\\dA-F]{2})";
export const regHexShortNumber = "([\\dA-F])";
export const regexRGBHexShort = new RegExp(`^#?${regHexShortNumber}${regHexShortNumber}${regHexShortNumber}$`, "i");
export const regexRGBAHexShort = new RegExp(`^#?${regHexShortNumber}${regHexShortNumber}${regHexShortNumber}${regHexShortNumber}$`, "i");
export const regexRGBHex = new RegExp(`^#?${regHexNumber}${regHexNumber}${regHexNumber}$`, "i");
export const regexRGBAHex = new RegExp(`^#?${regHexNumber}${regHexNumber}${regHexNumber}${regHexNumber}$`, "i");


/*
	Type Guards
*/
export const isRGBLowerKeys = (input: RGBUnknown): input is MarkOptional<RGBALowerKeys, "a"> => (
	input instanceof Object && includesKeys(["r", "g", "b"], input)
);
export const isRGBUpperKeys = (input: RGBUnknown): input is MarkOptional<RGBAUpperKeys, "A"> => (
	input instanceof Object && includesKeys(["R", "G", "B"], input)
);
export const isRGBFullKeys = (input: RGBUnknown): input is MarkOptional<RGBAFullKeys, "alpha"> => (
	input instanceof Object && includesKeys(["red", "green", "blue"], input)
);
export const isRGBArray = (input: RGBUnknown): input is RGBArray | RGBAArray => (
	Array.isArray(input) && input.length >= 3
);
export const isRGBCSSValue = (input: RGBUnknown): input is RGBCSSValue => (
	typeof input === "string" && regexRGBCSSValue.test(input)
);
export const isRGBACSSValue = (input: RGBUnknown): input is RGBACSSValue => (
	typeof input === "string" && regexRGBACSSValue.test(input)
);
export const isRGBHex = (input: RGBUnknown): input is RGBHex => (
	typeof input === "string" && regexRGBHex.test(input)
);
export const isRGBAHex = (input: RGBUnknown): input is RGBAHex => (
	typeof input === "string" && regexRGBAHex.test(input)
);
export const isRGBHexShort = (input: RGBUnknown): input is RGBHex => (
	typeof input === "string" && regexRGBHexShort.test(input)
);
export const isRGBAHexShort = (input: RGBUnknown): input is RGBAHex => (
	typeof input === "string" && regexRGBAHexShort.test(input)
);
