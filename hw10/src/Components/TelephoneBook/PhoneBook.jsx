import React from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
          onDeleteContact={this.deleteContact} 
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact} 
        />
      </div>
    );
  }
}

export default PhoneBook;
