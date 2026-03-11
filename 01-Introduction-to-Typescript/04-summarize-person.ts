function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {
    const fullName = middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;

    const hobbiesSummary = hobbies
        ? hobbies.join(', ')
        : '-';

    const workInfoSummary = workInfo
        ? `${workInfo[0]} -> ${workInfo[1]}`
        : '-';

    return [
        id,
        fullName,
        age,
        hobbiesSummary,
        workInfoSummary
    ]
}

console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']));
console.log(summarizePerson(21, 'Joseph', 'Angler', 28));
console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));