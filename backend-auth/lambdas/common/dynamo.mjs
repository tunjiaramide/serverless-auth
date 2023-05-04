import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: 'us-east-1' });
const ddbDocClient = DynamoDBDocumentClient.from(client)
const TableName = process.env.TABLE_NAME // Update in the serverless.yml under environment


const getUser = async (username) => {
    const params = {
        TableName,
        Key: {
            username
        }
    }

    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        return data.Item;
    } catch(err) {
        console.log("Error :", err);
        return err;
    }

}


const createUser = async (data) => {
    const params = {
        TableName,
        Item: data
    }

    try {
        const data = await ddbDocClient.send(new PutCommand(params));
        console.log("Success :", data);
        return data;
    } catch(err) {
        console.log("Error :", err);
        return err;
    }

}

export { getUser, createUser }