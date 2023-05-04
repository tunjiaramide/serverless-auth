import login from "./controller/login.mjs";
import register from "./controller/register.mjs";
import apiResponse from "./common/apiResponse.mjs";

let response;

export const authHandler = async event => {

    const data = JSON.parse(event.body)
    
    switch(true) {
        case (event.path === '/login' && event.httpMethod === 'POST'):
            response = login(data);
            break;
        case (event.path === '/register' && event.httpMethod === 'POST'):
            response = register(data);
            break;
        default:
            response = apiResponse(400, { msg: 'No route'})
    }

    return response;

    
}


