class Message {
    send(): string {
        return 'Sending message...';
    }
}

class EmailMessage extends Message {
    override send(): string {
        return 'Sending Email';
    }
}

class SMSMessage extends Message {
    override send(): string {
        return 'Sending SMS';
    }
}
