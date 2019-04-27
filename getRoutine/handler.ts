import { APIGatewayProxyHandler } from "aws-lambda";
import { RoutinesService } from "../shared/services/routines.service";

export const getRoutine: APIGatewayProxyHandler = async (event) => {
    let { userId } = event.pathParameters;
    const routinesService = new RoutinesService();
    try {
        const routine = await routinesService.getRoutineByUser(userId);

        return {
            statusCode: 200,
            body: JSON.stringify(routine),
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