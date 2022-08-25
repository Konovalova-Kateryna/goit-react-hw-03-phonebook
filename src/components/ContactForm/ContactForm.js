import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  Input,
  StyledForm,
  Label,
  ContactFormStyle,
  FormTitle,
  ContactFormBtn,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (value, { resetForm }) => {
    this.props.onNewSubmit({ id: nanoid(), ...value });
    resetForm();
  };

  render() {
    return (
      <ContactFormStyle>
        <FormTitle>Phonebook</FormTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          <StyledForm>
            <Label>
              Name:
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Enter contact name"
              />
              <ErrorMessage name="name">
                {() => Notiflix.Notify.failure('Name is required field')}
              </ErrorMessage>
            </Label>
            <Label>
              Telephone:
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Enter contact phone"
              />
              <ErrorMessage name="number">
                {() => Notiflix.Notify.failure('Number is required field')}
              </ErrorMessage>
            </Label>
            <ContactFormBtn type="submit">Add contact</ContactFormBtn>
          </StyledForm>
        </Formik>
      </ContactFormStyle>
    );
  }
}
