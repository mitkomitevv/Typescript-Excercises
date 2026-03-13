function optionalMultiplier(
    a?: number | string,
    b?: number | string,
    c?: number | string
): number {
    let numbers = [a, b, c]
        .filter(item => item !== undefined)
        .map(Number);

    return numbers.reduce((acc, curr) => acc * curr, 1);
}
