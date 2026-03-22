enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start: Date;
    private _end: Date;

    constructor(start: Date, end: Date) {
        this._start = start;
        this._end = end;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('End date cannot be before start date!');
        }

        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date!');
        }

        this._end = val;
    }

    getInfo(): string {
        return `Holiday ${this.formatDate(this._start)} - ${this.formatDate(this._end)}`;
    }

    private formatDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    private reservations: { holiday: T, vacationType: V }[] = [];

    reserveVacation(holiday: T, vacationType: V): void {
        this.reservations.push({ holiday, vacationType });
    }

    listReservations(): string {
        return this.reservations.map(reservation => {
            return `${reservation.holiday.getInfo()} => ${reservation.vacationType}`;
        }).join('\n');
    }
}
