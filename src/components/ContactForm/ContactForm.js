import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Input,
  Form,
  Label,
  ContactFormStyle,
  FormTitle,
  ContactFormBtn,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ id: nanoid(), [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    console.log(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormStyle>
        <FormTitle>Phonebook</FormTitle>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter contact name"
              value={this.state.name}
              required
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Telephone:
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter contact phone"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Label>
          <ContactFormBtn type="submit">Add contact</ContactFormBtn>
        </Form>
      </ContactFormStyle>
    );
  }
}
