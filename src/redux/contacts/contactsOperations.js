import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get('/contacts');

      if (response.statusText !== 'OK') {
        throw new Error('Server Error');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue, getState }) {
    const stateContacts = getState().contacts.contacts;

    const isCoincidence = stateContacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isCoincidence) {
      alert(`${contact.name} is already in contacts`);
      throw new Error("Can't add contact. Server Error");
    }

    try {
      const response = await axios.post('/contacts', {
        name: contact.name,
        number: contact.number,
      });

      if (response.statusText !== 'Created') {
        throw new Error("Can't add contact. Server Error");
      }
      Notiflix.Notify.success('The new contact has been added', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '1500',
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      if (response.statusText !== 'OK') {
        throw new Error("Can't delete contact. Server Error");
      }
      Notiflix.Notify.warning('The new contact has been deleted', {
        width: '500px',
        position: 'center-center',
        fontSize: '25px',
        timeout: '1500',
      });
      return response.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
