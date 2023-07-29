const ALPHABETS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

export default function numberToAlphabet(number) {
    if (typeof number !== "number") {
        throw new Error("Must be a nunber.");
    }
    if (number <= 0) {
        throw new RangeError("Number must be > 0.");
    }
    let res = "";
    let a = number - 1;
    while (true) {
        const remainder = a % ALPHABETS.length;
        res = ALPHABETS[remainder] + res;
        if (a < ALPHABETS.length) {
            break;
        }
        a = Math.floor(a / ALPHABETS.length) - 1;
    }
    return res;
}
