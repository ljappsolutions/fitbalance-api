import { DynamoDB } from "aws-sdk";

export class PeopleService {
    private dynamo: DynamoDB.DocumentClient;
    private tableName: string;
    
    constructor() {
        this.tableName = `${process.env.ENV}-fitbalance-routine`;
        this.dynamo = new DynamoDB.DocumentClient();
    }

    public async getUserProfile(userId: string): Promise<any> {
        const params = {
            TableName: this.tableName,
            Key: {
                userId,
            },
            AttributesToGet: [
                "person",
            ]
        };
        try {
            const result = await this.dynamo.get(params).promise();
            return result.Item;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}