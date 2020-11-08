import { Box, Button, Grid, Loading, TextInput } from '@core/components';
import { useGetRequest } from '@core/lib/hooks/useGetRequest';
import Axios from 'axios';
import { Form, Formik } from 'formik';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { MessageBox } from 'react-chat-elements';
import { initialValues, validationSchema } from './schemas/chatPageSchema';

export const ChatPage: React.FunctionComponent = () => {
  const { loading, error, data } = useGetRequest<any[]>(
    'http://127.0.0.1:3000/message/get',
  );
  const [messages, setMessages] = useState([]);

  const displayMessages = messages.concat(data);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Box p={2}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const response = await Axios.post(
                  'http://127.0.0.1:3000/message/add',
                  { ...values },
                );

                setMessages((prev) => [response.data].concat(prev));
              } catch (e) {
                console.log({ e });
              }
            }}
          >
            {(formikProps) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextInput id="name" label="Type your name. (optional)" />
                  </Grid>
                  <Grid item xs={9}>
                    <TextInput
                      id="message"
                      label="Type your message. (required)"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="outlined"
                  disabled={formikProps.isSubmitting}
                >
                  send
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
      <Grid item>
        {loading ? (
          <Loading />
        ) : !error ? (
          <Grid container direction="column" spacing={1}>
            {displayMessages.map((message) => (
              <Grid item key={message.id}>
                <MessageBox
                  id={message.id}
                  position={message?.isMe ? 'right' : 'left'}
                  type="text"
                  title={message.name}
                  text={message.message}
                  dateString={DateTime.fromISO(message.createdAt).toFormat(
                    'MM/dd HH:mm',
                  )}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>error</p>
        )}
      </Grid>
    </Grid>
  );
};
