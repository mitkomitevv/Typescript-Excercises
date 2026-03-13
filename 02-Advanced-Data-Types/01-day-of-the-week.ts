function getDayOfTheWeek(day: number): void {
    enum days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(days[day] || 'error');
}
