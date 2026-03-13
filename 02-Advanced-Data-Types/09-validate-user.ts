type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function validateUser(user: User): boolean {
    const idIsValid = (
        (typeof user.id === "number" && user.id > 100) ||
        (typeof user.id === "string" && user.id.length === 14)
    );

    const usernameIsValid = typeof user.username === 'string' && user.username.length >= 5 && user.username.length <= 10;

    const passwordIsValid = (
        (typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
        (
            Array.isArray(user.passwordHash) && user.passwordHash.length === 4 &&
            user.passwordHash.every(str => typeof str === 'string' && str.length === 8)
        )
    );

    const statusIsValid = user.status === 'Locked' || user.status === 'Unlocked';

    return idIsValid && usernameIsValid && passwordIsValid && statusIsValid
}
