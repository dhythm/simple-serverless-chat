import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { client } from './lib/dynamodb';
import { responseBadRequest, responseSuccess } from './lib/http';

export const lambdaHandler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  try {
    // event.pathParameters;
    const messages = (
      await client
        .scan({
          TableName: process.env.TABLE_MESSAGE,
        })
        .promise()
    ).Items;

    callback(null, { ...responseSuccess, body: JSON.stringify(messages) });
  } catch (e) {
    callback(null, {
      ...responseBadRequest,
      body: JSON.stringify(''),
    });
  }
};
