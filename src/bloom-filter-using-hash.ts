import crypto from 'crypto';


class BloomFilterHash {
    private bloomFilter: Array<number>;
    private numberOfBits: number;

    constructor(size: number) {
        this.numberOfBits = size;
        this.bloomFilter = new Array(size).fill(0);
    }

    hash(item: string) : number {
        const hash = crypto.createHash('sha256');
        hash.update(item);
        let hexHash = hash.digest('hex');
        const numericHash = parseInt(hexHash, 16);
        return numericHash%this.numberOfBits;
    }

    add(item: string) {
        let val = this.hash(item);
        this.bloomFilter[val] = 1;
    }

    has(item: string) {
        let val = this.hash(item);
        return this.bloomFilter[val] === 1;
    }
}

let filter = new BloomFilterHash(100);
filter.add('hello');
console.log(filter.has('hello')); // true
console.log(filter.has('world')); // false
