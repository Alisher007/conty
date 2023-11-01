import React from 'react'
import { Button,Text, View } from 'react-native';
import AddContactForm from './AddContactForm';

const AddScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 6  }}>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <AddContactForm />
    </View>
    
  )
}

export default AddScreen