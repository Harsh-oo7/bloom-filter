"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const numberOfBits = 10;
class BloomFilterHash {
    constructor() {
        this.bloomFilter = new Array(numberOfBits).fill(0);
    }
    hash(item) {
        const hash = crypto_1.default.createHash('sha256');
        hash.update(item);
        let hexHash = hash.digest('hex');
        const numericHash = parseInt(hexHash, 16);
        return numericHash % numberOfBits;
    }
    add(item) {
        let val = this.hash(item);
        this.bloomFilter[val] = 1;
    }
    has(item) {
        let val = this.hash(item);
        return this.bloomFilter[val] === 1;
    }
}
let filter = new BloomFilterHash();
filter.add('hello');
console.log(filter.has('hello')); // true
console.log(filter.has('world')); // false
