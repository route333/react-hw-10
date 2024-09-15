import React, { Component } from "react";
import styled from "styled-components";

const NameInput = styled.input`
  color: black;
`;

const NumInput = styled.input`
  color: black;
`;

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: `id-${this.props.contacts.length + 1}`,
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(newContact);
    this.setState({
      name: "",
      number: "",
    });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          <h2>Name</h2>
          <NameInput
            type="text"
            value={this.state.name}  
            onChange={this.handleNameChange}
            required
            placeholder="Enter name"
          />
          <h2>Number</h2>
          <NumInput
            type="tel"
            value={this.state.number} 
            onChange={this.handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
          />
          <button type="submit">add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
