enum LoggingLevel {
    Info = "Info",
    Error = "Error",
    Warning = "Warning",
    Debug = "Debug",
}

enum LoggingFormat {
    Standard = "[%level][%date] %text",
    Minimal = "*%level* %text"
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
    cachedLogs: Map<T, string[]>
    log(logLevel: T, message: string): void;
    getFormat(): V
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
    cachedLogs: Map<T, string[]> = new Map();
    private format: V;

    constructor(format: V) {
        this.format = format;
    }

    log(logLevel: T, message: string): void {
        const currentDate = new Date().toISOString();
        const formattedMessage = this.format
            .replace('%level', logLevel)
            .replace('%date', currentDate)
            .replace('%text', message);

        console.log(formattedMessage);

        if (this.cachedLogs.has(logLevel)) {
            const currentMessages = this.cachedLogs.get(logLevel)!;
            currentMessages.push(formattedMessage);
            this.cachedLogs.set(logLevel, currentMessages);
        } else {
            this.cachedLogs.set(logLevel, [formattedMessage]);
        }
    }

    getFormat(): V {
        return this.format;
    }
}
