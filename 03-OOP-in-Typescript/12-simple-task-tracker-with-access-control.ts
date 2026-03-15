class Task {
    title: string;
    description: string;
    completed: boolean = false;

    private _createdBy!: string;

    constructor(title: string, description: string, createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    toggleStatus(): void {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks(): Task[] {
        return [
            new Task('playing', 'playing games', 'Mitko'),
            new Task('coding', 'coding in typescript', 'Mitko'),
        ]
    }
}
