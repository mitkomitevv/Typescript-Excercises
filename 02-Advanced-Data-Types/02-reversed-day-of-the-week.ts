function getReverseDayOfTheWeek(day: string): void {
    enum days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(days[day as keyof typeof days] || 'error');
}
