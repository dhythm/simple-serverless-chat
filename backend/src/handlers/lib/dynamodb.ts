import { DynamoDB } from 'aws-sdk';

export const client = new DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: process.env.AWS_REGION,
  ...(process.env.AWS_SAM_LOCAL === 'true' && {
    endpoint: 'http://dynamodb:8000',
  }),
});
