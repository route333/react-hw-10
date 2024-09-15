import React, { Component } from "react";
import styled from "styled-components";

const FilterInput = styled.input`
  color: black;
`;

class Filter extends Component {
  state = {
    filter: "",
  };

  handleInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const { contacts, onDeleteContact } = this.props; 

    const filteredContacts = contacts.filter((contact) => {
      const name = contact.name.toLowerCase();
      const filterValue = filter.toLowerCase();
      return name.includes(filterValue);
    });

    return (
      <>
        <FilterInput
          type="text"
          value={filter}
          onChange={this.handleInput}
          placeholder="Filter contacts"
        />
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button> 
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Filter;
