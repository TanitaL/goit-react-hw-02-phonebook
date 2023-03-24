import { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
export class App extends Component { 
state = {
  contacts: [],
  name: '',
  number: ''
}
  
  formSubmitHandler = contact => {
    console.log(contact)
    this.setState((prev) => { 
      return {
        contacts: [
          ...prev.contacts, contact
        ]
      }
    })
  }

  //   formSubmitHandler = contact => {
  //   console.log(contact)
  //   this.setState(this.state.contacts.map(contact => {
  //     return { contacts: [...contact, contact] }
  //   }));
  // }

render() { 
  return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
}
}
