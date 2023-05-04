
const apiResponse = (statusCode, data = {}) => {
        return {
            statusCode,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*' 
            }
        }
}

export default apiResponse;
