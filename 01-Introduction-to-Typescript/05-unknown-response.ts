function unknownResponse(response: unknown): string {
    if (typeof response === 'object' && response !== null && 'value' in response && typeof response['value'] === 'string') {
        return response.value;
    }
    return '-'
}
