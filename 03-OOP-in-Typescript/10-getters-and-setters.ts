export {}

class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    get username(): string {
        return this._username
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw Error('Error: Username must be at least 3 characters long');
        }
        
        this._username = newUsername;
    }
}
