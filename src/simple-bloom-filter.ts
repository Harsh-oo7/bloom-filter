
class BloomFilter {
    private bloomFilter: Set<string>

    constructor() {
        this.bloomFilter = new Set();
    }

    public add(item: string) {
        this.bloomFilter.add(item);
    }
    
    public has(item: string) {
        return this.bloomFilter.has(item);
    }
}

let filter = new BloomFilter();
filter.add('hello');
console.log(filter.has('hello')); // true
console.log(filter.has('world')); // false