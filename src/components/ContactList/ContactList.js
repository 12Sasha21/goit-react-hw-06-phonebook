import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          <div className={s.card}>
            <p className={s.name}>{name}:</p>
            <p className={s.number}>{number}</p>
            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   visibleContacts: PropTypes.func.isRequired,
// };
