import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Title } from './Section/SectionTitle.styled';
import { SectionBox } from './Section/SectionTitle.styled';

const LS_KEY = 'Phone-contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is alredy in contacts.`);
      return;
    } else if (
      this.state.contacts.find(
        contact => contact.number.toString() === newContact.number
      )
    ) {
      Notiflix.Notify.failure(`${newContact.number} is alredy in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    Notiflix.Notify.success(`Contact added`);
    console.log(newContact);
    console.log(this.state);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notiflix.Notify.warning(`Contact deleted`);
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  componentDidMount() {
    if (localStorage.getItem(LS_KEY)) {
      this.setState({ contacts: JSON.parse(localStorage.getItem(LS_KEY)) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toString().includes(filter)
    );

    return (
      <SectionBox>
        <ContactForm onNewSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onFilterChange={this.filterChange} />
        <ContactList
          options={filteredContacts}
          onDeleteContact={this.deleteContact}
        />

        <GlobalStyle />
      </SectionBox>
    );
  }
}
