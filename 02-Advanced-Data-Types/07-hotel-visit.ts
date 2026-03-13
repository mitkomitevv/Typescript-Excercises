type WithPass = {
    hallway: 'A',
    pass?: 'Guest'
}

type WithoutPass = {
    hallway: 'C'
}

type TrainFloor = {
    number: 1,
    train: () => void,
} & (WithPass | WithoutPass)

type DineFloor = {
    number: 2,
    dine: () => void,
} & (WithPass | WithoutPass)

type SleepFloor = {
    number: 3,
    hallway: 'A' | 'C',
    sleep: () => void,
}

function visitFloor(floor: TrainFloor | DineFloor | SleepFloor) {
    switch (floor.number) {
        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;
    }
}
