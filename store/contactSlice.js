import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [{name: "test testi", phone: "123456789"}],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
      clearContact: (state) => {
        state.contacts = [];
      },
      addContact: (state, action) => {
        state.contacts.push(action.payload)
        state.contacts.sort((a, b) => a.name.localeCompare(b.name))
      },
      addContactArray: (state, action) => {
        for (let index = 0; index < action.payload.length; index++) {
          const element = action.payload[index];
          const contactExists = state.contacts.some(
            (contact) => contact.name === element.name && contact.phone === element.phone
          );
          if (!contactExists) {
            state.contacts.push(element);
          }
        }
        state.contacts.sort((a, b) => a.name.localeCompare(b.name))
      },
    },
  });


export const { clearContact, addContactArray, addContact } = contactSlice.actions;

export default contactSlice.reducer;

