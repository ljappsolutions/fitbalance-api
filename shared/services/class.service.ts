import { DynamoDB } from "aws-sdk";

export class ClassService {
    private dynamo: DynamoDB.DocumentClient;
    private tableName: string;

    constructor() {
        this.tableName = `${process.env.ENV}-fitbalance-class`;
        this.dynamo = new DynamoDB.DocumentClient();
    }

    public async getAll(): Promise<any[]> {
        const params = {
            TableName: this.tableName,
        };
        try {
            const result = await this.dynamo.scan(params).promise();
            return result.Items;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}