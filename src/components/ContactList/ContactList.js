import { List, ListItem, ContactListBox } from './ContactList.styled';
import { PropTypes } from 'prop-types';

const ContactList = ({ options, onDeleteContact }) => {
  return (
    <ContactListBox>
      <List>
        {options.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </ListItem>
          );
        })}
      </List>
    </ContactListBox>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
