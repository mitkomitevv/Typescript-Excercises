function validateAge(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalSetter = descriptor.set;

    descriptor.set = function (age: number) {
        if (age < 1 || age > 200) {
            throw new Error('Error: Age must be between 1 and 200!');
        }
        originalSetter!.call(this, age);
    }

    return descriptor;
}

class Age {
    private _age!: number;
    constructor(age: number){ 
        this.age = age;
     }

    @validateAge
    set age(val: number){ this._age = val; }
    get age() { return this._age;  }
}

let ageVal = new Age(10);
ageVal.age = -10;