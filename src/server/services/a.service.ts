export const getDataService = (
    body: any,
): any => {
    console.log(body);
    const response = {
        status: 'OK',
        msg: 'Route A is active'
    }
    return response;
};
