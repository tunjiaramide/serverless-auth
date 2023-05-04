import apiResponse from "../common/apiResponse.mjs"
import { getUser } from "../common/dynamo.mjs";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const secretKey = process.env.TOKEN_KEY // Update in the serverless.yml under environment

const login = async (data) => {
    // Check if username and password is given.
    if(!data.username || !data.password){
        return apiResponse(400, 'Please include login details')
    }

    // Check if username exists
    const user = await getUser(data.username.toLowerCase())
    if(!user) return apiResponse(400, 'User does not exist')

   
    // if user exists compare password
    const res = await bcrypt.compare(data.password, user.password)
    if(!res) return apiResponse(400, 'Password incorrect')
    

    // if username and login correct generate a token and send
    if(res) {
        console.log(res)
        const token = jwt.sign({ username: data.username }, secretKey, { expiresIn: '1h' });
        return apiResponse(200, { token, username: user.username  })
    }
    

}


export default login