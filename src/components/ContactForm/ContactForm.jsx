import { Formik } from 'formik';
import * as yup from 'yup';
import { useAddContacts } from 'redux/contactsReducer';
import {
  InputForm,
  LabelName,
  SubmitButton,
  PhonebookForm,
  ErrorText,
} from 'components/ContactForm/ContactForm.styled';

const initialState = {
  name: '',
  phone: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
});

export const ContactForm = () => {
  const { contact } = useAddContacts();

  const handleSubmit = (values, { resetForm }) => {
    contact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <PhonebookForm autoComplete="off">
        <LabelName htmlFor="name">Name</LabelName>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorText name="name" component="div" />
        <LabelName htmlFor="phone">Number</LabelName>
        <InputForm
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorText name="phone" component="div" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhonebookForm>
    </Formik>
  );
};
