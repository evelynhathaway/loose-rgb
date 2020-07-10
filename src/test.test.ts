import {normalize, convert} from ".";


const testFelicity = normalize({r: 1, g: 2, b: 3}); // ?
const testLupe = normalize({r: 1, g: 2, b: 3, a: 4}); // ?
const testCecelia = normalize({R: 1, G: 2, B: 3}); // ?
const testMakenzie = normalize({R: 1, G: 2, B: 3, A: 4}); // ?
const testMarlin = normalize({red: 1, green: 2, blue: 3}); // ?
const testEduardo = normalize({red: 1, green: 2, blue: 3, alpha: 4}); // ?
const testBarney = normalize([1, 2, 3]); // ?
const testWanda = normalize([1, 2, 3, 4]); // ?
const testLexie = normalize("rgb(0, 213, 34)"); // ?
const testLauren = normalize("rgba(0, 213, 34,12)"); // ?
const testRosa = normalize("#fff"); // ?
const testSofia = normalize("#FFBB00AA"); // ?
const testTatum = normalize("123"); // ?
const testAntonio = normalize("FFFF"); // ?

const testJose = convert.toLowerKeys({r: 1, g: 2, b: 3}); // ?
const testFloy = convert.toUpperKeys({r: 1, g: 2, b: 3}); // ?
const testJett = convert.toFullKeys({r: 1, g: 2, b: 3}); // ?
const testMafalda = convert.toArray({r: 1, g: 2, b: 3}); // ?
const testLexus = convert.toCSSValue({r: 1, g: 2, b: 3}); // ?
const testVerda = convert.toHex({r: 1, g: 2, b: 3}); // ?
const testMichele = convert.toLowerKeys({r: 1, g: 2, b: 3, a: 4}); // ?
const testPascale = convert.toUpperKeys({r: 1, g: 2, b: 3, a: 4}); // ?
const testLuna = convert.toFullKeys({r: 1, g: 2, b: 3, a: 4}); // ?
const testJadon = convert.toArray({r: 1, g: 2, b: 3, a: 4}); // ?
const testAli = convert.toCSSValue({r: 1, g: 2, b: 3, a: 4}); // ?
const testRosalinda = convert.toHex({r: 1, g: 2, b: 3, a: 4}); // ?
