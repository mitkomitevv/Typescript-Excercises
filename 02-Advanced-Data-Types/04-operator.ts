function useOperator(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
): string | number {
    if (operation === 'Index' && typeof param !== 'number') {
        return param[operand];
    } else if (operation === 'Length' && typeof param !== 'number') {
        return param.length % operand;
    } else {
        return Number(param) + operand;
    }
}

console.log(useOperator('short string1', 'Length', 5))