function fridayThe13th(arr: unknown[]): void {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    for (const item of arr) {
        if (item instanceof Date && item.getDay() === 5 && item.getDate() === 13) {
            console.log(`${item.getDate()}-${months[item.getMonth()]}-${item.getFullYear()}`);
        }
    }
}
