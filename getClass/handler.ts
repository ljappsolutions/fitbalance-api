import { APIGatewayProxyHandler } from "aws-lambda";
import { ClassService } from "../shared/services/class.service";

export const getClass: APIGatewayProxyHandler = async (_event) => {
    const classService = new ClassService();
    try {
        const classes = await classService.getAll();
        return {
            statusCode: 200,
            body: JSON.stringify(classes),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error
            }),
        };
    }
}