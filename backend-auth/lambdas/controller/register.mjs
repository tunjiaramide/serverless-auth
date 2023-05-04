import apiResponse from "../common/apiResponse.mjs"
import bcrypt from 'bcryptjs';
import { getUser, createUser } from "../common/dynamo.mjs";


const register = async (data) => {

    // Check if username, email and password is given.
    if(!data.username || !data.email || !data.password){
        return apiResponse(400, 'Please include register details')
    }

    // Check if username is taken and return
    const user = await getUser(data.username.toLowerCase())
    console.log(user)
    if(user) return apiResponse(400, 'Username already exists')


    // Bycrpt the password
    const hashSalt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, hashSalt)

    // Save the data into dynamodb and return success
    const newData = { 
        username: data.username.toLowerCase(),
        email: data.email,
        password: hashPassword 
    }

    try {
        const savedData = await createUser(newData)
        return apiResponse(201, savedData)
    } catch (err) {
        return apiResponse(400, err)
    }
    
}


export default register