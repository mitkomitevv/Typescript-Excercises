class Calculator {
    calculate(operation: 'power' | 'log', num1: number, num2: number): number;
    calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', num1: number, num2: number, num3?: number, num4?: number): number;
    calculate(operation: string, num1: number, num2: number, num3?: number, num4?: number) {
        let usableNumbers = [num1, num2, num3, num4].filter(val => val !== undefined);

        switch (operation) {
            case 'power':
                return  num1 ** num2;
            case 'log':
                return Math.log(num1) / Math.log(num2);
            case 'add':
                return usableNumbers.reduce((acc, n) => acc + n);
            case 'subtract':
                return usableNumbers.reduce((acc, n) => acc - n);
            case 'multiply':
                return usableNumbers.reduce((acc, n) => acc * n);
            case 'divide':
                return usableNumbers.reduce((acc, n) => acc / n);
        }
    }
}
