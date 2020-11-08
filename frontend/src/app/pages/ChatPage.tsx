import { Grid } from '@core/components';
import { useGetRequest } from '@core/lib/hooks/useGetRequest';
import React from 'react';

export const ChatPage: React.FunctionComponent = () => {
  const { loading, error, data: messages } = useGetRequest<any[]>(
    'http://127.0.0.1:3000/message/get',
  );

  console.log({ loading, error, messages });

  if (loading) return <p>loading...</p>;

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <p>Header</p>
      </Grid>
      <Grid item>
        {messages.map((message) => (
          <React.Fragment key={message.id}>
            <p>{`${message.message}`}</p>
            <p>{`${message.name}`}</p>
            <p>{`${message.createdAt}`}</p>
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};
