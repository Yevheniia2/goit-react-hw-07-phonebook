import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
    reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];;
      },
      prepare(name, number) {
        return {
          payload: {
            name: name.trim(),
            number: number.trim(),
            id: uuidv4(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      },
    },
  },
);

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;