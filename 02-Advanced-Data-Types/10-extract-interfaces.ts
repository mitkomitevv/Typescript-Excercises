export { }

type User = { username: string, signupDate: Date };

type Status = 'Logged' | 'Started' | 'InProgress' | 'Done';
type Task = {
    status: Status,
    title: string,
    daysRequired: number,
    assignedTo: User | undefined,
    changeStatus(newStatus: Status): void,
    moreProps?: number,
    evenMore?: string
}

function assignTask(
    user: User,
    task: Task
) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}


let user: User = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13)
}

let task1: Task = {
    status: <Status>'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: Status) { this.status = newStatus; }
}

let task2: Task = {
    status: <Status>'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: Status) { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);
