import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const lambdaHandler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const result = { status: 200, message: 'Hello from Lambda!' };
  console.info(`${result.message}`);
  callback(null, result);
};
