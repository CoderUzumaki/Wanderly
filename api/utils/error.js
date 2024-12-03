// Used to handle custom errors in the application
export const errorHandler = (status, message) => {
    const error = new Error();
    error.statusCode = status;
    error.message = message;
    return error;
};