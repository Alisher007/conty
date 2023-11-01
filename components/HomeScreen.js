import React, {useEffect} from 'react'
import { Button, Text, View  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useGetContactQuery} from '../store/contactApiSlice'
import ContactList from './Contactlist';
import {addContactArray} from '../store/contactSlice'

const HomeScreen = ({ navigation }) => {
  const { contacts } = useSelector((state) => state.contacts);
  const { data, isLoading, isSuccess, isError  } = useGetContactQuery()
  const dispatch = useDispatch();

  const processContact = contact => ({
      name: `${contact.name.first} ${contact.name.last}`,
      phone: contact.phone
  });
  useEffect(() => {
    if (isSuccess) {
      dispatch(addContactArray(data.results.map(processContact)));
    }
  }, [isSuccess])

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading</Text>
      </View>
    )
  }
  if (isError) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>isError</Text>
      </View>
    )
  }

  if (isSuccess) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ margin: 6 }}>
          <Button
            title="Add"
            onPress={() => navigation.navigate('Add')}
          />
        </View>

        <ContactList contacts={contacts}/>
      </View>
    )
  }
  
}

export default HomeScreen