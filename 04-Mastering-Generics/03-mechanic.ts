type CarStructure = {
    engine: {
        horsepower: number;
    }
    tires: {
        model: string;
        airPressure: number;
    }
    body: {
        material: string;
    }
}

class Mechanic<T extends CarStructure> {
    technicalInspection(car: T): boolean { return true; }
}
