import { APIGatewayEvent, Callback, Context } from 'aws-lambda';

const lambdaHandler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const result = { status: 200, message: 'Hello from Lambda!' };
  console.info(`${result.message}`);
  return result.message;
};

export { lambdaHandler };
