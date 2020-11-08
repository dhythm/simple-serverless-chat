import * as Yup from 'yup';

export interface Values {
  name: string;
  message: string;
}

export const initialValues: Values = {
  name: '',
  message: '',
};

export const validationSchema = Yup.object({
  name: Yup.string(),
  message: Yup.string().required('message must be included.'),
});
