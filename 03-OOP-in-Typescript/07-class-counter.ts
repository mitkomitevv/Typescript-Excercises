class Counter {
    private static count: number = 0;

    static increment(): void {
        Counter.count++;
    }

    static getCount(): number {
        return Counter.count
    }
}
