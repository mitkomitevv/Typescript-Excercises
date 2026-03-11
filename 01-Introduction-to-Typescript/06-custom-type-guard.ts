function isNonEmptyStringArray(arg: unknown): arg is string[] {
    return Array.isArray(arg) && arg.every(item => typeof item === 'string') && arg.length > 0;
}
