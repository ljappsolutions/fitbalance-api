import { APIGatewayProxyHandler } from "aws-lambda";
import { PeopleService } from "../shared/services/people.service";

export const getProfile: APIGatewayProxyHandler = async (event) => {
    let { userId } = event.pathParameters;
    const peopleService = new PeopleService();
    try {
        const person = await peopleService.getUserProfile(userId);
        return {
            statusCode: 200,
            body: JSON.stringify(person),
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