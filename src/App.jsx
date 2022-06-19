import React from 'react';
import Title from './components/Title/Title';
import SignupForm from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './index.css';

export default function Phonebook() {
  return (
    <div className="container">
      <h1 className="visually_hidden">Phonebook</h1>
      <Title title="Phonebook" />
      <SignupForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
}
