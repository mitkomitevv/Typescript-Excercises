export { };

function validateUser(minLengthOrAgeOrPattern: number | RegExp, maxAge?: number) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.set!;

        descriptor.set = function (value: string) {
            if (typeof minLengthOrAgeOrPattern === 'number' && !maxAge && value.length < minLengthOrAgeOrPattern) {
                throw new Error(`Name must havve a min length of ${minLengthOrAgeOrPattern} characters.`);
            } else if (minLengthOrAgeOrPattern instanceof RegExp && !value.match(minLengthOrAgeOrPattern)) {
                throw new Error(`Password needs to match ${minLengthOrAgeOrPattern}.`);
            } else if (typeof minLengthOrAgeOrPattern === 'number' && maxAge && (Number(value) < minLengthOrAgeOrPattern || Number(value) > maxAge)) {
                throw new Error(`Age must be between ${minLengthOrAgeOrPattern} and ${maxAge}.`);
            }

            originalMethod.call(this, value);
        }

        return descriptor;
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @validateUser(3)
    set name(val: string) {
        this._name = val;
    }

    @validateUser(1, 100)
    set age(val: number) {
        this._age = val;
    }

    @validateUser(/^[a-zA-Z0-9]+$/g)
    set password(val: string) {
        this._password = val;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
}
