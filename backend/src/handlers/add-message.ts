import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { DateTime } from 'luxon';
import { v4 as uuid } from 'uuid';
import { client } from './lib/dynamodb';
import { responseBadRequest, responseSuccess } from './lib/http';

export const lambdaHandler: Handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  try {
    if (!event.body) throw Error('no-request-data-error');
    const body = JSON.parse(event.body);
    const keys = Object.keys(body);
    if (keys.length === 0 || !['message'].every((item) => keys.includes(item)))
      throw Error('parameter-invalid-error');

    const id = uuid();
    const { name, message } = body;
    const item = {
      id,
      userId: 'dummy-id',
      name: name || 'Anonymous',
      message,
      createdAt: DateTime.local().toISO(),
    };

    console.log({ item });

    await client
      .put({
        TableName: process.env.TABLE_MESSAGE,
        Item: item,
      })
      .promise();

    callback(null, { ...responseSuccess, body: JSON.stringify(item) });
  } catch (e) {
    callback(null, {
      ...responseBadRequest,
      body: JSON.stringify('Request parameter(s) is invalid.'),
    });
  }
};
