"use strict";
class BloomFilter {
    constructor() {
        this.bloomFilter = new Set();
    }
    add(item) {
        this.bloomFilter.add(item);
    }
    has(item) {
        return this.bloomFilter.has(item);
    }
}
let filter = new BloomFilter();
filter.add('hello');
console.log(filter.has('hello')); // true
console.log(filter.has('world')); // false
