type DetermineParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(value: DetermineParamType<T>): void {
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value);
    }
}
