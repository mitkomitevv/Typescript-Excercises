type SuccessResponse = {
    text: string,
    code: 200 | 201 | 301
};

type FailedResponse = {
    text: string,
    code: 400 | 404 | 500,
    printChars?: number
};

function checkHttpCodes(responseObj: SuccessResponse | FailedResponse): void {
    if ('printChars' in responseObj) {
        console.log(responseObj.text.slice(0, responseObj.printChars));
    } else {
        console.log(responseObj.text);
    }
}
