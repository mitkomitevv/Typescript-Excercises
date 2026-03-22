interface CountableSet<T> {
    add(item:T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private items: Map<T, number> = new Map();

    add(item: T): void {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1);
    }

    remove(item: T): void {
        const count = this.items.get(item);
        if (count) {
            if (count > 1) {
                this.items.set(item, count - 1);
            }
        }
    }

    contains(item: T): boolean {
        return this.items.has(item);
    }

    getNumberOfCopies(item: T): number {
        return this.items.get(item) || 0;
    }
}
